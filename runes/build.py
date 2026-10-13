#!/usr/bin/env python3
"""Write the rune cards into runes/index.html from runes/index.json.

The gallery works without JavaScript, so every card is plain HTML in the page.
After adding or changing a rune, run this from the repo root:

    python3 runes/build.py

It checks each rune file against the version 1 format, then replaces
everything between <!-- runes:start --> and <!-- runes:end --> in index.html.
Standard library only.
"""
import html
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPORT_TO = "alid0ndev@gmail.com"

COLOR_KEYS = ["abyss", "night", "page", "cover", "starlight", "blue", "purple", "onAccent", "muted"]
FONTS = {"serif", "sans", "mono", "rounded"}
BACKDROPS = {"dust", "plain", "scanlines"}
STYLES = {"none", "fade", "slide", "rise", "scale", "zoom"}
HEX = re.compile(r"^#[0-9A-Fa-f]{6}$")
ID = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")


def fail(rune_id, msg):
    sys.exit(f"{rune_id}: {msg}")


def check(r, entry):
    rid = entry["id"]
    if r.get("tomeRune") != 1:
        fail(rid, "tomeRune must be 1")
    for key in ("id", "name", "author", "version", "about"):
        if not isinstance(r.get(key), str) or not r[key].strip():
            fail(rid, f"needs a {key}")
    if r["id"] != rid or not ID.match(rid):
        fail(rid, "id must match index.json and use only a-z, 0-9 and dashes")
    for key in ("name", "author", "about"):
        if r[key] != entry[key]:
            fail(rid, f"{key} differs between the rune and index.json")
    if not any(k in r for k in ("theme", "transition", "blocks")):
        fail(rid, "changes nothing: add a theme, a transition or blocks")
    t = r.get("theme")
    if t is not None:
        for k, v in t.items():
            if k in COLOR_KEYS and not (isinstance(v, str) and HEX.match(v)):
                fail(rid, f"theme.{k} must be a #RRGGBB color")
        if "font" in t and t["font"] not in FONTS:
            fail(rid, "theme.font must be serif, sans, mono or rounded")
        if "backdrop" in t and t["backdrop"] not in BACKDROPS:
            fail(rid, "theme.backdrop must be dust, plain or scanlines")
        if "corner" in t and not (isinstance(t["corner"], int) and 0 <= t["corner"] <= 32):
            fail(rid, "theme.corner must be a whole number from 0 to 32")
    tr = r.get("transition")
    if tr is not None:
        if tr.get("style") not in STYLES:
            fail(rid, "transition.style is not one of " + ", ".join(sorted(STYLES)))
        if "ms" in tr and not (isinstance(tr["ms"], int) and 0 <= tr["ms"] <= 1500):
            fail(rid, "transition.ms must be from 0 to 1500")
        if "easing" in tr and not (isinstance(tr["easing"], list) and len(tr["easing"]) == 4):
            fail(rid, "transition.easing must be four numbers")
    for b in r.get("blocks", []):
        if not isinstance(b.get("title"), str) or not isinstance(b.get("script"), (str, list)):
            fail(rid, "each block needs a title and a script")
        script = b["script"] if isinstance(b["script"], str) else "\n".join(b["script"])
        for word in ("http", "socket", "io", "os", "require", "load", "loadstring", "dofile", "debug"):
            if re.search(r"\b" + word + r"\b", script):
                fail(rid, f"block script mentions '{word}', which runes can't use")
    kinds = [k for k, key in (("colors", "theme"), ("motion", "transition"), ("blocks", "blocks")) if key in r]
    if sorted(kinds) != sorted(entry["kinds"]):
        fail(rid, f"kinds in index.json should be {kinds}")


def is_light(hex_color):
    r, g, b = (int(hex_color[i:i + 2], 16) / 255 for i in (1, 3, 5))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.5


def chips(r):
    out = []
    t = r.get("theme")
    if t:
        if any(k in t for k in COLOR_KEYS):
            out.append("Light colors" if "night" in t and is_light(t["night"]) else "Colors")
        if "font" in t:
            out.append(t["font"].capitalize() + " font")
        if "corner" in t:
            out.append("Sharp corners" if t["corner"] <= 6 else "Round corners")
        if t.get("backdrop") in ("dust", "scanlines"):
            out.append(t["backdrop"].capitalize() + " backdrop")
    tr = r.get("transition")
    if tr:
        out.append("No tab motion" if tr["style"] == "none" else f"{tr['style'].capitalize()} between tabs")
    for b in r.get("blocks", []):
        out.append("Block: " + b["title"])
    return out


def preview(r):
    t = r.get("theme") or {}
    tr = r.get("transition") or {}
    blocks = r.get("blocks") or []
    has_colors = any(k in t for k in COLOR_KEYS)
    style = []
    for k in COLOR_KEYS:
        if k in t:
            style.append(f"--r-{k.lower()}:{t[k]}")
    if "corner" in t:
        style.append(f"--r-corner:{t['corner']}px")
    if "ms" in tr:
        style.append(f"--r-ms:{tr['ms']}ms")
    if "easing" in tr:
        style.append("--r-ease:cubic-bezier(" + ",".join(str(x) for x in tr["easing"]) + ")")
    classes = ["preview", "themed" if has_colors else "neutral"]
    if t.get("font"):
        classes.append("font-" + t["font"])
    if t.get("backdrop"):
        classes.append("bd-" + t["backdrop"])
    if tr.get("style"):
        classes.append("mv-" + tr["style"])

    rail = '<span class="pv-rail"><i class="on"></i><i></i><i></i><i></i></span>'
    if blocks:
        b = blocks[0]
        main = (
            '<span class="pv-main pv-anim">'
            f'<span class="pv-block big"><b>{html.escape(b["title"])}</b><i></i><i class="short"></i></span>'
            '<span class="pv-block"><i></i></span>'
            '</span>'
        )
    elif has_colors:
        main = (
            '<span class="pv-main pv-anim">'
            '<span class="pv-clock">Aa</span>'
            '<span class="pv-block"><i></i><i class="short"></i></span>'
            '<span class="pv-dots"><i class="d1"></i><i class="d2"></i><i class="d3"></i></span>'
            '</span>'
        )
    else:
        main = (
            '<span class="pv-main pv-stack">'
            '<span class="pv-page back"></span><span class="pv-page front pv-anim"><i></i><i class="short"></i></span>'
            '</span>'
        )
    style_attr = f' style="{";".join(style)}"' if style else ""
    return f'<div class="{" ".join(classes)}"{style_attr} aria-hidden="true"><span class="pv-screen">{main}{rail}</span></div>'


def card(entry, r, raw):
    rid = entry["id"]
    name = html.escape(r["name"])
    kinds = " ".join(entry["kinds"])
    search = html.escape(" ".join([r["name"], r["author"], r["about"]] + chips(r)).lower())
    chip_html = "".join(f'<li class="pill planned">{html.escape(c)}</li>' for c in chips(r))
    report = f"mailto:{REPORT_TO}?subject=Report%20rune%20{rid}"
    return f"""
      <li class="card rune" id="rune-{rid}" data-kinds="{kinds}" data-search="{search}">
        {preview(r)}
        <h3>{name}</h3>
        <p class="by">by {html.escape(r["author"])} · version {html.escape(r["version"])}</p>
        <p class="about">{html.escape(r["about"])}</p>
        <ul class="chips" aria-label="What it changes">{chip_html}</ul>
        <div class="rune-actions">
          <a class="btn primary" href="{html.escape(entry["file"])}" download="{rid}.rune"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 V15 M7 10 L12 15 L17 10 M5 20 H19"/></svg>Install<span class="visually-hidden"> {name}</span></a>
          <a class="report" href="{report}">Report<span class="visually-hidden"> {name}</span></a>
        </div>
        <details class="code">
          <summary>View code<span class="visually-hidden"> for {name}</span></summary>
          <pre tabindex="0" aria-label="The code of {name}"><code>{html.escape(raw.rstrip())}</code></pre>
        </details>
      </li>"""


def main():
    index = json.loads((HERE / "index.json").read_text())
    cards = []
    for entry in index["runes"]:
        raw = (HERE / entry["file"]).read_text()
        r = json.loads(raw)
        check(r, entry)
        cards.append(card(entry, r, raw))
    page = HERE / "index.html"
    text = page.read_text()
    start, end = "<!-- runes:start -->", "<!-- runes:end -->"
    a, b = text.index(start) + len(start), text.index(end)
    text = text[:a] + "".join(cards) + "\n      " + text[b:]
    n = len(cards)
    text = re.sub(r'(<p id="count"[^>]*>).*?(</p>)', rf"\g<1>{n} runes\g<2>", text)
    page.write_text(text)
    print(f"Wrote {n} runes into {page.relative_to(HERE.parent)}")


if __name__ == "__main__":
    main()
