# Fix 2 — Favicon (the icon in the browser tab)

**Files changed:** `index.html`, `research.html`, `projects.html`, `cv.html`,
`contact.html` (added 3 lines to `<head>` in each)

**New files needed:** `assets/favicon-16x16.png`, `assets/favicon-32x32.png`,
`assets/apple-touch-icon.png`

## What was added

Each page's `<head>` now includes:

```html
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
```

This is why the "Yann Dubois" browser tab in your screenshot shows a little
icon next to the title — his page links to the same kind of files.

## Generating the actual icon files from Dp.jpg

I don't have your photo (only your project's code files), so I couldn't
generate the PNGs myself. Two options:

**Option A — send me `Dp.jpg`** in the chat and I'll crop it to a square,
resize it to the three sizes above, and hand you back the finished PNGs
ready to drop into `assets/`.

**Option B — run it yourself.** This delivery includes `generate-favicon.py`,
a short script that does the crop + resize locally:

```bash
pip install pillow
python generate-favicon.py
```

It reads `Assets/Dp.jpg` and writes `assets/favicon-16x16.png`,
`assets/favicon-32x32.png`, `assets/apple-touch-icon.png`, and a cleaned-up
`assets/dp.jpg` for the sidebar avatar (Fix 3) — all in one pass.

## One thing to watch for

GitHub Pages serves files from a case-sensitive Linux filesystem. Your repo
currently has a folder named `Assets` (capital A). The new HTML references
lowercase `assets/`. Pick one casing and use it consistently — the
`generate-favicon.py` script writes to lowercase `assets/`, which is the
convention used throughout this redesign (see Fix 4).
