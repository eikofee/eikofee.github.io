/**
 * Tiny render engine: walks CONTENT[lang].sections (see content.js) and
 * builds DOM. To add a section: add an object with a supported `type` to
 * both CONTENT.fr.sections and CONTENT.en.sections (same id, same order).
 * To add a new section *type*: add a case in renderSection() + a template.
 */

let currentLang = localStorage.getItem("lang") || "fr";

function el(tag, className, children) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (children != null) {
    (Array.isArray(children) ? children : [children]).forEach((c) => {
      if (c == null) return;
      node.append(c.nodeType ? c : document.createTextNode(c));
    });
  }
  return node;
}

function sectionShell(section) {
  const wrap = el("section", "section");
  wrap.id = section.id;
  const header = el("div", "section-header");
  if (section.eyebrow) header.append(el("span", "eyebrow", section.eyebrow));
  header.append(el("h2", null, section.title));
  if (section.note) header.append(el("p", "section-note", section.note));
  wrap.append(header);
  return wrap;
}

function renderText(section) {
  const wrap = sectionShell(section);
  const body = el("div", "prose");
  section.body.forEach((p) => body.append(el("p", null, p)));
  wrap.append(body);
  return wrap;
}

function renderTimeline(section) {
  const wrap = sectionShell(section);
  const list = el("div", "timeline" + (section.compact ? " timeline--compact" : ""));
  section.items.forEach((item) => {
    const row = el("div", "timeline-item reveal");
    row.append(el("div", "timeline-dot"));
    const content = el("div", "timeline-content");
    content.append(el("span", "timeline-period", item.period));
    content.append(el("h3", null, item.role));
    const orgLine = el("div", "timeline-org");
    orgLine.append(el("span", null, item.org));
    if (item.location) orgLine.append(el("span", "timeline-location", item.location));
    content.append(orgLine);
    if (item.description) content.append(el("p", null, item.description));
    if (item.tags && item.tags.length) {
      const tagRow = el("div", "tag-row");
      item.tags.forEach((t) => tagRow.append(el("span", "tag", t)));
      content.append(tagRow);
    }
    row.append(content);
    list.append(row);
  });
  wrap.append(list);
  return wrap;
}

const SKILL_LEVEL_SYMBOL = { 3: "★", 2: "☆" };

function renderSkillTag(item) {
  if (typeof item === "string") return el("span", "tag", item);

  const tag = el("span", "tag skill-tag");
  const symbol = SKILL_LEVEL_SYMBOL[item.level];
  if (symbol) tag.append(el("span", "skill-level", symbol));
  tag.append(document.createTextNode(item.name));
  const label = SKILL_LEVEL_LABELS[currentLang] && SKILL_LEVEL_LABELS[currentLang][item.level];
  if (label) tag.title = label;
  return tag;
}

// Filled star (level 3) first, then hollow star (level 2), then no symbol
// (level 1) — stable, so items keep their relative order from content.js
// within each tier.
function sortSkillItems(items) {
  return items
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const levelA = typeof a.item === "object" ? a.item.level || 0 : -1;
      const levelB = typeof b.item === "object" ? b.item.level || 0 : -1;
      return levelB - levelA || a.index - b.index;
    })
    .map((entry) => entry.item);
}

function renderSkills(section) {
  const wrap = sectionShell(section);
  const grid = el("div", "skills-grid");
  section.groups.forEach((group) => {
    const card = el("div", "skill-card reveal");
    card.append(el("h3", null, group.label));
    const tagRow = el("div", "tag-row");
    sortSkillItems(group.items).forEach((item) => tagRow.append(renderSkillTag(item)));
    card.append(tagRow);
    grid.append(card);
  });
  wrap.append(grid);
  return wrap;
}

function renderGrid(section) {
  const wrap = sectionShell(section);
  const grid = el("div", "card-grid");
  section.cards.forEach((c) => {
    const card = el("article", "project-card reveal" + (c.image ? " project-card--image" : ""));
    if (c.image) {
      card.style.backgroundImage = `linear-gradient(160deg, var(--card-overlay-start), var(--card-overlay-end)), url("${c.image}")`;
    }
    card.append(el("h3", null, c.title));
    card.append(el("p", null, c.description));
    if (c.tags && c.tags.length) {
      const tagRow = el("div", "tag-row");
      c.tags.forEach((t) => tagRow.append(el("span", "tag", t)));
      card.append(tagRow);
    }
    if (c.link) {
      const a = el("a", "card-link", c.linkLabel || "→");
      a.href = c.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      card.append(a);
    }
    grid.append(card);
  });
  wrap.append(grid);
  return wrap;
}

function renderSection(section) {
  switch (section.type) {
    case "text":
      return renderText(section);
    case "timeline":
      return renderTimeline(section);
    case "skills":
      return renderSkills(section);
    case "grid":
      return renderGrid(section);
    default:
      console.warn("Unknown section type:", section.type);
      return null;
  }
}

function renderNav(data) {
  const nav = document.getElementById("nav-links");
  nav.innerHTML = "";
  data.nav.forEach((item) => {
    const a = el("a", null, item.label);
    a.href = item.href;
    nav.append(a);
  });
}

function renderHero(data) {
  const { meta } = data;
  document.getElementById("hero-eyebrow").textContent = meta.heroEyebrow;
  document.getElementById("hero-name").textContent = meta.name;
  document.getElementById("hero-title").textContent = meta.title;
  document.getElementById("hero-tagline").textContent = meta.tagline;
  document.getElementById("hero-avatar").textContent = meta.avatarInitials;
  document.getElementById("hero-location").textContent = meta.location;
}

function renderContact(data) {
  const { meta, contact } = data;
  document.getElementById("contact-title").textContent = contact.title;
  document.getElementById("contact-subtitle").textContent = contact.subtitle;
  document.getElementById("contact-email").textContent = meta.email;
  document.getElementById("contact-email").href = "mailto:" + meta.email;
  document.getElementById("contact-phone").textContent = meta.phone;
  document.getElementById("contact-phone").href = "tel:" + meta.phone.replace(/[^+\d]/g, "");
  document.getElementById("contact-github").href = meta.github;
  document.getElementById("contact-github").setAttribute("aria-label", contact.githubLabel);
  document.getElementById("contact-github-label").textContent = "@" + meta.github.replace(/\/+$/, "").split("/").pop();
  document.getElementById("contact-linkedin").href = meta.linkedin;
  document.getElementById("contact-linkedin").setAttribute("aria-label", contact.linkedinLabel);
  document.getElementById("contact-linkedin-label").textContent = "@" + meta.linkedin.replace(/\/+$/, "").split("/").pop();
}

function renderFooter(data) {
  document.getElementById("footer-name").textContent = data.meta.name;
  document.getElementById("footer-tagline").textContent = data.footer.tagline;
  document.getElementById("year").textContent = new Date().getFullYear();
}

function renderContent(data) {
  const main = document.getElementById("main-content");
  main.innerHTML = "";
  data.sections.forEach((section) => {
    const node = renderSection(section);
    if (node) main.append(node);
  });
}

function setupRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

function setupThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");
  if (stored) document.documentElement.setAttribute("data-theme", stored);
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
  });
}

function updateLangButton() {
  document.getElementById("lang-toggle").textContent = currentLang === "fr" ? "EN" : "FR";
  document.getElementById("lang-toggle").setAttribute(
    "aria-label",
    currentLang === "fr" ? "Switch to English" : "Passer en français"
  );
}

function setupLangToggle() {
  const btn = document.getElementById("lang-toggle");
  btn.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem("lang", currentLang);
    render();
  });
}

function setupPrintButton() {
  document.getElementById("print-btn").addEventListener("click", () => {
    // Brave (notably on Android) exposes navigator.brave but doesn't ship a
    // print pipeline: window.print() silently no-ops there, no error, no
    // dialog. Warn instead of leaving the button looking broken.
    if (navigator.brave) {
      alert(CONTENT[currentLang].meta.printUnsupportedMessage);
      return;
    }
    window.print();
  });
}

function setupNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-links");
  toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") nav.classList.remove("is-open");
  });
}

function render() {
  const data = CONTENT[currentLang];
  document.documentElement.lang = currentLang;
  document.title = `${data.meta.name} — ${currentLang === "fr" ? "CV" : "Resume"}`;
  updateLangButton();
  document.getElementById("print-btn").setAttribute("aria-label", data.meta.printLabel);
  renderNav(data);
  renderHero(data);
  renderContact(data);
  renderFooter(data);
  renderContent(data);
  setupRevealOnScroll();
}

function init() {
  setupThemeToggle();
  setupLangToggle();
  setupPrintButton();
  setupNavToggle();
  render();
}

document.addEventListener("DOMContentLoaded", init);
