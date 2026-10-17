/*
 * Tango ADB (npm @yume-chan/adb 2.6.4, @yume-chan/adb-daemon-webusb 2.3.2,
 * @yume-chan/adb-credential-web 2.1.0, https://github.com/yume-chan/ya-webadb,
 * MIT licence) and zip.js (npm @zip.js/zip.js 2.18.2, BSD licence), bundled
 * for Tome OS's web installer. Licences are in adb-zip-LICENSE.txt. Nothing is
 * changed. The installer's backup and "move your files back" steps and the
 * "Collect phone logs" page use it to talk to a phone over USB debugging;
 * it's loaded only when one of them connects.
 *
 * Rebuilt with esbuild 0.28 from this entry file:
 *   export { Adb, AdbDaemonTransport } from "@yume-chan/adb";
 *   export { AdbDaemonWebUsbDevice, AdbDaemonWebUsbDeviceManager } from "@yume-chan/adb-daemon-webusb";
 *   export { default as AdbWebCredentialStore } from "@yume-chan/adb-credential-web";
 *   export { BlobReader, ZipReader, ZipWriter, configure as configureZip } from "@zip.js/zip.js/lib/zip-core-native.js";
 * esbuild entry.js --bundle --format=esm --target=es2022 --legal-comments=none
 */
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/@zip.js/zip.js/lib/core/constants.js
var MAX_32_BITS, MAX_16_BITS, MAX_8_BITS, COMPRESSION_METHOD_DEFLATE, COMPRESSION_METHOD_DEFLATE_64, COMPRESSION_METHOD_STORE, COMPRESSION_METHOD_AES, LOCAL_FILE_HEADER_SIGNATURE, SPLIT_ZIP_FILE_SIGNATURE, TEMPORARY_SPLIT_ZIP_FILE_SIGNATURE, DATA_DESCRIPTOR_RECORD_SIGNATURE, ARCHIVE_EXTRA_DATA_SIGNATURE, DIGITAL_SIGNATURE_RECORD_SIGNATURE, CENTRAL_FILE_HEADER_SIGNATURE, END_OF_CENTRAL_DIR_SIGNATURE, ZIP64_END_OF_CENTRAL_DIR_SIGNATURE, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE, CENTRAL_FILE_HEADER_LENGTH, END_OF_CENTRAL_DIR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH, DATA_DESCRIPTOR_RECORD_LENGTH, DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH, DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH, SPLIT_ZIP_FILE_SIGNATURE_LENGTH, EXTRAFIELD_TYPE_ZIP64, EXTRAFIELD_TYPE_AES, EXTRAFIELD_TYPE_NTFS, EXTRAFIELD_TYPE_NTFS_TAG1, EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP, EXTRAFIELD_TYPE_UNICODE_PATH, EXTRAFIELD_TYPE_UNICODE_COMMENT, EXTRAFIELD_TYPE_USDZ, EXTRAFIELD_TYPE_INFOZIP, EXTRAFIELD_TYPE_UNIX, EXTRAFIELD_TYPE_UNIX_TYPE1, EXTRAFIELD_TYPE_PKWARE_UNIX, BITFLAG_ENCRYPTED, BITFLAG_LEVEL, BITFLAG_LEVEL_MAX_MASK, BITFLAG_LEVEL_FAST_MASK, BITFLAG_LEVEL_SUPER_FAST_MASK, BITFLAG_DATA_DESCRIPTOR, BITFLAG_COMPRESSED_PATCHED_DATA, BITFLAG_STRONG_ENCRYPTION, BITFLAG_LANG_ENCODING_FLAG, BITFLAG_MASKED_LOCAL_HEADERS, FILE_ATTR_MSDOS_DIR_MASK, FILE_ATTR_MSDOS_READONLY_MASK, FILE_ATTR_MSDOS_HIDDEN_MASK, FILE_ATTR_MSDOS_SYSTEM_MASK, FILE_ATTR_MSDOS_ARCHIVE_MASK, FILE_ATTR_UNIX_TYPE_MASK, FILE_ATTR_UNIX_TYPE_DIR, FILE_ATTR_UNIX_TYPE_SYMLINK, FILE_ATTR_UNIX_TYPE_FILE, FILE_ATTR_UNIX_EXECUTABLE_MASK, FILE_ATTR_UNIX_DEFAULT_MASK, FILE_ATTR_UNIX_SETUID_MASK, FILE_ATTR_UNIX_SETGID_MASK, FILE_ATTR_UNIX_STICKY_MASK, VERSION_STORE, VERSION_DEFLATE, VERSION_ZIP64, VERSION_AES, VERSION_MADE_BY_MSDOS, VERSION_MADE_BY_UNIX, DIRECTORY_SIGNATURE, HEADER_SIZE, HEADER_OFFSET_VERSION, HEADER_OFFSET_SIGNATURE, HEADER_OFFSET_COMPRESSED_SIZE, HEADER_OFFSET_UNCOMPRESSED_SIZE, HEADER_OFFSET_FILENAME_LENGTH, HEADER_OFFSET_EXTRAFIELD_LENGTH, LOCAL_HEADER_COMMON_OFFSET, MAX_DATE, MIN_DATE, UNDEFINED_VALUE, INFINITY_VALUE, UNDEFINED_TYPE, FUNCTION_TYPE, OBJECT_TYPE, STRING_TYPE, NUMBER_TYPE, BOOLEAN_TYPE, EMPTY_UINT8_ARRAY, SYMBOL_ASYNC_DISPOSE;
var init_constants = __esm({
  "node_modules/@zip.js/zip.js/lib/core/constants.js"() {
    MAX_32_BITS = 4294967295;
    MAX_16_BITS = 65535;
    MAX_8_BITS = 255;
    COMPRESSION_METHOD_DEFLATE = 8;
    COMPRESSION_METHOD_DEFLATE_64 = 9;
    COMPRESSION_METHOD_STORE = 0;
    COMPRESSION_METHOD_AES = 99;
    LOCAL_FILE_HEADER_SIGNATURE = 67324752;
    SPLIT_ZIP_FILE_SIGNATURE = 134695760;
    TEMPORARY_SPLIT_ZIP_FILE_SIGNATURE = 808471376;
    DATA_DESCRIPTOR_RECORD_SIGNATURE = SPLIT_ZIP_FILE_SIGNATURE;
    ARCHIVE_EXTRA_DATA_SIGNATURE = 134630224;
    DIGITAL_SIGNATURE_RECORD_SIGNATURE = 84233040;
    CENTRAL_FILE_HEADER_SIGNATURE = 33639248;
    END_OF_CENTRAL_DIR_SIGNATURE = 101010256;
    ZIP64_END_OF_CENTRAL_DIR_SIGNATURE = 101075792;
    ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE = 117853008;
    CENTRAL_FILE_HEADER_LENGTH = 46;
    END_OF_CENTRAL_DIR_LENGTH = 22;
    ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH = 20;
    ZIP64_END_OF_CENTRAL_DIR_LENGTH = 56;
    ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH = END_OF_CENTRAL_DIR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LENGTH;
    DATA_DESCRIPTOR_RECORD_LENGTH = 12;
    DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH = 20;
    DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH = 4;
    SPLIT_ZIP_FILE_SIGNATURE_LENGTH = 4;
    EXTRAFIELD_TYPE_ZIP64 = 1;
    EXTRAFIELD_TYPE_AES = 39169;
    EXTRAFIELD_TYPE_NTFS = 10;
    EXTRAFIELD_TYPE_NTFS_TAG1 = 1;
    EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP = 21589;
    EXTRAFIELD_TYPE_UNICODE_PATH = 28789;
    EXTRAFIELD_TYPE_UNICODE_COMMENT = 25461;
    EXTRAFIELD_TYPE_USDZ = 6534;
    EXTRAFIELD_TYPE_INFOZIP = 30837;
    EXTRAFIELD_TYPE_UNIX = 30805;
    EXTRAFIELD_TYPE_UNIX_TYPE1 = 22613;
    EXTRAFIELD_TYPE_PKWARE_UNIX = 13;
    BITFLAG_ENCRYPTED = 1;
    BITFLAG_LEVEL = 6;
    BITFLAG_LEVEL_MAX_MASK = 2;
    BITFLAG_LEVEL_FAST_MASK = 4;
    BITFLAG_LEVEL_SUPER_FAST_MASK = 6;
    BITFLAG_DATA_DESCRIPTOR = 8;
    BITFLAG_COMPRESSED_PATCHED_DATA = 32;
    BITFLAG_STRONG_ENCRYPTION = 64;
    BITFLAG_LANG_ENCODING_FLAG = 2048;
    BITFLAG_MASKED_LOCAL_HEADERS = 8192;
    FILE_ATTR_MSDOS_DIR_MASK = 16;
    FILE_ATTR_MSDOS_READONLY_MASK = 1;
    FILE_ATTR_MSDOS_HIDDEN_MASK = 2;
    FILE_ATTR_MSDOS_SYSTEM_MASK = 4;
    FILE_ATTR_MSDOS_ARCHIVE_MASK = 32;
    FILE_ATTR_UNIX_TYPE_MASK = 61440;
    FILE_ATTR_UNIX_TYPE_DIR = 16384;
    FILE_ATTR_UNIX_TYPE_SYMLINK = 40960;
    FILE_ATTR_UNIX_TYPE_FILE = 32768;
    FILE_ATTR_UNIX_EXECUTABLE_MASK = 73;
    FILE_ATTR_UNIX_DEFAULT_MASK = 420;
    FILE_ATTR_UNIX_SETUID_MASK = 2048;
    FILE_ATTR_UNIX_SETGID_MASK = 1024;
    FILE_ATTR_UNIX_STICKY_MASK = 512;
    VERSION_STORE = 10;
    VERSION_DEFLATE = 20;
    VERSION_ZIP64 = 45;
    VERSION_AES = 51;
    VERSION_MADE_BY_MSDOS = 20;
    VERSION_MADE_BY_UNIX = 768;
    DIRECTORY_SIGNATURE = "/";
    HEADER_SIZE = 30;
    HEADER_OFFSET_VERSION = 0;
    HEADER_OFFSET_SIGNATURE = 10;
    HEADER_OFFSET_COMPRESSED_SIZE = 14;
    HEADER_OFFSET_UNCOMPRESSED_SIZE = 18;
    HEADER_OFFSET_FILENAME_LENGTH = 22;
    HEADER_OFFSET_EXTRAFIELD_LENGTH = 24;
    LOCAL_HEADER_COMMON_OFFSET = 4;
    MAX_DATE = new Date(2107, 11, 31, 23, 59, 58);
    MIN_DATE = new Date(1980, 0, 1);
    UNDEFINED_VALUE = void 0;
    INFINITY_VALUE = Infinity;
    UNDEFINED_TYPE = "undefined";
    FUNCTION_TYPE = "function";
    OBJECT_TYPE = "object";
    STRING_TYPE = "string";
    NUMBER_TYPE = "number";
    BOOLEAN_TYPE = "boolean";
    EMPTY_UINT8_ARRAY = new Uint8Array();
    SYMBOL_ASYNC_DISPOSE = Symbol.asyncDispose || /* @__PURE__ */ Symbol();
  }
});

// node_modules/@zip.js/zip.js/lib/core/options.js
function checkFunctionOption(value) {
  if (value && typeof value != FUNCTION_TYPE) {
    throw new Error(ERR_INVALID_FUNCTION_OPTION);
  }
  return value;
}
function checkSignalOption(signal) {
  if (signal && (typeof signal.addEventListener != FUNCTION_TYPE || typeof signal.aborted != BOOLEAN_TYPE)) {
    throw new Error(ERR_INVALID_SIGNAL);
  }
  return signal || UNDEFINED_VALUE;
}
function throwIfAborted(signal) {
  if (signal && signal.aborted) {
    throw signal.reason === UNDEFINED_VALUE ? new DOMException(ERR_ABORTED, ABORT_ERROR_NAME) : signal.reason;
  }
}
function checkPasswordOption(password, rawPassword) {
  if (password && typeof password != STRING_TYPE || rawPassword && !(rawPassword instanceof Uint8Array)) {
    throw new Error(ERR_INVALID_PASSWORD_TYPE);
  }
}
function checkPassThroughOption(passThrough) {
  if (passThrough !== UNDEFINED_VALUE && typeof passThrough != BOOLEAN_TYPE && passThrough !== PASS_THROUGH_COMPRESSED) {
    throw new Error(ERR_INVALID_PASS_THROUGH_VALUE);
  }
  return passThrough;
}
function checkInteger(value, maxValue, errorMessage) {
  if (!Number.isInteger(value) || value < 0 || value > maxValue) {
    throw new Error(errorMessage);
  }
}
function checkIntegerOption(value, maxValue, errorMessage) {
  if (value !== UNDEFINED_VALUE) {
    checkInteger(value, maxValue, errorMessage);
  }
}
function toNumber(value) {
  return typeof value == STRING_TYPE && value.trim() ? Number(value) : value;
}
var OPTION_FILENAME_ENCODING, OPTION_COMMENT_ENCODING, OPTION_DECODE_TEXT, OPTION_EXTRACT_PREPENDED_DATA, OPTION_EXTRACT_APPENDED_DATA, OPTION_PASSWORD, OPTION_RAW_PASSWORD, OPTION_PASS_THROUGH, OPTION_SIGNAL, OPTION_CHECK_PASSWORD_ONLY, OPTION_CHECK_OVERLAPPING_ENTRY_ONLY, OPTION_CHECK_OVERLAPPING_ENTRY, OPTION_CHECK_AMBIGUITY, OPTION_CHECK_LOCAL_DIRECTORY, OPTION_CHECK_LOCAL_FILENAME, OPTION_CHECK_SIGNATURE, OPTION_CHECK_CRC32, OPTION_CHECK_AUTHENTICATION_CODE, OPTION_USE_WEB_WORKERS, OPTION_USE_COMPRESSION_STREAM, OPTION_TRANSFER_STREAMS, OPTION_PREVENT_CLOSE, OPTION_ENCRYPTION_STRENGTH, OPTION_EXTENDED_TIMESTAMP, OPTION_NTFS_TIMESTAMP, OPTION_KEEP_ORDER, OPTION_LEVEL, OPTION_BUFFERED_WRITE, OPTION_CREATE_TEMP_STREAM, OPTION_DATA_DESCRIPTOR_SIGNATURE, OPTION_USE_UNICODE_FILE_NAMES, OPTION_DATA_DESCRIPTOR, OPTION_SUPPORT_ZIP64_SPLIT_FILE, OPTION_ENCODE_TEXT, OPTION_OFFSET, OPTION_USDZ, OPTION_UNIX_EXTRA_FIELD_TYPE, OPTION_LOCAL_EXTRA_FIELD, OPTION_CENTRAL_EXTRA_FIELD, OPTION_STRICTNESS, OPTION_FILENAME_VALIDATION, OPTION_NORMALIZE_FILENAME, OPTION_MAX_APPENDED_DATA_SIZE, OPTION_DECRYPT_CENTRAL_DIRECTORY, OPTION_SIGN_CENTRAL_DIRECTORY, OPTION_ENTRY, TEXT_TYPE_FILENAME, TEXT_TYPE_COMMENT, STRICTNESS_STRICT, STRICTNESS_BALANCED, STRICTNESS_TOLERANT, PASS_THROUGH_COMPRESSED, ERR_INVALID_FUNCTION_OPTION, ERR_INVALID_SIGNAL, ERR_INVALID_PASSWORD_TYPE, ERR_INVALID_PASS_THROUGH_VALUE, ERR_ABORTED, ABORT_ERROR_NAME;
var init_options = __esm({
  "node_modules/@zip.js/zip.js/lib/core/options.js"() {
    init_constants();
    OPTION_FILENAME_ENCODING = "filenameEncoding";
    OPTION_COMMENT_ENCODING = "commentEncoding";
    OPTION_DECODE_TEXT = "decodeText";
    OPTION_EXTRACT_PREPENDED_DATA = "extractPrependedData";
    OPTION_EXTRACT_APPENDED_DATA = "extractAppendedData";
    OPTION_PASSWORD = "password";
    OPTION_RAW_PASSWORD = "rawPassword";
    OPTION_PASS_THROUGH = "passThrough";
    OPTION_SIGNAL = "signal";
    OPTION_CHECK_PASSWORD_ONLY = "checkPasswordOnly";
    OPTION_CHECK_OVERLAPPING_ENTRY_ONLY = "checkOverlappingEntryOnly";
    OPTION_CHECK_OVERLAPPING_ENTRY = "checkOverlappingEntry";
    OPTION_CHECK_AMBIGUITY = "checkAmbiguity";
    OPTION_CHECK_LOCAL_DIRECTORY = "checkLocalDirectory";
    OPTION_CHECK_LOCAL_FILENAME = "checkLocalFilename";
    OPTION_CHECK_SIGNATURE = "checkSignature";
    OPTION_CHECK_CRC32 = "checkCrc32";
    OPTION_CHECK_AUTHENTICATION_CODE = "checkAuthenticationCode";
    OPTION_USE_WEB_WORKERS = "useWebWorkers";
    OPTION_USE_COMPRESSION_STREAM = "useCompressionStream";
    OPTION_TRANSFER_STREAMS = "transferStreams";
    OPTION_PREVENT_CLOSE = "preventClose";
    OPTION_ENCRYPTION_STRENGTH = "encryptionStrength";
    OPTION_EXTENDED_TIMESTAMP = "extendedTimestamp";
    OPTION_NTFS_TIMESTAMP = "ntfsTimestamp";
    OPTION_KEEP_ORDER = "keepOrder";
    OPTION_LEVEL = "level";
    OPTION_BUFFERED_WRITE = "bufferedWrite";
    OPTION_CREATE_TEMP_STREAM = "createTempStream";
    OPTION_DATA_DESCRIPTOR_SIGNATURE = "dataDescriptorSignature";
    OPTION_USE_UNICODE_FILE_NAMES = "useUnicodeFileNames";
    OPTION_DATA_DESCRIPTOR = "dataDescriptor";
    OPTION_SUPPORT_ZIP64_SPLIT_FILE = "supportZip64SplitFile";
    OPTION_ENCODE_TEXT = "encodeText";
    OPTION_OFFSET = "offset";
    OPTION_USDZ = "usdz";
    OPTION_UNIX_EXTRA_FIELD_TYPE = "unixExtraFieldType";
    OPTION_LOCAL_EXTRA_FIELD = "localExtraField";
    OPTION_CENTRAL_EXTRA_FIELD = "centralExtraField";
    OPTION_STRICTNESS = "strictness";
    OPTION_FILENAME_VALIDATION = "filenameValidation";
    OPTION_NORMALIZE_FILENAME = "normalizeFilename";
    OPTION_MAX_APPENDED_DATA_SIZE = "maxAppendedDataSize";
    OPTION_DECRYPT_CENTRAL_DIRECTORY = "decryptCentralDirectory";
    OPTION_SIGN_CENTRAL_DIRECTORY = "signCentralDirectory";
    OPTION_ENTRY = "entry";
    TEXT_TYPE_FILENAME = "filename";
    TEXT_TYPE_COMMENT = "comment";
    STRICTNESS_STRICT = "strict";
    STRICTNESS_BALANCED = "balanced";
    STRICTNESS_TOLERANT = "tolerant";
    PASS_THROUGH_COMPRESSED = "compressed";
    ERR_INVALID_FUNCTION_OPTION = "Invalid option (must be a function)";
    ERR_INVALID_SIGNAL = "Invalid signal (must be an AbortSignal instance)";
    ERR_INVALID_PASSWORD_TYPE = "Invalid password (password must be a string, rawPassword must be a Uint8Array)";
    ERR_INVALID_PASS_THROUGH_VALUE = "Invalid passThrough option (must be a boolean or 'compressed')";
    ERR_ABORTED = "The operation was aborted";
    ABORT_ERROR_NAME = "AbortError";
  }
});

// node_modules/@zip.js/zip.js/lib/core/configuration.js
function getConfiguration() {
  return config;
}
function getChunkSize(config2) {
  return normalizeChunkSize(config2.chunkSize);
}
function normalizeChunkSize(chunkSize) {
  chunkSize = toNumber(chunkSize);
  return Number.isInteger(chunkSize) && chunkSize >= MINIMUM_PROPERTY_VALUE ? Math.max(chunkSize, MINIMUM_CHUNK_SIZE) : DEFAULT_CHUNK_SIZE;
}
function configure(configuration) {
  Object.assign(config, checkConfiguration(normalizeConfiguration(configuration)));
}
function checkConfiguration(configuration) {
  const checkedConfiguration = {};
  for (const propertyName of CONFIGURABLE_PROPERTY_NAMES) {
    const propertyValue = configuration[propertyName];
    if (propertyValue !== UNDEFINED_VALUE) {
      checkedConfiguration[propertyName] = checkPropertyValue(propertyName, propertyValue);
    }
  }
  return checkedConfiguration;
}
function checkPropertyValue(propertyName, propertyValue) {
  if (NUMBER_PROPERTY_NAMES.includes(propertyName)) {
    propertyValue = toNumber(propertyValue);
    if (propertyName == PROPERTY_NAME_MAX_WORKERS && (!Number.isInteger(propertyValue) || propertyValue < MINIMUM_PROPERTY_VALUE)) {
      throw new Error(ERR_INVALID_MAX_WORKERS);
    }
  } else if (FUNCTION_PROPERTY_NAMES.includes(propertyName)) {
    checkFunctionOption(propertyValue);
  } else if (propertyName == PROPERTY_NAME_BASE_URI) {
    if (propertyValue && typeof propertyValue != STRING_TYPE) {
      throw new Error(ERR_INVALID_BASE_URI);
    }
  } else if (URI_PROPERTY_NAMES.includes(propertyName)) {
    if (propertyValue && typeof propertyValue != STRING_TYPE && typeof propertyValue != FUNCTION_TYPE) {
      throw new Error(ERR_INVALID_URI);
    }
  }
  return propertyValue;
}
function normalizeConfiguration(configuration) {
  configuration = configuration || {};
  const { CompressionStreamZlib, DecompressionStreamZlib } = configuration;
  if (CompressionStreamZlib === UNDEFINED_VALUE && DecompressionStreamZlib === UNDEFINED_VALUE) {
    return configuration;
  }
  const normalizedConfiguration = Object.assign({}, configuration);
  if (normalizedConfiguration.CompressionStreamFallback === UNDEFINED_VALUE) {
    normalizedConfiguration.CompressionStreamFallback = CompressionStreamZlib;
  }
  if (normalizedConfiguration.DecompressionStreamFallback === UNDEFINED_VALUE) {
    normalizedConfiguration.DecompressionStreamFallback = DecompressionStreamZlib;
  }
  return normalizedConfiguration;
}
function setDefaultConfiguration(configuration) {
  const checkedConfiguration = checkConfiguration(normalizeConfiguration(configuration));
  Object.assign(DEFAULT_CONFIGURATION, checkedConfiguration);
  Object.assign(config, checkedConfiguration);
}
var DEFAULT_CHUNK_SIZE, MINIMUM_CHUNK_SIZE, MINIMUM_PROPERTY_VALUE, ERR_INVALID_MAX_WORKERS, ERR_INVALID_BASE_URI, ERR_INVALID_URI, maxWorkers, DEFAULT_CONFIGURATION, PROPERTY_NAME_MAX_WORKERS, PROPERTY_NAME_BASE_URI, URI_PROPERTY_NAMES, BOOLEAN_PROPERTY_NAMES, NUMBER_PROPERTY_NAMES, FUNCTION_PROPERTY_NAMES, CONFIGURABLE_PROPERTY_NAMES, config;
var init_configuration = __esm({
  "node_modules/@zip.js/zip.js/lib/core/configuration.js"() {
    init_constants();
    init_options();
    DEFAULT_CHUNK_SIZE = 64 * 1024;
    MINIMUM_CHUNK_SIZE = 64;
    MINIMUM_PROPERTY_VALUE = 1;
    ERR_INVALID_MAX_WORKERS = "Invalid maxWorkers (must be an integer greater than 0)";
    ERR_INVALID_BASE_URI = "Invalid baseURI (must be a string)";
    ERR_INVALID_URI = "Invalid URI (must be a string or a function returning a string)";
    maxWorkers = 2;
    try {
      if (typeof navigator != UNDEFINED_TYPE && navigator.hardwareConcurrency) {
        maxWorkers = navigator.hardwareConcurrency;
      }
    } catch {
    }
    DEFAULT_CONFIGURATION = {
      workerURI: "./core/web-worker-wasm.js",
      wasmURI: "./core/streams/zlib-wasm/zlib-streams.wasm",
      chunkSize: DEFAULT_CHUNK_SIZE,
      maxWorkers,
      terminateWorkerTimeout: 5e3,
      workerStarvationTimeout: 5e3,
      workerStartupTimeout: 5e3,
      useWebWorkers: true,
      useCompressionStream: true,
      transferStreams: true,
      CompressionStream: typeof CompressionStream != UNDEFINED_TYPE && CompressionStream,
      DecompressionStream: typeof DecompressionStream != UNDEFINED_TYPE && DecompressionStream
    };
    PROPERTY_NAME_MAX_WORKERS = "maxWorkers";
    PROPERTY_NAME_BASE_URI = "baseURI";
    URI_PROPERTY_NAMES = [
      "wasmURI",
      "workerURI"
    ];
    BOOLEAN_PROPERTY_NAMES = [
      "useCompressionStream",
      "useWebWorkers",
      "transferStreams"
    ];
    NUMBER_PROPERTY_NAMES = [
      "chunkSize",
      PROPERTY_NAME_MAX_WORKERS,
      "terminateWorkerTimeout",
      "workerStarvationTimeout",
      "workerStartupTimeout"
    ];
    FUNCTION_PROPERTY_NAMES = [
      "createWorker",
      "CompressionStream",
      "DecompressionStream",
      "CompressionStreamFallback",
      "DecompressionStreamFallback"
    ];
    CONFIGURABLE_PROPERTY_NAMES = [
      PROPERTY_NAME_BASE_URI,
      ...URI_PROPERTY_NAMES,
      ...BOOLEAN_PROPERTY_NAMES,
      ...NUMBER_PROPERTY_NAMES,
      ...FUNCTION_PROPERTY_NAMES
    ];
    config = { ...DEFAULT_CONFIGURATION };
  }
});

// node_modules/@zip.js/zip.js/lib/core/util/array.js
function concat(first, second) {
  const result = new Uint8Array(first.length + second.length);
  result.set(first);
  result.set(second, first.length);
  return result;
}
function toExactUint8Array(array) {
  return array.byteOffset || array.byteLength != array.buffer.byteLength ? new Uint8Array(array) : array;
}
function getDataView(array) {
  return new DataView(array.buffer, array.byteOffset, array.byteLength);
}
var init_array = __esm({
  "node_modules/@zip.js/zip.js/lib/core/util/array.js"() {
  }
});

// node_modules/@zip.js/zip.js/lib/core/util/error.js
function isErrorObject(error) {
  return Boolean(error) && typeof error == "object";
}
var init_error = __esm({
  "node_modules/@zip.js/zip.js/lib/core/util/error.js"() {
  }
});

// node_modules/@zip.js/zip.js/lib/core/streams/codecs/crc32.js
var T, T0, T1, T2, T3, T4, T5, T6, T7, Crc32;
var init_crc32 = __esm({
  "node_modules/@zip.js/zip.js/lib/core/streams/codecs/crc32.js"() {
    T = [[], [], [], [], [], [], [], []];
    for (let n = 0; n < 256; n++) {
      let t = n;
      for (let j2 = 0; j2 < 8; j2++) {
        t = t & 1 ? t >>> 1 ^ 3988292384 : t >>> 1;
      }
      T[0][n] = t;
    }
    for (let n = 0; n < 256; n++) {
      for (let k2 = 1; k2 < 8; k2++) {
        const previous = T[k2 - 1][n];
        T[k2][n] = previous >>> 8 ^ T[0][previous & 255];
      }
    }
    [T0, T1, T2, T3, T4, T5, T6, T7] = T;
    Crc32 = class {
      constructor(crc) {
        this.crc = crc || -1;
      }
      append(data) {
        let crc = this.crc | 0;
        const length = data.length | 0;
        let offset = 0;
        if (length >= 8 && data.buffer) {
          const view = new DataView(data.buffer, data.byteOffset, length);
          const end = length - 8;
          for (; offset <= end; offset += 8) {
            const a = crc ^ view.getInt32(offset, true);
            const b = view.getInt32(offset + 4, true);
            crc = T7[a & 255] ^ T6[a >>> 8 & 255] ^ T5[a >>> 16 & 255] ^ T4[a >>> 24 & 255] ^ T3[b & 255] ^ T2[b >>> 8 & 255] ^ T1[b >>> 16 & 255] ^ T0[b >>> 24 & 255];
          }
        }
        for (; offset < length; offset++) {
          crc = crc >>> 8 ^ T0[(crc ^ data[offset]) & 255];
        }
        this.crc = crc;
      }
      get() {
        return ~this.crc;
      }
    };
  }
});

// node_modules/@zip.js/zip.js/lib/core/streams/crc32-stream.js
var Crc32Stream;
var init_crc32_stream = __esm({
  "node_modules/@zip.js/zip.js/lib/core/streams/crc32-stream.js"() {
    init_crc32();
    Crc32Stream = class extends TransformStream {
      constructor() {
        let stream;
        const crc32 = new Crc32();
        super({
          transform(chunk, controller) {
            crc32.append(chunk);
            controller.enqueue(chunk);
          },
          flush() {
            const value = new Uint8Array(4);
            const dataView = new DataView(value.buffer);
            dataView.setUint32(0, crc32.get());
            stream.value = value;
          }
        });
        stream = this;
      }
    };
  }
});

// node_modules/@zip.js/zip.js/lib/core/util/encode-text.js
function encodeText(value) {
  if (typeof TextEncoder == UNDEFINED_TYPE) {
    value = unescape(encodeURIComponent(value));
    const result = new Uint8Array(value.length);
    for (let i = 0; i < result.length; i++) {
      result[i] = value.charCodeAt(i);
    }
    return result;
  } else {
    return new TextEncoder().encode(value);
  }
}
var init_encode_text = __esm({
  "node_modules/@zip.js/zip.js/lib/core/util/encode-text.js"() {
    init_constants();
  }
});

// node_modules/@zip.js/zip.js/lib/core/streams/codecs/aes-hmac-sha1.js
function createEngine(key, authenticationKey) {
  initTables();
  const roundKeys = new Int32Array(ROUND_KEYS_LENGTH);
  const rounds = expandKey(key, roundKeys);
  const keystream = new Int32Array(BLOCK_LENGTH / 4);
  const hmac = createHmac(authenticationKey);
  let counter0 = 0;
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  return {
    process(data, decrypt2) {
      if (decrypt2) {
        hmac.update(data, 0, data.length);
      }
      encrypt2(data);
      if (!decrypt2) {
        hmac.update(data, 0, data.length);
      }
    },
    digest() {
      return hmac.digest();
    }
  };
  function encrypt2(data) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const length = data.length;
    let offset = 0;
    for (; offset + BLOCK_LENGTH <= length; offset += BLOCK_LENGTH) {
      nextKeystream();
      view.setInt32(offset, view.getInt32(offset) ^ keystream[0]);
      view.setInt32(offset + 4, view.getInt32(offset + 4) ^ keystream[1]);
      view.setInt32(offset + 8, view.getInt32(offset + 8) ^ keystream[2]);
      view.setInt32(offset + 12, view.getInt32(offset + 12) ^ keystream[3]);
    }
    if (offset < length) {
      nextKeystream();
      for (let indexByte = 0; offset < length; offset++, indexByte++) {
        data[offset] ^= keystream[indexByte >> 2] >>> 24 - 8 * (indexByte & 3);
      }
    }
  }
  function nextKeystream() {
    counter0 = counter0 + 1 | 0;
    if (!counter0) {
      counter1 = counter1 + 1 | 0;
      if (!counter1) {
        counter2 = counter2 + 1 | 0;
        if (!counter2) {
          counter3 = counter3 + 1 | 0;
        }
      }
    }
    let s0 = swapBytes(counter0) ^ roundKeys[0];
    let s1 = swapBytes(counter1) ^ roundKeys[1];
    let s2 = swapBytes(counter2) ^ roundKeys[2];
    let s3 = swapBytes(counter3) ^ roundKeys[3];
    let t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[4];
    let t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[5];
    let t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[6];
    let t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[7];
    s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[8];
    s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[9];
    s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[10];
    s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[11];
    t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[12];
    t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[13];
    t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[14];
    t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[15];
    s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[16];
    s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[17];
    s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[18];
    s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[19];
    t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[20];
    t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[21];
    t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[22];
    t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[23];
    s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[24];
    s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[25];
    s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[26];
    s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[27];
    t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[28];
    t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[29];
    t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[30];
    t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[31];
    s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[32];
    s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[33];
    s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[34];
    s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[35];
    t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[36];
    t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[37];
    t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[38];
    t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[39];
    let indexKey = 40;
    if (rounds > 10) {
      s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[40];
      s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[41];
      s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[42];
      s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[43];
      t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[44];
      t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[45];
      t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[46];
      t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[47];
      indexKey = 48;
    }
    if (rounds > 12) {
      s0 = T02[t0 >>> 24] ^ T12[t1 >>> 16 & 255] ^ T22[t2 >>> 8 & 255] ^ T32[t3 & 255] ^ roundKeys[48];
      s1 = T02[t1 >>> 24] ^ T12[t2 >>> 16 & 255] ^ T22[t3 >>> 8 & 255] ^ T32[t0 & 255] ^ roundKeys[49];
      s2 = T02[t2 >>> 24] ^ T12[t3 >>> 16 & 255] ^ T22[t0 >>> 8 & 255] ^ T32[t1 & 255] ^ roundKeys[50];
      s3 = T02[t3 >>> 24] ^ T12[t0 >>> 16 & 255] ^ T22[t1 >>> 8 & 255] ^ T32[t2 & 255] ^ roundKeys[51];
      t0 = T02[s0 >>> 24] ^ T12[s1 >>> 16 & 255] ^ T22[s2 >>> 8 & 255] ^ T32[s3 & 255] ^ roundKeys[52];
      t1 = T02[s1 >>> 24] ^ T12[s2 >>> 16 & 255] ^ T22[s3 >>> 8 & 255] ^ T32[s0 & 255] ^ roundKeys[53];
      t2 = T02[s2 >>> 24] ^ T12[s3 >>> 16 & 255] ^ T22[s0 >>> 8 & 255] ^ T32[s1 & 255] ^ roundKeys[54];
      t3 = T02[s3 >>> 24] ^ T12[s0 >>> 16 & 255] ^ T22[s1 >>> 8 & 255] ^ T32[s2 & 255] ^ roundKeys[55];
      indexKey = 56;
    }
    keystream[0] = (S_BOX[t0 >>> 24] << 24 | S_BOX[t1 >>> 16 & 255] << 16 | S_BOX[t2 >>> 8 & 255] << 8 | S_BOX[t3 & 255]) ^ roundKeys[indexKey];
    keystream[1] = (S_BOX[t1 >>> 24] << 24 | S_BOX[t2 >>> 16 & 255] << 16 | S_BOX[t3 >>> 8 & 255] << 8 | S_BOX[t0 & 255]) ^ roundKeys[indexKey + 1];
    keystream[2] = (S_BOX[t2 >>> 24] << 24 | S_BOX[t3 >>> 16 & 255] << 16 | S_BOX[t0 >>> 8 & 255] << 8 | S_BOX[t1 & 255]) ^ roundKeys[indexKey + 2];
    keystream[3] = (S_BOX[t3 >>> 24] << 24 | S_BOX[t0 >>> 16 & 255] << 16 | S_BOX[t1 >>> 8 & 255] << 8 | S_BOX[t2 & 255]) ^ roundKeys[indexKey + 3];
  }
}
function pbkdf2(password, salt, iterations, length) {
  const hmac = createHmac(password);
  const result = new Uint8Array(length);
  const block = new Uint8Array(salt.length + 4);
  const blockView = new DataView(block.buffer);
  block.set(salt);
  for (let indexBlock = 1, offset = 0; offset < length; indexBlock++, offset += SHA1_DIGEST_LENGTH2) {
    blockView.setUint32(salt.length, indexBlock);
    hmac.update(block, 0, block.length);
    let previous = hmac.digest();
    const output = previous.slice();
    for (let iteration = 1; iteration < iterations; iteration++) {
      hmac.update(previous, 0, SHA1_DIGEST_LENGTH2);
      previous = hmac.digest();
      for (let indexByte = 0; indexByte < SHA1_DIGEST_LENGTH2; indexByte++) {
        output[indexByte] ^= previous[indexByte];
      }
    }
    result.set(output.subarray(0, Math.min(SHA1_DIGEST_LENGTH2, length - offset)), offset);
  }
  return result;
}
function createHmac(key) {
  const sha1 = createSha1();
  const innerKey = new Uint8Array(SHA1_BLOCK_LENGTH);
  const outerKey = new Uint8Array(SHA1_BLOCK_LENGTH);
  if (key.length > SHA1_BLOCK_LENGTH) {
    sha1.update(key, 0, key.length);
    key = sha1.digest();
  }
  for (let indexByte = 0; indexByte < SHA1_BLOCK_LENGTH; indexByte++) {
    const keyByte = indexByte < key.length ? key[indexByte] : 0;
    innerKey[indexByte] = keyByte ^ HMAC_INNER_PADDING;
    outerKey[indexByte] = keyByte ^ HMAC_OUTER_PADDING;
  }
  sha1.update(innerKey, 0, SHA1_BLOCK_LENGTH);
  return {
    update(data, offset, length) {
      sha1.update(data, offset, length);
    },
    digest() {
      const innerDigest = sha1.digest();
      sha1.update(outerKey, 0, SHA1_BLOCK_LENGTH);
      sha1.update(innerDigest, 0, SHA1_DIGEST_LENGTH2);
      const result = sha1.digest();
      sha1.update(innerKey, 0, SHA1_BLOCK_LENGTH);
      return result;
    }
  };
}
function createSha1() {
  const state = new Int32Array(SHA1_INITIAL_STATE);
  const schedule = new Int32Array(SHA1_SCHEDULE_LENGTH);
  const block = new Uint8Array(SHA1_BLOCK_LENGTH);
  const blockView = new DataView(block.buffer);
  const lengthBytes = new Uint8Array(8);
  let blockLength = 0;
  let totalLength = 0;
  return {
    update,
    digest
  };
  function update(data, offset, length) {
    const end = offset + length;
    totalLength += length;
    if (blockLength) {
      while (offset < end && blockLength < SHA1_BLOCK_LENGTH) {
        block[blockLength++] = data[offset++];
      }
      if (blockLength == SHA1_BLOCK_LENGTH) {
        compress(blockView, 0);
        blockLength = 0;
      }
    }
    if (offset + SHA1_BLOCK_LENGTH <= end) {
      const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
      for (; offset + SHA1_BLOCK_LENGTH <= end; offset += SHA1_BLOCK_LENGTH) {
        compress(view, offset);
      }
    }
    while (offset < end) {
      block[blockLength++] = data[offset++];
    }
  }
  function digest() {
    const bits = totalLength * 8;
    const high = Math.floor(bits / 4294967296);
    const low = bits >>> 0;
    update(SHA1_PADDING, 0, 1);
    while (blockLength != SHA1_LENGTH_OFFSET) {
      update(SHA1_ZERO, 0, 1);
    }
    lengthBytes[0] = high >>> 24;
    lengthBytes[1] = high >>> 16;
    lengthBytes[2] = high >>> 8;
    lengthBytes[3] = high;
    lengthBytes[4] = low >>> 24;
    lengthBytes[5] = low >>> 16;
    lengthBytes[6] = low >>> 8;
    lengthBytes[7] = low;
    update(lengthBytes, 0, 8);
    const result = new Uint8Array(SHA1_DIGEST_LENGTH2);
    const resultView = new DataView(result.buffer);
    for (let indexWord = 0; indexWord < state.length; indexWord++) {
      resultView.setInt32(4 * indexWord, state[indexWord]);
    }
    state.set(SHA1_INITIAL_STATE);
    blockLength = 0;
    totalLength = 0;
    return result;
  }
  function compress(view, offset) {
    for (let index = 0; index < 16; index++) {
      schedule[index] = view.getInt32(offset + 4 * index);
    }
    let a = state[0];
    let b = state[1];
    let c = state[2];
    let d = state[3];
    let e = state[4];
    let t;
    for (let index = 0; index < 15; index += 5) {
      e = (a << 5 | a >>> 27) + ((c ^ d) & b ^ d) + e + 1518500249 + schedule[index] | 0;
      b = b << 30 | b >>> 2;
      d = (e << 5 | e >>> 27) + ((b ^ c) & a ^ c) + d + 1518500249 + schedule[index + 1] | 0;
      a = a << 30 | a >>> 2;
      c = (d << 5 | d >>> 27) + ((a ^ b) & e ^ b) + c + 1518500249 + schedule[index + 2] | 0;
      e = e << 30 | e >>> 2;
      b = (c << 5 | c >>> 27) + ((e ^ a) & d ^ a) + b + 1518500249 + schedule[index + 3] | 0;
      d = d << 30 | d >>> 2;
      a = (b << 5 | b >>> 27) + ((d ^ e) & c ^ e) + a + 1518500249 + schedule[index + 4] | 0;
      c = c << 30 | c >>> 2;
    }
    e = (a << 5 | a >>> 27) + ((c ^ d) & b ^ d) + e + 1518500249 + schedule[15] | 0;
    b = b << 30 | b >>> 2;
    t = schedule[13] ^ schedule[8] ^ schedule[2] ^ schedule[0];
    t = t << 1 | t >>> 31;
    schedule[0] = t;
    d = (e << 5 | e >>> 27) + ((b ^ c) & a ^ c) + d + 1518500249 + t | 0;
    a = a << 30 | a >>> 2;
    t = schedule[14] ^ schedule[9] ^ schedule[3] ^ schedule[1];
    t = t << 1 | t >>> 31;
    schedule[1] = t;
    c = (d << 5 | d >>> 27) + ((a ^ b) & e ^ b) + c + 1518500249 + t | 0;
    e = e << 30 | e >>> 2;
    t = schedule[15] ^ schedule[10] ^ schedule[4] ^ schedule[2];
    t = t << 1 | t >>> 31;
    schedule[2] = t;
    b = (c << 5 | c >>> 27) + ((e ^ a) & d ^ a) + b + 1518500249 + t | 0;
    d = d << 30 | d >>> 2;
    t = schedule[0] ^ schedule[11] ^ schedule[5] ^ schedule[3];
    t = t << 1 | t >>> 31;
    schedule[3] = t;
    a = (b << 5 | b >>> 27) + ((d ^ e) & c ^ e) + a + 1518500249 + t | 0;
    c = c << 30 | c >>> 2;
    for (let index = 20; index < 40; index += 5) {
      t = schedule[index - 3 & 15] ^ schedule[index - 8 & 15] ^ schedule[index - 14 & 15] ^ schedule[index & 15];
      t = t << 1 | t >>> 31;
      schedule[index & 15] = t;
      e = (a << 5 | a >>> 27) + (b ^ c ^ d) + e + 1859775393 + t | 0;
      b = b << 30 | b >>> 2;
      t = schedule[index - 2 & 15] ^ schedule[index - 7 & 15] ^ schedule[index - 13 & 15] ^ schedule[index + 1 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 1 & 15] = t;
      d = (e << 5 | e >>> 27) + (a ^ b ^ c) + d + 1859775393 + t | 0;
      a = a << 30 | a >>> 2;
      t = schedule[index - 1 & 15] ^ schedule[index - 6 & 15] ^ schedule[index - 12 & 15] ^ schedule[index + 2 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 2 & 15] = t;
      c = (d << 5 | d >>> 27) + (e ^ a ^ b) + c + 1859775393 + t | 0;
      e = e << 30 | e >>> 2;
      t = schedule[index & 15] ^ schedule[index - 5 & 15] ^ schedule[index - 11 & 15] ^ schedule[index + 3 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 3 & 15] = t;
      b = (c << 5 | c >>> 27) + (d ^ e ^ a) + b + 1859775393 + t | 0;
      d = d << 30 | d >>> 2;
      t = schedule[index + 1 & 15] ^ schedule[index - 4 & 15] ^ schedule[index - 10 & 15] ^ schedule[index + 4 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 4 & 15] = t;
      a = (b << 5 | b >>> 27) + (c ^ d ^ e) + a + 1859775393 + t | 0;
      c = c << 30 | c >>> 2;
    }
    for (let index = 40; index < 60; index += 5) {
      t = schedule[index - 3 & 15] ^ schedule[index - 8 & 15] ^ schedule[index - 14 & 15] ^ schedule[index & 15];
      t = t << 1 | t >>> 31;
      schedule[index & 15] = t;
      e = (a << 5 | a >>> 27) + (b & c | (b | c) & d) + e + 2400959708 + t | 0;
      b = b << 30 | b >>> 2;
      t = schedule[index - 2 & 15] ^ schedule[index - 7 & 15] ^ schedule[index - 13 & 15] ^ schedule[index + 1 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 1 & 15] = t;
      d = (e << 5 | e >>> 27) + (a & b | (a | b) & c) + d + 2400959708 + t | 0;
      a = a << 30 | a >>> 2;
      t = schedule[index - 1 & 15] ^ schedule[index - 6 & 15] ^ schedule[index - 12 & 15] ^ schedule[index + 2 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 2 & 15] = t;
      c = (d << 5 | d >>> 27) + (e & a | (e | a) & b) + c + 2400959708 + t | 0;
      e = e << 30 | e >>> 2;
      t = schedule[index & 15] ^ schedule[index - 5 & 15] ^ schedule[index - 11 & 15] ^ schedule[index + 3 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 3 & 15] = t;
      b = (c << 5 | c >>> 27) + (d & e | (d | e) & a) + b + 2400959708 + t | 0;
      d = d << 30 | d >>> 2;
      t = schedule[index + 1 & 15] ^ schedule[index - 4 & 15] ^ schedule[index - 10 & 15] ^ schedule[index + 4 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 4 & 15] = t;
      a = (b << 5 | b >>> 27) + (c & d | (c | d) & e) + a + 2400959708 + t | 0;
      c = c << 30 | c >>> 2;
    }
    for (let index = 60; index < 80; index += 5) {
      t = schedule[index - 3 & 15] ^ schedule[index - 8 & 15] ^ schedule[index - 14 & 15] ^ schedule[index & 15];
      t = t << 1 | t >>> 31;
      schedule[index & 15] = t;
      e = (a << 5 | a >>> 27) + (b ^ c ^ d) + e + 3395469782 + t | 0;
      b = b << 30 | b >>> 2;
      t = schedule[index - 2 & 15] ^ schedule[index - 7 & 15] ^ schedule[index - 13 & 15] ^ schedule[index + 1 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 1 & 15] = t;
      d = (e << 5 | e >>> 27) + (a ^ b ^ c) + d + 3395469782 + t | 0;
      a = a << 30 | a >>> 2;
      t = schedule[index - 1 & 15] ^ schedule[index - 6 & 15] ^ schedule[index - 12 & 15] ^ schedule[index + 2 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 2 & 15] = t;
      c = (d << 5 | d >>> 27) + (e ^ a ^ b) + c + 3395469782 + t | 0;
      e = e << 30 | e >>> 2;
      t = schedule[index & 15] ^ schedule[index - 5 & 15] ^ schedule[index - 11 & 15] ^ schedule[index + 3 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 3 & 15] = t;
      b = (c << 5 | c >>> 27) + (d ^ e ^ a) + b + 3395469782 + t | 0;
      d = d << 30 | d >>> 2;
      t = schedule[index + 1 & 15] ^ schedule[index - 4 & 15] ^ schedule[index - 10 & 15] ^ schedule[index + 4 & 15];
      t = t << 1 | t >>> 31;
      schedule[index + 4 & 15] = t;
      a = (b << 5 | b >>> 27) + (c ^ d ^ e) + a + 3395469782 + t | 0;
      c = c << 30 | c >>> 2;
    }
    state[0] = state[0] + a | 0;
    state[1] = state[1] + b | 0;
    state[2] = state[2] + c | 0;
    state[3] = state[3] + d | 0;
    state[4] = state[4] + e | 0;
  }
}
function initTables() {
  if (!tablesInitialized) {
    let p2 = 1;
    let q2 = 1;
    do {
      p2 = (p2 ^ p2 << 1 ^ (p2 & 128 ? 27 : 0)) & 255;
      q2 = (q2 ^ q2 << 1) & 255;
      q2 = (q2 ^ q2 << 2) & 255;
      q2 = (q2 ^ q2 << 4) & 255;
      if (q2 & 128) {
        q2 ^= 9;
      }
      S_BOX[p2] = (q2 ^ (q2 << 1 | q2 >> 7) ^ (q2 << 2 | q2 >> 6) ^ (q2 << 3 | q2 >> 5) ^ (q2 << 4 | q2 >> 4) ^ 99) & 255;
    } while (p2 != 1);
    S_BOX[0] = 99;
    for (let index = 0; index < 256; index++) {
      const s = S_BOX[index];
      const s2 = multiplyByTwo(s);
      const t = s2 << 24 | s << 16 | s << 8 | s2 ^ s;
      T02[index] = t;
      T12[index] = t >>> 8 | t << 24;
      T22[index] = t >>> 16 | t << 16;
      T32[index] = t >>> 24 | t << 8;
    }
    tablesInitialized = true;
  }
}
function expandKey(key, roundKeys) {
  const keyWords = key.length >> 2;
  const rounds = keyWords + 6;
  const total = 4 * (rounds + 1);
  let roundConstant = 1;
  for (let index = 0; index < keyWords; index++) {
    roundKeys[index] = key[4 * index] << 24 | key[4 * index + 1] << 16 | key[4 * index + 2] << 8 | key[4 * index + 3];
  }
  for (let index = keyWords; index < total; index++) {
    let word = roundKeys[index - 1];
    if (index % keyWords == 0) {
      word = substituteWord(word << 8 | word >>> 24) ^ roundConstant << 24;
      roundConstant = multiplyByTwo(roundConstant);
    } else if (keyWords > 6 && index % keyWords == 4) {
      word = substituteWord(word);
    }
    roundKeys[index] = roundKeys[index - keyWords] ^ word;
  }
  return rounds;
}
function substituteWord(word) {
  return S_BOX[word >>> 24] << 24 | S_BOX[word >>> 16 & 255] << 16 | S_BOX[word >>> 8 & 255] << 8 | S_BOX[word & 255];
}
function swapBytes(value) {
  return value << 24 | (value & 65280) << 8 | value >>> 8 & 65280 | value >>> 24;
}
function multiplyByTwo(value) {
  return (value << 1 ^ (value >> 7) * 27) & 255;
}
var BLOCK_LENGTH, ROUND_KEYS_LENGTH, SHA1_BLOCK_LENGTH, SHA1_DIGEST_LENGTH2, SHA1_SCHEDULE_LENGTH, SHA1_LENGTH_OFFSET, SHA1_PADDING, SHA1_ZERO, SHA1_INITIAL_STATE, HMAC_INNER_PADDING, HMAC_OUTER_PADDING, S_BOX, T02, T12, T22, T32, tablesInitialized;
var init_aes_hmac_sha1 = __esm({
  "node_modules/@zip.js/zip.js/lib/core/streams/codecs/aes-hmac-sha1.js"() {
    BLOCK_LENGTH = 16;
    ROUND_KEYS_LENGTH = 60;
    SHA1_BLOCK_LENGTH = 64;
    SHA1_DIGEST_LENGTH2 = 20;
    SHA1_SCHEDULE_LENGTH = 16;
    SHA1_LENGTH_OFFSET = 56;
    SHA1_PADDING = new Uint8Array([128]);
    SHA1_ZERO = new Uint8Array(1);
    SHA1_INITIAL_STATE = new Int32Array([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    HMAC_INNER_PADDING = 54;
    HMAC_OUTER_PADDING = 92;
    S_BOX = new Uint8Array(256);
    T02 = new Int32Array(256);
    T12 = new Int32Array(256);
    T22 = new Int32Array(256);
    T32 = new Int32Array(256);
    tablesInitialized = false;
  }
});

// node_modules/@zip.js/zip.js/lib/core/streams/common-crypto.js
function getRandomValues(array) {
  if (GET_RANDOM_VALUES_SUPPORTED) {
    return crypto.getRandomValues(array);
  } else {
    throw new Error(ERR_UNSUPPORTED_CRYPTO_API);
  }
}
var GET_RANDOM_VALUES_SUPPORTED, ERR_INVALID_PASSWORD, ERR_INVALID_AUTHENTICATION_CODE, ERR_ABORT_CHECK_PASSWORD, ERR_UNSUPPORTED_CRYPTO_API;
var init_common_crypto = __esm({
  "node_modules/@zip.js/zip.js/lib/core/streams/common-crypto.js"() {
    init_constants();
    GET_RANDOM_VALUES_SUPPORTED = typeof crypto != UNDEFINED_TYPE && typeof crypto.getRandomValues == FUNCTION_TYPE;
    ERR_INVALID_PASSWORD = "Invalid password";
    ERR_INVALID_AUTHENTICATION_CODE = "Invalid authentication code";
    ERR_ABORT_CHECK_PASSWORD = "zipjs-abort-check-password";
    ERR_UNSUPPORTED_CRYPTO_API = "Crypto API not supported";
  }
});

// node_modules/@zip.js/zip.js/lib/core/streams/aes-crypto-stream.js
function initAesCrypto(aesCrypto, password, rawPassword, encryptionStrength) {
  Object.assign(aesCrypto, {
    ready: new Promise((resolve) => aesCrypto.resolveReady = resolve),
    password: encodePassword(password, rawPassword),
    strength: encryptionStrength - 1,
    pendingInput: EMPTY_UINT8_ARRAY,
    discarded: false
  });
}
function setDisposingReadable(stream, aesCrypto) {
  const reader = stream.readable.getReader();
  const readable = new ReadableStream({
    async pull(controller) {
      try {
        const { value, done } = await reader.read();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (error) {
        disposeEngine(aesCrypto);
        reader.cancel(error).catch(() => {
        });
        throw error;
      }
    },
    cancel(reason) {
      disposeEngine(aesCrypto);
      return reader.cancel(reason);
    }
  });
  Object.defineProperty(stream, "readable", {
    get() {
      return readable;
    }
  });
}
function append(aesCrypto, input, output, paddingStart, paddingEnd, decrypt2) {
  const {
    engine,
    pendingInput
  } = aesCrypto;
  if (pendingInput.length) {
    input = concat(pendingInput, input);
  }
  const inputLength = input.length - paddingEnd;
  const alignedLength = inputLength - inputLength % BLOCK_LENGTH2;
  output = expand(output, paddingStart + alignedLength);
  if (alignedLength) {
    const chunk = subarray(output, paddingStart, paddingStart + alignedLength);
    chunk.set(subarray(input, 0, alignedLength));
    engine.process(chunk, decrypt2);
  }
  aesCrypto.pendingInput = subarray(input, alignedLength);
  return output;
}
async function createDecryptionKeys(decrypt2, strength, password, preamble) {
  const passwordVerificationKey = await createKeys(decrypt2, strength, password, subarray(preamble, 0, SALT_LENGTH[strength]));
  const passwordVerification = subarray(preamble, SALT_LENGTH[strength]);
  if (passwordVerificationKey[0] != passwordVerification[0] || passwordVerificationKey[1] != passwordVerification[1]) {
    disposeEngine(decrypt2);
    throw new Error(ERR_INVALID_PASSWORD);
  }
}
function disposeEngine(aesCrypto) {
  const { engine } = aesCrypto;
  aesCrypto.discarded = true;
  if (engine && engine.dispose) {
    engine.dispose();
  }
}
async function createEncryptionKeys(encrypt2, strength, password) {
  const salt = getRandomValues(new Uint8Array(SALT_LENGTH[strength]));
  const passwordVerification = await createKeys(encrypt2, strength, password, salt);
  return concat(salt, passwordVerification);
}
async function createKeys(aesCrypto, strength, password, salt) {
  aesCrypto.password = null;
  const keyLength = KEY_LENGTH[strength];
  const compositeKey = await deriveKey(password, salt, keyLength * 2 + PASSWORD_VERIFICATION_LENGTH);
  aesCrypto.engine = createEngine2(subarray(compositeKey, 0, keyLength), subarray(compositeKey, keyLength, keyLength * 2));
  if (aesCrypto.discarded) {
    disposeEngine(aesCrypto);
  }
  return subarray(compositeKey, keyLength * 2);
}
async function deriveKey(password, salt, length) {
  if (DERIVE_BITS_SUPPORTED) {
    try {
      const baseKey = await subtle.importKey(RAW_FORMAT, password, BASE_KEY_ALGORITHM, false, DERIVED_BITS_USAGE);
      return new Uint8Array(await subtle.deriveBits(Object.assign({ salt }, DERIVED_BITS_ALGORITHM), baseKey, length * 8));
    } catch {
      DERIVE_BITS_SUPPORTED = false;
    }
  }
  return pbkdf2(password, salt, PBKDF2_ITERATIONS, length);
}
function encodePassword(password, rawPassword) {
  if (rawPassword === UNDEFINED_VALUE) {
    return encodeText(password);
  } else {
    return rawPassword;
  }
}
function expand(inputArray, length) {
  if (length && length > inputArray.length) {
    const array = inputArray;
    inputArray = new Uint8Array(length);
    inputArray.set(array, 0);
  }
  return inputArray;
}
function subarray(array, begin, end) {
  return array.subarray(begin, end);
}
var BLOCK_LENGTH2, RAW_FORMAT, PBKDF2_ALGORITHM, HASH_ALGORITHM, HASH_FUNCTION, PBKDF2_ITERATIONS, BASE_KEY_ALGORITHM, DERIVED_BITS_ALGORITHM, DERIVED_BITS_USAGE, SALT_LENGTH, KEY_LENGTH, AUTHENTICATION_CODE_LENGTH, PASSWORD_VERIFICATION_LENGTH, CRYPTO_API_SUPPORTED, subtle, SUBTLE_API_SUPPORTED, DERIVE_BITS_SUPPORTED, createEngine2, AESDecryptionStream, AESEncryptionStream;
var init_aes_crypto_stream = __esm({
  "node_modules/@zip.js/zip.js/lib/core/streams/aes-crypto-stream.js"() {
    init_constants();
    init_encode_text();
    init_array();
    init_aes_hmac_sha1();
    init_common_crypto();
    BLOCK_LENGTH2 = 16;
    RAW_FORMAT = "raw";
    PBKDF2_ALGORITHM = { name: "PBKDF2" };
    HASH_ALGORITHM = { name: "HMAC" };
    HASH_FUNCTION = "SHA-1";
    PBKDF2_ITERATIONS = 1e3;
    BASE_KEY_ALGORITHM = Object.assign({ hash: HASH_ALGORITHM }, PBKDF2_ALGORITHM);
    DERIVED_BITS_ALGORITHM = Object.assign({ iterations: PBKDF2_ITERATIONS, hash: { name: HASH_FUNCTION } }, PBKDF2_ALGORITHM);
    DERIVED_BITS_USAGE = ["deriveBits"];
    SALT_LENGTH = [8, 12, 16];
    KEY_LENGTH = [16, 24, 32];
    AUTHENTICATION_CODE_LENGTH = 10;
    PASSWORD_VERIFICATION_LENGTH = 2;
    CRYPTO_API_SUPPORTED = typeof crypto != UNDEFINED_TYPE;
    subtle = CRYPTO_API_SUPPORTED && crypto.subtle;
    SUBTLE_API_SUPPORTED = CRYPTO_API_SUPPORTED && typeof subtle != UNDEFINED_TYPE;
    DERIVE_BITS_SUPPORTED = SUBTLE_API_SUPPORTED && typeof subtle.importKey == FUNCTION_TYPE && typeof subtle.deriveBits == FUNCTION_TYPE;
    createEngine2 = createEngine;
    AESDecryptionStream = class extends TransformStream {
      constructor({ password, rawPassword, encryptionStrength, checkPasswordOnly, checkAuthenticationCode = true }) {
        const aesCrypto = {};
        super({
          start() {
            initAesCrypto(aesCrypto, password, rawPassword, encryptionStrength);
          },
          async transform(chunk, controller) {
            const {
              password: password2,
              strength,
              resolveReady,
              ready
            } = aesCrypto;
            if (password2) {
              await createDecryptionKeys(aesCrypto, strength, password2, subarray(chunk, 0, SALT_LENGTH[strength] + PASSWORD_VERIFICATION_LENGTH));
              chunk = subarray(chunk, SALT_LENGTH[strength] + PASSWORD_VERIFICATION_LENGTH);
              if (checkPasswordOnly) {
                disposeEngine(aesCrypto);
                controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
              } else {
                resolveReady();
              }
            } else {
              await ready;
            }
            if (aesCrypto.discarded) {
              return;
            }
            const output = new Uint8Array(chunk.length - AUTHENTICATION_CODE_LENGTH - (chunk.length - AUTHENTICATION_CODE_LENGTH) % BLOCK_LENGTH2);
            controller.enqueue(append(aesCrypto, chunk, output, 0, AUTHENTICATION_CODE_LENGTH, true));
          },
          async flush(controller) {
            const {
              engine,
              pendingInput,
              ready
            } = aesCrypto;
            if (engine) {
              await ready;
              if (aesCrypto.discarded) {
                return;
              }
              const originalAuthenticationCode = subarray(pendingInput, pendingInput.length - AUTHENTICATION_CODE_LENGTH);
              const decryptedChunkArray = new Uint8Array(subarray(pendingInput, 0, pendingInput.length - AUTHENTICATION_CODE_LENGTH));
              engine.process(decryptedChunkArray, true);
              const authenticationCode = engine.digest();
              let invalidAuthenticationCode = pendingInput.length < AUTHENTICATION_CODE_LENGTH ? 1 : 0;
              for (let indexByte = 0; indexByte < AUTHENTICATION_CODE_LENGTH; indexByte++) {
                invalidAuthenticationCode |= authenticationCode[indexByte] ^ originalAuthenticationCode[indexByte];
              }
              if (invalidAuthenticationCode && checkAuthenticationCode) {
                controller.error(new Error(ERR_INVALID_AUTHENTICATION_CODE));
                return;
              }
              controller.enqueue(decryptedChunkArray);
            }
          }
        });
        setDisposingReadable(this, aesCrypto);
      }
    };
    AESEncryptionStream = class extends TransformStream {
      constructor({ password, rawPassword, encryptionStrength }) {
        const aesCrypto = {};
        super({
          start() {
            initAesCrypto(aesCrypto, password, rawPassword, encryptionStrength);
          },
          async transform(chunk, controller) {
            const {
              password: password2,
              strength,
              resolveReady,
              ready
            } = aesCrypto;
            let preamble = EMPTY_UINT8_ARRAY;
            if (password2) {
              preamble = await createEncryptionKeys(aesCrypto, strength, password2);
              resolveReady();
            } else {
              await ready;
            }
            if (aesCrypto.discarded) {
              return;
            }
            const output = new Uint8Array(preamble.length + chunk.length - chunk.length % BLOCK_LENGTH2);
            output.set(preamble, 0);
            controller.enqueue(append(aesCrypto, chunk, output, preamble.length, 0, false));
          },
          async flush(controller) {
            const {
              engine,
              pendingInput,
              ready
            } = aesCrypto;
            if (engine) {
              await ready;
              if (aesCrypto.discarded) {
                return;
              }
              const encryptedChunkArray = new Uint8Array(pendingInput);
              engine.process(encryptedChunkArray, false);
              const authenticationCode = subarray(engine.digest(), 0, AUTHENTICATION_CODE_LENGTH);
              controller.enqueue(concat(encryptedChunkArray, authenticationCode));
            }
          }
        });
        setDisposingReadable(this, aesCrypto);
      }
    };
  }
});

// node_modules/@zip.js/zip.js/lib/core/streams/zip-crypto-stream.js
function initZipCrypto(zipCrypto, password, rawPassword, passwordVerification) {
  Object.assign(zipCrypto, {
    password,
    rawPassword,
    passwordVerification
  });
  createKeys2(zipCrypto, password, rawPassword);
}
function decrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, output[index]);
  }
  return output;
}
function encrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, input[index]);
  }
  return output;
}
function createKeys2(target, password, rawPassword) {
  const cryptoKeys = [305419896, 591751049, 878082192];
  Object.assign(target, {
    cryptoKeys,
    crcKey0: new Crc32(cryptoKeys[0]),
    crcKey2: new Crc32(cryptoKeys[2])
  });
  if (rawPassword) {
    for (let index = 0; index < rawPassword.length; index++) {
      updateKeys(target, rawPassword[index]);
    }
  } else {
    for (let index = 0; index < password.length; index++) {
      updateKeys(target, password.charCodeAt(index));
    }
  }
}
function updateKeys(target, byte) {
  let [, key1] = target.cryptoKeys;
  target.crcKey0.append([byte]);
  const key0 = ~target.crcKey0.get();
  key1 = getInt322(Math.imul(getInt322(key1 + getInt82(key0)), 134775813) + 1);
  target.crcKey2.append([key1 >>> 24]);
  const key2 = ~target.crcKey2.get();
  target.cryptoKeys = [key0, key1, key2];
}
function getByte(target) {
  const temp = target.cryptoKeys[2] | 2;
  return getInt82(Math.imul(temp, temp ^ 1) >>> 8);
}
function getInt82(number2) {
  return number2 & 255;
}
function getInt322(number2) {
  return number2 & 4294967295;
}
var HEADER_LENGTH, ZipCryptoDecryptionStream, ZipCryptoEncryptionStream;
var init_zip_crypto_stream = __esm({
  "node_modules/@zip.js/zip.js/lib/core/streams/zip-crypto-stream.js"() {
    init_crc32();
    init_common_crypto();
    HEADER_LENGTH = 12;
    ZipCryptoDecryptionStream = class extends TransformStream {
      constructor({ password, rawPassword, passwordVerification, checkPasswordOnly }) {
        super({
          start() {
            initZipCrypto(this, password, rawPassword, passwordVerification);
          },
          transform(chunk, controller) {
            const zipCrypto = this;
            if (zipCrypto.password || zipCrypto.rawPassword) {
              const decryptedHeader = decrypt(zipCrypto, chunk.subarray(0, HEADER_LENGTH));
              zipCrypto.password = zipCrypto.rawPassword = null;
              if ((decryptedHeader[HEADER_LENGTH - 1] ^ zipCrypto.passwordVerification) != 0) {
                throw new Error(ERR_INVALID_PASSWORD);
              }
              chunk = chunk.subarray(HEADER_LENGTH);
            }
            if (checkPasswordOnly) {
              controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
            } else {
              controller.enqueue(decrypt(zipCrypto, chunk));
            }
          }
        });
      }
    };
    ZipCryptoEncryptionStream = class extends TransformStream {
      constructor({ password, rawPassword, passwordVerification }) {
        super({
          start() {
            initZipCrypto(this, password, rawPassword, passwordVerification);
          },
          transform(chunk, controller) {
            const zipCrypto = this;
            let output;
            let offset;
            if (zipCrypto.password || zipCrypto.rawPassword) {
              zipCrypto.password = zipCrypto.rawPassword = null;
              const header = getRandomValues(new Uint8Array(HEADER_LENGTH));
              header[HEADER_LENGTH - 1] = zipCrypto.passwordVerification;
              output = new Uint8Array(chunk.length + header.length);
              output.set(encrypt(zipCrypto, header), 0);
              offset = HEADER_LENGTH;
            } else {
              output = new Uint8Array(chunk.length);
              offset = 0;
            }
            output.set(encrypt(zipCrypto, chunk), offset);
            controller.enqueue(output);
          }
        });
      }
    };
  }
});

// node_modules/@zip.js/zip.js/lib/core/util/compatible-streams.js
function toCompatibleReadable(readable) {
  if (readable instanceof ReadableStream) {
    return readable;
  }
  const reader = readable.getReader();
  return new ReadableStream({
    async pull(controller) {
      try {
        const { value, done } = await reader.read();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (error) {
        reader.cancel(error).catch(() => {
        });
        throw error;
      }
    },
    cancel(reason) {
      return reader.cancel(reason);
    }
  });
}
function streamToBlob(readable, contentType) {
  readable = toCompatibleReadable(readable);
  const blobOptions = contentType ? { type: contentType } : {};
  if (responseSupportsGlobalReadable()) {
    return new Response(readable).blob().then((blob) => contentType ? new Blob([blob], blobOptions) : blob);
  }
  const chunks = [];
  return readable.pipeTo(new WritableStream({
    write(chunk) {
      chunks.push(chunk);
    }
  })).then(() => new Blob(chunks, blobOptions));
}
function responseSupportsGlobalReadable() {
  return typeof Blob.prototype.stream != FUNCTION_TYPE || new Blob([]).stream() instanceof ReadableStream;
}
function toCompatibleWritable(writable) {
  if (writable instanceof WritableStream) {
    return writable;
  }
  const writer = writable.getWriter();
  return new WritableStream({
    write(chunk) {
      return writer.write(chunk);
    },
    close() {
      return writer.close();
    },
    abort(reason) {
      return writer.abort(reason);
    }
  });
}
var init_compatible_streams = __esm({
  "node_modules/@zip.js/zip.js/lib/core/util/compatible-streams.js"() {
    init_constants();
  }
});

// node_modules/@zip.js/zip.js/lib/core/codec-registry.js
function getRegisteredCodec(compressionMethod) {
  return registeredCodecs.get(compressionMethod);
}
function getCodecStreams(format) {
  return codecStreams.get(format);
}
function setCodecStreams(format, streams) {
  const { CompressionStream: CompressionStream2, DecompressionStream: DecompressionStream2 } = streams;
  if (typeof CompressionStream2 != FUNCTION_TYPE && typeof DecompressionStream2 != FUNCTION_TYPE) {
    throw new Error(ERR_INVALID_CODEC_MODULE);
  }
  codecStreams.set(format, { CompressionStream: CompressionStream2, DecompressionStream: DecompressionStream2 });
}
async function ensureCodecStreams(format, codecURI) {
  if (!codecStreams.has(format) && codecURI) {
    setCodecStreams(format, await import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      codecURI
    ));
  }
}
var ERR_INVALID_CODEC_MODULE, ERR_UNSUPPORTED_COMPRESSION, registeredCodecs, codecStreams;
var init_codec_registry = __esm({
  "node_modules/@zip.js/zip.js/lib/core/codec-registry.js"() {
    init_constants();
    ERR_INVALID_CODEC_MODULE = "Invalid codec module";
    ERR_UNSUPPORTED_COMPRESSION = "Compression method not supported";
    registeredCodecs = /* @__PURE__ */ new Map();
    codecStreams = /* @__PURE__ */ new Map();
  }
});

// node_modules/@zip.js/zip.js/lib/core/streams/zip-entry-stream.js
function pipeThroughGzipDecompressionStream(readable, gzipStream, outputSize, crc32, sourceErrors) {
  const writer = gzipStream.writable.getWriter();
  const reader = gzipStream.readable.getReader();
  const outputCrc32 = crc32 === UNDEFINED_VALUE ? new Crc32() : UNDEFINED_VALUE;
  let outputLength = 0;
  let trailerWritten = false;
  let settled = false;
  let resolvePull, controller;
  const output = new ReadableStream({
    start(streamController) {
      controller = streamController;
    },
    pull() {
      resumePump();
    },
    cancel(reason) {
      settled = true;
      resumePump();
      return reader.cancel(reason);
    }
  });
  pump();
  drain();
  return output;
  async function pump() {
    const inputReader = readable.getReader();
    try {
      const header = new Uint8Array(GZIP_HEADER_LENGTH);
      header.set(GZIP_HEADER_BYTES);
      await writer.write(header);
      for (; ; ) {
        await outputCapacity();
        await writer.ready;
        const { value, done } = await readSource(inputReader, sourceErrors);
        if (done) {
          break;
        }
        await writer.write(value);
      }
      if (outputCrc32) {
        await writer.write(new Uint8Array(0));
      }
      const trailer = new Uint8Array(GZIP_TRAILER_LENGTH);
      const dataView = getDataView(trailer);
      dataView.setUint32(0, outputCrc32 ? outputCrc32.get() : crc32, true);
      dataView.setUint32(4, outputSize, true);
      trailerWritten = true;
      await writer.write(trailer);
      await writer.close();
    } catch (error) {
      await abort(writer, error);
      await cancel(inputReader, error);
    }
  }
  async function drain() {
    try {
      for (; ; ) {
        const { value, done } = await read();
        if (done) {
          break;
        }
        outputLength += value.length;
        if (outputLength > outputSize) {
          throw new Error(ERR_INVALID_UNCOMPRESSED_SIZE);
        }
        if (outputCrc32) {
          outputCrc32.append(value);
        }
        controller.enqueue(value);
      }
      if (!settled) {
        settled = true;
        controller.close();
      }
    } catch (error) {
      fail(error);
      await cancel(reader, error);
    }
  }
  function read() {
    return reader.read().catch((error) => {
      if (trailerWritten) {
        if (!outputCrc32) {
          throw mapError(error, ERR_INVALID_CRC32);
        }
        if (outputLength != outputSize) {
          throw mapError(error, ERR_INVALID_UNCOMPRESSED_SIZE);
        }
        return { done: true };
      }
      throw mapCodecError(error, sourceErrors);
    });
  }
  function outputCapacity() {
    if (!settled && controller.desiredSize <= 0) {
      return new Promise((resolve) => resolvePull = resolve);
    }
  }
  function resumePump() {
    if (resolvePull) {
      const resolve = resolvePull;
      resolvePull = UNDEFINED_VALUE;
      resolve();
    }
  }
  function fail(error) {
    if (!settled) {
      settled = true;
      controller.error(error);
      resumePump();
    }
  }
}
function supportsFormat(StreamClass, format) {
  if (!StreamClass) {
    return false;
  }
  let supportByFormat = formatSupportByStream.get(StreamClass);
  if (!supportByFormat) {
    supportByFormat = /* @__PURE__ */ new Map();
    formatSupportByStream.set(StreamClass, supportByFormat);
  }
  let supported = supportByFormat.get(format);
  if (supported === UNDEFINED_VALUE) {
    try {
      new StreamClass(format);
      supported = true;
    } catch {
      supported = false;
    }
    supportByFormat.set(format, supported);
  }
  return supported;
}
function supportsDeflateRaw(StreamClass) {
  return supportsFormat(StreamClass, FORMAT_DEFLATE_RAW);
}
function supportsGzip(StreamClass) {
  return supportsFormat(StreamClass, FORMAT_GZIP);
}
function setReadable(stream, readable, flush) {
  readable = pipeThrough(readable, new TransformStream({ flush }));
  Object.defineProperty(stream, "readable", {
    get() {
      return readable;
    }
  });
}
function createCodecStream(CodecStreamClass, format, options) {
  if (!CodecStreamClass) {
    throw new Error(ERR_UNSUPPORTED_COMPRESSION);
  }
  return new CodecStreamClass(format, options);
}
function getGzipCodecStream(useCompressionStream, CodecStreamNative, CodecStreamFallback) {
  if (useCompressionStream && CodecStreamNative) {
    return CodecStreamNative;
  } else if (CodecStreamFallback && CodecStreamFallback.requiresModule) {
    return CodecStreamFallback;
  }
}
function pipeThroughCompressionStream(readable, useCompressionStream, options, CompressionStreamNative, CompressionStreamFallback, sourceErrors) {
  const Stream2 = useCompressionStream && CompressionStreamNative ? CompressionStreamNative : CompressionStreamFallback || CompressionStreamNative;
  const format = options.deflate64 ? FORMAT_DEFLATE64_RAW : FORMAT_DEFLATE_RAW;
  let codecStream;
  try {
    codecStream = new Stream2(format, options);
  } catch (error) {
    if (useCompressionStream && CompressionStreamFallback && Stream2 != CompressionStreamFallback) {
      codecStream = new CompressionStreamFallback(format, options);
    } else {
      throw error;
    }
  }
  return pipeThroughBackpressured(readable, codecStream, sourceErrors);
}
function pipeThrough(readable, transformStream) {
  return toCompatibleReadable(readable).pipeThrough(transformStream);
}
function pipeThroughBackpressured(readable, transformStream, sourceErrors) {
  const writer = transformStream.writable.getWriter();
  const reader = readable.getReader();
  pump();
  return transformStream.readable;
  async function pump() {
    try {
      for (; ; ) {
        await writer.ready;
        const result = await readSource(reader, sourceErrors);
        if (result.done) {
          await writer.close();
          break;
        }
        await writer.write(result.value);
      }
    } catch (error) {
      await abort(writer, error);
      await cancel(reader, error);
    }
  }
}
async function abort(writer, error) {
  try {
    await writer.abort(error);
  } catch {
  }
}
async function cancel(reader, error) {
  try {
    await reader.cancel(error);
  } catch {
  }
}
function readSource(reader, sourceErrors) {
  const result = reader.read();
  return sourceErrors ? result.catch((error) => {
    sourceErrors.add(error);
    throw error;
  }) : result;
}
function mapCodecError(error, sourceErrors) {
  if (sourceErrors.has(error)) {
    return error;
  }
  return mapError(error, isMemoryError(error) ? ERR_CODEC_OUT_OF_MEMORY : ERR_INVALID_COMPRESSED_DATA);
}
function mapMemoryError(error) {
  return isMemoryError(error) ? mapError(error, ERR_CODEC_OUT_OF_MEMORY) : error;
}
function isMemoryError(error) {
  return isErrorObject(error) && error.code == Z_MEM_ERROR_CODE;
}
function mapError(error, message) {
  const mappedError = new Error(message);
  mappedError.cause = error;
  return mappedError;
}
function mapInflateStreamError(readable, sourceErrors) {
  const reader = readable.getReader();
  return new ReadableStream({
    async pull(controller) {
      try {
        const { value, done } = await reader.read();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (error) {
        await cancel(reader, error);
        throw mapCodecError(error, sourceErrors);
      }
    },
    cancel(reason) {
      return reader.cancel(reason);
    }
  });
}
var ERR_INVALID_UNCOMPRESSED_SIZE, ERR_INVALID_COMPRESSED_DATA, ERR_CODEC_OUT_OF_MEMORY, ERR_INVALID_CRC32, Z_MEM_ERROR_CODE, FORMAT_DEFLATE_RAW, FORMAT_DEFLATE64_RAW, FORMAT_GZIP, GZIP_HEADER_LENGTH, GZIP_TRAILER_LENGTH, GZIP_HEADER_BYTES, DeflateStream, GzipToRawDeflateStream, InflateStream, formatSupportByStream;
var init_zip_entry_stream = __esm({
  "node_modules/@zip.js/zip.js/lib/core/streams/zip-entry-stream.js"() {
    init_crc32();
    init_crc32_stream();
    init_aes_crypto_stream();
    init_zip_crypto_stream();
    init_common_crypto();
    init_constants();
    init_array();
    init_compatible_streams();
    init_error();
    init_codec_registry();
    ERR_INVALID_UNCOMPRESSED_SIZE = "Invalid uncompressed size";
    ERR_INVALID_COMPRESSED_DATA = "Invalid compressed data";
    ERR_CODEC_OUT_OF_MEMORY = "Codec out of memory";
    ERR_INVALID_CRC32 = "Invalid CRC32";
    Z_MEM_ERROR_CODE = "Z_MEM_ERROR";
    FORMAT_DEFLATE_RAW = "deflate-raw";
    FORMAT_DEFLATE64_RAW = "deflate64-raw";
    FORMAT_GZIP = "gzip";
    GZIP_HEADER_LENGTH = 10;
    GZIP_TRAILER_LENGTH = 8;
    GZIP_HEADER_BYTES = [31, 139, 8];
    DeflateStream = class extends TransformStream {
      constructor(options, { chunkSize, CompressionStreamFallback, CompressionStream: CompressionStream2 }) {
        super({});
        const { compressed, encrypted, useCompressionStream, zipCrypto, computeCrc32, level, deflate64, format, compressionMethod, inputSize } = options;
        const stream = this;
        let crc32Stream, encryptionStream, gzipCrc32Stream;
        let readable = super.readable;
        const codecStreams2 = format && getCodecStreams(format);
        const GzipCompressionStream = getGzipCodecStream(useCompressionStream, CompressionStream2, CompressionStreamFallback);
        const useGzipCrc32 = computeCrc32 && compressed && !deflate64 && !codecStreams2 && (!encrypted || zipCrypto) && Boolean(GzipCompressionStream);
        if ((!encrypted || zipCrypto) && computeCrc32 && !useGzipCrc32) {
          crc32Stream = new Crc32Stream();
          readable = pipeThrough(readable, crc32Stream);
        }
        if (compressed) {
          if (codecStreams2) {
            readable = pipeThroughBackpressured(readable, createCodecStream(codecStreams2.CompressionStream, format, { level, chunkSize, compressionMethod, uncompressedSize: inputSize }));
          } else if (useGzipCrc32) {
            gzipCrc32Stream = new GzipToRawDeflateStream();
            readable = pipeThroughBackpressured(readable, new GzipCompressionStream(FORMAT_GZIP, { level, chunkSize }));
            readable = pipeThrough(readable, gzipCrc32Stream);
          } else {
            try {
              readable = pipeThroughCompressionStream(readable, useCompressionStream, { level, chunkSize }, CompressionStream2, CompressionStreamFallback);
            } catch (error) {
              if (!useCompressionStream && CompressionStreamFallback) {
                throw mapMemoryError(error);
              }
              let gzipStream;
              try {
                gzipStream = new CompressionStream2(FORMAT_GZIP);
              } catch {
                throw mapMemoryError(error);
              }
              readable = pipeThroughBackpressured(readable, gzipStream);
              readable = pipeThrough(readable, new GzipToRawDeflateStream());
            }
          }
        }
        if (encrypted) {
          if (zipCrypto) {
            readable = pipeThrough(readable, new ZipCryptoEncryptionStream(options));
          } else {
            encryptionStream = new AESEncryptionStream(options);
            readable = pipeThrough(readable, encryptionStream);
          }
        }
        setReadable(stream, readable, () => {
          if ((!encrypted || zipCrypto) && computeCrc32) {
            stream.crc32 = useGzipCrc32 ? gzipCrc32Stream.crc32 : new DataView(crc32Stream.value.buffer).getUint32(0);
          }
        });
      }
    };
    GzipToRawDeflateStream = class extends TransformStream {
      constructor() {
        let stream;
        let headerBytesLeft = GZIP_HEADER_LENGTH;
        let trailerCandidate = new Uint8Array(0);
        super({
          transform(chunk, controller) {
            if (headerBytesLeft) {
              const droppedLength = Math.min(headerBytesLeft, chunk.length);
              headerBytesLeft -= droppedLength;
              chunk = chunk.subarray(droppedLength);
              if (!chunk.length) {
                return;
              }
            }
            const availableLength = trailerCandidate.length + chunk.length;
            if (availableLength <= GZIP_TRAILER_LENGTH) {
              trailerCandidate = concat(trailerCandidate, chunk);
              return;
            }
            const emitLength = availableLength - GZIP_TRAILER_LENGTH;
            const emittedFromTrailer = Math.min(emitLength, trailerCandidate.length);
            controller.enqueue(concat(
              trailerCandidate.subarray(0, emittedFromTrailer),
              chunk.subarray(0, emitLength - emittedFromTrailer)
            ));
            trailerCandidate = concat(
              trailerCandidate.subarray(emittedFromTrailer),
              chunk.subarray(emitLength - emittedFromTrailer)
            );
          },
          flush() {
            const dataView = getDataView(trailerCandidate);
            stream.crc32 = dataView.getUint32(0, true);
            stream.uncompressedSize = dataView.getUint32(4, true);
          }
        });
        stream = this;
      }
    };
    InflateStream = class extends TransformStream {
      constructor(options, { chunkSize, DecompressionStreamFallback, DecompressionStream: DecompressionStream2 }) {
        super({});
        const { zipCrypto, encrypted, checkCrc32, crc32, compressed, useCompressionStream, deflate64, format, compressionMethod, rawBitFlag, outputSize } = options;
        let crc32Stream, decryptionStream, gzipCrc32;
        let readable = super.readable;
        if (encrypted) {
          if (zipCrypto) {
            readable = pipeThrough(readable, new ZipCryptoDecryptionStream(options));
          } else {
            decryptionStream = new AESDecryptionStream(options);
            readable = pipeThrough(readable, decryptionStream);
          }
        }
        if (compressed) {
          const sourceErrors = /* @__PURE__ */ new Set();
          const codecStreams2 = format && getCodecStreams(format);
          let gzipStream;
          if (codecStreams2) {
            readable = pipeThroughBackpressured(readable, createCodecStream(codecStreams2.DecompressionStream, format, { chunkSize, compressionMethod, rawBitFlag, uncompressedSize: outputSize }), sourceErrors);
          } else {
            const GzipDecompressionStream = getGzipCodecStream(useCompressionStream, DecompressionStream2, DecompressionStreamFallback);
            if (checkCrc32 && !deflate64 && crc32 !== UNDEFINED_VALUE && outputSize !== UNDEFINED_VALUE && GzipDecompressionStream) {
              try {
                gzipStream = new GzipDecompressionStream(FORMAT_GZIP, { chunkSize });
              } catch {
                gzipStream = UNDEFINED_VALUE;
              }
            }
            if (!gzipStream) {
              try {
                readable = pipeThroughCompressionStream(readable, useCompressionStream, { chunkSize, deflate64 }, DecompressionStream2, DecompressionStreamFallback, sourceErrors);
              } catch (error) {
                if (deflate64 || outputSize === UNDEFINED_VALUE || !useCompressionStream && DecompressionStreamFallback) {
                  throw mapMemoryError(error);
                }
                try {
                  gzipStream = new DecompressionStream2(FORMAT_GZIP);
                } catch {
                  throw mapMemoryError(error);
                }
              }
            }
          }
          if (gzipStream) {
            gzipCrc32 = true;
            readable = pipeThroughGzipDecompressionStream(readable, gzipStream, outputSize, crc32, sourceErrors);
          } else {
            readable = mapInflateStreamError(readable, sourceErrors);
          }
        }
        if (checkCrc32 && !gzipCrc32) {
          crc32Stream = new Crc32Stream();
          readable = pipeThrough(readable, crc32Stream);
        }
        setReadable(this, readable, () => {
          if (crc32Stream) {
            const computedCrc32 = new DataView(crc32Stream.value.buffer).getUint32(0, false);
            if (crc32 != computedCrc32) {
              throw new Error(ERR_INVALID_CRC32);
            }
          }
        });
      }
    };
    formatSupportByStream = /* @__PURE__ */ new Map();
  }
});

// node_modules/@zip.js/zip.js/lib/core/streams/codec-stream.js
var DEFAULT_CHUNK_SIZE2, MESSAGE_EVENT_TYPE, MESSAGE_START, MESSAGE_PULL, MESSAGE_DATA, MESSAGE_ACK_DATA, MESSAGE_CLOSE, CODEC_DEFLATE, CODEC_INFLATE, CodecStream, ChunkStream;
var init_codec_stream = __esm({
  "node_modules/@zip.js/zip.js/lib/core/streams/codec-stream.js"() {
    init_constants();
    init_zip_entry_stream();
    DEFAULT_CHUNK_SIZE2 = 64 * 1024;
    MESSAGE_EVENT_TYPE = "message";
    MESSAGE_START = "start";
    MESSAGE_PULL = "pull";
    MESSAGE_DATA = "data";
    MESSAGE_ACK_DATA = "ack";
    MESSAGE_CLOSE = "close";
    CODEC_DEFLATE = "deflate";
    CODEC_INFLATE = "inflate";
    CodecStream = class extends TransformStream {
      constructor(options, config2) {
        super({});
        const codec = this;
        const { codecType } = options;
        let Stream2;
        if (codecType.startsWith(CODEC_DEFLATE)) {
          Stream2 = DeflateStream;
        } else if (codecType.startsWith(CODEC_INFLATE)) {
          Stream2 = InflateStream;
        }
        codec.outputSize = 0;
        let inputSize = 0;
        const stream = new Stream2(options, config2);
        const readable = super.readable;
        const inputSizeStream = new TransformStream({
          transform(chunk, controller) {
            if (chunk && chunk.length) {
              inputSize += chunk.length;
              controller.enqueue(chunk);
            }
          },
          flush() {
            Object.assign(codec, {
              inputSize
            });
          }
        });
        const outputSizeStream = new TransformStream({
          transform(chunk, controller) {
            if (chunk && chunk.length) {
              controller.enqueue(chunk);
              codec.outputSize += chunk.length;
              if (options.outputSize !== UNDEFINED_VALUE && codec.outputSize > options.outputSize) {
                throw new Error(ERR_INVALID_UNCOMPRESSED_SIZE);
              }
            }
          },
          flush() {
            const { crc32 } = stream;
            Object.assign(codec, {
              crc32,
              inputSize
            });
          }
        });
        Object.defineProperty(codec, "readable", {
          get() {
            return readable.pipeThrough(inputSizeStream).pipeThrough(stream).pipeThrough(outputSizeStream);
          }
        });
      }
    };
    ChunkStream = class extends TransformStream {
      constructor(chunkSize) {
        const pendingChunks = [];
        let pendingLength = 0;
        let outputSize = 0;
        if (!Number.isFinite(chunkSize) || chunkSize < 1) {
          chunkSize = DEFAULT_CHUNK_SIZE2;
        }
        super({
          transform(chunk, controller) {
            pendingChunks.push(chunk);
            pendingLength += chunk.length;
            while (pendingLength > chunkSize) {
              outputSize += chunkSize;
              controller.enqueue(shiftChunk());
            }
          },
          flush(controller) {
            if (pendingLength) {
              outputSize += pendingLength;
              controller.enqueue(concatChunks(pendingChunks, pendingLength));
            }
          }
        });
        Object.defineProperty(this, "outputSize", {
          get: () => outputSize
        });
        function shiftChunk() {
          const result = new Uint8Array(chunkSize);
          let resultOffset = 0;
          while (resultOffset < chunkSize) {
            const firstChunk = pendingChunks[0];
            const remainingLength = chunkSize - resultOffset;
            if (firstChunk.length <= remainingLength) {
              result.set(firstChunk, resultOffset);
              resultOffset += firstChunk.length;
              pendingChunks.shift();
            } else {
              result.set(firstChunk.subarray(0, remainingLength), resultOffset);
              pendingChunks[0] = firstChunk.subarray(remainingLength);
              resultOffset += remainingLength;
            }
          }
          pendingLength -= chunkSize;
          return result;
        }
        function concatChunks(chunks, length) {
          const result = new Uint8Array(length);
          let offset = 0;
          for (const chunk of chunks) {
            result.set(chunk, offset);
            offset += chunk.length;
          }
          return result;
        }
      }
    };
  }
});

// node_modules/@zip.js/zip.js/lib/core/codec-worker.js
function setWebWorkerBackend(backend) {
  webWorkerBackend = backend;
}
async function supportsDeflate(config2) {
  const { CompressionStream: NativeStream, CompressionStreamFallback: FallbackStream } = config2;
  if (FallbackStream && !FallbackStream.requiresModule) {
    return true;
  }
  if (supportsDeflateRaw(NativeStream) || supportsGzip(NativeStream)) {
    return true;
  }
  if (FallbackStream) {
    return await loadModule(config2);
  }
  return false;
}
async function loadModule(config2) {
  if (initModule) {
    try {
      await initModule(config2);
      return true;
    } catch {
    }
  }
  return false;
}
function disableWebWorker(workerData) {
  if (workerData.createWorker) {
    createWorkerFailed = true;
  } else {
    webWorkerSupported = false;
  }
}
async function callHandler(handler, ...parameters) {
  try {
    await handler(...parameters);
  } catch {
  }
}
function createWorkerInterface(workerData, config2) {
  return {
    run: () => runWorker(workerData, config2)
  };
}
async function runWorker({ options, readable, writable, onTaskFinished, workerOptions }, config2) {
  let codecStream, chunkStream, modulePromise;
  try {
    if (options.compressed && !options.format) {
      const deflate = options.codecType.startsWith(CODEC_DEFLATE);
      const FallbackStream = deflate ? config2.CompressionStreamFallback : config2.DecompressionStreamFallback;
      const NativeStream = deflate ? config2.CompressionStream : config2.DecompressionStream;
      if (!options.useCompressionStream) {
        if (!await moduleLoaded() && (!FallbackStream || FallbackStream.requiresModule)) {
          options.useCompressionStream = true;
        }
      } else if (FallbackStream && FallbackStream.requiresModule && !supportsDeflateRaw(NativeStream)) {
        await moduleLoaded();
      }
    }
    if (options.encrypted && !options.zipCrypto) {
      await moduleLoaded();
    }
    codecStream = new CodecStream(options, config2);
    chunkStream = new ChunkStream(getChunkSize(config2));
    const { signal } = workerOptions.streamOptions;
    await readable.pipeThrough(codecStream).pipeThrough(chunkStream).pipeTo(writable, { preventClose: true, preventAbort: true, signal });
    const {
      crc32,
      inputSize,
      outputSize
    } = codecStream;
    return {
      crc32,
      inputSize,
      outputSize
    };
  } catch (error) {
    if (codecStream) {
      const outputSize = chunkStream ? chunkStream.outputSize : 0;
      workerOptions.outputSize = outputSize;
      if (isErrorObject(error)) {
        try {
          error.outputSize = outputSize;
        } catch {
        }
      }
    }
    throw error;
  } finally {
    onTaskFinished();
  }
  function moduleLoaded() {
    if (!modulePromise) {
      modulePromise = loadModule(config2);
    }
    return modulePromise;
  }
}
var ERR_WORKER_STARTUP_TIMEOUT, webWorkerSupported, createWorkerFailed, webWorkerBackend, initModule, CodecWorker, ProgressWatcherStream;
var init_codec_worker = __esm({
  "node_modules/@zip.js/zip.js/lib/core/codec-worker.js"() {
    init_constants();
    init_configuration();
    init_error();
    init_codec_stream();
    ERR_WORKER_STARTUP_TIMEOUT = "Worker startup timeout";
    initModule = () => {
    };
    CodecWorker = class {
      constructor(workerData, { readable, writable }, workerOptions, onTaskFinished) {
        const { options, config: config2, streamOptions, useWebWorkers, transferStreams, workerURI } = workerOptions;
        let { createWorker } = workerOptions;
        const { signal } = streamOptions;
        if (createWorkerFailed) {
          createWorker = UNDEFINED_VALUE;
        }
        Object.assign(workerData, {
          busy: true,
          generation: (workerData.generation || 0) + 1,
          readable: readable.pipeThrough(new ChunkStream(getChunkSize(config2))).pipeThrough(new ProgressWatcherStream(streamOptions), { signal }),
          writable,
          options: Object.assign({}, options),
          workerOptions,
          workerURI,
          createWorker,
          transferStreams,
          terminate() {
            return new Promise((resolve) => {
              const { worker, busy } = workerData;
              if (busy) {
                workerData.terminateResolvers = workerData.terminateResolvers || [];
                workerData.terminateResolvers.push(resolve);
              } else {
                if (worker) {
                  worker.terminate();
                  workerData.worker = null;
                }
                resolve();
              }
              workerData.interface = null;
            });
          },
          onTaskFinished() {
            if (workerData.busy) {
              const { terminateResolvers, worker } = workerData;
              if (terminateResolvers) {
                workerData.terminateResolvers = null;
                if (worker) {
                  workerData.terminated = true;
                  worker.terminate();
                }
              }
              workerData.busy = false;
              const pendingTasks = onTaskFinished(workerData);
              if (terminateResolvers) {
                terminateResolvers.forEach((resolve) => resolve(pendingTasks));
              }
            }
          }
        });
        if (webWorkerSupported === UNDEFINED_VALUE) {
          webWorkerSupported = typeof Worker != UNDEFINED_TYPE;
        }
        return (useWebWorkers && webWorkerBackend && (webWorkerSupported && workerURI || createWorker) ? webWorkerBackend : createWorkerInterface)(workerData, config2);
      }
    };
    ProgressWatcherStream = class extends TransformStream {
      constructor({ onstart, onprogress, size, onend }) {
        let chunkOffset = 0;
        super({
          async start() {
            if (onstart) {
              await callHandler(onstart, size);
            }
          },
          async transform(chunk, controller) {
            chunkOffset += chunk.length;
            if (onprogress) {
              await callHandler(onprogress, chunkOffset, size);
            }
            controller.enqueue(chunk);
          },
          async flush() {
            if (onend) {
              await callHandler(onend, chunkOffset);
            }
          }
        });
      }
    };
  }
});

// node_modules/@zip.js/zip.js/lib/core/codec-pool.js
async function runWorker2(stream, workerOptions) {
  const { options, config: config2 } = workerOptions;
  const { transferStreams, useWebWorkers, useCompressionStream, compressed, checkCrc32, computeCrc32, encrypted, format, codecURI } = options;
  const { workerURI, createWorker, maxWorkers: maxWorkers2 } = config2;
  if (format) {
    if (codecURI) {
      options.codecURI = resolveCodecURI(codecURI, config2.baseURI);
    }
    await ensureCodecStreams(format, options.codecURI);
  }
  workerOptions.transferStreams = !format && (transferStreams || transferStreams === UNDEFINED_VALUE && config2.transferStreams);
  const streamCopy = !compressed && !checkCrc32 && !computeCrc32 && !encrypted;
  const workerSupported = format === UNDEFINED_VALUE || Boolean(options.codecURI);
  workerOptions.useWebWorkers = !streamCopy && workerSupported && (useWebWorkers || useWebWorkers === UNDEFINED_VALUE && config2.useWebWorkers);
  workerOptions.workerURI = workerOptions.useWebWorkers && workerURI ? workerURI : UNDEFINED_VALUE;
  workerOptions.createWorker = workerOptions.useWebWorkers && createWorker ? createWorker : UNDEFINED_VALUE;
  options.useCompressionStream = useCompressionStream || useCompressionStream === UNDEFINED_VALUE && config2.useCompressionStream;
  return (await getWorker()).run();
  async function getWorker() {
    const workerData = pool.find((workerData2) => !workerData2.busy);
    if (workerData) {
      clearTerminateTimeout(workerData);
      return new CodecWorker(workerData, stream, workerOptions, onTaskFinished);
    } else if (pool.length < maxWorkers2) {
      const workerData2 = { indexWorker };
      indexWorker++;
      pool.push(workerData2);
      return new CodecWorker(workerData2, stream, workerOptions, onTaskFinished);
    } else {
      return new Promise((resolve) => {
        pendingRequests.push({ resolve, stream, workerOptions });
        starvationDelay = config2.workerStarvationTimeout;
        armStarvationTimeout();
      });
    }
  }
  function onTaskFinished(workerData) {
    clearStarvationTimeout();
    if (workerData.terminated) {
      workerData.terminated = false;
      return runPendingRequestsInline();
    } else if (pendingRequests.length) {
      const [{ resolve, stream: stream2, workerOptions: workerOptions2 }] = pendingRequests.splice(0, 1);
      resolve(new CodecWorker(workerData, stream2, workerOptions2, onTaskFinished));
      armStarvationTimeout();
    } else if (workerData.worker) {
      clearTerminateTimeout(workerData);
      terminateWorker2(workerData, workerOptions);
    } else {
      pool = pool.filter((data) => data != workerData);
    }
  }
}
function resolveCodecURI(codecURI, baseURI) {
  try {
    return new URL(codecURI, baseURI).toString();
  } catch {
    return codecURI;
  }
}
function armStarvationTimeout() {
  if (!starvationTimeout && pendingRequests.length && Number.isFinite(starvationDelay) && starvationDelay >= 0) {
    starvationTimeout = setTimeout(onWorkerStarvation, starvationDelay);
  }
}
function clearStarvationTimeout() {
  if (starvationTimeout) {
    clearTimeout(starvationTimeout);
    starvationTimeout = null;
  }
}
function onWorkerStarvation() {
  starvationTimeout = null;
  if (pendingRequests.length) {
    const [{ resolve, stream, workerOptions }] = pendingRequests.splice(0, 1);
    resolve(new CodecWorker({}, stream, getInlineWorkerOptions(workerOptions), onInlineTaskFinished));
    armStarvationTimeout();
  }
}
function runPendingRequestsInline() {
  const tasks = pendingRequests.splice(0).map(({ resolve, stream, workerOptions }) => new Promise((resolveTask) => {
    resolve(new CodecWorker({}, stream, getInlineWorkerOptions(workerOptions), () => {
      onInlineTaskFinished();
      resolveTask();
    }));
  }));
  clearStarvationTimeout();
  return Promise.all(tasks);
}
function getInlineWorkerOptions(workerOptions) {
  return Object.assign({}, workerOptions, { useWebWorkers: false, workerURI: UNDEFINED_VALUE, createWorker: UNDEFINED_VALUE });
}
function onInlineTaskFinished() {
  clearStarvationTimeout();
  armStarvationTimeout();
}
function terminateWorker2(workerData, workerOptions) {
  const { config: config2 } = workerOptions;
  const { terminateWorkerTimeout } = config2;
  if (Number.isFinite(terminateWorkerTimeout) && terminateWorkerTimeout >= 0) {
    workerData.terminateTimeout = setTimeout(async () => {
      pool = pool.filter((data) => data != workerData);
      try {
        await workerData.terminate();
      } catch {
      }
    }, terminateWorkerTimeout);
  }
}
function clearTerminateTimeout(workerData) {
  const { terminateTimeout } = workerData;
  if (terminateTimeout) {
    clearTimeout(terminateTimeout);
    workerData.terminateTimeout = null;
  }
}
var pool, pendingRequests, starvationTimeout, starvationDelay, indexWorker;
var init_codec_pool = __esm({
  "node_modules/@zip.js/zip.js/lib/core/codec-pool.js"() {
    init_constants();
    init_codec_stream();
    init_codec_registry();
    init_codec_worker();
    pool = [];
    pendingRequests = [];
    indexWorker = 0;
  }
});

// node_modules/@zip.js/zip.js/lib/core/util/decode-cp437.js
function decodeCP437(stringValue) {
  let result = "";
  for (let indexCharacter = 0; indexCharacter < stringValue.length; indexCharacter++) {
    result += CP437[stringValue[indexCharacter]];
  }
  return result;
}
var CP437;
var init_decode_cp437 = __esm({
  "node_modules/@zip.js/zip.js/lib/core/util/decode-cp437.js"() {
    CP437 = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0\xA0".split("");
  }
});

// node_modules/@zip.js/zip.js/lib/core/util/decode-text.js
function decodeText(value, encoding) {
  return decode(value, encoding, true);
}
function isUTF8Text(value) {
  if (value.some((byte) => byte > 127)) {
    try {
      new TextDecoder("utf-8", { fatal: true }).decode(value);
      return true;
    } catch {
      return false;
    }
  } else {
    return false;
  }
}
function decode(value, encoding, ignoreBOM) {
  if (encoding && encoding.trim().toLowerCase() == "cp437") {
    return decodeCP437(value);
  } else {
    return new TextDecoder(encoding, { ignoreBOM }).decode(value);
  }
}
var init_decode_text = __esm({
  "node_modules/@zip.js/zip.js/lib/core/util/decode-text.js"() {
    init_decode_cp437();
  }
});

// node_modules/@zip.js/zip.js/lib/core/io.js
function probeBlobSliceReliability() {
  blobSliceProbe = (async () => {
    try {
      const slicedBlob = new Blob([new Uint8Array(3)]).slice(1, 2);
      const streamReader = slicedBlob.stream().getReader();
      let streamedLength = 0;
      let result = await streamReader.read();
      while (!result.done) {
        streamedLength += result.value.length;
        result = await streamReader.read();
      }
      blobSliceReliable = streamedLength == 1;
    } catch {
      blobSliceReliable = false;
    }
  })();
}
function ownsWritable(writer) {
  return Boolean(writer && writer.getData);
}
async function initStream(stream, initSize) {
  if (stream.init && !stream.initialized) {
    await stream.init(initSize);
  } else {
    return Promise.resolve();
  }
}
async function initDiskReader(diskReader) {
  diskReader = new GenericReader(diskReader);
  await initStream(diskReader);
  if (diskReader.size === UNDEFINED_VALUE || !diskReader.readUint8Array) {
    diskReader = new BlobReader(await streamToBlob(diskReader.readable));
    await initStream(diskReader);
  }
  return diskReader;
}
function readUint8Array(reader, offset, size) {
  return reader.readUint8Array(offset, size);
}
function createReadable(reader, options) {
  if (reader.createReadable) {
    return reader.createReadable(options);
  } else if (reader.readUint8Array) {
    return Reader.prototype.createReadable.call(reader, options);
  } else {
    return reader.readable;
  }
}
var ERR_ITERATOR_COMPLETED_TOO_SOON, ERR_WRITER_SIZE_NOT_WRITABLE, DEFAULT_BUFFER_SIZE, DEFAULT_MAXIMUM_RANGE_SIZE, END_OF_CENTRAL_DIR_SEARCH_LENGTH, PROPERTY_NAME_WRITABLE, DISK_BOUNDARY, Stream, Reader, blobSliceReliable, blobSliceProbe, BlobReader, SplitDataReader, SplitDataWriter, GenericReader, GenericWriter;
var init_io = __esm({
  "node_modules/@zip.js/zip.js/lib/core/io.js"() {
    init_constants();
    init_configuration();
    init_array();
    init_compatible_streams();
    init_decode_text();
    ERR_ITERATOR_COMPLETED_TOO_SOON = "Writer iterator completed too soon";
    ERR_WRITER_SIZE_NOT_WRITABLE = "Invalid writer (size must be writable)";
    DEFAULT_BUFFER_SIZE = 256 * 1024;
    DEFAULT_MAXIMUM_RANGE_SIZE = 16 * 1024 * 1024;
    END_OF_CENTRAL_DIR_SEARCH_LENGTH = END_OF_CENTRAL_DIR_LENGTH + MAX_16_BITS;
    PROPERTY_NAME_WRITABLE = "writable";
    DISK_BOUNDARY = /* @__PURE__ */ Symbol();
    Stream = class {
      constructor() {
        this.size = 0;
      }
      init() {
        this.initialized = true;
      }
    };
    Reader = class extends Stream {
      get readable() {
        return this.createReadable();
      }
      createReadable({ offset = 0, size, chunkSize = getChunkSize(getConfiguration()) } = {}) {
        const reader = this;
        let chunkOffset = 0;
        chunkSize = normalizeChunkSize(chunkSize);
        return new ReadableStream({
          async pull(controller) {
            const dataSize = size === UNDEFINED_VALUE ? chunkSize : Math.min(chunkSize, size - chunkOffset);
            const data = await readUint8Array(reader, offset + chunkOffset, dataSize);
            if (data.length) {
              controller.enqueue(data);
              chunkOffset += data.length;
            }
            if (size !== UNDEFINED_VALUE && chunkOffset >= size || !data.length && dataSize) {
              controller.close();
            }
          }
        });
      }
    };
    BlobReader = class extends Reader {
      constructor(blob) {
        super();
        Object.assign(this, {
          sourceBlob: blob,
          size: blob.size
        });
        if (!blobSliceProbe) {
          probeBlobSliceReliability();
        }
      }
      createReadable(options) {
        const reader = this;
        const { sourceBlob, size } = reader;
        const { offset = 0, size: readSize = size - offset } = options || {};
        if (typeof sourceBlob.stream == FUNCTION_TYPE) {
          if (!offset && readSize >= size) {
            return toCompatibleReadable(sourceBlob.stream());
          }
          if (blobSliceReliable) {
            return toCompatibleReadable(sourceBlob.slice(offset, offset + readSize).stream());
          }
        }
        return super.createReadable(options);
      }
      async readUint8Array(offset, length) {
        const reader = this;
        const offsetEnd = offset + length;
        const readsWholeBlob = !offset && offsetEnd >= reader.size;
        const blob = readsWholeBlob ? reader.sourceBlob : reader.sourceBlob.slice(offset, offsetEnd);
        let arrayBuffer = await blob.arrayBuffer();
        const sliceIgnoredByBuggyImplementation = arrayBuffer.byteLength > length;
        if (sliceIgnoredByBuggyImplementation) {
          arrayBuffer = arrayBuffer.slice(offset, offsetEnd);
        }
        return new Uint8Array(arrayBuffer);
      }
    };
    SplitDataReader = class extends Reader {
      constructor(readers) {
        super();
        this.readers = readers;
      }
      async init() {
        const reader = this;
        reader.lastDiskNumber = 0;
        const readers = reader.readers = await Promise.all(reader.readers.map(initDiskReader));
        reader.diskOffsets = readers.map((diskReader) => {
          const diskOffset = reader.size;
          reader.size += diskReader.size;
          return diskOffset;
        });
        super.init();
      }
      getDiskOffset(diskNumber) {
        const { diskOffsets, size } = this;
        const diskOffset = diskOffsets[diskNumber];
        return diskOffset === UNDEFINED_VALUE ? size : diskOffset;
      }
      async readUint8Array(offset, length) {
        const reader = this;
        const { readers } = this;
        let result;
        let currentDiskNumber = 0;
        let currentReaderOffset = offset;
        while (readers[currentDiskNumber] && currentReaderOffset >= readers[currentDiskNumber].size) {
          currentReaderOffset -= readers[currentDiskNumber].size;
          currentDiskNumber++;
        }
        const currentReader = readers[currentDiskNumber];
        if (currentReader) {
          const currentReaderSize = currentReader.size;
          if (currentReaderOffset + length <= currentReaderSize) {
            result = await readUint8Array(currentReader, currentReaderOffset, length);
          } else {
            const chunkLength = currentReaderSize - currentReaderOffset;
            const firstPart = await readUint8Array(currentReader, currentReaderOffset, chunkLength);
            const secondPart = await reader.readUint8Array(offset + chunkLength, length - chunkLength);
            result = concat(firstPart, secondPart);
          }
        } else {
          result = EMPTY_UINT8_ARRAY;
        }
        reader.lastDiskNumber = Math.max(currentDiskNumber, reader.lastDiskNumber);
        return result;
      }
    };
    SplitDataWriter = class extends Stream {
      constructor(writerGenerator, maxSize = 4294967295) {
        super();
        const writer = this;
        Object.assign(writer, {
          diskNumber: 0,
          diskOffset: 0,
          size: 0,
          maxSize,
          availableSize: maxSize
        });
        let diskSourceWriter, diskWritable, diskWriter;
        const writable = new WritableStream({
          async write(chunk) {
            if (chunk === DISK_BOUNDARY) {
              if (diskWriter) {
                await endDisk();
              }
              return;
            }
            const { availableSize } = writer;
            if (!diskWriter) {
              const { value, done } = await writerGenerator.next();
              if (done && !value) {
                throw new Error(ERR_ITERATOR_COMPLETED_TOO_SOON);
              } else {
                diskSourceWriter = value;
                diskSourceWriter.size = 0;
                if (diskSourceWriter.maxSize) {
                  writer.maxSize = diskSourceWriter.maxSize;
                }
                writer.availableSize = writer.maxSize;
                await initStream(diskSourceWriter);
                diskWritable = value.writable;
                diskWriter = diskWritable.getWriter();
              }
              await this.write(chunk);
            } else if (chunk.length >= availableSize) {
              await writeChunk(chunk.subarray(0, availableSize));
              await endDisk();
              if (chunk.length > availableSize) {
                await this.write(chunk.subarray(availableSize));
              }
            } else {
              await writeChunk(chunk);
            }
          },
          async close() {
            if (diskWriter) {
              await diskWriter.ready;
              await closeDiskWriter();
            }
          },
          async abort(reason) {
            if (diskWriter) {
              await diskWriter.abort(reason);
            }
          }
        });
        Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
          get() {
            return writable;
          }
        });
        async function writeChunk(chunk) {
          const chunkLength = chunk.length;
          if (chunkLength) {
            await diskWriter.ready;
            await diskWriter.write(chunk);
            diskSourceWriter.size += chunkLength;
            writer.availableSize -= chunkLength;
          }
        }
        async function endDisk() {
          await closeDiskWriter();
          writer.diskOffset += diskSourceWriter.size;
          writer.diskNumber++;
          diskWriter = null;
          writer.availableSize = writer.maxSize;
        }
        async function closeDiskWriter() {
          await diskWriter.close();
        }
      }
      async closeDisk() {
        const streamWriter = this.writable.getWriter();
        try {
          await streamWriter.ready;
          await streamWriter.write(DISK_BOUNDARY);
        } finally {
          streamWriter.releaseLock();
        }
      }
    };
    GenericReader = class {
      constructor(reader) {
        if (Array.isArray(reader)) {
          reader = new SplitDataReader(reader);
        }
        if (reader instanceof ReadableStream || typeof reader.getReader == FUNCTION_TYPE) {
          reader = {
            readable: toCompatibleReadable(reader)
          };
        }
        return reader;
      }
    };
    GenericWriter = class {
      constructor(writer) {
        if (writer.writable === UNDEFINED_VALUE && typeof writer.next == FUNCTION_TYPE) {
          writer = new SplitDataWriter(writer);
        }
        if (writer instanceof WritableStream || typeof writer.getWriter == FUNCTION_TYPE) {
          writer = {
            writable: toCompatibleWritable(writer)
          };
        }
        try {
          writer.size = writer.size === UNDEFINED_VALUE ? 0 : writer.size;
        } catch {
          throw new Error(ERR_WRITER_SIZE_NOT_WRITABLE);
        }
        return writer;
      }
    };
  }
});

// node_modules/@zip.js/zip.js/lib/core/util/warnings.js
function addWarning(warnings, reason, filename) {
  if (!warnings.some((warning) => warning.reason == reason)) {
    const warning = { reason };
    if (filename !== UNDEFINED_VALUE) {
      warning.filename = filename;
    }
    warnings.push(warning);
  }
}
var init_warnings = __esm({
  "node_modules/@zip.js/zip.js/lib/core/util/warnings.js"() {
    init_constants();
  }
});

// node_modules/@zip.js/zip.js/lib/core/zip-entry.js
function getUserExtraField(extraField) {
  if (extraField) {
    const userExtraField = /* @__PURE__ */ new Map();
    extraField.forEach((field2, type) => {
      if (!INTERPRETED_EXTRA_FIELD_TYPES.has(type)) {
        userExtraField.set(type, field2.data);
      }
    });
    if (userExtraField.size) {
      return userExtraField;
    }
  }
}
function getEncryptionOverhead(encrypted, zipCrypto, encryptionStrength) {
  return encrypted ? zipCrypto ? 12 : 16 + encryptionStrength * 4 : 0;
}
var PROPERTY_NAME_FILENAME, PROPERTY_NAME_RAW_FILENAME, PROPERTY_NAME_COMMENT, PROPERTY_NAME_RAW_COMMENT, PROPERTY_NAME_UNCOMPRESSED_SIZE, PROPERTY_NAME_COMPRESSED_SIZE, PROPERTY_NAME_OFFSET, PROPERTY_NAME_DISK_NUMBER_START, PROPERTY_NAME_LAST_MODIFICATION_DATE, PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE, PROPERTY_NAME_LAST_ACCESS_DATE, PROPERTY_NAME_RAW_LAST_ACCESS_DATE, PROPERTY_NAME_CREATION_DATE, PROPERTY_NAME_RAW_CREATION_DATE, PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES, PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES, PROPERTY_NAME_MSDOS_ATTRIBUTES_RAW, PROPERTY_NAME_MSDOS_ATTRIBUTES, PROPERTY_NAME_MS_DOS_COMPATIBLE, PROPERTY_NAME_ZIP64, PROPERTY_NAME_ENCRYPTED, PROPERTY_NAME_VERSION, PROPERTY_NAME_VERSION_MADE_BY, PROPERTY_NAME_ZIPCRYPTO, PROPERTY_NAME_DIRECTORY, PROPERTY_NAME_EXECUTABLE, PROPERTY_NAME_SYMLINK, PROPERTY_NAME_COMPRESSION_METHOD, PROPERTY_NAME_SIGNATURE, PROPERTY_NAME_CRC32, PROPERTY_NAME_EXTRA_FIELD, PROPERTY_NAME_EXTRA_FIELD_INFOZIP, PROPERTY_NAME_EXTRA_FIELD_UNIX, PROPERTY_NAME_EXTRA_FIELD_UNIX_TYPE1, PROPERTY_NAME_EXTRA_FIELD_PKWARE_UNIX, PROPERTY_NAME_UID, PROPERTY_NAME_GID, PROPERTY_NAME_UNIX_MODE, PROPERTY_NAME_SETUID, PROPERTY_NAME_SETGID, PROPERTY_NAME_STICKY, PROPERTY_NAME_BITFLAG, PROPERTY_NAME_RAW_BITFLAG, PROPERTY_NAME_FILENAME_LENGTH, PROPERTY_NAME_EXTRA_FIELD_LENGTH, PROPERTY_NAME_UNIX_EXTERNAL_UPPER, PROPERTY_NAME_FILENAME_UTF8, PROPERTY_NAME_COMMENT_UTF8, PROPERTY_NAME_RAW_EXTRA_FIELD, PROPERTY_NAME_EXTRA_FIELD_ZIP64, PROPERTY_NAME_EXTRA_FIELD_UNICODE_PATH, PROPERTY_NAME_EXTRA_FIELD_UNICODE_COMMENT, PROPERTY_NAME_EXTRA_FIELD_AES, PROPERTY_NAME_EXTRA_FIELD_NTFS, PROPERTY_NAME_EXTRA_FIELD_EXTENDED_TIMESTAMP, PROPERTY_NAME_EXTRA_FIELD_USDZ, PROPERTY_NAMES, Entry, INTERPRETED_EXTRA_FIELD_TYPES;
var init_zip_entry = __esm({
  "node_modules/@zip.js/zip.js/lib/core/zip-entry.js"() {
    init_constants();
    PROPERTY_NAME_FILENAME = "filename";
    PROPERTY_NAME_RAW_FILENAME = "rawFilename";
    PROPERTY_NAME_COMMENT = "comment";
    PROPERTY_NAME_RAW_COMMENT = "rawComment";
    PROPERTY_NAME_UNCOMPRESSED_SIZE = "uncompressedSize";
    PROPERTY_NAME_COMPRESSED_SIZE = "compressedSize";
    PROPERTY_NAME_OFFSET = "offset";
    PROPERTY_NAME_DISK_NUMBER_START = "diskNumberStart";
    PROPERTY_NAME_LAST_MODIFICATION_DATE = "lastModDate";
    PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE = "rawLastModDate";
    PROPERTY_NAME_LAST_ACCESS_DATE = "lastAccessDate";
    PROPERTY_NAME_RAW_LAST_ACCESS_DATE = "rawLastAccessDate";
    PROPERTY_NAME_CREATION_DATE = "creationDate";
    PROPERTY_NAME_RAW_CREATION_DATE = "rawCreationDate";
    PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES = "internalFileAttributes";
    PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES = "externalFileAttributes";
    PROPERTY_NAME_MSDOS_ATTRIBUTES_RAW = "msdosAttributesRaw";
    PROPERTY_NAME_MSDOS_ATTRIBUTES = "msdosAttributes";
    PROPERTY_NAME_MS_DOS_COMPATIBLE = "msDosCompatible";
    PROPERTY_NAME_ZIP64 = "zip64";
    PROPERTY_NAME_ENCRYPTED = "encrypted";
    PROPERTY_NAME_VERSION = "version";
    PROPERTY_NAME_VERSION_MADE_BY = "versionMadeBy";
    PROPERTY_NAME_ZIPCRYPTO = "zipCrypto";
    PROPERTY_NAME_DIRECTORY = "directory";
    PROPERTY_NAME_EXECUTABLE = "executable";
    PROPERTY_NAME_SYMLINK = "symlink";
    PROPERTY_NAME_COMPRESSION_METHOD = "compressionMethod";
    PROPERTY_NAME_SIGNATURE = "signature";
    PROPERTY_NAME_CRC32 = "crc32";
    PROPERTY_NAME_EXTRA_FIELD = "extraField";
    PROPERTY_NAME_EXTRA_FIELD_INFOZIP = "extraFieldInfoZip";
    PROPERTY_NAME_EXTRA_FIELD_UNIX = "extraFieldUnix";
    PROPERTY_NAME_EXTRA_FIELD_UNIX_TYPE1 = "extraFieldUnixType1";
    PROPERTY_NAME_EXTRA_FIELD_PKWARE_UNIX = "extraFieldPkwareUnix";
    PROPERTY_NAME_UID = "uid";
    PROPERTY_NAME_GID = "gid";
    PROPERTY_NAME_UNIX_MODE = "unixMode";
    PROPERTY_NAME_SETUID = "setuid";
    PROPERTY_NAME_SETGID = "setgid";
    PROPERTY_NAME_STICKY = "sticky";
    PROPERTY_NAME_BITFLAG = "bitFlag";
    PROPERTY_NAME_RAW_BITFLAG = "rawBitFlag";
    PROPERTY_NAME_FILENAME_LENGTH = "filenameLength";
    PROPERTY_NAME_EXTRA_FIELD_LENGTH = "extraFieldLength";
    PROPERTY_NAME_UNIX_EXTERNAL_UPPER = "unixExternalUpper";
    PROPERTY_NAME_FILENAME_UTF8 = "filenameUTF8";
    PROPERTY_NAME_COMMENT_UTF8 = "commentUTF8";
    PROPERTY_NAME_RAW_EXTRA_FIELD = "rawExtraField";
    PROPERTY_NAME_EXTRA_FIELD_ZIP64 = "extraFieldZip64";
    PROPERTY_NAME_EXTRA_FIELD_UNICODE_PATH = "extraFieldUnicodePath";
    PROPERTY_NAME_EXTRA_FIELD_UNICODE_COMMENT = "extraFieldUnicodeComment";
    PROPERTY_NAME_EXTRA_FIELD_AES = "extraFieldAES";
    PROPERTY_NAME_EXTRA_FIELD_NTFS = "extraFieldNTFS";
    PROPERTY_NAME_EXTRA_FIELD_EXTENDED_TIMESTAMP = "extraFieldExtendedTimestamp";
    PROPERTY_NAME_EXTRA_FIELD_USDZ = "extraFieldUSDZ";
    PROPERTY_NAMES = [
      PROPERTY_NAME_FILENAME,
      PROPERTY_NAME_RAW_FILENAME,
      PROPERTY_NAME_UNCOMPRESSED_SIZE,
      PROPERTY_NAME_COMPRESSED_SIZE,
      PROPERTY_NAME_LAST_MODIFICATION_DATE,
      PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE,
      PROPERTY_NAME_COMMENT,
      PROPERTY_NAME_RAW_COMMENT,
      PROPERTY_NAME_LAST_ACCESS_DATE,
      PROPERTY_NAME_RAW_LAST_ACCESS_DATE,
      PROPERTY_NAME_CREATION_DATE,
      PROPERTY_NAME_RAW_CREATION_DATE,
      PROPERTY_NAME_OFFSET,
      PROPERTY_NAME_DISK_NUMBER_START,
      PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES,
      PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES,
      PROPERTY_NAME_MSDOS_ATTRIBUTES_RAW,
      PROPERTY_NAME_MSDOS_ATTRIBUTES,
      PROPERTY_NAME_MS_DOS_COMPATIBLE,
      PROPERTY_NAME_ZIP64,
      PROPERTY_NAME_ENCRYPTED,
      PROPERTY_NAME_VERSION,
      PROPERTY_NAME_VERSION_MADE_BY,
      PROPERTY_NAME_ZIPCRYPTO,
      PROPERTY_NAME_DIRECTORY,
      PROPERTY_NAME_EXECUTABLE,
      PROPERTY_NAME_SYMLINK,
      PROPERTY_NAME_COMPRESSION_METHOD,
      PROPERTY_NAME_SIGNATURE,
      PROPERTY_NAME_CRC32,
      PROPERTY_NAME_EXTRA_FIELD,
      PROPERTY_NAME_EXTRA_FIELD_UNIX,
      PROPERTY_NAME_EXTRA_FIELD_INFOZIP,
      PROPERTY_NAME_EXTRA_FIELD_UNIX_TYPE1,
      PROPERTY_NAME_EXTRA_FIELD_PKWARE_UNIX,
      PROPERTY_NAME_UID,
      PROPERTY_NAME_GID,
      PROPERTY_NAME_UNIX_MODE,
      PROPERTY_NAME_UNIX_EXTERNAL_UPPER,
      PROPERTY_NAME_SETUID,
      PROPERTY_NAME_SETGID,
      PROPERTY_NAME_STICKY,
      PROPERTY_NAME_BITFLAG,
      PROPERTY_NAME_RAW_BITFLAG,
      PROPERTY_NAME_FILENAME_LENGTH,
      PROPERTY_NAME_EXTRA_FIELD_LENGTH,
      PROPERTY_NAME_FILENAME_UTF8,
      PROPERTY_NAME_COMMENT_UTF8,
      PROPERTY_NAME_RAW_EXTRA_FIELD,
      PROPERTY_NAME_EXTRA_FIELD_ZIP64,
      PROPERTY_NAME_EXTRA_FIELD_UNICODE_PATH,
      PROPERTY_NAME_EXTRA_FIELD_UNICODE_COMMENT,
      PROPERTY_NAME_EXTRA_FIELD_AES,
      PROPERTY_NAME_EXTRA_FIELD_NTFS,
      PROPERTY_NAME_EXTRA_FIELD_EXTENDED_TIMESTAMP,
      PROPERTY_NAME_EXTRA_FIELD_USDZ
    ];
    Entry = class {
      constructor(data) {
        PROPERTY_NAMES.forEach((name) => this[name] = data[name]);
      }
    };
    INTERPRETED_EXTRA_FIELD_TYPES = /* @__PURE__ */ new Set([
      EXTRAFIELD_TYPE_ZIP64,
      EXTRAFIELD_TYPE_AES,
      EXTRAFIELD_TYPE_NTFS,
      EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP,
      EXTRAFIELD_TYPE_UNICODE_PATH,
      EXTRAFIELD_TYPE_UNICODE_COMMENT,
      EXTRAFIELD_TYPE_USDZ,
      EXTRAFIELD_TYPE_INFOZIP,
      EXTRAFIELD_TYPE_UNIX,
      EXTRAFIELD_TYPE_UNIX_TYPE1,
      EXTRAFIELD_TYPE_PKWARE_UNIX
    ]);
  }
});

// node_modules/@zip.js/zip.js/lib/core/zip-reader.js
var zip_reader_exports = {};
__export(zip_reader_exports, {
  ERR_AMBIGUOUS_ARCHIVE: () => ERR_AMBIGUOUS_ARCHIVE,
  ERR_BAD_FORMAT: () => ERR_BAD_FORMAT,
  ERR_CENTRAL_DIRECTORY_NOT_FOUND: () => ERR_CENTRAL_DIRECTORY_NOT_FOUND,
  ERR_CODEC_OUT_OF_MEMORY: () => ERR_CODEC_OUT_OF_MEMORY,
  ERR_ENCRYPTED: () => ERR_ENCRYPTED,
  ERR_ENCRYPTED_CENTRAL_DIRECTORY: () => ERR_ENCRYPTED_CENTRAL_DIRECTORY,
  ERR_ENTRY_DATA_OUT_OF_BOUNDS: () => ERR_ENTRY_DATA_OUT_OF_BOUNDS,
  ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND: () => ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND,
  ERR_EOCDR_NOT_FOUND: () => ERR_EOCDR_NOT_FOUND,
  ERR_EXTRAFIELD_ZIP64_NOT_FOUND: () => ERR_EXTRAFIELD_ZIP64_NOT_FOUND,
  ERR_INVALID_AUTHENTICATION_CODE: () => ERR_INVALID_AUTHENTICATION_CODE,
  ERR_INVALID_COMPRESSED_DATA: () => ERR_INVALID_COMPRESSED_DATA,
  ERR_INVALID_CRC32: () => ERR_INVALID_CRC32,
  ERR_INVALID_FILENAME_VALIDATION: () => ERR_INVALID_FILENAME_VALIDATION,
  ERR_INVALID_MAX_APPENDED_DATA_SIZE: () => ERR_INVALID_MAX_APPENDED_DATA_SIZE,
  ERR_INVALID_PASSWORD: () => ERR_INVALID_PASSWORD,
  ERR_INVALID_STRICTNESS: () => ERR_INVALID_STRICTNESS,
  ERR_INVALID_UNCOMPRESSED_SIZE: () => ERR_INVALID_UNCOMPRESSED_SIZE,
  ERR_LOCAL_FILE_HEADER_NOT_FOUND: () => ERR_LOCAL_FILE_HEADER_NOT_FOUND,
  ERR_OVERLAPPING_ENTRY: () => ERR_OVERLAPPING_ENTRY,
  ERR_SPLIT_ZIP_FILE: () => ERR_SPLIT_ZIP_FILE,
  ERR_UNSAFE_FILENAME: () => ERR_UNSAFE_FILENAME,
  ERR_UNSUPPORTED_COMPRESSION: () => ERR_UNSUPPORTED_COMPRESSION,
  ERR_UNSUPPORTED_ENCRYPTION: () => ERR_UNSUPPORTED_ENCRYPTION,
  ERR_UNSUPPORTED_UINT64: () => ERR_UNSUPPORTED_UINT64,
  ERR_WORKER_STARTUP_TIMEOUT: () => ERR_WORKER_STARTUP_TIMEOUT,
  WARNING_APPENDED_DATA: () => WARNING_APPENDED_DATA,
  WARNING_COMPRESSED_PATCHED_DATA: () => WARNING_COMPRESSED_PATCHED_DATA,
  WARNING_DUPLICATE_FILENAME: () => WARNING_DUPLICATE_FILENAME,
  WARNING_MALFORMED_EXTRA_FIELD: () => WARNING_MALFORMED_EXTRA_FIELD,
  WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG: () => WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG,
  WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD: () => WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD,
  WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES: () => WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES,
  WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME: () => WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME,
  WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY: () => WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY,
  WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY: () => WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY,
  WARNING_PREPENDED_CENTRAL_DIRECTORY: () => WARNING_PREPENDED_CENTRAL_DIRECTORY,
  WARNING_PREPENDED_DATA: () => WARNING_PREPENDED_DATA,
  WARNING_TRAILING_CENTRAL_DIRECTORY_DATA: () => WARNING_TRAILING_CENTRAL_DIRECTORY_DATA,
  WARNING_UNKNOWN_VERSION: () => WARNING_UNKNOWN_VERSION,
  WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA: () => WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA,
  WARNING_UNSORTED_CENTRAL_DIRECTORY: () => WARNING_UNSORTED_CENTRAL_DIRECTORY,
  WARNING_WRAPPED_ENTRIES_COUNT: () => WARNING_WRAPPED_ENTRIES_COUNT,
  ZipReader: () => ZipReader,
  ZipReaderStream: () => ZipReaderStream,
  isZipFile: () => isZipFile
});
function createEntryStream(entry, pendingEntries2) {
  const { readable, writable } = new TransformStream();
  let dataReader;
  const entryStream = {
    cancel: async (reason) => {
      pendingEntries2.delete(entryStream);
      await (dataReader ? dataReader.cancel(reason) : readable.cancel(reason));
    }
  };
  entryStream.readable = new ReadableStream({
    async pull(controller) {
      if (!dataReader) {
        dataReader = readable.getReader();
        pendingEntries2.add(entryStream);
        getData();
      }
      const { done, value } = await dataReader.read();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
    cancel: (reason) => entryStream.cancel(reason)
  }, { highWaterMark: 0 });
  return entryStream;
  async function getData() {
    try {
      await entry.getData(writable, { preventClose: false });
    } catch (error) {
      try {
        await writable.abort(error);
      } catch {
      }
    } finally {
      pendingEntries2.delete(entryStream);
    }
  }
}
async function isZipFile(reader, options = {}) {
  reader = new GenericReader(reader);
  await initStream(reader);
  if (reader.size === UNDEFINED_VALUE || !reader.readUint8Array) {
    reader = new BlobReader(await streamToBlob(reader.readable));
    await initStream(reader);
  }
  if (reader.size < END_OF_CENTRAL_DIR_LENGTH) {
    return false;
  }
  const strictness = getStrictness(options, {});
  const rejectAmbiguousEndOfDirectory = strictness != STRICTNESS_TOLERANT;
  const maxAppendedDataSize = getMaxAppendedDataSize(options[OPTION_MAX_APPENDED_DATA_SIZE], strictness);
  const { endOfDirectoryInfo, endOfDirectoryReachingEndCount } = await findEndOfCentralDirectory(reader, rejectAmbiguousEndOfDirectory, maxAppendedDataSize);
  if (!endOfDirectoryInfo || strictness == STRICTNESS_STRICT && endOfDirectoryReachingEndCount > 1) {
    return false;
  }
  const commentLength = getUint162(getDataView(endOfDirectoryInfo), 20);
  const appendedDataOffset = endOfDirectoryInfo.offset + END_OF_CENTRAL_DIR_LENGTH + commentLength;
  return reader.size - appendedDataOffset <= maxAppendedDataSize;
}
function detectEncryptedCentralDirectory(directoryView) {
  const maxOffset = Math.min(directoryView.byteLength, 1024) - 3;
  for (let offset = 0; offset < maxOffset; offset++) {
    if (getUint322(directoryView, offset) == ARCHIVE_EXTRA_DATA_SIGNATURE) {
      return true;
    }
  }
  return false;
}
function getWrappedFilesLength(directoryView, directoryArray, offset) {
  let wrappedFilesLength = 0;
  while (offset + CENTRAL_FILE_HEADER_LENGTH <= directoryArray.length && getUint322(directoryView, offset) == CENTRAL_FILE_HEADER_SIGNATURE) {
    offset += CENTRAL_FILE_HEADER_LENGTH + getUint162(directoryView, offset + 28) + getUint162(directoryView, offset + 30) + getUint162(directoryView, offset + 32);
    wrappedFilesLength++;
  }
  return wrappedFilesLength % (MAX_16_BITS + 1) ? 0 : wrappedFilesLength;
}
function readDigitalSignature(signatureRecordArray) {
  if (signatureRecordArray.length >= 6) {
    const signatureRecordView = getDataView(signatureRecordArray);
    if (getUint322(signatureRecordView, 0) == DIGITAL_SIGNATURE_RECORD_SIGNATURE) {
      const signatureDataLength = getUint162(signatureRecordView, 4);
      if (6 + signatureDataLength <= signatureRecordArray.length) {
        return new Uint8Array(signatureRecordArray.subarray(6, 6 + signatureDataLength));
      }
    }
  }
}
function getEncryptedDirectoryDataLength(directoryEncryptionInfo, declaredDirectoryDataLength, directoryDataLength) {
  const encryptedDirectoryDataLength = directoryEncryptionInfo && directoryEncryptionInfo.compressedSize ? directoryEncryptionInfo.compressedSize : declaredDirectoryDataLength;
  return encryptedDirectoryDataLength > 0 && encryptedDirectoryDataLength <= directoryDataLength ? encryptedDirectoryDataLength : directoryDataLength;
}
function getDirectoryEncryptionInfo(rawExtensibleData) {
  const directoryEncryptionInfo = { rawExtensibleData };
  if (rawExtensibleData.length >= 28) {
    const extensibleDataView = getDataView(rawExtensibleData);
    const hashDataLength = getUint162(extensibleDataView, 26);
    Object.assign(directoryEncryptionInfo, {
      compressionMethod: getUint162(extensibleDataView, 0),
      compressedSize: getBigUint64(extensibleDataView, 2),
      uncompressedSize: getBigUint64(extensibleDataView, 10),
      encryptionAlgorithm: getUint162(extensibleDataView, 18),
      bitLength: getUint162(extensibleDataView, 20),
      flags: getUint162(extensibleDataView, 22),
      hashAlgorithm: getUint162(extensibleDataView, 24),
      hashData: rawExtensibleData.subarray(28, 28 + hashDataLength)
    });
  }
  return directoryEncryptionInfo;
}
function readCommonHeader(directory, dataView, offset) {
  const rawBitFlag = directory.rawBitFlag = getUint162(dataView, offset + 2);
  const encrypted = (rawBitFlag & BITFLAG_ENCRYPTED) == BITFLAG_ENCRYPTED;
  const rawLastModDate = getUint322(dataView, offset + 6);
  Object.assign(directory, {
    encrypted,
    version: getUint162(dataView, offset),
    bitFlag: {
      level: (rawBitFlag & BITFLAG_LEVEL) >> 1,
      dataDescriptor: (rawBitFlag & BITFLAG_DATA_DESCRIPTOR) == BITFLAG_DATA_DESCRIPTOR,
      languageEncodingFlag: (rawBitFlag & BITFLAG_LANG_ENCODING_FLAG) == BITFLAG_LANG_ENCODING_FLAG
    },
    rawLastModDate,
    lastModDate: getDate(rawLastModDate),
    filenameLength: getUint162(dataView, offset + 22),
    extraFieldLength: getUint162(dataView, offset + 24)
  });
}
function readCommonFooter(fileEntry, directory, dataView, offset, localDirectory) {
  const { rawExtraField } = directory;
  const extraField = directory.extraField = /* @__PURE__ */ new Map();
  const rawExtraFieldView = getDataView(rawExtraField);
  let offsetExtraField = 0;
  let malformedExtraField = false;
  try {
    while (offsetExtraField < rawExtraField.length) {
      const type = getUint162(rawExtraFieldView, offsetExtraField);
      const size = getUint162(rawExtraFieldView, offsetExtraField + 2);
      extraField.set(type, {
        type,
        data: rawExtraField.slice(offsetExtraField + 4, offsetExtraField + 4 + size)
      });
      offsetExtraField += 4 + size;
    }
  } catch {
    malformedExtraField = true;
  }
  if (offsetExtraField > rawExtraField.length) {
    malformedExtraField = true;
  }
  const compressionMethod = getUint162(dataView, offset + 4);
  Object.assign(directory, {
    signature: getUint322(dataView, offset + HEADER_OFFSET_SIGNATURE),
    crc32: getUint322(dataView, offset + HEADER_OFFSET_SIGNATURE),
    compressedSize: getUint322(dataView, offset + HEADER_OFFSET_COMPRESSED_SIZE),
    uncompressedSize: getUint322(dataView, offset + HEADER_OFFSET_UNCOMPRESSED_SIZE)
  });
  const extraFieldZip64 = extraField.get(EXTRAFIELD_TYPE_ZIP64);
  if (extraFieldZip64) {
    if (!readExtraFieldZip64(extraFieldZip64, directory, localDirectory)) {
      malformedExtraField = true;
    }
    directory.extraFieldZip64 = extraFieldZip64;
  } else if (ZIP64_PROPERTIES.some(([propertyName, max]) => directory[propertyName] == max)) {
    if (localDirectory) {
      malformedExtraField = true;
    } else {
      throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
    }
  }
  const extraFieldUnicodePath = extraField.get(EXTRAFIELD_TYPE_UNICODE_PATH);
  if (extraFieldUnicodePath) {
    readExtraFieldUnicode(extraFieldUnicodePath, PROPERTY_NAME_FILENAME, PROPERTY_NAME_RAW_FILENAME, directory, fileEntry);
    directory.extraFieldUnicodePath = extraFieldUnicodePath;
  }
  const extraFieldUnicodeComment = extraField.get(EXTRAFIELD_TYPE_UNICODE_COMMENT);
  if (extraFieldUnicodeComment) {
    readExtraFieldUnicode(extraFieldUnicodeComment, PROPERTY_NAME_COMMENT, PROPERTY_NAME_RAW_COMMENT, directory, fileEntry);
    directory.extraFieldUnicodeComment = extraFieldUnicodeComment;
  }
  const extraFieldAES = extraField.get(EXTRAFIELD_TYPE_AES);
  if (extraFieldAES && (compressionMethod == COMPRESSION_METHOD_AES || directory.encrypted) && extraFieldAES.data.length >= 7) {
    readExtraFieldAES(extraFieldAES, directory, compressionMethod);
    directory.extraFieldAES = extraFieldAES;
  } else {
    if (extraFieldAES) {
      malformedExtraField = true;
    }
    directory.compressionMethod = compressionMethod;
  }
  const extraFieldPkwareUnix = extraField.get(EXTRAFIELD_TYPE_PKWARE_UNIX);
  if (extraFieldPkwareUnix) {
    readExtraFieldUnixDates(extraFieldPkwareUnix, directory);
    directory.extraFieldPkwareUnix = extraFieldPkwareUnix;
  }
  const extraFieldUnixType1 = extraField.get(EXTRAFIELD_TYPE_UNIX_TYPE1);
  if (extraFieldUnixType1) {
    readExtraFieldUnixDates(extraFieldUnixType1, directory);
    directory.extraFieldUnixType1 = extraFieldUnixType1;
  }
  const extraFieldNTFS = extraField.get(EXTRAFIELD_TYPE_NTFS);
  if (extraFieldNTFS) {
    readExtraFieldNTFS(extraFieldNTFS, directory);
    directory.extraFieldNTFS = extraFieldNTFS;
  }
  const extraFieldUnix = extraField.get(EXTRAFIELD_TYPE_UNIX);
  let unixIdsRead;
  if (extraFieldUnix) {
    unixIdsRead = readExtraFieldUnix(extraFieldUnix, directory, false);
    directory.extraFieldUnix = extraFieldUnix;
  }
  if (!unixIdsRead) {
    const extraFieldInfoZip = extraField.get(EXTRAFIELD_TYPE_INFOZIP);
    if (extraFieldInfoZip) {
      readExtraFieldUnix(extraFieldInfoZip, directory, true);
      directory.extraFieldInfoZip = extraFieldInfoZip;
    }
  }
  const extraFieldExtendedTimestamp = extraField.get(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
  if (extraFieldExtendedTimestamp) {
    readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory);
    directory.extraFieldExtendedTimestamp = extraFieldExtendedTimestamp;
  }
  const extraFieldUSDZ = extraField.get(EXTRAFIELD_TYPE_USDZ);
  if (extraFieldUSDZ) {
    directory.extraFieldUSDZ = extraFieldUSDZ;
  }
  return malformedExtraField;
}
function readExtraFieldZip64(extraFieldZip64, directory, localDirectory) {
  directory.zip64 = true;
  const extraFieldView = getDataView(extraFieldZip64.data);
  const missingProperties = ZIP64_PROPERTIES.filter(([propertyName, max]) => directory[propertyName] == max);
  const requiredLength = missingProperties.reduce((length, [, max]) => length + ZIP64_EXTRACTION[max].bytes, 0);
  if (extraFieldZip64.data.length < requiredLength) {
    if (localDirectory) {
      return false;
    }
    throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
  }
  const values = [];
  try {
    for (let indexMissingProperty = 0, offset = 0; indexMissingProperty < missingProperties.length; indexMissingProperty++) {
      const [, max] = missingProperties[indexMissingProperty];
      const extraction = ZIP64_EXTRACTION[max];
      values.push(extraction.getValue(extraFieldView, offset));
      offset += extraction.bytes;
    }
  } catch (error) {
    if (localDirectory) {
      return false;
    }
    throw error;
  }
  missingProperties.forEach(([propertyName], indexMissingProperty) => {
    directory[propertyName] = extraFieldZip64[propertyName] = values[indexMissingProperty];
  });
  return true;
}
function readExtraFieldUnicode(extraFieldUnicode, propertyName, rawPropertyName, directory, fileEntry) {
  if (extraFieldUnicode.data.length < 5) {
    extraFieldUnicode.valid = false;
    return;
  }
  const extraFieldView = getDataView(extraFieldUnicode.data);
  const computedCrc32 = new Crc32();
  computedCrc32.append(fileEntry[rawPropertyName]);
  const computedCrc32View = getDataView(new Uint8Array(4));
  computedCrc32View.setUint32(0, computedCrc32.get(), true);
  const nameCrc32 = getUint322(extraFieldView, 1);
  const version = getUint8(extraFieldView, 0);
  Object.assign(extraFieldUnicode, {
    version,
    [propertyName]: decodeText(extraFieldUnicode.data.subarray(5)),
    valid: version == 1 && !fileEntry.bitFlag.languageEncodingFlag && nameCrc32 == getUint322(computedCrc32View, 0)
  });
  if (extraFieldUnicode.valid) {
    directory[propertyName] = extraFieldUnicode[propertyName];
    directory[propertyName + PROPERTY_NAME_UTF8_SUFFIX] = true;
  }
}
function readExtraFieldAES(extraFieldAES, directory, compressionMethod) {
  const extraFieldView = getDataView(extraFieldAES.data);
  const strength = getUint8(extraFieldView, 4);
  Object.assign(extraFieldAES, {
    vendorVersion: getUint8(extraFieldView, 0),
    vendorId: getUint8(extraFieldView, 2),
    strength,
    originalCompressionMethod: compressionMethod,
    compressionMethod: getUint162(extraFieldView, 5)
  });
  directory.compressionMethod = extraFieldAES.compressionMethod;
  if (extraFieldAES.vendorVersion != VENDOR_VERSION_AE_1) {
    directory.crc32 = UNDEFINED_VALUE;
  }
}
function readExtraFieldNTFS(extraFieldNTFS, directory) {
  const extraFieldView = getDataView(extraFieldNTFS.data);
  let offsetExtraField = 4;
  let tag1Data;
  try {
    while (offsetExtraField < extraFieldNTFS.data.length && !tag1Data) {
      const tagValue = getUint162(extraFieldView, offsetExtraField);
      const attributeSize = getUint162(extraFieldView, offsetExtraField + 2);
      if (tagValue == EXTRAFIELD_TYPE_NTFS_TAG1) {
        tag1Data = extraFieldNTFS.data.slice(offsetExtraField + 4, offsetExtraField + 4 + attributeSize);
      }
      offsetExtraField += 4 + attributeSize;
    }
  } catch {
  }
  if (tag1Data && tag1Data.length == 24) {
    const tag1View = getDataView(tag1Data);
    const rawLastModDate = tag1View.getBigUint64(0, true);
    const rawLastAccessDate = tag1View.getBigUint64(8, true);
    const rawCreationDate = tag1View.getBigUint64(16, true);
    Object.assign(extraFieldNTFS, {
      rawLastModDate,
      rawLastAccessDate,
      rawCreationDate
    });
    const lastModDate = getDateNTFS(rawLastModDate);
    const lastAccessDate = getDateNTFS(rawLastAccessDate);
    const creationDate = getDateNTFS(rawCreationDate);
    const extraFieldData = { lastModDate, lastAccessDate, creationDate };
    Object.assign(extraFieldNTFS, extraFieldData);
    Object.assign(directory, extraFieldData, { rawLastAccessDate, rawCreationDate });
  }
}
function readExtraFieldUnixDates(extraField, directory) {
  if (extraField.data.length < 8) {
    return;
  }
  const extraFieldView = getDataView(extraField.data);
  const lastAccessDate = new Date((getUint322(extraFieldView, 0) | 0) * 1e3);
  const lastModDate = new Date((getUint322(extraFieldView, 4) | 0) * 1e3);
  const extraFieldData = { lastAccessDate, lastModDate };
  if (extraField.data.length >= 12) {
    extraFieldData.uid = getUint162(extraFieldView, 8);
    extraFieldData.gid = getUint162(extraFieldView, 10);
  }
  Object.assign(extraField, extraFieldData);
  Object.assign(directory, extraFieldData);
}
function readExtraFieldUnix(extraField, directory, isInfoZip) {
  try {
    const view = getDataView(extraField.data);
    let uid, gid;
    if (isInfoZip) {
      let offset = 0;
      const version = getUint8(view, offset++);
      const uidSize = getUint8(view, offset++);
      uid = unpackUnixId(extraField.data.subarray(offset, offset + uidSize));
      offset += uidSize;
      const gidSize = getUint8(view, offset++);
      gid = unpackUnixId(extraField.data.subarray(offset, offset + gidSize));
      Object.assign(extraField, { version, uid, gid });
    } else if (extraField.data.length >= 4) {
      uid = getUint162(view, 0);
      gid = getUint162(view, 2);
      Object.assign(extraField, { uid, gid });
    }
    if (uid !== UNDEFINED_VALUE) {
      directory.uid = uid;
    }
    if (gid !== UNDEFINED_VALUE) {
      directory.gid = gid;
    }
    return uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE;
  } catch {
  }
}
function unpackUnixId(bytes) {
  const buffer2 = new Uint8Array(4);
  buffer2.set(bytes, 0);
  const view = new DataView(buffer2.buffer, buffer2.byteOffset, 4);
  return view.getUint32(0, true);
}
function readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory) {
  if (!extraFieldExtendedTimestamp.data.length) {
    return;
  }
  const extraFieldView = getDataView(extraFieldExtendedTimestamp.data);
  const flags = getUint8(extraFieldView, 0);
  const timeProperties = [];
  const timeRawProperties = [];
  if (localDirectory) {
    if ((flags & 1) == 1) {
      timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
    }
    if ((flags & 2) == 2) {
      timeProperties.push(PROPERTY_NAME_LAST_ACCESS_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_ACCESS_DATE);
    }
    if ((flags & 4) == 4) {
      timeProperties.push(PROPERTY_NAME_CREATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_CREATION_DATE);
    }
  } else if (extraFieldExtendedTimestamp.data.length >= 5) {
    timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
    timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
  }
  let offset = 1;
  timeProperties.forEach((propertyName, indexProperty) => {
    if (extraFieldExtendedTimestamp.data.length >= offset + 4) {
      const time = getUint322(extraFieldView, offset);
      directory[propertyName] = extraFieldExtendedTimestamp[propertyName] = new Date((time | 0) * 1e3);
      const rawPropertyName = timeRawProperties[indexProperty];
      extraFieldExtendedTimestamp[rawPropertyName] = time;
    }
    offset += 4;
  });
}
async function detectOverlappingEntry({
  reader,
  fileEntry,
  index,
  offset,
  crc32,
  compressedSize,
  uncompressedSize,
  dataOffset,
  dataDescriptor,
  extraFieldZip64,
  readRanges
}) {
  let dataDescriptorLength = 0;
  if (dataDescriptor) {
    const zip64 = Boolean(extraFieldZip64);
    const dataDescriptorArray = await readUint8Array(reader, dataOffset + compressedSize, DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH + DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH);
    const dataDescriptorView = getDataView(dataDescriptorArray);
    const candidates = [[zip64, true], [zip64, false], [!zip64, true], [!zip64, false]].map(([zip64Layout, signature]) => readDataDescriptor(dataDescriptorView, zip64Layout, signature)).filter((candidate) => candidate && candidate.compressedSize == compressedSize && candidate.uncompressedSize == uncompressedSize);
    const localDataDescriptor = candidates.find((candidate) => candidate.crc32 == crc32) || candidates[0] || readDataDescriptor(dataDescriptorView, zip64, true) || readDataDescriptor(dataDescriptorView, zip64, false);
    if (localDataDescriptor) {
      fileEntry.localDirectory.dataDescriptor = localDataDescriptor;
      dataDescriptorLength = getDataDescriptorLength(localDataDescriptor.zip64, localDataDescriptor.signature);
    } else {
      dataDescriptorLength = getDataDescriptorLength(zip64, false);
    }
  }
  const range = {
    start: offset,
    end: dataOffset + compressedSize + dataDescriptorLength,
    fileEntry
  };
  const { indexes, sortedRanges, pendingRanges } = readRanges;
  if (!indexes.has(index)) {
    const overlappingRange = findOverlappingRange(sortedRanges, range) || pendingRanges.find((otherRange) => rangesOverlap(range, otherRange));
    if (overlappingRange) {
      const error = new Error(ERR_OVERLAPPING_ENTRY);
      error.overlappingEntry = overlappingRange.fileEntry;
      throw error;
    }
    indexes.add(index);
    pendingRanges.push(range);
    if (pendingRanges.length * pendingRanges.length > sortedRanges.length) {
      pendingRanges.sort((range2, otherRange) => range2.start - otherRange.start);
      readRanges.sortedRanges = mergeRanges(sortedRanges, pendingRanges);
      pendingRanges.length = 0;
    }
  }
}
function findOverlappingRange(sortedRanges, range) {
  let low = 0;
  let high = sortedRanges.length;
  while (low < high) {
    const middle = low + high >>> 1;
    if (sortedRanges[middle].start < range.start) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }
  const previousRange = sortedRanges[low - 1];
  const nextRange = sortedRanges[low];
  if (previousRange && rangesOverlap(range, previousRange)) {
    return previousRange;
  }
  if (nextRange && rangesOverlap(range, nextRange)) {
    return nextRange;
  }
}
function rangesOverlap(range, otherRange) {
  return range.start < otherRange.end && otherRange.start < range.end;
}
function mergeRanges(sortedRanges, pendingRanges) {
  const mergedRanges = [];
  let indexSorted = 0;
  let indexPending = 0;
  while (indexSorted < sortedRanges.length || indexPending < pendingRanges.length) {
    if (indexPending == pendingRanges.length || indexSorted < sortedRanges.length && sortedRanges[indexSorted].start < pendingRanges[indexPending].start) {
      mergedRanges.push(sortedRanges[indexSorted++]);
    } else {
      mergedRanges.push(pendingRanges[indexPending++]);
    }
  }
  return mergedRanges;
}
function readDataDescriptor(dataDescriptorView, zip64, signature) {
  const offset = signature ? DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH : 0;
  if (dataDescriptorView.byteLength < getDataDescriptorLength(zip64, signature) || signature && getUint322(dataDescriptorView, 0) != DATA_DESCRIPTOR_RECORD_SIGNATURE) {
    return UNDEFINED_VALUE;
  }
  const crc32 = getUint322(dataDescriptorView, offset);
  let compressedSize;
  let uncompressedSize;
  try {
    if (zip64) {
      compressedSize = getBigUint64(dataDescriptorView, offset + 4);
      uncompressedSize = getBigUint64(dataDescriptorView, offset + 12);
    } else {
      compressedSize = getUint322(dataDescriptorView, offset + 4);
      uncompressedSize = getUint322(dataDescriptorView, offset + 8);
    }
  } catch {
    return UNDEFINED_VALUE;
  }
  return { signature, zip64, crc32, compressedSize, uncompressedSize };
}
function getDataDescriptorLength(zip64, signature) {
  return (zip64 ? DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH : DATA_DESCRIPTOR_RECORD_LENGTH) + (signature ? DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH : 0);
}
function getDiskOffset(reader, diskNumber) {
  return reader.getDiskOffset ? reader.getDiskOffset(diskNumber) : 0;
}
async function startsWithSplitZipSignature(reader) {
  return await getFirstSignature(reader) == SPLIT_ZIP_FILE_SIGNATURE;
}
async function startsWithSplitZipMarker(reader) {
  const signature = await getFirstSignature(reader);
  return signature == SPLIT_ZIP_FILE_SIGNATURE || signature == TEMPORARY_SPLIT_ZIP_FILE_SIGNATURE;
}
async function getFirstSignature(reader) {
  const signatureArray = await readUint8Array(reader, 0, SPLIT_ZIP_FILE_SIGNATURE_LENGTH);
  return getUint322(getDataView(signatureArray));
}
function isStrictnessValue(value) {
  return value === STRICTNESS_STRICT || value === STRICTNESS_BALANCED || value === STRICTNESS_TOLERANT;
}
function getDecodableOutputSize(outputSize, compressedSize, compressed) {
  return Math.min(outputSize, compressed ? compressedSize * MAX_DEFLATE_EXPANSION_RATIO : compressedSize);
}
function getStrictness(options, inheritedOptions) {
  return resolveStrictness(options, resolveStrictness(inheritedOptions, STRICTNESS_BALANCED));
}
function resolveStrictness(options, inheritedStrictness) {
  const strictness = options[OPTION_STRICTNESS];
  if (strictness !== UNDEFINED_VALUE) {
    if (!isStrictnessValue(strictness)) {
      throw new Error(ERR_INVALID_STRICTNESS);
    }
    return strictness;
  }
  const checkAmbiguity = options[OPTION_CHECK_AMBIGUITY];
  if (checkAmbiguity === UNDEFINED_VALUE) {
    return inheritedStrictness;
  }
  if (checkAmbiguity) {
    return STRICTNESS_STRICT;
  }
  return inheritedStrictness == STRICTNESS_TOLERANT ? STRICTNESS_TOLERANT : STRICTNESS_BALANCED;
}
function getCheckLocalDirectory(checkLocalDirectory, strictness) {
  if (checkLocalDirectory === UNDEFINED_VALUE) {
    return strictness != STRICTNESS_TOLERANT;
  }
  return Boolean(checkLocalDirectory);
}
function getCheckLocalFilename(checkLocalFilename, strictness) {
  if (checkLocalFilename === UNDEFINED_VALUE) {
    return strictness == STRICTNESS_STRICT;
  }
  return Boolean(checkLocalFilename);
}
function getFilenameValidation(filenameValidation, strictness) {
  if (filenameValidation === UNDEFINED_VALUE) {
    return strictness;
  }
  if (!isStrictnessValue(filenameValidation)) {
    throw new Error(ERR_INVALID_FILENAME_VALIDATION);
  }
  return filenameValidation;
}
function isUnsafeFilename(filename, filenameValidation) {
  if (filenameValidation == STRICTNESS_TOLERANT) {
    return false;
  }
  const pathParts = filename.split("/");
  if (pathParts.length > 1 && pathParts[pathParts.length - 1] === "") {
    pathParts.pop();
  }
  if (PARENT_DIRECTORY_REGEXP.test(filename) || filename.startsWith("/") || filename.startsWith("\\") || DRIVE_LETTER_REGEXP.test(filename)) {
    return true;
  }
  return filenameValidation == STRICTNESS_STRICT && (pathParts.includes(".") || pathParts.includes("") || filename.includes("\0"));
}
function getMaxAppendedDataSize(maxAppendedDataSize, strictness) {
  if (maxAppendedDataSize !== UNDEFINED_VALUE) {
    const size = toNumber(maxAppendedDataSize);
    if (typeof size != NUMBER_TYPE || Number.isNaN(size) || size < 0) {
      throw new Error(ERR_INVALID_MAX_APPENDED_DATA_SIZE);
    }
    return size;
  }
  if (strictness == STRICTNESS_STRICT) {
    return 0;
  }
  if (strictness == STRICTNESS_TOLERANT) {
    return Infinity;
  }
  return MAX_16_BITS;
}
async function findEndOfCentralDirectory(reader, rejectAmbiguous, maxAppendedDataSize) {
  const { size } = reader;
  const anchoredLength = Math.min(size, END_OF_CENTRAL_DIR_LENGTH + MAX_16_BITS);
  const remoteProbeBudget = { remaining: MAX_END_OF_CENTRAL_DIR_PROBES };
  let endOfDirectoryInfo;
  let plausibleEndOfDirectoryInfo;
  let endOfDirectoryReachingEndCount = 0;
  for await (const [anchoredView, anchoredOffset, anchoredArray, indexByte, offset] of scanEndOfCentralDirectory(reader, anchoredLength)) {
    const commentLength = getUint162(anchoredView, indexByte + 20);
    if (offset + END_OF_CENTRAL_DIR_LENGTH + commentLength == size) {
      const reachability = await getCentralDirectoryReachability(reader, anchoredView, anchoredOffset, indexByte, offset, size, remoteProbeBudget);
      if (reachability == CENTRAL_DIRECTORY_REACHABLE) {
        if (!endOfDirectoryInfo) {
          endOfDirectoryInfo = getEndOfCentralDirectoryInfo(anchoredArray, indexByte, offset);
        }
        endOfDirectoryReachingEndCount++;
        if (!rejectAmbiguous || endOfDirectoryReachingEndCount > 1) {
          break;
        }
      } else if (reachability == CENTRAL_DIRECTORY_PLAUSIBLE && !plausibleEndOfDirectoryInfo) {
        plausibleEndOfDirectoryInfo = getEndOfCentralDirectoryInfo(anchoredArray, indexByte, offset);
      }
    }
  }
  if (!endOfDirectoryInfo) {
    endOfDirectoryInfo = plausibleEndOfDirectoryInfo;
  }
  if (!endOfDirectoryInfo) {
    endOfDirectoryInfo = await seekEndOfCentralDirectory(reader, maxAppendedDataSize, remoteProbeBudget);
  }
  return { endOfDirectoryInfo, endOfDirectoryReachingEndCount };
}
async function seekEndOfCentralDirectory(reader, maxAppendedDataSize, remoteProbeBudget) {
  const { size } = reader;
  const searchLength = Math.min(size, maxAppendedDataSize == Infinity ? size : END_OF_CENTRAL_DIR_LENGTH + MAX_16_BITS + maxAppendedDataSize);
  let firstSignatureInfo, plausibleInfo;
  for await (const [searchView, searchOffset, searchArray, indexByte, offset] of scanEndOfCentralDirectory(reader, searchLength)) {
    const record = getEndOfCentralDirectoryInfo(searchArray, indexByte, offset);
    if (!firstSignatureInfo) {
      firstSignatureInfo = record;
    }
    const reachability = await getCentralDirectoryReachability(reader, searchView, searchOffset, indexByte, offset, size, remoteProbeBudget);
    if (reachability == CENTRAL_DIRECTORY_REACHABLE) {
      return record;
    }
    if (reachability == CENTRAL_DIRECTORY_PLAUSIBLE && !plausibleInfo) {
      plausibleInfo = record;
    }
  }
  return plausibleInfo || firstSignatureInfo;
}
async function* scanEndOfCentralDirectory(reader, scanLength) {
  const scanOffset = reader.size - scanLength;
  const scanArray = await readUint8Array(reader, scanOffset, scanLength);
  const scanView = getDataView(scanArray);
  for (let indexByte = scanArray.length - END_OF_CENTRAL_DIR_LENGTH; indexByte >= 0; indexByte--) {
    if (getUint322(scanView, indexByte) == END_OF_CENTRAL_DIR_SIGNATURE) {
      yield [scanView, scanOffset, scanArray, indexByte, scanOffset + indexByte];
    }
  }
}
function getEndOfCentralDirectoryInfo(scanArray, indexByte, offset) {
  return { offset, buffer: new Uint8Array(scanArray.subarray(indexByte, indexByte + END_OF_CENTRAL_DIR_LENGTH)).buffer };
}
async function getCentralDirectoryReachability(reader, view, anchoredOffset, indexByte, offset, size, remoteProbeBudget) {
  const filesLength = getUint162(view, indexByte + 10);
  const directoryDataLength = getUint322(view, indexByte + 12);
  const directoryDataOffset = getUint322(view, indexByte + 16);
  if (filesLength == MAX_16_BITS || directoryDataLength == MAX_32_BITS || directoryDataOffset == MAX_32_BITS) {
    const locatorSignature = await readSignature(reader, view, anchoredOffset, offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, size, remoteProbeBudget);
    return locatorSignature == ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE ? CENTRAL_DIRECTORY_REACHABLE : CENTRAL_DIRECTORY_UNREACHABLE;
  }
  if (!filesLength && !directoryDataLength) {
    return CENTRAL_DIRECTORY_PLAUSIBLE;
  }
  const directoryDiskNumber = getUint162(view, indexByte + 6);
  for (const centralDirectoryOffset of [offset - directoryDataLength, getDiskOffset(reader, directoryDiskNumber) + directoryDataOffset]) {
    if (await readSignature(reader, view, anchoredOffset, centralDirectoryOffset, size, remoteProbeBudget) == CENTRAL_FILE_HEADER_SIGNATURE) {
      return CENTRAL_DIRECTORY_REACHABLE;
    }
  }
  return CENTRAL_DIRECTORY_UNREACHABLE;
}
async function readSignature(reader, view, anchoredOffset, signatureOffset, size, remoteProbeBudget) {
  if (signatureOffset < 0 || signatureOffset + 4 > size) {
    return UNDEFINED_VALUE;
  }
  if (signatureOffset >= anchoredOffset) {
    return getUint322(view, signatureOffset - anchoredOffset);
  }
  if (remoteProbeBudget.remaining > 0) {
    remoteProbeBudget.remaining--;
    const signatureArray = await readUint8Array(reader, signatureOffset, 4);
    return getUint322(getDataView(signatureArray), 0);
  }
  return UNDEFINED_VALUE;
}
function validateLocalDirectory(zipEntry, localDirectory, rawLocalFilename, checkLocalFilename, warnings) {
  const { rawFilename } = zipEntry;
  const reject = !warnings;
  const maskedLocalDirectory = zipEntry.decryptedDirectory && (localDirectory.rawBitFlag & BITFLAG_MASKED_LOCAL_HEADERS) == BITFLAG_MASKED_LOCAL_HEADERS;
  if (checkLocalFilename && !maskedLocalDirectory && (rawLocalFilename.length != rawFilename.length || rawLocalFilename.some((byteValue, indexByte) => byteValue != rawFilename[indexByte]))) {
    reportAmbiguity(reject, warnings, WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME);
  }
  if ((localDirectory.rawBitFlag & BITFLAG_AMBIGUITY_MASK) != (zipEntry.rawBitFlag & BITFLAG_AMBIGUITY_MASK)) {
    reportAmbiguity(reject, warnings, WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG);
  }
  if (localDirectory.compressionMethod != zipEntry.compressionMethod) {
    reportAmbiguity(reject, warnings, WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD);
  }
  if (!localDirectory.bitFlag.dataDescriptor && !maskedLocalDirectory && (localDirectory.crc32 || localDirectory.compressedSize || localDirectory.uncompressedSize) && (localDirectory.crc32 != zipEntry.crc32 || localDirectory.compressedSize != zipEntry.compressedSize || localDirectory.uncompressedSize != zipEntry.uncompressedSize)) {
    reportAmbiguity(reject, warnings, WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES);
  }
}
function reportAmbiguity(reject, warnings, reason) {
  if (reject) {
    throwAmbiguousArchive(reason);
  } else {
    addWarning(warnings, reason);
  }
}
function throwAmbiguousArchive(reason) {
  const error = new Error(ERR_AMBIGUOUS_ARCHIVE);
  error.reason = reason;
  throw error;
}
function getOptionValue(zipReader, options, name) {
  return options[name] === UNDEFINED_VALUE ? zipReader.options[name] : options[name];
}
function getFunctionOptionValue(zipReader, options, name) {
  return checkFunctionOption(getOptionValue(zipReader, options, name));
}
function getDate(timeRaw) {
  const date = (timeRaw & 4294901760) >> 16, time = timeRaw & MAX_16_BITS;
  const result = new Date(1980 + ((date & 65024) >> 9), ((date & 480) >> 5) - 1, date & 31, (time & 63488) >> 11, (time & 2016) >> 5, (time & 31) * 2, 0);
  return result < MIN_DATE ? MIN_DATE : result;
}
function getDateNTFS(timeRaw) {
  return new Date(Number(timeRaw / BigInt(1e4) - BigInt(116444736e5)));
}
function getUint8(view, offset) {
  return view.getUint8(offset);
}
function getUint162(view, offset) {
  return view.getUint16(offset, true);
}
function getUint322(view, offset) {
  return view.getUint32(offset, true);
}
function getBigUint64(view, offset) {
  const value = view.getBigUint64(offset, true);
  if (value > MAX_SAFE_UINT64) {
    throw new Error(ERR_UNSUPPORTED_UINT64);
  }
  return Number(value);
}
var ERR_BAD_FORMAT, ERR_EOCDR_NOT_FOUND, ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND, ERR_CENTRAL_DIRECTORY_NOT_FOUND, ERR_LOCAL_FILE_HEADER_NOT_FOUND, ERR_EXTRAFIELD_ZIP64_NOT_FOUND, ERR_ENCRYPTED, ERR_UNSUPPORTED_ENCRYPTION, ERR_SPLIT_ZIP_FILE, ERR_OVERLAPPING_ENTRY, ERR_ENTRY_DATA_OUT_OF_BOUNDS, ERR_AMBIGUOUS_ARCHIVE, ERR_ENCRYPTED_CENTRAL_DIRECTORY, ERR_UNSAFE_FILENAME, ERR_INVALID_STRICTNESS, ERR_INVALID_FILENAME_VALIDATION, ERR_INVALID_MAX_APPENDED_DATA_SIZE, ERR_UNSUPPORTED_UINT64, WARNING_UNSORTED_CENTRAL_DIRECTORY, WARNING_UNKNOWN_VERSION, WARNING_COMPRESSED_PATCHED_DATA, WARNING_MALFORMED_EXTRA_FIELD, WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA, WARNING_WRAPPED_ENTRIES_COUNT, WARNING_APPENDED_DATA, WARNING_PREPENDED_DATA, WARNING_PREPENDED_CENTRAL_DIRECTORY, WARNING_TRAILING_CENTRAL_DIRECTORY_DATA, WARNING_DUPLICATE_FILENAME, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY, WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY, WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME, WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG, WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD, WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES, MAX_KNOWN_VERSION, DRIVE_LETTER_REGEXP, PARENT_DIRECTORY_REGEXP, CHARSET_UTF8, PROPERTY_NAME_UTF8_SUFFIX, CHARSET_CP437, BITFLAG_AMBIGUITY_MASK, VENDOR_VERSION_AE_1, ZIP64_PROPERTIES, ZIP64_EXTRACTION, MAX_SAFE_UINT64, MAX_END_OF_CENTRAL_DIR_PROBES, MAX_DEFLATE_EXPANSION_RATIO, CENTRAL_DIRECTORY_UNREACHABLE, CENTRAL_DIRECTORY_PLAUSIBLE, CENTRAL_DIRECTORY_REACHABLE, ZipReader, ZipReaderStream, ZipEntry;
var init_zip_reader = __esm({
  "node_modules/@zip.js/zip.js/lib/core/zip-reader.js"() {
    init_constants();
    init_configuration();
    init_codec_registry();
    init_codec_pool();
    init_io();
    init_decode_text();
    init_array();
    init_warnings();
    init_compatible_streams();
    init_error();
    init_crc32();
    init_zip_entry();
    init_options();
    ERR_BAD_FORMAT = "File format is not recognized";
    ERR_EOCDR_NOT_FOUND = "End of central directory not found";
    ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = "End of Zip64 central directory locator not found";
    ERR_CENTRAL_DIRECTORY_NOT_FOUND = "Central directory header not found";
    ERR_LOCAL_FILE_HEADER_NOT_FOUND = "Local file header not found";
    ERR_EXTRAFIELD_ZIP64_NOT_FOUND = "Zip64 extra field not found";
    ERR_ENCRYPTED = "File contains encrypted entry";
    ERR_UNSUPPORTED_ENCRYPTION = "Encryption method not supported";
    ERR_SPLIT_ZIP_FILE = "Split zip file";
    ERR_OVERLAPPING_ENTRY = "Overlapping entry found";
    ERR_ENTRY_DATA_OUT_OF_BOUNDS = "Entry data out of bounds";
    ERR_AMBIGUOUS_ARCHIVE = "Ambiguous archive";
    ERR_ENCRYPTED_CENTRAL_DIRECTORY = "Encrypted central directory is not supported";
    ERR_UNSAFE_FILENAME = "Unsafe filename";
    ERR_INVALID_STRICTNESS = "Invalid strictness (must be 'strict', 'balanced' or 'tolerant')";
    ERR_INVALID_FILENAME_VALIDATION = "Invalid filenameValidation (must be 'strict', 'balanced' or 'tolerant')";
    ERR_INVALID_MAX_APPENDED_DATA_SIZE = "Invalid maxAppendedDataSize (must be a number greater than or equal to 0)";
    ERR_UNSUPPORTED_UINT64 = "64-bit value exceeds Number.MAX_SAFE_INTEGER";
    WARNING_UNSORTED_CENTRAL_DIRECTORY = "unsorted central directory";
    WARNING_UNKNOWN_VERSION = "unknown version needed to extract";
    WARNING_COMPRESSED_PATCHED_DATA = "compressed patched data";
    WARNING_MALFORMED_EXTRA_FIELD = "malformed extra field";
    WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA = "unknown zip64 extensible data";
    WARNING_WRAPPED_ENTRIES_COUNT = "wrapped entries count";
    WARNING_APPENDED_DATA = "appended data";
    WARNING_PREPENDED_DATA = "prepended data";
    WARNING_PREPENDED_CENTRAL_DIRECTORY = "prepended central directory";
    WARNING_TRAILING_CENTRAL_DIRECTORY_DATA = "trailing central directory data";
    WARNING_DUPLICATE_FILENAME = "duplicate filename";
    WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY = "mismatched zip64 end of central directory record";
    WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY = "multiple end of central directory records";
    WARNING_MISMATCHED_LOCAL_FILE_HEADER_FILENAME = "mismatched local file header (filename)";
    WARNING_MISMATCHED_LOCAL_FILE_HEADER_BIT_FLAG = "mismatched local file header (general purpose bit flag)";
    WARNING_MISMATCHED_LOCAL_FILE_HEADER_COMPRESSION_METHOD = "mismatched local file header (compression method)";
    WARNING_MISMATCHED_LOCAL_FILE_HEADER_CRC32_OR_SIZES = "mismatched local file header (crc32 or sizes)";
    MAX_KNOWN_VERSION = 63;
    DRIVE_LETTER_REGEXP = /^[a-zA-Z]:/;
    PARENT_DIRECTORY_REGEXP = /(^|[\\/])\.\.([\\/]|$)/;
    CHARSET_UTF8 = "utf-8";
    PROPERTY_NAME_UTF8_SUFFIX = "UTF8";
    CHARSET_CP437 = "cp437";
    BITFLAG_AMBIGUITY_MASK = BITFLAG_ENCRYPTED | BITFLAG_DATA_DESCRIPTOR | BITFLAG_STRONG_ENCRYPTION | BITFLAG_LANG_ENCODING_FLAG;
    VENDOR_VERSION_AE_1 = 1;
    ZIP64_PROPERTIES = [
      [PROPERTY_NAME_UNCOMPRESSED_SIZE, MAX_32_BITS],
      [PROPERTY_NAME_COMPRESSED_SIZE, MAX_32_BITS],
      [PROPERTY_NAME_OFFSET, MAX_32_BITS],
      [PROPERTY_NAME_DISK_NUMBER_START, MAX_16_BITS]
    ];
    ZIP64_EXTRACTION = {
      [MAX_16_BITS]: {
        getValue: getUint322,
        bytes: 4
      },
      [MAX_32_BITS]: {
        getValue: getBigUint64,
        bytes: 8
      }
    };
    MAX_SAFE_UINT64 = BigInt(Number.MAX_SAFE_INTEGER);
    MAX_END_OF_CENTRAL_DIR_PROBES = 64;
    MAX_DEFLATE_EXPANSION_RATIO = 1032;
    CENTRAL_DIRECTORY_UNREACHABLE = 0;
    CENTRAL_DIRECTORY_PLAUSIBLE = 1;
    CENTRAL_DIRECTORY_REACHABLE = 2;
    ZipReader = class {
      constructor(reader, options = {}) {
        Object.assign(this, {
          reader: new GenericReader(reader),
          options,
          readRanges: { indexes: /* @__PURE__ */ new Set(), sortedRanges: [], pendingRanges: [] }
        });
      }
      async *getEntriesGenerator(options = {}) {
        const zipReader = this;
        let { reader } = zipReader;
        await initStream(reader);
        if (reader.size === UNDEFINED_VALUE || !reader.readUint8Array) {
          reader = new BlobReader(await streamToBlob(reader.readable));
          await initStream(reader);
        }
        if (reader.size < END_OF_CENTRAL_DIR_LENGTH) {
          throw new Error(ERR_BAD_FORMAT);
        }
        const warnings = zipReader.warnings = [];
        const strictness = getStrictness(options, zipReader.options);
        const checkAmbiguity = strictness == STRICTNESS_STRICT;
        const rejectAmbiguousEndOfDirectory = strictness != STRICTNESS_TOLERANT;
        const maxAppendedDataSize = getMaxAppendedDataSize(getOptionValue(zipReader, options, OPTION_MAX_APPENDED_DATA_SIZE), strictness);
        const filenameValidation = getFilenameValidation(getOptionValue(zipReader, options, OPTION_FILENAME_VALIDATION), strictness);
        const normalizeFilename = getOptionValue(zipReader, options, OPTION_NORMALIZE_FILENAME);
        const { endOfDirectoryInfo, endOfDirectoryReachingEndCount } = await findEndOfCentralDirectory(reader, rejectAmbiguousEndOfDirectory, maxAppendedDataSize);
        if (!endOfDirectoryInfo) {
          if (await startsWithSplitZipSignature(reader)) {
            throw new Error(ERR_SPLIT_ZIP_FILE);
          } else {
            throw new Error(ERR_EOCDR_NOT_FOUND);
          }
        }
        if (rejectAmbiguousEndOfDirectory && endOfDirectoryReachingEndCount > 1) {
          throwAmbiguousArchive(WARNING_MULTIPLE_END_OF_CENTRAL_DIRECTORY);
        }
        const endOfDirectoryView = getDataView(endOfDirectoryInfo);
        let directoryDataLength = getUint322(endOfDirectoryView, 12);
        let directoryDataOffset = getUint322(endOfDirectoryView, 16);
        const commentOffset = endOfDirectoryInfo.offset;
        const commentLength = getUint162(endOfDirectoryView, 20);
        const appendedDataOffset = commentOffset + END_OF_CENTRAL_DIR_LENGTH + commentLength;
        const appendedDataLength = reader.size - appendedDataOffset;
        if (appendedDataLength > maxAppendedDataSize) {
          throwAmbiguousArchive(WARNING_APPENDED_DATA);
        }
        if (appendedDataLength > 0) {
          addWarning(warnings, WARNING_APPENDED_DATA);
        }
        let lastDiskNumber = getUint162(endOfDirectoryView, 4);
        const expectedLastDiskNumber = reader.lastDiskNumber || 0;
        let diskNumber = getUint162(endOfDirectoryView, 6);
        let filesLength = getUint162(endOfDirectoryView, 10);
        let prependedDataLength = 0;
        let prependedCentralDirectory;
        let startOffset;
        let zip64EndOfDirectory;
        let zip64EndOfDirectoryVersion2;
        let zip64EndOfDirectoryLength = ZIP64_END_OF_CENTRAL_DIR_LENGTH;
        let directoryEncryptionInfo;
        const requiresZip64 = directoryDataOffset == MAX_32_BITS || directoryDataLength == MAX_32_BITS || filesLength == MAX_16_BITS || diskNumber == MAX_16_BITS;
        if (directoryDataOffset != MAX_32_BITS && diskNumber != MAX_16_BITS) {
          directoryDataOffset += getDiskOffset(reader, diskNumber);
        }
        if (requiresZip64) {
          const endOfDirectoryLocatorArray = endOfDirectoryInfo.offset >= ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH ? await readUint8Array(reader, endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH) : EMPTY_UINT8_ARRAY;
          const endOfDirectoryLocatorView = getDataView(endOfDirectoryLocatorArray);
          if (endOfDirectoryLocatorArray.length == ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH && getUint322(endOfDirectoryLocatorView, 0) == ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE) {
            directoryDataOffset = getDiskOffset(reader, getUint322(endOfDirectoryLocatorView, 4)) + getBigUint64(endOfDirectoryLocatorView, 8);
            let endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH);
            let endOfDirectoryView2 = getDataView(endOfDirectoryArray);
            const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH - ZIP64_END_OF_CENTRAL_DIR_LENGTH;
            if ((endOfDirectoryArray.length < ZIP64_END_OF_CENTRAL_DIR_LENGTH || getUint322(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE) && directoryDataOffset != expectedDirectoryDataOffset && expectedDirectoryDataOffset >= 0) {
              const originalDirectoryDataOffset = directoryDataOffset;
              directoryDataOffset = expectedDirectoryDataOffset;
              if (directoryDataOffset > originalDirectoryDataOffset) {
                prependedDataLength = directoryDataOffset - originalDirectoryDataOffset;
              }
              endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH);
              endOfDirectoryView2 = getDataView(endOfDirectoryArray);
            }
            if (endOfDirectoryArray.length < ZIP64_END_OF_CENTRAL_DIR_LENGTH || getUint322(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE) {
              throw new Error(ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);
            }
            zip64EndOfDirectory = true;
            zip64EndOfDirectoryVersion2 = getBigUint64(endOfDirectoryView2, 4) > ZIP64_END_OF_CENTRAL_DIR_LENGTH - 12;
            if (zip64EndOfDirectoryVersion2) {
              const extensibleDataLength = Math.min(
                getBigUint64(endOfDirectoryView2, 4) - (ZIP64_END_OF_CENTRAL_DIR_LENGTH - 12),
                reader.size - directoryDataOffset - ZIP64_END_OF_CENTRAL_DIR_LENGTH
              );
              if (extensibleDataLength > 0) {
                zip64EndOfDirectoryLength += extensibleDataLength;
                const rawExtensibleData = await readUint8Array(reader, directoryDataOffset + ZIP64_END_OF_CENTRAL_DIR_LENGTH, extensibleDataLength);
                directoryEncryptionInfo = getDirectoryEncryptionInfo(rawExtensibleData);
              }
            }
            if (lastDiskNumber == MAX_16_BITS) {
              lastDiskNumber = getUint322(endOfDirectoryView2, 16);
            } else if (lastDiskNumber != getUint322(endOfDirectoryView2, 16)) {
              reportAmbiguity(checkAmbiguity, warnings, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY);
            }
            if (diskNumber == MAX_16_BITS) {
              diskNumber = getUint322(endOfDirectoryView2, 20);
            } else if (diskNumber != getUint322(endOfDirectoryView2, 20)) {
              reportAmbiguity(checkAmbiguity, warnings, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY);
            }
            if (filesLength == MAX_16_BITS) {
              filesLength = getBigUint64(endOfDirectoryView2, 32);
            } else if (filesLength != getBigUint64(endOfDirectoryView2, 32)) {
              reportAmbiguity(checkAmbiguity, warnings, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY);
            }
            if (directoryDataLength == MAX_32_BITS) {
              directoryDataLength = getBigUint64(endOfDirectoryView2, 40);
            } else if (directoryDataLength != getBigUint64(endOfDirectoryView2, 40)) {
              reportAmbiguity(checkAmbiguity, warnings, WARNING_MISMATCHED_ZIP64_END_OF_CENTRAL_DIRECTORY);
            }
            directoryDataOffset = getDiskOffset(reader, diskNumber) + getBigUint64(endOfDirectoryView2, 48) + prependedDataLength;
          }
        }
        let declaredDirectoryDataLength = directoryDataLength;
        const centralDirectoryEndOffset = endOfDirectoryInfo.offset - (zip64EndOfDirectory ? zip64EndOfDirectoryLength + ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH : 0);
        if (directoryDataOffset >= reader.size) {
          prependedDataLength = reader.size - directoryDataOffset - directoryDataLength - END_OF_CENTRAL_DIR_LENGTH;
          directoryDataOffset = reader.size - directoryDataLength - END_OF_CENTRAL_DIR_LENGTH;
        }
        if (expectedLastDiskNumber != lastDiskNumber) {
          throw new Error(ERR_SPLIT_ZIP_FILE);
        }
        if (directoryDataOffset < 0) {
          throw new Error(ERR_BAD_FORMAT);
        }
        let offset = 0;
        let directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength);
        let directoryView = getDataView(directoryArray);
        if (directoryDataLength) {
          if (directoryArray.length < 4) {
            throw new Error(ERR_BAD_FORMAT);
          }
          const expectedDirectoryDataOffset = centralDirectoryEndOffset - directoryDataLength;
          if (directoryDataOffset != expectedDirectoryDataOffset && diskNumber == lastDiskNumber) {
            const storedPointsAtDirectory = getUint322(directoryView, offset) == CENTRAL_FILE_HEADER_SIGNATURE || Boolean(directoryEncryptionInfo && directoryEncryptionInfo.compressedSize) || detectEncryptedCentralDirectory(directoryView);
            let reconcile = !storedPointsAtDirectory;
            if (!reconcile && expectedDirectoryDataOffset >= 0 && expectedDirectoryDataOffset + 4 <= reader.size) {
              const expectedSignatureArray = await readUint8Array(reader, expectedDirectoryDataOffset, 4);
              reconcile = getUint322(getDataView(expectedSignatureArray), 0) == CENTRAL_FILE_HEADER_SIGNATURE;
            }
            if (reconcile) {
              const originalDirectoryDataOffset = directoryDataOffset;
              directoryDataOffset = expectedDirectoryDataOffset;
              if (directoryDataOffset > originalDirectoryDataOffset) {
                prependedDataLength += directoryDataOffset - originalDirectoryDataOffset;
                prependedCentralDirectory = storedPointsAtDirectory;
              }
              directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength);
              directoryView = getDataView(directoryArray);
            }
          }
        }
        const expectedDirectoryDataLength = centralDirectoryEndOffset - directoryDataOffset;
        if (directoryDataLength != expectedDirectoryDataLength && expectedDirectoryDataLength >= 0 && diskNumber == lastDiskNumber) {
          directoryDataLength = expectedDirectoryDataLength;
          directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength);
          directoryView = getDataView(directoryArray);
        }
        if (directoryDataOffset < 0 || directoryDataOffset >= reader.size) {
          throw new Error(ERR_BAD_FORMAT);
        }
        zipReader.directoryOffset = directoryDataOffset;
        zipReader.directoryLength = declaredDirectoryDataLength;
        const decryptCentralDirectory = getFunctionOptionValue(zipReader, options, OPTION_DECRYPT_CENTRAL_DIRECTORY);
        let decryptedDirectory, dataAfterEncryptedDirectory;
        if (decryptCentralDirectory && filesLength && directoryArray.length >= 4 && getUint322(directoryView, 0) != CENTRAL_FILE_HEADER_SIGNATURE && (zip64EndOfDirectoryVersion2 || detectEncryptedCentralDirectory(directoryView))) {
          const encryptedDirectoryDataLength = getEncryptedDirectoryDataLength(directoryEncryptionInfo, declaredDirectoryDataLength, directoryArray.length);
          dataAfterEncryptedDirectory = directoryArray.subarray(encryptedDirectoryDataLength);
          directoryArray = await decryptCentralDirectory(directoryArray.subarray(0, encryptedDirectoryDataLength), directoryEncryptionInfo);
          directoryView = getDataView(directoryArray);
          declaredDirectoryDataLength = directoryArray.length;
          decryptedDirectory = true;
        }
        if (directoryEncryptionInfo && !decryptedDirectory && (directoryArray.length < 4 || getUint322(directoryView, 0) == CENTRAL_FILE_HEADER_SIGNATURE)) {
          addWarning(warnings, WARNING_UNKNOWN_ZIP64_EXTENSIBLE_DATA);
        }
        startOffset = directoryDataOffset;
        const filenameEncoding = getOptionValue(zipReader, options, OPTION_FILENAME_ENCODING);
        const commentEncoding = getOptionValue(zipReader, options, OPTION_COMMENT_ENCODING);
        const filenames = /* @__PURE__ */ new Set();
        let duplicateFilename;
        let previousEntryPosition = -1;
        const recoverWrappedFilesLength = !checkAmbiguity && !zip64EndOfDirectory;
        if (!filesLength && recoverWrappedFilesLength) {
          filesLength = getWrappedFilesLength(directoryView, directoryArray, offset);
          if (filesLength) {
            addWarning(warnings, WARNING_WRAPPED_ENTRIES_COUNT);
          }
        }
        for (let indexFile = 0; indexFile < filesLength; indexFile++) {
          const fileEntry = new ZipEntry(reader, zipReader.options);
          if (offset + CENTRAL_FILE_HEADER_LENGTH > directoryArray.length || getUint322(directoryView, offset) != CENTRAL_FILE_HEADER_SIGNATURE) {
            if (indexFile == 0 && !decryptedDirectory && (zip64EndOfDirectoryVersion2 || detectEncryptedCentralDirectory(directoryView))) {
              throw new Error(ERR_ENCRYPTED_CENTRAL_DIRECTORY);
            }
            throw new Error(ERR_CENTRAL_DIRECTORY_NOT_FOUND);
          }
          readCommonHeader(fileEntry, directoryView, offset + 6);
          const languageEncodingFlag = Boolean(fileEntry.bitFlag.languageEncodingFlag);
          const filenameOffset = offset + CENTRAL_FILE_HEADER_LENGTH;
          const extraFieldOffset = filenameOffset + fileEntry.filenameLength;
          const commentOffset2 = extraFieldOffset + fileEntry.extraFieldLength;
          const versionMadeBy = getUint162(directoryView, offset + 4);
          const msDosCompatible = versionMadeBy >> 8 == 0;
          const unixCompatible = versionMadeBy >> 8 == 3;
          const commentLength2 = getUint162(directoryView, offset + 32);
          const endOffset = commentOffset2 + commentLength2;
          const rawEntryData = new Uint8Array(directoryArray.subarray(filenameOffset, endOffset));
          const rawFilename = rawEntryData.subarray(0, fileEntry.filenameLength);
          const rawComment = rawEntryData.subarray(fileEntry.filenameLength + fileEntry.extraFieldLength);
          const filenameUTF8 = languageEncodingFlag || !filenameEncoding && isUTF8Text(rawFilename);
          const commentUTF8 = languageEncodingFlag || !commentEncoding && isUTF8Text(rawComment);
          const externalFileAttributes = getUint322(directoryView, offset + 38);
          const msdosAttributesRaw = externalFileAttributes & MAX_8_BITS;
          const msdosAttributes = {
            readOnly: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_READONLY_MASK),
            hidden: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_HIDDEN_MASK),
            system: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_SYSTEM_MASK),
            directory: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_DIR_MASK),
            archive: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_ARCHIVE_MASK)
          };
          const offsetFileEntry = getUint322(directoryView, offset + 42);
          const decode2 = getFunctionOptionValue(zipReader, options, OPTION_DECODE_TEXT) || decodeText;
          const rawFilenameEncoding = filenameUTF8 ? CHARSET_UTF8 : filenameEncoding || CHARSET_CP437;
          const rawCommentEncoding = commentUTF8 ? CHARSET_UTF8 : commentEncoding || CHARSET_CP437;
          let filename = decode2(rawFilename, rawFilenameEncoding, TEXT_TYPE_FILENAME);
          if (filename === UNDEFINED_VALUE) {
            filename = decodeText(rawFilename, rawFilenameEncoding);
          }
          if (normalizeFilename) {
            const normalizedFilename = normalizeFilename(filename);
            if (normalizedFilename !== UNDEFINED_VALUE) {
              filename = normalizedFilename;
            }
          }
          if (isUnsafeFilename(filename, filenameValidation)) {
            const error = new Error(ERR_UNSAFE_FILENAME);
            error.filename = filename;
            throw error;
          }
          let comment = decode2(rawComment, rawCommentEncoding, TEXT_TYPE_COMMENT);
          if (comment === UNDEFINED_VALUE) {
            comment = decodeText(rawComment, rawCommentEncoding);
          }
          Object.assign(fileEntry, {
            index: indexFile,
            decryptedDirectory,
            versionMadeBy,
            msDosCompatible,
            zip64: false,
            compressedSize: 0,
            uncompressedSize: 0,
            commentLength: commentLength2,
            offset: offsetFileEntry,
            diskNumberStart: getUint162(directoryView, offset + 34),
            internalFileAttributes: getUint162(directoryView, offset + 36),
            externalFileAttributes,
            msdosAttributesRaw,
            msdosAttributes,
            rawFilename,
            filenameUTF8,
            commentUTF8,
            rawExtraField: rawEntryData.subarray(fileEntry.filenameLength, fileEntry.filenameLength + fileEntry.extraFieldLength),
            rawComment,
            filename,
            comment
          });
          if (readCommonFooter(fileEntry, fileEntry, directoryView, offset + 6)) {
            addWarning(warnings, WARNING_MALFORMED_EXTRA_FIELD, filename);
          }
          fileEntry.offset += prependedDataLength;
          const entryPosition = getDiskOffset(reader, fileEntry.diskNumberStart) + fileEntry.offset;
          startOffset = Math.min(entryPosition, startOffset);
          if (entryPosition < previousEntryPosition) {
            addWarning(warnings, WARNING_UNSORTED_CENTRAL_DIRECTORY, filename);
          }
          previousEntryPosition = entryPosition;
          if ((fileEntry.version & MAX_8_BITS) > MAX_KNOWN_VERSION) {
            addWarning(warnings, WARNING_UNKNOWN_VERSION, filename);
          }
          if ((fileEntry.rawBitFlag & BITFLAG_COMPRESSED_PATCHED_DATA) == BITFLAG_COMPRESSED_PATCHED_DATA) {
            addWarning(warnings, WARNING_COMPRESSED_PATCHED_DATA, filename);
          }
          if (filenames.has(fileEntry.filename)) {
            duplicateFilename = true;
          }
          filenames.add(fileEntry.filename);
          const unixExternalUpper = fileEntry.externalFileAttributes >> 16 & MAX_16_BITS;
          if (fileEntry.unixMode === UNDEFINED_VALUE && (unixExternalUpper & (FILE_ATTR_UNIX_DEFAULT_MASK | FILE_ATTR_UNIX_EXECUTABLE_MASK | FILE_ATTR_UNIX_TYPE_DIR)) != 0) {
            fileEntry.unixMode = unixExternalUpper;
          }
          const setuid = Boolean(fileEntry.unixMode & FILE_ATTR_UNIX_SETUID_MASK);
          const setgid = Boolean(fileEntry.unixMode & FILE_ATTR_UNIX_SETGID_MASK);
          const sticky = Boolean(fileEntry.unixMode & FILE_ATTR_UNIX_STICKY_MASK);
          const unixType = fileEntry.unixMode === UNDEFINED_VALUE ? unixExternalUpper : fileEntry.unixMode;
          const symlink = (unixType & FILE_ATTR_UNIX_TYPE_MASK) == FILE_ATTR_UNIX_TYPE_SYMLINK;
          const executable = !symlink && (fileEntry.unixMode !== UNDEFINED_VALUE ? (fileEntry.unixMode & FILE_ATTR_UNIX_EXECUTABLE_MASK) != 0 : unixCompatible && (unixExternalUpper & FILE_ATTR_UNIX_EXECUTABLE_MASK) != 0);
          const modeIsDir = fileEntry.unixMode !== UNDEFINED_VALUE && (fileEntry.unixMode & FILE_ATTR_UNIX_TYPE_MASK) == FILE_ATTR_UNIX_TYPE_DIR;
          const upperIsDir = (unixExternalUpper & FILE_ATTR_UNIX_TYPE_MASK) == FILE_ATTR_UNIX_TYPE_DIR;
          Object.assign(fileEntry, {
            setuid,
            setgid,
            sticky,
            symlink,
            unixExternalUpper,
            executable,
            directory: modeIsDir || upperIsDir || msDosCompatible && msdosAttributes.directory || fileEntry.filename.endsWith(DIRECTORY_SIGNATURE),
            zipCrypto: fileEntry.encrypted && !fileEntry.extraFieldAES
          });
          const entry = new Entry(fileEntry);
          entry.getData = (writer, options2) => fileEntry.getData(writer, entry, zipReader.readRanges, options2);
          entry.arrayBuffer = async (options2) => {
            const writer = new TransformStream();
            const arrayBufferPromise = streamToBlob(writer.readable).then((blob) => blob.arrayBuffer());
            arrayBufferPromise.catch(() => {
            });
            await fileEntry.getData(
              writer,
              entry,
              zipReader.readRanges,
              Object.assign({}, options2, { preventClose: false })
            );
            return arrayBufferPromise;
          };
          offset = endOffset;
          if (indexFile == filesLength - 1 && recoverWrappedFilesLength) {
            const wrappedFilesLength = getWrappedFilesLength(directoryView, directoryArray, offset);
            if (wrappedFilesLength) {
              filesLength += wrappedFilesLength;
              addWarning(warnings, WARNING_WRAPPED_ENTRIES_COUNT);
            }
          }
          const { onprogress } = options;
          if (onprogress) {
            try {
              await onprogress(indexFile + 1, filesLength, new Entry(fileEntry));
            } catch {
            }
          }
          yield entry;
        }
        let offsetAfterSignature = offset;
        let digitalSignature = readDigitalSignature(directoryArray.subarray(offset)) || (decryptedDirectory ? readDigitalSignature(dataAfterEncryptedDirectory) : UNDEFINED_VALUE);
        if (!digitalSignature && !decryptedDirectory) {
          const signatureRecordOffset = directoryDataOffset + offset;
          const signatureRecordLength = Math.min(centralDirectoryEndOffset - signatureRecordOffset, 6 + MAX_16_BITS);
          if (signatureRecordLength >= 6) {
            digitalSignature = readDigitalSignature(await readUint8Array(reader, signatureRecordOffset, signatureRecordLength));
          }
        }
        if (digitalSignature) {
          zipReader.digitalSignature = digitalSignature;
          offsetAfterSignature = offset + 6 + digitalSignature.length;
        }
        if (offset != declaredDirectoryDataLength && offsetAfterSignature != declaredDirectoryDataLength || !decryptedDirectory && offset != directoryDataLength && offsetAfterSignature != directoryDataLength) {
          reportAmbiguity(checkAmbiguity, warnings, WARNING_TRAILING_CENTRAL_DIRECTORY_DATA);
        }
        if (duplicateFilename) {
          reportAmbiguity(checkAmbiguity, warnings, WARNING_DUPLICATE_FILENAME);
        }
        const extractPrependedData = getOptionValue(zipReader, options, OPTION_EXTRACT_PREPENDED_DATA);
        const extractAppendedData = getOptionValue(zipReader, options, OPTION_EXTRACT_APPENDED_DATA);
        const splitZipSignatureLength = (checkAmbiguity || extractPrependedData) && filesLength && startOffset == SPLIT_ZIP_FILE_SIGNATURE_LENGTH && await startsWithSplitZipMarker(reader) ? SPLIT_ZIP_FILE_SIGNATURE_LENGTH : 0;
        if (checkAmbiguity && (prependedDataLength || filesLength && startOffset > splitZipSignatureLength)) {
          throwAmbiguousArchive(WARNING_PREPENDED_DATA);
        }
        if (prependedDataLength || filesLength && startOffset > SPLIT_ZIP_FILE_SIGNATURE_LENGTH) {
          addWarning(warnings, WARNING_PREPENDED_DATA);
        }
        if (prependedCentralDirectory) {
          addWarning(warnings, WARNING_PREPENDED_CENTRAL_DIRECTORY);
        }
        if (extractPrependedData) {
          zipReader.prependedData = startOffset > splitZipSignatureLength ? await readUint8Array(reader, splitZipSignatureLength, startOffset - splitZipSignatureLength) : EMPTY_UINT8_ARRAY;
        }
        zipReader.comment = commentLength ? await readUint8Array(reader, commentOffset + END_OF_CENTRAL_DIR_LENGTH, commentLength) : EMPTY_UINT8_ARRAY;
        if (extractAppendedData) {
          zipReader.appendedData = appendedDataOffset < reader.size ? await readUint8Array(reader, appendedDataOffset, reader.size - appendedDataOffset) : EMPTY_UINT8_ARRAY;
        }
        return true;
      }
      async getEntries(options = {}) {
        const entries = [];
        for await (const entry of this.getEntriesGenerator(options)) {
          entries.push(entry);
        }
        return entries;
      }
      async close() {
        const { reader } = this;
        if (!reader.readUint8Array && reader.readable && !reader.readable.locked) {
          await reader.readable.cancel();
        }
      }
      [SYMBOL_ASYNC_DISPOSE]() {
        return this.close();
      }
    };
    ZipReaderStream = class {
      constructor(options = {}) {
        let sourceController;
        const { readable, writable } = new TransformStream({
          start(controller) {
            sourceController = controller;
          }
        });
        const zipReader = new ZipReader(readable, options);
        const gen = zipReader.getEntriesGenerator();
        const pendingEntries2 = /* @__PURE__ */ new Set();
        this.readable = new ReadableStream({
          async pull(controller) {
            const { done, value } = await gen.next();
            if (done)
              return controller.close();
            const entryStream = createEntryStream(value, pendingEntries2);
            const chunk = {
              ...value,
              readable: entryStream.readable
            };
            delete chunk.getData;
            Object.defineProperties(chunk, {
              localDirectory: {
                get: () => value.localDirectory,
                enumerable: true
              },
              warnings: {
                get: () => value.warnings,
                enumerable: true
              }
            });
            controller.enqueue(chunk);
          },
          async cancel(reason) {
            const entryStreams = Array.from(pendingEntries2);
            pendingEntries2.clear();
            sourceController.error(reason);
            await Promise.allSettled(entryStreams.map((entryStream) => entryStream.cancel(reason)));
            await Promise.allSettled([gen.return(), zipReader.close()]);
          }
        });
        this.writable = writable;
      }
    };
    ZipEntry = class {
      constructor(reader, options) {
        Object.assign(this, {
          reader,
          options
        });
      }
      async getData(writer, fileEntry, readRanges, options = {}) {
        const zipEntry = this;
        const config2 = getConfiguration();
        const {
          reader,
          index,
          offset,
          diskNumberStart,
          extraFieldAES,
          extraFieldZip64,
          compressionMethod,
          bitFlag,
          rawBitFlag,
          crc32,
          rawLastModDate,
          uncompressedSize,
          compressedSize
        } = zipEntry;
        const {
          dataDescriptor
        } = bitFlag;
        const localDirectory = fileEntry.localDirectory = {};
        const warnings = fileEntry.warnings = [];
        const localHeaderOffset = getDiskOffset(reader, diskNumberStart) + offset;
        const dataArray = await readUint8Array(reader, localHeaderOffset, HEADER_SIZE);
        const dataView = getDataView(dataArray);
        let password = getOptionValue(zipEntry, options, OPTION_PASSWORD);
        let rawPassword = getOptionValue(zipEntry, options, OPTION_RAW_PASSWORD);
        const passThrough = checkPassThroughOption(getOptionValue(zipEntry, options, OPTION_PASS_THROUGH));
        const passThroughCompression = Boolean(passThrough);
        const passThroughEncryption = passThrough === true;
        checkPasswordOption(password, rawPassword);
        password = password && password.length ? password : UNDEFINED_VALUE;
        rawPassword = rawPassword && rawPassword.length ? rawPassword : UNDEFINED_VALUE;
        if (extraFieldAES) {
          if (extraFieldAES.originalCompressionMethod != COMPRESSION_METHOD_AES) {
            throw new Error(ERR_UNSUPPORTED_COMPRESSION);
          }
        }
        if (dataArray.length < HEADER_SIZE || getUint322(dataView, 0) != LOCAL_FILE_HEADER_SIGNATURE) {
          throw new Error(ERR_LOCAL_FILE_HEADER_NOT_FOUND);
        }
        readCommonHeader(localDirectory, dataView, 4);
        const {
          extraFieldLength,
          filenameLength
        } = localDirectory;
        const dataOffset = localDirectory.dataOffset = localHeaderOffset + HEADER_SIZE + filenameLength + extraFieldLength;
        const checkLocalDirectoryOption = getOptionValue(zipEntry, options, OPTION_CHECK_LOCAL_DIRECTORY);
        const entryStrictness = getStrictness(options, zipEntry.options);
        const checkLocalDirectory = getCheckLocalDirectory(checkLocalDirectoryOption, entryStrictness);
        const checkLocalFilenameOption = getOptionValue(zipEntry, options, OPTION_CHECK_LOCAL_FILENAME);
        const checkLocalFilename = getCheckLocalFilename(
          checkLocalFilenameOption === UNDEFINED_VALUE ? checkLocalDirectoryOption : checkLocalFilenameOption,
          entryStrictness
        );
        let rawLocalFilename = EMPTY_UINT8_ARRAY;
        if (checkLocalFilename && (filenameLength || extraFieldLength)) {
          const trailingDataArray = await readUint8Array(reader, localHeaderOffset + HEADER_SIZE, filenameLength + extraFieldLength);
          rawLocalFilename = trailingDataArray.subarray(0, filenameLength);
          localDirectory.rawExtraField = trailingDataArray.subarray(filenameLength);
        } else {
          localDirectory.rawExtraField = extraFieldLength ? await readUint8Array(reader, localHeaderOffset + HEADER_SIZE + filenameLength, extraFieldLength) : EMPTY_UINT8_ARRAY;
        }
        if (checkLocalFilename) {
          localDirectory.rawFilename = rawLocalFilename;
        }
        if (readCommonFooter(zipEntry, localDirectory, dataView, 4, true)) {
          addWarning(warnings, WARNING_MALFORMED_EXTRA_FIELD);
        }
        validateLocalDirectory(zipEntry, localDirectory, rawLocalFilename, checkLocalFilename, checkLocalDirectory ? UNDEFINED_VALUE : warnings);
        const { lastAccessDate, creationDate, uid, gid } = localDirectory;
        if (lastAccessDate) {
          fileEntry.lastAccessDate = lastAccessDate;
        }
        if (creationDate) {
          fileEntry.creationDate = creationDate;
        }
        if (uid !== UNDEFINED_VALUE && fileEntry.uid === UNDEFINED_VALUE) {
          fileEntry.uid = uid;
        }
        if (gid !== UNDEFINED_VALUE && fileEntry.gid === UNDEFINED_VALUE) {
          fileEntry.gid = gid;
        }
        const checkPasswordOnly = getOptionValue(zipEntry, options, OPTION_CHECK_PASSWORD_ONLY);
        const encrypted = zipEntry.encrypted && (!passThroughEncryption || checkPasswordOnly);
        const zipCrypto = encrypted && !extraFieldAES;
        if (!passThroughEncryption) {
          fileEntry.zipCrypto = zipCrypto;
        }
        if (encrypted && (zipEntry.rawBitFlag & BITFLAG_STRONG_ENCRYPTION) == BITFLAG_STRONG_ENCRYPTION) {
          throw new Error(ERR_UNSUPPORTED_ENCRYPTION);
        }
        const registeredCodec = passThroughCompression ? UNDEFINED_VALUE : getRegisteredCodec(compressionMethod);
        if (compressionMethod != COMPRESSION_METHOD_STORE && compressionMethod != COMPRESSION_METHOD_DEFLATE && compressionMethod != COMPRESSION_METHOD_DEFLATE_64 && !registeredCodec && !passThroughCompression) {
          throw new Error(ERR_UNSUPPORTED_COMPRESSION);
        }
        if (encrypted) {
          if (!zipCrypto && (extraFieldAES.strength < 1 || extraFieldAES.strength > 3)) {
            throw new Error(ERR_UNSUPPORTED_ENCRYPTION);
          } else if (!password && !rawPassword) {
            throw new Error(ERR_ENCRYPTED);
          }
        }
        if (dataOffset + compressedSize > reader.size) {
          throw new Error(ERR_ENTRY_DATA_OUT_OF_BOUNDS);
        }
        const size = compressedSize;
        const signal = checkSignalOption(getOptionValue(zipEntry, options, OPTION_SIGNAL));
        throwIfAborted(signal);
        let checkOverlappingEntry = getOptionValue(zipEntry, options, OPTION_CHECK_OVERLAPPING_ENTRY);
        const checkOverlappingEntryOnly = getOptionValue(zipEntry, options, OPTION_CHECK_OVERLAPPING_ENTRY_ONLY);
        if (checkOverlappingEntryOnly) {
          checkOverlappingEntry = true;
        }
        const { onstart, onprogress, onend } = options;
        const compressed = compressionMethod != COMPRESSION_METHOD_STORE && !passThroughCompression;
        const outputSize = passThroughCompression ? compressedSize - getEncryptionOverhead(encrypted, zipCrypto, extraFieldAES && extraFieldAES.strength) : uncompressedSize;
        const deflate64 = compressionMethod == COMPRESSION_METHOD_DEFLATE_64;
        let useCompressionStream = getOptionValue(zipEntry, options, OPTION_USE_COMPRESSION_STREAM);
        if (deflate64) {
          useCompressionStream = false;
        }
        const checkCrc32Option = getOptionValue(zipEntry, options, OPTION_CHECK_CRC32);
        const checkCrc32 = (checkCrc32Option === UNDEFINED_VALUE ? getOptionValue(zipEntry, options, OPTION_CHECK_SIGNATURE) : checkCrc32Option) && !passThroughCompression && (!encrypted || zipCrypto || extraFieldAES && extraFieldAES.vendorVersion == VENDOR_VERSION_AE_1);
        const workerOptions = {
          options: {
            codecType: CODEC_INFLATE,
            password,
            rawPassword,
            zipCrypto,
            encryptionStrength: extraFieldAES && extraFieldAES.strength,
            checkCrc32,
            checkAuthenticationCode: getOptionValue(zipEntry, options, OPTION_CHECK_AUTHENTICATION_CODE),
            passwordVerification: zipCrypto && (dataDescriptor ? rawLastModDate >>> 8 & MAX_8_BITS : crc32 >>> 24 & MAX_8_BITS),
            outputSize,
            crc32,
            compressed,
            encrypted,
            useWebWorkers: getOptionValue(zipEntry, options, OPTION_USE_WEB_WORKERS),
            useCompressionStream,
            transferStreams: getOptionValue(zipEntry, options, OPTION_TRANSFER_STREAMS),
            deflate64,
            format: registeredCodec ? registeredCodec.format : UNDEFINED_VALUE,
            codecURI: registeredCodec ? registeredCodec.codecURI : UNDEFINED_VALUE,
            compressionMethod,
            rawBitFlag,
            checkPasswordOnly
          },
          config: config2,
          streamOptions: { signal, size, onstart, onprogress, onend }
        };
        if (checkOverlappingEntry) {
          await detectOverlappingEntry({
            reader,
            fileEntry,
            index,
            offset: localHeaderOffset,
            crc32,
            compressedSize,
            uncompressedSize,
            dataOffset,
            dataDescriptor: dataDescriptor || localDirectory.bitFlag.dataDescriptor,
            extraFieldZip64: extraFieldZip64 || localDirectory.extraFieldZip64,
            readRanges
          });
        }
        let writable, abortError, aborted;
        try {
          if (!checkOverlappingEntryOnly) {
            if (checkPasswordOnly) {
              writer = new WritableStream();
            }
            writer = new GenericWriter(writer);
            await initStream(writer, getDecodableOutputSize(outputSize, compressedSize, compressed));
            ({ writable } = writer);
            const readable = toCompatibleReadable(reader.createReadable({ offset: dataOffset, size }));
            const { outputSize: writtenSize } = await runWorker2({ readable, writable }, workerOptions);
            throwIfAborted(signal);
            if (writtenSize != outputSize) {
              throw Object.assign(new Error(ERR_INVALID_UNCOMPRESSED_SIZE), { outputSize: writtenSize });
            }
            writer.size += writtenSize;
          }
        } catch (error) {
          const { outputSize: failedOutputSize } = workerOptions;
          if (failedOutputSize !== UNDEFINED_VALUE) {
            writer.size += failedOutputSize;
          } else if (isErrorObject(error) && error.outputSize !== UNDEFINED_VALUE) {
            writer.size += error.outputSize;
          }
          if (!checkPasswordOnly || !isErrorObject(error) || error.message != ERR_ABORT_CHECK_PASSWORD) {
            abortError = error;
            aborted = true;
            throw error;
          }
        } finally {
          const preventClose = !ownsWritable(writer) && getOptionValue(zipEntry, options, OPTION_PREVENT_CLOSE);
          if (!preventClose && writable && !writable.locked) {
            const writableWriter = writable.getWriter();
            if (aborted) {
              try {
                await writableWriter.abort(abortError);
              } catch {
              }
            } else {
              await writableWriter.close();
            }
          }
        }
        return checkPasswordOnly || checkOverlappingEntryOnly ? UNDEFINED_VALUE : writer.getData ? writer.getData() : writable;
      }
    };
  }
});

// node_modules/@yume-chan/async/esm/promise-resolver.js
var PromiseResolver = class {
  #promise;
  get promise() {
    return this.#promise;
  }
  #resolve;
  #reject;
  #state = "running";
  get state() {
    return this.#state;
  }
  constructor() {
    this.#promise = new Promise((resolve, reject) => {
      this.#resolve = resolve;
      this.#reject = reject;
    });
  }
  resolve = (value) => {
    this.#resolve(value);
    this.#state = "resolved";
  };
  reject = (reason) => {
    this.#reject(reason);
    this.#state = "rejected";
  };
};

// node_modules/@yume-chan/async/esm/async-operation-manager.js
var AsyncOperationManager = class {
  nextId;
  pendingResolvers = /* @__PURE__ */ new Map();
  constructor(startId = 0) {
    this.nextId = startId;
  }
  add() {
    const id = this.nextId++;
    const resolver = new PromiseResolver();
    this.pendingResolvers.set(id, resolver);
    return [id, resolver.promise];
  }
  getResolver(id) {
    if (!this.pendingResolvers.has(id)) {
      return null;
    }
    const resolver = this.pendingResolvers.get(id);
    this.pendingResolvers.delete(id);
    return resolver;
  }
  resolve(id, result) {
    const resolver = this.getResolver(id);
    if (resolver !== null) {
      resolver.resolve(result);
      return true;
    }
    return false;
  }
  reject(id, reason) {
    const resolver = this.getResolver(id);
    if (resolver !== null) {
      resolver.reject(reason);
      return true;
    }
    return false;
  }
};

// node_modules/@yume-chan/async/esm/delay.js
function delay(time) {
  return new Promise((resolve) => {
    globalThis.setTimeout(() => resolve(), time);
  });
}

// node_modules/@yume-chan/async/esm/maybe-promise.js
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}

// node_modules/@yume-chan/struct/esm/bipedal.js
function advance(iterator, next) {
  while (true) {
    const { done, value } = iterator.next(next);
    if (done) {
      return value;
    }
    if (isPromiseLike(value)) {
      return value.then((value2) => advance(iterator, { resolved: value2 }), (error) => advance(iterator, { error }));
    }
    next = value;
  }
}
// @__NO_SIDE_EFFECTS__
function bipedal(fn, bindThis) {
  function result(...args) {
    const iterator = fn.call(this, function* (value) {
      if (isPromiseLike(value)) {
        const result2 = yield value;
        if ("resolved" in result2) {
          return result2.resolved;
        } else {
          throw result2.error;
        }
      }
      return value;
    }, ...args);
    return advance(iterator, void 0);
  }
  if (bindThis) {
    return result.bind(bindThis);
  } else {
    return result;
  }
}

// node_modules/@yume-chan/struct/esm/field/serialize.js
function defaultFieldSerializer(serializer) {
  return (source, context) => {
    if ("buffer" in context) {
      const buffer2 = serializer(source, context);
      context.buffer.set(buffer2, context.index);
      return buffer2.length;
    } else {
      return serializer(source, context);
    }
  };
}
function byobFieldSerializer(size, serializer) {
  return (source, context) => {
    if ("buffer" in context) {
      context.index ??= 0;
      serializer(source, context);
      return size;
    } else {
      const buffer2 = new Uint8Array(size);
      serializer(source, {
        buffer: buffer2,
        index: 0,
        littleEndian: context.littleEndian
      });
      return buffer2;
    }
  };
}

// node_modules/@yume-chan/struct/esm/field/factory.js
// @__NO_SIDE_EFFECTS__
function _field(size, type, serialize, deserialize, options) {
  const field2 = {
    size,
    type,
    serialize: type === "default" ? defaultFieldSerializer(serialize) : byobFieldSerializer(size, serialize),
    deserialize: bipedal(deserialize),
    omitInit: options?.omitInit
  };
  if (options?.init) {
    field2.init = options.init;
  }
  return field2;
}
var field = _field;

// node_modules/@yume-chan/struct/esm/buffer.js
var EmptyUint8Array = new Uint8Array(0);
function copyMaybeDifferentLength(dest, source, index, length) {
  if (source.length < length) {
    dest.set(source, index);
    dest.fill(0, index + source.length, index + length);
  } else if (source.length === length) {
    dest.set(source, index);
  } else {
    dest.set(source.subarray(0, length), index);
  }
}
// @__NO_SIDE_EFFECTS__
function buffer(lengthOrField, converter) {
  if (typeof lengthOrField === "number") {
    let serialize;
    let deserialize2;
    let init2;
    if (lengthOrField === 0) {
      serialize = () => {
      };
      if (converter) {
        deserialize2 = function* () {
          return converter.convert(EmptyUint8Array);
        };
      } else {
        deserialize2 = function* () {
          return EmptyUint8Array;
        };
      }
    } else {
      serialize = (value, { buffer: buffer2, index }) => copyMaybeDifferentLength(buffer2, value, index, lengthOrField);
      if (converter) {
        deserialize2 = function* (then, reader) {
          const array = reader.readExactly(lengthOrField);
          return converter.convert(yield* then(array));
        };
        init2 = (value) => converter.back(value);
      } else {
        deserialize2 = function* (_then, reader) {
          const array = reader.readExactly(lengthOrField);
          return array;
        };
      }
    }
    return field(lengthOrField, "byob", serialize, deserialize2, { init: init2 });
  }
  if ((typeof lengthOrField === "object" || typeof lengthOrField === "function") && "serialize" in lengthOrField) {
    let deserialize2;
    let init2;
    if (converter) {
      deserialize2 = function* (then, reader, context) {
        const length = yield* then(lengthOrField.deserialize(reader, context));
        const array = length !== 0 ? reader.readExactly(length) : EmptyUint8Array;
        return converter.convert(yield* then(array));
      };
      init2 = (value) => converter.back(value);
    } else {
      deserialize2 = function* (then, reader, context) {
        const length = yield* then(lengthOrField.deserialize(reader, context));
        const array = length !== 0 ? reader.readExactly(length) : EmptyUint8Array;
        return array;
      };
    }
    return field(lengthOrField.size, "default", (value, { littleEndian }) => {
      if (lengthOrField.type === "default") {
        const lengthBuffer = lengthOrField.serialize(value.length, {
          littleEndian
        });
        if (value.length === 0) {
          return lengthBuffer;
        }
        const result = new Uint8Array(lengthBuffer.length + value.length);
        result.set(lengthBuffer, 0);
        result.set(value, lengthBuffer.length);
        return result;
      } else {
        const result = new Uint8Array(lengthOrField.size + value.length);
        lengthOrField.serialize(value.length, {
          buffer: result,
          index: 0,
          littleEndian
        });
        result.set(value, lengthOrField.size);
        return result;
      }
    }, deserialize2, { init: init2 });
  }
  if (typeof lengthOrField === "string") {
    let deserialize2;
    let init2;
    if (converter) {
      deserialize2 = function* (then, reader, { dependencies }) {
        const length = dependencies[lengthOrField];
        const array = length !== 0 ? reader.readExactly(length) : EmptyUint8Array;
        return converter.convert(yield* then(array));
      };
      init2 = (value, dependencies) => {
        const array = converter.back(value);
        dependencies[lengthOrField] = array.length;
        return array;
      };
    } else {
      deserialize2 = function* (_then, reader, { dependencies }) {
        const length = dependencies[lengthOrField];
        const array = length !== 0 ? reader.readExactly(length) : EmptyUint8Array;
        return array;
      };
      init2 = (value, dependencies) => {
        const array = value;
        dependencies[lengthOrField] = array.length;
        return array;
      };
    }
    return field(0, "default", (source) => source, deserialize2, { init: init2 });
  }
  let deserialize;
  let init;
  if (converter) {
    deserialize = function* (then, reader, { dependencies }) {
      const rawLength = dependencies[lengthOrField.field];
      const length = lengthOrField.convert(rawLength);
      const array = length !== 0 ? reader.readExactly(length) : EmptyUint8Array;
      return converter.convert(yield* then(array));
    };
    init = (value, dependencies) => {
      const array = converter.back(value);
      dependencies[lengthOrField.field] = lengthOrField.back(array.length);
      return array;
    };
  } else {
    deserialize = function* (_then, reader, { dependencies }) {
      const rawLength = dependencies[lengthOrField.field];
      const length = lengthOrField.convert(rawLength);
      const array = length !== 0 ? reader.readExactly(length) : EmptyUint8Array;
      return array;
    };
    init = (value, dependencies) => {
      const array = value;
      dependencies[lengthOrField.field] = lengthOrField.back(array.length);
      return array;
    };
  }
  return field(0, "default", (source) => source, deserialize, { init });
}

// node_modules/@yume-chan/struct/esm/readable.js
var ExactReadableEndedError = class extends Error {
  constructor() {
    super("ExactReadable ended");
  }
};
var Uint8ArrayExactReadable = class {
  #data;
  #position;
  get position() {
    return this.#position;
  }
  constructor(data) {
    this.#data = data;
    this.#position = 0;
  }
  readExactly(length) {
    if (this.#position + length > this.#data.length) {
      throw new ExactReadableEndedError();
    }
    const result = this.#data.subarray(this.#position, this.#position + length);
    this.#position += length;
    return result;
  }
};

// node_modules/@yume-chan/struct/esm/struct.js
var StructDeserializeError = class extends Error {
  constructor(message) {
    super(message);
  }
};
var StructNotEnoughDataError = class extends StructDeserializeError {
  constructor() {
    super("The underlying readable was ended before the struct was fully deserialized");
  }
};
var StructEmptyError = class extends StructDeserializeError {
  constructor() {
    super("The underlying readable doesn't contain any more struct");
  }
};
// @__NO_SIDE_EFFECTS__
function struct(fields, options) {
  const fieldList = Object.entries(fields);
  let size = 0;
  let byob = true;
  for (const [, field2] of fieldList) {
    size += field2.size;
    if (byob && field2.type !== "byob") {
      byob = false;
    }
  }
  const littleEndian = options.littleEndian;
  const extra = options.extra ? Object.getOwnPropertyDescriptors(options.extra) : void 0;
  return {
    littleEndian,
    fields,
    extra: options.extra,
    type: byob ? "byob" : "default",
    size,
    serialize(source, bufferOrContext) {
      const temp = { ...source };
      for (const [key, field2] of fieldList) {
        if (key in temp && "init" in field2) {
          const result = field2.init?.(temp[key], temp);
          temp[key] = result;
        }
      }
      const sizes = new Array(fieldList.length);
      const buffers = new Array(fieldList.length);
      {
        const context2 = { littleEndian };
        for (const [index2, [key, field2]] of fieldList.entries()) {
          if (field2.type === "byob") {
            sizes[index2] = field2.size;
          } else {
            buffers[index2] = field2.serialize(temp[key], context2);
            sizes[index2] = buffers[index2].length;
          }
        }
      }
      const size2 = sizes.reduce((sum, size3) => sum + size3, 0);
      let externalBuffer;
      let buffer2;
      let index;
      if (bufferOrContext instanceof Uint8Array) {
        if (bufferOrContext.length < size2) {
          throw new Error("Buffer too small");
        }
        externalBuffer = true;
        buffer2 = bufferOrContext;
        index = 0;
      } else if (typeof bufferOrContext === "object" && "buffer" in bufferOrContext) {
        externalBuffer = true;
        buffer2 = bufferOrContext.buffer;
        index = bufferOrContext.index ?? 0;
        if (buffer2.length - index < size2) {
          throw new Error("Buffer too small");
        }
      } else {
        externalBuffer = false;
        buffer2 = new Uint8Array(size2);
        index = 0;
      }
      const context = {
        buffer: buffer2,
        index,
        littleEndian
      };
      for (const [index2, [key, field2]] of fieldList.entries()) {
        if (buffers[index2]) {
          buffer2.set(buffers[index2], context.index);
        } else {
          field2.serialize(temp[key], context);
        }
        context.index += sizes[index2];
      }
      if (externalBuffer) {
        return size2;
      } else {
        return buffer2;
      }
    },
    deserialize: bipedal(function* (then, reader) {
      const startPosition = reader.position;
      const result = {};
      const context = {
        dependencies: result,
        littleEndian
      };
      try {
        for (const [key, field2] of fieldList) {
          result[key] = yield* then(field2.deserialize(reader, context));
        }
      } catch (e) {
        if (!(e instanceof ExactReadableEndedError)) {
          throw e;
        }
        if (reader.position === startPosition) {
          throw new StructEmptyError();
        } else {
          throw new StructNotEnoughDataError();
        }
      }
      if (extra) {
        Object.defineProperties(result, extra);
      }
      if (options.postDeserialize) {
        return options.postDeserialize.call(result, result);
      } else {
        return result;
      }
    })
  };
}

// node_modules/@yume-chan/struct/esm/extend.js
// @__NO_SIDE_EFFECTS__
function extend(base, fields, options) {
  return struct(Object.assign({}, base.fields, fields), {
    littleEndian: options?.littleEndian ?? base.littleEndian,
    extra: base.extra,
    postDeserialize: options?.postDeserialize
  });
}

// node_modules/@yume-chan/no-data-view/esm/int32.js
// @__NO_SIDE_EFFECTS__
function getInt32(buffer2, offset, littleEndian) {
  return littleEndian ? buffer2[offset] | buffer2[offset + 1] << 8 | buffer2[offset + 2] << 16 | buffer2[offset + 3] << 24 : buffer2[offset] << 24 | buffer2[offset + 1] << 16 | buffer2[offset + 2] << 8 | buffer2[offset + 3];
}
function setInt32(buffer2, offset, value, littleEndian) {
  if (littleEndian) {
    buffer2[offset] = value;
    buffer2[offset + 1] = value >> 8;
    buffer2[offset + 2] = value >> 16;
    buffer2[offset + 3] = value >> 24;
  } else {
    buffer2[offset] = value >> 24;
    buffer2[offset + 1] = value >> 16;
    buffer2[offset + 2] = value >> 8;
    buffer2[offset + 3] = value;
  }
}

// node_modules/@yume-chan/no-data-view/esm/int64.js
function setInt64LittleEndian(buffer2, offset, value) {
  buffer2[offset] = Number(value & 0xffn);
  buffer2[offset + 1] = Number(value >> 8n & 0xffn);
  buffer2[offset + 2] = Number(value >> 16n & 0xffn);
  buffer2[offset + 3] = Number(value >> 24n & 0xffn);
  buffer2[offset + 4] = Number(value >> 32n & 0xffn);
  buffer2[offset + 5] = Number(value >> 40n & 0xffn);
  buffer2[offset + 6] = Number(value >> 48n & 0xffn);
  buffer2[offset + 7] = Number(value >> 56n & 0xffn);
}
function setInt64BigEndian(buffer2, offset, value) {
  buffer2[offset] = Number(value >> 56n & 0xffn);
  buffer2[offset + 1] = Number(value >> 48n & 0xffn);
  buffer2[offset + 2] = Number(value >> 40n & 0xffn);
  buffer2[offset + 3] = Number(value >> 32n & 0xffn);
  buffer2[offset + 4] = Number(value >> 24n & 0xffn);
  buffer2[offset + 5] = Number(value >> 16n & 0xffn);
  buffer2[offset + 6] = Number(value >> 8n & 0xffn);
  buffer2[offset + 7] = Number(value & 0xffn);
}

// node_modules/@yume-chan/no-data-view/esm/uint32.js
// @__NO_SIDE_EFFECTS__
function getUint32LittleEndian(buffer2, offset) {
  return (buffer2[offset] | buffer2[offset + 1] << 8 | buffer2[offset + 2] << 16 | buffer2[offset + 3] << 24) >>> 0;
}
// @__NO_SIDE_EFFECTS__
function getUint32(buffer2, offset, littleEndian) {
  return littleEndian ? (buffer2[offset] | buffer2[offset + 1] << 8 | buffer2[offset + 2] << 16 | buffer2[offset + 3] << 24) >>> 0 : (buffer2[offset] << 24 | buffer2[offset + 1] << 16 | buffer2[offset + 2] << 8 | buffer2[offset + 3]) >>> 0;
}
function setUint32LittleEndian(buffer2, offset, value) {
  buffer2[offset] = value;
  buffer2[offset + 1] = value >> 8;
  buffer2[offset + 2] = value >> 16;
  buffer2[offset + 3] = value >> 24;
}
function setUint32(buffer2, offset, value, littleEndian) {
  if (littleEndian) {
    buffer2[offset] = value;
    buffer2[offset + 1] = value >> 8;
    buffer2[offset + 2] = value >> 16;
    buffer2[offset + 3] = value >> 24;
  } else {
    buffer2[offset] = value >> 24;
    buffer2[offset + 1] = value >> 16;
    buffer2[offset + 2] = value >> 8;
    buffer2[offset + 3] = value;
  }
}

// node_modules/@yume-chan/no-data-view/esm/uint64.js
function getUint64BigEndian(buffer2, offset) {
  return BigInt(buffer2[offset]) << 56n | BigInt(buffer2[offset + 1]) << 48n | BigInt(buffer2[offset + 2]) << 40n | BigInt(buffer2[offset + 3]) << 32n | BigInt(buffer2[offset + 4]) << 24n | BigInt(buffer2[offset + 5]) << 16n | BigInt(buffer2[offset + 6]) << 8n | BigInt(buffer2[offset + 7]);
}
function getUint64(buffer2, offset, littleEndian) {
  return littleEndian ? BigInt(buffer2[offset]) | BigInt(buffer2[offset + 1]) << 8n | BigInt(buffer2[offset + 2]) << 16n | BigInt(buffer2[offset + 3]) << 24n | BigInt(buffer2[offset + 4]) << 32n | BigInt(buffer2[offset + 5]) << 40n | BigInt(buffer2[offset + 6]) << 48n | BigInt(buffer2[offset + 7]) << 56n : BigInt(buffer2[offset]) << 56n | BigInt(buffer2[offset + 1]) << 48n | BigInt(buffer2[offset + 2]) << 40n | BigInt(buffer2[offset + 3]) << 32n | BigInt(buffer2[offset + 4]) << 24n | BigInt(buffer2[offset + 5]) << 16n | BigInt(buffer2[offset + 6]) << 8n | BigInt(buffer2[offset + 7]);
}
function setUint64(buffer2, offset, value, littleEndian) {
  if (littleEndian) {
    buffer2[offset] = Number(value & 0xffn);
    buffer2[offset + 1] = Number(value >> 8n & 0xffn);
    buffer2[offset + 2] = Number(value >> 16n & 0xffn);
    buffer2[offset + 3] = Number(value >> 24n & 0xffn);
    buffer2[offset + 4] = Number(value >> 32n & 0xffn);
    buffer2[offset + 5] = Number(value >> 40n & 0xffn);
    buffer2[offset + 6] = Number(value >> 48n & 0xffn);
    buffer2[offset + 7] = Number(value >> 56n & 0xffn);
  } else {
    buffer2[offset] = Number(value >> 56n & 0xffn);
    buffer2[offset + 1] = Number(value >> 48n & 0xffn);
    buffer2[offset + 2] = Number(value >> 40n & 0xffn);
    buffer2[offset + 3] = Number(value >> 32n & 0xffn);
    buffer2[offset + 4] = Number(value >> 24n & 0xffn);
    buffer2[offset + 5] = Number(value >> 16n & 0xffn);
    buffer2[offset + 6] = Number(value >> 8n & 0xffn);
    buffer2[offset + 7] = Number(value & 0xffn);
  }
}

// node_modules/@yume-chan/struct/esm/number.js
// @__NO_SIDE_EFFECTS__
function number(size, serialize, deserialize) {
  const fn = (() => fn);
  Object.assign(fn, field(size, "byob", serialize, deserialize));
  return fn;
}
var u8 = /* @__PURE__ */ number(1, (value, { buffer: buffer2, index }) => {
  buffer2[index] = value;
}, function* (then, reader) {
  const data = yield* then(reader.readExactly(1));
  return data[0];
});
var u32 = /* @__PURE__ */ number(4, (value, { buffer: buffer2, index, littleEndian }) => {
  setUint32(buffer2, index, value, littleEndian);
}, function* (then, reader, { littleEndian }) {
  const data = yield* then(reader.readExactly(4));
  return getUint32(data, 0, littleEndian);
});
var s32 = /* @__PURE__ */ number(4, (value, { buffer: buffer2, index, littleEndian }) => {
  setInt32(buffer2, index, value, littleEndian);
}, function* (then, reader, { littleEndian }) {
  const data = yield* then(reader.readExactly(4));
  return getInt32(data, 0, littleEndian);
});
var u64 = /* @__PURE__ */ number(8, (value, { buffer: buffer2, index, littleEndian }) => {
  setUint64(buffer2, index, value, littleEndian);
}, function* (then, reader, { littleEndian }) {
  const data = yield* then(reader.readExactly(8));
  return getUint64(data, 0, littleEndian);
});

// node_modules/@yume-chan/struct/esm/utils.js
var { TextEncoder: TextEncoder2, TextDecoder: TextDecoder2 } = globalThis;
var SharedEncoder = /* @__PURE__ */ new TextEncoder2();
var SharedDecoder = /* @__PURE__ */ new TextDecoder2();
// @__NO_SIDE_EFFECTS__
function encodeUtf8(input) {
  return SharedEncoder.encode(input);
}
// @__NO_SIDE_EFFECTS__
function decodeUtf8(buffer2) {
  return SharedDecoder.decode(buffer2);
}

// node_modules/@yume-chan/struct/esm/string.js
var string = (/* @__NO_SIDE_EFFECTS__ */ (lengthOrField) => {
  const field2 = buffer(lengthOrField, {
    convert: decodeUtf8,
    back: encodeUtf8
  });
  field2.as = () => field2;
  return field2;
});

// node_modules/@yume-chan/stream-extra/esm/stream.js
var { AbortController: AbortController2 } = globalThis;
var ReadableStream2 = /* @__PURE__ */ (() => {
  const { ReadableStream: ReadableStream3 } = globalThis;
  if (!ReadableStream3.from) {
    ReadableStream3.from = function(iterable) {
      const iterator = Symbol.asyncIterator in iterable ? iterable[Symbol.asyncIterator]() : iterable[Symbol.iterator]();
      return new ReadableStream3({
        async pull(controller) {
          const result = await iterator.next();
          if (result.done) {
            controller.close();
            return;
          }
          controller.enqueue(result.value);
        },
        async cancel(reason) {
          await iterator.return?.(reason);
        }
      });
    };
  }
  if (!ReadableStream3.prototype[Symbol.asyncIterator] || !ReadableStream3.prototype.values) {
    ReadableStream3.prototype.values = async function* (options) {
      const reader = this.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            return;
          }
          yield value;
        }
      } finally {
        if (!options?.preventCancel) {
          await reader.cancel();
        }
        reader.releaseLock();
      }
    };
    ReadableStream3.prototype[Symbol.asyncIterator] = // eslint-disable-next-line @typescript-eslint/unbound-method
    ReadableStream3.prototype.values;
  }
  return ReadableStream3;
})();
var { WritableStream: WritableStream2, TransformStream: TransformStream2 } = globalThis;

// node_modules/@yume-chan/stream-extra/esm/task-queue.js
var TaskQueue = class {
  #ready;
  #disposed = false;
  enqueue(task, bail = false) {
    if (this.#disposed) {
      throw new Error("TaskQueue is disposed");
    }
    if (!this.#ready) {
      try {
        const result2 = task();
        if (isPromiseLike(result2)) {
          this.#ready = result2.then(() => {
          }, (e) => {
            if (bail) {
              throw e;
            }
          });
        }
        return result2;
      } catch (e) {
        if (bail) {
          const promise = Promise.reject(e);
          void promise.catch(() => {
          });
          this.#ready = promise;
        }
        throw e;
      }
    }
    const result = this.#ready.then(() => {
      if (this.#disposed) {
        throw new Error("TaskQueue is disposed");
      }
      return task();
    });
    this.#ready = result.then(() => {
    }, (e) => {
      if (bail || this.#disposed) {
        throw e;
      }
    });
    return result;
  }
  dispose() {
    this.#disposed = true;
  }
};

// node_modules/@yume-chan/stream-extra/esm/push-readable.js
var PushReadableStream = class extends ReadableStream2 {
  /**
   * Create a new `PushReadableStream` from a source.
   *
   * @param source If `source` returns a `Promise`, the stream will be closed
   * when the `Promise` is resolved, and be errored when the `Promise` is rejected.
   * @param strategy
   */
  constructor(source, strategy, logger) {
    let controller;
    const tasks = new TaskQueue();
    let zeroHighWaterMarkAllowEnqueue = false;
    let waterMarkLow;
    const abortController = new AbortController2();
    let stopped = false;
    const enqueue = (chunk) => {
      logger?.({
        source: "producer",
        operation: "enqueue",
        value: chunk,
        phase: "start"
      });
      if (abortController.signal.aborted) {
        logger?.({
          source: "producer",
          operation: "enqueue",
          value: chunk,
          phase: "ignored"
        });
        return false;
      }
      if (controller.desiredSize === null) {
        controller.enqueue(chunk);
        throw new Error("unreachable");
      }
      if (zeroHighWaterMarkAllowEnqueue) {
        zeroHighWaterMarkAllowEnqueue = false;
        controller.enqueue(chunk);
        logger?.({
          source: "producer",
          operation: "enqueue",
          value: chunk,
          phase: "complete"
        });
        return true;
      }
      if (controller.desiredSize <= 0) {
        logger?.({
          source: "producer",
          operation: "enqueue",
          value: chunk,
          phase: "waiting"
        });
        waterMarkLow = new PromiseResolver();
        return waterMarkLow.promise.then(() => {
          controller.enqueue(chunk);
          logger?.({
            source: "producer",
            operation: "enqueue",
            value: chunk,
            phase: "complete"
          });
          return true;
        }, () => {
          logger?.({
            source: "producer",
            operation: "enqueue",
            value: chunk,
            phase: "ignored"
          });
          return false;
        });
      }
      controller.enqueue(chunk);
      logger?.({
        source: "producer",
        operation: "enqueue",
        value: chunk,
        phase: "complete"
      });
      return true;
    };
    const close = (explicit) => {
      logger?.({
        source: "producer",
        operation: "close",
        explicit,
        phase: "start"
      });
      if (abortController.signal.aborted || stopped && !explicit) {
        logger?.({
          source: "producer",
          operation: "close",
          explicit,
          phase: "ignored"
        });
        return;
      }
      controller.close();
      stopped = true;
      waterMarkLow?.reject();
      logger?.({
        source: "producer",
        operation: "close",
        explicit,
        phase: "complete"
      });
    };
    const error = (error2, explicit) => {
      logger?.({
        source: "producer",
        operation: "error",
        explicit,
        phase: "start"
      });
      stopped = true;
      controller.error(error2);
      waterMarkLow?.reject();
      logger?.({
        source: "producer",
        operation: "error",
        explicit,
        phase: "complete"
      });
    };
    super({
      start: (controller_) => {
        controller = controller_;
        const result = source({
          abortSignal: abortController.signal,
          enqueue: async (chunk) => (
            // Run `enqueue`s in serial
            // Use `async/await` to always return a `Promise`
            await tasks.enqueue(() => enqueue(chunk))
          ),
          close() {
            close(true);
          },
          error(e) {
            error(e, true);
          }
        });
        if (!stopped && isPromiseLike(result)) {
          result.then(() => close(false), (e) => error(e, false));
        }
      },
      pull: () => {
        logger?.({
          source: "consumer",
          operation: "pull",
          phase: "start"
        });
        if (waterMarkLow) {
          waterMarkLow.resolve(void 0);
          waterMarkLow = void 0;
        } else if (strategy?.highWaterMark === 0) {
          zeroHighWaterMarkAllowEnqueue = true;
        }
        logger?.({
          source: "consumer",
          operation: "pull",
          phase: "complete"
        });
      },
      cancel: (reason) => {
        logger?.({
          source: "consumer",
          operation: "cancel",
          phase: "start"
        });
        stopped = true;
        abortController.abort(reason);
        waterMarkLow?.reject();
        logger?.({
          source: "consumer",
          operation: "cancel",
          phase: "complete"
        });
      }
    }, strategy);
  }
};

// node_modules/@yume-chan/stream-extra/esm/try-close.js
function tryClose(value) {
  try {
    const result = value.close();
    if (isPromiseLike(result)) {
      return result.then(() => true, () => false);
    }
    return true;
  } catch {
    return false;
  }
}
async function tryCancel(stream) {
  try {
    await stream.cancel();
    return true;
  } catch {
    return false;
  }
}

// node_modules/@yume-chan/stream-extra/esm/buffered.js
var BufferedReadableStream = class {
  #buffered;
  // PERF: `subarray` is slow
  // don't use it until absolutely necessary
  #bufferedOffset = 0;
  #bufferedLength = 0;
  #position = 0;
  get position() {
    return this.#position;
  }
  stream;
  reader;
  constructor(stream) {
    this.stream = stream;
    this.reader = stream.getReader();
  }
  #readBuffered(length) {
    if (!this.#buffered) {
      return void 0;
    }
    const value = this.#buffered.subarray(this.#bufferedOffset, this.#bufferedOffset + length);
    if (this.#bufferedLength > length) {
      this.#position += length;
      this.#bufferedOffset += length;
      this.#bufferedLength -= length;
      return value;
    }
    this.#position += this.#bufferedLength;
    this.#buffered = void 0;
    this.#bufferedOffset = 0;
    this.#bufferedLength = 0;
    return value;
  }
  async #readSource(length) {
    const { done, value } = await this.reader.read();
    if (done) {
      throw new ExactReadableEndedError();
    }
    if (value.length > length) {
      this.#buffered = value;
      this.#bufferedOffset = length;
      this.#bufferedLength = value.length - length;
      this.#position += length;
      return value.subarray(0, length);
    }
    this.#position += value.length;
    return value;
  }
  iterateExactly(length) {
    let state = this.#buffered ? 0 : 1;
    return {
      next: () => {
        switch (state) {
          case 0: {
            const value = this.#readBuffered(length);
            if (value.length === length) {
              state = 2;
            } else {
              length -= value.length;
              state = 1;
            }
            return { done: false, value };
          }
          case 1:
            state = 3;
            return {
              done: false,
              value: this.#readSource(length).then((value) => {
                if (value.length === length) {
                  state = 2;
                } else {
                  length -= value.length;
                  state = 1;
                }
                return value;
              })
            };
          case 2:
            return { done: true, value: void 0 };
          case 3:
            throw new Error("Can't call `next` before previous Promise resolves");
          default:
            throw new Error("unreachable");
        }
      }
    };
  }
  readExactly = bipedal(function* (then, length) {
    let result;
    let index = 0;
    const initial = this.#readBuffered(length);
    if (initial) {
      if (initial.length === length) {
        return initial;
      }
      result = new Uint8Array(length);
      result.set(initial, index);
      index += initial.length;
      length -= initial.length;
    } else {
      result = new Uint8Array(length);
    }
    while (length > 0) {
      const value = yield* then(this.#readSource(length));
      result.set(value, index);
      index += value.length;
      length -= value.length;
    }
    return result;
  });
  /**
   * Return a readable stream with unconsumed data (if any) and
   * all data from the wrapped stream.
   * @returns A `ReadableStream`
   */
  release() {
    if (this.#bufferedLength > 0) {
      return new PushReadableStream(async (controller) => {
        const buffered = this.#buffered.subarray(this.#bufferedOffset);
        await controller.enqueue(buffered);
        controller.abortSignal.addEventListener("abort", () => {
          void tryCancel(this.reader);
        });
        while (true) {
          const { done, value } = await this.reader.read();
          if (done) {
            return;
          }
          await controller.enqueue(value);
        }
      });
    } else {
      this.reader.releaseLock();
      return this.stream;
    }
  }
  async cancel(reason) {
    await this.reader.cancel(reason);
  }
};

// node_modules/@yume-chan/stream-extra/esm/buffered-transform.js
var BufferedTransformStream = class {
  #readable;
  get readable() {
    return this.#readable;
  }
  #writable;
  get writable() {
    return this.#writable;
  }
  constructor(transform) {
    let bufferedStreamController;
    let writableStreamController;
    const buffered = new BufferedReadableStream(new PushReadableStream((controller) => {
      bufferedStreamController = controller;
    }));
    this.#readable = new ReadableStream2({
      async pull(controller) {
        try {
          const value = await transform(buffered);
          controller.enqueue(value);
        } catch (e) {
          if (e instanceof StructEmptyError) {
            controller.close();
            return;
          }
          throw e;
        }
      },
      cancel: (reason) => {
        return writableStreamController.error(reason);
      }
    });
    this.#writable = new WritableStream2({
      start(controller) {
        writableStreamController = controller;
      },
      async write(chunk) {
        await bufferedStreamController.enqueue(chunk);
      },
      abort() {
        bufferedStreamController.close();
      },
      close() {
        bufferedStreamController.close();
      }
    });
  }
};

// node_modules/@yume-chan/stream-extra/esm/concat.js
var ConcatStringStream = class {
  // PERF: rope (concat strings) is faster than `[].join('')`
  #result = "";
  #resolver = new PromiseResolver();
  #writable = new WritableStream2({
    write: (chunk) => {
      this.#result += chunk;
    },
    close: () => {
      this.#resolver.resolve(this.#result);
      this.#readableController.enqueue(this.#result);
      this.#readableController.close();
    },
    abort: (reason) => {
      this.#resolver.reject(reason);
      this.#readableController.error(reason);
    }
  });
  get writable() {
    return this.#writable;
  }
  #readableController;
  #readable = new ReadableStream2({
    start: (controller) => {
      this.#readableController = controller;
    }
  });
  get readable() {
    return this.#readable;
  }
  constructor() {
    void Object.defineProperties(this.#readable, {
      then: {
        get: () => this.#resolver.promise.then.bind(this.#resolver.promise)
      },
      catch: {
        get: () => this.#resolver.promise.catch.bind(this.#resolver.promise)
      },
      finally: {
        get: () => this.#resolver.promise.finally.bind(this.#resolver.promise)
      }
    });
  }
};
var ConcatBufferStream = class {
  #segments = [];
  #resolver = new PromiseResolver();
  #writable = new WritableStream2({
    write: (chunk) => {
      this.#segments.push(chunk);
    },
    close: () => {
      let result;
      let offset = 0;
      switch (this.#segments.length) {
        case 0:
          result = EmptyUint8Array;
          break;
        case 1:
          result = this.#segments[0];
          break;
        default:
          result = new Uint8Array(this.#segments.reduce((prev, item) => prev + item.length, 0));
          for (const segment of this.#segments) {
            result.set(segment, offset);
            offset += segment.length;
          }
          break;
      }
      this.#resolver.resolve(result);
      this.#readableController.enqueue(result);
      this.#readableController.close();
    },
    abort: (reason) => {
      this.#resolver.reject(reason);
      this.#readableController.error(reason);
    }
  });
  get writable() {
    return this.#writable;
  }
  #readableController;
  #readable = new ReadableStream2({
    start: (controller) => {
      this.#readableController = controller;
    }
  });
  get readable() {
    return this.#readable;
  }
  constructor() {
    void Object.defineProperties(this.#readable, {
      then: {
        get: () => this.#resolver.promise.then.bind(this.#resolver.promise)
      },
      catch: {
        get: () => this.#resolver.promise.catch.bind(this.#resolver.promise)
      },
      finally: {
        get: () => this.#resolver.promise.finally.bind(this.#resolver.promise)
      }
    });
  }
};

// node_modules/@yume-chan/stream-extra/esm/consumable/readable.js
var ConsumableReadableStream = class _ConsumableReadableStream extends ReadableStream2 {
  static async enqueue(controller, chunk) {
    const output = new Consumable(chunk);
    controller.enqueue(output);
    await output.consumed;
  }
  constructor(source, strategy) {
    let wrappedController;
    let wrappedStrategy;
    if (strategy) {
      wrappedStrategy = {};
      if ("highWaterMark" in strategy) {
        wrappedStrategy.highWaterMark = strategy.highWaterMark;
      }
      if ("size" in strategy) {
        wrappedStrategy.size = (chunk) => {
          return strategy.size(chunk.value);
        };
      }
    }
    super({
      start(controller) {
        wrappedController = {
          enqueue(chunk) {
            return _ConsumableReadableStream.enqueue(controller, chunk);
          },
          close() {
            controller.close();
          },
          error(reason) {
            controller.error(reason);
          }
        };
        return source.start?.(wrappedController);
      },
      pull() {
        return source.pull?.(wrappedController);
      },
      cancel(reason) {
        return source.cancel?.(reason);
      }
    }, wrappedStrategy);
  }
};

// node_modules/@yume-chan/stream-extra/esm/consumable/wrap-byte-readable.js
var ConsumableWrapByteReadableStream = class extends ReadableStream2 {
  constructor(stream, chunkSize, min) {
    const reader = stream.getReader({ mode: "byob" });
    let array = new Uint8Array(chunkSize);
    super({
      async pull(controller) {
        const { done, value } = await reader.read(array, { min });
        if (done) {
          controller.close();
          return;
        }
        await ConsumableReadableStream.enqueue(controller, value);
        array = new Uint8Array(value.buffer);
      },
      cancel(reason) {
        return reader.cancel(reason);
      }
    });
  }
};

// node_modules/@yume-chan/stream-extra/esm/consumable/wrap-writable.js
var ConsumableWrapWritableStream = class extends WritableStream2 {
  constructor(stream) {
    const writer = stream.getWriter();
    super({
      write(chunk) {
        return chunk.tryConsume((chunk2) => writer.write(chunk2));
      },
      abort(reason) {
        return writer.abort(reason);
      },
      close() {
        return writer.close();
      }
    });
  }
};

// node_modules/@yume-chan/stream-extra/esm/consumable/writable.js
var ConsumableWritableStream = class extends WritableStream2 {
  static async write(writer, value) {
    const consumable = new Consumable(value);
    await writer.write(consumable);
    await consumable.consumed;
  }
  constructor(sink, strategy) {
    let wrappedStrategy;
    if (strategy) {
      wrappedStrategy = {};
      if ("highWaterMark" in strategy) {
        wrappedStrategy.highWaterMark = strategy.highWaterMark;
      }
      if ("size" in strategy) {
        wrappedStrategy.size = (chunk) => {
          return strategy.size(chunk instanceof Consumable ? chunk.value : chunk);
        };
      }
    }
    super({
      start(controller) {
        return sink.start?.(controller);
      },
      write(chunk, controller) {
        return chunk.tryConsume((chunk2) => sink.write?.(chunk2, controller));
      },
      abort(reason) {
        return sink.abort?.(reason);
      },
      close() {
        return sink.close?.();
      }
    }, wrappedStrategy);
  }
};

// node_modules/@yume-chan/stream-extra/esm/task.js
var { console } = globalThis;
var createTask = /* @__PURE__ */ (() => console?.createTask?.bind(console) ?? (() => ({
  run(callback) {
    return callback();
  }
})))();

// node_modules/@yume-chan/stream-extra/esm/consumable.js
var Consumable = class {
  static WritableStream = ConsumableWritableStream;
  static WrapWritableStream = ConsumableWrapWritableStream;
  static ReadableStream = ConsumableReadableStream;
  static WrapByteReadableStream = ConsumableWrapByteReadableStream;
  #task;
  #resolver;
  value;
  consumed;
  constructor(value) {
    this.#task = createTask("Consumable");
    this.value = value;
    this.#resolver = new PromiseResolver();
    this.consumed = this.#resolver.promise;
  }
  consume() {
    this.#resolver.resolve();
  }
  error(error) {
    this.#resolver.reject(error);
  }
  tryConsume(callback) {
    try {
      let result = this.#task.run(() => callback(this.value));
      if (isPromiseLike(result)) {
        result = result.then((value) => {
          this.#resolver.resolve();
          return value;
        }, (e) => {
          this.#resolver.reject(e);
          throw e;
        });
      } else {
        this.#resolver.resolve();
      }
      return result;
    } catch (e) {
      this.#resolver.reject(e);
      throw e;
    }
  }
};

// node_modules/@yume-chan/stream-extra/esm/maybe-consumable/index.js
var maybe_consumable_exports = {};
__export(maybe_consumable_exports, {
  WrapWritableStream: () => MaybeConsumableWrapWritableStream,
  WritableStream: () => MaybeConsumableWritableStream,
  getValue: () => getValue,
  tryConsume: () => tryConsume
});

// node_modules/@yume-chan/stream-extra/esm/maybe-consumable/utils.js
function getValue(value) {
  return value instanceof Consumable ? value.value : value;
}
function tryConsume(value, callback) {
  if (value instanceof Consumable) {
    return value.tryConsume(callback);
  } else {
    return callback(value);
  }
}

// node_modules/@yume-chan/stream-extra/esm/maybe-consumable/wrap-writable.js
var MaybeConsumableWrapWritableStream = class extends WritableStream2 {
  constructor(stream) {
    const writer = stream.getWriter();
    super({
      write(chunk) {
        return tryConsume(chunk, (chunk2) => writer.write(chunk2));
      },
      abort(reason) {
        return writer.abort(reason);
      },
      close() {
        return writer.close();
      }
    });
  }
};

// node_modules/@yume-chan/stream-extra/esm/maybe-consumable/writable.js
var MaybeConsumableWritableStream = class extends WritableStream2 {
  constructor(sink, strategy) {
    let wrappedStrategy;
    if (strategy) {
      wrappedStrategy = {};
      if ("highWaterMark" in strategy) {
        wrappedStrategy.highWaterMark = strategy.highWaterMark;
      }
      if ("size" in strategy) {
        wrappedStrategy.size = (chunk) => {
          return strategy.size(chunk instanceof Consumable ? chunk.value : chunk);
        };
      }
    }
    super({
      start(controller) {
        return sink.start?.(controller);
      },
      write(chunk, controller) {
        return tryConsume(chunk, (chunk2) => sink.write?.(chunk2, controller));
      },
      abort(reason) {
        return sink.abort?.(reason);
      },
      close() {
        return sink.close?.();
      }
    }, wrappedStrategy);
  }
};

// node_modules/@yume-chan/stream-extra/esm/distribution.js
var BufferCombiner = class {
  #capacity;
  #buffer;
  #offset;
  #available;
  constructor(size) {
    this.#capacity = size;
    this.#buffer = new Uint8Array(size);
    this.#offset = 0;
    this.#available = size;
  }
  /**
   * Pushes data to the combiner.
   * @param data The input data to be split or combined.
   * @returns
   * A generator that yields buffers of specified size.
   * It may yield the same buffer multiple times, consume the data before calling `next`.
   */
  *push(data) {
    let offset = 0;
    let available = data.length;
    if (this.#offset !== 0) {
      if (available >= this.#available) {
        this.#buffer.set(data.subarray(0, this.#available), this.#offset);
        offset += this.#available;
        available -= this.#available;
        yield this.#buffer;
        this.#offset = 0;
        this.#available = this.#capacity;
        if (available === 0) {
          return;
        }
      } else {
        this.#buffer.set(data, this.#offset);
        this.#offset += available;
        this.#available -= available;
        return;
      }
    }
    while (available >= this.#capacity) {
      const end = offset + this.#capacity;
      yield data.subarray(offset, end);
      offset = end;
      available -= this.#capacity;
    }
    if (available > 0) {
      this.#buffer.set(data.subarray(offset), this.#offset);
      this.#offset += available;
      this.#available -= available;
    }
  }
  flush() {
    if (this.#offset === 0) {
      return void 0;
    }
    const output = this.#buffer.subarray(0, this.#offset);
    this.#offset = 0;
    this.#available = this.#capacity;
    return output;
  }
};
var DistributionStream = class extends TransformStream2 {
  constructor(size, combine = false) {
    const combiner = combine ? new BufferCombiner(size) : void 0;
    super({
      async transform(chunk, controller) {
        await maybe_consumable_exports.tryConsume(chunk, async (chunk2) => {
          if (combiner) {
            for (const buffer2 of combiner.push(chunk2)) {
              await Consumable.ReadableStream.enqueue(controller, buffer2);
            }
          } else {
            let offset = 0;
            let available = chunk2.length;
            while (available > 0) {
              const end = offset + size;
              await Consumable.ReadableStream.enqueue(controller, chunk2.subarray(offset, end));
              offset = end;
              available -= size;
            }
          }
        });
      },
      flush(controller) {
        if (combiner) {
          const data = combiner.flush();
          if (data) {
            controller.enqueue(data);
          }
        }
      }
    });
  }
};

// node_modules/@yume-chan/stream-extra/esm/wrap-readable.js
function getWrappedReadableStream(wrapper, controller) {
  if ("start" in wrapper) {
    return wrapper.start(controller);
  } else if (typeof wrapper === "function") {
    return wrapper(controller);
  } else {
    return wrapper;
  }
}
var WrapReadableStream = class extends ReadableStream2 {
  readable;
  #reader;
  constructor(wrapper, strategy) {
    super({
      start: async (controller) => {
        const readable = await getWrappedReadableStream(wrapper, controller);
        this.readable = readable;
        this.#reader = this.readable.getReader();
      },
      pull: async (controller) => {
        const { done, value } = await this.#reader.read().catch((e) => {
          if ("error" in wrapper) {
            wrapper.error(e);
          }
          throw e;
        });
        if (done) {
          controller.close();
          if ("close" in wrapper) {
            await wrapper.close?.();
          }
        } else {
          controller.enqueue(value);
        }
      },
      cancel: async (reason) => {
        await this.#reader.cancel(reason);
        if ("cancel" in wrapper) {
          await wrapper.cancel?.(reason);
        }
      }
    }, strategy);
  }
};

// node_modules/@yume-chan/stream-extra/esm/duplex.js
var NOOP = () => {
};
var DuplexStreamFactory = class {
  #readableControllers = [];
  #writers = [];
  #writableClosed = false;
  get writableClosed() {
    return this.#writableClosed;
  }
  #closed = new PromiseResolver();
  get closed() {
    return this.#closed.promise;
  }
  #options;
  constructor(options) {
    this.#options = options ?? {};
  }
  wrapReadable(readable, strategy) {
    return new WrapReadableStream({
      start: (controller) => {
        this.#readableControllers.push(controller);
        return readable;
      },
      cancel: async () => {
        await this.close();
      },
      close: async () => {
        await this.dispose();
      }
    }, strategy);
  }
  createWritable(stream) {
    const writer = stream.getWriter();
    this.#writers.push(writer);
    return new WritableStream2({
      write: async (chunk) => {
        await writer.write(chunk);
      },
      abort: async (reason) => {
        await writer.abort(reason);
        await this.close();
      },
      close: async () => {
        await writer.close().catch(NOOP);
        await this.close();
      }
    });
  }
  async close() {
    if (this.#writableClosed) {
      return;
    }
    this.#writableClosed = true;
    if (await this.#options.close?.() !== false) {
      await this.dispose();
    }
    for (const writer of this.#writers) {
      writer.close().catch(NOOP);
    }
  }
  async dispose() {
    this.#writableClosed = true;
    this.#closed.resolve();
    for (const controller of this.#readableControllers) {
      tryClose(controller);
    }
    await this.#options.dispose?.();
  }
};

// node_modules/@yume-chan/stream-extra/esm/encoding.js
var Global = globalThis;
var TextDecoderStream = Global.TextDecoderStream;
var TextEncoderStream = Global.TextEncoderStream;

// node_modules/@yume-chan/stream-extra/esm/pipe-from.js
function pipeFrom(writable, pair) {
  const writer = pair.writable.getWriter();
  const pipe = pair.readable.pipeTo(writable);
  return new WritableStream2({
    async write(chunk) {
      await writer.write(chunk);
    },
    async close() {
      await writer.close();
      await pipe;
    }
  });
}

// node_modules/@yume-chan/stream-extra/esm/struct-deserialize.js
var StructDeserializeStream = class extends BufferedTransformStream {
  constructor(struct2) {
    super((stream) => {
      return struct2.deserialize(stream);
    });
  }
};

// node_modules/@yume-chan/event/esm/disposable.js
var AutoDisposable = class {
  #disposables = [];
  constructor() {
    this.dispose = this.dispose.bind(this);
  }
  addDisposable(disposable) {
    this.#disposables.push(disposable);
    return disposable;
  }
  dispose() {
    for (const disposable of this.#disposables) {
      disposable.dispose();
    }
    this.#disposables = [];
  }
};

// node_modules/@yume-chan/event/esm/event-emitter.js
var EventEmitter = class {
  listeners = [];
  constructor() {
    this.event = this.event.bind(this);
  }
  addEventListener(info) {
    this.listeners.push(info);
    const remove = () => {
      const index = this.listeners.indexOf(info);
      if (index !== -1) {
        this.listeners.splice(index, 1);
      }
    };
    remove.dispose = remove;
    return remove;
  }
  event = (listener, thisArg, ...args) => {
    const info = {
      listener,
      thisArg,
      args
    };
    return this.addEventListener(info);
  };
  fire(e) {
    for (const info of this.listeners.slice()) {
      info.listener.call(info.thisArg, e, ...info.args);
    }
  }
  dispose() {
    this.listeners.length = 0;
  }
};

// node_modules/@yume-chan/event/esm/sticky-event-emitter.js
var Undefined = /* @__PURE__ */ Symbol("undefined");
var StickyEventEmitter = class extends EventEmitter {
  #value = Undefined;
  addEventListener(info) {
    if (this.#value !== Undefined) {
      info.listener.call(info.thisArg, this.#value, ...info.args);
    }
    return super.addEventListener(info);
  }
  fire(e) {
    this.#value = e;
    super.fire(e);
  }
};

// node_modules/@yume-chan/adb/esm/commands/base.js
var AdbServiceBase = class extends AutoDisposable {
  #adb;
  get adb() {
    return this.#adb;
  }
  constructor(adb) {
    super();
    this.#adb = adb;
  }
};

// node_modules/@yume-chan/adb/esm/commands/framebuffer.js
var Version = struct({ version: u32 }, { littleEndian: true });
var AdbFrameBufferV1 = struct({
  bpp: u32,
  size: u32,
  width: u32,
  height: u32,
  red_offset: u32,
  red_length: u32,
  blue_offset: u32,
  blue_length: u32,
  green_offset: u32,
  green_length: u32,
  alpha_offset: u32,
  alpha_length: u32,
  data: buffer("size")
}, { littleEndian: true });
var AdbFrameBufferV2 = struct({
  bpp: u32,
  colorSpace: u32,
  size: u32,
  width: u32,
  height: u32,
  red_offset: u32,
  red_length: u32,
  blue_offset: u32,
  blue_length: u32,
  green_offset: u32,
  green_length: u32,
  alpha_offset: u32,
  alpha_length: u32,
  data: buffer("size")
}, { littleEndian: true });
var AdbFrameBufferError = class extends Error {
  constructor(message, options) {
    super(message, options);
  }
};
var AdbFrameBufferUnsupportedVersionError = class extends AdbFrameBufferError {
  constructor(version) {
    super(`Unsupported FrameBuffer version ${version}`);
  }
};
var AdbFrameBufferForbiddenError = class extends AdbFrameBufferError {
  constructor() {
    super("FrameBuffer is disabled by current app");
  }
};
async function framebuffer(adb) {
  const socket = await adb.createSocket("framebuffer:");
  const stream = new BufferedReadableStream(socket.readable);
  let version;
  try {
    ({ version } = await Version.deserialize(stream));
  } catch (e) {
    if (e instanceof StructEmptyError) {
      throw new AdbFrameBufferForbiddenError();
    }
    throw e;
  }
  switch (version) {
    case 1:
      return await AdbFrameBufferV1.deserialize(stream);
    case 2:
      return await AdbFrameBufferV2.deserialize(stream);
    default:
      throw new AdbFrameBufferUnsupportedVersionError(version);
  }
}

// node_modules/@yume-chan/adb/esm/commands/power.js
var AdbPower = class extends AdbServiceBase {
  reboot(mode = "") {
    return this.adb.createSocketAndWait(`reboot:${mode}`);
  }
  bootloader() {
    return this.reboot("bootloader");
  }
  fastboot() {
    return this.reboot("fastboot");
  }
  recovery() {
    return this.reboot("recovery");
  }
  sideload() {
    return this.reboot("sideload");
  }
  /**
   * Reboot to Qualcomm Emergency Download (EDL) Mode.
   *
   * Only works on some Qualcomm devices.
   */
  qualcommEdlMode() {
    return this.reboot("edl");
  }
  powerOff() {
    return this.adb.subprocess.noneProtocol.spawnWaitText(["reboot", "-p"]);
  }
  powerButton(longPress = false) {
    const args = ["input", "keyevent"];
    if (longPress) {
      args.push("--longpress");
    }
    args.push("POWER");
    return this.adb.subprocess.noneProtocol.spawnWaitText(args);
  }
  /**
   * Reboot to Samsung Odin download mode.
   *
   * Only works on Samsung devices.
   */
  samsungOdin() {
    return this.reboot("download");
  }
};

// node_modules/@yume-chan/adb/esm/utils/array-buffer.js
function toLocalUint8Array(value) {
  if (value.buffer instanceof ArrayBuffer) {
    return value;
  }
  const copy = new Uint8Array(value.length);
  copy.set(value);
  return copy;
}

// node_modules/@yume-chan/adb/esm/utils/auto-reset-event.js
var AutoResetEvent = class {
  #set;
  #queue = [];
  constructor(initialSet = false) {
    this.#set = initialSet;
  }
  wait() {
    if (!this.#set) {
      this.#set = true;
      if (this.#queue.length === 0) {
        return Promise.resolve();
      }
    }
    const resolver = new PromiseResolver();
    this.#queue.push(resolver);
    return resolver.promise;
  }
  notifyOne() {
    if (this.#queue.length !== 0) {
      this.#queue.pop().resolve();
    } else {
      this.#set = false;
    }
  }
  dispose() {
    for (const item of this.#queue) {
      item.reject(new Error("The AutoResetEvent has been disposed"));
    }
    this.#queue.length = 0;
  }
};

// node_modules/@yume-chan/adb/esm/utils/base64.js
var [charToIndex, indexToChar, paddingChar] = /* @__PURE__ */ (() => {
  const charToIndex2 = [];
  const indexToChar2 = [];
  const paddingChar2 = "=".charCodeAt(0);
  function addRange(start, end) {
    const charCodeStart = start.charCodeAt(0);
    const charCodeEnd = end.charCodeAt(0);
    for (let charCode = charCodeStart; charCode <= charCodeEnd; charCode += 1) {
      charToIndex2[charCode] = indexToChar2.length;
      indexToChar2.push(charCode);
    }
  }
  addRange("A", "Z");
  addRange("a", "z");
  addRange("0", "9");
  addRange("+", "+");
  addRange("/", "/");
  return [charToIndex2, indexToChar2, paddingChar2];
})();
function calculateBase64EncodedLength(inputLength) {
  const remainder = inputLength % 3;
  const paddingLength = remainder !== 0 ? 3 - remainder : 0;
  return [(inputLength + paddingLength) / 3 * 4, paddingLength];
}
function encodeBase64(input, output) {
  const [outputLength, paddingLength] = calculateBase64EncodedLength(input.length);
  if (!output) {
    output = new Uint8Array(outputLength);
    encodeForward(input, output, paddingLength);
    return output;
  } else {
    if (output.length < outputLength) {
      throw new TypeError("output buffer is too small");
    }
    output = output.subarray(0, outputLength);
    if (input.buffer !== output.buffer) {
      encodeForward(input, output, paddingLength);
    } else if (output.byteOffset + output.length - (paddingLength + 1) <= input.byteOffset + input.length) {
      encodeForward(input, output, paddingLength);
    } else if (output.byteOffset >= input.byteOffset - 1) {
      encodeBackward(input, output, paddingLength);
    } else {
      throw new TypeError("input and output cannot overlap");
    }
    return outputLength;
  }
}
function encodeForward(input, output, paddingLength) {
  let inputIndex = 0;
  let outputIndex = 0;
  while (inputIndex < input.length - 2) {
    const x = input[inputIndex];
    inputIndex += 1;
    const y = input[inputIndex];
    inputIndex += 1;
    const z2 = input[inputIndex];
    inputIndex += 1;
    output[outputIndex] = indexToChar[x >> 2];
    outputIndex += 1;
    output[outputIndex] = indexToChar[(x & 3) << 4 | y >> 4];
    outputIndex += 1;
    output[outputIndex] = indexToChar[(y & 15) << 2 | z2 >> 6];
    outputIndex += 1;
    output[outputIndex] = indexToChar[z2 & 63];
    outputIndex += 1;
  }
  if (paddingLength === 2) {
    const x = input[inputIndex];
    output[outputIndex] = indexToChar[x >> 2];
    outputIndex += 1;
    output[outputIndex] = indexToChar[(x & 3) << 4];
    outputIndex += 1;
    output[outputIndex] = paddingChar;
    outputIndex += 1;
    output[outputIndex] = paddingChar;
  } else if (paddingLength === 1) {
    const x = input[inputIndex];
    inputIndex += 1;
    const y = input[inputIndex];
    output[outputIndex] = indexToChar[x >> 2];
    outputIndex += 1;
    output[outputIndex] = indexToChar[(x & 3) << 4 | y >> 4];
    outputIndex += 1;
    output[outputIndex] = indexToChar[(y & 15) << 2];
    outputIndex += 1;
    output[outputIndex] = paddingChar;
  }
}
function encodeBackward(input, output, paddingLength) {
  let inputIndex = input.length - 1;
  let outputIndex = output.length - 1;
  if (paddingLength === 2) {
    const x = input[inputIndex];
    inputIndex -= 1;
    output[outputIndex] = paddingChar;
    outputIndex -= 1;
    output[outputIndex] = paddingChar;
    outputIndex -= 1;
    output[outputIndex] = indexToChar[(x & 3) << 4];
    outputIndex -= 1;
    output[outputIndex] = indexToChar[x >> 2];
    outputIndex -= 1;
  } else if (paddingLength === 1) {
    const y = input[inputIndex];
    inputIndex -= 1;
    const x = input[inputIndex];
    inputIndex -= 1;
    output[outputIndex] = paddingChar;
    outputIndex -= 1;
    output[outputIndex] = indexToChar[(y & 15) << 2];
    outputIndex -= 1;
    output[outputIndex] = indexToChar[(x & 3) << 4 | y >> 4];
    outputIndex -= 1;
    output[outputIndex] = indexToChar[x >> 2];
    outputIndex -= 1;
  }
  while (inputIndex >= 0) {
    const z2 = input[inputIndex];
    inputIndex -= 1;
    const y = input[inputIndex];
    inputIndex -= 1;
    const x = input[inputIndex];
    inputIndex -= 1;
    output[outputIndex] = indexToChar[z2 & 63];
    outputIndex -= 1;
    output[outputIndex] = indexToChar[(y & 15) << 2 | z2 >> 6];
    outputIndex -= 1;
    output[outputIndex] = indexToChar[(x & 3) << 4 | y >> 4];
    outputIndex -= 1;
    output[outputIndex] = indexToChar[x >> 2];
    outputIndex -= 1;
  }
}

// node_modules/@yume-chan/adb/esm/utils/hex.js
function hexCharToNumber(char) {
  if (char < 48) {
    throw new TypeError(`Invalid hex char ${char}`);
  }
  if (char < 58) {
    return char - 48;
  }
  if (char < 65) {
    throw new TypeError(`Invalid hex char ${char}`);
  }
  if (char < 71) {
    return char - 55;
  }
  if (char < 97) {
    throw new TypeError(`Invalid hex char ${char}`);
  }
  if (char < 103) {
    return char - 87;
  }
  throw new TypeError(`Invalid hex char ${char}`);
}
function hexToNumber(data) {
  let result = 0;
  for (let i = 0; i < data.length; i += 1) {
    result = result << 4 | hexCharToNumber(data[i]);
  }
  return result;
}

// node_modules/@yume-chan/adb/esm/utils/no-op.js
var NOOP2 = /* @__NO_SIDE_EFFECTS__ */ () => {
};
function unreachable(...args) {
  throw new Error("Unreachable. Arguments:\n" + args.join("\n"));
}

// node_modules/@yume-chan/adb/esm/utils/sequence-equal.js
function sequenceEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

// node_modules/@yume-chan/adb/esm/commands/reverse.js
var AdbReverseStringResponse = struct({
  length: string(4),
  content: string({
    field: "length",
    convert(value) {
      return Number.parseInt(value, 16);
    },
    back(value) {
      return value.toString(16).padStart(4, "0");
    }
  })
}, { littleEndian: true });
var AdbReverseError = class extends Error {
  constructor(message) {
    super(message);
  }
};
var AdbReverseNotSupportedError = class extends AdbReverseError {
  constructor() {
    super("ADB reverse tunnel is not supported on this device when connected wirelessly.");
  }
};
var AdbReverseErrorResponse = extend(AdbReverseStringResponse, {}, {
  postDeserialize(value) {
    if (value.content === "more than one device/emulator") {
      throw new AdbReverseNotSupportedError();
    } else {
      throw new AdbReverseError(value.content);
    }
  }
});
function decimalToNumber(buffer2) {
  let value = 0;
  for (const byte of buffer2) {
    if (byte < 48 || byte > 57) {
      return value;
    }
    value = value * 10 + byte - 48;
  }
  return value;
}
var OKAY = encodeUtf8("OKAY");
var AdbReverseService = class extends AdbServiceBase {
  #deviceAddressToLocalAddress = /* @__PURE__ */ new Map();
  async createBufferedStream(service) {
    const socket = await this.adb.createSocket(service);
    return new BufferedReadableStream(socket.readable);
  }
  async sendRequest(service) {
    const stream = await this.createBufferedStream(service);
    const response = await stream.readExactly(4);
    if (!sequenceEqual(response, OKAY)) {
      await AdbReverseErrorResponse.deserialize(stream);
    }
    return stream;
  }
  /**
   * Get a list of all reverse port forwarding on the device.
   */
  async list() {
    const stream = await this.createBufferedStream("reverse:list-forward");
    const response = await AdbReverseStringResponse.deserialize(stream);
    return response.content.split("\n").filter((line) => !!line).map((line) => {
      const [deviceSerial, localName, remoteName] = line.split(" ");
      return { deviceSerial, localName, remoteName };
    });
  }
  /**
   * Add a reverse port forwarding for a program that already listens on a port.
   */
  async addExternal(deviceAddress, localAddress) {
    const stream = await this.sendRequest(`reverse:forward:${deviceAddress};${localAddress}`);
    if (deviceAddress.startsWith("tcp:")) {
      const position = stream.position;
      try {
        const length = hexToNumber(await stream.readExactly(4));
        const port = decimalToNumber(await stream.readExactly(length));
        deviceAddress = `tcp:${port}`;
      } catch (e) {
        if (e instanceof ExactReadableEndedError && stream.position === position) {
        } else {
          throw e;
        }
      }
    }
    return deviceAddress;
  }
  /**
   * Add a reverse port forwarding.
   */
  async add(deviceAddress, handler, localAddress) {
    localAddress = await this.adb.transport.addReverseTunnel(handler, localAddress);
    try {
      deviceAddress = await this.addExternal(deviceAddress, localAddress);
      this.#deviceAddressToLocalAddress.set(deviceAddress, localAddress);
      return deviceAddress;
    } catch (e) {
      await this.adb.transport.removeReverseTunnel(localAddress);
      throw e;
    }
  }
  /**
   * Remove a reverse port forwarding.
   */
  async remove(deviceAddress) {
    const localAddress = this.#deviceAddressToLocalAddress.get(deviceAddress);
    if (localAddress) {
      await this.adb.transport.removeReverseTunnel(localAddress);
    }
    await this.sendRequest(`reverse:killforward:${deviceAddress}`);
  }
  /**
   * Remove all reverse port forwarding, including the ones added by other programs.
   */
  async removeAll() {
    await this.adb.transport.clearReverseTunnels();
    this.#deviceAddressToLocalAddress.clear();
    await this.sendRequest(`reverse:killforward-all`);
  }
};

// node_modules/@yume-chan/adb/esm/commands/subprocess/none/process.js
var AdbNoneProtocolProcessImpl = class {
  #socket;
  get stdin() {
    return this.#socket.writable;
  }
  get output() {
    return this.#socket.readable;
  }
  #exited;
  get exited() {
    return this.#exited;
  }
  constructor(socket, signal) {
    this.#socket = socket;
    if (signal) {
      const exited = new PromiseResolver();
      this.#socket.closed.then(() => exited.resolve(void 0), (e) => exited.reject(e));
      signal.addEventListener("abort", () => {
        exited.reject(signal.reason);
        this.#socket.close();
      });
      this.#exited = exited.promise;
    } else {
      this.#exited = this.#socket.closed;
    }
  }
  kill() {
    return this.#socket.close();
  }
};

// node_modules/@yume-chan/adb/esm/commands/subprocess/none/pty.js
var AdbNoneProtocolPtyProcess = class {
  #socket;
  #writer;
  #input;
  get input() {
    return this.#input;
  }
  get output() {
    return this.#socket.readable;
  }
  get exited() {
    return this.#socket.closed;
  }
  constructor(socket) {
    this.#socket = socket;
    this.#writer = this.#socket.writable.getWriter();
    this.#input = new maybe_consumable_exports.WritableStream({
      write: (chunk) => this.#writer.write(chunk)
    });
  }
  sigint() {
    return this.#writer.write(new Uint8Array([3]));
  }
  kill() {
    return this.#socket.close();
  }
};

// node_modules/@yume-chan/adb/esm/commands/subprocess/utils.js
function escapeArg(s) {
  let result = "";
  result += `'`;
  let base = 0;
  while (true) {
    const found = s.indexOf(`'`, base);
    if (found === -1) {
      result += s.substring(base);
      break;
    }
    result += s.substring(base, found);
    result += String.raw`'\''`;
    base = found + 1;
  }
  result += `'`;
  return result;
}
function splitCommand(command) {
  const result = [];
  let quote;
  let isEscaped = false;
  let start = 0;
  for (let i = 0, len = command.length; i < len; i += 1) {
    if (isEscaped) {
      isEscaped = false;
      continue;
    }
    const char = command.charAt(i);
    switch (char) {
      case " ":
        if (!quote && i !== start) {
          result.push(command.substring(start, i));
          start = i + 1;
        }
        break;
      case "'":
      case '"':
        if (!quote) {
          quote = char;
        } else if (char === quote) {
          quote = void 0;
        }
        break;
      case "\\":
        isEscaped = true;
        break;
    }
  }
  if (start < command.length) {
    result.push(command.substring(start));
  }
  return result;
}

// node_modules/@yume-chan/adb/esm/commands/subprocess/none/spawner.js
var AdbNoneProtocolSpawner = class {
  #spawn;
  constructor(spawn) {
    this.#spawn = spawn;
  }
  spawn(command, signal) {
    signal?.throwIfAborted();
    if (typeof command === "string") {
      command = splitCommand(command);
    }
    return this.#spawn(command, signal);
  }
  async spawnWait(command) {
    const process = await this.spawn(command);
    return await process.output.pipeThrough(new ConcatBufferStream());
  }
  async spawnWaitText(command) {
    const process = await this.spawn(command);
    return await process.output.pipeThrough(new TextDecoderStream()).pipeThrough(new ConcatStringStream());
  }
};

// node_modules/@yume-chan/adb/esm/commands/subprocess/none/service.js
var AdbNoneProtocolSubprocessService = class extends AdbNoneProtocolSpawner {
  #adb;
  get adb() {
    return this.#adb;
  }
  constructor(adb) {
    super(async (command, signal) => {
      const socket = await this.#adb.createSocket(`exec:${command.join(" ")}`);
      if (signal?.aborted) {
        await socket.close();
        throw signal.reason;
      }
      return new AdbNoneProtocolProcessImpl(socket, signal);
    });
    this.#adb = adb;
  }
  async pty(command) {
    if (command === void 0) {
      command = "";
    } else if (Array.isArray(command)) {
      command = command.join(" ");
    }
    return new AdbNoneProtocolPtyProcess(
      // https://github.com/microsoft/typescript/issues/17002
      await this.#adb.createSocket(`shell:${command}`)
    );
  }
};

// node_modules/@yume-chan/adb/esm/features.js
var AdbFeature = {
  ShellV2: "shell_v2",
  Cmd: "cmd",
  StatV2: "stat_v2",
  ListV2: "ls_v2",
  FixedPushMkdir: "fixed_push_mkdir",
  Abb: "abb",
  AbbExec: "abb_exec",
  SendReceiveV2: "sendrecv_v2",
  DelayedAck: "delayed_ack"
};

// node_modules/@yume-chan/adb/esm/commands/subprocess/shell/shared.js
var AdbShellProtocolId = {
  Stdin: 0,
  Stdout: 1,
  Stderr: 2,
  Exit: 3,
  CloseStdin: 4,
  WindowSizeChange: 5
};
var AdbShellProtocolPacket = struct({
  id: u8(),
  data: buffer(u32)
}, { littleEndian: true });

// node_modules/@yume-chan/adb/esm/commands/subprocess/shell/process.js
var AdbShellProtocolProcessImpl = class {
  #socket;
  #writer;
  #stdin;
  get stdin() {
    return this.#stdin;
  }
  #stdout;
  get stdout() {
    return this.#stdout;
  }
  #stderr;
  get stderr() {
    return this.#stderr;
  }
  #exited;
  get exited() {
    return this.#exited;
  }
  constructor(socket, signal) {
    this.#socket = socket;
    let stdoutController;
    let stderrController;
    this.#stdout = new PushReadableStream((controller) => {
      stdoutController = controller;
    });
    this.#stderr = new PushReadableStream((controller) => {
      stderrController = controller;
    });
    const exited = new PromiseResolver();
    this.#exited = exited.promise;
    socket.readable.pipeThrough(new StructDeserializeStream(AdbShellProtocolPacket)).pipeTo(new WritableStream2({
      write: async (chunk) => {
        switch (chunk.id) {
          case AdbShellProtocolId.Exit:
            exited.resolve(chunk.data[0]);
            break;
          case AdbShellProtocolId.Stdout:
            await stdoutController.enqueue(chunk.data);
            break;
          case AdbShellProtocolId.Stderr:
            await stderrController.enqueue(chunk.data);
            break;
          default:
            break;
        }
      }
    })).then(() => {
      stdoutController.close();
      stderrController.close();
      exited.reject(new Error("Socket ended without exit message"));
    }, (e) => {
      stdoutController.error(e);
      stderrController.error(e);
      exited.reject(e);
    });
    if (signal) {
      signal.addEventListener("abort", () => {
        exited.reject(signal.reason);
        this.#socket.close();
      });
    }
    this.#writer = this.#socket.writable.getWriter();
    this.#stdin = new maybe_consumable_exports.WritableStream({
      write: async (chunk) => {
        await this.#writer.write(AdbShellProtocolPacket.serialize({
          id: AdbShellProtocolId.Stdin,
          data: chunk
        }));
      },
      close: () => (
        // Only shell protocol + raw mode supports closing stdin
        this.#writer.write(AdbShellProtocolPacket.serialize({
          id: AdbShellProtocolId.CloseStdin,
          data: EmptyUint8Array
        }))
      )
    });
  }
  kill() {
    return this.#socket.close();
  }
};

// node_modules/@yume-chan/adb/esm/commands/subprocess/shell/pty.js
var AdbShellProtocolPtyProcess = class {
  #socket;
  #writer;
  #input;
  get input() {
    return this.#input;
  }
  #stdout;
  get output() {
    return this.#stdout;
  }
  #exited = new PromiseResolver();
  get exited() {
    return this.#exited.promise;
  }
  constructor(socket) {
    this.#socket = socket;
    let stdoutController;
    this.#stdout = new PushReadableStream((controller) => {
      stdoutController = controller;
    });
    socket.readable.pipeThrough(new StructDeserializeStream(AdbShellProtocolPacket)).pipeTo(new WritableStream2({
      write: async (chunk) => {
        switch (chunk.id) {
          case AdbShellProtocolId.Exit:
            this.#exited.resolve(chunk.data[0]);
            break;
          case AdbShellProtocolId.Stdout:
            await stdoutController.enqueue(chunk.data);
            break;
        }
      }
    })).then(() => {
      stdoutController.close();
      this.#exited.reject(new Error("Socket ended without exit message"));
    }, (e) => {
      stdoutController.error(e);
      this.#exited.reject(e);
    });
    this.#writer = this.#socket.writable.getWriter();
    this.#input = new maybe_consumable_exports.WritableStream({
      write: (chunk) => this.#writeStdin(chunk)
    });
  }
  #writeStdin(chunk) {
    return this.#writer.write(AdbShellProtocolPacket.serialize({
      id: AdbShellProtocolId.Stdin,
      data: chunk
    }));
  }
  async resize(rows, cols) {
    await this.#writer.write(AdbShellProtocolPacket.serialize({
      id: AdbShellProtocolId.WindowSizeChange,
      // The "correct" format is `${rows}x${cols},${x_pixels}x${y_pixels}`
      // However, according to https://linux.die.net/man/4/tty_ioctl
      // `x_pixels` and `y_pixels` are unused, so always sending `0` should be fine.
      data: encodeUtf8(`${rows}x${cols},0x0\0`)
    }));
  }
  sigint() {
    return this.#writeStdin(new Uint8Array([3]));
  }
  kill() {
    return this.#socket.close();
  }
};

// node_modules/@yume-chan/adb/esm/commands/subprocess/shell/spawner.js
var AdbShellProtocolSpawner = class {
  #spawn;
  constructor(spawn) {
    this.#spawn = spawn;
  }
  spawn(command, signal) {
    signal?.throwIfAborted();
    if (typeof command === "string") {
      command = splitCommand(command);
    }
    return this.#spawn(command, signal);
  }
  async spawnWait(command) {
    const process = await this.spawn(command);
    const [stdout, stderr, exitCode] = await Promise.all([
      process.stdout.pipeThrough(new ConcatBufferStream()),
      process.stderr.pipeThrough(new ConcatBufferStream()),
      process.exited
    ]);
    return { stdout, stderr, exitCode };
  }
  async spawnWaitText(command) {
    const process = await this.spawn(command);
    const [stdout, stderr, exitCode] = await Promise.all([
      process.stdout.pipeThrough(new TextDecoderStream()).pipeThrough(new ConcatStringStream()),
      process.stderr.pipeThrough(new TextDecoderStream()).pipeThrough(new ConcatStringStream()),
      process.exited
    ]);
    return { stdout, stderr, exitCode };
  }
};

// node_modules/@yume-chan/adb/esm/commands/subprocess/shell/service.js
var AdbShellProtocolSubprocessService = class extends AdbShellProtocolSpawner {
  #adb;
  get adb() {
    return this.#adb;
  }
  get isSupported() {
    return this.#adb.canUseFeature(AdbFeature.ShellV2);
  }
  constructor(adb) {
    super(async (command, signal) => {
      const socket = await this.#adb.createSocket(`shell,v2,raw:${command.join(" ")}`);
      if (signal?.aborted) {
        await socket.close();
        throw signal.reason;
      }
      return new AdbShellProtocolProcessImpl(socket, signal);
    });
    this.#adb = adb;
  }
  async pty(options) {
    let service = "shell,v2,pty";
    if (options?.terminalType) {
      service += `,TERM=` + options.terminalType;
    }
    service += ":";
    if (options) {
      if (typeof options.command === "string") {
        service += options.command;
      } else if (Array.isArray(options.command)) {
        service += options.command.join(" ");
      }
    }
    return new AdbShellProtocolPtyProcess(await this.#adb.createSocket(service));
  }
};

// node_modules/@yume-chan/adb/esm/commands/subprocess/service.js
var AdbSubprocessService = class {
  #adb;
  get adb() {
    return this.#adb;
  }
  #noneProtocol;
  get noneProtocol() {
    return this.#noneProtocol;
  }
  #shellProtocol;
  get shellProtocol() {
    return this.#shellProtocol;
  }
  constructor(adb) {
    this.#adb = adb;
    this.#noneProtocol = new AdbNoneProtocolSubprocessService(adb);
    if (adb.canUseFeature(AdbFeature.ShellV2)) {
      this.#shellProtocol = new AdbShellProtocolSubprocessService(adb);
    }
  }
};

// node_modules/@yume-chan/adb/esm/commands/sync/response.js
function encodeAsciiUnchecked(value) {
  const result = new Uint8Array(value.length);
  for (let i = 0; i < value.length; i += 1) {
    result[i] = value.charCodeAt(i);
  }
  return result;
}
// @__NO_SIDE_EFFECTS__
function adbSyncEncodeId(value) {
  const buffer2 = encodeAsciiUnchecked(value);
  return getUint32LittleEndian(buffer2, 0);
}
var AdbSyncResponseId = {
  Entry: /* @__PURE__ */ adbSyncEncodeId("DENT"),
  Entry2: /* @__PURE__ */ adbSyncEncodeId("DNT2"),
  Lstat: /* @__PURE__ */ adbSyncEncodeId("STAT"),
  Stat: /* @__PURE__ */ adbSyncEncodeId("STA2"),
  Lstat2: /* @__PURE__ */ adbSyncEncodeId("LST2"),
  Done: /* @__PURE__ */ adbSyncEncodeId("DONE"),
  Data: /* @__PURE__ */ adbSyncEncodeId("DATA"),
  Ok: /* @__PURE__ */ adbSyncEncodeId("OKAY"),
  Fail: /* @__PURE__ */ adbSyncEncodeId("FAIL")
};
var AdbSyncError = class extends Error {
};
var AdbSyncFailResponse = struct({ message: string(u32) }, {
  littleEndian: true,
  postDeserialize(value) {
    throw new AdbSyncError(value.message);
  }
});
async function adbSyncReadResponse(stream, id, type) {
  if (typeof id === "string") {
    id = /* @__PURE__ */ adbSyncEncodeId(id);
  }
  const buffer2 = await stream.readExactly(4);
  switch (getUint32LittleEndian(buffer2, 0)) {
    case AdbSyncResponseId.Fail:
      await AdbSyncFailResponse.deserialize(stream);
      throw new Error("Unreachable");
    case id:
      return await type.deserialize(stream);
    default:
      throw new Error(`Expected '${id}', but got '${decodeUtf8(buffer2)}'`);
  }
}
async function* adbSyncReadResponses(stream, id, type) {
  if (typeof id === "string") {
    id = /* @__PURE__ */ adbSyncEncodeId(id);
  }
  while (true) {
    const buffer2 = await stream.readExactly(4);
    switch (getUint32LittleEndian(buffer2, 0)) {
      case AdbSyncResponseId.Fail:
        await AdbSyncFailResponse.deserialize(stream);
        unreachable();
      case AdbSyncResponseId.Done:
        await stream.readExactly(type.size);
        return;
      case id:
        yield await type.deserialize(stream);
        break;
      default:
        throw new Error(`Expected '${id}' or '${AdbSyncResponseId.Done}', but got '${decodeUtf8(buffer2)}'`);
    }
  }
}

// node_modules/@yume-chan/adb/esm/commands/sync/request.js
var AdbSyncRequestId = {
  List: adbSyncEncodeId("LIST"),
  ListV2: adbSyncEncodeId("LIS2"),
  Send: adbSyncEncodeId("SEND"),
  SendV2: adbSyncEncodeId("SND2"),
  Lstat: adbSyncEncodeId("STAT"),
  Stat: adbSyncEncodeId("STA2"),
  LstatV2: adbSyncEncodeId("LST2"),
  Data: adbSyncEncodeId("DATA"),
  Done: adbSyncEncodeId("DONE"),
  Receive: adbSyncEncodeId("RECV")
};
var AdbSyncNumberRequest = struct({ id: u32, arg: u32 }, { littleEndian: true });
async function adbSyncWriteRequest(writable, id, value) {
  if (typeof id === "string") {
    id = adbSyncEncodeId(id);
  }
  if (typeof value === "number") {
    await writable.write(AdbSyncNumberRequest.serialize({ id, arg: value }));
    return;
  }
  if (typeof value === "string") {
    value = encodeUtf8(value);
  }
  await writable.write(AdbSyncNumberRequest.serialize({ id, arg: value.length }));
  await writable.write(value);
}

// node_modules/@yume-chan/adb/esm/commands/sync/stat.js
var LinuxFileType = {
  Directory: 4,
  File: 8,
  Link: 10
};
var AdbSyncLstatResponse = struct({ mode: u32, size: u32, mtime: u32 }, {
  littleEndian: true,
  extra: {
    get type() {
      return this.mode >> 12;
    },
    get permission() {
      return this.mode & 4095;
    }
  },
  postDeserialize(value) {
    if (value.mode === 0 && value.size === 0 && value.mtime === 0) {
      throw new Error("lstat error");
    }
    return value;
  }
});
var AdbSyncStatErrorCode = {
  SUCCESS: 0,
  EACCES: 13,
  EEXIST: 17,
  EFAULT: 14,
  EFBIG: 27,
  EINTR: 4,
  EINVAL: 22,
  EIO: 5,
  EISDIR: 21,
  ELOOP: 40,
  EMFILE: 24,
  ENAMETOOLONG: 36,
  ENFILE: 23,
  ENOENT: 2,
  ENOMEM: 12,
  ENOSPC: 28,
  ENOTDIR: 20,
  EOVERFLOW: 75,
  EPERM: 1,
  EROFS: 30,
  ETXTBSY: 26
};
var AdbSyncStatErrorName = /* @__PURE__ */ (() => Object.fromEntries(Object.entries(AdbSyncStatErrorCode).map(([key, value]) => [
  value,
  key
])))();
var AdbSyncStatResponse = struct({
  error: u32(),
  dev: u64,
  ino: u64,
  mode: u32,
  nlink: u32,
  uid: u32,
  gid: u32,
  size: u64,
  atime: u64,
  mtime: u64,
  ctime: u64
}, {
  littleEndian: true,
  extra: {
    get type() {
      return this.mode >> 12;
    },
    get permission() {
      return this.mode & 4095;
    }
  },
  postDeserialize(value) {
    if (value.error) {
      throw new Error(AdbSyncStatErrorName[value.error]);
    }
    return value;
  }
});
async function adbSyncLstat(socket, path, v2) {
  const locked = await socket.lock();
  try {
    if (v2) {
      await adbSyncWriteRequest(locked, AdbSyncRequestId.LstatV2, path);
      return await adbSyncReadResponse(locked, AdbSyncResponseId.Lstat2, AdbSyncStatResponse);
    } else {
      await adbSyncWriteRequest(locked, AdbSyncRequestId.Lstat, path);
      const response = await adbSyncReadResponse(locked, AdbSyncResponseId.Lstat, AdbSyncLstatResponse);
      return {
        mode: response.mode,
        // Convert to `BigInt` to make it compatible with `AdbSyncStatResponse`
        size: BigInt(response.size),
        mtime: BigInt(response.mtime),
        get type() {
          return response.type;
        },
        get permission() {
          return response.permission;
        }
      };
    }
  } finally {
    locked.release();
  }
}
async function adbSyncStat(socket, path) {
  const locked = await socket.lock();
  try {
    await adbSyncWriteRequest(locked, AdbSyncRequestId.Stat, path);
    return await adbSyncReadResponse(locked, AdbSyncResponseId.Stat, AdbSyncStatResponse);
  } finally {
    locked.release();
  }
}

// node_modules/@yume-chan/adb/esm/commands/sync/list.js
var AdbSyncEntryResponse = extend(AdbSyncLstatResponse, {
  name: string(u32)
});
var AdbSyncEntry2Response = extend(AdbSyncStatResponse, {
  name: string(u32)
});
async function* adbSyncOpenDirV2(socket, path) {
  const locked = await socket.lock();
  try {
    await adbSyncWriteRequest(locked, AdbSyncRequestId.ListV2, path);
    for await (const item of adbSyncReadResponses(locked, AdbSyncResponseId.Entry2, AdbSyncEntry2Response)) {
      if (item.error !== AdbSyncStatErrorCode.SUCCESS) {
        continue;
      }
      yield item;
    }
  } finally {
    locked.release();
  }
}
async function* adbSyncOpenDirV1(socket, path) {
  const locked = await socket.lock();
  try {
    await adbSyncWriteRequest(locked, AdbSyncRequestId.List, path);
    for await (const item of adbSyncReadResponses(locked, AdbSyncResponseId.Entry, AdbSyncEntryResponse)) {
      yield item;
    }
  } finally {
    locked.release();
  }
}
async function* adbSyncOpenDir(socket, path, v2) {
  if (v2) {
    yield* adbSyncOpenDirV2(socket, path);
  } else {
    for await (const item of adbSyncOpenDirV1(socket, path)) {
      yield {
        mode: item.mode,
        size: BigInt(item.size),
        mtime: BigInt(item.mtime),
        get type() {
          return item.type;
        },
        get permission() {
          return item.permission;
        },
        name: item.name
      };
    }
  }
}

// node_modules/@yume-chan/adb/esm/commands/sync/pull.js
var AdbSyncDataResponse = struct({ data: buffer(u32) }, { littleEndian: true });
async function* adbSyncPullGenerator(socket, path) {
  const locked = await socket.lock();
  let done = false;
  try {
    await adbSyncWriteRequest(locked, AdbSyncRequestId.Receive, path);
    for await (const packet of adbSyncReadResponses(locked, AdbSyncResponseId.Data, AdbSyncDataResponse)) {
      yield packet.data;
    }
    done = true;
  } catch (e) {
    done = true;
    throw e;
  } finally {
    if (!done) {
      for await (const packet of adbSyncReadResponses(locked, AdbSyncResponseId.Data, AdbSyncDataResponse)) {
        void packet;
      }
    }
    locked.release();
  }
}
function adbSyncPull(socket, path) {
  return ReadableStream2.from(adbSyncPullGenerator(socket, path));
}

// node_modules/@yume-chan/adb/esm/commands/sync/push.js
var ADB_SYNC_MAX_PACKET_SIZE = 64 * 1024;
var AdbSyncOkResponse = struct({ unused: u32 }, { littleEndian: true });
async function pipeFileData(locked, file, packetSize, mtime) {
  const abortController = new AbortController2();
  file.pipeThrough(new DistributionStream(packetSize, true)).pipeTo(new maybe_consumable_exports.WritableStream({
    write(chunk) {
      return adbSyncWriteRequest(locked, AdbSyncRequestId.Data, chunk);
    }
  }), { signal: abortController.signal }).then(async () => {
    await adbSyncWriteRequest(locked, AdbSyncRequestId.Done, mtime);
    await locked.flush();
  }, NOOP2);
  await adbSyncReadResponse(locked, AdbSyncResponseId.Ok, AdbSyncOkResponse).catch((e) => {
    abortController.abort();
    throw e;
  });
}
async function adbSyncPushV1({ socket, filename, file, type = LinuxFileType.File, permission = 438, mtime = Date.now() / 1e3 | 0, packetSize = ADB_SYNC_MAX_PACKET_SIZE }) {
  const locked = await socket.lock();
  try {
    const mode = type << 12 | permission;
    const pathAndMode = `${filename},${mode.toString()}`;
    await adbSyncWriteRequest(locked, AdbSyncRequestId.Send, pathAndMode);
    await pipeFileData(locked, file, packetSize, mtime);
  } finally {
    locked.release();
  }
}
var AdbSyncSendV2Flags = {
  None: 0,
  Brotli: 1,
  /**
   * 2
   */
  Lz4: 1 << 1,
  /**
   * 4
   */
  Zstd: 1 << 2,
  DryRun: 2147483648
};
var AdbSyncSendV2Request = struct({ id: u32, mode: u32, flags: u32() }, { littleEndian: true });
async function adbSyncPushV2({ socket, filename, file, type = LinuxFileType.File, permission = 438, mtime = Date.now() / 1e3 | 0, packetSize = ADB_SYNC_MAX_PACKET_SIZE, dryRun = false }) {
  const locked = await socket.lock();
  try {
    await adbSyncWriteRequest(locked, AdbSyncRequestId.SendV2, filename);
    const mode = type << 12 | permission;
    let flags = AdbSyncSendV2Flags.None;
    if (dryRun) {
      flags |= AdbSyncSendV2Flags.DryRun;
    }
    await locked.write(AdbSyncSendV2Request.serialize({
      id: AdbSyncRequestId.SendV2,
      mode,
      flags
    }));
    await pipeFileData(locked, file, packetSize, mtime);
  } finally {
    locked.release();
  }
}
function adbSyncPush(options) {
  if (options.v2) {
    return adbSyncPushV2(options);
  }
  if (options.dryRun) {
    throw new Error("dryRun is not supported in v1");
  }
  return adbSyncPushV1(options);
}

// node_modules/@yume-chan/adb/esm/commands/sync/socket.js
var AdbSyncSocketLocked = class {
  #writer;
  #readable;
  #socketLock;
  #writeLock = new AutoResetEvent();
  #combiner;
  get position() {
    return this.#readable.position;
  }
  constructor(writer, readable, bufferSize, lock) {
    this.#writer = writer;
    this.#readable = readable;
    this.#socketLock = lock;
    this.#combiner = new BufferCombiner(bufferSize);
  }
  #write(buffer2) {
    return Consumable.WritableStream.write(this.#writer, buffer2);
  }
  async flush() {
    try {
      await this.#writeLock.wait();
      const buffer2 = this.#combiner.flush();
      if (buffer2) {
        await this.#write(buffer2);
      }
    } finally {
      this.#writeLock.notifyOne();
    }
  }
  async write(data) {
    try {
      await this.#writeLock.wait();
      for (const buffer2 of this.#combiner.push(data)) {
        await this.#write(buffer2);
      }
    } finally {
      this.#writeLock.notifyOne();
    }
  }
  async readExactly(length) {
    await this.flush();
    return await this.#readable.readExactly(length);
  }
  release() {
    this.#combiner.flush();
    this.#socketLock.notifyOne();
  }
  async close() {
    await this.#readable.cancel();
  }
};
var AdbSyncSocket = class {
  #lock = new AutoResetEvent();
  #socket;
  #locked;
  constructor(socket, bufferSize) {
    this.#socket = socket;
    this.#locked = new AdbSyncSocketLocked(socket.writable.getWriter(), new BufferedReadableStream(socket.readable), bufferSize, this.#lock);
  }
  async lock() {
    await this.#lock.wait();
    return this.#locked;
  }
  async close() {
    await this.#locked.close();
    await this.#socket.close();
  }
};

// node_modules/@yume-chan/adb/esm/commands/sync/sync.js
function dirname(path) {
  const end = path.lastIndexOf("/");
  if (end === -1) {
    throw new Error(`Invalid path`);
  }
  if (end === 0) {
    return "/";
  }
  return path.substring(0, end);
}
var AdbSync = class {
  _adb;
  _socket;
  #supportsStat;
  #supportsListV2;
  #fixedPushMkdir;
  #supportsSendReceiveV2;
  #needPushMkdirWorkaround;
  get supportsStat() {
    return this.#supportsStat;
  }
  get supportsListV2() {
    return this.#supportsListV2;
  }
  get fixedPushMkdir() {
    return this.#fixedPushMkdir;
  }
  get supportsSendReceiveV2() {
    return this.#supportsSendReceiveV2;
  }
  get needPushMkdirWorkaround() {
    return this.#needPushMkdirWorkaround;
  }
  constructor(adb, socket) {
    this._adb = adb;
    this._socket = new AdbSyncSocket(socket, adb.maxPayloadSize);
    this.#supportsStat = adb.canUseFeature(AdbFeature.StatV2);
    this.#supportsListV2 = adb.canUseFeature(AdbFeature.ListV2);
    this.#fixedPushMkdir = adb.canUseFeature(AdbFeature.FixedPushMkdir);
    this.#supportsSendReceiveV2 = adb.canUseFeature(AdbFeature.SendReceiveV2);
    this.#needPushMkdirWorkaround = this._adb.canUseFeature(AdbFeature.ShellV2) && !this.fixedPushMkdir;
  }
  /**
   * Gets information of a file or folder.
   *
   * If `path` points to a symbolic link, the returned information is about the link itself (with `type` being `LinuxFileType.Link`).
   */
  async lstat(path) {
    return await adbSyncLstat(this._socket, path, this.#supportsStat);
  }
  /**
   * Gets the information of a file or folder.
   *
   * If `path` points to a symbolic link, it will be resolved and the returned information is about the target (with `type` being `LinuxFileType.File` or `LinuxFileType.Directory`).
   */
  async stat(path) {
    if (!this.#supportsStat) {
      throw new Error("Not supported");
    }
    return await adbSyncStat(this._socket, path);
  }
  /**
   * Checks if `path` is a directory, or a symbolic link to a directory.
   *
   * This uses `lstat` internally, thus works on all Android versions.
   */
  async isDirectory(path) {
    try {
      await this.lstat(path + "/");
      return true;
    } catch {
      return false;
    }
  }
  opendir(path) {
    return adbSyncOpenDir(this._socket, path, this.supportsListV2);
  }
  async readdir(path) {
    const results = [];
    for await (const entry of this.opendir(path)) {
      results.push(entry);
    }
    return results;
  }
  /**
   * Reads the content of a file on device.
   *
   * @param filename The full path of the file on device to read.
   * @returns A `ReadableStream` that contains the file content.
   */
  read(filename) {
    return adbSyncPull(this._socket, filename);
  }
  /**
   * Writes a file on device. If the file name already exists, it will be overwritten.
   *
   * @param options The content and options of the file to write.
   */
  async write(options) {
    if (this.needPushMkdirWorkaround) {
      await this._adb.subprocess.noneProtocol.spawnWait([
        "mkdir",
        "-p",
        escapeArg(dirname(options.filename))
      ]);
    }
    await adbSyncPush({
      v2: this.supportsSendReceiveV2,
      socket: this._socket,
      ...options
    });
  }
  lockSocket() {
    return this._socket.lock();
  }
  dispose() {
    return this._socket.close();
  }
};

// node_modules/@yume-chan/adb/esm/commands/tcpip.js
function parsePort(value) {
  if (!value || value === "0") {
    return void 0;
  }
  return Number.parseInt(value, 10);
}
var AdbTcpIpService = class extends AdbServiceBase {
  async getListenAddresses() {
    const serviceListenAddresses = await this.adb.getProp("service.adb.listen_addrs");
    const servicePort = await this.adb.getProp("service.adb.tcp.port");
    const persistPort = await this.adb.getProp("persist.adb.tcp.port");
    return {
      serviceListenAddresses: serviceListenAddresses != "" ? serviceListenAddresses.split(",") : [],
      servicePort: parsePort(servicePort),
      persistPort: parsePort(persistPort)
    };
  }
  async setPort(port) {
    if (port <= 0) {
      throw new TypeError(`Invalid port ${port}`);
    }
    const output = await this.adb.createSocketAndWait(`tcpip:${port}`);
    if (output !== `restarting in TCP mode port: ${port}
`) {
      throw new Error(output);
    }
    return output;
  }
  async disable() {
    const output = await this.adb.createSocketAndWait("usb:");
    if (output !== "restarting in USB mode\n") {
      throw new Error(output);
    }
    return output;
  }
};

// node_modules/@yume-chan/adb/esm/adb.js
var Adb = class {
  #transport;
  get transport() {
    return this.#transport;
  }
  get serial() {
    return this.#transport.serial;
  }
  get maxPayloadSize() {
    return this.#transport.maxPayloadSize;
  }
  get banner() {
    return this.#transport.banner;
  }
  get disconnected() {
    return this.#transport.disconnected;
  }
  get clientFeatures() {
    return this.#transport.clientFeatures;
  }
  get deviceFeatures() {
    return this.banner.features;
  }
  subprocess;
  power;
  reverse;
  tcpip;
  constructor(transport) {
    this.#transport = transport;
    this.subprocess = new AdbSubprocessService(this);
    this.power = new AdbPower(this);
    this.reverse = new AdbReverseService(this);
    this.tcpip = new AdbTcpIpService(this);
  }
  canUseFeature(feature) {
    return this.clientFeatures.includes(feature) && this.deviceFeatures.includes(feature);
  }
  /**
   * Creates a new ADB Socket to the specified service or socket address.
   */
  async createSocket(service) {
    return this.#transport.connect(service);
  }
  async createSocketAndWait(service) {
    const socket = await this.createSocket(service);
    return await socket.readable.pipeThrough(new TextDecoderStream()).pipeThrough(new ConcatStringStream());
  }
  getProp(key) {
    return this.subprocess.noneProtocol.spawnWaitText(["getprop", key]).then((output) => output.trim());
  }
  rm(filenames, options) {
    const args = ["rm"];
    if (options?.recursive) {
      args.push("-r");
    }
    if (options?.force) {
      args.push("-f");
    }
    if (Array.isArray(filenames)) {
      for (const filename of filenames) {
        args.push(escapeArg(filename));
      }
    } else {
      args.push(escapeArg(filenames));
    }
    args.push("</dev/null");
    return this.subprocess.noneProtocol.spawnWaitText(args);
  }
  async sync() {
    const socket = await this.createSocket("sync:");
    return new AdbSync(this, socket);
  }
  async framebuffer() {
    return framebuffer(this);
  }
  async close() {
    await this.#transport.close();
  }
};

// node_modules/@yume-chan/adb/esm/banner.js
var AdbBannerKey = {
  Product: "ro.product.name",
  Model: "ro.product.model",
  Device: "ro.product.device",
  Features: "features"
};
var AdbBanner = class _AdbBanner {
  static parse(banner) {
    let state;
    let product;
    let model;
    let device;
    let features = [];
    const pieces = banner.split("::");
    if (pieces.length > 1) {
      state = pieces[0].trim() || void 0;
      const props = pieces[1];
      for (const prop of props.split(";")) {
        if (!prop) {
          continue;
        }
        const keyValue = prop.split("=");
        if (keyValue.length !== 2) {
          continue;
        }
        const [key, value] = keyValue;
        switch (key) {
          case AdbBannerKey.Product:
            product = value;
            break;
          case AdbBannerKey.Model:
            model = value;
            break;
          case AdbBannerKey.Device:
            device = value;
            break;
          case AdbBannerKey.Features:
            features = value.split(",");
            break;
        }
      }
    }
    return new _AdbBanner(state, product, model, device, features);
  }
  #state;
  get state() {
    return this.#state;
  }
  #product;
  get product() {
    return this.#product;
  }
  #model;
  get model() {
    return this.#model;
  }
  #device;
  get device() {
    return this.#device;
  }
  #features = [];
  get features() {
    return this.#features;
  }
  // eslint-disable-next-line @typescript-eslint/max-params
  constructor(state, product, model, device, features) {
    this.#state = state;
    this.#product = product;
    this.#model = model;
    this.#device = device;
    this.#features = features;
  }
};

// node_modules/@yume-chan/adb/esm/daemon/crypto.js
function getBigUint(array, byteOffset, length) {
  let result = 0n;
  for (let j2 = 0; j2 < length % 8; j2 += 1) {
    result = result << 8n | BigInt(array[byteOffset + j2]);
  }
  for (let i = byteOffset + length % 8; i < byteOffset + length; i += 8) {
    result <<= 64n;
    const value = getUint64BigEndian(array, i);
    result |= value;
  }
  return result;
}
function setBigUint(array, byteOffset, length, value, littleEndian) {
  if (littleEndian) {
    while (value > 0n) {
      setInt64LittleEndian(array, byteOffset, value);
      byteOffset += 8;
      value >>= 64n;
    }
  } else {
    let position = byteOffset + length - 8;
    while (value > 0n) {
      setInt64BigEndian(array, position, value);
      position -= 8;
      value >>= 64n;
    }
  }
}
function derHeader(data, offset) {
  offset = offset + 1;
  let length = data[offset];
  offset += 1;
  if (length & 128) {
    const lengthBytes = length & 127;
    length = 0;
    for (let i = 0; i < lengthBytes; i += 1) {
      length = length << 8 | data[offset];
      offset += 1;
    }
  }
  return { offset, length };
}
function rsaParsePrivateKey(key) {
  let offset = derHeader(key, 0).offset;
  let header = derHeader(key, offset);
  offset = header.offset + header.length;
  header = derHeader(key, offset);
  offset = header.offset + header.length;
  offset = derHeader(key, offset).offset;
  offset = derHeader(key, offset).offset;
  header = derHeader(key, offset);
  offset = header.offset + header.length;
  const nHeader = derHeader(key, offset);
  offset = nHeader.offset + nHeader.length;
  const eHeader = derHeader(key, offset);
  offset = eHeader.offset + eHeader.length;
  const dHeader = derHeader(key, offset);
  const n = getBigUint(key, nHeader.offset, nHeader.length);
  const d = getBigUint(key, dHeader.offset, dHeader.length);
  return [n, d];
}
function nonNegativeMod(m, d) {
  const r = m % d;
  if (r > 0) {
    return r;
  }
  return r + (d > 0 ? d : -d);
}
function modInverse(a, m) {
  a = nonNegativeMod(a, m);
  if (!a || m < 2) {
    return NaN;
  }
  const s = [];
  let b = m;
  while (b) {
    [a, b] = [b, a % b];
    s.push({ a, b });
  }
  if (a !== 1) {
    return NaN;
  }
  let x = 1;
  let y = 0;
  for (let i = s.length - 2; i >= 0; i -= 1) {
    [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)];
  }
  return nonNegativeMod(y, m);
}
var ModulusLengthInBytes = 2048 / 8;
var ModulusLengthInWords = ModulusLengthInBytes / 4;
function adbGetPublicKeySize() {
  return 4 + 4 + ModulusLengthInBytes + ModulusLengthInBytes + 4;
}
function adbGeneratePublicKey(privateKey, output) {
  let outputType;
  const outputLength = adbGetPublicKeySize();
  if (!output) {
    output = new Uint8Array(outputLength);
    outputType = "Uint8Array";
  } else {
    if (output.length < outputLength) {
      throw new TypeError("output buffer is too small");
    }
    outputType = "number";
  }
  const outputView = new DataView(output.buffer, output.byteOffset, output.length);
  let outputOffset = 0;
  outputView.setUint32(outputOffset, ModulusLengthInWords, true);
  outputOffset += 4;
  const [n] = rsaParsePrivateKey(privateKey);
  const n0inv = -modInverse(Number(n % 2n ** 32n), 2 ** 32);
  outputView.setInt32(outputOffset, n0inv, true);
  outputOffset += 4;
  setBigUint(output, outputOffset, ModulusLengthInBytes, n, true);
  outputOffset += ModulusLengthInBytes;
  const rr2 = 2n ** 4096n % n;
  setBigUint(output, outputOffset, ModulusLengthInBytes, rr2, true);
  outputOffset += ModulusLengthInBytes;
  outputView.setUint32(outputOffset, 65537, true);
  if (outputType === "Uint8Array") {
    return output;
  } else {
    return outputLength;
  }
}
function powMod(base, exponent, modulus) {
  if (modulus === 1n) {
    return 0n;
  }
  let r = 1n;
  base = base % modulus;
  while (exponent > 0n) {
    if (BigInt.asUintN(1, exponent) === 1n) {
      r = r * base % modulus;
    }
    base = base * base % modulus;
    exponent >>= 1n;
  }
  return r;
}
var SHA1_DIGEST_LENGTH = 20;
var ASN1_SEQUENCE = 48;
var ASN1_OCTET_STRING = 4;
var ASN1_NULL = 5;
var ASN1_OID = 6;
var SHA1_DIGEST_INFO = new Uint8Array([
  ASN1_SEQUENCE,
  13 + SHA1_DIGEST_LENGTH,
  ASN1_SEQUENCE,
  9,
  // SHA-1 (1 3 14 3 2 26)
  ASN1_OID,
  5,
  1 * 40 + 3,
  14,
  3,
  2,
  26,
  ASN1_NULL,
  0,
  ASN1_OCTET_STRING,
  SHA1_DIGEST_LENGTH
]);
function rsaSign(privateKey, data) {
  const [n, d] = rsaParsePrivateKey(privateKey);
  const padded = new Uint8Array(256);
  let index = 0;
  padded[index] = 0;
  index += 1;
  padded[index] = 1;
  index += 1;
  const fillLength = padded.length - SHA1_DIGEST_INFO.length - data.length - 1;
  while (index < fillLength) {
    padded[index] = 255;
    index += 1;
  }
  padded[index] = 0;
  index += 1;
  padded.set(SHA1_DIGEST_INFO, index);
  index += SHA1_DIGEST_INFO.length;
  padded.set(data, index);
  const signature = powMod(getBigUint(padded, 0, padded.length), d, n);
  setBigUint(padded, 0, padded.length, signature, false);
  return padded;
}

// node_modules/@yume-chan/adb/esm/daemon/packet.js
var AdbCommand = {
  Auth: 1213486401,
  // 'AUTH'
  Close: 1163086915,
  // 'CLSE'
  Connect: 1314410051,
  // 'CNXN'
  Okay: 1497451343,
  // 'OKAY'
  Open: 1313165391,
  // 'OPEN'
  Write: 1163154007
  // 'WRTE'
};
var AdbPacketHeader = struct({
  command: u32,
  arg0: u32,
  arg1: u32,
  payloadLength: u32,
  checksum: u32,
  magic: s32
}, { littleEndian: true });
var AdbPacket = extend(AdbPacketHeader, {
  payload: buffer("payloadLength")
});
function calculateChecksum(payload) {
  return payload.reduce((result, item) => result + item, 0);
}
var AdbPacketSerializeStream = class extends TransformStream2 {
  constructor() {
    const headerBuffer = new Uint8Array(AdbPacketHeader.size);
    super({
      transform: async (chunk, controller) => {
        await chunk.tryConsume(async (chunk2) => {
          const init = chunk2;
          init.payloadLength = init.payload.length;
          AdbPacketHeader.serialize(init, headerBuffer);
          await Consumable.ReadableStream.enqueue(controller, headerBuffer);
          if (init.payloadLength) {
            await Consumable.ReadableStream.enqueue(controller, init.payload);
          }
        });
      }
    });
  }
};

// node_modules/@yume-chan/adb/esm/daemon/auth.js
var AdbAuthType = {
  Token: 1,
  Signature: 2,
  PublicKey: 3
};
var AdbSignatureAuthenticator = async function* (credentialStore, getNextRequest) {
  for await (const key of credentialStore.iterateKeys()) {
    const packet = await getNextRequest();
    if (packet.arg0 !== AdbAuthType.Token) {
      return;
    }
    const signature = rsaSign(key.buffer, packet.payload);
    yield {
      command: AdbCommand.Auth,
      arg0: AdbAuthType.Signature,
      arg1: 0,
      payload: signature
    };
  }
};
var AdbPublicKeyAuthenticator = async function* (credentialStore, getNextRequest) {
  const packet = await getNextRequest();
  if (packet.arg0 !== AdbAuthType.Token) {
    return;
  }
  let privateKey;
  for await (const key of credentialStore.iterateKeys()) {
    privateKey = key;
    break;
  }
  if (!privateKey) {
    privateKey = await credentialStore.generateKey();
  }
  const publicKeyLength = adbGetPublicKeySize();
  const [publicKeyBase64Length] = calculateBase64EncodedLength(publicKeyLength);
  const nameBuffer = privateKey.name?.length ? encodeUtf8(privateKey.name) : EmptyUint8Array;
  const publicKeyBuffer = new Uint8Array(publicKeyBase64Length + (nameBuffer.length ? nameBuffer.length + 1 : 0) + // Space character + name
  1);
  adbGeneratePublicKey(privateKey.buffer, publicKeyBuffer);
  encodeBase64(publicKeyBuffer.subarray(0, publicKeyLength), publicKeyBuffer);
  if (nameBuffer.length) {
    publicKeyBuffer[publicKeyBase64Length] = 32;
    publicKeyBuffer.set(nameBuffer, publicKeyBase64Length + 1);
  }
  yield {
    command: AdbCommand.Auth,
    arg0: AdbAuthType.PublicKey,
    arg1: 0,
    payload: publicKeyBuffer
  };
};
var ADB_DEFAULT_AUTHENTICATORS = [
  AdbSignatureAuthenticator,
  AdbPublicKeyAuthenticator
];
var AdbAuthenticationProcessor = class {
  authenticators;
  #credentialStore;
  #pendingRequest = new PromiseResolver();
  #iterator;
  constructor(authenticators, credentialStore) {
    this.authenticators = authenticators;
    this.#credentialStore = credentialStore;
  }
  #getNextRequest = () => {
    return this.#pendingRequest.promise;
  };
  async *#invokeAuthenticator() {
    for (const authenticator of this.authenticators) {
      for await (const packet of authenticator(this.#credentialStore, this.#getNextRequest)) {
        this.#pendingRequest = new PromiseResolver();
        yield packet;
      }
    }
  }
  async process(packet) {
    if (!this.#iterator) {
      this.#iterator = this.#invokeAuthenticator();
    }
    this.#pendingRequest.resolve(packet);
    const result = await this.#iterator.next();
    if (result.done) {
      throw new Error("No authenticator can handle the request");
    }
    return result.value;
  }
  dispose() {
    void this.#iterator?.return?.();
  }
};

// node_modules/@yume-chan/adb/esm/daemon/socket.js
var AdbDaemonSocketController = class {
  #dispatcher;
  localId;
  remoteId;
  localCreated;
  service;
  #readable;
  #readableController;
  get readable() {
    return this.#readable;
  }
  #writableController;
  writable;
  #closed = false;
  #closedPromise = new PromiseResolver();
  get closed() {
    return this.#closedPromise.promise;
  }
  #socket;
  get socket() {
    return this.#socket;
  }
  #availableWriteBytesChanged;
  /**
   * When delayed ack is disabled, returns `Infinity` if the socket is ready to write
   * (exactly one packet can be written no matter how large it is), or `-1` if the socket
   * is waiting for ack message.
   *
   * When delayed ack is enabled, returns a non-negative finite number indicates the number of
   * bytes that can be written to the socket before waiting for ack message.
   */
  #availableWriteBytes = 0;
  constructor(options) {
    this.#dispatcher = options.dispatcher;
    this.localId = options.localId;
    this.remoteId = options.remoteId;
    this.localCreated = options.localCreated;
    this.service = options.service;
    this.#readable = new PushReadableStream((controller) => {
      this.#readableController = controller;
    });
    this.writable = new maybe_consumable_exports.WritableStream({
      start: (controller) => {
        this.#writableController = controller;
        controller.signal.addEventListener("abort", () => {
          this.#availableWriteBytesChanged?.reject(controller.signal.reason);
        });
      },
      write: async (data) => {
        const size = data.length;
        const chunkSize = this.#dispatcher.options.maxPayloadSize;
        for (let start = 0, end = chunkSize; start < size; start = end, end += chunkSize) {
          const chunk = data.subarray(start, end);
          await this.#writeChunk(chunk);
        }
      }
    });
    this.#socket = new AdbDaemonSocket(this);
    this.#availableWriteBytes = options.availableWriteBytes;
  }
  async #writeChunk(data) {
    const length = data.length;
    while (this.#availableWriteBytes < length) {
      const resolver = new PromiseResolver();
      this.#availableWriteBytesChanged = resolver;
      await resolver.promise;
    }
    if (this.#availableWriteBytes === Infinity) {
      this.#availableWriteBytes = -1;
    } else {
      this.#availableWriteBytes -= length;
    }
    await this.#dispatcher.sendPacket(AdbCommand.Write, this.localId, this.remoteId, data);
  }
  async enqueue(data) {
    await this.#readableController.enqueue(data);
  }
  ack(bytes) {
    this.#availableWriteBytes += bytes;
    this.#availableWriteBytesChanged?.resolve();
  }
  async close() {
    if (this.#closed) {
      return;
    }
    this.#closed = true;
    this.#availableWriteBytesChanged?.reject(new Error("Socket closed"));
    try {
      this.#writableController.error(new Error("Socket closed"));
    } catch {
    }
    await this.#dispatcher.sendPacket(AdbCommand.Close, this.localId, this.remoteId, EmptyUint8Array);
  }
  dispose() {
    this.#readableController.close();
    this.#closedPromise.resolve(void 0);
  }
};
var AdbDaemonSocket = class {
  #controller;
  get localId() {
    return this.#controller.localId;
  }
  get remoteId() {
    return this.#controller.remoteId;
  }
  get localCreated() {
    return this.#controller.localCreated;
  }
  get service() {
    return this.#controller.service;
  }
  get readable() {
    return this.#controller.readable;
  }
  get writable() {
    return this.#controller.writable;
  }
  get closed() {
    return this.#controller.closed;
  }
  constructor(controller) {
    this.#controller = controller;
  }
  close() {
    return this.#controller.close();
  }
};

// node_modules/@yume-chan/adb/esm/daemon/dispatcher.js
var AdbPacketDispatcher = class {
  // ADB socket id starts from 1
  // (0 means open failed)
  #initializers = new AsyncOperationManager(1);
  /**
   * Socket local ID to the socket controller.
   */
  #sockets = /* @__PURE__ */ new Map();
  #writer;
  options;
  #closed = false;
  #disconnected = new PromiseResolver();
  get disconnected() {
    return this.#disconnected.promise;
  }
  #incomingSocketHandlers = /* @__PURE__ */ new Map();
  #readAbortController = new AbortController2();
  constructor(connection, options) {
    this.options = options;
    if (this.options.initialDelayedAckBytes < 0) {
      this.options.initialDelayedAckBytes = 0;
    }
    connection.readable.pipeTo(new WritableStream2({
      write: async (packet, controller) => {
        switch (packet.command) {
          case AdbCommand.Close:
            await this.#handleClose(packet);
            break;
          case AdbCommand.Okay:
            this.#handleOkay(packet);
            break;
          case AdbCommand.Open:
            await this.#handleOpen(packet);
            break;
          case AdbCommand.Write:
            this.#handleWrite(packet).catch((e) => {
              controller.error(e);
            });
            break;
          default:
            throw new Error(`Unknown command: ${packet.command.toString(16)}`);
        }
      }
    }), {
      preventCancel: options.preserveConnection ?? false,
      signal: this.#readAbortController.signal
    }).then(() => {
      this.#dispose();
    }, (e) => {
      if (!this.#closed) {
        this.#disconnected.reject(e);
      }
      this.#dispose();
    });
    this.#writer = connection.writable.getWriter();
  }
  async #handleClose(packet) {
    if (packet.arg0 === 0 && this.#initializers.reject(packet.arg1, new Error("Socket open failed"))) {
      return;
    }
    const socket = this.#sockets.get(packet.arg1);
    if (socket) {
      await socket.close();
      socket.dispose();
      this.#sockets.delete(packet.arg1);
      return;
    }
  }
  #handleOkay(packet) {
    let ackBytes;
    if (this.options.initialDelayedAckBytes !== 0) {
      if (packet.payload.length !== 4) {
        throw new Error("Invalid OKAY packet. Payload size should be 4");
      }
      ackBytes = getUint32LittleEndian(packet.payload, 0);
    } else {
      if (packet.payload.length !== 0) {
        throw new Error("Invalid OKAY packet. Payload size should be 0");
      }
      ackBytes = Infinity;
    }
    if (this.#initializers.resolve(packet.arg1, {
      remoteId: packet.arg0,
      availableWriteBytes: ackBytes
    })) {
      return;
    }
    const socket = this.#sockets.get(packet.arg1);
    if (socket) {
      socket.ack(ackBytes);
      return;
    }
    void this.sendPacket(AdbCommand.Close, packet.arg1, packet.arg0, EmptyUint8Array);
  }
  #sendOkay(localId, remoteId, ackBytes) {
    let payload;
    if (this.options.initialDelayedAckBytes !== 0) {
      payload = new Uint8Array(4);
      setUint32LittleEndian(payload, 0, ackBytes);
    } else {
      payload = EmptyUint8Array;
    }
    return this.sendPacket(AdbCommand.Okay, localId, remoteId, payload);
  }
  async #handleOpen(packet) {
    const [localId] = this.#initializers.add();
    this.#initializers.resolve(localId, void 0);
    const remoteId = packet.arg0;
    let availableWriteBytes = packet.arg1;
    let service = decodeUtf8(packet.payload);
    if (service.endsWith("\0")) {
      service = service.substring(0, service.length - 1);
    }
    if (this.options.initialDelayedAckBytes === 0) {
      if (availableWriteBytes !== 0) {
        throw new Error("Invalid OPEN packet. arg1 should be 0");
      }
      availableWriteBytes = Infinity;
    } else {
      if (availableWriteBytes === 0) {
        throw new Error("Invalid OPEN packet. arg1 should be greater than 0");
      }
    }
    const handler = this.#incomingSocketHandlers.get(service);
    if (!handler) {
      await this.sendPacket(AdbCommand.Close, 0, remoteId, EmptyUint8Array);
      return;
    }
    const controller = new AdbDaemonSocketController({
      dispatcher: this,
      localId,
      remoteId,
      localCreated: false,
      service,
      availableWriteBytes
    });
    try {
      await handler(controller.socket);
      this.#sockets.set(localId, controller);
      await this.#sendOkay(localId, remoteId, this.options.initialDelayedAckBytes);
    } catch {
      await this.sendPacket(AdbCommand.Close, 0, remoteId, EmptyUint8Array);
    }
  }
  async #handleWrite(packet) {
    const socket = this.#sockets.get(packet.arg1);
    if (!socket) {
      throw new Error(`Unknown local socket id: ${packet.arg1}`);
    }
    let handled = false;
    const promises = [
      (async () => {
        await socket.enqueue(packet.payload);
        await this.#sendOkay(packet.arg1, packet.arg0, packet.payload.length);
        handled = true;
      })()
    ];
    if (this.options.readTimeLimit) {
      promises.push((async () => {
        await delay(this.options.readTimeLimit);
        if (!handled) {
          throw new Error(`readable of \`${socket.service}\` has stalled for ${this.options.readTimeLimit} milliseconds`);
        }
      })());
    }
    await Promise.race(promises);
  }
  async createSocket(service) {
    if (this.options.appendNullToServiceString) {
      service += "\0";
    }
    const [localId, initializer] = this.#initializers.add();
    await this.sendPacket(AdbCommand.Open, localId, this.options.initialDelayedAckBytes, service);
    const { remoteId, availableWriteBytes } = await initializer;
    const controller = new AdbDaemonSocketController({
      dispatcher: this,
      localId,
      remoteId,
      localCreated: true,
      service,
      availableWriteBytes
    });
    this.#sockets.set(localId, controller);
    return controller.socket;
  }
  addReverseTunnel(service, handler) {
    this.#incomingSocketHandlers.set(service, handler);
  }
  removeReverseTunnel(address) {
    this.#incomingSocketHandlers.delete(address);
  }
  clearReverseTunnels() {
    this.#incomingSocketHandlers.clear();
  }
  async sendPacket(command, arg0, arg1, payload) {
    if (typeof payload === "string") {
      payload = encodeUtf8(payload);
    }
    if (payload.length > this.options.maxPayloadSize) {
      throw new TypeError("payload too large");
    }
    await Consumable.WritableStream.write(this.#writer, {
      command,
      arg0,
      arg1,
      payload,
      checksum: this.options.calculateChecksum ? calculateChecksum(payload) : 0,
      magic: command ^ 4294967295
    });
  }
  async close() {
    await Promise.all(Array.from(this.#sockets.values(), (socket) => socket.close()));
    this.#closed = true;
    this.#readAbortController.abort();
    if (this.options.preserveConnection) {
      this.#writer.releaseLock();
    } else {
      await this.#writer.close();
    }
  }
  #dispose() {
    for (const socket of this.#sockets.values()) {
      socket.dispose();
    }
    this.#disconnected.resolve();
  }
};

// node_modules/@yume-chan/adb/esm/daemon/transport.js
var ADB_DAEMON_VERSION_OMIT_CHECKSUM = 16777217;
var ADB_DAEMON_DEFAULT_FEATURES = /* @__PURE__ */ (() => [
  AdbFeature.ShellV2,
  AdbFeature.Cmd,
  AdbFeature.StatV2,
  AdbFeature.ListV2,
  AdbFeature.FixedPushMkdir,
  "apex",
  AdbFeature.Abb,
  // only tells the client the symlink timestamp issue in `adb push --sync` has been fixed.
  // No special handling required.
  "fixed_push_symlink_timestamp",
  AdbFeature.AbbExec,
  "remount_shell",
  "track_app",
  AdbFeature.SendReceiveV2,
  "sendrecv_v2_brotli",
  "sendrecv_v2_lz4",
  "sendrecv_v2_zstd",
  "sendrecv_v2_dry_run_send",
  AdbFeature.DelayedAck
])();
var ADB_DAEMON_DEFAULT_INITIAL_PAYLOAD_SIZE = 32 * 1024 * 1024;
var AdbDaemonTransport = class _AdbDaemonTransport {
  /**
   * Authenticate with the ADB Daemon and create a new transport.
   */
  static async authenticate({ serial, connection, credentialStore, authenticators = ADB_DEFAULT_AUTHENTICATORS, features = ADB_DAEMON_DEFAULT_FEATURES, initialDelayedAckBytes = ADB_DAEMON_DEFAULT_INITIAL_PAYLOAD_SIZE, ...options }) {
    let version = 16777217;
    let maxPayloadSize = 1024 * 1024;
    const resolver = new PromiseResolver();
    const authProcessor = new AdbAuthenticationProcessor(authenticators, credentialStore);
    const abortController = new AbortController2();
    const pipe = connection.readable.pipeTo(new WritableStream2({
      async write(packet) {
        switch (packet.command) {
          case AdbCommand.Connect:
            version = Math.min(version, packet.arg0);
            maxPayloadSize = Math.min(maxPayloadSize, packet.arg1);
            resolver.resolve(decodeUtf8(packet.payload));
            break;
          case AdbCommand.Auth: {
            const response = await authProcessor.process(packet);
            await sendPacket(response);
            break;
          }
          default:
            break;
        }
      }
    }), {
      // Don't cancel the source ReadableStream on AbortSignal abort.
      preventCancel: true,
      signal: abortController.signal
    }).then(() => {
      resolver.reject(new Error("Connection closed unexpectedly"));
    }, (e) => {
      resolver.reject(e);
    });
    const writer = connection.writable.getWriter();
    async function sendPacket(init) {
      init.checksum = calculateChecksum(init.payload);
      init.magic = init.command ^ 4294967295;
      await Consumable.WritableStream.write(writer, init);
    }
    const actualFeatures = features.slice();
    if (initialDelayedAckBytes <= 0) {
      const index = features.indexOf(AdbFeature.DelayedAck);
      if (index !== -1) {
        actualFeatures.splice(index, 1);
      }
    }
    let banner;
    try {
      await sendPacket({
        command: AdbCommand.Connect,
        arg0: version,
        arg1: maxPayloadSize,
        // The terminating `;` is required in formal definition
        // But ADB daemon (all versions) can still work without it
        payload: encodeUtf8(`host::features=${actualFeatures.join(",")}`)
      });
      banner = await resolver.promise;
    } finally {
      abortController.abort();
      writer.releaseLock();
      await pipe;
    }
    return new _AdbDaemonTransport({
      serial,
      connection,
      version,
      maxPayloadSize,
      banner,
      features: actualFeatures,
      initialDelayedAckBytes,
      ...options
    });
  }
  #connection;
  get connection() {
    return this.#connection;
  }
  #dispatcher;
  #serial;
  get serial() {
    return this.#serial;
  }
  #protocolVersion;
  get protocolVersion() {
    return this.#protocolVersion;
  }
  get maxPayloadSize() {
    return this.#dispatcher.options.maxPayloadSize;
  }
  #banner;
  get banner() {
    return this.#banner;
  }
  get disconnected() {
    return this.#dispatcher.disconnected;
  }
  #clientFeatures;
  get clientFeatures() {
    return this.#clientFeatures;
  }
  constructor({ serial, connection, version, banner, features = ADB_DAEMON_DEFAULT_FEATURES, initialDelayedAckBytes, ...options }) {
    this.#serial = serial;
    this.#connection = connection;
    this.#banner = AdbBanner.parse(banner);
    this.#clientFeatures = features;
    if (features.includes(AdbFeature.DelayedAck)) {
      if (initialDelayedAckBytes <= 0) {
        throw new TypeError("`initialDelayedAckBytes` must be greater than 0 when DelayedAck feature is enabled.");
      }
      if (!this.#banner.features.includes(AdbFeature.DelayedAck)) {
        initialDelayedAckBytes = 0;
      }
    } else {
      initialDelayedAckBytes = 0;
    }
    let calculateChecksum2;
    let appendNullToServiceString;
    if (version >= ADB_DAEMON_VERSION_OMIT_CHECKSUM) {
      calculateChecksum2 = false;
      appendNullToServiceString = false;
    } else {
      calculateChecksum2 = true;
      appendNullToServiceString = true;
    }
    this.#dispatcher = new AdbPacketDispatcher(connection, {
      calculateChecksum: calculateChecksum2,
      appendNullToServiceString,
      initialDelayedAckBytes,
      ...options
    });
    this.#protocolVersion = version;
  }
  connect(service) {
    return this.#dispatcher.createSocket(service);
  }
  addReverseTunnel(handler, address) {
    if (!address) {
      const id = Math.random().toString().substring(2);
      address = `localabstract:reverse_${id}`;
    }
    this.#dispatcher.addReverseTunnel(address, handler);
    return address;
  }
  removeReverseTunnel(address) {
    this.#dispatcher.removeReverseTunnel(address);
  }
  clearReverseTunnels() {
    this.#dispatcher.clearReverseTunnels();
  }
  close() {
    return this.#dispatcher.close();
  }
};

// node_modules/@yume-chan/adb/esm/server/observer.js
function unorderedRemove(array, index) {
  if (index < 0 || index >= array.length) {
    return;
  }
  array[index] = array[array.length - 1];
  array.length -= 1;
}

// node_modules/@yume-chan/adb-daemon-webusb/esm/error.js
var DeviceBusyError = class extends Error {
  constructor(cause) {
    super("The device is already in used by another program", {
      cause
    });
  }
};

// node_modules/@yume-chan/adb-daemon-webusb/esm/utils.js
function isErrorName(e, name) {
  return typeof e === "object" && e !== null && "name" in e && e.name === name;
}
function isUsbInterfaceFilter(filter) {
  return filter.classCode !== void 0 && filter.subclassCode !== void 0 && filter.protocolCode !== void 0;
}
function matchUsbInterfaceFilter(alternate, filter) {
  return alternate.interfaceClass === filter.classCode && alternate.interfaceSubclass === filter.subclassCode && alternate.interfaceProtocol === filter.protocolCode;
}
function findUsbInterface(device, filter) {
  for (const configuration of device.configurations) {
    for (const interface_ of configuration.interfaces) {
      for (const alternate of interface_.alternates) {
        if (matchUsbInterfaceFilter(alternate, filter)) {
          return { configuration, interface_, alternate };
        }
      }
    }
  }
  return void 0;
}
function padNumber(value) {
  return value.toString(16).padStart(4, "0");
}
function getSerialNumber(device) {
  if (device.serialNumber) {
    return device.serialNumber;
  }
  return padNumber(device.vendorId) + "x" + padNumber(device.productId);
}
function findUsbEndpoints(endpoints) {
  if (endpoints.length === 0) {
    throw new TypeError("No endpoints given");
  }
  let inEndpoint;
  let outEndpoint;
  for (const endpoint of endpoints) {
    switch (endpoint.direction) {
      case "in":
        inEndpoint = endpoint;
        if (outEndpoint) {
          return { inEndpoint, outEndpoint };
        }
        break;
      case "out":
        outEndpoint = endpoint;
        if (inEndpoint) {
          return { inEndpoint, outEndpoint };
        }
        break;
    }
  }
  if (!inEndpoint) {
    throw new TypeError("No input endpoint found.");
  }
  if (!outEndpoint) {
    throw new TypeError("No output endpoint found.");
  }
  throw new Error("unreachable");
}
function matchFilter(device, filter) {
  if (filter.vendorId !== void 0 && device.vendorId !== filter.vendorId) {
    return false;
  }
  if (filter.productId !== void 0 && device.productId !== filter.productId) {
    return false;
  }
  if (filter.serialNumber !== void 0 && getSerialNumber(device) !== filter.serialNumber) {
    return false;
  }
  if (isUsbInterfaceFilter(filter)) {
    return findUsbInterface(device, filter) || false;
  }
  return true;
}
function matchFilters(device, filters, exclusionFilters) {
  if (exclusionFilters && exclusionFilters.length > 0) {
    if (matchFilters(device, exclusionFilters)) {
      return false;
    }
  }
  for (const filter of filters) {
    const result = matchFilter(device, filter);
    if (result) {
      return result;
    }
  }
  return false;
}

// node_modules/@yume-chan/adb-daemon-webusb/esm/device.js
var AdbDefaultInterfaceFilter = {
  classCode: 255,
  subclassCode: 66,
  protocolCode: 1
};
function mergeDefaultAdbInterfaceFilter(filters) {
  if (!filters || filters.length === 0) {
    return [AdbDefaultInterfaceFilter];
  } else {
    return filters.map((filter) => ({
      ...filter,
      classCode: filter.classCode ?? AdbDefaultInterfaceFilter.classCode,
      subclassCode: filter.subclassCode ?? AdbDefaultInterfaceFilter.subclassCode,
      protocolCode: filter.protocolCode ?? AdbDefaultInterfaceFilter.protocolCode
    }));
  }
}
var AdbDaemonWebUsbConnection = class {
  #device;
  get device() {
    return this.#device;
  }
  #inEndpoint;
  get inEndpoint() {
    return this.#inEndpoint;
  }
  #outEndpoint;
  get outEndpoint() {
    return this.#outEndpoint;
  }
  #readable;
  get readable() {
    return this.#readable;
  }
  #writable;
  get writable() {
    return this.#writable;
  }
  constructor(device, inEndpoint, outEndpoint, usbManager) {
    this.#device = device;
    this.#inEndpoint = inEndpoint;
    this.#outEndpoint = outEndpoint;
    let closed2 = false;
    const duplex = new DuplexStreamFactory({
      close: async () => {
        try {
          closed2 = true;
          await device.raw.close();
        } catch {
        }
      },
      dispose: () => {
        closed2 = true;
        usbManager.removeEventListener("disconnect", handleUsbDisconnect);
      }
    });
    function handleUsbDisconnect(e) {
      if (e.device === device.raw) {
        duplex.dispose().catch(unreachable);
      }
    }
    usbManager.addEventListener("disconnect", handleUsbDisconnect);
    this.#readable = duplex.wrapReadable(new ReadableStream2({
      pull: async (controller) => {
        const packet = await this.#transferIn();
        if (packet) {
          controller.enqueue(packet);
        } else {
          controller.close();
        }
      }
    }, { highWaterMark: 0 }));
    const zeroMask = outEndpoint.packetSize - 1;
    this.#writable = pipeFrom(duplex.createWritable(new maybe_consumable_exports.WritableStream({
      write: async (chunk) => {
        try {
          await device.raw.transferOut(outEndpoint.endpointNumber, toLocalUint8Array(chunk));
          if (zeroMask && (chunk.length & zeroMask) === 0) {
            await device.raw.transferOut(outEndpoint.endpointNumber, EmptyUint8Array);
          }
        } catch (e) {
          if (closed2) {
            return;
          }
          throw e;
        }
      }
    })), new AdbPacketSerializeStream());
  }
  async #transferIn() {
    try {
      while (true) {
        const result = await this.#device.raw.transferIn(this.#inEndpoint.endpointNumber, this.#inEndpoint.packetSize);
        if (result.data.byteLength !== 24) {
          continue;
        }
        const buffer2 = new Uint8Array(result.data.buffer);
        const stream = new Uint8ArrayExactReadable(buffer2);
        const packet = AdbPacketHeader.deserialize(stream);
        if (packet.magic !== (packet.command ^ 4294967295)) {
          continue;
        }
        if (packet.payloadLength !== 0) {
          const result2 = await this.#device.raw.transferIn(this.#inEndpoint.endpointNumber, packet.payloadLength);
          packet.payload = new Uint8Array(result2.data.buffer);
        } else {
          packet.payload = EmptyUint8Array;
        }
        return packet;
      }
    } catch (e) {
      if (isErrorName(e, "NetworkError")) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 100);
        });
        if (closed) {
          return void 0;
        }
      }
      throw e;
    }
  }
};
var AdbDaemonWebUsbDevice = class _AdbDaemonWebUsbDevice {
  static DeviceBusyError = DeviceBusyError;
  #interface;
  #usbManager;
  #raw;
  get raw() {
    return this.#raw;
  }
  #serial;
  get serial() {
    return this.#serial;
  }
  get name() {
    return this.#raw.productName;
  }
  /**
   * Create a new instance of `AdbDaemonWebUsbConnection` using a specified `USBDevice` instance
   *
   * @param device The `USBDevice` instance obtained elsewhere.
   * @param filters The filters to use when searching for ADB interface. Defaults to {@link ADB_DEFAULT_DEVICE_FILTER}.
   */
  constructor(device, interface_, usbManager) {
    this.#raw = device;
    this.#serial = getSerialNumber(device);
    this.#interface = interface_;
    this.#usbManager = usbManager;
  }
  async #claimInterface() {
    if (!this.#raw.opened) {
      await this.#raw.open();
    }
    const { configuration, interface_, alternate } = this.#interface;
    if (this.#raw.configuration?.configurationValue !== configuration.configurationValue) {
      await this.#raw.selectConfiguration(configuration.configurationValue);
    }
    if (!interface_.claimed) {
      try {
        await this.#raw.claimInterface(interface_.interfaceNumber);
      } catch (e) {
        if (isErrorName(e, "NetworkError")) {
          throw new _AdbDaemonWebUsbDevice.DeviceBusyError(e);
        }
        throw e;
      }
    }
    if (interface_.alternate.alternateSetting !== alternate.alternateSetting) {
      await this.#raw.selectAlternateInterface(interface_.interfaceNumber, alternate.alternateSetting);
    }
    return findUsbEndpoints(alternate.endpoints);
  }
  /**
   * Open the device and create a new connection to the ADB Daemon.
   */
  async connect() {
    const { inEndpoint, outEndpoint } = await this.#claimInterface();
    return new AdbDaemonWebUsbConnection(this, inEndpoint, outEndpoint, this.#usbManager);
  }
};

// node_modules/@yume-chan/adb-daemon-webusb/esm/observer.js
var AdbDaemonWebUsbDeviceObserver = class _AdbDaemonWebUsbDeviceObserver {
  static async create(usb, options = {}) {
    const devices = await usb.getDevices();
    return new _AdbDaemonWebUsbDeviceObserver(usb, devices, options);
  }
  #filters;
  #exclusionFilters;
  #usbManager;
  #onDeviceAdd = new EventEmitter();
  onDeviceAdd = this.#onDeviceAdd.event;
  #onDeviceRemove = new EventEmitter();
  onDeviceRemove = this.#onDeviceRemove.event;
  #onListChange = new StickyEventEmitter();
  onListChange = this.#onListChange.event;
  current = [];
  constructor(usb, initial, options = {}) {
    this.#filters = mergeDefaultAdbInterfaceFilter(options.filters);
    this.#exclusionFilters = options.exclusionFilters;
    this.#usbManager = usb;
    this.current = initial.map((device) => this.#convertDevice(device)).filter((device) => !!device);
    this.#onListChange.fire(this.current);
    this.#usbManager.addEventListener("connect", this.#handleConnect);
    this.#usbManager.addEventListener("disconnect", this.#handleDisconnect);
  }
  #convertDevice(device) {
    const interface_ = matchFilters(device, this.#filters, this.#exclusionFilters);
    if (!interface_) {
      return void 0;
    }
    return new AdbDaemonWebUsbDevice(device, interface_, this.#usbManager);
  }
  #handleConnect = (e) => {
    const device = this.#convertDevice(e.device);
    if (!device) {
      return;
    }
    if (this.current.some((item) => item.raw === device.raw)) {
      return;
    }
    const next = this.current.slice();
    next.push(device);
    this.current = next;
    this.#onDeviceAdd.fire([device]);
    this.#onListChange.fire(this.current);
  };
  #handleDisconnect = (e) => {
    const index = this.current.findIndex((device) => device.raw === e.device);
    if (index !== -1) {
      const device = this.current[index];
      const next = this.current.slice();
      unorderedRemove(next, index);
      this.current = next;
      this.#onDeviceRemove.fire([device]);
      this.#onListChange.fire(this.current);
    }
  };
  stop() {
    this.#usbManager.removeEventListener("connect", this.#handleConnect);
    this.#usbManager.removeEventListener("disconnect", this.#handleDisconnect);
    this.#onDeviceAdd.dispose();
    this.#onDeviceRemove.dispose();
    this.#onListChange.dispose();
  }
};

// node_modules/@yume-chan/adb-daemon-webusb/esm/manager.js
var AdbDaemonWebUsbDeviceManager = class _AdbDaemonWebUsbDeviceManager {
  /**
   * Gets the instance of {@link AdbDaemonWebUsbDeviceManager} using browser WebUSB implementation.
   *
   * May be `undefined` if current runtime does not support WebUSB.
   */
  static BROWSER = /* @__PURE__ */ (() => typeof globalThis.navigator !== "undefined" && globalThis.navigator.usb ? new _AdbDaemonWebUsbDeviceManager(globalThis.navigator.usb) : void 0)();
  #usbManager;
  /**
   * Create a new instance of {@link AdbDaemonWebUsbDeviceManager} using the specified WebUSB implementation.
   * @param usbManager A WebUSB compatible interface.
   */
  constructor(usbManager) {
    this.#usbManager = usbManager;
  }
  /**
   * Call `USB#requestDevice()` to prompt the user to select a device.
   */
  async requestDevice(options = {}) {
    const filters = mergeDefaultAdbInterfaceFilter(options.filters);
    try {
      const device = await this.#usbManager.requestDevice({
        filters,
        exclusionFilters: options.exclusionFilters
      });
      const interface_ = matchFilters(device, filters, options.exclusionFilters);
      if (!interface_) {
        return void 0;
      }
      this.#usbManager.dispatchEvent(new USBConnectionEvent("connect", { device }));
      return new AdbDaemonWebUsbDevice(device, interface_, this.#usbManager);
    } catch (e) {
      if (isErrorName(e, "NotFoundError")) {
        return void 0;
      }
      throw e;
    }
  }
  /**
   * Get all connected and requested devices that match the specified filters.
   */
  async getDevices(options = {}) {
    const filters = mergeDefaultAdbInterfaceFilter(options.filters);
    const devices = await this.#usbManager.getDevices();
    const result = [];
    for (const device of devices) {
      const interface_ = matchFilters(device, filters, options.exclusionFilters);
      if (interface_) {
        result.push(new AdbDaemonWebUsbDevice(device, interface_, this.#usbManager));
      }
    }
    return result;
  }
  trackDevices(options = {}) {
    return AdbDaemonWebUsbDeviceObserver.create(this.#usbManager, options);
  }
};

// node_modules/@yume-chan/adb-credential-web/esm/index.js
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("Tango", 1);
    request.onerror = () => {
      reject(request.error);
    };
    request.onupgradeneeded = () => {
      const db = request.result;
      db.createObjectStore("Authentication", { autoIncrement: true });
    };
    request.onsuccess = () => {
      const db = request.result;
      resolve(db);
    };
  });
}
async function saveKey(key) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("Authentication", "readwrite");
    const store = transaction.objectStore("Authentication");
    const putRequest = store.add(key);
    putRequest.onerror = () => {
      reject(putRequest.error);
    };
    putRequest.onsuccess = () => {
      resolve();
    };
    transaction.onerror = () => {
      reject(transaction.error);
    };
    transaction.oncomplete = () => {
      db.close();
    };
  });
}
async function getAllKeys() {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("Authentication", "readonly");
    const store = transaction.objectStore("Authentication");
    const getRequest = store.getAll();
    getRequest.onerror = () => {
      reject(getRequest.error);
    };
    getRequest.onsuccess = () => {
      resolve(getRequest.result);
    };
    transaction.onerror = () => {
      reject(transaction.error);
    };
    transaction.oncomplete = () => {
      db.close();
    };
  });
}
var AdbWebCredentialStore = class {
  #appName;
  constructor(appName = "Tango") {
    this.#appName = appName;
  }
  /**
   * Generates a RSA private key and store it into LocalStorage.
   *
   * Calling this method multiple times will overwrite the previous key.
   *
   * @returns The private key in PKCS #8 format.
   */
  async generateKey() {
    const { privateKey: cryptoKey } = await crypto.subtle.generateKey({
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      // 65537
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-1"
    }, true, ["sign", "verify"]);
    const privateKey = new Uint8Array(await crypto.subtle.exportKey("pkcs8", cryptoKey));
    await saveKey(privateKey);
    return {
      buffer: privateKey,
      name: `${this.#appName}@${globalThis.location.hostname}`
    };
  }
  /**
   * Yields the stored RSA private key.
   *
   * This method returns a generator, so `for await...of...` loop should be used to read the key.
   */
  async *iterateKeys() {
    for (const key of await getAllKeys()) {
      yield {
        buffer: key,
        name: `${this.#appName}@${globalThis.location.hostname}`
      };
    }
  }
};

// node_modules/@zip.js/zip.js/lib/zip-core-base.js
init_configuration();

// node_modules/@zip.js/zip.js/lib/core/codec-worker-web.js
init_constants();
init_array();
init_error();
init_codec_stream();
init_codec_worker();
var MODULE_WORKER_OPTIONS = { type: "module" };
var ERROR_EVENT_TYPE = "error";
var MESSAGE_ERROR_EVENT_TYPE = "messageerror";
var ABORT_EVENT_TYPE = "abort";
var webWorkerSource;
var webWorkerURI;
var webWorkerOptions;
var transferStreamsSupported = true;
try {
  transferStreamsSupported = typeof structuredClone == FUNCTION_TYPE && structuredClone(new DOMException("", "AbortError")).code !== UNDEFINED_VALUE;
} catch {
}
setWebWorkerBackend(createWebWorkerInterface);
function createWebWorkerInterface(workerData, config2) {
  const { baseURI, chunkSize, workerStartupTimeout } = config2;
  let { wasmURI } = config2;
  if (!workerData.interface) {
    if (typeof wasmURI == FUNCTION_TYPE) {
      wasmURI = wasmURI();
    }
    let worker;
    try {
      worker = getWebWorker(workerData.workerURI, baseURI, workerData);
    } catch {
      disableWebWorker(workerData);
      return createWorkerInterface(workerData, config2);
    }
    Object.assign(workerData, {
      worker,
      workerAlive: false,
      terminated: false,
      startupError: null,
      interface: {
        run: async () => {
          try {
            return await runWebWorker(workerData, { chunkSize, wasmURI, baseURI, workerStartupTimeout });
          } catch (error) {
            if (error && error.workerStartupFailed) {
              disableWebWorker(workerData);
              releaseWorkerStreams(workerData);
              return runWorker(workerData, config2);
            }
            if (error && error.codecImportFailed) {
              if (workerData.reader) {
                releaseWorkerStreams(workerData);
                return runWorker(workerData, config2);
              }
              workerData.onTaskFinished();
            }
            throw error;
          }
        }
      }
    });
  }
  return workerData.interface;
}
async function runWebWorker(workerData, config2) {
  if (!workerData.worker) {
    const { startupError } = workerData;
    workerData.startupError = null;
    const error = startupError || new Error(ERR_WORKER_STARTUP_TIMEOUT);
    error.workerStartupFailed = true;
    throw error;
  }
  let resolveResult, rejectResult;
  const result = new Promise((resolve, reject) => {
    resolveResult = resolve;
    rejectResult = (error) => {
      const { outputSize, workerOptions } = workerData;
      workerOptions.outputSize = outputSize;
      if (isErrorObject(error)) {
        try {
          error.outputSize = outputSize;
        } catch {
        }
      }
      reject(error);
    };
  });
  Object.assign(workerData, {
    reader: null,
    writer: null,
    outputSize: 0,
    destinationFailed: false,
    destinationError: null,
    resolveResult,
    rejectResult,
    result
  });
  const { readable, options } = workerData;
  const { writable, closed: closed2, abortPipe } = watchClosedStream(workerData.writable, workerData);
  let streamsTransferred;
  try {
    streamsTransferred = sendMessage({
      type: MESSAGE_START,
      options,
      config: config2,
      readable,
      writable
    }, workerData);
  } catch (error) {
    abortPipe();
    try {
      await closed2;
    } catch {
    }
    workerData.onTaskFinished();
    throw error;
  }
  if (!streamsTransferred) {
    Object.assign(workerData, {
      reader: readable.getReader(),
      writer: writable.getWriter()
    });
  }
  const { workerStartupTimeout } = config2;
  if (!workerData.workerAlive && Number.isFinite(workerStartupTimeout) && workerStartupTimeout >= 0) {
    workerData.startupTimeout = setTimeout(() => onStartupTimeout(workerData), workerStartupTimeout);
  }
  try {
    const resultValue = await result;
    await closeWritable();
    await closed2;
    return resultValue;
  } catch (error) {
    await closeWritable();
    abortPipe();
    try {
      await closed2;
    } catch {
    }
    const { outputSize, workerOptions, destinationFailed, destinationError } = workerData;
    workerOptions.outputSize = outputSize;
    const workerFailed = isErrorObject(error) && (error.codecImportFailed || error.workerStartupFailed);
    const reportedError = destinationFailed && !workerFailed ? destinationError : error;
    if (isErrorObject(reportedError)) {
      try {
        reportedError.outputSize = outputSize;
      } catch {
      }
    }
    throw reportedError;
  }
  async function closeWritable() {
    if (!streamsTransferred && !writable.locked) {
      try {
        await writable.getWriter().close();
      } catch {
      }
    }
  }
}
function watchClosedStream(writableSource, workerData) {
  const abortController = new AbortController();
  let aborting;
  const { writable, readable } = new TransformStream({
    transform(chunk, controller) {
      workerData.outputSize += chunk.length;
      controller.enqueue(chunk);
    }
  });
  const closed2 = readable.pipeTo(writableSource, { preventClose: true, preventAbort: true, signal: abortController.signal });
  closed2.catch((error) => {
    if (!aborting) {
      Object.assign(workerData, { destinationFailed: true, destinationError: error });
    }
  });
  const { signal } = workerData.workerOptions.streamOptions;
  if (signal) {
    const onAbort = () => abortController.abort(signal.reason);
    const removeAbortListener = () => signal.removeEventListener(ABORT_EVENT_TYPE, onAbort);
    signal.addEventListener(ABORT_EVENT_TYPE, onAbort);
    closed2.then(removeAbortListener, removeAbortListener);
  }
  return {
    writable,
    closed: closed2,
    abortPipe: () => {
      aborting = true;
      abortController.abort();
    }
  };
}
function releaseWorkerStreams(workerData) {
  const { reader } = workerData;
  if (reader) {
    reader.releaseLock();
  }
  workerData.reader = null;
  workerData.writer = null;
}
function terminateWorker(workerData) {
  const { worker } = workerData;
  if (worker) {
    try {
      worker.terminate();
    } catch {
    }
  }
  workerData.interface = null;
}
function getWebWorker(url, baseURI, workerData, isModuleType, useBlobURI = true) {
  const { createWorker } = workerData;
  let worker, resolvedURI, resolvedOptions;
  if (createWorker) {
    worker = createWorker();
  } else if (webWorkerURI === UNDEFINED_VALUE || webWorkerSource !== url) {
    const isFunctionURI = typeof url == FUNCTION_TYPE;
    if (isFunctionURI) {
      resolvedURI = url(useBlobURI);
    } else {
      resolvedURI = url;
    }
    const isDataURI = resolvedURI.startsWith("data:");
    const isBlobURI = resolvedURI.startsWith("blob:");
    if (isDataURI || isBlobURI) {
      if (isModuleType === UNDEFINED_VALUE) {
        isModuleType = false;
      }
      if (isModuleType) {
        resolvedOptions = MODULE_WORKER_OPTIONS;
      }
      try {
        worker = new Worker(resolvedURI, resolvedOptions);
      } catch (error) {
        if (isBlobURI) {
          try {
            URL.revokeObjectURL(resolvedURI);
          } catch {
          }
        }
        if (isFunctionURI && isBlobURI) {
          return getWebWorker(url, baseURI, workerData, isModuleType, false);
        } else if (!isModuleType) {
          return getWebWorker(url, baseURI, workerData, true, false);
        } else {
          throw error;
        }
      }
    } else {
      if (isModuleType === UNDEFINED_VALUE) {
        isModuleType = true;
      }
      if (isModuleType) {
        resolvedOptions = MODULE_WORKER_OPTIONS;
      }
      try {
        resolvedURI = new URL(resolvedURI, baseURI);
      } catch {
      }
      try {
        worker = new Worker(resolvedURI, resolvedOptions);
      } catch (error) {
        if (isModuleType) {
          return getWebWorker(url, baseURI, workerData, false, useBlobURI);
        } else {
          throw error;
        }
      }
    }
    webWorkerSource = url;
    webWorkerURI = resolvedURI;
    webWorkerOptions = resolvedOptions;
  } else {
    worker = new Worker(webWorkerURI, webWorkerOptions);
  }
  worker.addEventListener(MESSAGE_EVENT_TYPE, (event) => {
    workerData.workerAlive = true;
    clearStartupTimeout(workerData);
    onMessage(event, workerData);
  });
  worker.addEventListener(ERROR_EVENT_TYPE, (event) => onWorkerError(event, workerData));
  worker.addEventListener(MESSAGE_ERROR_EVENT_TYPE, (event) => onWorkerError(event, workerData));
  return worker;
}
function onStartupTimeout(workerData) {
  workerData.startupTimeout = null;
  if (workerData.workerAlive) {
    return;
  }
  const { rejectResult, writer } = workerData;
  terminateWorker(workerData);
  workerData.worker = null;
  if (rejectResult) {
    const error = new Error(ERR_WORKER_STARTUP_TIMEOUT);
    error.workerStartupFailed = true;
    rejectResult(error);
    if (writer) {
      writer.releaseLock();
    }
  }
}
function clearStartupTimeout(workerData) {
  const { startupTimeout } = workerData;
  if (startupTimeout) {
    clearTimeout(startupTimeout);
    workerData.startupTimeout = null;
  }
}
function onWorkerError(event, workerData) {
  if (event.preventDefault) {
    event.preventDefault();
  }
  clearStartupTimeout(workerData);
  const { workerAlive, rejectResult, writer, onTaskFinished } = workerData;
  terminateWorker(workerData);
  if (!workerAlive) {
    workerData.worker = null;
  }
  let error = event.error || new Error(event.message || ERROR_EVENT_TYPE);
  if (!workerAlive) {
    error = Object.assign(new Error(error.message || ERROR_EVENT_TYPE), { workerStartupFailed: true });
    workerData.startupError = error;
  }
  if (rejectResult) {
    rejectResult(error);
    if (writer) {
      writer.releaseLock();
    }
    if (workerAlive) {
      onTaskFinished();
    }
  }
}
function sendMessage(message, { worker, writer, transferStreams, workerAlive }) {
  try {
    const { value, readable, writable } = message;
    const transferables = [];
    if (value) {
      message.value = toExactUint8Array(value);
      transferables.push(message.value.buffer);
    }
    if (transferStreams && transferStreamsSupported && workerAlive) {
      if (readable) {
        transferables.push(readable);
      }
      if (writable) {
        transferables.push(writable);
      }
    } else {
      message.readable = message.writable = null;
    }
    if (transferables.length) {
      try {
        worker.postMessage(message, transferables);
        return true;
      } catch {
        transferStreamsSupported = false;
        message.readable = message.writable = null;
        worker.postMessage(message);
      }
    } else {
      worker.postMessage(message);
    }
  } catch (error) {
    if (writer) {
      writer.releaseLock();
    }
    throw error;
  }
}
async function onMessage({ data }, workerData) {
  const { type, value, messageId, result, error, errorValue } = data;
  const { reader, writer, resolveResult, rejectResult, onTaskFinished, generation } = workerData;
  const stale = () => workerData.generation != generation;
  try {
    if (error) {
      fail(getResponseError(error, errorValue));
    } else {
      if (type == MESSAGE_PULL) {
        const { value: value2, done } = await reader.read();
        if (!stale()) {
          sendMessage({ type: MESSAGE_DATA, value: value2, done, messageId }, workerData);
        }
      }
      if (type == MESSAGE_DATA) {
        const chunk = new Uint8Array(value);
        await writer.ready;
        await writer.write(chunk);
        if (!stale()) {
          sendMessage({ type: MESSAGE_ACK_DATA, messageId }, workerData);
        }
      }
      if (type == MESSAGE_CLOSE) {
        succeed(result);
      }
    }
  } catch (error2) {
    if (!stale()) {
      terminateWorker(workerData);
      fail(error2);
    }
  }
  function fail(error2) {
    if (!stale()) {
      rejectResult(error2);
      releaseWriter();
      if (!(isErrorObject(error2) && error2.codecImportFailed)) {
        onTaskFinished();
      }
    }
  }
  function succeed(result2) {
    if (!stale()) {
      resolveResult(result2);
      releaseWriter();
      onTaskFinished();
    }
  }
  function releaseWriter() {
    if (writer) {
      writer.releaseLock();
    }
  }
}
function getResponseError(errorData, errorValue) {
  const { message, stack, code, name, outputSize, cause, codecImportFailed } = errorData;
  let responseError;
  if (errorValue) {
    responseError = errorValue.value;
  } else {
    responseError = Object.assign(new Error(message), { stack, code, name });
  }
  if (isErrorObject(responseError)) {
    try {
      if (outputSize !== UNDEFINED_VALUE) {
        responseError.outputSize = outputSize;
      }
      if (codecImportFailed) {
        responseError.codecImportFailed = true;
      }
      if (cause) {
        if (!isErrorObject(responseError.cause)) {
          responseError.cause = Object.assign(new Error(cause.message), { name: cause.name });
        }
        if (cause.code !== UNDEFINED_VALUE && responseError.cause.code !== cause.code) {
          responseError.cause.code = cause.code;
        }
      }
      if (errorValue) {
        if (responseError.name !== name) {
          responseError.name = name;
        }
        if (responseError.code !== code) {
          responseError.code = code;
        }
      }
    } catch {
    }
  }
  return responseError;
}

// node_modules/@zip.js/zip.js/lib/zip-core-reader.js
init_zip_reader();

// node_modules/@zip.js/zip.js/lib/core/zip-writer.js
init_constants();
init_configuration();
init_codec_registry();
init_codec_worker();
init_codec_pool();
init_io();
init_encode_text();
init_array();
init_warnings();
init_compatible_streams();
init_error();
init_zip_entry();
init_options();
var ERR_DUPLICATED_NAME = "File already exists";
var ERR_INVALID_COMMENT = "Zip file comment exceeds 64KB";
var ERR_INVALID_COMMENT_TYPE = "Invalid zip file comment (must be a Uint8Array)";
var ERR_INVALID_ENTRY_COMMENT = "File entry comment exceeds 64KB";
var ERR_INVALID_ENTRY_COMMENT_TYPE = "Invalid file entry comment (must be a string)";
var ERR_INVALID_DATE = "Invalid date (must be a valid Date instance)";
var ERR_INVALID_ENTRY_NAME = "File entry name exceeds 64KB";
var ERR_INVALID_VERSION = "Version exceeds 65535";
var ERR_INVALID_ENCRYPTION_STRENGTH = "The strength must equal 1, 2, or 3";
var ERR_UNSUPPORTED_ENCRYPTION_USDZ = "Encryption is not supported in USDZ files";
var ERR_UNSUPPORTED_SPLIT_USDZ = "Split zip files are not supported in USDZ files";
var ERR_UNSUPPORTED_ENCRYPTION_PASS_THROUGH = "Encryption is not supported when the 'passThrough' option is set to true (use 'compressed' instead)";
var ERR_INVALID_EXTRAFIELD = "Invalid extra field (must be a Map)";
var ERR_INVALID_EXTRAFIELD_TYPE = "Invalid extra field type (must be integer 0..65535)";
var ERR_INVALID_EXTRAFIELD_DATA_TYPE = "Invalid extra field data (must be a Uint8Array)";
var ERR_INVALID_EXTRAFIELD_DATA = "Extra field data exceeds 64KB";
var MIN_UNIX_TIME = -2147483648;
var MAX_UNIX_TIME = 2147483647;
var MIN_NTFS_TIME = BigInt(0);
var MAX_NTFS_TIME = BigInt("0x7fffffffffffffff");
var ERR_UNSUPPORTED_FORMAT = "Zip64 is not supported (set the 'zip64' option to 'true')";
var ERR_UNDEFINED_UNCOMPRESSED_SIZE = "Undefined uncompressed size";
var ERR_UNDEFINED_COMPRESSION_METHOD = "Undefined compression method";
var ERR_UNDEFINED_CRC32 = "Undefined CRC32";
var ERR_UNDEFINED_READER = "Undefined reader";
var ERR_INVALID_READER = "Invalid reader (must be a Reader instance, a ReadableStream instance, or an object with a 'readable' property)";
var ERR_ZIP_NOT_EMPTY = "Zip file not empty";
var ERR_INVALID_UID = "Invalid uid (must be integer 0..2^32-1)";
var ERR_INVALID_GID = "Invalid gid (must be integer 0..2^32-1)";
var ERR_INVALID_UNIX_MODE = "Invalid UNIX mode (must be integer 0..65535)";
var ERR_INVALID_UNIX_EXTRA_FIELD_TYPE = "Invalid unixExtraFieldType (must be 'infozip' or 'unix')";
var ERR_INVALID_UNIX_ID_SIZE = "uid/gid must be 0..65535 for unixExtraFieldType 'unix' (use 'infozip' for larger ids)";
var ERR_INVALID_MSDOS_ATTRIBUTES = "Invalid msdosAttributesRaw (must be integer 0..255)";
var ERR_INVALID_MSDOS_DATA = "Invalid msdosAttributes (must be an object with boolean flags)";
var ERR_INVALID_LEVEL = "Invalid level (must be integer 0..9)";
var ERR_INVALID_SIGNATURE_DATA = "Signature data exceeds 64KB";
var ERR_INVALID_ENTRY = "Invalid entry option (must be an entry returned by ZipReader#getEntries())";
var ERR_ZIP_CRYPTO_LAST_MOD_DATE = "The last modification date of an entry encrypted with ZipCrypto cannot be changed when passThrough is set";
var WARNING_COMPRESSION_UNAVAILABLE = "compression unavailable";
var WARNING_CLAMPED_LAST_MODIFICATION_DATE = "clamped last modification date";
var EXTRAFIELD_DATA_AES = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);
var EXTRAFIELD_OFFSET_AES_VENDOR_VERSION = 4;
var EXTRAFIELD_OFFSET_AES_COMPRESSION_METHOD = 9;
var EXTRAFIELD_USDZ_MAX_LENGTH = 67;
var MIN_PRINTABLE_ASCII_CHARACTER_CODE = 32;
var MAX_PRINTABLE_ASCII_CHARACTER_CODE = 126;
var VENDOR_VERSION_AE_12 = 1;
var INFOZIP_EXTRA_FIELD_TYPE = "infozip";
var UNIX_EXTRA_FIELD_TYPE = "unix";
var LEVEL_BY_BITFLAG_LEVEL = [8, 9, 5, 3];
var MAX_LEVEL = 9;
var workers = 0;
var pendingEntries = [];
var ZipWriter = class {
  constructor(writer, options = {}) {
    writer = new GenericWriter(writer);
    const { availableSize = INFINITY_VALUE, maxSize = INFINITY_VALUE } = writer;
    const addSplitZipSignature = availableSize > 0 && availableSize !== INFINITY_VALUE && maxSize > 0 && maxSize !== INFINITY_VALUE;
    if (addSplitZipSignature && options[OPTION_USDZ]) {
      throw new Error(ERR_UNSUPPORTED_SPLIT_USDZ);
    }
    Object.assign(this, {
      writer,
      addSplitZipSignature,
      options,
      fileEntries: /* @__PURE__ */ new Map(),
      filenames: /* @__PURE__ */ new Set(),
      offset: options[OPTION_OFFSET] === UNDEFINED_VALUE ? writer.size || writer.writable.size || 0 : options[OPTION_OFFSET],
      initialOffset: options[OPTION_OFFSET] === UNDEFINED_VALUE ? 0 : options[OPTION_OFFSET] - (writer.size || writer.writable.size || 0),
      pendingAddFileCalls: /* @__PURE__ */ new Set(),
      pendingErrors: [],
      warnings: [],
      bufferedWrites: 0,
      directWrites: 0,
      lastFileEntry: UNDEFINED_VALUE,
      archiveClosed: false
    });
  }
  prependZip(reader) {
    return watchPromiseError(this, prependZipEntries(this, reader));
  }
  appendZip(reader) {
    return watchPromiseError(this, this.appendZipEntries(reader));
  }
  async appendZipEntries(reader) {
    const zipWriter = this;
    const { pendingAddFileCalls, filenames, fileEntries } = zipWriter;
    while (pendingAddFileCalls.size) {
      await Promise.allSettled(Array.from(pendingAddFileCalls));
    }
    let resolveAppendZip;
    const promiseAppendZip = new Promise((resolve) => resolveAppendZip = resolve);
    pendingAddFileCalls.add(promiseAppendZip);
    const appendedFilenames = [];
    let releaseLockWriter;
    try {
      reader = new GenericReader(reader);
      await initStream(reader);
      if (reader.size === UNDEFINED_VALUE || !reader.readUint8Array) {
        reader = new BlobReader(await streamToBlob(reader.readable));
        await initStream(reader);
      }
      const { ZipReader: ZipReader2 } = await Promise.resolve().then(() => (init_zip_reader(), zip_reader_exports));
      const zipReader = new ZipReader2(reader);
      const entries = await zipReader.getEntries();
      await zipReader.close();
      await initStream(zipWriter.writer);
      const { directoryOffset } = zipReader;
      entries.forEach(({ filename }) => {
        if (filenames.has(filename)) {
          throw new Error(ERR_DUPLICATED_NAME);
        }
        filenames.add(filename);
        appendedFilenames.push(filename);
      });
      zipWriter.writerLocked = true;
      const { lockWriter } = zipWriter;
      zipWriter.lockWriter = new Promise((resolve) => releaseLockWriter = () => {
        zipWriter.writerLocked = false;
        resolve();
      });
      await lockWriter;
      if (zipWriter.addSplitZipSignature) {
        delete zipWriter.addSplitZipSignature;
        if (!await startsWithSplitZipSignature2(reader)) {
          await writeData(zipWriter.writer, getSplitZipSignatureArray());
          zipWriter.offset += SPLIT_ZIP_FILE_SIGNATURE_LENGTH;
        }
      }
      const entryPositions = await copyZipData(zipWriter, reader, entries, directoryOffset);
      entries.forEach((entry) => {
        const {
          version,
          rawLastModDate,
          rawFilename,
          bitFlag,
          encrypted,
          uncompressedSize,
          compressedSize,
          extraFieldZip64
        } = entry;
        let {
          compressionMethod,
          rawExtraField
        } = entry;
        const { level, languageEncodingFlag, dataDescriptor } = bitFlag;
        rawExtraField = removeExtraFieldZip64(rawExtraField || EMPTY_UINT8_ARRAY);
        if (entry.extraFieldAES) {
          compressionMethod = COMPRESSION_METHOD_AES;
        }
        const extraFieldLength = getLength(rawExtraField);
        const zip64UncompressedSize = Boolean(extraFieldZip64) && extraFieldZip64.uncompressedSize !== UNDEFINED_VALUE;
        const zip64CompressedSize = Boolean(extraFieldZip64) && extraFieldZip64.compressedSize !== UNDEFINED_VALUE;
        const bitFlagValue = getBitFlag(level, languageEncodingFlag, dataDescriptor, encrypted, compressionMethod) & ~BITFLAG_LEVEL | level << 1;
        const {
          headerArray,
          headerView
        } = getHeaderArrayData({
          version,
          bitFlag: bitFlagValue,
          compressionMethod,
          uncompressedSize,
          compressedSize,
          rawLastModDate,
          rawFilename,
          zip64CompressedSize,
          zip64UncompressedSize,
          extraFieldLength
        });
        const { crc32 } = entry;
        if (crc32 !== UNDEFINED_VALUE) {
          setUint322(headerView, HEADER_OFFSET_SIGNATURE, crc32);
        }
        const { offset, diskNumberStart } = entryPositions.get(entry);
        Object.assign(entry, {
          zip64Enabled: true,
          zip64UncompressedSize,
          zip64CompressedSize,
          offset,
          diskNumberStart,
          zip64DiskNumberStart: false,
          rawExtraFieldZip64: EMPTY_UINT8_ARRAY,
          rawExtraFieldAES: EMPTY_UINT8_ARRAY,
          rawExtraFieldExtendedTimestamp: EMPTY_UINT8_ARRAY,
          rawExtraFieldNTFS: EMPTY_UINT8_ARRAY,
          rawExtraFieldUnix: EMPTY_UINT8_ARRAY,
          rawExtraField,
          rawCentralExtraField: EMPTY_UINT8_ARRAY,
          headerArray,
          headerView
        });
        fileEntries.set(entry.filename, entry);
      });
    } catch (error) {
      appendedFilenames.forEach((filename) => filenames.delete(filename));
      throw error;
    } finally {
      resolveAppendZip();
      pendingAddFileCalls.delete(promiseAppendZip);
      if (releaseLockWriter) {
        releaseLockWriter();
      }
    }
  }
  add(name = "", reader, options = {}) {
    const zipWriter = this;
    const { pendingAddFileCalls } = zipWriter;
    const promiseAddFile = addFileEntry(zipWriter, name, reader, options);
    pendingAddFileCalls.add(promiseAddFile);
    const deletePendingAddFileCall = () => pendingAddFileCalls.delete(promiseAddFile);
    Promise.prototype.then.call(promiseAddFile, deletePendingAddFileCall, deletePendingAddFileCall);
    return watchPromiseError(zipWriter, promiseAddFile);
  }
  remove(entry) {
    const { filenames, fileEntries } = this;
    if (typeof entry == STRING_TYPE) {
      entry = fileEntries.get(entry);
    }
    if (entry && entry.filename !== UNDEFINED_VALUE) {
      const { filename } = entry;
      if (filenames.has(filename) && fileEntries.has(filename)) {
        filenames.delete(filename);
        fileEntries.delete(filename);
        return true;
      }
    }
    return false;
  }
  async close(comment = EMPTY_UINT8_ARRAY, options = {}) {
    const zipWriter = this;
    const { pendingAddFileCalls, writer } = this;
    const { writable } = writer;
    if (zipWriter.archiveClosed) {
      return getWriterData(writer);
    }
    if (!(comment instanceof Uint8Array)) {
      throw new Error(ERR_INVALID_COMMENT_TYPE);
    }
    if (getLength(comment) > MAX_16_BITS) {
      throw new Error(ERR_INVALID_COMMENT);
    }
    while (pendingAddFileCalls.size) {
      await Promise.allSettled(Array.from(pendingAddFileCalls));
    }
    await Promise.allSettled(zipWriter.pendingErrors.map((watcher) => watcher.recorded));
    const unobservedWatchers = zipWriter.pendingErrors.filter((watcher) => watcher.failed && !watcher.observed);
    if (unobservedWatchers.length) {
      const unobservedErrors = unobservedWatchers.map((watcher) => watcher.error);
      unobservedWatchers.forEach((watcher) => watcher.observed = true);
      const [error] = unobservedErrors;
      try {
        error.entryErrors = unobservedErrors;
      } catch {
      }
      throw error;
    }
    await closeFile(zipWriter, comment, options);
    zipWriter.archiveClosed = true;
    const preventClose = !ownsWritable(writer) && getOptionValue2(zipWriter, options, OPTION_PREVENT_CLOSE);
    if (!preventClose) {
      await writable.getWriter().close();
    }
    return getWriterData(writer);
  }
  [SYMBOL_ASYNC_DISPOSE]() {
    return this.close();
  }
};
var WatchedPromise = class extends Promise {
  then(onFulfilled, onRejected) {
    const { watcher } = this;
    if (watcher) {
      watcher.observed = true;
    }
    return super.then(onFulfilled, onRejected);
  }
};
function getWriterData(writer) {
  return writer.getData ? writer.getData() : writer.writable;
}
function watchPromiseError(zipWriter, promise) {
  const watchedPromise = new WatchedPromise((resolve, reject) => Promise.prototype.then.call(promise, resolve, reject));
  const watcher = {};
  watchedPromise.watcher = watcher;
  watcher.recorded = Promise.prototype.then.call(
    watchedPromise,
    UNDEFINED_VALUE,
    (error) => Object.assign(watcher, { failed: true, error })
  );
  zipWriter.pendingErrors.push(watcher);
  return watchedPromise;
}
async function prependZipEntries(zipWriter, reader) {
  if (zipWriter.filenames.size) {
    throw new Error(ERR_ZIP_NOT_EMPTY);
  }
  await zipWriter.appendZipEntries(reader);
}
async function addFileEntry(zipWriter, name, reader, options) {
  options = Object.assign({}, options);
  const entry = options[OPTION_ENTRY];
  if (entry !== UNDEFINED_VALUE) {
    const { entryOptions, passThroughOptions } = getSourceEntryOptions(
      entry,
      checkPassThroughOption(getOptionValue2(zipWriter, options, OPTION_PASS_THROUGH)),
      getOptionValue2(zipWriter, options, PROPERTY_NAME_LAST_MODIFICATION_DATE)
    );
    delete options[OPTION_ENTRY];
    options = Object.assign(entryOptions, passThroughOptions, options);
  }
  if (getOptionValue2(zipWriter, options, PROPERTY_NAME_DIRECTORY) && !name.endsWith(DIRECTORY_SIGNATURE)) {
    name += DIRECTORY_SIGNATURE;
  }
  if (zipWriter.filenames.has(name)) {
    throw new Error(ERR_DUPLICATED_NAME);
  }
  zipWriter.filenames.add(name);
  if (workers < getConfiguration().maxWorkers) {
    workers++;
  } else {
    await new Promise((resolve) => pendingEntries.push(resolve));
  }
  try {
    return await addFile(zipWriter, name, reader, options);
  } catch (error) {
    zipWriter.filenames.delete(name);
    throw error;
  } finally {
    const pendingEntry = pendingEntries.shift();
    if (pendingEntry) {
      pendingEntry();
    } else {
      workers--;
    }
  }
}
async function addFile(zipWriter, name, reader, options) {
  const attributesInfo = resolveAttributes(zipWriter, name, options);
  ({ name } = attributesInfo);
  const metadataInfo = resolveMetadata(zipWriter, name, options);
  const { comment } = metadataInfo;
  const extraField = options[PROPERTY_NAME_EXTRA_FIELD];
  zipWriter.fileEntries.set(name, UNDEFINED_VALUE);
  const previousFileEntry = zipWriter.lastFileEntry;
  const pendingFileEntry = {};
  let releaseLockFileEntry;
  if (metadataInfo.resolvedOptions.keepOrder) {
    pendingFileEntry.lockFileEntry = new Promise((resolve) => releaseLockFileEntry = resolve);
  }
  zipWriter.lastFileEntry = pendingFileEntry;
  let fileEntry;
  try {
    const { resolvedOptions } = metadataInfo;
    if (resolvedOptions.level != 0 && resolvedOptions.compressionMethod === UNDEFINED_VALUE && !resolvedOptions.passThroughCompression && !await supportsDeflate(getConfiguration())) {
      resolvedOptions.level = 0;
      addWarning(zipWriter.warnings, WARNING_COMPRESSION_UNAVAILABLE, name);
    }
    const sizesInfo = await resolveSizes(zipWriter, reader, metadataInfo, options);
    ({ reader } = sizesInfo);
    const diskOffset = getDiskOffset2(zipWriter.writer);
    const diskNumber = getDiskNumber(zipWriter.writer);
    let crc32 = options.crc32 === UNDEFINED_VALUE ? options[PROPERTY_NAME_SIGNATURE] : options.crc32;
    const storesAE2 = sizesInfo.resolvedOptions.encrypted && !resolvedOptions.zipCrypto;
    if (resolvedOptions.passThroughCompression && !resolvedOptions.passThroughEncryption && storesAE2) {
      crc32 = UNDEFINED_VALUE;
    }
    if (resolvedOptions.passThroughCompression && reader && !storesAE2 && crc32 === UNDEFINED_VALUE) {
      throw new Error(ERR_UNDEFINED_CRC32);
    }
    options = Object.assign({}, options, attributesInfo.resolvedOptions, metadataInfo.resolvedOptions, sizesInfo.resolvedOptions, {
      signature: options[PROPERTY_NAME_SIGNATURE],
      crc32,
      offset: zipWriter.offset - diskOffset,
      diskNumberStart: diskNumber,
      [OPTION_USDZ]: zipWriter.options[OPTION_USDZ]
    });
    const headerInfo = getHeaderInfo(options);
    if (headerInfo.lastModDateClamped) {
      addWarning(zipWriter.warnings, WARNING_CLAMPED_LAST_MODIFICATION_DATE, name);
    }
    const dataDescriptorInfo = getDataDescriptorInfo(options);
    const metadataSize = getLength(headerInfo.localHeaderArray, dataDescriptorInfo.dataDescriptorArray);
    fileEntry = await getFileEntry(zipWriter, name, reader, {
      headerInfo,
      dataDescriptorInfo,
      metadataSize,
      fileEntry: pendingFileEntry,
      previousFileEntry,
      releaseLockFileEntry
    }, options);
  } catch (error) {
    zipWriter.fileEntries.delete(name);
    throw error;
  } finally {
    if (releaseLockFileEntry) {
      releaseLockFileEntry(previousFileEntry && previousFileEntry.lockFileEntry);
    }
  }
  Object.assign(fileEntry, {
    name,
    comment,
    extraField
  });
  return new Entry(fileEntry);
}
function getSourceEntryOptions(entry, passThrough, lastModDateOverride) {
  if (entry === null || typeof entry != OBJECT_TYPE || Array.isArray(entry)) {
    throw new Error(ERR_INVALID_ENTRY);
  }
  const {
    externalFileAttributes,
    versionMadeBy,
    comment,
    lastModDate,
    rawLastModDate,
    creationDate,
    lastAccessDate,
    uncompressedSize,
    encrypted,
    zipCrypto,
    crc32,
    compressionMethod,
    extraFieldAES,
    extraFieldUnix,
    internalFileAttributes,
    extraField,
    bitFlag,
    directory,
    uid,
    gid
  } = entry;
  const entryOptions = {
    externalFileAttributes,
    versionMadeBy,
    comment,
    lastModDate,
    creationDate,
    lastAccessDate,
    internalFileAttributes,
    directory
  };
  if (bitFlag && bitFlag.languageEncodingFlag) {
    entryOptions[OPTION_USE_UNICODE_FILE_NAMES] = true;
  }
  const userExtraField = getUserExtraField(extraField);
  if (userExtraField) {
    entryOptions[PROPERTY_NAME_EXTRA_FIELD] = userExtraField;
  }
  if (uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE) {
    Object.assign(entryOptions, {
      uid,
      gid,
      unixExtraFieldType: extraFieldUnix ? UNIX_EXTRA_FIELD_TYPE : INFOZIP_EXTRA_FIELD_TYPE
    });
  }
  const passThroughOptions = {};
  if (passThrough && !directory) {
    Object.assign(passThroughOptions, {
      uncompressedSize,
      crc32,
      compressionMethod
    });
    if (passThrough !== PASS_THROUGH_COMPRESSED) {
      Object.assign(passThroughOptions, {
        encrypted,
        zipCrypto,
        encryptionStrength: extraFieldAES ? extraFieldAES.strength : UNDEFINED_VALUE
      });
    }
    if (bitFlag) {
      passThroughOptions.dataDescriptor = bitFlag.dataDescriptor;
      passThroughOptions[OPTION_LEVEL] = LEVEL_BY_BITFLAG_LEVEL[bitFlag.level];
    }
    if (lastModDateOverride === UNDEFINED_VALUE) {
      passThroughOptions.rawLastModDate = rawLastModDate;
    } else if (passThrough !== PASS_THROUGH_COMPRESSED && zipCrypto && (!bitFlag || bitFlag.dataDescriptor) && lastModDateOverride instanceof Date && getDosTimeHighByte(lastModDateOverride) != (rawLastModDate >>> 8 & MAX_8_BITS)) {
      throw new Error(ERR_ZIP_CRYPTO_LAST_MOD_DATE);
    }
  }
  return { entryOptions, passThroughOptions };
}
function getDosTimeHighByte(lastModDate) {
  let dosLastModDate = new Date(Math.ceil(Math.floor(lastModDate.getTime() / 1e3) / 2) * 2e3);
  if (dosLastModDate < MIN_DATE) {
    dosLastModDate = MIN_DATE;
  } else if (dosLastModDate > MAX_DATE) {
    dosLastModDate = MAX_DATE;
  }
  return (dosLastModDate.getHours() << 3 | dosLastModDate.getMinutes() >> 3) & MAX_8_BITS;
}
function resolveAttributes(zipWriter, name, options) {
  let msDosCompatible = getOptionValue2(zipWriter, options, PROPERTY_NAME_MS_DOS_COMPATIBLE);
  let versionMadeBy = getOptionValue2(zipWriter, options, PROPERTY_NAME_VERSION_MADE_BY, msDosCompatible ? VERSION_MADE_BY_MSDOS : VERSION_MADE_BY_UNIX);
  const executable = getOptionValue2(zipWriter, options, PROPERTY_NAME_EXECUTABLE);
  const uid = getNumberOptionValue(zipWriter, options, PROPERTY_NAME_UID);
  const gid = getNumberOptionValue(zipWriter, options, PROPERTY_NAME_GID);
  let unixMode = getNumberOptionValue(zipWriter, options, PROPERTY_NAME_UNIX_MODE);
  let unixExtraFieldType = getOptionValue2(zipWriter, options, OPTION_UNIX_EXTRA_FIELD_TYPE);
  let setuid = getOptionValue2(zipWriter, options, PROPERTY_NAME_SETUID);
  let setgid = getOptionValue2(zipWriter, options, PROPERTY_NAME_SETGID);
  let sticky = getOptionValue2(zipWriter, options, PROPERTY_NAME_STICKY);
  checkIntegerOption(uid, MAX_32_BITS, ERR_INVALID_UID);
  checkIntegerOption(gid, MAX_32_BITS, ERR_INVALID_GID);
  checkIntegerOption(unixMode, MAX_16_BITS, ERR_INVALID_UNIX_MODE);
  if (unixExtraFieldType !== UNDEFINED_VALUE && unixExtraFieldType !== INFOZIP_EXTRA_FIELD_TYPE && unixExtraFieldType !== UNIX_EXTRA_FIELD_TYPE) {
    throw new Error(ERR_INVALID_UNIX_EXTRA_FIELD_TYPE);
  }
  if (unixExtraFieldType === UNIX_EXTRA_FIELD_TYPE && (uid !== UNDEFINED_VALUE && uid > MAX_16_BITS || gid !== UNDEFINED_VALUE && gid > MAX_16_BITS)) {
    throw new Error(ERR_INVALID_UNIX_ID_SIZE);
  }
  if (unixExtraFieldType === UNDEFINED_VALUE && (uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE)) {
    unixExtraFieldType = INFOZIP_EXTRA_FIELD_TYPE;
  }
  let msdosAttributesRaw = getNumberOptionValue(zipWriter, options, PROPERTY_NAME_MSDOS_ATTRIBUTES_RAW);
  let msdosAttributes = getOptionValue2(zipWriter, options, PROPERTY_NAME_MSDOS_ATTRIBUTES);
  const hasUnixMetadata = uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE || unixMode !== UNDEFINED_VALUE || unixExtraFieldType || executable;
  const hasMsDosProvided = msdosAttributesRaw !== UNDEFINED_VALUE || msdosAttributes !== UNDEFINED_VALUE;
  if (hasUnixMetadata) {
    msDosCompatible = false;
    versionMadeBy = versionMadeBy & MAX_8_BITS | VERSION_MADE_BY_UNIX;
  } else if (hasMsDosProvided) {
    msDosCompatible = true;
    versionMadeBy = versionMadeBy & MAX_8_BITS;
  }
  checkIntegerOption(msdosAttributesRaw, MAX_8_BITS, ERR_INVALID_MSDOS_ATTRIBUTES);
  if (msdosAttributes && (typeof msdosAttributes !== OBJECT_TYPE || Array.isArray(msdosAttributes))) {
    throw new Error(ERR_INVALID_MSDOS_DATA);
  }
  if (versionMadeBy > MAX_16_BITS) {
    throw new Error(ERR_INVALID_VERSION);
  }
  let externalFileAttributes = getOptionValue2(zipWriter, options, PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES);
  const externalFileAttributesProvided = externalFileAttributes !== UNDEFINED_VALUE;
  if (!externalFileAttributesProvided) {
    externalFileAttributes = 0;
  }
  if (!options[PROPERTY_NAME_DIRECTORY] && name.endsWith(DIRECTORY_SIGNATURE)) {
    options[PROPERTY_NAME_DIRECTORY] = true;
  }
  const directory = getOptionValue2(zipWriter, options, PROPERTY_NAME_DIRECTORY);
  if (directory) {
    if (!name.endsWith(DIRECTORY_SIGNATURE)) {
      name += DIRECTORY_SIGNATURE;
    }
    if (!externalFileAttributesProvided) {
      externalFileAttributes = FILE_ATTR_MSDOS_DIR_MASK;
      if (!msDosCompatible) {
        externalFileAttributes |= (FILE_ATTR_UNIX_TYPE_DIR | FILE_ATTR_UNIX_EXECUTABLE_MASK | FILE_ATTR_UNIX_DEFAULT_MASK) << 16;
      }
    }
  } else if (!msDosCompatible && !externalFileAttributesProvided) {
    if (executable) {
      externalFileAttributes = (FILE_ATTR_UNIX_EXECUTABLE_MASK | FILE_ATTR_UNIX_DEFAULT_MASK) << 16;
    } else {
      externalFileAttributes = FILE_ATTR_UNIX_DEFAULT_MASK << 16;
    }
  }
  if (!msDosCompatible) {
    const unixModeProvided = unixMode !== UNDEFINED_VALUE || Boolean(setuid || setgid || sticky);
    const defaultUnixMode = externalFileAttributes >> 16 & MAX_16_BITS;
    unixMode = unixMode === UNDEFINED_VALUE ? defaultUnixMode : unixMode & MAX_16_BITS;
    if (setuid) {
      unixMode |= FILE_ATTR_UNIX_SETUID_MASK;
    } else {
      setuid = Boolean(unixMode & FILE_ATTR_UNIX_SETUID_MASK);
    }
    if (setgid) {
      unixMode |= FILE_ATTR_UNIX_SETGID_MASK;
    } else {
      setgid = Boolean(unixMode & FILE_ATTR_UNIX_SETGID_MASK);
    }
    if (sticky) {
      unixMode |= FILE_ATTR_UNIX_STICKY_MASK;
    } else {
      sticky = Boolean(unixMode & FILE_ATTR_UNIX_STICKY_MASK);
    }
    if (!externalFileAttributesProvided || unixModeProvided) {
      if (directory) {
        unixMode = unixMode & ~FILE_ATTR_UNIX_TYPE_MASK | FILE_ATTR_UNIX_TYPE_DIR;
      } else if (!(unixMode & FILE_ATTR_UNIX_TYPE_MASK)) {
        unixMode |= FILE_ATTR_UNIX_TYPE_FILE;
      }
      externalFileAttributes = (unixMode & MAX_16_BITS) << 16 | externalFileAttributes & MAX_16_BITS;
    }
  }
  ({ msdosAttributesRaw, msdosAttributes } = normalizeMsdosAttributes(msdosAttributesRaw, msdosAttributes));
  if (hasMsDosProvided) {
    externalFileAttributes = externalFileAttributes & MAX_32_BITS | msdosAttributesRaw & MAX_8_BITS;
  }
  const unixExternalUpper = externalFileAttributes >> 16 & MAX_16_BITS;
  const symlink = unixMode !== UNDEFINED_VALUE && (unixMode & FILE_ATTR_UNIX_TYPE_MASK) == FILE_ATTR_UNIX_TYPE_SYMLINK;
  return {
    name,
    resolvedOptions: {
      versionMadeBy,
      msDosCompatible: Boolean(msDosCompatible),
      externalFileAttributes,
      unixExternalUpper,
      uid,
      gid,
      unixMode,
      unixExtraFieldType,
      symlink,
      setuid,
      setgid,
      sticky,
      msdosAttributesRaw,
      msdosAttributes
    }
  };
}
function resolveMetadata(zipWriter, name, options) {
  const encode = getFunctionOptionValue2(zipWriter, options, OPTION_ENCODE_TEXT) || encodeText;
  let rawFilename = encode(name, TEXT_TYPE_FILENAME);
  if (rawFilename === UNDEFINED_VALUE) {
    rawFilename = encodeText(name);
  }
  if (getLength(rawFilename) > MAX_16_BITS) {
    throw new Error(ERR_INVALID_ENTRY_NAME);
  }
  const comment = options[PROPERTY_NAME_COMMENT] || "";
  if (typeof comment != STRING_TYPE) {
    throw new Error(ERR_INVALID_ENTRY_COMMENT_TYPE);
  }
  let rawComment = encode(comment, TEXT_TYPE_COMMENT);
  if (rawComment === UNDEFINED_VALUE) {
    rawComment = encodeText(comment);
  }
  if (getLength(rawComment) > MAX_16_BITS) {
    throw new Error(ERR_INVALID_ENTRY_COMMENT);
  }
  const version = getOptionValue2(zipWriter, options, PROPERTY_NAME_VERSION);
  if (version !== UNDEFINED_VALUE && version > MAX_16_BITS) {
    throw new Error(ERR_INVALID_VERSION);
  }
  const lastModDate = getDateOptionValue(zipWriter, options, PROPERTY_NAME_LAST_MODIFICATION_DATE, /* @__PURE__ */ new Date());
  const rawLastModDate = getOptionValue2(zipWriter, options, PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
  const lastAccessDate = getDateOptionValue(zipWriter, options, PROPERTY_NAME_LAST_ACCESS_DATE);
  const creationDate = getDateOptionValue(zipWriter, options, PROPERTY_NAME_CREATION_DATE);
  const internalFileAttributes = getOptionValue2(zipWriter, options, PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES, 0);
  const passThrough = checkPassThroughOption(getOptionValue2(zipWriter, options, OPTION_PASS_THROUGH));
  const passThroughCompression = Boolean(passThrough);
  const passThroughEncryption = passThrough === true;
  let password = getOptionValue2(zipWriter, options, OPTION_PASSWORD);
  let rawPassword = getOptionValue2(zipWriter, options, OPTION_RAW_PASSWORD);
  checkPasswordOption(password, rawPassword);
  password = password && password.length ? password : UNDEFINED_VALUE;
  rawPassword = rawPassword && rawPassword.length ? rawPassword : UNDEFINED_VALUE;
  const encryptionStrength = getNumberOptionValue(zipWriter, options, OPTION_ENCRYPTION_STRENGTH, 3);
  const zipCrypto = getOptionValue2(zipWriter, options, PROPERTY_NAME_ZIPCRYPTO);
  const extendedTimestamp = getOptionValue2(zipWriter, options, OPTION_EXTENDED_TIMESTAMP, true);
  const ntfsTimestamp = getOptionValue2(zipWriter, options, OPTION_NTFS_TIMESTAMP);
  const keepOrder = getOptionValue2(zipWriter, options, OPTION_KEEP_ORDER, true);
  const useWebWorkers = getOptionValue2(zipWriter, options, OPTION_USE_WEB_WORKERS);
  const transferStreams = getOptionValue2(zipWriter, options, OPTION_TRANSFER_STREAMS);
  const bufferedWrite = getOptionValue2(zipWriter, options, OPTION_BUFFERED_WRITE);
  const createTempStream = getFunctionOptionValue2(zipWriter, options, OPTION_CREATE_TEMP_STREAM);
  const dataDescriptorSignature = getOptionValue2(zipWriter, options, OPTION_DATA_DESCRIPTOR_SIGNATURE, true);
  const signal = checkSignalOption(getOptionValue2(zipWriter, options, OPTION_SIGNAL));
  throwIfAborted(signal);
  const useUnicodeFileNames = getOptionValue2(
    zipWriter,
    options,
    OPTION_USE_UNICODE_FILE_NAMES,
    !isPrintableASCIIText(rawFilename) || !isPrintableASCIIText(rawComment)
  );
  const compressionMethod = getOptionValue2(zipWriter, options, PROPERTY_NAME_COMPRESSION_METHOD);
  const registeredCodec = passThroughCompression || compressionMethod === UNDEFINED_VALUE ? UNDEFINED_VALUE : getRegisteredCodec(compressionMethod);
  if (!passThroughCompression && compressionMethod !== UNDEFINED_VALUE && compressionMethod !== COMPRESSION_METHOD_STORE && compressionMethod !== COMPRESSION_METHOD_DEFLATE && !registeredCodec) {
    throw new Error(ERR_UNSUPPORTED_COMPRESSION);
  }
  let level = getNumberOptionValue(zipWriter, options, OPTION_LEVEL);
  checkIntegerOption(level, MAX_LEVEL, ERR_INVALID_LEVEL);
  if (zipWriter.options[OPTION_USDZ]) {
    if (password !== UNDEFINED_VALUE || rawPassword !== UNDEFINED_VALUE) {
      throw new Error(ERR_UNSUPPORTED_ENCRYPTION_USDZ);
    }
    if (level === UNDEFINED_VALUE && compressionMethod === UNDEFINED_VALUE) {
      level = 0;
    }
  }
  if (passThroughCompression) {
    level = toNumber(options[OPTION_LEVEL]);
  }
  let useCompressionStream = getOptionValue2(zipWriter, options, OPTION_USE_COMPRESSION_STREAM);
  let dataDescriptor = getOptionValue2(zipWriter, options, OPTION_DATA_DESCRIPTOR);
  if (bufferedWrite && dataDescriptor === UNDEFINED_VALUE) {
    dataDescriptor = false;
  }
  if (dataDescriptor === UNDEFINED_VALUE || zipCrypto && !passThroughEncryption) {
    dataDescriptor = true;
  }
  if (level !== UNDEFINED_VALUE && level != 6) {
    useCompressionStream = false;
  }
  const zip64 = getOptionValue2(zipWriter, options, PROPERTY_NAME_ZIP64);
  if (!zipCrypto && (password !== UNDEFINED_VALUE || rawPassword !== UNDEFINED_VALUE) && !(Number.isInteger(encryptionStrength) && encryptionStrength >= 1 && encryptionStrength <= 3)) {
    throw new Error(ERR_INVALID_ENCRYPTION_STRENGTH);
  }
  const rawExtraField = serializeExtraField(options[PROPERTY_NAME_EXTRA_FIELD]);
  const rawLocalExtraField = serializeExtraField(options[OPTION_LOCAL_EXTRA_FIELD]);
  const rawCentralExtraField = serializeExtraField(options[OPTION_CENTRAL_EXTRA_FIELD]);
  return {
    comment,
    resolvedOptions: {
      rawFilename,
      rawComment,
      version,
      lastModDate,
      rawLastModDate,
      lastAccessDate,
      creationDate,
      internalFileAttributes,
      passThroughCompression,
      passThroughEncryption,
      password,
      rawPassword,
      encryptionStrength,
      zipCrypto,
      extendedTimestamp,
      ntfsTimestamp,
      keepOrder,
      useWebWorkers,
      transferStreams,
      bufferedWrite,
      createTempStream,
      dataDescriptorSignature,
      signal,
      useUnicodeFileNames,
      compressionMethod,
      format: registeredCodec ? registeredCodec.format : UNDEFINED_VALUE,
      codecURI: registeredCodec ? registeredCodec.codecURI : UNDEFINED_VALUE,
      codecVersionNeeded: registeredCodec ? registeredCodec.versionNeeded : UNDEFINED_VALUE,
      level,
      useCompressionStream,
      dataDescriptor,
      zip64,
      rawExtraField,
      rawLocalExtraField,
      rawCentralExtraField
    }
  };
}
function serializeExtraField(extraField) {
  if (!extraField) {
    return EMPTY_UINT8_ARRAY;
  }
  if (!(extraField instanceof Map)) {
    throw new Error(ERR_INVALID_EXTRAFIELD);
  }
  let extraFieldSize = 0;
  let offset = 0;
  extraField.forEach((data, type) => {
    checkInteger(type, MAX_16_BITS, ERR_INVALID_EXTRAFIELD_TYPE);
    if (!(data instanceof Uint8Array)) {
      throw new Error(ERR_INVALID_EXTRAFIELD_DATA_TYPE);
    }
    if (getLength(data) > MAX_16_BITS) {
      throw new Error(ERR_INVALID_EXTRAFIELD_DATA);
    }
    extraFieldSize += 4 + getLength(data);
  });
  const rawExtraField = new Uint8Array(extraFieldSize);
  const rawExtraFieldView = getDataView(rawExtraField);
  extraField.forEach((data, type) => {
    setUint162(rawExtraFieldView, offset, type);
    setUint162(rawExtraFieldView, offset + 2, getLength(data));
    arraySet(rawExtraField, data, offset + 4);
    offset += 4 + getLength(data);
  });
  return rawExtraField;
}
async function resolveSizes(zipWriter, reader, { resolvedOptions: metadata }, options) {
  if (metadata.passThroughCompression && !reader && !getOptionValue2(zipWriter, options, PROPERTY_NAME_DIRECTORY)) {
    throw new Error(ERR_UNDEFINED_READER);
  }
  let contentSize;
  if (reader) {
    reader = new GenericReader(reader);
    await initStream(reader);
    if (!reader.readable && !reader.readUint8Array) {
      throw new Error(ERR_INVALID_READER);
    }
    ({ size: contentSize } = reader);
  }
  return Object.assign({ reader }, resolveEntrySizes(zipWriter, Boolean(reader), contentSize, metadata, options));
}
function resolveEntrySizes(zipWriter, hasContent, contentSize, metadata, options) {
  const { passThroughCompression, passThroughEncryption, zipCrypto, password, rawPassword, encryptionStrength } = metadata;
  let { dataDescriptor, zip64, level, compressionMethod } = metadata;
  let maximumCompressedSize = 0;
  let uncompressedSize = 0;
  let unknownSize = false;
  if (passThroughCompression && hasContent) {
    uncompressedSize = options[PROPERTY_NAME_UNCOMPRESSED_SIZE];
    if (uncompressedSize === UNDEFINED_VALUE) {
      throw new Error(ERR_UNDEFINED_UNCOMPRESSED_SIZE);
    }
    if (compressionMethod === UNDEFINED_VALUE) {
      throw new Error(ERR_UNDEFINED_COMPRESSION_METHOD);
    }
  }
  const zip64Enabled = zip64 === true;
  const encrypted = getOptionValue2(zipWriter, options, PROPERTY_NAME_ENCRYPTED);
  if (hasContent && passThroughEncryption && !encrypted && getLength(password, rawPassword)) {
    throw new Error(ERR_UNSUPPORTED_ENCRYPTION_PASS_THROUGH);
  }
  const encryptedEntry = hasContent && (Boolean(password && getLength(password) || rawPassword && getLength(rawPassword)) || passThroughEncryption && encrypted);
  if (!hasContent) {
    level = 0;
    compressionMethod = COMPRESSION_METHOD_STORE;
  }
  const encryptionOverhead = getEncryptionOverhead(encryptedEntry, zipCrypto, encryptionStrength);
  if (hasContent) {
    if (!passThroughCompression) {
      if (contentSize === UNDEFINED_VALUE) {
        dataDescriptor = true;
        if (zip64 || zip64 === UNDEFINED_VALUE) {
          zip64 = unknownSize = true;
          maximumCompressedSize = MAX_32_BITS + 1;
        }
      } else {
        options.uncompressedSize = uncompressedSize = contentSize;
        maximumCompressedSize = (isCompressed(compressionMethod, level) ? getMaximumCompressedSize(uncompressedSize) : uncompressedSize) + encryptionOverhead;
      }
    } else {
      options.uncompressedSize = uncompressedSize;
      maximumCompressedSize = contentSize === UNDEFINED_VALUE ? getMaximumCompressedSize(uncompressedSize) + encryptionOverhead : contentSize + (passThroughEncryption ? 0 : encryptionOverhead);
    }
  }
  const emptyEntry = !encryptedEntry && (!hasContent || contentSize === 0 && !passThroughCompression) && !isCompressed(compressionMethod, level);
  if (emptyEntry && getOptionValue2(zipWriter, options, OPTION_DATA_DESCRIPTOR) === UNDEFINED_VALUE) {
    dataDescriptor = false;
  }
  const zip64UncompressedSize = zip64Enabled || unknownSize || uncompressedSize >= MAX_32_BITS;
  const zip64CompressedSize = zip64Enabled || maximumCompressedSize >= MAX_32_BITS;
  if (zip64UncompressedSize || zip64CompressedSize) {
    if (zip64 === false) {
      throw new Error(ERR_UNSUPPORTED_FORMAT);
    } else {
      zip64 = true;
    }
  }
  zip64 = zip64 || false;
  return {
    maximumCompressedSize,
    resolvedOptions: {
      dataDescriptor,
      emptyEntry,
      zip64,
      zip64Enabled,
      unknownSize,
      zip64UncompressedSize,
      zip64CompressedSize,
      uncompressedSize,
      level,
      compressionMethod,
      encrypted: encryptedEntry
    }
  };
}
async function getFileEntry(zipWriter, name, reader, entryInfo, options) {
  const {
    fileEntries,
    writer
  } = zipWriter;
  const {
    keepOrder,
    dataDescriptor,
    emptyEntry,
    signal
  } = options;
  const {
    headerInfo,
    fileEntry: pendingFileEntry,
    previousFileEntry,
    releaseLockFileEntry
  } = entryInfo;
  const usdz = zipWriter.options[OPTION_USDZ];
  let fileEntry = pendingFileEntry;
  let bufferedWrite;
  let directWrite;
  let releaseLockWriter;
  let writingBufferedEntryData;
  let writingEntryData;
  let writerSizeBeforeEntry;
  let flushedBufferedSize = 0;
  let fileWriter;
  const lockPreviousFileEntry = keepOrder && previousFileEntry ? previousFileEntry.lockFileEntry : UNDEFINED_VALUE;
  fileEntries.set(name, fileEntry);
  try {
    if (options.bufferedWrite || !keepOrder || zipWriter.writerLocked || zipWriter.bufferedWrites || zipWriter.directWrites || !dataDescriptor && !emptyEntry) {
      bufferedWrite = true;
      zipWriter.bufferedWrites++;
      if (options.createTempStream) {
        fileWriter = await options.createTempStream();
      } else {
        fileWriter = new TransformStream(UNDEFINED_VALUE, UNDEFINED_VALUE, { highWaterMark: INFINITY_VALUE });
      }
      fileWriter.size = 0;
      await initStream(writer);
    } else {
      directWrite = true;
      zipWriter.directWrites++;
      fileWriter = writer;
      await lockPreviousFileEntry;
      await requestLockWriter();
    }
    await initStream(fileWriter);
    const diskOffset = getDiskOffset2(writer);
    if (zipWriter.addSplitZipSignature && !bufferedWrite) {
      await writeSplitZipSignature(zipWriter, writer);
    }
    if (usdz && !bufferedWrite) {
      appendExtraFieldUSDZ(entryInfo, zipWriter.offset - diskOffset);
    }
    const { localHeaderArray } = headerInfo;
    if (!bufferedWrite) {
      await skipDiskIfNeeded();
    }
    const diskNumberStart = getDiskNumber(writer);
    const entryOffset = getSegmentOffset(zipWriter, writer);
    fileEntry.diskNumberStart = diskNumberStart;
    if (!bufferedWrite) {
      writingEntryData = true;
      writerSizeBeforeEntry = writer.size;
      await writeData(fileWriter, localHeaderArray);
    }
    fileEntry = await createFileEntry(reader, fileWriter, fileEntry, entryInfo, getConfiguration(), options);
    if (!bufferedWrite) {
      writingEntryData = false;
    }
    fileEntries.set(name, fileEntry);
    fileEntry.filename = name;
    if (bufferedWrite) {
      await Promise.all([fileWriter.writable.getWriter().close(), lockPreviousFileEntry]);
      await requestLockWriter();
      if (zipWriter.addSplitZipSignature) {
        await writeSplitZipSignature(zipWriter, writer);
      }
      writingBufferedEntryData = true;
      writerSizeBeforeEntry = writer.size;
      await skipDiskIfNeeded();
      fileEntry.diskNumberStart = getDiskNumber(writer);
      fileEntry.offset = getSegmentOffset(zipWriter, writer);
      if (usdz) {
        const previousMetadataSize = entryInfo.metadataSize;
        appendExtraFieldUSDZ(entryInfo, zipWriter.offset - getDiskOffset2(writer));
        fileEntry.size += entryInfo.metadataSize - previousMetadataSize;
      }
      updateLocalHeader(fileEntry, headerInfo.localHeaderView, options);
      await writeData(writer, headerInfo.localHeaderArray);
      await flushBufferedData(fileWriter.readable, writer, signal, (chunkLength) => flushedBufferedSize += chunkLength);
      writer.size += fileWriter.size;
      writingBufferedEntryData = false;
    } else {
      fileEntry.diskNumberStart = diskNumberStart;
      fileEntry.offset = entryOffset;
    }
    zipWriter.offset += fileEntry.size;
    return fileEntry;
  } catch (error) {
    if (writingBufferedEntryData || writingEntryData) {
      zipWriter.hasCorruptedEntries = true;
      if (error) {
        try {
          error.corruptedEntry = true;
        } catch {
        }
      }
      zipWriter.offset += writer.size - writerSizeBeforeEntry;
      if (bufferedWrite) {
        zipWriter.offset += flushedBufferedSize;
      }
    }
    fileEntries.delete(name);
    throw error;
  } finally {
    if (bufferedWrite) {
      zipWriter.bufferedWrites--;
    }
    if (directWrite) {
      zipWriter.directWrites--;
    }
    if (releaseLockFileEntry) {
      releaseLockFileEntry(lockPreviousFileEntry);
    }
    if (releaseLockWriter) {
      releaseLockWriter();
    }
    if (bufferedWrite && fileWriter && fileWriter.dispose) {
      try {
        await fileWriter.dispose();
      } catch {
      }
    }
  }
  async function requestLockWriter() {
    zipWriter.writerLocked = true;
    const { lockWriter } = zipWriter;
    zipWriter.lockWriter = new Promise((resolve) => releaseLockWriter = () => {
      zipWriter.writerLocked = false;
      resolve();
    });
    await lockWriter;
  }
  async function skipDiskIfNeeded() {
    if (exceedsAvailableSize(writer, getLength(headerInfo.localHeaderArray))) {
      await writer.closeDisk();
    }
  }
}
async function createFileEntry(reader, writer, { diskNumberStart, lockFileEntry }, entryInfo, config2, options) {
  const {
    headerInfo,
    dataDescriptorInfo,
    metadataSize
  } = entryInfo;
  const {
    headerArray,
    headerView,
    lastModDate,
    rawLastModDate,
    encrypted,
    compressed,
    version,
    compressionMethod,
    rawExtraFieldZip64,
    localExtraFieldZip64Length,
    rawExtraFieldExtendedTimestamp,
    extraFieldExtendedTimestampFlag,
    extraFieldExtendedTimestampTime,
    rawExtraFieldNTFS,
    rawExtraFieldUnix,
    rawExtraFieldAES
  } = headerInfo;
  const { dataDescriptorArray } = dataDescriptorInfo;
  const {
    rawFilename,
    lastAccessDate,
    creationDate,
    password,
    rawPassword,
    level,
    useUnicodeFileNames,
    zip64,
    zip64Enabled,
    zip64UncompressedSize,
    zip64CompressedSize,
    zipCrypto,
    dataDescriptor,
    directory,
    executable,
    versionMadeBy,
    rawComment,
    rawExtraField,
    rawCentralExtraField,
    useWebWorkers,
    transferStreams,
    onstart,
    onprogress,
    onend,
    signal,
    encryptionStrength,
    extendedTimestamp,
    msDosCompatible,
    internalFileAttributes,
    externalFileAttributes,
    uid,
    gid,
    unixMode,
    symlink,
    setuid,
    setgid,
    sticky,
    unixExternalUpper,
    msdosAttributesRaw,
    msdosAttributes,
    useCompressionStream,
    passThroughCompression,
    passThroughEncryption,
    format,
    codecURI
  } = options;
  const fileEntry = {
    lockFileEntry,
    versionMadeBy,
    zip64,
    zip64Enabled,
    directory: Boolean(directory),
    executable: Boolean(executable),
    filenameUTF8: Boolean(useUnicodeFileNames),
    rawFilename,
    commentUTF8: Boolean(useUnicodeFileNames),
    rawComment,
    rawExtraFieldZip64,
    localExtraFieldZip64Length,
    rawExtraFieldExtendedTimestamp,
    rawExtraFieldNTFS,
    rawExtraFieldUnix,
    rawExtraFieldAES,
    rawExtraField,
    rawCentralExtraField,
    extendedTimestamp,
    msDosCompatible,
    internalFileAttributes,
    externalFileAttributes,
    diskNumberStart,
    uid,
    gid,
    unixMode,
    symlink: Boolean(symlink),
    setuid,
    setgid,
    sticky,
    unixExternalUpper,
    msdosAttributesRaw,
    msdosAttributes
  };
  let {
    crc32,
    uncompressedSize
  } = options;
  let compressedSize = 0;
  if (!passThroughCompression) {
    uncompressedSize = 0;
  }
  const { writable } = writer;
  if (reader) {
    const size = reader.size;
    const readable = toCompatibleReadable(createReadable(reader, { size }));
    const workerOptions = {
      options: {
        codecType: CODEC_DEFLATE,
        inputSize: size,
        level,
        rawPassword,
        password,
        encryptionStrength,
        zipCrypto: encrypted && zipCrypto,
        passwordVerification: encrypted && zipCrypto && rawLastModDate >> 8 & MAX_8_BITS,
        computeCrc32: !passThroughCompression,
        compressed: compressed && !passThroughCompression,
        encrypted: encrypted && !passThroughEncryption,
        useWebWorkers,
        useCompressionStream,
        transferStreams,
        format,
        codecURI,
        compressionMethod
      },
      config: config2,
      streamOptions: { signal, size, onstart, onprogress, onend }
    };
    try {
      const result = await runWorker2({ readable, writable }, workerOptions);
      compressedSize = result.outputSize;
      writer.size += compressedSize;
      throwIfAborted(signal);
      if (!passThroughCompression) {
        uncompressedSize = result.inputSize;
        if (!encrypted || zipCrypto) {
          crc32 = result.crc32;
        }
      }
      if (!zip64CompressedSize && compressedSize >= MAX_32_BITS || !zip64UncompressedSize && uncompressedSize >= MAX_32_BITS) {
        throw new Error(ERR_UNSUPPORTED_FORMAT);
      }
    } catch (error) {
      const { outputSize: failedOutputSize } = workerOptions;
      if (failedOutputSize !== UNDEFINED_VALUE) {
        writer.size += failedOutputSize;
      } else if (isErrorObject(error) && error.outputSize !== UNDEFINED_VALUE) {
        writer.size += error.outputSize;
      }
      throw error;
    }
  }
  setEntryInfo({
    crc32,
    compressedSize,
    uncompressedSize,
    headerInfo,
    dataDescriptorInfo
  }, options);
  if (dataDescriptor) {
    await writeData(writer, dataDescriptorArray);
  }
  Object.assign(fileEntry, {
    uncompressedSize,
    compressedSize,
    lastModDate,
    rawLastModDate,
    creationDate,
    lastAccessDate,
    encrypted: Boolean(encrypted),
    zipCrypto: Boolean(zipCrypto),
    size: metadataSize + compressedSize,
    compressionMethod,
    version,
    headerArray,
    headerView,
    signature: crc32,
    crc32: encrypted && !zipCrypto && !passThroughCompression ? UNDEFINED_VALUE : crc32,
    extraFieldExtendedTimestampFlag,
    extraFieldExtendedTimestampTime,
    zip64UncompressedSize,
    zip64CompressedSize
  });
  return fileEntry;
}
function getHeaderInfo(options) {
  const {
    rawFilename,
    lastModDate,
    rawLastModDate: rawLastModDateOption,
    lastAccessDate,
    creationDate,
    level,
    zip64,
    zipCrypto,
    useUnicodeFileNames,
    dataDescriptor,
    directory,
    rawExtraField,
    rawLocalExtraField,
    encryptionStrength,
    extendedTimestamp,
    ntfsTimestamp,
    passThroughCompression,
    encrypted,
    zip64UncompressedSize,
    zip64CompressedSize,
    uncompressedSize,
    unknownSize,
    crc32
  } = options;
  let { version, compressionMethod } = options;
  const compressed = !directory && isCompressed(compressionMethod, level);
  let rawLocalExtraFieldZip64;
  const uncompressedFile = passThroughCompression || !compressed;
  const zip64ExtraFieldComplete = zip64 && (options.bufferedWrite || !dataDescriptor || (!zip64UncompressedSize && !zip64CompressedSize || uncompressedFile && !unknownSize));
  const writeLocalExtraFieldZip64 = zip64ExtraFieldComplete || zip64 && dataDescriptor && (zip64UncompressedSize || zip64CompressedSize);
  if (zip64 && (zip64UncompressedSize || zip64CompressedSize)) {
    const length = 4 + 16;
    const extraFieldZip64 = createRecordWriter(length);
    extraFieldZip64.writeUint16(EXTRAFIELD_TYPE_ZIP64);
    extraFieldZip64.writeUint16(length - 4);
    rawLocalExtraFieldZip64 = extraFieldZip64.array;
    if (zip64ExtraFieldComplete) {
      extraFieldZip64.writeUint64(uncompressedSize);
      if (uncompressedFile) {
        const encryptionOverhead = getEncryptionOverhead(encrypted, zipCrypto, encryptionStrength);
        extraFieldZip64.writeUint64(passThroughCompression ? 0 : uncompressedSize + encryptionOverhead);
      }
    }
  } else {
    rawLocalExtraFieldZip64 = EMPTY_UINT8_ARRAY;
  }
  let rawExtraFieldAES;
  if (encrypted && !zipCrypto) {
    const extraFieldAES = createRecordWriter(getLength(EXTRAFIELD_DATA_AES) + 2);
    extraFieldAES.writeUint16(EXTRAFIELD_TYPE_AES);
    extraFieldAES.writeBytes(EXTRAFIELD_DATA_AES);
    rawExtraFieldAES = extraFieldAES.array;
    rawExtraFieldAES[8] = encryptionStrength;
  } else {
    rawExtraFieldAES = EMPTY_UINT8_ARRAY;
  }
  let rawExtraFieldNTFS;
  let rawExtraFieldExtendedTimestamp;
  let extraFieldExtendedTimestampFlag;
  let extraFieldExtendedTimestampTime;
  if (extendedTimestamp) {
    const lastModTimeUnix = getTimeUnix(lastModDate);
    const lastModTimeUnixInRange = inUnixTimeRange(lastModTimeUnix);
    if (lastModTimeUnixInRange) {
      const extraFieldTimestampLength = 9 + (lastAccessDate ? 4 : 0) + (creationDate ? 4 : 0);
      const extraFieldTimestamp = createRecordWriter(extraFieldTimestampLength);
      extraFieldExtendedTimestampFlag = 1 + (lastAccessDate ? 2 : 0) + (creationDate ? 4 : 0);
      extraFieldExtendedTimestampTime = lastModTimeUnix;
      extraFieldTimestamp.writeUint16(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
      extraFieldTimestamp.writeUint16(extraFieldTimestampLength - 4);
      extraFieldTimestamp.writeUint8(extraFieldExtendedTimestampFlag);
      extraFieldTimestamp.writeUint32(lastModTimeUnix);
      if (lastAccessDate) {
        extraFieldTimestamp.writeUint32(clampUnixTime(getTimeUnix(lastAccessDate)));
      }
      if (creationDate) {
        extraFieldTimestamp.writeUint32(clampUnixTime(getTimeUnix(creationDate)));
      }
      rawExtraFieldExtendedTimestamp = extraFieldTimestamp.array;
    } else {
      rawExtraFieldExtendedTimestamp = EMPTY_UINT8_ARRAY;
    }
    const writeExtraFieldNTFS = ntfsTimestamp === UNDEFINED_VALUE ? !lastModTimeUnixInRange || Boolean(lastAccessDate || creationDate) : ntfsTimestamp;
    if (writeExtraFieldNTFS) {
      try {
        const lastModTimeNTFS = getTimeNTFS(lastModDate);
        const extraFieldNTFS = createRecordWriter(36);
        extraFieldNTFS.writeUint16(EXTRAFIELD_TYPE_NTFS);
        extraFieldNTFS.writeUint16(32);
        extraFieldNTFS.skip(4);
        extraFieldNTFS.writeUint16(EXTRAFIELD_TYPE_NTFS_TAG1);
        extraFieldNTFS.writeUint16(24);
        extraFieldNTFS.writeUint64(lastModTimeNTFS);
        extraFieldNTFS.writeUint64(lastAccessDate ? getTimeNTFS(lastAccessDate) : lastModTimeNTFS);
        extraFieldNTFS.writeUint64(creationDate ? getTimeNTFS(creationDate) : lastModTimeNTFS);
        rawExtraFieldNTFS = extraFieldNTFS.array;
      } catch {
        rawExtraFieldNTFS = EMPTY_UINT8_ARRAY;
      }
    } else {
      rawExtraFieldNTFS = EMPTY_UINT8_ARRAY;
    }
  } else {
    rawExtraFieldNTFS = rawExtraFieldExtendedTimestamp = EMPTY_UINT8_ARRAY;
  }
  let rawExtraFieldUnix;
  try {
    const { uid, gid, unixExtraFieldType } = options;
    if (unixExtraFieldType == INFOZIP_EXTRA_FIELD_TYPE && (uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE)) {
      const uidBytes = packUnixId(uid === UNDEFINED_VALUE ? 0 : uid);
      const gidBytes = packUnixId(gid === UNDEFINED_VALUE ? 0 : gid);
      const payloadLength = 3 + uidBytes.length + gidBytes.length;
      const extraFieldUnix = createRecordWriter(4 + payloadLength);
      extraFieldUnix.writeUint16(EXTRAFIELD_TYPE_INFOZIP);
      extraFieldUnix.writeUint16(payloadLength);
      extraFieldUnix.writeUint8(1);
      extraFieldUnix.writeUint8(uidBytes.length);
      extraFieldUnix.writeBytes(uidBytes);
      extraFieldUnix.writeUint8(gidBytes.length);
      extraFieldUnix.writeBytes(gidBytes);
      rawExtraFieldUnix = extraFieldUnix.array;
    } else if (unixExtraFieldType == UNIX_EXTRA_FIELD_TYPE && (uid !== UNDEFINED_VALUE || gid !== UNDEFINED_VALUE)) {
      const extraFieldUnix = createRecordWriter(8);
      extraFieldUnix.writeUint16(EXTRAFIELD_TYPE_UNIX);
      extraFieldUnix.writeUint16(4);
      extraFieldUnix.writeUint16((uid === UNDEFINED_VALUE ? 0 : uid) & MAX_16_BITS);
      extraFieldUnix.writeUint16((gid === UNDEFINED_VALUE ? 0 : gid) & MAX_16_BITS);
      rawExtraFieldUnix = extraFieldUnix.array;
    } else {
      rawExtraFieldUnix = EMPTY_UINT8_ARRAY;
    }
  } catch {
    rawExtraFieldUnix = EMPTY_UINT8_ARRAY;
  }
  if (compressionMethod === UNDEFINED_VALUE) {
    compressionMethod = compressed ? COMPRESSION_METHOD_DEFLATE : COMPRESSION_METHOD_STORE;
  }
  if (version === UNDEFINED_VALUE) {
    version = compressionMethod == COMPRESSION_METHOD_STORE && !directory && !encrypted ? VERSION_STORE : VERSION_DEFLATE;
  }
  const { codecVersionNeeded } = options;
  if (compressed && codecVersionNeeded !== UNDEFINED_VALUE) {
    version = version > codecVersionNeeded ? version : codecVersionNeeded;
  }
  if (zip64) {
    version = version > VERSION_ZIP64 ? version : VERSION_ZIP64;
  }
  if (encrypted && !zipCrypto) {
    version = version > VERSION_AES ? version : VERSION_AES;
    if (passThroughCompression && crc32 !== UNDEFINED_VALUE) {
      rawExtraFieldAES[EXTRAFIELD_OFFSET_AES_VENDOR_VERSION] = VENDOR_VERSION_AE_12;
    }
    setUint162(getDataView(rawExtraFieldAES), EXTRAFIELD_OFFSET_AES_COMPRESSION_METHOD, compressionMethod);
    compressionMethod = COMPRESSION_METHOD_AES;
  }
  const localExtraFieldZip64Length = writeLocalExtraFieldZip64 ? getLength(rawLocalExtraFieldZip64) : 0;
  const extraFieldLength = localExtraFieldZip64Length + getLength(rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraFieldUnix, rawExtraField, rawLocalExtraField);
  const maximumUsdzExtraFieldLength = options[OPTION_USDZ] ? EXTRAFIELD_USDZ_MAX_LENGTH : 0;
  if (extraFieldLength + maximumUsdzExtraFieldLength > MAX_16_BITS) {
    throw new Error(ERR_INVALID_EXTRAFIELD_DATA);
  }
  const dosLastModDate = new Date(Math.ceil(Math.floor(lastModDate.getTime() / 1e3) / 2) * 2e3);
  const clampedLastModDate = dosLastModDate < MIN_DATE ? MIN_DATE : dosLastModDate > MAX_DATE ? MAX_DATE : dosLastModDate;
  const storedLastModDate = getLength(rawExtraFieldExtendedTimestamp) ? new Date(getTimeUnix(lastModDate) * 1e3) : getLength(rawExtraFieldNTFS) ? lastModDate : clampedLastModDate;
  const {
    headerArray,
    headerView,
    rawLastModDate
  } = getHeaderArrayData({
    version,
    bitFlag: getBitFlag(level, useUnicodeFileNames, dataDescriptor, encrypted, compressionMethod),
    compressionMethod,
    uncompressedSize,
    lastModDate: clampedLastModDate,
    rawLastModDate: rawLastModDateOption,
    rawFilename,
    zip64CompressedSize,
    zip64UncompressedSize,
    extraFieldLength
  });
  const localHeader = createRecordWriter(HEADER_SIZE + getLength(rawFilename) + extraFieldLength);
  const localHeaderArray = localHeader.array;
  const localHeaderView = getDataView(localHeaderArray);
  localHeader.writeUint32(LOCAL_FILE_HEADER_SIGNATURE);
  localHeader.writeBytes(headerArray);
  localHeader.writeBytes(rawFilename);
  if (writeLocalExtraFieldZip64) {
    localHeader.writeBytes(rawLocalExtraFieldZip64);
  }
  localHeader.writeBytes(rawExtraFieldAES);
  localHeader.writeBytes(rawExtraFieldExtendedTimestamp);
  localHeader.writeBytes(rawExtraFieldNTFS);
  localHeader.writeBytes(rawExtraFieldUnix);
  localHeader.writeBytes(rawExtraField);
  localHeader.writeBytes(rawLocalExtraField);
  if (dataDescriptor) {
    if (!zip64CompressedSize) {
      setUint322(localHeaderView, HEADER_OFFSET_COMPRESSED_SIZE + LOCAL_HEADER_COMMON_OFFSET, 0);
    }
    if (!zip64UncompressedSize) {
      setUint322(localHeaderView, HEADER_OFFSET_UNCOMPRESSED_SIZE + LOCAL_HEADER_COMMON_OFFSET, 0);
    }
  }
  return {
    localHeaderArray,
    localHeaderView,
    headerArray,
    headerView,
    lastModDate: storedLastModDate,
    lastModDateClamped: storedLastModDate === clampedLastModDate && dosLastModDate.getTime() != clampedLastModDate.getTime(),
    rawLastModDate,
    encrypted,
    compressed,
    version,
    compressionMethod,
    extraFieldExtendedTimestampFlag,
    extraFieldExtendedTimestampTime,
    rawExtraFieldZip64: EMPTY_UINT8_ARRAY,
    localExtraFieldZip64Length,
    rawExtraFieldExtendedTimestamp,
    rawExtraFieldNTFS,
    rawExtraFieldUnix,
    rawExtraFieldAES,
    extraFieldLength
  };
}
function appendExtraFieldUSDZ(entryInfo, zipWriterOffset) {
  const { headerInfo } = entryInfo;
  let { localHeaderArray, extraFieldLength } = headerInfo;
  let extraBytesLength = 64 - (zipWriterOffset + getLength(localHeaderArray)) % 64;
  if (extraBytesLength < 4) {
    extraBytesLength += 64;
  }
  const rawExtraFieldUSDZ = new Uint8Array(extraBytesLength);
  const extraFieldUSDZView = getDataView(rawExtraFieldUSDZ);
  setUint162(extraFieldUSDZView, 0, EXTRAFIELD_TYPE_USDZ);
  setUint162(extraFieldUSDZView, 2, extraBytesLength - 4);
  const previousLocalHeaderArray = localHeaderArray;
  headerInfo.localHeaderArray = localHeaderArray = new Uint8Array(getLength(previousLocalHeaderArray) + extraBytesLength);
  arraySet(localHeaderArray, previousLocalHeaderArray);
  arraySet(localHeaderArray, rawExtraFieldUSDZ, getLength(previousLocalHeaderArray));
  const localHeaderArrayView = getDataView(localHeaderArray);
  setUint162(localHeaderArrayView, 28, extraFieldLength + extraBytesLength);
  headerInfo.localHeaderView = localHeaderArrayView;
  entryInfo.metadataSize += extraBytesLength;
}
function packUnixId(id) {
  const dataArray = new Uint8Array(4);
  const dataView = getDataView(dataArray);
  dataView.setUint32(0, id, true);
  let length = 4;
  while (length > 1 && dataArray[length - 1] === 0) {
    length--;
  }
  return dataArray.subarray(0, length);
}
function normalizeMsdosAttributes(msdosAttributesRaw, msdosAttributes) {
  if (msdosAttributesRaw !== UNDEFINED_VALUE) {
    msdosAttributesRaw = msdosAttributesRaw & MAX_8_BITS;
  } else if (msdosAttributes !== UNDEFINED_VALUE) {
    const { readOnly, hidden, system, directory: msdDir, archive } = msdosAttributes;
    let raw = 0;
    if (readOnly) raw |= FILE_ATTR_MSDOS_READONLY_MASK;
    if (hidden) raw |= FILE_ATTR_MSDOS_HIDDEN_MASK;
    if (system) raw |= FILE_ATTR_MSDOS_SYSTEM_MASK;
    if (msdDir) raw |= FILE_ATTR_MSDOS_DIR_MASK;
    if (archive) raw |= FILE_ATTR_MSDOS_ARCHIVE_MASK;
    msdosAttributesRaw = raw & MAX_8_BITS;
  }
  if (msdosAttributes === UNDEFINED_VALUE) {
    msdosAttributes = {
      readOnly: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_READONLY_MASK),
      hidden: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_HIDDEN_MASK),
      system: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_SYSTEM_MASK),
      directory: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_DIR_MASK),
      archive: Boolean(msdosAttributesRaw & FILE_ATTR_MSDOS_ARCHIVE_MASK)
    };
  }
  return { msdosAttributesRaw, msdosAttributes };
}
function getDataDescriptorInfo({
  zip64,
  dataDescriptor,
  dataDescriptorSignature
}) {
  let dataDescriptorArray = EMPTY_UINT8_ARRAY;
  let dataDescriptorView, dataDescriptorOffset = 0;
  let dataDescriptorLength = zip64 ? DATA_DESCRIPTOR_RECORD_ZIP_64_LENGTH : DATA_DESCRIPTOR_RECORD_LENGTH;
  if (dataDescriptorSignature) {
    dataDescriptorLength += DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH;
  }
  if (dataDescriptor) {
    dataDescriptorArray = new Uint8Array(dataDescriptorLength);
    dataDescriptorView = getDataView(dataDescriptorArray);
    if (dataDescriptorSignature) {
      dataDescriptorOffset = DATA_DESCRIPTOR_RECORD_SIGNATURE_LENGTH;
      setUint322(dataDescriptorView, 0, DATA_DESCRIPTOR_RECORD_SIGNATURE);
    }
  }
  return {
    dataDescriptorArray,
    dataDescriptorView,
    dataDescriptorOffset
  };
}
function setEntryInfo({
  crc32,
  compressedSize,
  uncompressedSize,
  headerInfo,
  dataDescriptorInfo
}, {
  zip64,
  zipCrypto,
  passThroughCompression,
  dataDescriptor
}) {
  const {
    headerView,
    encrypted
  } = headerInfo;
  const {
    dataDescriptorView,
    dataDescriptorOffset
  } = dataDescriptorInfo;
  if ((!encrypted || zipCrypto || passThroughCompression) && crc32 !== UNDEFINED_VALUE) {
    setUint322(headerView, HEADER_OFFSET_SIGNATURE, crc32);
    if (dataDescriptor) {
      setUint322(dataDescriptorView, dataDescriptorOffset, crc32);
    }
  }
  if (zip64) {
    if (dataDescriptor) {
      setBigUint64(dataDescriptorView, dataDescriptorOffset + 4, BigInt(compressedSize));
      setBigUint64(dataDescriptorView, dataDescriptorOffset + 12, BigInt(uncompressedSize));
    }
  } else {
    setUint322(headerView, HEADER_OFFSET_COMPRESSED_SIZE, compressedSize);
    setUint322(headerView, HEADER_OFFSET_UNCOMPRESSED_SIZE, uncompressedSize);
    if (dataDescriptor) {
      setUint322(dataDescriptorView, dataDescriptorOffset + 4, compressedSize);
      setUint322(dataDescriptorView, dataDescriptorOffset + 8, uncompressedSize);
    }
  }
}
function updateLocalHeader({
  rawFilename,
  encrypted,
  zip64,
  localExtraFieldZip64Length,
  crc32,
  compressedSize,
  uncompressedSize,
  zip64UncompressedSize,
  zip64CompressedSize
}, localHeaderView, { dataDescriptor, passThroughCompression }) {
  if (!dataDescriptor) {
    if (!encrypted || passThroughCompression && crc32 !== UNDEFINED_VALUE) {
      setUint322(localHeaderView, HEADER_OFFSET_SIGNATURE + LOCAL_HEADER_COMMON_OFFSET, crc32);
    }
    if (!zip64CompressedSize) {
      setUint322(localHeaderView, HEADER_OFFSET_COMPRESSED_SIZE + LOCAL_HEADER_COMMON_OFFSET, compressedSize);
    }
    if (!zip64UncompressedSize) {
      setUint322(localHeaderView, HEADER_OFFSET_UNCOMPRESSED_SIZE + LOCAL_HEADER_COMMON_OFFSET, uncompressedSize);
    }
  }
  if (zip64 && localExtraFieldZip64Length) {
    const localHeaderOffset = HEADER_SIZE + getLength(rawFilename) + 4;
    setBigUint64(localHeaderView, localHeaderOffset, BigInt(uncompressedSize));
    setBigUint64(localHeaderView, localHeaderOffset + 8, BigInt(compressedSize));
  }
}
async function closeFile(zipWriter, comment, options) {
  const { directoryDataLength, zip64Entries } = createDirectoryRecords(zipWriter.fileEntries);
  const { directoryStart, directoryEnd, directoryArray } = await writeDirectoryRecords(zipWriter, directoryDataLength, options);
  const signatureLength = await writeDigitalSignatureRecord(zipWriter, directoryArray, options);
  await writeEndOfDirectoryRecord(zipWriter, comment, options, { directoryStart, directoryEnd, directoryDataLength, signatureLength, zip64Entries });
}
function createDirectoryRecords(files) {
  let directoryDataLength = 0;
  let zip64Entries = false;
  for (const [, fileEntry] of files) {
    const {
      rawFilename,
      rawExtraFieldAES,
      rawComment,
      rawExtraFieldNTFS,
      rawExtraFieldUnix,
      rawExtraField,
      rawCentralExtraField,
      extraFieldExtendedTimestampFlag,
      extraFieldExtendedTimestampTime,
      zip64Enabled,
      uncompressedSize,
      compressedSize
    } = fileEntry;
    let { zip64UncompressedSize, zip64CompressedSize } = fileEntry;
    if (!zip64Enabled) {
      if (zip64UncompressedSize && uncompressedSize < MAX_32_BITS) {
        zip64UncompressedSize = fileEntry.zip64UncompressedSize = false;
      }
      if (zip64CompressedSize && compressedSize < MAX_32_BITS) {
        zip64CompressedSize = fileEntry.zip64CompressedSize = false;
      }
    }
    zip64Entries = zip64Entries || zip64UncompressedSize || zip64CompressedSize;
    const zip64Offset = fileEntry.offset >= MAX_32_BITS;
    const zip64DiskNumberStart = fileEntry.diskNumberStart >= MAX_16_BITS;
    let rawExtraFieldZip64;
    if (zip64Offset || zip64DiskNumberStart || zip64UncompressedSize || zip64CompressedSize) {
      const length = 4 + (zip64UncompressedSize ? 8 : 0) + (zip64CompressedSize ? 8 : 0) + (zip64Offset ? 8 : 0) + (zip64DiskNumberStart ? 4 : 0);
      const extraFieldZip64 = createRecordWriter(length);
      extraFieldZip64.writeUint16(EXTRAFIELD_TYPE_ZIP64);
      extraFieldZip64.writeUint16(length - 4);
      if (zip64UncompressedSize) {
        extraFieldZip64.writeUint64(uncompressedSize);
      }
      if (zip64CompressedSize) {
        extraFieldZip64.writeUint64(compressedSize);
      }
      if (zip64Offset) {
        extraFieldZip64.writeUint64(fileEntry.offset);
      }
      if (zip64DiskNumberStart) {
        extraFieldZip64.writeUint32(fileEntry.diskNumberStart);
      }
      rawExtraFieldZip64 = extraFieldZip64.array;
    } else {
      rawExtraFieldZip64 = EMPTY_UINT8_ARRAY;
    }
    fileEntry.rawExtraFieldZip64 = rawExtraFieldZip64;
    fileEntry.zip64Offset = zip64Offset;
    fileEntry.zip64DiskNumberStart = zip64DiskNumberStart;
    let rawExtraFieldTimestamp;
    if (extraFieldExtendedTimestampTime === UNDEFINED_VALUE) {
      rawExtraFieldTimestamp = EMPTY_UINT8_ARRAY;
    } else {
      const extraFieldTimestamp = createRecordWriter(9);
      extraFieldTimestamp.writeUint16(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
      extraFieldTimestamp.writeUint16(5);
      extraFieldTimestamp.writeUint8(extraFieldExtendedTimestampFlag);
      extraFieldTimestamp.writeUint32(extraFieldExtendedTimestampTime);
      rawExtraFieldTimestamp = extraFieldTimestamp.array;
    }
    fileEntry.rawExtraFieldExtendedTimestamp = rawExtraFieldTimestamp;
    const extraFieldLength = getLength(
      rawExtraFieldZip64,
      rawExtraFieldAES,
      rawExtraFieldNTFS,
      rawExtraFieldUnix,
      rawExtraFieldTimestamp,
      rawExtraField,
      rawCentralExtraField
    );
    if (extraFieldLength > MAX_16_BITS) {
      throw new Error(ERR_INVALID_EXTRAFIELD_DATA);
    }
    directoryDataLength += CENTRAL_FILE_HEADER_LENGTH + getLength(rawFilename, rawComment) + extraFieldLength;
  }
  return { directoryDataLength, zip64Entries };
}
async function writeDirectoryRecords(zipWriter, directoryDataLength, options) {
  const { fileEntries, writer } = zipWriter;
  const directoryArray = new Uint8Array(directoryDataLength);
  await initStream(writer);
  let offset = 0;
  let directoryDiskOffset = 0;
  let directoryStartDiskNumber = getDiskNumber(writer);
  let directoryStartDiskOffset = getDiskOffset2(writer);
  let directoryEndDiskEntriesLength = 0;
  for (const [indexFileEntry, fileEntry] of Array.from(fileEntries.values()).entries()) {
    const {
      offset: fileEntryOffset,
      rawFilename,
      rawExtraFieldZip64,
      rawExtraFieldAES,
      rawExtraFieldExtendedTimestamp,
      rawExtraFieldNTFS,
      rawExtraFieldUnix,
      rawExtraField,
      rawCentralExtraField,
      rawComment,
      versionMadeBy,
      headerArray,
      headerView,
      zip64UncompressedSize,
      zip64CompressedSize,
      zip64DiskNumberStart,
      zip64Offset,
      internalFileAttributes,
      externalFileAttributes,
      diskNumberStart,
      uncompressedSize,
      compressedSize
    } = fileEntry;
    const extraFieldLength = getLength(rawExtraFieldZip64, rawExtraFieldAES, rawExtraFieldExtendedTimestamp, rawExtraFieldNTFS, rawExtraFieldUnix, rawExtraField, rawCentralExtraField);
    const directoryRecordLength = CENTRAL_FILE_HEADER_LENGTH + getLength(rawFilename, rawComment) + extraFieldLength;
    if (exceedsAvailableSize(writer, offset + directoryRecordLength - directoryDiskOffset)) {
      await writeData(writer, directoryArray.slice(directoryDiskOffset, offset));
      directoryDiskOffset = offset;
      directoryEndDiskEntriesLength = 0;
      await writer.closeDisk();
    }
    if (indexFileEntry == 0) {
      directoryStartDiskNumber = getDiskNumber(writer);
      directoryStartDiskOffset = getDiskOffset2(writer);
    }
    if (!zip64UncompressedSize) {
      setUint322(headerView, HEADER_OFFSET_UNCOMPRESSED_SIZE, uncompressedSize);
    }
    if (!zip64CompressedSize) {
      setUint322(headerView, HEADER_OFFSET_COMPRESSED_SIZE, compressedSize);
    }
    if ((zip64Offset || zip64DiskNumberStart) && fileEntry.version < VERSION_ZIP64) {
      setUint162(headerView, HEADER_OFFSET_VERSION, VERSION_ZIP64);
    }
    const directoryRecord = createRecordWriter(directoryRecordLength);
    directoryRecord.writeUint32(CENTRAL_FILE_HEADER_SIGNATURE);
    directoryRecord.writeUint16(versionMadeBy);
    directoryRecord.writeBytes(headerArray.subarray(0, HEADER_SIZE - 4 - 2));
    directoryRecord.writeUint16(extraFieldLength);
    directoryRecord.writeUint16(getLength(rawComment));
    directoryRecord.writeUint16(zip64DiskNumberStart ? MAX_16_BITS : diskNumberStart);
    directoryRecord.writeUint16(internalFileAttributes);
    directoryRecord.writeUint32(externalFileAttributes);
    directoryRecord.writeUint32(zip64Offset ? MAX_32_BITS : fileEntryOffset);
    directoryRecord.writeBytes(rawFilename);
    directoryRecord.writeBytes(rawExtraFieldZip64);
    directoryRecord.writeBytes(rawExtraFieldAES);
    directoryRecord.writeBytes(rawExtraFieldExtendedTimestamp);
    directoryRecord.writeBytes(rawExtraFieldNTFS);
    directoryRecord.writeBytes(rawExtraFieldUnix);
    directoryRecord.writeBytes(rawExtraField);
    directoryRecord.writeBytes(rawCentralExtraField);
    directoryRecord.writeBytes(rawComment);
    arraySet(directoryArray, directoryRecord.array, offset);
    offset += directoryRecordLength;
    directoryEndDiskEntriesLength++;
    if (options.onprogress) {
      try {
        await options.onprogress(indexFileEntry + 1, fileEntries.size, new Entry(fileEntry));
      } catch {
      }
    }
  }
  await writeData(writer, directoryDiskOffset ? directoryArray.slice(directoryDiskOffset) : directoryArray);
  return {
    directoryStart: { diskNumber: directoryStartDiskNumber, diskOffset: directoryStartDiskOffset },
    directoryEnd: { diskNumber: getDiskNumber(writer), entriesLength: directoryEndDiskEntriesLength },
    directoryArray
  };
}
async function writeDigitalSignatureRecord(zipWriter, directoryArray, options) {
  const signCentralDirectory = getFunctionOptionValue2(zipWriter, options, OPTION_SIGN_CENTRAL_DIRECTORY);
  if (signCentralDirectory) {
    const signatureData = await signCentralDirectory(directoryArray);
    const signatureDataLength = getLength(signatureData);
    if (signatureDataLength > MAX_16_BITS) {
      throw new Error(ERR_INVALID_SIGNATURE_DATA);
    }
    const signatureRecord = createRecordWriter(6 + signatureDataLength);
    signatureRecord.writeUint32(DIGITAL_SIGNATURE_RECORD_SIGNATURE);
    signatureRecord.writeUint16(signatureDataLength);
    signatureRecord.writeBytes(signatureData);
    const { writer } = zipWriter;
    if (exceedsAvailableSize(writer, getLength(signatureRecord.array))) {
      await writer.closeDisk();
    }
    await writeData(writer, signatureRecord.array);
    return 6 + signatureDataLength;
  }
  return 0;
}
async function writeEndOfDirectoryRecord(zipWriter, comment, options, cdInfo) {
  const { writer } = zipWriter;
  const { directoryStart, directoryEnd, signatureLength, zip64Entries } = cdInfo;
  let { directoryDataLength } = cdInfo;
  let fileEntriesLength = zipWriter.fileEntries.size;
  let diskNumber = directoryStart.diskNumber;
  let directoryOffset = getSegmentOffset(zipWriter, directoryStart);
  const commentLength = getLength(comment);
  if (commentLength > MAX_16_BITS) {
    throw new Error(ERR_INVALID_COMMENT);
  }
  let zip64 = getOptionValue2(zipWriter, options, PROPERTY_NAME_ZIP64);
  let lastDiskNumber = getDiskNumber(writer);
  if (exceedsAvailableSize(writer, (zip64 ? ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH : END_OF_CENTRAL_DIR_LENGTH) + commentLength)) {
    lastDiskNumber++;
  }
  if (directoryOffset >= MAX_32_BITS || directoryDataLength >= MAX_32_BITS || fileEntriesLength >= MAX_16_BITS || lastDiskNumber >= MAX_16_BITS) {
    if (zip64 === false) {
      throw new Error(ERR_UNSUPPORTED_FORMAT);
    } else {
      zip64 = true;
    }
  } else if (zip64 === UNDEFINED_VALUE && zip64Entries) {
    zip64 = true;
  }
  const endOfdirectoryRecord = createRecordWriter(zip64 ? ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH : END_OF_CENTRAL_DIR_LENGTH);
  if (exceedsAvailableSize(writer, getLength(endOfdirectoryRecord.array) + commentLength)) {
    await writer.closeDisk();
  }
  lastDiskNumber = getDiskNumber(writer);
  let diskFileEntriesLength = lastDiskNumber == directoryEnd.diskNumber ? directoryEnd.entriesLength : 0;
  if (zip64) {
    endOfdirectoryRecord.writeUint32(ZIP64_END_OF_CENTRAL_DIR_SIGNATURE);
    endOfdirectoryRecord.writeUint64(44);
    endOfdirectoryRecord.writeUint16(45);
    endOfdirectoryRecord.writeUint16(45);
    endOfdirectoryRecord.writeUint32(lastDiskNumber);
    endOfdirectoryRecord.writeUint32(diskNumber);
    endOfdirectoryRecord.writeUint64(diskFileEntriesLength);
    endOfdirectoryRecord.writeUint64(fileEntriesLength);
    endOfdirectoryRecord.writeUint64(directoryDataLength);
    endOfdirectoryRecord.writeUint64(directoryOffset);
    endOfdirectoryRecord.writeUint32(ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE);
    endOfdirectoryRecord.writeUint32(lastDiskNumber);
    endOfdirectoryRecord.writeUint64(BigInt(getSegmentOffset(zipWriter, writer)) + BigInt(directoryDataLength) + BigInt(signatureLength));
    endOfdirectoryRecord.writeUint32(lastDiskNumber + 1);
    const supportZip64SplitFile = getOptionValue2(zipWriter, options, OPTION_SUPPORT_ZIP64_SPLIT_FILE, true);
    if (supportZip64SplitFile) {
      lastDiskNumber = MAX_16_BITS;
      diskNumber = MAX_16_BITS;
    }
    diskFileEntriesLength = MAX_16_BITS;
    fileEntriesLength = MAX_16_BITS;
    directoryOffset = MAX_32_BITS;
    directoryDataLength = MAX_32_BITS;
  }
  endOfdirectoryRecord.writeUint32(END_OF_CENTRAL_DIR_SIGNATURE);
  endOfdirectoryRecord.writeUint16(lastDiskNumber);
  endOfdirectoryRecord.writeUint16(diskNumber);
  endOfdirectoryRecord.writeUint16(diskFileEntriesLength);
  endOfdirectoryRecord.writeUint16(fileEntriesLength);
  endOfdirectoryRecord.writeUint32(directoryDataLength);
  endOfdirectoryRecord.writeUint32(directoryOffset);
  endOfdirectoryRecord.writeUint16(commentLength);
  await writeData(writer, endOfdirectoryRecord.array);
  if (commentLength) {
    await writeData(writer, comment);
  }
}
function createRecordWriter(length) {
  const array = new Uint8Array(length);
  const view = getDataView(array);
  let offset = 0;
  return {
    array,
    writeUint8: (value) => {
      setUint8(view, offset, value);
      offset += 1;
    },
    writeUint16: (value) => {
      setUint162(view, offset, value);
      offset += 2;
    },
    writeUint32: (value) => {
      setUint322(view, offset, value);
      offset += 4;
    },
    writeUint64: (value) => {
      setBigUint64(view, offset, BigInt(value));
      offset += 8;
    },
    writeBytes: (value) => {
      arraySet(array, value, offset);
      offset += getLength(value);
    },
    skip: (count) => offset += count
  };
}
function getDiskNumber(writer) {
  const { diskNumber = 0 } = writer;
  return diskNumber;
}
function getDiskOffset2(writer) {
  const { diskOffset = 0 } = writer;
  return diskOffset;
}
function exceedsAvailableSize(writer, length) {
  const { availableSize = INFINITY_VALUE } = writer;
  return length > availableSize;
}
function getSegmentOffset(zipWriter, { diskNumber = 0, diskOffset = 0 }) {
  return zipWriter.offset - diskOffset - (diskNumber ? zipWriter.initialOffset : 0);
}
async function startsWithSplitZipSignature2(reader) {
  const signatureArray = await readUint8Array(reader, 0, SPLIT_ZIP_FILE_SIGNATURE_LENGTH);
  return getUint323(getDataView(signatureArray), 0) == SPLIT_ZIP_FILE_SIGNATURE;
}
function removeExtraFieldZip64(rawExtraField) {
  const rawExtraFieldView = getDataView(rawExtraField);
  let offsetExtraField = 0;
  while (offsetExtraField + 4 <= getLength(rawExtraField)) {
    const size = 4 + getUint163(rawExtraFieldView, offsetExtraField + 2);
    if (getUint163(rawExtraFieldView, offsetExtraField) == EXTRAFIELD_TYPE_ZIP64) {
      return removeExtraFieldZip64(concat(
        rawExtraField.subarray(0, offsetExtraField),
        rawExtraField.subarray(Math.min(offsetExtraField + size, getLength(rawExtraField)))
      ));
    }
    offsetExtraField += size;
  }
  return rawExtraField;
}
async function copyZipData(zipWriter, reader, entries, directoryOffset) {
  const { writer } = zipWriter;
  const entryPositions = /* @__PURE__ */ new Map();
  if (writer.closeDisk) {
    const sortedEntries = Array.from(entries).sort((firstEntry, secondEntry) => getSourceOffset(reader, firstEntry) - getSourceOffset(reader, secondEntry));
    let copiedLength = 0;
    for (const entry of sortedEntries) {
      const sourceOffset = getSourceOffset(reader, entry);
      await copyData(zipWriter, reader, copiedLength, sourceOffset - copiedLength);
      if (exceedsAvailableSize(writer, await getLocalHeaderLength(reader, sourceOffset))) {
        await writer.closeDisk();
      }
      entryPositions.set(entry, {
        offset: getSegmentOffset(zipWriter, writer),
        diskNumberStart: getDiskNumber(writer)
      });
      copiedLength = sourceOffset;
    }
    await copyData(zipWriter, reader, copiedLength, directoryOffset - copiedLength);
  } else {
    const baseOffset = zipWriter.offset;
    await copyData(zipWriter, reader, 0, directoryOffset);
    entries.forEach((entry) => entryPositions.set(entry, {
      offset: baseOffset + getSourceOffset(reader, entry),
      diskNumberStart: 0
    }));
  }
  return entryPositions;
}
async function copyData(zipWriter, reader, offset, size) {
  if (size > 0) {
    const { writer } = zipWriter;
    let copiedLength = 0;
    try {
      await flushBufferedData(createReadable(reader, { offset, size }), writer, UNDEFINED_VALUE, (chunkLength) => copiedLength += chunkLength);
    } catch (error) {
      zipWriter.hasCorruptedEntries = true;
      try {
        error.corruptedEntry = true;
      } catch {
      }
      throw error;
    } finally {
      writer.size += copiedLength;
      zipWriter.offset += copiedLength;
    }
  }
}
async function getLocalHeaderLength(reader, offset) {
  const headerArray = await readUint8Array(reader, offset, HEADER_SIZE);
  if (getLength(headerArray) < HEADER_SIZE) {
    return HEADER_SIZE;
  }
  const headerView = getDataView(headerArray);
  return HEADER_SIZE + getUint163(headerView, HEADER_OFFSET_FILENAME_LENGTH + LOCAL_HEADER_COMMON_OFFSET) + getUint163(headerView, HEADER_OFFSET_EXTRAFIELD_LENGTH + LOCAL_HEADER_COMMON_OFFSET);
}
function getSourceOffset(reader, { offset, diskNumberStart }) {
  return offset + (reader.getDiskOffset ? reader.getDiskOffset(diskNumberStart) : 0);
}
function getSplitZipSignatureArray() {
  const signatureArray = new Uint8Array(SPLIT_ZIP_FILE_SIGNATURE_LENGTH);
  setUint322(getDataView(signatureArray), 0, SPLIT_ZIP_FILE_SIGNATURE);
  return signatureArray;
}
async function writeSplitZipSignature(zipWriter, writer) {
  delete zipWriter.addSplitZipSignature;
  await writeData(writer, getSplitZipSignatureArray());
  zipWriter.offset += SPLIT_ZIP_FILE_SIGNATURE_LENGTH;
}
async function writeData(writer, array) {
  const { writable } = writer;
  const streamWriter = writable.getWriter();
  try {
    await streamWriter.ready;
    writer.size += getLength(array);
    await streamWriter.write(array);
  } finally {
    streamWriter.releaseLock();
  }
}
async function flushBufferedData(readable, writer, signal, onChunkWritten) {
  const streamWriter = writer.writable.getWriter();
  try {
    await readable.pipeTo(new WritableStream({
      async write(chunk) {
        await streamWriter.ready;
        await streamWriter.write(chunk);
        onChunkWritten(getLength(chunk));
      }
    }), { preventClose: true, preventAbort: true, signal });
  } finally {
    streamWriter.releaseLock();
  }
}
function getTimeNTFS(date) {
  if (date) {
    const timeNTFS = (BigInt(date.getTime()) + BigInt(116444736e5)) * BigInt(1e4);
    return timeNTFS < MIN_NTFS_TIME ? MIN_NTFS_TIME : timeNTFS > MAX_NTFS_TIME ? MAX_NTFS_TIME : timeNTFS;
  }
}
function getTimeUnix(date) {
  return Math.floor(date.getTime() / 1e3);
}
function inUnixTimeRange(timeUnix) {
  return timeUnix >= MIN_UNIX_TIME && timeUnix <= MAX_UNIX_TIME;
}
function clampUnixTime(timeUnix) {
  return Math.min(MAX_UNIX_TIME, Math.max(MIN_UNIX_TIME, timeUnix));
}
function getOptionValue2(zipWriter, options, name, defaultValue) {
  const result = options[name] === UNDEFINED_VALUE ? zipWriter.options[name] : options[name];
  return result === UNDEFINED_VALUE ? defaultValue : result;
}
function getDateOptionValue(zipWriter, options, name, defaultValue) {
  const date = getOptionValue2(zipWriter, options, name, defaultValue);
  if (date === null) {
    return defaultValue;
  }
  if (date !== UNDEFINED_VALUE && (typeof date.getTime != FUNCTION_TYPE || Number.isNaN(date.getTime()))) {
    throw new Error(ERR_INVALID_DATE);
  }
  return date;
}
function getFunctionOptionValue2(zipWriter, options, name) {
  return checkFunctionOption(getOptionValue2(zipWriter, options, name));
}
function getNumberOptionValue(zipWriter, options, name, defaultValue) {
  return toNumber(getOptionValue2(zipWriter, options, name, defaultValue));
}
function getMaximumCompressedSize(uncompressedSize) {
  return uncompressedSize + 5 * (Math.floor(uncompressedSize / 16383) + 1);
}
function isCompressed(compressionMethod, level) {
  return compressionMethod === UNDEFINED_VALUE ? level === UNDEFINED_VALUE || level > 0 : compressionMethod !== COMPRESSION_METHOD_STORE;
}
function getUint163(view, offset) {
  return view.getUint16(offset, true);
}
function getUint323(view, offset) {
  return view.getUint32(offset, true);
}
function setUint8(view, offset, value) {
  view.setUint8(offset, value);
}
function setUint162(view, offset, value) {
  view.setUint16(offset, value, true);
}
function setUint322(view, offset, value) {
  view.setUint32(offset, value, true);
}
function setBigUint64(view, offset, value) {
  view.setBigUint64(offset, value, true);
}
function arraySet(array, typedArray, offset) {
  array.set(typedArray, offset);
}
function getLength(...arrayLikes) {
  let result = 0;
  arrayLikes.forEach((arrayLike) => arrayLike && (result += arrayLike.length));
  return result;
}
function getHeaderArrayData({
  version,
  bitFlag,
  compressionMethod,
  uncompressedSize,
  compressedSize,
  lastModDate,
  rawLastModDate,
  rawFilename,
  zip64CompressedSize,
  zip64UncompressedSize,
  extraFieldLength
}) {
  const headerRecord = createRecordWriter(HEADER_SIZE - 4);
  const headerArray = headerRecord.array;
  const headerView = getDataView(headerArray);
  headerRecord.writeUint16(version);
  headerRecord.writeUint16(bitFlag);
  headerRecord.writeUint16(compressionMethod);
  if (rawLastModDate === UNDEFINED_VALUE) {
    const dateArray = new Uint32Array(1);
    const dateView = getDataView(dateArray);
    setUint162(dateView, 0, (lastModDate.getHours() << 6 | lastModDate.getMinutes()) << 5 | lastModDate.getSeconds() / 2);
    setUint162(dateView, 2, (lastModDate.getFullYear() - 1980 << 4 | lastModDate.getMonth() + 1) << 5 | lastModDate.getDate());
    rawLastModDate = dateArray[0];
  }
  headerRecord.writeUint32(rawLastModDate);
  headerRecord.skip(4);
  if (zip64CompressedSize || compressedSize !== UNDEFINED_VALUE) {
    headerRecord.writeUint32(zip64CompressedSize ? MAX_32_BITS : compressedSize);
  } else {
    headerRecord.skip(4);
  }
  if (zip64UncompressedSize || uncompressedSize !== UNDEFINED_VALUE) {
    headerRecord.writeUint32(zip64UncompressedSize ? MAX_32_BITS : uncompressedSize);
  } else {
    headerRecord.skip(4);
  }
  headerRecord.writeUint16(getLength(rawFilename));
  headerRecord.writeUint16(extraFieldLength);
  return {
    headerArray,
    headerView,
    rawLastModDate
  };
}
function isPrintableASCIIText(rawText) {
  return rawText.every((characterCode) => characterCode >= MIN_PRINTABLE_ASCII_CHARACTER_CODE && characterCode <= MAX_PRINTABLE_ASCII_CHARACTER_CODE);
}
function getBitFlag(level, useUnicodeFileNames, dataDescriptor, encrypted, compressionMethod) {
  let bitFlag = 0;
  if (useUnicodeFileNames) {
    bitFlag = bitFlag | BITFLAG_LANG_ENCODING_FLAG;
  }
  if (dataDescriptor) {
    bitFlag = bitFlag | BITFLAG_DATA_DESCRIPTOR;
  }
  if (compressionMethod == COMPRESSION_METHOD_DEFLATE || compressionMethod == COMPRESSION_METHOD_DEFLATE_64) {
    if (level >= 0 && level <= 3) {
      bitFlag = bitFlag | BITFLAG_LEVEL_SUPER_FAST_MASK;
    }
    if (level > 3 && level <= 5) {
      bitFlag = bitFlag | BITFLAG_LEVEL_FAST_MASK;
    }
    if (level == 9) {
      bitFlag = bitFlag | BITFLAG_LEVEL_MAX_MASK;
    }
  }
  if (encrypted) {
    bitFlag = bitFlag | BITFLAG_ENCRYPTED;
  }
  return bitFlag;
}

// node_modules/@zip.js/zip.js/lib/zip-core-base.js
init_io();
init_options();
init_configuration();
init_codec_registry();

// node_modules/@zip.js/zip.js/lib/core/compression-methods.js
init_constants();
init_configuration();
init_codec_registry();
init_zip_entry_stream();

// node_modules/@zip.js/zip.js/lib/core/util/opfs-temp-stream.js
var DEFAULT_THRESHOLD = 1024 * 1024;

// node_modules/@zip.js/zip.js/lib/core/util/blob-temp-stream.js
init_compatible_streams();
var DEFAULT_THRESHOLD2 = 1024 * 1024;

// node_modules/@zip.js/zip.js/lib/core/util/sync-access-handle-temp-stream.js
var DEFAULT_THRESHOLD3 = 1024 * 1024;
var READ_CHUNK_SIZE = 512 * 1024;

// node_modules/@zip.js/zip.js/lib/zip-core-base.js
try {
  setDefaultConfiguration({ baseURI: import.meta.url });
} catch {
}

// node_modules/@zip.js/zip.js/lib/zip-module-native.js
init_configuration();

// node_modules/@zip.js/zip.js/lib/core/streams/zlib-js/zlib-streams.min.js
var { Uint8Array: p, Uint16Array: g, Int32Array: R, TransformStream: H, Math: O, Error: z, Array: k } = globalThis;
var pe = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
var Z = new p(0);
var qe = new g(0);
var de = [];
for (let e = 0; e < 6; e++) de.push(e, 0 == e ? 8 : 4);
de.push(0, 1);
var Se = [];
for (let e = 0; e < 14; e++) Se.push(e, 0 == e ? 4 : 2);
var Ee = new g([0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576]);
var ge = new g([0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0]);
function M(e, t, n, r, i) {
  if (0 == i) return;
  let f = e instanceof p ? e : new p(e.buffer, e.byteOffset, e.byteLength), l = n instanceof p ? n.subarray(r, r + i) : new p(n.buffer, n.byteOffset + r, i);
  f.set(l, t);
}
function Ve(e, t, n) {
  0 != n && (e instanceof p ? e : new p(e.buffer, e.byteOffset, e.byteLength)).fill(0, t, t + n);
}
function je() {
  return { next_in: Z, next_in_index: 0, avail_in: 0, total_in: 0, next_out: Z, next_out_index: 0, avail_out: 0, total_out: 0, msg: "", t: 0, i: 0, l: 0, _: void 0 };
}
function $e(e, t) {
  let n = 1 << t;
  return { o: e, u: new p(n), h: n, k: t, m: 0, v: 0, p: 0, T: 0 };
}
function te(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 2) {
    let r = e[n], i = e[n + 1];
    for (let e2 = 0; e2 < i; e2++) t.push(r);
  }
  return new g(t);
}
var ne = class {
  constructor(e, t) {
    this.I = e, this.M = t, this.C = 0;
  }
};
var re = class {
  constructor(e, t, n, r, i) {
    this.Z = e, this.W = t, this.q = n, this.O = r, this.S = i;
  }
};
function D_(e) {
  return J_[e < -6 || e > 2 ? 9 : 2 - e] || "";
}
function we(e, t) {
  try {
    e.msg = D_(t);
  } catch (n) {
    e.msg = "zlib error " + String(t) + " (" + n + ")";
  }
  return t;
}
function Qe(e, t) {
  let n = e >>> 0, r = 0;
  for (let e2 = 0; e2 < t; e2++) r = r << 1 | 1 & n, n >>>= 1;
  return r;
}
function T8(e, t) {
  e.D[e.j++] = t;
}
function Ae(e, t) {
  T8(e, 255 & t), T8(e, t >>> 8 & 255);
}
function e_(e, t, n) {
  let r = 255 & n, i = 65535 & t, f = e.A + e.N;
  return e.D[f] = 255 & i, e.D[f + 1] = i >>> 8 & 255, e.D[f + 2] = r, e.N += 3, i = i - 1 & 65535, e.H[__[r] + ie + 1].R++, e.J[y_(i)].R++, e.N == e.U;
}
function De(e, t) {
  let n = 255 & t, r = e.A + e.N;
  return e.D[r] = 0, e.D[r + 1] = 0, e.D[r + 2] = n, e.N += 3, e.H[n].R++, e.N == e.U;
}
function ye(e) {
  return e.h - ae;
}
function y_(e) {
  return e < 256 ? A_[e] : A_[256 + (e >> 7)];
}
function v_(e) {
  let t = Ce + 7, n = 1 << t, r = (1 << t) - 1, i = O.floor((t + I - 1) / I), f = 1 << 8 + Ce;
  return { ...$e(e, 15), o: e, Y: 42, P: 0, B: void 0, F: 32767, G: t, V: n, L: r, X: i, $: new g(32768), K: new g(n), ee: f, D: new p(32768), te: 0, ne: 32768, j: 0, re: 0, ie: 0, fe: 0, le: 0, _e: 0, oe: -2, ae: 0, ue: 0, ce: 0, se: 0, he: 0, de: 0, we: 0, be: 0, ke: 0, ge: 0, me: 0, ve: 0, pe: 0, xe: 0, Te: new R(2 * Te + 1), ye: new p(2 * Te + 1), Ie: new g(be + 1), N: 0, U: 0, Me: Z, A: 0, ze: 0, Ce: 0, Ze: 8, We: 32768, qe: 0, Oe: 0, Se: 0, H: new k(fe).fill(0).map(() => J()), J: new k(2 * me + 1).fill(0).map(() => J()), De: new k(2 * oe + 1).fill(0).map(() => J()), je: w_(), Ae: w_(), Qe: w_() };
}
function I_(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 2) {
    let r = e[n], i = e[n + 1], f = J();
    f.Ne = r, f.Re = i, t.push(f);
  }
  return t;
}
function J() {
  return { R: 0, Ne: 0, He: 0, Re: 0 };
}
function w_() {
  return new ne([], bn(null, Z, 0, 0, 0));
}
function bn(e, t, n, r, i) {
  return new re(e, t, n, r, i);
}
function Q_() {
  let e = new k(288).fill(0);
  for (let t = 0; t <= 143; t++) e[t] = 8;
  for (let t = 144; t <= 255; t++) e[t] = 9;
  for (let t = 256; t <= 279; t++) e[t] = 7;
  for (let t = 280; t <= 287; t++) e[t] = 8;
  return e;
}
function k_(e) {
  let { code: t, length: n } = sn(e), r = new g(2 * e.length), i = 0;
  for (let f = 0; f < e.length; f++) {
    let e2 = n[f] || 0, l = t[f] || 0;
    r[i++] = e2 ? Qe(l, e2) : 0, r[i++] = e2;
  }
  return new g(r);
}
function et(e, t, n) {
  let r = 0;
  for (let n2 = 0; n2 < e.length; n2++) {
    let i2 = t[n2] ? 1 << t[n2] : 1, f2 = e[n2] + i2 - 1;
    f2 > r && (r = f2);
  }
  r < n && (r = n);
  let i = new p(r + 1);
  for (let n2 = 0; n2 <= r; n2++) for (let r2 = 0; r2 < e.length; r2++) {
    let f2 = t[r2] ? 1 << t[r2] : 1, l = e[r2];
    if (n2 >= l && n2 <= l + f2 - 1) {
      i[n2] = r2;
      break;
    }
  }
  let f = 0;
  for (let n2 = 0; n2 < e.length - 1; n2++) {
    let r2 = t[n2] ? 1 << t[n2] : 1, i2 = e[n2] + r2 - 1;
    i2 > f && (f = i2);
  }
  return i[f] = e.length - 1, i;
}
function _t(e, t) {
  let n = 0;
  for (let r2 = 0; r2 < e.length; r2++) {
    let i = t[r2] ? 1 << t[r2] : 1, f = e[r2] + i - 1;
    f > n && (n = f);
  }
  let r = new p(n + 1);
  for (let i = 0; i <= n; i++) for (let n2 = 0; n2 < e.length; n2++) {
    let f = t[n2] ? 1 << t[n2] : 1, l = e[n2];
    if (i >= l && i <= l + f - 1) {
      r[i] = n2;
      break;
    }
  }
  return r;
}
function tt(e) {
  let t = new p(512), n = e.length - 1;
  for (let r = 0; r < 256; r++) t[r] = r <= n ? e[r] : e[n];
  for (let r = 256; r <= n; r++) {
    let n2 = r >> 7;
    t[256 + (n2 > 255 ? 255 : n2)] = e[r];
  }
  for (let e2 = 257; e2 < 512; e2++) 0 == t[e2] && (t[e2] = t[e2 - 1]);
  return t;
}
function sn(e) {
  let t = O.max(...e), n = new k(t + 1).fill(0);
  for (let t2 of e) t2 > 0 && n[t2]++;
  let r = new k(e.length).fill(0), i = new k(t + 1).fill(0), f = 0;
  for (let e2 = 1; e2 <= t; e2++) f = f + n[e2 - 1] << 1, i[e2] = f;
  for (let t2 = 0; t2 < e.length; t2++) {
    let n2 = e[t2];
    0 != n2 && (r[t2] = i[n2]++);
  }
  return { code: r, length: e };
}
var Ce = 8;
var I = 3;
var ee = 258;
var ae = ee + I + 1;
var nt = 4096;
var Ue = 16;
var He = ee;
var hn = 29;
var ie = 256;
var Te = ie + 1 + hn;
var me = 30;
var oe = 19;
var fe = 2 * Te + 1;
var be = 15;
var rt = 9;
var at = 255;
var it = 32;
var ot = 4;
var ve = 256;
var t_ = 16;
var n_ = 17;
var r_ = 18;
var ft = 0;
var N_ = 1;
var lt = 2;
var Q = -1;
var J_ = ["need dictionary", "stream end", "", "file error", "stream error", "data error", "insufficient memory", "buffer error", ""];
var a_ = te(de);
var i_ = te(Se);
var Be = new g(19);
Be[16] = 2, Be[17] = 3, Be[18] = 7;
var xn = k_(Q_());
var pn = k_(new k(30).fill(5));
var Fe = I_(xn);
var R_ = I_(pn);
var __ = et(ge, a_, ee);
var A_ = tt(_t(Ee, i_));
function se(e, t, n) {
  if (void 0 === t || void 0 === n) return 1;
  let r = 65535 & e, i = e >>> 16 & 65535, f = 0;
  for (; n > 0; ) {
    let e2 = n > 2e3 ? 2e3 : n;
    n -= e2;
    do {
      r = r + t[f++] | 0, i = i + r | 0;
    } while (--e2);
    r %= 65521, i %= 65521;
  }
  return (i << 16 | r) >>> 0;
}
var Ze = [[], [], [], [], [], [], [], []];
for (let e = 0; e < 256; e++) {
  let t = e;
  for (let e2 = 0; e2 < 8; e2++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
  Ze[0][e] = t;
}
for (let e = 0; e < 256; e++) for (let t = 1; t < 8; t++) {
  let n = Ze[t - 1][e];
  Ze[t][e] = n >>> 8 ^ Ze[0][255 & n];
}
var [ut, Sn, En, gn, Tn, wn, An, Dn] = Ze;
function W(e = 0, t, n) {
  if (!t) return 0;
  void 0 === n && (n = t.length);
  let r = 0 | ~e, i = 0;
  if ((n = O.min(n, t.length)) >= 8) {
    let e2 = new DataView(t.buffer, t.byteOffset, n), f = n - 8;
    for (; i <= f; i += 8) {
      let t2 = r ^ e2.getInt32(i, true), n2 = e2.getInt32(i + 4, true);
      r = Dn[255 & t2] ^ An[t2 >>> 8 & 255] ^ wn[t2 >>> 16 & 255] ^ Tn[t2 >>> 24 & 255] ^ gn[255 & n2] ^ En[n2 >>> 8 & 255] ^ Sn[n2 >>> 16 & 255] ^ ut[n2 >>> 24 & 255];
    }
  }
  for (; i < n; i++) r = r >>> 8 ^ ut[255 & (r ^ t[i])];
  return (4294967295 ^ r) >>> 0;
}
function xt(e) {
  16 == e.T ? (Ae(e, e.p), e.p = 0, e.T = 0) : e.T >= 8 && (T8(e, e.p), e.p >>= 8, e.T -= 8);
}
function pt(e) {
  e.T > 8 ? Ae(e, e.p) : e.T > 0 && T8(e, e.p), e.ze = 1 + (e.T - 1 & 7), e.p = 0, e.T = 0;
}
function yn(e, t, n) {
  let r, i, f = [], l = 0;
  for (r = 1; r <= be; r++) l = l + n[r - 1] << 1, f[r] = l;
  for (i = 0; i <= t; i++) {
    let t2 = e[i].Re;
    0 != t2 && (e[i].Ne = Qe(f[t2]++, t2));
  }
}
function C(e, t, n) {
  e.T > Ue - n ? (e.p = 65535 & (e.p | t << e.T), Ae(e, e.p), e.p = t >> Ue - e.T & 65535, e.T += n - Ue) : (e.p = 65535 & (e.p | t << e.T), e.T += n);
}
function St(e) {
  for (let t = 0; t < e.H.length; t++) e.H[t].R = 0;
  for (let t = 0; t < e.J.length; t++) e.J[t].R = 0;
  for (let t = 0; t < e.De.length; t++) e.De[t].R = 0;
  e.H[ve].R = 1, e.ie = e.fe = 0, e.N = e.le = 0;
}
function Et(e) {
  if (e.H && e.H.length >= fe) for (let t = 0; t < fe; t++) e.H[t] = J();
  else {
    e.H = [];
    for (let t = 0; t < fe; t++) e.H.push(J());
  }
  if (e.J && e.J.length >= 2 * me + 1) for (let t = 0; t < 2 * me + 1; t++) e.J[t] = J();
  else {
    e.J = [];
    for (let t = 0; t < 2 * me + 1; t++) e.J.push(J());
  }
  if (e.De && e.De.length >= 2 * oe + 1) for (let t = 0; t < 2 * oe + 1; t++) e.De[t] = J();
  else {
    e.De = [];
    for (let t = 0; t < 2 * oe + 1; t++) e.De.push(J());
  }
  e.je = new ne(e.H, new re(Fe, a_, ie + 1, Te, be)), e.Ae = new ne(e.J, new re(R_, i_, 0, me, be)), e.Qe = new ne(e.De, new re(null, Be, 0, oe, 7)), e.p = 0, e.T = 0, e.ze = 0, St(e);
}
var he = 1;
function vn(e, t, n) {
  return n = e.Te[he], e.Te[he] = e.Te[e.Oe--], z_(e, t, he), n;
}
function mt(e, t, n, r) {
  return e[t].R < e[n].R || e[t].R == e[n].R && r[t] <= r[n];
}
function z_(e, t, n) {
  let r = e.Te[n], i = n << 1;
  for (; i <= e.Oe && (i < e.Oe && mt(t, e.Te[i + 1], e.Te[i], e.ye) && i++, !mt(t, r, e.Te[i], e.ye)); ) e.Te[n] = e.Te[i], n = i, i <<= 1;
  e.Te[n] = r;
}
function In(e, t) {
  let n, r, i, f, l, _, o = t.I, a = t.C, u = t.M.Z, c = t.M.W, s = t.M.q, h = t.M.S, d = 0;
  for (f = 0; f <= be; f++) e.Ie[f] = 0;
  for (o[e.Te[e.Se]].Re = 0, n = e.Se + 1; n < fe; n++) r = e.Te[n], f = o[o[r].He].Re + 1, f > h && (f = h, d++), o[r].Re = f, !(r > a) && (e.Ie[f]++, l = 0, r >= s && (l = c[r - s]), _ = o[r].R, e.ie += _ * (f + l), u && (e.fe += _ * (u[r].Re + l)));
  if (0 != d) {
    do {
      for (f = h - 1; 0 == e.Ie[f]; ) f--;
      e.Ie[f]--, e.Ie[f + 1] += 2, e.Ie[h]--, d -= 2;
    } while (d > 0);
    for (f = h; 0 != f; f--) for (r = e.Ie[f]; 0 != r; ) i = e.Te[--n], !(i > a) && (o[i].Re != f && (e.ie += (f - o[i].Re) * o[i].R, o[i].Re = f), r--);
  }
}
function O_(e, t) {
  let n, r, i, f = t.I, l = t.M.Z, _ = t.M.O, o = -1;
  for (e.Oe = 0, e.Se = fe, n = 0; n < _; n++) 0 != f[n].R ? (e.Te[++e.Oe] = o = n, e.ye[n] = 0) : f[n].Re = 0;
  for (; e.Oe < 2; ) i = e.Te[++e.Oe] = o < 2 ? ++o : 0, f[i].R = 1, e.ye[i] = 0, e.ie--, l && (e.fe -= l[i].Re);
  for (t.C = o, n = O.floor(e.Oe / 2); n >= 1; n--) z_(e, f, n);
  i = _;
  do {
    n = vn(e, f, n), r = e.Te[he], e.Te[--e.Se] = n, e.Te[--e.Se] = r, f[i].R = f[n].R + f[r].R, e.ye[i] = (e.ye[n] >= e.ye[r] ? e.ye[n] : e.ye[r]) + 1, f[n].He = f[r].He = i, e.Te[he] = i++, z_(e, f, he);
  } while (e.Oe >= 2);
  e.Te[--e.Se] = e.Te[he], In(e, t), yn(f, t.C, e.Ie);
}
function bt(e, t, n) {
  let r, i, f = -1, l = t[0].Re, _ = 0, o = 7, a = 4;
  for (0 == l && (o = 138, a = 3), t[n + 1].Re = 65535, r = 0; r <= n; r++) i = l, l = t[r + 1].Re, !(++_ < o && i == l) && (_ < a ? e.De[i].R += _ : 0 != i ? (i != f && e.De[i].R++, e.De[t_].R++) : _ <= 10 ? e.De[n_].R++ : e.De[r_].R++, _ = 0, f = i, 0 == l ? (o = 138, a = 3) : i == l ? (o = 6, a = 3) : (o = 7, a = 4));
}
function st(e, t, n) {
  let r, i = -1, f = t[0].Re, l = 0, _ = 7, o = 4;
  0 == f && (_ = 138, o = 3);
  for (let a = 0; a <= n; a++) if (r = f, f = t[a + 1].Re, !(++l < _ && r == f)) {
    if (l < o) do {
      C(e, e.De[r].Ne, e.De[r].Re);
    } while (0 != --l);
    else 0 != r ? (r != i && (C(e, e.De[r].Ne, e.De[r].Re), l--), C(e, e.De[t_].Ne, e.De[t_].Re), C(e, l - 3, 2)) : l <= 10 ? (C(e, e.De[n_].Ne, e.De[n_].Re), C(e, l - 3, 3)) : (C(e, e.De[r_].Ne, e.De[r_].Re), C(e, l - 11, 7));
    l = 0, i = r, 0 == f ? (_ = 138, o = 3) : r == f ? (_ = 6, o = 3) : (_ = 7, o = 4);
  }
}
function kn(e) {
  let t;
  for (bt(e, e.H, e.je.C), bt(e, e.J, e.Ae.C), O_(e, e.Qe), t = oe - 1; t >= 3 && 0 == e.De[pe[t]].Re; t--) ;
  return e.ie += 3 * (t + 1) + 5 + 5 + 4, t;
}
function Nn(e, t, n, r) {
  let i;
  for (C(e, t - 257, 5), C(e, n - 1, 5), C(e, r - 4, 4), i = 0; i < r; i++) C(e, e.De[pe[i]].Re, 3);
  st(e, e.H, t - 1), st(e, e.J, n - 1);
}
function Pe(e, t, n, r, i = 0) {
  C(e, (ft << 1) + r, 3), pt(e), Ae(e, n), Ae(e, ~n), n && t && M(e.D, e.j, t, i, n), e.j += n;
}
function gt(e) {
  xt(e);
}
function Tt(e) {
  C(e, N_ << 1, 3), C(e, Fe[ve].Ne, Fe[ve].Re), xt(e);
}
function ht(e, t, n) {
  let r, i, f, l, _ = 0;
  if (0 != e.N) do {
    r = 255 & e.Me[_], r += (255 & e.Me[_ + 1]) << 8, i = e.Me[_ + 2], _ += 3, 0 == r ? C(e, t[i].Ne, t[i].Re) : (f = __[i], C(e, t[f + ie + 1].Ne, t[f + ie + 1].Re), l = a_[f], 0 != l && (i -= ge[f], C(e, i, l)), r--, f = y_(r), C(e, n[f].Ne, n[f].Re), l = i_[f], 0 != l && (r -= Ee[f], C(e, r, l)));
  } while (_ < e.N);
  C(e, t[ve].Ne, t[ve].Re);
}
function Rn(e) {
  let t, n = 4093624447;
  for (t = 0; t <= 31; t++, n >>= 1) if (1 & n && 0 != e.H[t].R) return 0;
  if (0 != e.H[9].R || 0 != e.H[10].R || 0 != e.H[13].R) return 1;
  for (t = 32; t < ie; t++) if (0 != e.H[t].R) return 1;
  return 0;
}
function wt(e, t, n, r, i = 0) {
  let f, l, _ = 0;
  e.ke > 0 ? (2 == e.o.t && (e.o.t = Rn(e)), O_(e, e.je), O_(e, e.Ae), _ = kn(e), f = e.ie + 3 + 7 >> 3, l = e.fe + 3 + 7 >> 3, (l <= f || 4 == e.ge) && (f = l)) : f = l = n + 5, n + 4 <= f && t ? Pe(e, t, n, r, i) : l == f ? (C(e, (N_ << 1) + r, 3), ht(e, Fe, R_)) : (C(e, (lt << 1) + r, 3), Nn(e, e.je.C + 1, e.Ae.C + 1, _ + 1), ht(e, e.H, e.J)), St(e), r && pt(e);
}
function vt() {
  let e = je();
  return e._ = v_(e), e;
}
var Ye = [{ Je: Ot, Ue: 0, Ee: 0, Ye: 0, Pe: 0 }, { Je: U_, Ue: 4, Ee: 4, Ye: 8, Pe: 4 }, { Je: U_, Ue: 4, Ee: 5, Ye: 16, Pe: 8 }, { Je: U_, Ue: 4, Ee: 6, Ye: 32, Pe: 32 }, { Je: Ne, Ue: 4, Ee: 4, Ye: 16, Pe: 16 }, { Je: Ne, Ue: 8, Ee: 16, Ye: 32, Pe: 32 }, { Je: Ne, Ue: 8, Ee: 16, Ye: 128, Pe: 128 }, { Je: Ne, Ue: 8, Ee: 32, Ye: 128, Pe: 256 }, { Je: Ne, Ue: 32, Ee: 128, Ye: 258, Pe: 1024 }, { Je: Ne, Ue: 32, Ee: 258, Ye: 258, Pe: 4096 }];
function At(e) {
  return 2 * e - (e > 4 ? 9 : 0);
}
function l_(e, t, n) {
  return ((t << e.X ^ n) & e.L) >>> 0;
}
function u_(e, t) {
  e.be = l_(e, e.be, e.u[t + (I - 1)]);
  let n = e.$[t & e.F] = e.K[e.be];
  return e.K[e.be] = t, n;
}
function It(e) {
  e.K[e.V - 1] = 0, Ve(e.K, 0, (e.V - 1) * e.K.BYTES_PER_ELEMENT);
}
function Bn(e) {
  let t, n, r = e.h;
  for (t = e.V; t > 0; ) t--, n = e.K[t], e.K[t] = n >= r ? n - r : 0;
  for (t = r; t > 0; ) t--, n = e.$[t], e.$[t] = n >= r ? n - r : 0;
}
function H_(e, t, n, r) {
  let i = e.avail_in;
  return i > r && (i = r), 0 == i ? 0 : (e.avail_in -= i, M(t, n, e.next_in, e.next_in_index, i), 1 == e._.P ? e.i = se(e.i, new p(t.buffer, t.byteOffset + n, i), i) : 2 == e._.P && (e.i = W(e.i, new p(t.buffer, t.byteOffset + n, i), i)), e.next_in_index += i, e.total_in += i, i);
}
function c_(e) {
  let t, n, r = e.h;
  do {
    if (n = e.We - e.ce - e.ue, 0 == n && 0 == e.ue && 0 == e.ce ? n = r : -1 == n && n--, e.ue >= r + ye(e) && (M(e.u, 0, e.u, r, r - n), e.qe -= r, e.ue -= r, e.ae -= r, e._e > e.ue && (e._e = e.ue), Bn(e), n += r), 0 == e.o.avail_in) break;
    if (t = H_(e.o, e.u, e.ue + e.ce, n), e.ce += t, e.ce + e._e >= I) {
      let t2 = e.ue - e._e;
      for (e.be = e.u[t2], e.be = l_(e, e.be, e.u[t2 + 1]); e._e && (e.be = l_(e, e.be, e.u[t2 + I - 1]), e.$[t2 & e.F] = e.K[e.be], e.K[e.be] = t2, t2++, e._e--, !(e.ce + e._e < I)); ) ;
    }
  } while (e.ce < ae && 0 != e.o.avail_in);
  if (e.m < e.We) {
    let t2, n2 = e.ue + e.ce;
    e.m < n2 ? (t2 = e.We - n2, t2 > He && (t2 = He), Ve(e.u, n2, t2), e.m = n2 + t2) : e.m < n2 + He && (t2 = n2 + He - e.m, t2 > e.We - e.m && (t2 = e.We - e.m), Ve(e.u, e.m, t2), e.m += t2);
  }
}
function kt(e, t, n = 8, r = 15, i = Ce, f = 0) {
  let l = 1;
  if (!e) return -2;
  if (e.msg = "", -1 == t && (t = 6), r < 0) {
    if (l = 0, r < -15) return -2;
    r = -r;
  } else r > 15 && (l = 2, r -= 16);
  if (i < 1 || i > rt || 8 != n || r < 8 || r > 15 || t < 0 || t > 9 || f < 0 || f > 4 || 8 == r && 1 != l) return -2;
  8 == r && (r = 9);
  let _ = v_(e);
  return _ ? (e._ = _, _.o = e, _.Y = 42, _.P = l, _.B = void 0, _.k = r, _.h = 1 << _.k, _.F = _.h - 1, _.G = i + 7, _.V = 1 << _.G, _.L = _.V - 1, _.X = (_.G + I - 1) / I, _.u = new p(2 * _.h), _.$ = new g(_.h), _.K = new g(_.V), _.m = 0, _.ee = 1 << i + 6, _.D = new p(_.ee * ot), _.ne = 4 * _.ee, _.u && _.$ && _.K && _.D ? (_.Me = _.D.subarray(_.ee), _.A = _.te + _.ee, _.U = 3 * (_.ee - 1), _.ke = t, _.ge = f, _.Ze = n, Pn(e)) : (_.Y = 666, e.msg = D_(-4), P_(e), -4)) : -4;
}
function Z_(e) {
  if (null == e) return true;
  let t = e._;
  return !t || t.o != e || 42 != t.Y && 57 != t.Y && 69 != t.Y && 73 != t.Y && 91 != t.Y && 103 != t.Y && 113 != t.Y && 666 != t.Y;
}
function Fn(e) {
  let t;
  return Z_(e) ? -2 : (e.total_in = e.total_out = 0, e.msg = "", e.t = 2, t = e._, t.j = 0, t.re = t.te, t.P < 0 && (t.P = -t.P), t.Y = 2 == t.P ? 57 : 42, e.i = 2 == t.P ? W(0) : se(0), t.oe = -2, Et(t), 0);
}
function Zn(e) {
  e.We = 2 * e.h, It(e), e.xe = Ye[e.ke].Ee, e.me = Ye[e.ke].Ue, e.ve = Ye[e.ke].Ye, e.pe = Ye[e.ke].Pe, e.ue = 0, e.ae = 0, e.ce = 0, e._e = 0, e.se = e.he = I - 1, e.we = 0, e.be = 0;
}
function Pn(e) {
  let t = Fn(e);
  return 0 == t && Zn(e._), t;
}
function Me(e, t) {
  T8(e, t >> 8), T8(e, 255 & t);
}
function q(e) {
  let t, n = e._;
  gt(n), t = n.j, t > e.avail_out && (t = e.avail_out), 0 != t && (M(e.next_out, e.next_out_index, n.D, n.re, t), e.next_out_index += t, n.re += t, e.total_out += t, e.avail_out -= t, n.j -= t, 0 == n.j && (n.re = n.te));
}
function Ie(e, t) {
  let n = e._;
  n.B && n.B.Be && (e.i = W(e.i, new p(n.D.buffer, n.te + t, n.j - t), n.j - t));
}
function Nt(e, t) {
  let n, r = e._;
  if (Z_(e) || t > 5 || t < 0) return we(e, -2);
  if (!e.next_out || 0 != e.avail_in && !e.next_in || 666 == r.Y && 4 != t) return we(e, -2);
  if (0 == e.avail_out) return we(e, -5);
  if (n = r.oe, r.oe = t, 0 != r.j) {
    if (q(e), 0 == e.avail_out) return r.oe = Q, 0;
  } else if (0 == e.avail_in && At(t) <= At(n) && 4 != t) return we(e, -5);
  if (666 == r.Y && 0 != e.avail_in) return we(e, -5);
  if (42 == r.Y && 0 == r.P && (r.Y = 113), 42 == r.Y) {
    let t2, n2 = 8 + (r.k - 8 << 4) << 8;
    if (t2 = r.ge >= 2 || r.ke < 2 ? 0 : r.ke < 6 ? 1 : 6 == r.ke ? 2 : 3, n2 |= t2 << 6, 0 != r.ue && (n2 |= it), n2 += 31 - n2 % 31, Me(r, n2), 0 != r.ue && (Me(r, e.i >> 16), Me(r, 65535 & e.i)), e.i = 1, r.Y = 113, q(e), 0 != r.j) return r.oe = Q, 0;
  }
  if (57 == r.Y) {
    if (e.i = W(0), T8(r, 31), T8(r, 139), T8(r, 8), r.B) T8(r, (r.B.Fe ? 1 : 0) + (r.B.Be ? 2 : 0) + (null == r.B.Ge ? 0 : 4) + (null == r.B.Ve ? 0 : 8) + (null == r.B.Le ? 0 : 16)), T8(r, 255 & r.B.Xe), T8(r, r.B.Xe >>> 8 & 255), T8(r, r.B.Xe >>> 16 & 255), T8(r, r.B.Xe >>> 24 & 255), T8(r, 9 == r.ke ? 2 : r.ge >= 2 || r.ke < 2 ? 4 : 0), T8(r, 255 & r.B.$e), null != r.B.Ge && (T8(r, 255 & r.B.Ke), T8(r, r.B.Ke >>> 8 & 255)), r.B.Be && (e.i = W(e.i, r.D, r.j)), r.Ce = 0, r.Y = 69;
    else if (T8(r, 0), T8(r, 0), T8(r, 0), T8(r, 0), T8(r, 0), T8(r, 9 == r.ke ? 2 : r.ge >= 2 || r.ke < 2 ? 4 : 0), T8(r, at), r.Y = 113, q(e), 0 != r.j) return r.oe = Q, 0;
  }
  if (69 == r.Y) {
    if (r.B && null != r.B.Ge) {
      let t2 = r.j, n2 = (65535 & r.B.Ke) - r.Ce;
      for (; r.j + n2 > r.ne; ) {
        let i = r.ne - r.j;
        if (M(r.D, r.j, r.B.Ge, r.Ce, i), r.j = r.ne, Ie(e, t2), r.Ce += i, q(e), 0 != r.j) return r.oe = Q, 0;
        t2 = 0, n2 -= i;
      }
      M(r.D, r.j, r.B.Ge, r.Ce, n2), r.j += n2, Ie(e, t2), r.Ce = 0;
    }
    r.Y = 73;
  }
  if (73 == r.Y) {
    if (r.B && r.B.Ve && r.B.Ve.length) {
      let t2, n2 = r.j;
      do {
        if (r.j == r.ne) {
          if (Ie(e, n2), q(e), 0 != r.j) return r.oe = Q, 0;
          n2 = 0;
        }
        t2 = r.B.Ve[r.Ce++], T8(r, t2);
      } while (0 != t2);
      Ie(e, n2), r.Ce = 0;
    }
    r.Y = 91;
  }
  if (91 == r.Y) {
    if (r.B && r.B.Le && r.B.Le.length) {
      let t2, n2 = r.j;
      do {
        if (r.j == r.ne) {
          if (Ie(e, n2), q(e), 0 != r.j) return r.oe = Q, 0;
          n2 = 0;
        }
        t2 = r.B.Le[r.Ce++], T8(r, t2);
      } while (0 != t2);
      Ie(e, n2);
    }
    r.Y = 103;
  }
  if (103 == r.Y) {
    if (r.B && r.B.Be) {
      if (r.j + 2 > r.ne && (q(e), 0 != r.j)) return r.oe = Q, 0;
      T8(r, 255 & e.i), T8(r, e.i >>> 8 & 255), e.i = W(0);
    }
    if (r.Y = 113, q(e), 0 != r.j) return r.oe = Q, 0;
  }
  if (0 != e.avail_in || 0 != r.ce || 0 != t && 666 != r.Y) {
    let n2 = 0 == r.ke ? Ot(r, t) : 2 == r.ge ? Yn(r, t) : 3 == r.ge ? Mn(r, t) : Ye[r.ke].Je(r, t);
    if ((2 == n2 || 3 == n2) && (r.Y = 666), 0 == n2 || 2 == n2) return 0 == e.avail_out && (r.oe = Q), 0;
    if (1 == n2 && (1 == t ? Tt(r) : 5 != t && (Pe(r, null, 0, 0), 3 == t && (It(r), 0 == r.ce && (r.ue = 0, r.ae = 0, r._e = 0))), q(e), 0 == e.avail_out)) return r.oe = Q, 0;
  }
  return 4 != t ? 0 : r.P <= 0 ? 1 : (2 == r.P ? (T8(r, 255 & e.i), T8(r, e.i >>> 8 & 255), T8(r, e.i >>> 16 & 255), T8(r, e.i >>> 24 & 255), T8(r, 255 & e.total_in), T8(r, e.total_in >>> 8 & 255), T8(r, e.total_in >>> 16 & 255), T8(r, e.total_in >>> 24 & 255)) : (Me(r, e.i >>> 16 & 65535), Me(r, 65535 & e.i)), q(e), r.P > 0 && (r.P = -r.P), 0 != r.j ? 0 : 1);
}
function P_(e) {
  if (Z_(e)) return -2;
  let t = e._, n = t.Y;
  return t.u = Z, t.$ = qe, t.K = qe, t.D = Z, t.Me = Z, t.Te = new R(0), t.ye = Z, t.Ie = qe, t.H.length = 0, t.J.length = 0, t.De.length = 0, t.B = void 0, t.te = 0, t.re = 0, t.A = 0, 113 == n ? -3 : 0;
}
function Rt(e, t) {
  let n, r, i = e.pe, f = e.ue, l = e.he, _ = e.ve, o = e.ue > ye(e) ? e.ue - ye(e) : 0, a = e.$, u = e.F, c = e.u, s = e.ce, h = ee < s ? ee : s, d = c[f], w = c[f + 1], b = c[f + l - 1], k2 = c[f + l];
  l >= e.me && (i >>= 2), _ > s && (_ = s);
  do {
    if (n = t, c[n + l] != k2 || c[n + l - 1] != b || c[n] != d || c[n + 1] != w) continue;
    let i2 = 2;
    for (; i2 < h && c[f + i2] == c[n + i2]; ) i2++;
    if (r = i2, r > l) {
      if (e.qe = t, l = r, r >= _) break;
      b = c[f + l - 1], k2 = c[f + l];
    }
  } while ((t = a[t & u]) > o && 0 != --i);
  return l <= s ? l : s;
}
function zt(e, t) {
  wt(e, e.u, e.ue - e.ae, t, e.ae), e.ae = e.ue, q(e.o);
}
function j(e, t) {
  return zt(e, t ? 1 : 0), 0 == e.o.avail_out ? t ? 2 : 0 : null;
}
var Dt = 65535;
function ke(e, t) {
  return e < t ? e : t;
}
function Ot(e, t) {
  let n, r, i, f = ke(e.ne - 5, e.h), l = 0, _ = e.o.avail_in;
  do {
    if (n = Dt, i = e.T + 42 >> 3, e.o.avail_out < i || (i = e.o.avail_out - i, r = e.ue - e.ae, n > r + e.o.avail_in && (n = r + e.o.avail_in), n > i && (n = i), n < f && (0 == n && 4 != t || 0 == t || n != r + e.o.avail_in))) break;
    l = 4 == t && n == r + e.o.avail_in ? 1 : 0, Pe(e, null, 0, l), e.D[e.j - 4] = n, e.D[e.j - 3] = n >> 8, e.D[e.j - 2] = ~n, e.D[e.j - 1] = ~n >> 8, q(e.o), r && (r > n && (r = n), M(e.o.next_out, e.o.next_out_index, e.u, e.ae, r), e.o.next_out_index += r, e.o.avail_out -= r, e.o.total_out += r, e.ae += r, n -= r), n && (H_(e.o, e.o.next_out, e.o.next_out_index, n), e.o.next_out_index += n, e.o.avail_out -= n, e.o.total_out += n);
  } while (0 == l);
  if (_ -= e.o.avail_in, _) {
    if (_ >= e.h) {
      e.le = 2;
      let t2 = e.o.next_in_index - e.h;
      M(e.u, 0, e.o.next_in, t2, e.h), e.ue = e.h, e._e = e.ue;
    } else e.We - e.ue <= _ && (e.ue -= e.h, M(e.u, 0, e.u, e.h, e.ue), e.le < 2 && e.le++, e._e > e.ue && (e._e = e.ue)), M(e.u, e.ue, e.o.next_in, e.o.next_in_index - _, _), e.ue += _, e._e += ke(_, e.h - e._e);
    e.ae = e.ue;
  }
  return e.m < e.ue && (e.m = e.ue), l ? (e.ze = 8, 3) : 0 != t && 4 != t && 0 == e.o.avail_in && e.ue == e.ae ? 1 : (i = e.We - e.ue, e.o.avail_in > i && e.ae >= e.h && (e.ae -= e.h, e.ue -= e.h, M(e.u, 0, e.u, e.h, e.ue), e.le < 2 && e.le++, i += e.h, e._e > e.ue && (e._e = e.ue)), i > e.o.avail_in && (i = e.o.avail_in), i && (H_(e.o, e.u, e.ue, i), e.ue += i, e._e += ke(i, e.h - e._e)), e.m < e.ue && (e.m = e.ue), i = e.T + 42 >> 3, i = ke(e.ne - i, Dt), f = ke(i, e.h), r = e.ue - e.ae, (r >= f || (r || 4 == t) && 0 != t && 0 == e.o.avail_in && r <= i) && (n = ke(r, i), l = 4 == t && 0 == e.o.avail_in && n == r ? 1 : 0, Pe(e, e.u, n, l, e.ae), e.ae += n, q(e.o)), l && (e.ze = 8), l ? 2 : 0);
}
function U_(e, t) {
  let n, r = false;
  for (; ; ) {
    if (e.ce < ae) {
      if (c_(e), e.ce < ae && 0 == t) return 0;
      if (0 == e.ce) break;
    }
    if (n = 0, e.ce >= I && (n = u_(e, e.ue)), 0 != n && e.ue - n <= ye(e) && (e.se = Rt(e, n)), e.se >= I) if (e.ue, e.qe, e.se, r = e_(e, e.ue - e.qe, e.se - I), e.ce -= e.se, e.se <= e.xe && e.ce >= I) {
      e.se--;
      do {
        e.ue++, n = u_(e, e.ue);
      } while (0 != --e.se);
      e.ue++;
    } else e.ue += e.se, e.se = 0, e.be = e.u[e.ue], e.be = l_(e, e.be, e.u[e.ue + 1]);
    else r = De(e, e.u[e.ue]), e.ce--, e.ue++;
    if (r) {
      let t2 = j(e, false);
      if (null != t2) return t2;
    }
  }
  if (e._e = e.ue < I - 1 ? e.ue : I - 1, 4 == t) {
    let t2 = j(e, true);
    return null != t2 ? t2 : 3;
  }
  if (e.N) {
    let t2 = j(e, false);
    if (null != t2) return t2;
  }
  return 1;
}
function Ne(e, t) {
  let n, r = false;
  for (; ; ) {
    if (e.ce < ae) {
      if (c_(e), e.ce < ae && 0 == t) return 0;
      if (0 == e.ce) break;
    }
    if (n = 0, e.ce >= I && (n = u_(e, e.ue)), e.he = e.se, e.de = e.qe, e.se = I - 1, 0 != n && e.he < e.xe && e.ue - n <= ye(e) && (e.se = Rt(e, n), e.se <= 5 && (1 == e.ge || e.se == I && e.ue - e.qe > nt) && (e.se = I - 1)), e.he >= I && e.se <= e.he) {
      let t2 = e.ue + e.ce - I;
      e.ue, e.de, e.he, r = e_(e, e.ue - 1 - e.de, e.he - I), e.ce -= e.he - 1, e.he -= 2;
      do {
        ++e.ue <= t2 && (n = u_(e, e.ue));
      } while (0 != --e.he);
      if (e.we = 0, e.se = I - 1, e.ue++, r) {
        let t3 = j(e, false);
        if (null != t3) return t3;
      }
    } else if (e.we) {
      if (r = De(e, e.u[e.ue - 1]), r && zt(e, 0), e.ue++, e.ce--, 0 == e.o.avail_out) return 0;
    } else e.we = 1, e.ue++, e.ce--;
  }
  if (e.we && (r = De(e, e.u[e.ue - 1]), e.we = 0), e._e = e.ue < I - 1 ? e.ue : I - 1, 4 == t) {
    let t2 = j(e, true);
    return null != t2 ? t2 : 3;
  }
  if (e.N) {
    let t2 = j(e, false);
    if (null != t2) return t2;
  }
  return 1;
}
function Mn(e, t) {
  let n, r, i, f;
  for (; ; ) {
    if (e.ce <= ee) {
      if (c_(e), e.ce <= ee && 0 == t) return 0;
      if (0 == e.ce) break;
    }
    if (e.se = 0, e.ce >= I && e.ue > 0 && (i = e.ue - 1, r = e.u[i], r == ++i && r == ++i && r == ++i)) {
      f = e.ue + ee;
      do {
      } while (r == ++i && r == ++i && r == ++i && r == ++i && r == ++i && r == ++i && r == ++i && r == ++i && i < f);
      e.se = ee - (f - i), e.se > e.ce && (e.se = e.ce);
    }
    if (e.se >= I ? (e.ue, e.ue, e.se, n = e_(e, 1, e.se - I), e.ce -= e.se, e.ue += e.se, e.se = 0) : (n = De(e, e.u[e.ue]), e.ce--, e.ue++), n) {
      let t2 = j(e, false);
      if (null != t2) return t2;
    }
  }
  if (e._e = 0, 4 == t) {
    let t2 = j(e, true);
    return null != t2 ? t2 : 3;
  }
  if (e.N) {
    let t2 = j(e, false);
    if (null != t2) return t2;
  }
  return 1;
}
function Yn(e, t) {
  let n = false;
  for (; ; ) {
    if (0 == e.ce && (c_(e), 0 == e.ce)) {
      if (0 == t) return 0;
      break;
    }
    if (e.se = 0, n = De(e, e.u[e.ue]), e.ce--, e.ue++, n) {
      let t2 = j(e, false);
      if (null != t2) return t2;
    }
  }
  if (e._e = 0, 4 == t) {
    let t2 = j(e, true);
    return null != t2 ? t2 : 3;
  }
  if (e.N) {
    let t2 = j(e, false);
    if (null != t2) return t2;
  }
  return 1;
}
var ue = 852;
var d_ = 592;
var m_ = 594;
var Lt = Ee.map((e) => e + 1);
var Ct = ge.subarray(0, -1).map((e) => e + 3);
var Xn = [16, 1, 73, 1, 200, 1];
var Wn = [144, 1, 72, 1, 78, 1];
var Ut = Se.map(qt);
var Ht = Se.map(Vt);
Ut.push(64, 2), Ht.push(142, 2);
var Bt = de.slice(0, -2).map(qt);
var Ft = de.slice(0, -2).map(Vt);
Bt.push(...Xn), Ft.push(...Wn);
var Zt = new g([...Ct, 258, 0, 0]);
var Pt = new g([...Ct, 3, 0, 0]);
var Mt = te(Bt);
var Yt = te(Ft);
var Xt = new g([...Lt, 0, 0]);
var Wt = new g([...Lt, 32769, 49153]);
var Gt = te(Ut);
var Kt = te(Ht);
function qt(e, t) {
  return t % 2 ? e : e + 16;
}
function Vt(e, t) {
  return t % 2 ? e : e + 128;
}
function $t(e, t) {
  let n, r = e._, i = e.next_in_index, f = e.next_out_index, l = e.next_in, _ = e.next_out, o = r.u, a = r.p >>> 0, u = r.T >>> 0, c = r.et, s = r.tt, h = (1 << r.nt) - 1, d = (1 << r.rt) - 1, w = r.h >>> 0, b = r.m >>> 0, k2 = r.v >>> 0, g2 = r.it, m = f - (t - e.avail_out), v = f + (e.avail_out - 257), p2 = i + (e.avail_in - 5), x = 0, T9 = 0, y = 0, I2 = 0;
  e: do {
    for (; u < 15; ) {
      if (!(i < l.length)) break e;
      a += l[i++] << u, u += 8;
    }
    n = c[a & h];
    t: for (; ; ) {
      if (y = n >>> 16 & 255, a >>>= y, u -= y, y = n >>> 24, 0 == y) {
        _[f++] = 65535 & n;
        break;
      }
      if (16 & y) {
        if (x = 65535 & n, y &= 15, y) {
          for (; u < y; ) {
            if (!(i < l.length)) {
              r.ft = 16200;
              break e;
            }
            a += l[i++] << u, u += 8;
          }
          x += a & (1 << y) - 1, a >>>= y, u -= y;
        }
        for (; u < 15; ) {
          if (!(i < l.length)) {
            r.ft = 16200;
            break e;
          }
          a += l[i++] << u, u += 8;
        }
        n = s[a & d];
        n: for (; ; ) {
          if (y = n >>> 16 & 255, a >>>= y, u -= y, y = n >>> 24, 16 & y) {
            if (T9 = 65535 & n, y &= 15, y) {
              for (; u < y; ) {
                if (!(i < l.length)) {
                  r.ft = 16200;
                  break e;
                }
                a += l[i++] << u, u += 8;
              }
              T9 += a & (1 << y) - 1, a >>>= y, u -= y;
            }
            let t2 = x, c2 = f - m;
            if (T9 > c2) {
              let n2 = T9 - c2;
              if (n2 > b && g2) {
                e.msg = "invalid distance too far back", r.ft = 16209;
                break e;
              }
              if (0 == k2) {
                if (I2 = w - n2, !(n2 < t2)) {
                  for (let e2 = 0; e2 < t2; ++e2) _[f++] = o[I2++];
                  continue e;
                }
                for (let e2 = 0; e2 < n2; ++e2) _[f++] = o[I2++];
                t2 -= n2, I2 = f - T9;
              } else if (k2 < n2) {
                I2 = w + k2 - n2;
                let e2 = n2 - k2;
                if (!(e2 < t2)) {
                  for (let e3 = 0; e3 < t2; ++e3) _[f++] = o[I2++];
                  continue e;
                }
                for (let t3 = 0; t3 < e2; ++t3) _[f++] = o[I2++];
                if (t2 -= e2, I2 = 0, !(k2 < t2)) {
                  for (let e3 = 0; e3 < t2; ++e3) _[f++] = o[I2++];
                  continue e;
                }
                for (let e3 = 0; e3 < k2; ++e3) _[f++] = o[I2++];
                t2 -= k2, I2 = f - T9;
              } else {
                if (I2 = k2 - n2, !(n2 < t2)) {
                  for (let e2 = 0; e2 < t2; ++e2) _[f++] = o[I2++];
                  continue e;
                }
                for (let e2 = 0; e2 < n2; ++e2) _[f++] = o[I2++];
                t2 -= n2, I2 = f - T9;
              }
              for (; t2 > 2; ) _[f++] = _[I2++], _[f++] = _[I2++], _[f++] = _[I2++], t2 -= 3;
              t2 && (_[f++] = _[I2++], t2 > 1 && (_[f++] = _[I2++]));
            } else {
              for (I2 = f - T9; t2 > 2; ) _[f++] = _[I2++], _[f++] = _[I2++], _[f++] = _[I2++], t2 -= 3;
              t2 && (_[f++] = _[I2++], t2 > 1 && (_[f++] = _[I2++]));
            }
            break;
          }
          if (64 & y) {
            e.msg = "invalid distance code", r.ft = 16209;
            break e;
          }
          n = s[(65535 & n) + (a & (1 << y) - 1)];
          continue n;
        }
        break;
      }
      if (64 & y) {
        if (32 & y) {
          r.ft = 16191;
          break e;
        }
        e.msg = "invalid literal/length code", r.ft = 16209;
        break e;
      }
      n = c[(65535 & n) + (a & (1 << y) - 1)];
      continue t;
    }
  } while (i < p2 && f < v);
  let M2 = u >> 3;
  i -= M2, u -= M2 << 3, a &= (1 << u) - 1, e.next_in_index = i, e.next_out_index = f, e.avail_in = i < p2 ? p2 - i + 5 : 5 - (i - p2), e.avail_out = f < v ? v - f + 257 : 257 - (f - v), r.p = a >>> 0, r.T = u >>> 0;
}
var Gn = new R(0);
function M_(e, t) {
  let n = Gn, r = t ? ue + m_ : ue + d_;
  return { ...$e(e, 0), o: e, ft: 16180, lt: false, P: 0, _t: false, ot: 0, ut: 0, ct: 0, st: 0, u: Z, ht: 0, dt: 0, Ge: 0, et: n, tt: n, nt: 0, rt: 0, wt: 0, bt: 0, kt: 0, gt: 0, vt: n, xt: new g(320), Tt: new g(288), yt: new R(r), It: 0, it: true, Mt: 0, zt: 0, Ct: t };
}
function We(e, t, n) {
  return e << 24 | t << 16 | n;
}
function b_(e = 0, t = 0, n = 0) {
  return We(e, t, n);
}
function s_(e = 1) {
  return We(64, e, 0);
}
function Jt(e = 0) {
  return We(96, e, 0);
}
function Y_(e) {
  return ((255 & e) << 24 | (e >> 8 & 255) << 16 | (e >> 16 & 255) << 8 | e >> 24 & 255) >>> 0;
}
var Oe = 15;
var qn = { Ct: false, Zt, Wt: Mt, qt: Xt, Ot: Gt, St: 20, Dt: 257, jt: 0, At: d_, Qt: false, Nt: true };
var Vn = { Ct: true, Zt: Pt, Wt: Yt, qt: Wt, Ot: Kt, St: 19, Dt: 256, jt: -1, At: m_, Qt: true, Nt: false };
function Le(e, t, n, r, i, f, l, _) {
  let o, a, u, c, s, h, d, w, b, k2, m, v, p2, x, T9, y, I2, M2, z2, C2 = new g(Oe + 1), Z2 = new g(Oe + 1), W2 = _ ? Vn : qn;
  for (o = 0; o <= Oe; o++) C2[o] = 0;
  for (a = 0; a < n; a++) C2[t[a]]++;
  for (s = i.Rt, c = Oe; c >= 1 && 0 == C2[c]; c--) ;
  if (s > c && (s = c), 0 == c) return W2.Nt ? (T9 = s_(1), r.Rt[0] = T9, r.Rt[1] = T9, i.Rt = 1, 0) : -1;
  for (u = 1; u < c && 0 == C2[u]; u++) ;
  for (s < u && (s = u), w = 1, o = 1; o <= Oe; o++) if (w <<= 1, w -= C2[o], w < 0) return -1;
  if (w > 0 && (0 == e || 1 != c)) return -1;
  for (Z2[1] = 0, o = 1; o < Oe; o++) Z2[o + 1] = Z2[o] + C2[o];
  for (a = 0; a < n; a++) 0 != t[a] && (f[Z2[t[a]]++] = a);
  switch (e) {
    case 0:
      I2 = M2 = f, z2 = W2.St;
      break;
    case 1:
      I2 = W2.Zt, M2 = W2.Wt, z2 = W2.Dt;
      break;
    default:
      I2 = W2.qt, M2 = W2.Ot, z2 = W2.jt;
  }
  if (k2 = 0, a = 0, o = u, y = l.Rt, h = s, d = 0, p2 = -1, b = 1 << s, x = b - 1, 1 == e && (W2.Qt ? b >= ue : b > ue) || 2 == e && (W2.Qt ? b >= W2.At : b > W2.At)) return 1;
  for (; ; ) {
    T9 = jn(f, a, o, d, e, I2, M2, z2, W2.Ct), m = 1 << o - d, v = 1 << h, u = v;
    do {
      v -= m;
      let e2 = (k2 >> d) + v;
      r.Rt[y + e2] = T9;
    } while (0 != v);
    for (m = 1 << o - 1; k2 & m; ) m >>= 1;
    if (0 != m ? (k2 &= m - 1, k2 += m) : k2 = 0, a++, 0 == --C2[o]) {
      if (o == c) break;
      o = t[f[a]];
    }
    if (o > s && (k2 & x) != p2) {
      for (0 == d && (d = s), y += 1 << h, h = o - d, w = 1 << h; h + d < c && (w -= C2[h + d], !(w <= 0)); ) h++, w <<= 1;
      if (b += 1 << h, 1 == e && (W2.Qt ? b >= ue : b > ue) || 2 == e && (W2.Qt ? b >= W2.At : b > W2.At)) return 1;
      p2 = k2 & x, r.Rt[l.Rt + p2] = We(h, s, y - l.Rt);
    }
  }
  if (0 != k2) for (T9 = s_(o - d); 0 != k2; ) {
    for (0 != d && (k2 & x) != p2 && (d = 0, o = s, y = l.Rt, h = s, T9 = s_(o)), r.Rt[y + (k2 >> d)] = T9, m = 1 << o - 1; k2 & m; ) m >>= 1;
    0 != m ? (k2 &= m - 1, k2 += m) : k2 = 0;
  }
  return l.Rt += b, i.Rt = s, 0;
}
function jn(e, t, n, r, i, f, l, _, o) {
  let a;
  if (o ? e[t] < _ : e[t] + 1 < _) a = b_(0, n - r, e[t]);
  else if (o ? e[t] > _ : e[t] >= _) if (o && 1 == i) {
    let i2 = e[t] - 257;
    a = b_(l[i2], n - r, f[i2]);
  } else {
    let i2 = o ? e[t] : e[t] - _;
    a = b_(l[i2], n - r, f[i2]);
  }
  else a = Jt(n - r);
  return a;
}
var p_ = new R(0);
var er = { Ht: true, Jt: new R(544), Ut: p_, Et: p_ };
var _r = { Ht: true, Jt: new R(544), Ut: p_, Et: p_ };
function Qt() {
  let e = je();
  return e._ = M_(e, false), e;
}
function Ge(e) {
  let t;
  return !(e && (t = e._, !(!t || t.o != e || t.Ct && (t.ft < 16191 || t.ft > 16209) || !t.Ct && (t.ft < 16180 || t.ft > 16211))));
}
function tr(e) {
  let t;
  return Ge(e) ? -2 : (t = e._, e.total_in = e.total_out = t.st = 0, e.msg = "", t.P && (e.i = 1 & t.P), t.ft = t.Ct ? 16191 : 16180, t.lt = false, t._t = false, t.ot = -1, t.ut = t.Ct ? 65536 : 32768, delete t.B, t.p = 0, t.T = 0, t.et = t.yt, t.tt = t.yt, t.vt = t.yt, t.it = true, t.Mt = -1, 0);
}
function nr(e) {
  let t;
  return Ge(e) ? -2 : (t = e._, t.h = 0, t.m = 0, t.v = 0, tr(e));
}
function rr(e, t) {
  let n, r;
  if (Ge(e)) return -2;
  if (r = e._, t < 0) {
    if (t < -16) return -2;
    n = 0, r.Ct = -16 == t, t = -t;
  } else n = 5 + (t >> 4), r.Ct = false, t < 48 && (t &= 15);
  let i = r.Ct ? 16 : 15;
  return t && (t < 8 || t > i) ? -2 : (r.u.length > 0 && r.k != t && (r.u = Z), r.P = n, r.k = t, nr(e));
}
function en(e, t) {
  let n, r;
  if (!e) return -2;
  e.msg = "";
  let i = -16 == t;
  return r = M_(e, i), e._ = r, r.o = e, r.ft = i ? 16191 : 16180, n = rr(e, t), n;
}
function ar(e) {
  let t = e.Ct ? _r : er, n = { Rt: 0 };
  if (t.Ht) {
    let r, i, f;
    for (r = 0; r < 144; ) e.xt[r++] = 8;
    for (; r < 256; ) e.xt[r++] = 9;
    for (; r < 280; ) e.xt[r++] = 7;
    for (; r < 288; ) e.xt[r++] = 8;
    t.Jt.fill(0), f = t.Jt, t.Ut = f, i = 9;
    let l = { Rt: f }, _ = { Rt: i }, o = { Rt: 0 };
    for (Le(1, e.xt, 288, l, _, e.Tt, o, e.Ct), f = l.Rt, i = _.Rt, e.It = o.Rt, r = 0; r < 32; ) e.xt[r++] = 5;
    i = 5;
    let a = o.Rt, u = { Rt: f }, c = { Rt: i };
    n.Rt = a, Le(2, e.xt, 32, u, c, e.Tt, n, e.Ct), t.Et = f.slice(a), t.Ht = false;
  }
  e.et = t.Ut, e.nt = 9, e.tt = t.Et, e.rt = 5, e.It = n.Rt;
}
function ir(e, t, n) {
  let r = e._;
  if (!(r.u && 0 != r.u.length || (r.u = new p(1 << r.k), r.u))) return 1;
  if (0 == r.h && (r.h = 1 << r.k, r.v = 0, r.m = 0), n >= r.h) M(r.u, 0, t, t.length - r.h, r.h), r.v = 0, r.m = r.h;
  else {
    let e2 = r.h - r.v;
    e2 > n && (e2 = n), M(r.u, r.v, t, t.length - n, e2), (n -= e2) ? (M(r.u, 0, t, t.length - n, n), r.v = n, r.m = r.h) : (r.v += e2, r.v == r.h && (r.v = 0), r.m < r.h && (r.m += e2));
  }
  return 0;
}
var S_ = class extends z {
  constructor() {
    super("Need more input");
  }
};
function _n(e, t) {
  let n, r, i, f, l, _, o, a, u, c, s, h, d, w, b, k2, g2, m = new p(4);
  if (Ge(e) || !e.next_out || !e.next_in && 0 != e.avail_in) return -2;
  _ = 0, a = 0, o = 0, u = 0, r = Z, i = 0, f = Z, l = 0, n = e._, 16191 == n.ft && (n.ft = 16192), I2(), c = _, s = o, g2 = 0;
  try {
    for (; ; ) switch (n.ft) {
      case 16180:
        if (0 == n.P) {
          n.ft = 16192;
          break;
        }
        if (O2(16), 2 & n.P && 35615 == a) {
          0 == n.k && (n.k = 15), n.ct = W(0), n.ct = T9(n.ct, a), C2(), n.ft = 16181;
          break;
        }
        if (n.B && (n.B.Yt = -1), !(1 & n.P) || ((S(8) << 8) + (a >> 8)) % 31) {
          e.msg = "incorrect header check", n.ft = 16209;
          break;
        }
        if (8 != S(4)) {
          e.msg = "unknown compression method", n.ft = 16209;
          break;
        }
        if (D(4), k2 = S(4) + 8, 0 == n.k && (n.k = k2), k2 > 15 || k2 > n.k) {
          e.msg = "invalid window size", n.ft = 16209;
          break;
        }
        n.ut = 1 << k2, n.ot = 0, e.i = n.ct = se(0), n.ft = 512 & a ? 16189 : 16191, C2();
        break;
      case 16181:
        if (O2(16), n.ot = a, 8 != (255 & n.ot)) {
          e.msg = "unknown compression method", n.ft = 16209;
          break;
        }
        if (57344 & n.ot) {
          e.msg = "unknown header flags set", n.ft = 16209;
          break;
        }
        n.B && (n.B.Fe = a >> 8 & 1), 512 & n.ot && 4 & n.P && (n.ct = T9(n.ct, a)), C2(), n.ft = 16182;
      case 16182:
        O2(32), n.B && (n.B.Xe = a), 512 & n.ot && 4 & n.P && (n.ct = y(n.ct, a)), C2(), n.ft = 16183;
      case 16183:
        O2(16), n.B && (n.B.Pt = 255 & a, n.B.$e = a >> 8), 512 & n.ot && 4 & n.P && (n.ct = T9(n.ct, a)), C2(), n.ft = 16184;
      case 16184:
        1024 & n.ot ? (O2(16), n.ht = a, n.B && (n.B.Ke = a), 512 & n.ot && 4 & n.P && (n.ct = T9(n.ct, a)), C2()) : n.B && (n.B.Ge = Z), n.ft = 16185;
      case 16185:
        if (1024 & n.ot && (h = n.ht, h > _ && (h = _), h && (n.B && n.B.Ge && n.B.Bt && (k2 = n.B.Ke - n.ht) < n.B.Bt && M(n.B.Ge, k2, r, i, h), 512 & n.ot && 4 & n.P && (n.ct = W(n.ct, r.subarray(i, i + h), h)), _ -= h, i += h, n.ht -= h), n.ht)) return v();
        n.ht = 0, n.ft = 16186;
      case 16186:
        if (2048 & n.ot) {
          if (0 == _) return v();
          h = 0;
          do {
            k2 = r[i + h++], n.B && n.B.Ft && n.ht < n.B.Ft && (n.B.Ve[n.ht++] = k2);
          } while (k2 && h < _);
          if (512 & n.ot && 4 & n.P && (n.ct = W(n.ct, r.subarray(i, i + h), h)), _ -= h, i += h, k2) return v();
        } else n.B && (n.B.Ve = Z);
        n.ht = 0, n.ft = 16187;
      case 16187:
        if (4096 & n.ot) {
          if (0 == _) return v();
          h = 0;
          do {
            k2 = r[i + h++], n.B && n.B.Gt && n.ht < n.B.Gt && (n.B.Le[n.ht++] = k2);
          } while (k2 && h < _);
          if (512 & n.ot && 4 & n.P && (n.ct = W(n.ct, r.subarray(i, i + h), h)), _ -= h, i += h, k2) return v();
        } else n.B && (n.B.Le = Z);
        n.ft = 16188;
      case 16188:
        if (512 & n.ot) {
          if (O2(16), 4 & n.P && a != (65535 & n.ct)) {
            e.msg = "header crc mismatch", n.ft = 16209;
            break;
          }
          C2();
        }
        n.B && (n.B.Be = n.ot >> 9 & 1, n.B.Yt = 1), e.i = n.ct = W(0), n.ft = 16191;
        break;
      case 16189:
        O2(32), e.i = n.ct = Y_(a), C2(), n.ft = 16190;
      case 16190:
        if (!n._t) return z2(), 2;
        e.i = n.ct = se(0), n.ft = 16191;
      case 16191:
        if (5 == t || 6 == t) return v();
      case 16192:
        if (n.lt) {
          j2(), n.ft = 16206;
          break;
        }
        switch (O2(3), n.lt = !!S(1), D(1), S(2)) {
          case 0:
            n.ft = 16193;
            break;
          case 1:
            if (ar(n), n.ft = 16199, 6 == t) return D(2), v();
            break;
          case 2:
            n.ft = 16196;
            break;
          case 3:
            e.msg = "invalid block type", n.ft = 16209;
        }
        D(2);
        break;
      case 16193:
        if (j2(), O2(32), (65535 & a) != (a >>> 16 ^ 65535)) {
          e.msg = "invalid stored block lengths", n.ft = 16209;
          break;
        }
        if (n.ht = 65535 & a, C2(), n.ft = 16194, 6 == t) return v();
      case 16194:
        n.ft = 16195;
      case 16195:
        if (h = n.ht, h) {
          if (h > _ && (h = _), h > o && (h = o), 0 == h) return v();
          M(f, l, r, i, h), _ -= h, i += h, o -= h, l += h, n.ht -= h;
          break;
        }
        n.ft = 16191;
        break;
      case 16196:
        if (O2(14), n.bt = S(5) + 257, D(5), n.kt = S(5) + 1, D(5), n.wt = S(4) + 4, D(4), n.bt > 286 || !n.Ct && n.kt > 30) {
          e.msg = n.Ct ? "too many length" : "too many length or distance symbols", n.ft = 16209;
          break;
        }
        n.gt = 0, n.ft = 16197;
      case 16197:
        for (; n.gt < n.wt; ) O2(3), n.xt[pe[n.gt++]] = S(3), D(3);
        for (; n.gt < 19; ) n.xt[pe[n.gt++]] = 0;
        n.vt = n.yt, n.et = n.tt = n.vt, n.nt = 7;
        let c2 = { Rt: n.vt }, m2 = { Rt: n.nt }, p2 = { Rt: 0 };
        if (g2 = Le(0, n.xt, 19, c2, m2, n.Tt, p2, n.Ct), n.vt = c2.Rt, n.nt = m2.Rt, g2) {
          e.msg = "invalid code lengths set", n.ft = 16209;
          break;
        }
        n.gt = 0, n.ft = 16198;
      case 16198:
        for (; n.gt < n.bt + n.kt; ) {
          for (; w = n.et[S(n.nt)], !((w >>> 16 & 255) <= u); ) q2();
          if ((65535 & w) < 16) D(w >>> 16 & 255), n.xt[n.gt++] = 65535 & w;
          else {
            if (16 == (65535 & w)) {
              if (O2(2 + (w >>> 16 & 255)), D(w >>> 16 & 255), 0 == n.gt) {
                e.msg = "invalid bit length repeat", n.ft = 16209;
                break;
              }
              k2 = n.xt[n.gt - 1], h = 3 + S(2), D(2);
            } else 17 == (65535 & w) ? (O2(3 + (w >>> 16 & 255)), D(w >>> 16 & 255), k2 = 0, h = 3 + S(3), D(3)) : (O2(7 + (w >>> 16 & 255)), D(w >>> 16 & 255), k2 = 0, h = 11 + S(7), D(7));
            if (n.gt + h > n.bt + n.kt) {
              e.msg = "invalid bit length repeat", n.ft = 16209;
              break;
            }
            for (; h--; ) n.xt[n.gt++] = k2;
          }
        }
        if (16209 == n.ft) break;
        if (0 == n.xt[256]) {
          e.msg = "invalid code -- missing end-of-block", n.ft = 16209;
          break;
        }
        n.vt = n.yt, n.nt = 9;
        let A = { Rt: n.vt }, Q2 = { Rt: n.nt }, N = { Rt: 0 };
        g2 = Le(1, n.xt, n.bt, A, Q2, n.Tt, N, n.Ct), n.vt = A.Rt, n.nt = Q2.Rt;
        let R2 = N.Rt;
        if (n.et = n.vt.slice(0, R2), g2) {
          e.msg = "invalid literal/lengths set", n.ft = 16209;
          break;
        }
        n.rt = 6;
        let H2 = n.xt.subarray(n.bt, n.bt + n.kt), J2 = { Rt: n.vt }, U = { Rt: n.rt }, E = { Rt: R2 };
        if (g2 = Le(2, H2, n.kt, J2, U, n.Tt, E, n.Ct), n.vt = J2.Rt, n.rt = U.Rt, n.tt = n.vt.slice(R2), g2) {
          e.msg = "invalid distances set", n.ft = 16209;
          break;
        }
        if (n.ft = 16199, 6 == t) return v();
      case 16199:
        n.ft = 16200;
      case 16200:
        if (!n.Ct && _ >= 6 && o >= 258) {
          z2(), $t(e, s), I2(), 16191 == n.ft && (n.Mt = -1);
          break;
        }
        for (n.Mt = 0; w = n.et[S(n.nt)], !((w >>> 16 & 255) <= u); ) q2();
        if (w >>> 24 && !(w >>> 24 & 240)) {
          for (b = w; w = n.et[(65535 & b) + (S((b >>> 16 & 255) + (b >>> 24)) >> (b >>> 16 & 255))], !((b >>> 16 & 255) + (w >>> 16 & 255) <= u); ) q2();
          D(b >>> 16 & 255), n.Mt += b >>> 16 & 255;
        }
        if (D(w >>> 16 & 255), n.Mt += w >>> 16 & 255, n.ht = 65535 & w, !(w >>> 24)) {
          n.ft = 16205;
          break;
        }
        if (w >>> 24 & 32) {
          n.Mt = -1, n.ft = 16191;
          break;
        }
        if (w >>> 24 & 64) {
          e.msg = "invalid literal/length code", n.ft = 16209;
          break;
        }
        n.Ge = w >>> 24 & (n.Ct ? 31 : 15), n.ft = 16201;
      case 16201:
        n.Ge && (O2(n.Ge), n.ht += S(n.Ge), D(n.Ge), n.Mt += n.Ge), n.zt = n.ht, n.ft = 16202;
      case 16202:
        for (; w = n.tt[S(n.rt)], !((w >>> 16 & 255) <= u); ) q2();
        if (!(w >>> 24 & 240)) {
          for (b = w; w = n.tt[(65535 & b) + (S((b >>> 16 & 255) + (b >>> 24)) >> (b >>> 16 & 255))], !((b >>> 16 & 255) + (w >>> 16 & 255) <= u); ) q2();
          D(b >>> 16 & 255), n.Mt += b >>> 16 & 255;
        }
        if (D(w >>> 16 & 255), n.Mt += w >>> 16 & 255, w >>> 24 & 64) {
          e.msg = "invalid distance code", n.ft = 16209;
          break;
        }
        n.dt = 65535 & w, n.Ge = w >>> 24 & 15, n.ft = 16203;
      case 16203:
        n.Ge && (O2(n.Ge), n.dt += S(n.Ge), D(n.Ge), n.Mt += n.Ge), n.ft = 16204;
      case 16204:
        if (0 == o) return v();
        if (h = s - o, n.dt > h) {
          if (h = n.dt - h, h > n.m && n.it) {
            e.msg = "invalid distance too far back", n.ft = 16209;
            break;
          }
          h > n.v ? (h -= n.v, d = n.h - h) : d = n.v - h, h > n.ht && (h = n.ht), h > o && (h = o);
          for (let e2 = 0; e2 < h; ++e2) f[l] = 255 & n.u[d], ++l, ++d;
        } else {
          d = l - n.dt, h = n.ht, h > o && (h = o);
          for (let e2 = 0; e2 < h; ++e2) f[l] = f[d], ++l, ++d;
        }
        h > o && (h = o), o -= h, n.ht -= h, 0 == n.ht && (n.ft = 16200);
        break;
      case 16205:
        if (0 == o) return v();
        f[l++] = n.ht, o--, n.ft = 16200;
        break;
      case 16206:
        if (n.P) {
          if (O2(32), s -= o, e.total_out += s, n.st += s, 4 & n.P && s) {
            let t2 = f.subarray(l - s, l);
            e.i = n.ct = x(n.ct, t2, s);
          }
          if (s = o, 4 & n.P && (n.ot ? a : Y_(a) >>> 0) != n.ct) {
            e.msg = "incorrect data check", n.ft = 16209;
            break;
          }
          C2();
        }
        n.ft = 16207;
      case 16207:
        if (n.P && n.ot) {
          if (O2(32), 4 & n.P && a != (4294967295 & n.st)) {
            e.msg = "incorrect length check", n.ft = 16209;
            break;
          }
          C2();
        }
        n.ft = 16208;
      case 16208:
        return g2 = 1, v();
      case 16209:
        return g2 = -3, v();
      case 16210:
        return -4;
      default:
        return -2;
    }
  } catch (e2) {
    if (e2 instanceof S_) return v();
    throw e2;
  }
  function v() {
    if (z2(), n.h || s != e.avail_out && n.ft < 16209 && ((n.Ct ? n.ft < 16208 : n.ft < 16206) || 4 != t)) {
      let t2 = s - e.avail_out;
      if (ir(e, e.next_out.subarray(e.next_out_index - t2, e.next_out_index), t2)) return n.ft = 16210, -4;
    }
    return c -= e.avail_in, s -= e.avail_out, e.total_in += c, e.total_out += s, n.st += s, 4 & n.P && s && (e.i = n.ct = x(n.ct, e.next_out.subarray(e.next_out_index - s, e.next_out_index), s)), e.t = n.T + (n.lt ? 64 : 0) + (16191 == n.ft ? 128 : 0) + (16199 == n.ft || 16194 == n.ft ? 256 : 0), (0 == c && 0 == s && 0 == g2 || 4 == t && 0 == g2) && (g2 = -5), g2;
  }
  function x(e2, t2, r2) {
    return n.ot ? W(e2, t2, r2) : se(e2, t2, r2);
  }
  function T9(e2, t2) {
    return m[0] = 255 & t2, m[1] = t2 >>> 8 & 255, W(e2, m, 2) >>> 0;
  }
  function y(e2, t2) {
    return m[0] = 255 & t2, m[1] = t2 >>> 8 & 255, m[2] = t2 >>> 16 & 255, m[3] = t2 >>> 24 & 255, W(e2, m, 4) >>> 0;
  }
  function I2() {
    f = e.next_out, l = e.next_out_index, o = e.avail_out, r = e.next_in, i = e.next_in_index, _ = e.avail_in, a = n.p, u = n.T;
  }
  function z2() {
    e.next_out = f, e.next_out_index = l, e.avail_out = o, e.next_in = r, e.next_in_index = i, e.avail_in = _, n.p = a, n.T = u;
  }
  function C2() {
    a = 0, u = 0;
  }
  function q2() {
    if (0 == _) throw new S_();
    _--, a += (255 & r[i]) << u, i++, a >>>= 0, u += 8;
  }
  function O2(e2) {
    for (; u < e2; ) q2();
  }
  function S(e2) {
    return a & (1 << e2) - 1;
  }
  function D(e2) {
    a >>>= e2, u -= e2;
  }
  function j2() {
    a >>>= 7 & u, u -= 7 & u;
  }
}
function tn(e) {
  return Ge(e) ? -2 : 0;
}
var X_ = 65536;
var or = 32768;
var nn = "trailing data after the end of the stream";
var W_ = class {
  constructor(e = 16, t = X_) {
    this.Vt = [], this.Lt = e;
    for (let n = 0; n < O.min(e, 4); n++) this.Vt.push(new p(t));
  }
  acquire(e = X_) {
    for (let t = this.Vt.length - 1; t >= 0; t--) {
      let n = this.Vt[t];
      if (n.length >= e) return this.Vt.splice(t, 1), n;
    }
    return new p(e);
  }
  release(e) {
    this.Vt.length < this.Lt && this.Vt.push(e);
  }
};
function rn(e) {
  let t = new W_(32, X_), n = null;
  function r() {
    let t2 = e.Xt(), n2 = e.$t(t2);
    if (0 != n2 && 0 != n2) throw new z("init failed: " + n2);
    return { o: t2 };
  }
  function i(e2) {
    try {
      t.release(e2);
    } catch {
    }
  }
  return new H({ start() {
  }, transform(f, l) {
    n || (n = r());
    let _ = n.o;
    if (n.Kt) {
      if (f.length) throw new z(nn);
      return;
    }
    let o = 0;
    for (; o < f.length; ) {
      let r2 = O.min(f.length - o, or), a = f.subarray(o, o + r2);
      for (_.next_in = a, _.next_in_index = 0, _.avail_in = a.length; _.avail_in > 0; ) {
        let r3 = t.acquire(), f2 = false;
        try {
          _.next_out = r3, _.next_out_index = 0, _.avail_out = r3.length;
          let i2 = e.en(_, 0), o2 = r3.length - _.avail_out;
          if (o2 > 0) {
            let e2 = false, n2 = { tn: r3.subarray(0, o2), release: () => {
              e2 || (e2 = true, t.release(r3));
            } };
            f2 = true, l.enqueue(n2);
          }
          if (1 == i2) {
            n.Kt = true;
            break;
          }
          if (0 != i2) throw new z("process error: " + i2);
        } finally {
          f2 || i(r3);
        }
      }
      if (n.Kt) {
        if (_.avail_in > 0 || o + r2 < f.length) throw new z(nn);
        break;
      }
      o += r2;
    }
  }, flush(f) {
    if (n && n.Kt) return;
    n || (n = r());
    let l = n.o;
    for (; ; ) {
      let n2 = t.acquire(), r2 = false;
      try {
        l.next_out = n2, l.next_out_index = 0, l.avail_out = n2.length;
        let i2 = e.en(l, 4), _2 = n2.length - l.avail_out;
        if (_2 > 0) {
          let e2 = false, i3 = { tn: n2.subarray(0, _2), release: () => {
            e2 || (e2 = true, t.release(n2));
          } };
          r2 = true, f.enqueue(i3);
        }
        if (1 == i2) break;
        if (0 != i2) throw new z("finalization error: " + i2);
      } finally {
        r2 || i(n2);
      }
    }
    let _ = e.nn(l);
    if (0 != _ && 0 != _) throw new z("end failed: " + _);
  } });
}
function an() {
  return new H({ start() {
  }, transform(e, t) {
    try {
      t.enqueue(e.tn.slice(0));
    } finally {
      e.release();
    }
  }, flush() {
  } });
}
var fr = /* @__PURE__ */ new Map([["deflate", 15], ["gzip", 31], ["deflate-raw", -15]]);
var lr = /* @__PURE__ */ new Map([["deflate", 15], ["gzip", 31], ["deflate-raw", -15], ["deflate64-raw", -16]]);
function on(e, t) {
  let n = e.get(t);
  if (void 0 === n) throw new TypeError(`Unsupported format: ${t}`);
  return n;
}
function ur(e = "deflate", t) {
  let n = on(fr, e), r = t && "number" == typeof t.level ? t.level : -1;
  return rn({ Xt: () => vt(), $t: (e2) => kt(e2, r, 8, n, 8, 0), en: Nt, nn: P_ });
}
function cr(e = "deflate") {
  let t = on(lr, e);
  return rn({ Xt: () => Qt(), $t: (e2) => en(e2, t), en: _n, nn: tn });
}
var E_ = class {
  constructor(e = "deflate", t) {
    let n = ur(e, t);
    this.writable = n.writable, this.readable = n.readable.pipeThrough(an());
  }
};
var g_ = class {
  constructor(e = "deflate") {
    let t = cr(e);
    this.writable = t.writable, this.readable = t.readable.pipeThrough(an());
  }
};

// node_modules/@zip.js/zip.js/lib/zip-module-native.js
init_codec_pool();
setDefaultConfiguration({
  workerURI: "./core/web-worker-native.js",
  wasmURI: null,
  CompressionStreamFallback: E_,
  DecompressionStreamFallback: g_
});
export {
  Adb,
  AdbDaemonTransport,
  AdbDaemonWebUsbDevice,
  AdbDaemonWebUsbDeviceManager,
  AdbWebCredentialStore,
  BlobReader,
  ZipReader,
  ZipWriter,
  configure as configureZip
};
