# Fix 3 — Real profile photo in the sidebar

**File changed:** `content.js` (one line)

## What changed

Your `script.js` already supported a real photo — it just needed a path:

```js
// before
photo: "",

// after
photo: "assets/dp.jpg",
```

When `photo` is empty, the sidebar falls back to an initials circle ("SA").
Once `assets/dp.jpg` exists, it renders your actual photo instead, cropped to
a circle at 100px (see `.avatar` / `.avatar-img` in the new `styles.css`).

## What you need to do

Get your photo to `assets/dp.jpg` in the repo — either:
- upload `Dp.jpg` to me and I'll hand back a cropped, web-sized copy, or
- run `generate-favicon.py` from Fix 2, which also writes `assets/dp.jpg`
  alongside the favicon files, or
- just copy `Assets/Dp.jpg` to `assets/dp.jpg` manually — the browser will
  still crop/center it to a circle via CSS, though a pre-cropped square will
  look sharper if the source photo isn't already roughly square.
