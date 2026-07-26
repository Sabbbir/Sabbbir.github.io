# Sabbir Ahmed — Portfolio

Personal portfolio site for **Sabbir Ahmed**, a Machine Learning researcher based in Dhaka, Bangladesh, working across computer vision, LLM fine-tuning, and applied deep learning.

Live at: **https://sabbbir.github.io/**

## About Sabbir

Sabbir is a Machine Learning researcher with 2.5+ years of experience spanning computer vision, NLP/LLM fine-tuning, and applied deep learning — currently balancing four concurrent research roles across Bangladesh and the US:

- **Research Assistant, AI Security Research Lab** — University of Texas at Dallas (Remote), benchmarking dropout-based regularization methods.
- **Graduate Research Assistant, Visual Machine Intelligence Lab** — Jashore University of Science and Technology, leading a data-augmentation study (CutMix/MixUp/SaliencyMix) on CIFAR-10/100.
- **Research Assistant, BCS2 Lab** — University of Arkansas (Remote), building a zero-budget pipeline that labeled 9 million tweets and fine-tuned BERTweet and Qwen models via QLoRA.
- **Teaching Assistant, Dept. of CSE, JUST** — instructing 250+ students in Machine Learning, IoT, and Data Structures.

His undergraduate thesis engineered a zero-shot medical segmentation pipeline (OneFormer + SegGPT) for BraTS MRI scans, improving the Dice score from 0.28 to 0.87. Other work includes a 96.2%-accuracy Bengali license plate recognition system deployed on a Raspberry Pi, a 36-sensor aquaculture monitoring array built with three partner institutions, and a top-40 finish (out of 1,000+ applicants) in Bangladesh's National Innovation Challenge.

**Education:** M.Sc. Engineering in CSE (in progress) and B.Sc. in CSE, Jashore University of Science and Technology.
**Languages:** English (IELTS 7.0), Bengali (Native).

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no dependencies to install. This is intentional: it keeps the site fast, easy to host on GitHub Pages for free, and simple enough that anyone can edit it directly in the browser's GitHub UI if needed.

| File | Purpose |
|---|---|
| `index.html` | Page structure/skeleton only. Contains empty containers (e.g. `#research-list`) that get filled in by JavaScript. |
| `content.js` | **All editable content** — profile info, research experience, projects, teaching, education, awards, skills. Edit this file to update the site. |
| `script.js` | Reads `content.js` and renders it into the page. Also handles dark mode, mobile nav, and the contact form. Shouldn't need editing for content updates. |
| `styles.css` | All styling, including the light/dark theme (via CSS variables). |

### Why content is separated from markup

A full CRUD app (create/read/update/delete against a live database) needs a backend and paid or self-managed hosting — overkill for a portfolio, and one more thing to keep secure and maintained. Instead, `content.js` holds every project, role, and award as a plain JavaScript object in an array. Adding an entry is a copy-paste-edit job with no HTML required:

```js
// in content.js, inside CONTENT.projects
{
  title: "New Project Name",
  date: "Jan 2027",
  tools: "Tech used",
  description: "What it does.",
  link: "https://github.com/Sabbbir/new-project"
}
```

Save, commit, push — the site rebuilds itself from the array automatically.

## Editing the site

1. Open `content.js`.
2. Find the relevant array (`research`, `projects`, `teaching`, `education`, `awards`, `skills`) or the `profile` object.
3. Copy an existing entry, paste it, edit the text.
4. Save, then preview locally (see below) or just push — GitHub Pages rebuilds automatically.

To change colors, fonts, or spacing, edit the CSS variables at the top of `styles.css` under `:root` (light theme) and `[data-theme="dark"]` (dark theme).

## Running locally

No build tools needed. From the project folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in a browser
```

or just open `index.html` directly in a browser (the contact form needs a real server or the deployed site to work correctly, since `fetch` calls to Formspree need `http(s)://`, not `file://`).

## Deploying (GitHub Pages)

This repo is named `sabbbir.github.io`, which GitHub treats specially: anything pushed to the `main` branch is automatically published at `https://sabbbir.github.io/`, no extra configuration required.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Changes go live within a minute or two. If it's a fresh clone, confirm in **Settings → Pages** that the source is set to `Deploy from a branch → main → / (root)`.

## To-do before this is fully "yours"

- [ ] Add real **Kaggle** and **Hugging Face** URLs in `content.js` → `profile.links` (currently placeholders).
- [ ] Optional: swap the initials avatar for a real photo — add an `<img>` in the `.avatar` div in `index.html` and point it at an image in an `assets/images/` folder.
- [ ] Confirm the Formspree form ID (`mvgoydvj`) in `index.html` still points to an inbox you control.
- [ ] Double check whether the AI Chatbot / Virtual Photo Booth projects from the old site are still worth featuring alongside the newer research-heavy work — the current CV emphasizes the research roles more, so the projects list here favors those.
