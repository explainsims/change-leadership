/* CHanGE — renders the app shell from CHANGE_DATA and wires up the PWA. */
(function () {
  "use strict";
  const data = window.CHANGE_DATA;
  const TYPE = {
    doc:   { label: "Doc",   cls: "t-doc" },
    canva: { label: "Canva", cls: "t-canva" },
    web:   { label: "Web",   cls: "t-web" },
    note:  { label: "Ref",   cls: "t-note" },
  };

  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Header equation
  document.getElementById("equation").textContent = data.brand.tagline;

  // Build a single resource card
  function card(item) {
    const t = TYPE[item.type] || TYPE.note;
    const hasLink = !!item.url;
    const node = el(hasLink ? "a" : "div", "card " + (hasLink ? "" : "card--note"));
    if (hasLink) {
      node.href = item.url;
      node.target = "_blank";
      node.rel = "noopener";
    }
    node.innerHTML =
      '<div class="card-top">' +
        '<span class="badge ' + t.cls + '">' + t.label + "</span>" +
        (hasLink ? '<span class="open" aria-hidden="true">↗</span>' : "") +
      "</div>" +
      '<h3 class="card-title">' + esc(item.title) + "</h3>" +
      '<p class="card-summary">' + esc(item.summary) + "</p>";
    return node;
  }

  // Framework overview (top of page)
  const main = document.getElementById("app");
  if (data.framework) {
    const f = data.framework;
    const intro = el("section", "intro");
    intro.innerHTML =
      '<a class="intro-card" href="' + f.url + '" target="_blank" rel="noopener">' +
        '<span class="badge t-doc">Framework</span>' +
        "<h2>" + esc(f.title) + "</h2>" +
        "<p>" + esc(f.summary) + "</p>" +
        '<span class="intro-open">Open the full framework ↗</span>' +
      "</a>";
    main.appendChild(intro);
  }

  // Pillar navigation
  const nav = document.getElementById("pillarNav");
  data.pillars.forEach((p) => {
    const a = el("a", "pill", esc(p.name));
    a.href = "#" + p.id;
    a.dataset.pillar = p.id;
    nav.appendChild(a);
  });

  // Pillar sections
  data.pillars.forEach((p) => {
    const sec = el("section", "pillar pillar--" + p.id);
    sec.id = p.id;
    const flow = p.verb
      ? '<span class="flow">' + esc(p.name) + " <i>" + esc(p.verb) + "</i></span>"
      : '<span class="flow">' + esc(p.name) + "</span>";
    sec.innerHTML =
      '<div class="pillar-head">' +
        '<span class="pillar-kicker">' + esc(p.kicker) + "</span>" +
        "<h2>" + esc(p.name) + "</h2>" +
        '<p class="pillar-desc">' + esc(p.desc) + "</p>" +
      "</div>";
    const grid = el("div", "grid");
    p.items.forEach((it) => grid.appendChild(card(it)));
    sec.appendChild(grid);
    main.appendChild(sec);
  });

  // Extras
  if (data.extras && data.extras.length) {
    const sec = el("section", "pillar pillar--extra");
    sec.id = "more";
    sec.innerHTML =
      '<div class="pillar-head">' +
        '<span class="pillar-kicker">From the source PDF</span>' +
        "<h2>Additional resources</h2>" +
        '<p class="pillar-desc">Links not yet sorted into a pillar — rename or move as needed.</p>' +
      "</div>";
    const grid = el("div", "grid");
    data.extras.forEach((it) => grid.appendChild(card(it)));
    sec.appendChild(grid);
    main.appendChild(sec);
  }

  // Active pillar highlight on scroll
  const sections = data.pillars.map((p) => document.getElementById(p.id));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const id = e.target.id;
        nav.querySelectorAll(".pill").forEach((a) =>
          a.classList.toggle("active", a.dataset.pillar === id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => s && obs.observe(s));

  // Service worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () =>
      navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
