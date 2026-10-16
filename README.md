# tome-os.com

The website for Tome OS and Telemancer. Plain HTML and CSS, no build step:
open `index.html` through any local web server to preview it (the pages use
root-relative links like `/assets/site.css`).

The source for Tome OS and Telemancer lives in the private `alid0n/tome-os`
repo. This repo is public so GitHub Pages can serve it for free, and its
Releases page is where public downloads go.

| Path | What |
| --- | --- |
| `index.html` | Home page: Tome OS (features, the per-phone download table, install steps) |
| `install/` | The Tome OS web installer (WebUSB, Chrome or Edge). It flashes a `tome-os-<version>-<codename>-factory.zip` the visitor chooses; fastboot.js is vendored in `install/vendor/` |
| `logs/` | Collect phone logs: saves `logcat -d` and basic phone details to a file over USB debugging (Tango ADB, from `install/vendor/`) |
| `legal.html` | Privacy and legal for Tome OS itself (`/legal`): no statistics server, no usage statistics. The setup wizard links here |
| `telemancer/` | Telemancer: features, plans, download, install, questions |
| `os/` | Forwards old `/os/` links to the home page |
| `t.html` | Telemancer invite links (`tome-os.com/t#...`). The invite rides after the `#`, which browsers never send to the server |
| `downloads/Telemancer.apk` | The Telemancer app |
| `telemancer/version.json` | The newest Telemancer version; the app reads it to offer updates |
| `.well-known/assetlinks.json` | Lets `tome-os.com/t` invite links open Telemancer directly. Holds the signing certificate's SHA-256, so it must change if the signing key ever does |
| `assets/site.css` | The theme and the parts every page shares |

## The installer's answer to "Add Google apps?"

The installer asks it while Tome OS downloads and keeps the answer in the
browser (`localStorage["tome-choices"]`). Nothing written to the phone
before it's locked survives the wipe locking does, so the answer goes to
the phone over USB debugging in the installer's last step (Move files back),
as `adb shell settings put global tome_google_apps 1` (yes) or `0` (no).
Tome OS reads `Settings.Global` `tome_google_apps` and installs microG when
it's `1`; with no value, nobody was asked. The name and values live in
`HANDOFF` in `install/index.html`.

## Publishing a new Telemancer build

1. Replace `downloads/Telemancer.apk`. Sign it with the same key as every
   earlier build, or installed copies can't update and invite links stop
   opening the app.
2. Put its new SHA-256 (`sha256sum downloads/Telemancer.apk`) in
   `telemancer/index.html`, in the `.sum` code block.
3. Bump `versionCode` and `versionName` in `telemancer/version.json` to match
   the build.
4. Commit and push to `main`. Pages redeploys in about a minute.

## Publishing a Tome OS build

Make a release on this repo with `tome-os-<version>-<codename>-factory.zip`
(for the web installer), `tome-os-<version>-<codename>.zip`,
`tome-os-<version>-<codename>-boot.zip` and a `.sha256` beside each. The
download table on the home page fills itself in from the newest releases.

## Hosting

GitHub Pages from `main`, root folder. `CNAME` holds `tome-os.com`. DNS at
GoDaddy: four `A` records for `@` to 185.199.108.153, 185.199.109.153,
185.199.110.153 and 185.199.111.153, and `www` as a `CNAME` to
`alid0n.github.io`.
