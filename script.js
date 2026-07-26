// ============================================================
// RENDERING — turns content.js data into HTML.
// You shouldn't need to edit this file to update your content;
// edit content.js instead.
//
// This file is shared by every page (index.html, research.html,
// projects.html, cv.html, contact.html). Each page only has the
// containers it needs (e.g. #research-list), so every render
// function checks the container exists before touching it —
// that's what makes one script.js safe to include everywhere.
// ============================================================

const ICONS = {
  email: '<svg viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2.3 7.15 5.62a1 1 0 0 0 1.24 0L19.8 6.8"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.2 0h3.36v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.19 2.33 4.19 5.35V21h-3.5v-6.35c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.44 1.66-2.44 3.36V21H9.4V8.75Z"/></svg>',
  kaggle: '<svg viewBox="0 0 24 24"><path d="M4 3h3.5v10.2L13 7h4.3l-6.2 6.4L18 21h-4.4l-4.7-6.6-1.4 1.4V21H4V3Z"/></svg>',
  huggingface: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10.5" r="1.2" fill="var(--bg)" stroke="none"/><circle cx="15" cy="10.5" r="1.2" fill="var(--bg)" stroke="none"/><path d="M8.5 14.5c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5" fill="none"/></svg>'
};

// Pages in the site and their sidebar nav label. Keys are the actual
// filenames, so add a line here if you ever add another page.
const PAGES = [
  { href: "index.html", label: "About" },
  { href: "research.html", label: "Research" },
  { href: "projects.html", label: "Projects" },
  { href: "cv.html", label: "CV" },
  { href: "contact.html", label: "Contact" }
];

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function currentPage() {
  const path = window.location.pathname.split('/').pop();
  return path === '' ? 'index.html' : path;
}

// ============================================================
// SIDEBAR — shared across every page, built entirely from content.js
// so you never have to hand-edit it in five different HTML files.
// ============================================================
function renderSidebar() {
  const root = document.getElementById('sidebar');
  if (!root) return;
  const { profile } = CONTENT;

  document.title = `${profile.name} — ${profile.title}`;
  const metaDesc = document.getElementById('meta-description');
  if (metaDesc) metaDesc.setAttribute('content', profile.tagline);

  const initials = profile.name.split(' ').map(w => w[0]).slice(0, 2).join('');
  const avatarHtml = profile.photo
    ? `<img class="avatar avatar-img" src="${profile.photo}" alt="${profile.name}">`
    : `<div class="avatar">${initials}</div>`;

  const linksHtml = profile.links.map(link => {
    const external = !link.url.startsWith('mailto:') ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a class="link-row" href="${link.url}"${external}>${ICONS[link.icon] || ''}<span>${link.label}</span></a>`;
  }).join('');

  const current = currentPage();
  const navHtml = PAGES.map(p =>
    `<a class="nav-link${p.href === current ? ' active' : ''}" href="${p.href}">${p.label}</a>`
  ).join('');

  root.innerHTML = `
    ${avatarHtml}
    <div class="sidebar-id">
      <h1>${profile.name}</h1>
      <p class="title">${profile.title}</p>
      <p class="location">${profile.location}</p>
    </div>
    <nav class="sidebar-links">${linksHtml}</nav>
    <nav class="sidebar-nav">${navHtml}</nav>
  `;
}

function renderHome() {
  const wrap = document.getElementById('home-content');
  if (!wrap) return;
  const { profile } = CONTENT;
  wrap.innerHTML = `<p class="hero-tagline">${profile.tagline}</p>` +
    profile.bio.map(p => `<p>${p}</p>`).join('');
}

function renderResearch() {
  const wrap = document.getElementById('research-list');
  if (!wrap) return;
  CONTENT.research.forEach(item => {
    const card = el('div', 'entry');
    card.innerHTML = `
      <div class="entry-head">
        <div>
          <h3>${item.role}</h3>
          <p class="entry-org">${item.org} · ${item.location}</p>
        </div>
        <span class="entry-date">${item.date}</span>
      </div>
      <ul>${item.points.map(p => `<li>${p}</li>`).join('')}</ul>
    `;
    wrap.appendChild(card);
  });
}

function renderProjects() {
  const wrap = document.getElementById('projects-grid');
  if (!wrap) return;
  CONTENT.projects.forEach(p => {
    const card = el('div', 'project-card');
    card.innerHTML = `
      <div class="entry-head">
        <h3>${p.title}</h3>
        <span class="entry-date">${p.date}</span>
      </div>
      <p class="entry-org">${p.tools}</p>
      <p>${p.description}</p>
      ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener noreferrer">${ICONS.github} View on GitHub</a>` : ''}
    `;
    wrap.appendChild(card);
  });
}

function renderTeaching() {
  const wrap = document.getElementById('teaching-list');
  if (!wrap) return;
  CONTENT.teaching.forEach(item => {
    const card = el('div', 'entry');
    card.innerHTML = `
      <div class="entry-head">
        <div>
          <h3>${item.role}</h3>
          <p class="entry-org">${item.org}</p>
        </div>
        <span class="entry-date">${item.date}</span>
      </div>
      <ul>${item.points.map(p => `<li>${p}</li>`).join('')}</ul>
    `;
    wrap.appendChild(card);
  });
}

function renderEducation() {
  const wrap = document.getElementById('education-list');
  if (!wrap) return;
  CONTENT.education.forEach(item => {
    const row = el('div', 'entry');
    row.innerHTML = `
      <div class="entry-head">
        <div>
          <h3>${item.degree}</h3>
          <p class="entry-org">${item.org}</p>
        </div>
        <span class="entry-date">${item.date}</span>
      </div>
    `;
    wrap.appendChild(row);
  });
}

function renderAwards() {
  const wrap = document.getElementById('awards-list');
  if (!wrap) return;
  CONTENT.awards.forEach(item => {
    const row = el('div', 'entry');
    row.innerHTML = `
      <div class="entry-head">
        <div>
          <h3>${item.title}</h3>
          <p class="entry-org">${item.org}</p>
        </div>
        <span class="entry-date">${item.date}</span>
      </div>
      <p>${item.description}</p>
    `;
    wrap.appendChild(row);
  });
}

function renderSkills() {
  const wrap = document.getElementById('skills-list');
  if (!wrap) return;
  Object.entries(CONTENT.skills).forEach(([category, items]) => {
    const group = el('div', 'skill-group');
    group.innerHTML = `<h3>${category}</h3><div class="pill-row">${items.map(i => `<span class="pill">${i}</span>`).join('')}</div>`;
    wrap.appendChild(group);
  });

  const langWrap = document.getElementById('languages-list');
  if (langWrap) {
    CONTENT.languages.forEach(l => {
      langWrap.appendChild(el('span', 'pill', `${l.name} — ${l.level}`));
    });
  }
}

function renderAll() {
  renderSidebar();
  renderHome();
  renderResearch();
  renderProjects();
  renderTeaching();
  renderEducation();
  renderAwards();
  renderSkills();
}

// ============================================================
// DARK MODE — shared across all pages via localStorage
// ============================================================
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ============================================================
// NAV — mobile menu + back to top (no scroll-spy needed now that
// each section lives on its own page; active link is set in
// renderSidebar() based on the current filename).
// ============================================================
function initNav() {
  const menuBtn = document.getElementById('menu-toggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });
  }

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Close the mobile menu after tapping a nav link (event delegation,
  // since sidebar nav links are rendered dynamically).
  document.addEventListener('click', e => {
    if (e.target.closest('.nav-link')) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) sidebar.classList.remove('open');
    }
  });
}

// ============================================================
// CONTACT FORM (Formspree — no backend needed)
// ============================================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  const message = document.getElementById('form-message');
  const button = document.getElementById('submit-button');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    button.disabled = true;
    button.textContent = 'Sending…';

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          form.reset();
          form.classList.add('hidden');
          message.classList.remove('hidden');
        } else {
          return res.json().then(data => {
            throw new Error(data?.errors?.map(er => er.message).join(', ') || 'Something went wrong. Please try again.');
          });
        }
      })
      .catch(err => {
        alert(err.message);
        button.disabled = false;
        button.textContent = 'Send Message';
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initTheme();
  initNav();
  initContactForm();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
