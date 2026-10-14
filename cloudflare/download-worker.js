// Tome OS download relay, a Cloudflare Worker.
//
// The install page (tome-os.com/install) downloads Tome OS itself and sends it
// straight to the phone, so nobody has to find or pick a file. Browsers only
// let a page read a download when the server says that page may, and GitHub's
// release files don't say so. This Worker fetches the same files from this
// repository's releases and adds that permission for tome-os.com. It keeps
// nothing, and passes Range requests through so a stopped download can resume.
//
// Setup: dash.cloudflare.com › Workers & Pages › Create › Start with Hello
// World › name it "tome-download" › Deploy › Edit code › replace everything
// with this file › Deploy. Then put its address in DOWNLOAD_RELAY in
// install/index.html.

const REPO = "alid0n/tome-os-site";
const ORIGINS = ["https://tome-os.com", "https://www.tome-os.com"];

export default {
  async fetch(request) {
    const origin = request.headers.get("Origin");
    const cors = {
      "Access-Control-Allow-Origin": ORIGINS.includes(origin) ? origin : ORIGINS[0],
      "Access-Control-Allow-Methods": "GET, HEAD",
      "Access-Control-Allow-Headers": "Range",
      "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges",
      "Vary": "Origin",
    };
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: { ...cors, "Access-Control-Max-Age": "86400" } });
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Only downloads here.", { status: 405, headers: cors });
    }
    // /<release tag>/<file>, and only Tome OS's own files.
    const path = new URL(request.url).pathname.match(/^\/([\w.-]+)\/(tome-os-[\w.-]+)$/);
    if (!path) return new Response("Not found.", { status: 404, headers: cors });

    const range = request.headers.get("Range");
    const upstream = await fetch(`https://github.com/${REPO}/releases/download/${path[1]}/${path[2]}`, {
      method: request.method,
      headers: range ? { Range: range } : {},
      redirect: "follow",
    });
    const headers = new Headers(cors);
    for (const name of ["Content-Length", "Content-Range", "Content-Type", "Accept-Ranges", "ETag", "Last-Modified"]) {
      const value = upstream.headers.get(name);
      if (value) headers.set(name, value);
    }
    return new Response(upstream.body, { status: upstream.status, headers });
  },
};
