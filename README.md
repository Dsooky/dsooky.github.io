# dsooky.com

Self-hosted copy of [dsooky.com](https://dsooky.com), moved off Framer.

- `site/` — the website that gets published (static HTML, JS, fonts and images).
- `clone.py` — re-downloads the site from the live Framer URL into `site/`.
- `.github/workflows/pages.yml` — publishes `site/` to GitHub Pages on every push to `main`.

Preview locally:

```bash
npx serve site
```
