"""
Generates favicon-16x16.png, favicon-32x32.png and apple-touch-icon.png
from your Dp.jpg, center-cropped to a square.

Usage (run from the repo root, with Pillow installed):
    pip install pillow
    python generate-favicon.py

Reads:  Assets/Dp.jpg
Writes: assets/favicon-16x16.png
        assets/favicon-32x32.png
        assets/apple-touch-icon.png
"""

from pathlib import Path
from PIL import Image

SOURCE = Path("Assets/Dp.jpg")   # change if your file lives elsewhere
OUT_DIR = Path("assets")
OUT_DIR.mkdir(exist_ok=True)

img = Image.open(SOURCE).convert("RGB")

# center-crop to a square using the shorter side
w, h = img.size
side = min(w, h)
left = (w - side) // 2
top = (h - side) // 2
square = img.crop((left, top, left + side, top + side))

sizes = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "apple-touch-icon.png": 180,
}

for filename, size in sizes.items():
    resized = square.resize((size, size), Image.LANCZOS)
    resized.save(OUT_DIR / filename)
    print(f"wrote {OUT_DIR / filename}")

# also drop a clean copy of the full photo for the sidebar avatar
avatar_side = min(square.size[0], 600)
avatar = square.resize((avatar_side, avatar_side), Image.LANCZOS)
avatar.save(OUT_DIR / "dp.jpg", quality=90)
print(f"wrote {OUT_DIR / 'dp.jpg'}")
