#!/usr/bin/env python3
"""Mirror dsooky.com (Framer) into ./site as a fully self-hosted static site.

Every asset from Framer's CDN, Google Fonts, cdnjs and esm.sh is downloaded into
site/assets/<host>/... and all references are rewritten to root-relative paths.
Re-run any time to refresh:  python3 clone.py
"""
import hashlib
import os
import re
import shutil
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urljoin, urlsplit

ORIGIN = "https://dsooky.com"
PAGES = ["/", "/about", "/buton"]
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "site")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")

LOCAL_HOSTS = ["framerusercontent.com", "fonts.gstatic.com", "fonts.googleapis.com",
               "cdnjs.cloudflare.com", "esm.sh"]
TEXT_EXT = (".html", ".mjs", ".js", ".css", ".json", ".svg", ".txt", ".xml")

host_alt = "|".join(re.escape(h) for h in LOCAL_HOSTS)
# Absolute URLs (also JSON-escaped "https:\/\/...") to hosts we localize.
ABS_RE = re.compile(r"https?:(?:\\?/){2}(?:" + host_alt + r")(?:\\?/[^\s\"'`<>()\\,]*)?")
# Relative module imports inside .mjs bundles: "./chunk.abc.mjs"
REL_RE = re.compile(r"""["'`](\.{1,2}/[^"'`\s]+?\.(?:mjs|js|json|css))["'`]""")
# Root-relative imports inside esm.sh modules: "/pkg@1.0.0/es2022/x.mjs"
ESM_ROOT_RE = re.compile(r"""(["'])(/(?!assets/)[^"'\s]+?\.m?js)\1""")
CSS_URL_RE = re.compile(r"url\(\s*['\"]?([^'\")]+)['\"]?\s*\)")

seen = {}  # remote url -> local path (relative to OUT)


def fetch(url, tries=4):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    for i in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError:
            raise
        except Exception:
            if i == tries - 1:
                raise


def local_path(url):
    """Map a remote asset URL to a path under site/assets/."""
    s = urlsplit(url)
    path = s.path or "/"
    if path.endswith("/"):
        path += "index"
    keep_query = s.query and (s.netloc in ("fonts.googleapis.com", "esm.sh")
                              or not os.path.splitext(path)[1])
    if keep_query:
        root, ext = os.path.splitext(path)
        h = hashlib.sha1(s.query.encode()).hexdigest()[:10]
        if s.netloc == "fonts.googleapis.com":
            ext = ".css"
        elif s.netloc == "esm.sh" and not ext:
            ext = ".mjs"
        path = f"{root}__{h}{ext}"
    elif s.netloc == "esm.sh" and not os.path.splitext(path)[1]:
        path += ".mjs"
    return "assets/" + s.netloc + path


def norm(url):
    url = url.replace("\\/", "/").replace("&amp;", "&")
    s = urlsplit(url)
    # Drop image-resize params: we serve the full-size original for every variant.
    if s.netloc == "framerusercontent.com" and s.path.startswith("/images/"):
        return f"https://{s.netloc}{s.path}"
    return url


def is_text(lp):
    return lp.endswith(TEXT_EXT)


def collect(text, base_url):
    found = set()
    for m in ABS_RE.finditer(text):
        found.add(norm(m.group(0).rstrip(".;")))
    if base_url and base_url.endswith((".mjs", ".js")):
        for m in REL_RE.finditer(text):
            found.add(urljoin(base_url, m.group(1)))
        if urlsplit(base_url).netloc == "esm.sh":
            for m in ESM_ROOT_RE.finditer(text):
                found.add("https://esm.sh" + m.group(2))
    if base_url and base_url.endswith(".css") or "fonts.googleapis.com" in (base_url or ""):
        for m in CSS_URL_RE.finditer(text):
            u = m.group(1)
            if not u.startswith("data:"):
                found.add(norm(urljoin(base_url, u)))
    # node_modules paths are source references Framer never serves (403).
    return {u for u in found if urlsplit(u).netloc in LOCAL_HOSTS
            and urlsplit(u).path not in ("", "/", "/s/")
            and not urlsplit(u).path.startswith("/node_modules/")}


def rewrite(text, base_url=None):
    def sub_abs(m):
        raw = m.group(0)
        trail = ""
        while raw and raw[-1] in ".;":
            trail = raw[-1] + trail
            raw = raw[:-1]
        u = norm(raw)
        if urlsplit(u).netloc not in LOCAL_HOSTS or urlsplit(u).path in ("", "/"):
            return m.group(0)  # bare origins (preconnect hints etc.) stay as-is
        lp = "/" + local_path(u)
        # Keep Framer's resize query on images so srcset entries stay distinct strings.
        q = urlsplit(raw.replace("\\/", "/")).query
        if u.startswith("https://framerusercontent.com/images/") and q:
            lp += "?" + q
        if "\\/" in raw:
            lp = lp.replace("/", "\\/")
        return lp + trail

    text = ABS_RE.sub(sub_abs, text)
    if base_url and urlsplit(base_url).netloc == "esm.sh":
        text = ESM_ROOT_RE.sub(lambda m: m.group(1) + "/assets/esm.sh" + m.group(2) + m.group(1), text)
    if base_url and urlsplit(base_url).netloc == "fonts.googleapis.com":
        text = CSS_URL_RE.sub(lambda m: "url(" + ("/" + local_path(norm(m.group(1))) if
                              urlsplit(m.group(1)).netloc in LOCAL_HOSTS else m.group(1)) + ")", text)
    return text


def download(url):
    lp = local_path(url)
    dest = os.path.join(OUT, lp)
    try:
        data = fetch(url)
    except Exception as e:
        print(f"  ! {url}: {e}", file=sys.stderr)
        return url, None
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    if is_text(lp):
        text = data.decode("utf-8", "replace")
        # Stub out Framer's editor bar, which it loads on non-Framer hosts like localhost.
        text = re.sub(r"let\{createEditorBar:(\w+)\}=await import\(`https://framer\.com/edit/init\.mjs`\);"
                      r"return\{default:\1\(\)\}", "return{default:()=>null}", text)
        new = collect(text, url)
        with open(dest, "w", encoding="utf-8") as f:
            f.write(rewrite(text, url))
        return url, new
    with open(dest, "wb") as f:
        f.write(data)
    return url, set()


def clean_html(html):
    # Framer-hosting-only bits: editor bootstrap and analytics.
    html = re.sub(r'<script[^>]*src="https://framer\.com/edit/init\.mjs"[^>]*></script>', "", html)
    html = re.sub(r'<link[^>]*href="https://framer\.com/edit/init\.mjs"[^>]*>', "", html)
    html = re.sub(r'<script[^>]*src="https://events\.framer\.com/[^"]*"[^>]*></script>', "", html)
    html = re.sub(r'<script>try\{if\(localStorage\.getItem\("__framer_force_showing_editorbar_since"\).*?</script>',
                  "", html, flags=re.S)
    html = html.replace('href="https://dsooky.com/"', 'href="/"')
    return html


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT)
    queue = set()
    for p in PAGES:
        print("page", p)
        html = fetch(ORIGIN + p).decode("utf-8")
        queue |= collect(html, ORIGIN + p)
        name = "index.html" if p == "/" else p.strip("/") + ".html"
        with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
            f.write(rewrite(clean_html(html)))
    for extra in ("/sitemap.xml", "/robots.txt"):
        try:
            data = fetch(ORIGIN + extra)
            with open(os.path.join(OUT, extra.strip("/")), "wb") as f:
                f.write(data)
        except Exception:
            pass

    with ThreadPoolExecutor(16) as pool:
        while queue:
            batch = [u for u in queue if u not in seen]
            queue = set()
            for u in batch:
                seen[u] = True
            for url, new in pool.map(download, batch):
                if new:
                    queue |= {u for u in new if u not in seen}
            print(f"downloaded {len(seen)} assets")

    # 404 page for static hosts; .nojekyll so GitHub Pages serves every file as-is.
    shutil.copy(os.path.join(OUT, "index.html"), os.path.join(OUT, "404.html"))
    open(os.path.join(OUT, ".nojekyll"), "w").close()
    with open(os.path.join(OUT, "CNAME"), "w") as f:
        f.write("dsooky.com\n")
    print("done ->", OUT)


if __name__ == "__main__":
    main()
