# Deploying these fixes to `master`

Run these from the root of your local clone of `sabbbir.github.io`.

## 1. Rename Assets → assets (case fix, see Fix 4)

```bash
git mv Assets assets
```

If git says nothing to commit (common on macOS/Windows, which are
case-insensitive so git doesn't always notice a pure case rename), force it:

```bash
git mv Assets assets2
git mv assets2 assets
```

## 2. Copy in the updated files

Copy the following files from this delivery into your repo root, overwriting
the existing ones:

```
styles.css
content.js
index.html
research.html
projects.html
cv.html
contact.html
generate-favicon.py
```

## 3. Generate (or add) your photo + favicon files

Either drop in the files I generated for you (if you sent me `Dp.jpg`), or
run the script:

```bash
pip install pillow
python generate-favicon.py
```

Confirm these exist before moving on:

```
assets/dp.jpg
assets/favicon-16x16.png
assets/favicon-32x32.png
assets/apple-touch-icon.png
```

## 4. Commit and push

```bash
git add -A
git commit -m "Redesign: clean editorial theme, real favicon, profile photo, assets/ casing fix"
git push origin master
```

## 5. Verify on the live site

GitHub Pages usually redeploys within a minute or two of the push. Then
hard-refresh (Ctrl/Cmd+Shift+R) `https://sabbbir.github.io/` to bypass any
cached CSS/favicon, and check:

- [ ] Tab shows your photo as the favicon
- [ ] Sidebar shows your real photo instead of "SA" initials
- [ ] Dark mode toggle still works
- [ ] All 5 nav pages load correctly
