// Saving a phone's original software, and putting it back.
//
// A phone maker's full update (an "A/B OTA" zip) holds payload.bin: every
// partition, compressed in blocks. This reads the zip in place (it can be
// 9 GB, so nothing is loaded whole), checks it's the full update for the
// exact build the phone runs, and writes the partitions needed to go back
// into one restore zip on the computer. Nothing leaves the computer.
//
// Needs, as plain scripts on the page: bz2 (window.bz2), xz-decompress
// (window["xz-decompress"]) and hash-wasm's sha256 and crc32 (window.hashwasm).

export const RESTORE_FORMAT = "tome-original-1";

// The boot images a Tome OS install writes on a OnePlus phone (and LineageOS
// on others). Everything inside the super partition is saved too. Firmware
// (abl, xbl, modem, …) is left alone: Tome OS never writes it, and writing it
// is where a wrong file can break a phone for good.
export const BOOT_IMAGES = ["boot", "init_boot", "vendor_boot", "dtbo", "recovery", "vbmeta", "vbmeta_system", "vbmeta_vendor"];

const OP = { REPLACE: 0, REPLACE_BZ: 1, ZERO: 6, DISCARD: 7, REPLACE_XZ: 8 };
const OP_NAMES = { 0: "REPLACE", 1: "REPLACE_BZ", 2: "MOVE", 3: "BSDIFF", 4: "SOURCE_COPY", 5: "SOURCE_BSDIFF", 6: "ZERO", 7: "DISCARD", 8: "REPLACE_XZ", 9: "PUFFDIFF", 10: "BROTLI_BSDIFF", 11: "ZUCCHINI", 12: "LZ4DIFF_BSDIFF", 13: "LZ4DIFF_PUFFDIFF" };

// ----- Reading bytes -----

const bytesOf = async (blob, start, length) => new Uint8Array(await blob.slice(start, start + length).arrayBuffer());
const u16 = (b, o) => b[o] | (b[o + 1] << 8);
const u32 = (b, o) => (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0;
const u64 = (b, o) => u32(b, o) + u32(b, o + 4) * 2 ** 32;
const be32 = (b, o) => ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0;
const be64 = (b, o) => be32(b, o) * 2 ** 32 + be32(b, o + 4);
const hex = (b) => Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
const text = (b) => new TextDecoder().decode(b);

// ----- Zip (with zip64), read in place -----

// The zip's table of contents: name → { method, size, compressedSize, dataStart }.
export async function readZip(file) {
  const tailSize = Math.min(file.size, 65557 + 20);
  const tail = await bytesOf(file, file.size - tailSize, tailSize);
  let eocd = -1;
  for (let i = tail.length - 22; i >= 0; i--) if (u32(tail, i) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error("That file isn't a zip file, or it didn't finish downloading.");
  let count = u16(tail, eocd + 10), cdSize = u32(tail, eocd + 12), cdOffset = u32(tail, eocd + 16);
  // zip64: the locator sits just before the end record.
  if (eocd >= 20 && u32(tail, eocd - 20) === 0x07064b50) {
    const recOffset = u64(tail, eocd - 20 + 8);
    const rec = await bytesOf(file, recOffset, 56);
    if (u32(rec, 0) !== 0x06064b50) throw new Error("That zip file is damaged. Download it again.");
    count = u64(rec, 32); cdSize = u64(rec, 40); cdOffset = u64(rec, 48);
  }
  const cd = await bytesOf(file, cdOffset, cdSize);
  const entries = new Map();
  let p = 0;
  for (let n = 0; n < count; n++) {
    if (u32(cd, p) !== 0x02014b50) throw new Error("That zip file is damaged. Download it again.");
    const method = u16(cd, p + 10);
    let compressedSize = u32(cd, p + 20), size = u32(cd, p + 24);
    const nameLen = u16(cd, p + 28), extraLen = u16(cd, p + 30), commentLen = u16(cd, p + 32);
    let localOffset = u32(cd, p + 42);
    const name = text(cd.subarray(p + 46, p + 46 + nameLen));
    // zip64 extra field: the 0xFFFFFFFF fields, in order.
    let e = p + 46 + nameLen;
    const extraEnd = e + extraLen;
    while (e + 4 <= extraEnd) {
      const id = u16(cd, e), len = u16(cd, e + 2);
      if (id === 0x0001) {
        let q = e + 4;
        if (size === 0xffffffff) { size = u64(cd, q); q += 8; }
        if (compressedSize === 0xffffffff) { compressedSize = u64(cd, q); q += 8; }
        if (localOffset === 0xffffffff) { localOffset = u64(cd, q); q += 8; }
      }
      e += 4 + len;
    }
    entries.set(name, { name, method, size, compressedSize, localOffset });
    p = extraEnd + commentLen;
  }
  return {
    entries,
    // Where an entry's bytes start: past its local header, whose name and extra
    // lengths can differ from the central directory's.
    async dataStart(entry) {
      if (entry.dataStart !== undefined) return entry.dataStart;
      const h = await bytesOf(file, entry.localOffset, 30);
      if (u32(h, 0) !== 0x04034b50) throw new Error("That zip file is damaged. Download it again.");
      entry.dataStart = entry.localOffset + 30 + u16(h, 26) + u16(h, 28);
      return entry.dataStart;
    },
    async readText(name) {
      const entry = entries.get(name);
      if (!entry) return null;
      const start = await this.dataStart(entry);
      const raw = file.slice(start, start + entry.compressedSize);
      if (entry.method === 0) return raw.text();
      if (entry.method === 8) return new Response(raw.stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
      throw new Error(`${name} is packed in a way this page can't read.`);
    },
  };
}

// ----- payload.bin -----

// A small protobuf reader: field number → list of values (numbers, or bytes
// for length-delimited fields).
function proto(buf) {
  const fields = new Map();
  let i = 0;
  const varint = () => {
    let result = 0, mul = 1, b;
    do { b = buf[i++]; result += (b & 0x7f) * mul; mul *= 128; } while (b & 0x80);
    return result;
  };
  while (i < buf.length) {
    const key = varint(), field = Math.floor(key / 8), wire = key & 7;
    let value;
    if (wire === 0) value = varint();
    else if (wire === 2) { const len = varint(); value = buf.subarray(i, i + len); i += len; }
    else if (wire === 1) { value = buf.subarray(i, i + 8); i += 8; }
    else if (wire === 5) { value = buf.subarray(i, i + 4); i += 4; }
    else throw new Error("The update's table of contents is damaged.");
    if (!fields.has(field)) fields.set(field, []);
    fields.get(field).push(value);
  }
  const one = (f, d) => (fields.has(f) ? fields.get(f)[0] : d);
  return { one, all: (f) => fields.get(f) || [], str: (f) => text(one(f, new Uint8Array())) };
}

// payload.bin's table of contents: which partitions it holds, and how each
// is built from its compressed blocks.
export async function readPayload(file, zip) {
  const entry = zip.entries.get("payload.bin");
  if (!entry) throw new Error("There's no payload.bin in that zip, so it isn't a full update for this kind of phone.");
  if (entry.method !== 0) throw new Error("payload.bin is compressed inside the zip, which this page can't read in place.");
  const base = await zip.dataStart(entry);
  const head = await bytesOf(file, base, 24);
  if (text(head.subarray(0, 4)) !== "CrAU") throw new Error("payload.bin isn't an Android update payload.");
  const version = be64(head, 4);
  if (version !== 2) throw new Error(`This payload is version ${version}; this page reads version 2.`);
  const manifestSize = be64(head, 12), sigSize = be32(head, 20);
  const m = proto(await bytesOf(file, base + 24, manifestSize));
  const blockSize = m.one(3, 4096);
  const dataBase = base + 24 + manifestSize + sigSize;
  const partitions = m.all(13).map((raw) => {
    const p = proto(raw);
    const info = proto(p.one(7, new Uint8Array()));
    const ops = p.all(8).map((rawOp) => {
      const o = proto(rawOp);
      return {
        type: o.one(1, 0), offset: o.one(2, 0), length: o.one(3, 0),
        dst: o.all(6).map((x) => { const e = proto(x); return { start: e.one(1, 0), blocks: e.one(2, 0) }; }),
        sha256: o.all(8).length ? hex(o.one(8)) : null,
      };
    });
    return { name: p.str(1), size: info.one(1, 0), sha256: hex(info.one(2, new Uint8Array())), ops };
  });
  // Which partitions live inside super, in which group.
  const groups = [];
  const dyn = m.one(15, null);
  if (dyn) for (const g of proto(dyn).all(1)) {
    const gp = proto(g);
    groups.push({ name: gp.str(1), size: gp.one(2, 0), partitions: gp.all(3).map((n) => text(n)) });
  }
  return { blockSize, dataBase, partitions, groups, minorVersion: m.one(12, 0) };
}

// Checks a zip is the full update for exactly the build the phone runs.
// `phone` is what the phone reported (ro.build.fingerprint, ro.product.device…).
export async function checkUpdate(file, phone) {
  const zip = await readZip(file);
  const meta = {};
  const raw = await zip.readText("META-INF/com/android/metadata");
  if (raw) for (const line of raw.split("\n")) { const i = line.indexOf("="); if (i > 0) meta[line.slice(0, i)] = line.slice(i + 1).trim(); }
  if (!raw || !zip.entries.has("payload.bin")) throw new Error("That isn't a full system update for this kind of phone. Choose the OxygenOS full update zip.");
  if (meta["pre-build"] || meta["pre-build-incremental"]) throw new Error("That's an incremental update, which only holds changes. Choose the full update for your version.");
  if (meta["ota-type"] && meta["ota-type"] !== "AB") throw new Error("That update isn't the kind this page reads (A/B).");
  const post = meta["post-build"] || "";
  if (phone && phone.fingerprint && post && !post.split("|").includes(phone.fingerprint)) {
    throw new Error(`That update is for a different version.\nThe file: ${post}\nYour phone: ${phone.fingerprint}\nChoose the full update for exactly your phone's version.`);
  }
  const payload = await readPayload(file, zip);
  const logical = new Set(payload.groups.flatMap((g) => g.partitions));
  const save = payload.partitions.filter((p) => logical.has(p.name) || BOOT_IMAGES.includes(p.name));
  const skipped = payload.partitions.filter((p) => !save.includes(p)).map((p) => p.name);
  for (const p of save) for (const op of p.ops) {
    if (![OP.REPLACE, OP.REPLACE_BZ, OP.REPLACE_XZ, OP.ZERO, OP.DISCARD].includes(op.type)) {
      throw new Error(`${p.name} is stored as ${OP_NAMES[op.type] || op.type}, which only a step-by-step update uses. Choose the full update.`);
    }
  }
  return { zip, meta, payload, save, skipped, logical };
}

// ----- Building a partition from its blocks -----

async function decode(file, payload, op, outBytes) {
  if (op.type === OP.ZERO || op.type === OP.DISCARD) return null; // zeros
  const data = await bytesOf(file, payload.dataBase + op.offset, op.length);
  if (op.sha256) {
    const h = await window.hashwasm.sha256(data);
    if (h !== op.sha256) throw new Error("A piece of the update didn't match its checksum. The file is damaged; download it again.");
  }
  let out;
  if (op.type === OP.REPLACE) out = data;
  else if (op.type === OP.REPLACE_BZ) out = window.bz2.decompress(data);
  else if (op.type === OP.REPLACE_XZ) {
    const { XzReadableStream } = window["xz-decompress"];
    out = new Uint8Array(await new Response(new XzReadableStream(new Blob([data]).stream())).arrayBuffer());
  } else throw new Error(`Unsupported piece type ${op.type}.`);
  if (out.length > outBytes) out = out.subarray(0, outBytes);
  return out;
}

// Writes one partition through `sink`, block by block, and checks it against
// the update's own checksum for it. As a raw image, or as an Android sparse
// image (for the big partitions in super, so they can be flashed in pieces
// without loading them whole).
async function buildPartition(file, payload, part, sink, { sparse, onProgress }) {
  const bs = payload.blockSize;
  const totalBlocks = Math.ceil(part.size / bs);
  const ops = part.ops.flatMap((op) => op.dst.length ? [op] : []).sort((a, b) => a.dst[0].start - b.dst[0].start);
  // A sparse image's header holds its chunk count, worked out here from the
  // table of contents before anything is decoded (the zip can't be read back
  // while it's being written).
  let planned = 0;
  {
    let b = 0;
    for (const op of ops) for (const e of op.dst) {
      if (e.start > b) planned++;
      planned++;
      b = e.start + e.blocks;
    }
    if (b < totalBlocks) planned++;
  }
  const hash = await window.hashwasm.createSHA256();
  hash.init();
  let block = 0, written = 0, chunks = 0;
  const zeros = new Uint8Array(1 << 20);
  const hashZeros = (n) => { while (n > 0) { const k = Math.min(n, zeros.length); hash.update(zeros.subarray(0, k)); n -= k; } };
  const sparseHeader = (chunkCount) => {
    const h = new DataView(new ArrayBuffer(28));
    h.setUint32(0, 0xed26ff3a, true); h.setUint16(4, 1, true); h.setUint16(6, 0, true);
    h.setUint16(8, 28, true); h.setUint16(10, 12, true); h.setUint32(12, bs, true);
    h.setUint32(16, totalBlocks, true); h.setUint32(20, chunkCount, true); h.setUint32(24, 0, true);
    return new Uint8Array(h.buffer);
  };
  const chunkHeader = (type, blocks, totalSize) => {
    const h = new DataView(new ArrayBuffer(12));
    h.setUint16(0, type, true); h.setUint16(2, 0, true); h.setUint32(4, blocks, true); h.setUint32(8, totalSize, true);
    return new Uint8Array(h.buffer);
  };
  // Zero blocks: a FILL chunk of 0 (sparse), or real zeros (raw).
  const putZeros = async (blocks) => {
    if (!blocks) return;
    hashZeros(blocks * bs);
    if (sparse) {
      const fill = new Uint8Array(4);
      await sink.write(chunkHeader(0xcac2, blocks, 16)); await sink.write(fill); chunks++;
    } else {
      let n = blocks * bs;
      while (n > 0) { const k = Math.min(n, zeros.length); await sink.write(zeros.subarray(0, k)); n -= k; }
    }
    block += blocks;
  };
  const putData = async (data) => {
    hash.update(data);
    if (sparse) { await sink.write(chunkHeader(0xcac1, data.length / bs, 12 + data.length)); chunks++; }
    await sink.write(data);
    block += data.length / bs;
  };
  if (sparse) await sink.write(sparseHeader(planned));
  for (const op of ops) {
    const blocks = op.dst.reduce((t, e) => t + e.blocks, 0);
    const out = await decode(file, payload, op, blocks * bs);
    let at = 0;
    for (const e of op.dst) {
      if (e.start < block) throw new Error(`${part.name}'s pieces overlap, which this page can't put together.`);
      await putZeros(e.start - block);
      const n = e.blocks * bs;
      if (out === null) await putZeros(e.blocks);
      else {
        let piece = out.subarray(at, at + n);
        if (piece.length < n) { const padded = new Uint8Array(n); padded.set(piece); piece = padded; }
        await putData(piece);
      }
      at += n;
    }
    written += blocks;
    onProgress?.(written / totalBlocks);
  }
  await putZeros(totalBlocks - block);
  const sha256 = hash.digest("hex");
  if (part.sha256 && sha256 !== part.sha256) throw new Error(`${part.name} didn't come out matching the update's checksum. The file may be damaged; download it again.`);
  if (sparse && chunks !== planned) throw new Error(`${part.name} came out in ${chunks} pieces instead of ${planned}. Please report this.`);
  return { sha256 };
}

// ----- Writing the restore zip (zip64, stored) -----

// Writes to a FileSystemWritableFileStream, seeking back to fill in each
// file's size and CRC once it's written.
export class ZipWriter {
  constructor(writable) { this.w = writable; this.pos = 0; this.entries = []; }
  async raw(bytes) { await this.w.write({ type: "write", position: this.pos, data: bytes }); this.pos += bytes.length; }
  async addFile(name, produce) {
    const nameBytes = new TextEncoder().encode(name);
    const offset = this.pos;
    const header = new DataView(new ArrayBuffer(30 + nameBytes.length + 20));
    const fill = (crc, size) => {
      header.setUint32(0, 0x04034b50, true); header.setUint16(4, 45, true); header.setUint16(6, 0x0800, true);
      header.setUint16(8, 0, true); header.setUint32(10, 0, true); header.setUint32(14, crc, true);
      header.setUint32(18, 0xffffffff, true); header.setUint32(22, 0xffffffff, true);
      header.setUint16(26, nameBytes.length, true); header.setUint16(28, 20, true);
      new Uint8Array(header.buffer).set(nameBytes, 30);
      const x = 30 + nameBytes.length;
      header.setUint16(x, 0x0001, true); header.setUint16(x + 2, 16, true);
      header.setBigUint64(x + 4, BigInt(size), true); header.setBigUint64(x + 12, BigInt(size), true);
      return new Uint8Array(header.buffer);
    };
    await this.raw(fill(0, 0));
    const start = this.pos;
    const crc = await window.hashwasm.createCRC32();
    crc.init();
    const sink = { write: async (bytes) => { crc.update(bytes); await this.raw(bytes); } };
    await produce(sink);
    const size = this.pos - start;
    const crcValue = parseInt(crc.digest("hex"), 16) >>> 0;
    await this.w.write({ type: "write", position: offset, data: fill(crcValue, size) });
    this.entries.push({ nameBytes, offset, size, crc: crcValue });
  }
  async addText(name, value) {
    const bytes = new TextEncoder().encode(value);
    await this.addFile(name, async (sink) => { await sink.write(bytes); });
  }
  async finish() {
    const cdStart = this.pos;
    for (const e of this.entries) {
      const h = new DataView(new ArrayBuffer(46 + e.nameBytes.length + 28));
      h.setUint32(0, 0x02014b50, true); h.setUint16(4, 45, true); h.setUint16(6, 45, true); h.setUint16(8, 0x0800, true);
      h.setUint16(10, 0, true); h.setUint32(12, 0, true); h.setUint32(16, e.crc, true);
      h.setUint32(20, 0xffffffff, true); h.setUint32(24, 0xffffffff, true);
      h.setUint16(28, e.nameBytes.length, true); h.setUint16(30, 28, true); h.setUint16(32, 0, true);
      h.setUint16(34, 0, true); h.setUint16(36, 0, true); h.setUint32(38, 0, true); h.setUint32(42, 0xffffffff, true);
      new Uint8Array(h.buffer).set(e.nameBytes, 46);
      const x = 46 + e.nameBytes.length;
      h.setUint16(x, 0x0001, true); h.setUint16(x + 2, 24, true);
      h.setBigUint64(x + 4, BigInt(e.size), true); h.setBigUint64(x + 12, BigInt(e.size), true); h.setBigUint64(x + 20, BigInt(e.offset), true);
      await this.raw(new Uint8Array(h.buffer));
    }
    const cdSize = this.pos - cdStart, z64 = this.pos;
    const r = new DataView(new ArrayBuffer(56 + 20 + 22));
    r.setUint32(0, 0x06064b50, true); r.setBigUint64(4, 44n, true); r.setUint16(12, 45, true); r.setUint16(14, 45, true);
    r.setUint32(16, 0, true); r.setUint32(20, 0, true);
    r.setBigUint64(24, BigInt(this.entries.length), true); r.setBigUint64(32, BigInt(this.entries.length), true);
    r.setBigUint64(40, BigInt(cdSize), true); r.setBigUint64(48, BigInt(cdStart), true);
    r.setUint32(56, 0x07064b50, true); r.setUint32(60, 0, true); r.setBigUint64(64, BigInt(z64), true); r.setUint32(72, 1, true);
    r.setUint32(76, 0x06054b50, true); r.setUint16(80, 0, true); r.setUint16(82, 0, true);
    r.setUint16(84, 0xffff, true); r.setUint16(86, 0xffff, true); r.setUint32(88, 0xffffffff, true); r.setUint32(92, 0xffffffff, true); r.setUint16(96, 0, true);
    await this.raw(new Uint8Array(r.buffer));
    await this.w.close();
  }
}

// ----- Saving -----

// Extracts the partitions and writes the restore zip. `handle` is a
// FileSystemFileHandle from showSaveFilePicker. Returns the zip's SHA-256.
export async function saveRestore(file, checked, phone, handle, onProgress) {
  const { payload, save, skipped } = checked;
  const writable = await handle.createWritable();
  const zip = new ZipWriter(writable);
  const total = save.reduce((t, p) => t + p.size, 0);
  let done = 0;
  const images = [];
  try {
    for (const part of save) {
      const sparse = checked.logical.has(part.name);
      const fileName = `${part.name}.img`;
      let result;
      await zip.addFile(fileName, async (sink) => {
        result = await buildPartition(file, payload, part, sink, {
          sparse,
          onProgress: (f) => onProgress?.({ part: part.name, fraction: (done + f * part.size) / total }),
        });
      });
      done += part.size;
      images.push({ name: part.name, file: fileName, size: part.size, sha256: result.sha256, sparse, logical: sparse });
    }
    const note = {
      format: RESTORE_FORMAT,
      saved: new Date().toISOString(),
      phone: {
        manufacturer: phone.manufacturer, model: phone.model, device: phone.device,
        version: phone.display, otaVersion: phone.ota, fingerprint: phone.fingerprint,
        android: phone.android, securityPatch: phone.patch, region: phone.region, slot: phone.slot,
      },
      update: { file: file.name, size: file.size, postBuild: checked.meta["post-build"] || "" },
      groups: payload.groups,
      images,
      notSaved: skipped,
    };
    await zip.addText("restore.json", JSON.stringify(note, null, 2) + "\n");
    await zip.addText("README.txt", readme(note));
    await zip.finish();
  } catch (e) {
    await writable.abort().catch(() => {});
    throw e;
  }
  // The whole file's checksum, read back once it's written.
  onProgress?.({ part: "checksum", fraction: 1 });
  const saved = await handle.getFile();
  const hash = await window.hashwasm.createSHA256();
  hash.init();
  for (let at = 0; at < saved.size; at += 8 << 20) hash.update(await bytesOf(saved, at, Math.min(8 << 20, saved.size - at)));
  return hash.digest("hex");
}

function readme(n) {
  return [
    "Your phone's original software, saved by tome-os.com",
    "",
    `Phone: ${n.phone.manufacturer || ""} ${n.phone.model} (${n.phone.device})`,
    `Version: ${n.phone.version}`,
    `Build: ${n.phone.otaVersion}`,
    `Fingerprint: ${n.phone.fingerprint}`,
    `Saved: ${n.saved}`,
    "",
    "It holds the boot images and every partition inside super, taken from",
    `the official full update ${n.update.file}. Firmware (${n.notSaved.join(", ")})`,
    "isn't included: installing Tome OS doesn't change it.",
    "",
    "The partitions inside super are Android sparse images; fastboot writes them",
    "as they are. restore.json lists every image with its SHA-256 (of the",
    "unpacked partition, which is what the phone ends up holding).",
    "",
    "To go back, use the \"Go back to original software\" page on tome-os.com",
    "with this file.",
    "Keep this zip and its .sha256 file somewhere safe.",
    "",
  ].join("\n");
}

// ----- Reading a restore zip back -----

export async function readRestore(file) {
  const zip = await readZip(file);
  const raw = await zip.readText("restore.json");
  if (!raw) throw new Error("That isn't a restore file from this page. Choose the zip it saved.");
  const note = JSON.parse(raw);
  if (note.format !== RESTORE_FORMAT) throw new Error("That restore file is from a different version of this page.");
  for (const img of note.images) {
    const entry = zip.entries.get(img.file);
    if (!entry) throw new Error(`The restore file is missing ${img.file}. It may not have finished saving.`);
    const start = await zip.dataStart(entry);
    img.blob = file.slice(start, start + entry.compressedSize);
  }
  return note;
}

// The SHA-256 of what an image puts on the phone (a sparse image unpacked),
// to compare with restore.json before writing anything.
export async function imageSha256(img, onProgress) {
  const hash = await window.hashwasm.createSHA256();
  hash.init();
  const blob = img.blob;
  if (!img.sparse) {
    for (let at = 0; at < blob.size; at += 8 << 20) { hash.update(await bytesOf(blob, at, Math.min(8 << 20, blob.size - at))); onProgress?.(at / blob.size); }
    return hash.digest("hex");
  }
  const h = await bytesOf(blob, 0, 28);
  if (u32(h, 0) !== 0xed26ff3a) throw new Error(`${img.file} isn't a sparse image.`);
  const bs = u32(h, 12), chunks = u32(h, 20);
  let at = u16(h, 8);
  const zeros = new Uint8Array(1 << 20);
  for (let c = 0; c < chunks; c++) {
    const ch = await bytesOf(blob, at, 12);
    const type = u16(ch, 0), blocks = u32(ch, 4), totalSize = u32(ch, 8);
    if (type === 0xcac1) {
      for (let p = 0; p < blocks * bs; p += 8 << 20) hash.update(await bytesOf(blob, at + 12 + p, Math.min(8 << 20, blocks * bs - p)));
    } else if (type === 0xcac2) {
      const value = await bytesOf(blob, at + 12, 4);
      if (value.some((x) => x !== 0)) throw new Error(`${img.file} has a fill this page doesn't expect.`);
      let n = blocks * bs;
      while (n > 0) { const k = Math.min(n, zeros.length); hash.update(zeros.subarray(0, k)); n -= k; }
    } else if (type === 0xcac3) {
      throw new Error(`${img.file} has a gap, which a saved image shouldn't have.`);
    }
    at += totalSize;
    onProgress?.(at / blob.size);
  }
  return hash.digest("hex");
}
