# Fix 1 — Visual redesign (styles.css)

**File changed:** `styles.css` (full replacement — see the attached new version)

## Why it looked "dull"

The old palette (warm cream `#faf7f2` + terracotta `#a8481f` + a serif display
font + boxy drop-shadow cards) is a very common "AI portfolio" default. It's
not a bad palette, but it reads as templated rather than as a considered
choice, and the heavy shadow cards make the page feel like a dashboard widget
instead of a document.

Yann Dubois's site runs on the **Minimal Mistakes** Jekyll theme: plain white
background, muted gray-brown ink, a single restrained accent color, a
sans-serif-first type system, and content laid out as a flat, bordered list
rather than boxed cards. That's the direction this redesign moves toward,
while keeping your existing content structure untouched.

## What changed

| Element | Before | After |
|---|---|---|
| Background | warm cream `#faf7f2` | neutral white `#ffffff` (near-black `#121214` in dark mode) |
| Body font | Work Sans | Inter (very close relative, slightly more neutral/technical) |
| Display font | Fraunces everywhere (h1, h2, h3, tagline) | Fraunces used **only** for your name in the sidebar — one deliberate signature detail instead of decorating every heading |
| Accent | `#a8481f` (rust) | `#8a3a1f` (deeper, slightly less saturated oxblood) — same family, more restrained |
| Section headers | Large serif headings | Small uppercase letter-spaced labels (`RESEARCH`, `PROJECTS`…), closer to a CV/document convention |
| Entries & project cards | Boxed cards with drop shadows and rounded corners | Flat rows separated by a hairline border — reads like a plain list, not a widget |
| Skill pills | Filled background pills | Outlined pills (border only, no fill) |
| Avatar | 84px initials circle | 100px circle, wired to show your actual photo (see Fix 3) |

## Apply it

Replace your existing `styles.css` with the new one from this delivery. No
other file needs to change for this fix alone.
