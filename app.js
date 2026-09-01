(() => {
'use strict';
const doc = document.documentElement;
const RM = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (v, a = 0, b = 1) => v < a ? a : v > b ? b : v;
const map = (v, a, b) => clamp((v - a) / (b - a));
const ease = t => 1 - Math.pow(1 - t, 3);

/* ── registry ─────────────────────────────────────────────────────────────
   Everything scroll-linked is measured once per resize and read once per
   frame. No element gets its own listener and no observer fires per pixel. */
const reveals = [...document.querySelectorAll('.rise, .rise-2')];
const scenes = [...document.querySelectorAll('[data-scene]')].map(el => ({
  el, kind: el.dataset.scene,
  pinned: el.classList.contains('pin'),
  track: el.querySelector('.pin__track'),
  stage: el.querySelector('.pin__stage'),
  last: -1
}));
let vh = innerHeight, docH = 1, boxes = new WeakMap();

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

/* ── per-scene choreography ───────────────────────────────────────────── */
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
  nodes.forEach(n => {
    const on = p >= NODE[+n.dataset.node];
    n.toggleAttribute('data-on', on);
  });
  stages.forEach((s, i) => s.toggleAttribute('data-on', p >= STAGE[i]));
}

const triCopies = [...document.querySelectorAll('[data-tri] .tri__copy')];
function tri(p) {
  const e = ease(clamp(p * 1.15));
  triCopies.forEach(c => {
    const i = +c.dataset.copy;
    const d = (triCopies.length - 1) - i;   // the front copy travels furthest
    c.style.setProperty('--tx', (d * 34 * e).toFixed(1));
    c.style.setProperty('--ty', (d * 52 * e).toFixed(1));
    c.style.setProperty('--r', (d * 0.8 * e).toFixed(2));
  });
}

/* The pile-up: one finding, re-raised on every push, each copy fainter. */
const pile = document.querySelector('[data-pile]');
const PILE_N = 7;
if (pile) {
  for (let i = 0; i < PILE_N; i++) {
    const s = document.createElement('div');
    s.className = 'pile__slip';
    if (i) s.dataset.dupe = '';
    s.innerHTML = '<span>RB-142</span><span style="color:var(--ink-3)">route.ts:34</span>' +
      '<span class="plc plc--' + (i ? 'grey' : 'red') + '">' + (i ? 'again · push ' + (i + 1) : 'raised') + '</span>';
    pile.insertBefore(s, pile.firstChild);
  }
}
const slips = pile ? [...pile.querySelectorAll('.pile__slip')] : [];
function pileUp(p) {
  const n = slips.length;
  slips.forEach((s, idx) => {
    const i = n - 1 - idx;            // 0 = the original, drawn last / on top
    const e = ease(map(p, .04 + i * .095, .26 + i * .095));
    const restY = 75 - i * 25;   // the run of slips sits centred in its box
    s.style.setProperty('--dx', ((i % 2 ? -1 : 1) * i * 2 * e).toFixed(1));
    s.style.setProperty('--dy', (restY + 16 * (1 - e)).toFixed(1));
    s.style.setProperty('--rot', ((i % 2 ? -1 : 1) * (0.4 + i * 0.45) * e).toFixed(2));
    s.style.setProperty('--o', (i === 0 ? e : e * (0.94 - i * 0.08)).toFixed(3));
  });
}

/* The run: seven frames, scrubbed. */
const rail = document.querySelector('[data-rail]');
const railBtns = rail ? [...rail.querySelectorAll('button')] : [];
const frames = [...document.querySelectorAll('[data-frames] .frame')];
const tapeRows = [...document.querySelectorAll('[data-tape] li')];
let runStep = -1;
function run(p) {
  const n = frames.length;
  const raw = clamp(p * 1.02) * n;
  const i = Math.min(n - 1, Math.floor(raw));
  railBtns.forEach((b, k) => b.style.setProperty('--f', clamp(raw - k).toFixed(3)));
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
railBtns.forEach((b, k) => b.addEventListener('click', () => {
  const s = scenes.find(x => x.kind === 'run');
  if (!s) return;
  const usable = Math.max(1, s.h - s.stageH);
  scrollTo({ top: s.top + usable * ((k + .5) / frames.length), behavior: RM.matches ? 'auto' : 'smooth' });
}));

const SCENE = { pipe, tri, run, problem: pileUp };

/* ── the loop ─────────────────────────────────────────────────────────── */
const mast = document.getElementById('mast');
let ticking = false;
function frame() {
  ticking = false;
  const y = scrollY;

  doc.style.setProperty('--doc', (docH ? y / docH : 0).toFixed(4));
  if (mast) mast.toggleAttribute('data-stuck', y > 8);

  for (const el of reveals) {
    const b = boxes.get(el); if (!b) continue;
    // Writing an unchanged custom property still invalidates that subtree's
    // style, so a settled element is skipped rather than re-set every frame.
    const p = map(y + vh * .92 - b.top, 0, Math.min(b.h * .6, 420) + 260).toFixed(3);
    if (p !== b.p) { b.p = p; el.style.setProperty('--p', p); }
  }
  // Under reduced motion the pinned tracks are collapsed to auto height, so a
  // computed progress would pin at 0 and overwrite the final state boot() set.
  // Scenes are simply not scrubbed on that path.
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

/* ── hero entrance ────────────────────────────────────────────────────────
   The one moment the page plays on its own, because it sits above the fold
   and there is no scroll yet to drive it. It ends in the state the reduced
   -motion path starts in. */
const tlog = document.querySelector('[data-tlog]');
const rows = tlog ? [...tlog.querySelectorAll('[data-row]')] : [];
const heroCheck = tlog ? tlog.querySelector('[data-check]') : null;
const heroLabel = tlog ? tlog.querySelector('[data-check-label]') : null;
const typed = tlog ? tlog.querySelector('[data-typed]') : null;
const caret = tlog ? tlog.querySelector('[data-caret]') : null;
const CMD = '@northwind-co/reviewbot ack RB-142';
const timers = [];
const at = (ms, fn) => timers.push(setTimeout(fn, ms));

function heroFinal() {
  rows.forEach(r => r.setAttribute('data-on', ''));
  if (heroCheck) heroCheck.dataset.state = 'pass';
  if (heroLabel) heroLabel.textContent = 'Decision recorded';
  if (typed) typed.textContent = CMD;
  if (caret) caret.style.display = 'none';
  if (tlog) { tlog.setAttribute('data-released', ''); tlog.style.setProperty('--s3', '1'); tlog.style.setProperty('--s5', '1'); }
  const h1 = document.querySelector('.hero h1');
  if (h1) h1.style.setProperty('--h-rule', '1');
}

function heroPlay() {
  const h1 = document.querySelector('.hero h1');
  at(80, () => h1 && h1.style.setProperty('--h-rule', '1'));
  rows.forEach((r, i) => at(320 + i * 260, () => r.setAttribute('data-on', '')));
  at(1180, () => {
    if (heroCheck) heroCheck.dataset.state = 'fail';
    if (heroLabel) heroLabel.textContent = '2 findings, no decision';
    if (tlog) tlog.style.setProperty('--s3', '1');
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
        if (tlog) { tlog.setAttribute('data-released', ''); tlog.style.setProperty('--s5', '1'); }
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
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
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

/* ── the gate, operable ───────────────────────────────────────────────── */
const gate = document.querySelector('[data-gatecheck]');
if (gate) {
  const label = document.querySelector('[data-gatelabel]');
  const note = document.querySelector('[data-gatenote]');
  const STATES = {
    ack: ['pass', 'Decision recorded', '#4CD08A',
      '<b>Merging is unblocked, and RB-142 is still open.</b> Acknowledged is not resolved: it keeps appearing in the weekly digest until the code changes, and it escalates to a named human if it is still open in fourteen days.'],
    dismiss: ['pass', 'Dismissed &middot; false-positive', '#4CD08A',
      '<b>Merging is unblocked, and RB-142 is closed for good.</b> The reason is on the row, the overseer’s channel has it, and if the same finding recurs on a later run it updates its last-seen run and nothing else. It is never reopened.'],
    reset: ['fail', '1 finding, no decision', '#F0616A',
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
  measure(); onScroll();
  if (heroWatch) { heroWatch.disconnect(); heroWatch = null; }
  if (RM.matches) {
    heroFinal(); pipe(1); tri(1); pileUp(1); run(1);
    for (const s of scenes) s.el.style.setProperty('--p', '1');
    return;
  }
  // The entrance waits for the log to be on screen. On a desktop that is
  // immediate; on a phone the log sits below the headline, and playing the one
  // authored moment where nobody is looking would spend it for nothing.
  if (tlog && 'IntersectionObserver' in window) {
    heroWatch = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      heroWatch.disconnect(); heroWatch = null;
      heroPlay();
    }, { threshold: 0.3 });
    heroWatch.observe(tlog);
  } else heroPlay();
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', () => { measure(); onScroll(); }, { passive: true });
addEventListener('load', () => { measure(); onScroll(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); onScroll(); });
// Every offset in the registry is absolute, so anything that changes the
// document's height invalidates all of them: a font swapping in, an image
// arriving, a tab panel opening. fonts.ready can resolve a frame before the
// swap has actually reflowed, so the height itself is what is watched.
if ('ResizeObserver' in window) {
  let lastH = 0;
  new ResizeObserver(() => {
    const h = doc.scrollHeight;
    if (Math.abs(h - lastH) < 2) return;
    lastH = h; measure(); onScroll();
  }).observe(document.body);
}
RM.addEventListener('change', () => { timers.forEach(clearTimeout); boot(); });
boot();
})();
