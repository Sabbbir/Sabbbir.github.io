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

  // Keep each page’s descriptive title and metadata.

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
      <h2>${profile.name}</h2>
      <p class="title">${profile.title}</p>
      <p class="location">${profile.location}</p>
    </div>
    <nav class="sidebar-links" aria-label="Profile links">${linksHtml}</nav>
    
  `;
}

function initProfilePhoto() {
  const photo = document.querySelector('.avatar-img');
  if (!photo) return;
  photo.addEventListener('error', () => {
    const fallback = el('div', 'avatar avatar-fallback', 'SA');
    fallback.setAttribute('aria-label', CONTENT.profile.name);
    photo.replaceWith(fallback);
  }, {once:true});
  if (photo.complete && !photo.naturalWidth) photo.dispatchEvent(new Event('error'));
}
function renderHome() {
  const wrap = document.getElementById('home-content');
  if (!wrap) return;
  const { profile } = CONTENT;
  wrap.innerHTML = `<p class="hero-tagline">${profile.tagline}</p>` + profile.bio.map(p => `<p>${p}</p>`).join('');
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
      ${item.details ? `<p>${item.details}</p>` : ""}
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
  const papers = document.getElementById('papers-list');
  if (papers) CONTENT.papers.forEach(p => {
    papers.appendChild(el('article', 'entry', `<h3>${p.title}</h3><p>${p.authors}</p><span class="pill">${p.status}</span>`));
  });
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
  toggle.setAttribute('aria-pressed', String(document.documentElement.getAttribute('data-theme') === 'dark'));
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (_) {}
    toggle.setAttribute('aria-pressed', String(next === 'dark'));
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
    document.getElementById('form-status').textContent = '';
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
        document.getElementById('form-status').textContent = 'Your message could not be sent. Please try again or use the email link above.';
        button.disabled = false;
        button.textContent = 'Send Message';
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initProfilePhoto();
  document.querySelectorAll('.masthead nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage()) link.setAttribute('aria-current', 'page');
  });
  initTheme();
  initNav();
  initContactForm();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

function workVisual(item) {
  const drawings = {
    plate:'<rect x="62" y="49" width="236" height="110" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M50 76V38h45M265 38h45v38M50 132v39h45M265 171h45v-39" fill="none" stroke="currentColor" stroke-width="3"/><text x="180" y="98" text-anchor="middle" font-size="19" fill="currentColor">ঢাকা মেট্রো</text><text x="180" y="133" text-anchor="middle" font-size="25" fill="currentColor">১২–৩৪৫৬</text>',
    water:'<path d="M0 135Q45 105 90 135T180 135T270 135T360 135M0 160Q45 130 90 160T180 160T270 160T360 160" fill="none" stroke="currentColor" opacity=".3"/><path d="M60 94L135 56L210 101L295 63M60 94L145 132L210 101L285 145" fill="none" stroke="currentColor"/>'+[ [60,94],[135,56],[210,101],[295,63],[145,132],[285,145] ].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="currentColor"/>`).join(''),
    mars:'<ellipse cx="180" cy="108" rx="144" ry="45" fill="none" stroke="currentColor" opacity=".35" transform="rotate(-25 180 108)"/><circle cx="180" cy="108" r="66" fill="currentColor" opacity=".7"/><path d="M140 73q65 8 88 45M125 106q70-18 112 26M155 155q20-30 65-26" fill="none" stroke="var(--bg)" stroke-width="9" opacity=".35"/><circle cx="298" cy="59" r="5" fill="currentColor"/>',
    chat:'<rect x="63" y="33" width="114" height="140" rx="5" fill="none" stroke="currentColor"/><path d="M83 61h70M83 80h70M83 99h48" stroke="currentColor" opacity=".5"/><rect x="157" y="91" width="145" height="76" rx="12" fill="var(--bg)" stroke="currentColor"/><path d="M179 116h97M179 135h65" stroke="currentColor"/>'
  };
  return `<div class="work-visual visual-${item.art}"><svg viewBox="0 0 360 210" role="img" aria-label="${item.title}: conceptual illustration">${drawings[item.art]}</svg><span>CONCEPT ILLUSTRATION</span></div>`;
}
document.addEventListener('DOMContentLoaded', () => {
  const featured = document.getElementById('featured-work');
  if (featured) featured.innerHTML = CONTENT.work.slice(0,3).map(item => `<article class="featured-project">${workVisual(item)}<div class="work-copy"><p class="eyebrow">${item.category}</p><h3><a href="projects.html#${item.id}">${item.title}</a></h3><p>${item.summary}</p><p class="work-result"><strong>${item.metric}</strong> ${item.metricLabel}</p><a class="story-link" href="projects.html#${item.id}">View project →</a></div></article>`).join('');
  const stories = document.getElementById('work-stories');
  if (stories) stories.innerHTML = CONTENT.work.map(item => `<article class="case-study" id="${item.id}"><div class="case-heading">${workVisual(item)}<div><p class="eyebrow">${item.category}</p><h2>${item.title}</h2><p>${item.summary}</p><p class="tool-line">${item.tools}</p></div></div><div class="case-details"><div><h3>The problem</h3><p>${item.problem}</p></div><div><h3>What I built</h3><p>${item.contribution}</p></div><div><h3>The result</h3><p>${item.outcome}</p></div></div>${item.link?`<a href="${item.link}" target="_blank" rel="noopener noreferrer">Explore the code ↗</a>`:''}</article>`).join('');
});
