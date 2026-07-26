// ============================================================
// RENDERING — turns content.js data into HTML.
// You shouldn't need to edit this file to update your content;
// edit content.js instead.
// ============================================================

const ICONS = {
  email: '<svg viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2.3 7.15 5.62a1 1 0 0 0 1.24 0L19.8 6.8"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.2 0h3.36v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.19 2.33 4.19 5.35V21h-3.5v-6.35c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.44 1.66-2.44 3.36V21H9.4V8.75Z"/></svg>',
  kaggle: '<svg viewBox="0 0 24 24"><path d="M4 3h3.5v10.2L13 7h4.3l-6.2 6.4L18 21h-4.4l-4.7-6.6-1.4 1.4V21H4V3Z"/></svg>',
  huggingface: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10.5" r="1.2" fill="var(--bg)" stroke="none"/><circle cx="15" cy="10.5" r="1.2" fill="var(--bg)" stroke="none"/><path d="M8.5 14.5c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5" fill="none"/></svg>'
};

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderProfile() {
  const { profile } = CONTENT;
  document.title = `${profile.name} — ${profile.title}`;
  document.getElementById('meta-description').setAttribute('content', profile.tagline);

  document.getElementById('sidebar-name').textContent = profile.name;
  document.getElementById('sidebar-initials').textContent = profile.name
    .split(' ').map(w => w[0]).slice(0, 2).join('');
  document.getElementById('sidebar-title').textContent = profile.title;
  document.getElementById('sidebar-location').textContent = profile.location;

  const linksEl = document.getElementById('sidebar-links');
  profile.links.forEach(link => {
    const a = el('a', 'link-row', `${ICONS[link.icon] || ''}<span>${link.label}</span>`);
    a.href = link.url;
    if (!link.url.startsWith('mailto:')) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    linksEl.appendChild(a);
  });

  document.getElementById('hero-tagline').textContent = profile.tagline;
  const bioEl = document.getElementById('bio');
  profile.bio.forEach(p => bioEl.appendChild(el('p', null, p)));
}

function renderResearch() {
  const wrap = document.getElementById('research-list');
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
  Object.entries(CONTENT.skills).forEach(([category, items]) => {
    const group = el('div', 'skill-group');
    group.innerHTML = `<h3>${category}</h3><div class="pill-row">${items.map(i => `<span class="pill">${i}</span>`).join('')}</div>`;
    wrap.appendChild(group);
  });

  const langWrap = document.getElementById('languages-list');
  CONTENT.languages.forEach(l => {
    langWrap.appendChild(el('span', 'pill', `${l.name} — ${l.level}`));
  });
}

function renderAll() {
  renderProfile();
  renderResearch();
  renderProjects();
  renderTeaching();
  renderEducation();
  renderAwards();
  renderSkills();
}

// ============================================================
// DARK MODE
// ============================================================
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ============================================================
// NAV — smooth scroll, active link, back to top
// ============================================================
function initNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      document.getElementById('sidebar').classList.remove('open');
    });
  });

  const menuBtn = document.getElementById('menu-toggle');
  menuBtn.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
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
});
