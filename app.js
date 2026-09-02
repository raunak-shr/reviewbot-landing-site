(() => {
'use strict';
/* ═══════════════════════════════════════════════════════════════════════════
   One requestAnimationFrame loop drives every scroll-linked behaviour on this
   sheet. Nothing gets its own listener, nothing observes per pixel, and every
   interpolation is handed to CSS through a custom property.

   The contract with base.css: JS writes numbers, CSS decides what they look
   like. That is what keeps the reduced-motion path honest — turn the scrubbing
   off and the stylesheet still renders the whole story statically.
   ═══════════════════════════════════════════════════════════════════════════ */
const doc = document.documentElement;
const RM = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (v, a = 0, b = 1) => v < a ? a : v > b ? b : v;
const map = (v, a, b) => clamp((v - a) / (b - a));
const ease = t => 1 - Math.pow(1 - t, 3);

/* ── registry ─────────────────────────────────────────────────────────── */
const reveals = [...document.querySelectorAll('.rise, .rise-2')];
const scenes = [...document.querySelectorAll('[data-scene]')].map(el => ({
  el, kind: el.dataset.scene,
  track: el.querySelector('.pin__track'),
  stage: el.querySelector('.pin__stage'),
  last: -1
}));
for (const s of scenes) s.pinned = !!s.track;
let vh = innerHeight, docH = 1;
const boxes = new WeakMap();

function measure() {
  vh = innerHeight;
  docH = Math.max(1, doc.scrollHeight - vh);
  const y = scrollY;
  for (const el of reveals) {
    const r = el.getBoundingClientRect();
    boxes.set(el, { top: r.top + y, h: r.height });
  }
  for (const s of scenes) {
    const r = (s.track || s.el).getBoundingClientRect();
    s.top = r.top + y;
    s.h = r.height;
    s.stageH = s.stage ? s.stage.offsetHeight : 0;
  }
}

/* ── the routing schematic ─────────────────────────────────────────────────
   Seven wires draw in sequence; each node lights when its wire arrives. */
const sch = document.querySelector('[data-sch]');
const wires = sch ? [...sch.querySelectorAll('.flow')] : [];
const nodes = sch ? [...sch.querySelectorAll('.node[data-node]')] : [];
const stages = [...document.querySelectorAll('[data-stages] .stage')];
const WIRE = [[0,.10],[.10,.20],[.20,.34],[.34,.46],[.46,.60],[.60,.75],[.75,.88]];
const NODE = [0, .12, .26, .40, .54, .68, .80];
const STAGE = [0, .26, .48, .70];

function pipe(p) {
  wires.forEach((w, i) => {
    const win = WIRE[i] || [0, 1];
    w.style.setProperty('--w', map(p, win[0], win[1]).toFixed(3));
  });
  nodes.forEach(n => n.toggleAttribute('data-on', p >= NODE[+n.dataset.node]));
  stages.forEach((s, i) => s.toggleAttribute('data-on', p >= STAGE[i]));
}

/* ── the triplicate ───────────────────────────────────────────────────────
   Three copies of one run, fanned apart. The front copy travels furthest, so
   the fan reveals raised → triaged → posted as it opens. */
const triCopies = [...document.querySelectorAll('[data-tri] .tri__copy')];
function tri(p) {
  const e = ease(clamp(p * 1.15));
  const k = innerWidth < 760 ? .55 : 1;      // less room on a phone, less travel
  triCopies.forEach(c => {
    const d = (triCopies.length - 1) - (+c.dataset.copy);
    c.style.setProperty('--tx', (d * 34 * k * e).toFixed(1));
    c.style.setProperty('--ty', (d * 52 * k * e).toFixed(1));
    c.style.setProperty('--r', (d * 0.8 * e).toFixed(2));
  });
}

/* ── the pile-up ──────────────────────────────────────────────────────────
   One finding, re-raised on every push, each copy fainter than the last. The
   slips are built here so the markup does not carry seven near-identical rows. */
const pile = document.querySelector('[data-pile]');
const PILE_N = 7;
if (pile) {
  for (let i = 0; i < PILE_N; i++) {
    const s = document.createElement('div');
    s.className = 'pile__slip';
    if (i) s.dataset.dupe = '';
    s.innerHTML = '<span>RB-142</span><span>route.ts:34</span>' +
      '<span class="tag ' + (i ? 'tag--ghost' : 'tag--ember') + '">' +
      (i ? 'again &middot; push ' + (i + 1) : 'raised') + '</span>';
    pile.insertBefore(s, pile.firstChild);
  }
}
const slips = pile ? [...pile.querySelectorAll('.pile__slip')] : [];
const STEP = 26;
function pileUp(p) {
  const n = slips.length;
  if (!n) return;
  /* The stack is centred against the box it is actually in, measured rather
     than assumed: a fixed offset put the oldest duplicates above the card's
     top edge, where overflow:hidden simply ate them. */
  const H = pile.clientHeight;
  const slipH = slips[0].offsetHeight || 36;
  const pad = parseFloat(getComputedStyle(pile).paddingTop) || 20;
  const span = (n - 1) * STEP;
  const topY = Math.max(pad, (H - span - slipH) / 2);
  slips.forEach((s, idx) => {
    const i = n - 1 - idx;             // 0 = the original, drawn last, on top
    const e = ease(map(p, .04 + i * .095, .26 + i * .095));
    const restY = topY + (n - 1 - i) * STEP;
    s.style.setProperty('--dx', ((i % 2 ? -1 : 1) * i * 2 * e).toFixed(1));
    s.style.setProperty('--dy', (restY + 16 * (1 - e)).toFixed(1));
    s.style.setProperty('--rot', ((i % 2 ? -1 : 1) * (0.4 + i * 0.45) * e).toFixed(2));
    s.style.setProperty('--o', (i === 0 ? e : e * (0.94 - i * 0.08)).toFixed(3));
  });
  /* The MUTED stamp lands only once the pile is actually a pile. Driven from
     here rather than from the section's own progress, because the card reveals
     long before the slips have finished stacking. */
  if (pile) pile.style.setProperty('--stamp', map(p, .62, .82).toFixed(3));
}

/* ── the run: seven frames, scrubbed ─────────────────────────────────────── */
const rail = document.querySelector('[data-rail]');
const railBtns = rail ? [...rail.querySelectorAll('button')] : [];
const frameBox = document.querySelector('[data-frames]');
const frames = frameBox ? [...frameBox.querySelectorAll('.frame')] : [];
const tapeRows = [...document.querySelectorAll('[data-tape] li')];
let runStep = -1;
function run(p) {
  const n = frames.length;
  if (!n) return;
  const raw = clamp(p * 1.02) * n;
  const i = Math.min(n - 1, Math.floor(raw));
  if (i === runStep) return;
  runStep = i;
  frames.forEach((f, k) => f.toggleAttribute('data-on', k === i));
  tapeRows.forEach((r, k) => {
    r.toggleAttribute('data-on', k <= i);
    r.toggleAttribute('data-now', k === i);
  });
  railBtns.forEach((b, k) => {
    b.toggleAttribute('data-on', k === i);
    b.setAttribute('aria-selected', String(k === i));
    b.tabIndex = k === i ? 0 : -1;
  });
}
/* The rail is a scrub handle, not a tab bar: clicking a step scrolls to the
   part of the track that shows it, so the scene and the URL stay in sync. */
railBtns.forEach((b, k) => b.addEventListener('click', () => {
  const s = scenes.find(x => x.kind === 'run');
  if (!s) return;
  const usable = Math.max(1, s.h - s.stageH);
  scrollTo({ top: s.top + usable * ((k + .5) / frames.length),
    behavior: RM.matches ? 'auto' : 'smooth' });
}));

const SCENE = { pipe, tri, run, problem: pileUp };

/* ── the loop ─────────────────────────────────────────────────────────── */
let ticking = false;
function frame() {
  ticking = false;
  const y = scrollY;
  doc.style.setProperty('--doc', (docH ? y / docH : 0).toFixed(4));

  for (const el of reveals) {
    const b = boxes.get(el); if (!b) continue;
    /* Writing an unchanged custom property still invalidates that subtree's
       style, so a settled element is skipped rather than re-set every frame. */
    const p = map(y + vh * .92 - b.top, 0, Math.min(b.h * .6, 420) + 260).toFixed(3);
    if (p !== b.p) { b.p = p; el.style.setProperty('--p', p); }
  }

  /* Under reduced motion the pinned tracks are collapsed to auto height, so a
     computed progress would pin at 0 and overwrite the final state boot() set.
     Scenes are simply not scrubbed on that path. */
  if (RM.matches) return;
  for (const s of scenes) {
    let p;
    if (s.pinned) {
      const usable = Math.max(1, s.h - s.stageH);
      p = clamp((y - s.top) / usable);
    } else {
      p = map(y + vh * .86 - s.top, 0, s.h * .95 + vh * .5);
    }
    const ps = p.toFixed(4);
    if (ps !== s.ps) { s.ps = ps; s.el.style.setProperty('--p', ps); }
    const fn = SCENE[s.kind];
    if (fn && Math.abs(p - s.last) > 0.0015) { fn(p); s.last = p; }
  }
}
function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }

/* ── the hero entrance ────────────────────────────────────────────────────
   The one moment the page plays on its own, because it sits above the fold
   and there is no scroll yet to drive it. It ends in exactly the state the
   reduced-motion path starts in. */
const rec = document.querySelector('[data-rec]');
const rows = rec ? [...rec.querySelectorAll('[data-row]')] : [];
const heroCheck = rec ? rec.querySelector('[data-check]') : null;
const heroLabel = rec ? rec.querySelector('[data-check-label]') : null;
const typed = rec ? rec.querySelector('[data-typed]') : null;
const caret = rec ? rec.querySelector('[data-caret]') : null;
const slaBar = rec ? rec.querySelector('[data-sla] .sla__bar i') : null;
const h1 = document.querySelector('.hero__d');
const CMD = '@northwind-co/reviewbot ack RB-142';
const timers = [];
const at = (ms, fn) => timers.push(setTimeout(fn, ms));

function heroFinal() {
  rows.forEach(r => r.setAttribute('data-on', ''));
  if (heroCheck) heroCheck.dataset.state = 'pass';
  if (heroLabel) heroLabel.textContent = 'Decision recorded';
  if (typed) typed.textContent = CMD;
  if (caret) caret.style.display = 'none';
  if (slaBar) slaBar.style.setProperty('--sla', '.14');
  if (h1) h1.style.setProperty('--h-rule', '1');
}

function heroPlay() {
  at(80, () => h1 && h1.style.setProperty('--h-rule', '1'));
  rows.forEach((r, i) => at(320 + i * 260, () => r.setAttribute('data-on', '')));
  at(1180, () => {
    if (heroCheck) heroCheck.dataset.state = 'fail';
    if (heroLabel) heroLabel.textContent = '2 findings, no decision';
  });
  at(1900, () => {
    let i = 0;
    const tick = () => {
      if (!typed) return;
      typed.textContent = CMD.slice(0, ++i);
      if (i < CMD.length) timers.push(setTimeout(tick, 26 + Math.random() * 34));
      else at(420, () => {
        if (heroCheck) heroCheck.dataset.state = 'pass';
        if (heroLabel) heroLabel.textContent = 'Decision recorded';
        if (caret) caret.style.display = 'none';
        /* The ack starts a clock; it does not stop one. The bar moving is the
           point of the whole page. */
        if (slaBar) slaBar.style.setProperty('--sla', '.14');
      });
    };
    tick();
  });
}

/* ── the weekly-digest tabs ───────────────────────────────────────────── */
const tabBar = document.querySelector('[data-tabs]');
if (tabBar) {
  const tabs = [...tabBar.querySelectorAll('[role="tab"]')];
  const select = t => {
    tabs.forEach(x => {
      const on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(x.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    /* Panels differ in height, so every offset below this point just moved. */
    measure(); onScroll();
  };
  tabs.forEach(t => t.addEventListener('click', () => select(t)));
  tabBar.addEventListener('keydown', e => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    let j = null;
    if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
    if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
    if (e.key === 'Home') j = 0;
    if (e.key === 'End') j = tabs.length - 1;
    if (j === null) return;
    e.preventDefault(); tabs[j].focus(); select(tabs[j]);
  });
}

/* ── the gate, operable ───────────────────────────────────────────────────
   The only genuinely interactive object on the sheet, because the claim it
   makes — that a decision clears the check and a fix is not required — is
   easier to believe once you have cleared one yourself. */
const gate = document.querySelector('[data-gatecheck]');
if (gate) {
  const label = document.querySelector('[data-gatelabel]');
  const note = document.querySelector('[data-gatenote]');
  const STATES = {
    ack: ['pass', 'Decision recorded', 'var(--sulfur)',
      '<b>Merging is unblocked, and RB-142 is still open.</b> Acknowledged is not resolved: it keeps appearing in the weekly digest until the code changes, and it escalates to a named human if it is still open in fourteen days.'],
    dismiss: ['pass', 'Dismissed &middot; false-positive', 'var(--sulfur)',
      '<b>Merging is unblocked, and RB-142 is closed for good.</b> The reason is on the row, the overseer’s channel has it, and if the same finding recurs on a later run it updates its last-seen run and nothing else. It is never reopened.'],
    reset: ['fail', '1 finding, no decision', 'var(--ember)',
      '<b>Merging is blocked.</b> RB-142 is a security major on this pull request and nobody has recorded a decision about it. Reply with either command below.']
  };
  document.querySelectorAll('[data-cmd]').forEach(btn => btn.addEventListener('click', () => {
    const s = STATES[btn.dataset.cmd]; if (!s) return;
    gate.dataset.state = s[0];
    if (label) { label.innerHTML = s[1]; label.style.color = s[2]; }
    if (note) note.innerHTML = s[3];
  }));
}

/* ── boot ─────────────────────────────────────────────────────────────── */
let heroWatch = null;
function boot() {
  if (heroWatch) { heroWatch.disconnect(); heroWatch = null; }

  if (RM.matches) {
    /* The full static story, not the last frame of it: every run frame is
       shown at once, the tape is complete, and the pinned tracks have already
       been collapsed by the stylesheet. */
    if (frameBox) frameBox.setAttribute('data-static', '');
    if (rail) { rail.hidden = true; rail.setAttribute('aria-hidden', 'true'); }
    frames.forEach(f => f.setAttribute('data-on', ''));
    tapeRows.forEach(r => { r.setAttribute('data-on', ''); r.removeAttribute('data-now'); });
    heroFinal(); pipe(1); tri(1); pileUp(1);
    for (const s of scenes) s.el.style.setProperty('--p', '1');
    measure(); onScroll();
    return;
  }

  if (frameBox) frameBox.removeAttribute('data-static');
  if (rail) { rail.hidden = false; rail.removeAttribute('aria-hidden'); }
  runStep = -1; run(0);
  measure(); onScroll();

  /* The entrance waits for the record to be on screen. On a phone the record
     sits below the headline, and playing the one authored moment where nobody
     is looking would spend it for nothing.

     "On screen" is a ratio OR a pixel height, not a ratio alone: the record is
     tall, so on a 620px-high laptop window it is only ever 24% visible at rest
     and a 0.25 threshold meant the entrance silently never played. 120px is
     the point where its header and first finding row are both readable. */
  if (rec && 'IntersectionObserver' in window) {
    heroWatch = new IntersectionObserver(entries => {
      const seen = entries.some(e => e.isIntersecting &&
        (e.intersectionRatio >= 0.25 || e.intersectionRect.height >= 120));
      if (!seen) return;
      heroWatch.disconnect(); heroWatch = null;
      heroPlay();
    }, { threshold: [0, 0.1, 0.25, 0.5] });
    heroWatch.observe(rec);
  } else heroPlay();
}

addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', () => { measure(); onScroll(); }, { passive: true });
addEventListener('load', () => { measure(); onScroll(); });
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => { measure(); onScroll(); });
}
/* Every offset in the registry is absolute, so anything that changes the
   document's height invalidates all of them: a font swapping in, a tab panel
   opening, an orientation change. fonts.ready can resolve a frame before the
   swap has reflowed, so the height itself is what is watched. */
if ('ResizeObserver' in window) {
  let lastH = 0;
  new ResizeObserver(() => {
    const h = doc.scrollHeight;
    if (Math.abs(h - lastH) < 2) return;
    lastH = h; measure(); onScroll();
  }).observe(document.body);
}
RM.addEventListener('change', () => { timers.forEach(clearTimeout); timers.length = 0; boot(); });
boot();
})();
