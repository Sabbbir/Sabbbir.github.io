# Fix 4 — Folder organization

**No code change** — this is a repo-hygiene note, since you mentioned pages
feel unorganized.

## Current state

```
├── Assets/
│   └── Dp.jpg
├── contact.html
├── content.js
├── cv.html
├── index.html
├── projects.html
├── research.html
├── script.js
└── styles.css
```

## What I kept as-is (on purpose)

`content.js`, `script.js`, and `styles.css` stay in the repo root. Your site
already has a good separation of concerns — `content.js` is the only file you
edit for text/links/experience, `script.js` renders it, `styles.css` styles
it. Moving these into `css/` and `js/` subfolders wouldn't fix anything real
and would mean updating `<link>`/`<script>` paths in all 5 HTML files for no
functional gain, so I left that alone.

## What actually needed fixing: the `Assets` folder

- GitHub Pages serves from a case-sensitive filesystem. A folder called
  `Assets` (capital A) referenced anywhere as `assets/...` (lowercase) will
  **404 on the live site**, even though it may work fine when you open the
  HTML file locally on Windows or macOS (both case-insensitive by default).
- This redesign standardizes on lowercase `assets/` throughout (favicon
  files, `dp.jpg`), matching the near-universal web convention.

**Action:** rename `Assets/` → `assets/` in your repo (see the git commands
doc — `git mv` handles this cleanly), and put `dp.jpg` + the three favicon
PNGs inside it. Target structure:

```
├── assets/
│   ├── dp.jpg
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
├── contact.html
├── content.js
├── cv.html
├── index.html
├── projects.html
├── research.html
├── script.js
└── styles.css
```
