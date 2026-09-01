---
name: ReviewBot Landing
description: An aircraft technical log for a code reviewer — carbonless form paper ruled in hairlines, instrument-panel dark where code lives, and colour used only to say what state something is in.
colors:
  paper: "#ECEAE4"
  paper-hi: "#F5F3EE"
  paper-lo: "#E1DFD6"
  paper-rose: "#EDD9D3"
  paper-can: "#EEE3BA"
  rule: "#C4C1B6"
  rule-2: "#A19E92"
  rule-3: "#87857A"
  ink: "#16171A"
  ink-2: "#54555A"
  ink-3: "#5C5E63"
  red: "#B41E28"
  red-wash: "#B41E280F"
  amber: "#8F5B00"
  amber-hi: "#DE9A10"
  amber-wash: "#8F5B0014"
  green: "#1A6A40"
  pen: "#24386B"
  panel: "#131519"
  panel-2: "#1B1E23"
  panel-rule: "#33373E"
  panel-ink: "#E9E7E1"
  panel-ink-2: "#9CA2A9"
  panel-red: "#F0616A"
  panel-amber: "#E9AE3A"
  panel-green: "#4CD08A"
  panel-pen: "#7E9BE0"
typography:
  d1:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 7.4vw, 5.9rem)"
    lineHeight: 0.94
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112, 'wght' 780"
  d2:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.5rem)"
    lineHeight: 1.02
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 110, 'wght' 740"
  d3:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 2.3vw, 1.95rem)"
    lineHeight: 1.12
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 106, 'wght' 700"
  d4:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.22rem)"
    lineHeight: 1.24
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 104, 'wght' 680"
  lede:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.55vw, 1.28rem)"
    lineHeight: 1.52
    fontVariation: "'wdth' 100, 'wght' 400"
  body:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.6
    fontVariation: "'wdth' 100, 'wght' 400"
  stencil:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.7rem"
    lineHeight: 1.15
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 74, 'wght' 700"
  mono:
    fontFamily: "Azeret Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    letterSpacing: "-0.02em"
    fontFeature: "tabular-nums"
rounded:
  none: "0"
  hair: "1px"
  dot: "50%"
spacing:
  hair: "1px"
  xs: "0.42rem"
  sm: "0.55rem"
  md: "0.8rem"
  lg: "0.9rem"
  block: "clamp(1.6rem, 3vw, 2.4rem)"
  section: "clamp(3.4rem, 7.5vw, 7rem)"
  gutter: "clamp(18px, 4.2vw, 64px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-hi}"
    rounded: "{rounded.none}"
    padding: "0.82em 1.35em"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper-hi}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.82em 1.35em"
  button-ghost-hover:
    backgroundColor: "{colors.paper-hi}"
    textColor: "{colors.ink}"
  form:
    backgroundColor: "{colors.paper-hi}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  form-rose:
    backgroundColor: "{colors.paper-rose}"
    textColor: "{colors.ink}"
  form-canary:
    backgroundColor: "{colors.paper-can}"
    textColor: "{colors.ink}"
  form-head:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.62rem 0.9rem"
    typography: "{typography.stencil}"
  field-label:
    textColor: "{colors.ink-3}"
    typography: "{typography.stencil}"
  field-value:
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    padding: "0 0 0.22rem 0"
  placard-red:
    backgroundColor: "{colors.red-wash}"
    textColor: "{colors.red}"
    rounded: "{rounded.none}"
    padding: "0.24em 0.58em"
  placard-amber:
    backgroundColor: "{colors.amber-wash}"
    textColor: "{colors.amber}"
  placard-green:
    backgroundColor: "#1a6a4012"
    textColor: "{colors.green}"
  placard-grey:
    backgroundColor: "#0000000a"
    textColor: "{colors.ink-3}"
  placard-inoperative:
    backgroundColor: "{colors.red}"
    textColor: "#FFF3F1"
    rounded: "{rounded.none}"
    padding: "0.72rem 1.1rem"
  check-pending:
    backgroundColor: "{colors.paper-hi}"
    textColor: "{colors.amber}"
    padding: "0.6rem 0.8rem"
  check-fail:
    backgroundColor: "{colors.red-wash}"
    textColor: "{colors.red}"
  check-pass:
    backgroundColor: "#1a6a400d"
    textColor: "{colors.green}"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.panel-ink}"
    rounded: "{rounded.none}"
  panel-head:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.panel-ink-2}"
    padding: "0.52rem 0.8rem"
  tab:
    backgroundColor: "{colors.paper-lo}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    padding: "0.58rem 0.95rem"
  tab-selected:
    backgroundColor: "{colors.paper-hi}"
    textColor: "{colors.ink}"
  stamp-red:
    backgroundColor: "transparent"
    textColor: "{colors.red}"
    padding: "0.35em 0.7em"
  stamp-green:
    backgroundColor: "transparent"
    textColor: "{colors.green}"
  tape-row:
    backgroundColor: "transparent"
    textColor: "#8A9199"
    typography: "{typography.mono}"
    padding: "0.34rem 0"
  tape-row-done:
    textColor: "{colors.panel-ink-2}"
  tape-row-current:
    textColor: "{colors.panel-ink}"
---

# Design System: ReviewBot Landing

> **Corrections after the review rounds.** This file was first written before two
> fix rounds landed. Where it disagrees with the code, the code is right. The
> substantive changes:
>
> - **Reduced motion actually works now.** The earlier build's scroll loop
>   overwrote the final state on the first scroll event, and the collapsed pin
>   tracks held progress at 0, so the schematic rendered blank. `frame()` now
>   returns early when `prefers-reduced-motion: reduce` matches and `boot()` pins
>   every scene's `--p` to 1. The Full-Story rule is enforced by that guard.
> - **Measurement contract.** A `ResizeObserver` on `document.body` re-measures
>   the whole scroll registry whenever the document's height changes, because
>   every offset in it is absolute and `document.fonts.ready` can resolve a frame
>   before the font swap has reflowed. Redundant per-frame custom-property writes
>   are skipped by comparing against the last written value.
> - **New components:** `.tape` (the run's structured log, seven rows, three
>   states via `data-on` / `data-now`, deliberately no opacity fade — every state
>   clears 4.5:1 and the progression is carried by colour temperature);
>   `.case__route`; `.hero__say` / `.hero__do` (the hero is three grid blocks with
>   a `grid-template-areas` layout at ≥1060px and say/log/do stacking below);
>   `.lede__more`.
> - **Carbon Tint is real, not aspirational.** Copies 2 and 3 print as
>   impressions: greyer ink (`#40332F` on rose, `#4A4326` on canary, both above
>   4.5:1), thinner lighter hairlines, and a sub-pixel registration offset.
> - **Also changed:** `.case__meta` is `align-self:start` at ≥1000px;
>   `:where(section,div)[id]{scroll-margin-top:76px}`; `.form--rose` and
>   `.form--can` tint muted text from their own sheet hue rather than dropping to
>   grey; `.run__stage>*{min-width:0}` with `table-layout:fixed` on `.ledger`
>   below 820px; one masthead action at every width, with the certificate moved
>   into the nav as a sixth anchor.
> - ~~**CTAs** are `Read the architecture` and `The design doc`.~~ Both are gone; see
>   the fifth pass and *Buttons*.


> **Third pass — the shared stylesheet, 2026-09-01.** The shared half of the
> stylesheet has been lifted out of `index.html`. Where this file still describes
> one self-contained page, read the list below first.
>
> This pass also added an architecture sheet, **which the fifth pass removed
> again.** Its components are gone from the build; the entries below that still
> describe them are marked.
>
> - **`base.css` is the system.** Tokens, reset, type scale, `.wrap`, the buttons,
>   the motion primitive, `.form` and every part of it, `.log`, `.plc`, `.placard`,
>   `.check`, `.panel`, `.code`, `.annot`, `.stamp`, `.sch`, the masthead, `.sec` /
>   `.rulebar`, the footer and the utilities all moved there verbatim, in their
>   original cascade order. `index.html` keeps four inline blocks for what only it
>   uses. **A token is edited in `base.css` and nowhere else.**
> - ~~**A second surface: `architecture.html`.**~~ Removed in the fifth pass.
> - **The Flush-Left Rule was half a rule and it shipped as a defect.** Content
>   sits flush to the rule that *starts* its column — but a cell that *follows* a
>   rule was also getting `padding-left: 0`, so its first character sat on the
>   hairline. `.fails` and `.feat__pair` had always padded the following cell;
>   `.hero__facts` and `.stage` never did, and the four-up facts strip under the
>   hero was the visible case. Both now pad off the rule they follow, and
>   `.hero__facts` trades `auto-fit` for explicit 1 / 2 / 4 column steps so the
>   position of every cell is known and the resets are deterministic.
> - **The run's stage is a three-row budget now.** `.run .pin__stage > .wrap` is
>   `grid-template-rows: auto minmax(0,1fr) auto`: the rail and the tape are auto
>   tracks that always get their height, `[data-frames]` takes what is left with
>   `min-height: 0; overflow: hidden`. The stage clips and the tape was last in
>   flow, so an overlong frame used to take the structured log's seventh row down
>   with it. If a screen is ever too short it is the frame that gives.
> - **The footer's Documents column is gone**, replaced by the bill of materials.
> - **Sheet counts:** the overview is 8 sheets, the demo request is 1. They are
>   separate documents and their counts do not interact.
>
> **Fourth pass — the demo request, 2026-09-01.**
>
> - **A third surface: `demo.html`.** One sheet, mode Persuade, and the first
>   surface in the document with genuine form controls. It closes the gap this
>   file has carried since the first pass — see *Writable Fields*.
> - **The sample organisation was renamed** from a real company to `northwind`
>   throughout: `northwind/frontend`, `northwind/backend`,
>   `@northwind-co/reviewbot`. It is placeholder data and should stay obviously
>   so; if it ever needs changing again, the strings live in `index.html`,
>   `app.js` and `docs/PRODUCT.md`.
> - **The call to action was re-ranked.** A Persuade sheet's masthead CTA is the
>   conversion action, not a document, so "Request a demo" now holds the primary
>   on the masthead, the hero and the certificate.
>
> **Fifth pass — the architecture sheet removed, 2026-09-01.** `architecture.html`
> and `docs/architecture.md` are deleted, along with every nav link, cross-reference
> and call to action that pointed at them. Consequences worth knowing:
>
> - **The document is two sheets again:** the overview and the demo request.
> - **`index.html`'s nav has no cross-reference left** — six in-page jumps and the
>   CTA. `.mast__nav-x` survives because the demo sheet still uses it to point back.
> - **Both CTA rows changed.** The hero pairs "Request a demo" with a ghost that
>   jumps to `#run` rather than leaving the page; the certificate closes on the
>   single action alone, because the end of the argument is not the place to offer
>   a second door out.
> - **`.plate2`, `.notes`, `.pair`, `.mtx`, `.sch .head`, `.sch .tag`, `.box--hard`,
>   `.box--soft` and `.wire--soft` went with the sheet.** `.sch` itself stays in
>   `base.css`: the overview's own scrubbed schematic still uses it.
> - **Nothing on either page now links outside the repo root**, which is what makes
>   the build deployable to a static host unchanged.
>
> **Sixth pass — the slip actually sends, 2026-09-01.** The demo request posted a
> `mailto:` at the visitor's own mail client, which meant it did not send so much
> as *delegate*. It now POSTs to `api/demo.js`, a zero-dependency serverless
> function that sends one email and keeps nothing.
>
> - **The recipient address left the client entirely.** It was base64 in the page
>   — not visible, but recoverable by anyone reading the script. It now lives in
>   `DEMO_TO` on the server and the page has no idea what it is. This is the first
>   version where "do not show the address" is literally true rather than merely
>   inconvenient to defeat.
> - **A third state joined the slip.** Idle, sending, raised — and *failed*, which
>   is the one that matters: a failure leaves every blank exactly as it was and
>   puts the reason under the button in placard red, so retrying is one click and
>   not five minutes of retyping. `.fi`'s error styling covers it unchanged.
> - **Validation runs twice, on purpose.** The client validates so the visitor is
>   told early; the server validates because the client is not the only thing that
>   can POST there. The server also strips control characters from every value —
>   a newline in a name is how a header gets forged — caps each field's length,
>   and answers a filled honeypot with the same 200 a person gets.
> - **The page's own copy was rewritten to match.** Four separate places told the
>   reader their mail client would open and that nothing was transmitted. Both
>   claims became false the moment this changed, and a page in this world does not
>   get to be wrong about its own mechanism.

**Scope.** This file records the visual system of the ReviewBot landing document:
`index.html` (the overview, 8 sheets, mode Persuade), `demo.html` (the demo request,
1 sheet, mode Persuade), the shared `base.css`, and the one scroll engine in
`app.js`. No build step and no dependencies. It governs those surfaces and nothing else. It does **not** govern the repo's existing dashboard under
`frontend/`, which is a separate and older visual system with its own tokens in
`frontend/src/styles.css` (near-black + mint). The two are unrelated by intent; do not
reconcile them, and do not import rules from one into the other.

Everything below was read out of the shipped code. Where the built system contradicts its own
stated intent, the build is recorded and the divergence is named. This is the second pass: the
first was written before two rounds of fixes landed, and the sections on the tape, the carbon
transfer, the hero's three blocks, the breakpoint table and — above all — the reduced-motion
contract are corrections rather than additions. Where an earlier reading is now wrong, this file
says so rather than quietly replacing it, because the wrong version is the one a reader may
remember.

## Overview

**Creative North Star: "The Aircraft Technical Log"**

An aircraft technical log is the document that decides whether a machine flies. A defect is
raised against an airframe, categorised, placarded INOPERATIVE, and then either repaired or
deferred — but in both cases a named engineer signs for it against a clock, and the aircraft is
released to service on the signature, not on the repair. That is exactly ReviewBot's gate, so
the page is built as that document rather than as marketing about it. The surface you scroll is
a ring-bound log: eight numbered sheets, each with a running head ("Section 4 — The weekly
digest / Sheet 4 of 8"), hole punches down the binding edge, and every value that a person or a
machine wrote in set in monospace because it was *entered*, not typeset.

The world holds exactly two materials and never a third. **Carbonless form paper** — a bone
ground with rose and canary carbon copies, ruled in 1px hairlines — carries every judgement,
every field, every decision. **Instrument-panel dark** carries code, and only code: the diff, the
webhook payload, the run's ledger. Nothing is a card. Nothing floats for the sake of floating.
Sections are separated by rules, not by whitespace and shadow, and the whole page is printed on a
4px crossed-hatch texture that reads as paper fibre at normal viewing distance and disappears at
a glance.

Density is deliberately high and deliberately administrative. The page refuses the category's
dark-hero-plus-three-feature-cards shape; it also refuses the softening moves that usually
accompany it. There are no rounded corners anywhere in the system, no gradients used as
decoration, no icon set, and no illustration. Colour appears only where something has a state.
The result should read as competent paperwork made by somebody who takes the paperwork
seriously — dry, exact, and legible under a fluorescent light.

**Key Characteristics:**
- Two materials only: carbonless paper for judgement, instrument panel for code.
- Zero corner radius, everywhere, without exception.
- Hairline rules do the work that gaps and shadows do elsewhere.
- One variable typeface, driven on its width axis as much as its weight axis.
- Every entered value is monospace; every printed label is condensed stencil caps.
- Colour is status. Red inoperative, amber clock running, green released, blue a human hand.
- Progress is carried by colour temperature; text is never faded out to say it has not happened.
- Nothing animates on a timer once you are past the fold; the page moves only when you scroll.

## Colors

A carbonless-forms palette — three paper stocks and three grades of rule — with a four-colour
status set borrowed from cockpit placarding, and one dark counter-material for code.

### Primary

- **Placard Red** (`#B41E28`): inoperative. The state of a major finding with no recorded
  decision, the failing `reviewbot/majors` check, the riveted INOPERATIVE placard, and the
  small `Major` chips in the defect log. It is also — see the exception below — the page's
  single interaction colour.
- **Panel Red** (`#F0616A`): the same meaning, lifted for legibility on instrument-panel dark.
  Used on the annotation rule beside a flagged line, the hot-line inset on a code row, and the
  rail's fill.

### Secondary

- **Caution Amber** (`#8F5B00`): a clock is running. Minor tier, pending check state, the SLA
  bar under the hero log, an acknowledged-but-open finding. The deep value is the ink; **Signal
  Amber** (`#DE9A10`) is the fill — the SLA bar, and the page's text-selection colour.
- **Panel Amber** (`#E9AE3A`): the same on dark, and the panel's focus-ring and selection colour.
- **Serviceable Green** (`#1A6A40`): released to service. A passing check, the RELEASED
  placard, the green rubber stamp, the "what fixes it" note under each failure mode.
- **Panel Green** (`#4CD08A`): the same on dark.

### Tertiary

- **Ballpoint Blue** (`#24386B`): a human hand. Not a status — an authorship mark. It carries
  the typed `@northwind-co/reviewbot ack RB-142` command, the "Decided by" field on the
  certificate, and the page's focus ring. **Panel Pen** (`#7E9BE0`) is its dark-material pair.

### Neutral

- **Bone Stock** (`#ECEAE4`): the page. The paper everything is printed on.
- **Top Copy** (`#F5F3EE`): the lifted sheet — forms, check strips, tab panels, the certificate.
- **Under Copy** (`#E1DFD6`): the recessed surface — unselected tabs, scrollbar track, the SLA
  bar's empty run.
- **Rose Carbon** (`#EDD9D3`) and **Canary Carbon** (`#EEE3BA`): the second and third copies of
  a triplicate form. Used only where the page is literally showing three copies of one page.
- **Hairline** (`#C4C1B6`), **Rule** (`#A19E92`), **Heavy Rule** (`#87857A`): the three grades of
  ruling. Hairline divides rows inside a form; Rule bounds a form, a section, and a page; Heavy
  Rule is the scrollbar thumb's hover state.
- **Log Ink** (`#16171A`), **Entry Ink** (`#54555A`), **Print Ink** (`#5C5E63`): headline ink,
  body ink, and the ink used for printed labels and secondary values.
- **Instrument Panel** (`#131519`) with its head (`#1B1E23`), rule (`#33373E`), and two inks
  (`#E9E7E1`, `#9CA2A9`): the code material.

### Named Rules

**The Placard Rule.** Red, amber and green mean inoperative, clock-running, and released — and
mean nothing else. A colour never marks importance, category, or brand. If a swatch cannot be
read as an equipment state, it does not get one of these three.

**The Two Materials Rule.** Paper carries judgement; panel carries code. A finding's *text* is
paper; the *line it is about* is panel. Nothing else in the world is a surface, and there is no
third material to reach for.

**The Carbon Tint Rule.** Secondary ink on a tinted copy is tinted from that copy, never dropped
to grey: `.form--rose` sets its field labels, column heads, serial and `.dim` text to `#63524E`,
`.form--can` to `#5E5732`. A neutral grey on coloured stock reads as a printing fault.

**The Carbon Transfer Rule.** The second and third copies of a triplicate are *impressions*, not
recolours of the first. Each copy down the stack loses ink and gains slack, and all four moves
happen together: body ink goes greyer (`#40332F` on rose, `#4A4326` on canary — both still above
4.5:1 on their own stock), row hairlines lighten (`#CDB6B0` / `#D2C596`) and the head rule with
them (`#C0A7A1` / `#C6B784`), the third copy's placard borders thin from 1.5px to 1px, and each
copy's head and body are nudged a sub-pixel out of registration (`translate(.4px, .3px)` on copy
2, `translate(.9px, .7px)` on copy 3). The ink gets weaker. It never gets less readable.

**The State-Without-Fade Rule.** A line of text never says "this has not happened yet" by fading
out. Where a sequence has to show its own progress — the run's tape is the case in the build — the
progression is carried by colour temperature: cool grey (`#8A9199`) for a step still to come,
Entry-Ink-on-dark (`--panel-ink-2`) for one that has happened, full Panel Ink for the step you are
inside, with the node name going amber and then red. Every one of the three states clears 4.5:1 on
the panel, so a stopped scrub is never a screen of half-legible rows. Opacity ramps are still
allowed for diagrammatic marks that carry no reading matter — the schematic's nodes and the
pipeline's stage captions sit at 0.34 until their step arrives — and that is their only sanctioned
use.

**The Ballpoint Rule.** `--pen` blue marks something a person did by hand — a typed command, a
signature field, a focus ring. It is never used for emphasis or for links.

### Where the rule has exceptions in the build

Three, all deliberate, all worth knowing before you extend the system:

1. **Syntax highlighting is decorative colour, not status.** `.code` uses six hues that carry no
   state at all — keyword `#C7A2EE`, string `#94D7AB`, comment `#848B93`, function `#86BDF3`,
   number `#E9AE3A`, punctuation `#959CA4`. They are hardcoded hex rather than tokens. This is a
   real carve-out from the Placard Rule and it is confined to the inside of a code block. Do not
   let it leak outward.
2. **Red doubles as the interaction colour.** The primary button fills red on hover, masthead nav
   links draw a red underline on hover, and the document-progress bar on the binding rule is red.
   None of those are statuses. The system tolerates it because red is the page's only accent and
   an interaction is momentary; a second decorative use of amber or green would not be tolerable.
3. **One word of the headline is red.** `.hero h1 em` colours "silence" and draws a 0.075em
   red underscore beneath it. It reads as a placard on the word rather than as typographic
   emphasis, which is why it survives, but it is the one place colour is used rhetorically.

## Typography

**Display / Body Font:** Archivo Variable (`wdth` 62–125, `wght` 100–900, with italics), falling
back to `-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif`.
**Entered-Value Font:** Azeret Mono (`wght` 300–700), falling back to
`ui-monospace, SF Mono, Menlo, Consolas, monospace`.

Both load through a non-render-blocking `<link rel="preload" as="style" onload>` swap with a
`<noscript>` fallback, so a CDN outage costs a font swap and nothing else.

**Character:** One grotesque doing four different jobs by moving along its width axis, paired
with a squarish, slightly severe monospace that looks like a machine filled in the box. Archivo
expanded and heavy is the log's voice; Archivo condensed to 72–80 width is the *form's* voice —
the words printed on the blank before anybody wrote on it. Azeret Mono is always somebody's
entry. The pairing is bureaucratic rather than techy: it should look printed, not rendered.

### Hierarchy

- **d1** (`wdth` 112 / `wght` 780, `clamp(2.6rem, 7.4vw, 5.9rem)`, line-height 0.94,
  tracking −0.03em, `text-wrap: balance`): the two page-scale statements — the hero headline and
  the certificate's. Nothing else.
- **d2** (`wdth` 110 / `wght` 740, `clamp(2rem, 4.6vw, 3.5rem)`, line-height 1.02, −0.028em,
  balanced): one per section, the section's thesis.
- **d3** (`wdth` 106 / `wght` 700, `clamp(1.35rem, 2.3vw, 1.95rem)`, line-height 1.12, −0.02em,
  balanced): the heading inside a feature split, a case, a tab panel, a run frame.
- **d4** (`wdth` 104 / `wght` 680, `clamp(1.05rem, 1.4vw, 1.22rem)`, line-height 1.24, −0.012em):
  the smallest true heading — paired sub-features, placard captions.
- **lede** (`wdth` 100 / `wght` 400, `clamp(1.05rem, 1.55vw, 1.28rem)`, line-height 1.52, Entry
  Ink, max 62ch): the paragraph directly under a d1 or d2.
- **body** (`wdth` 100 / `wght` 400, 1rem, line-height 1.6, Entry Ink, max 68ch). `body strong`
  goes to Log Ink at `wght` 620 rather than to a colour.
- **stencil** (`wdth` 74 / `wght` 700, 0.7rem, tracking 0.12em, uppercase, line-height 1.15,
  Print Ink): everything *printed on the form* — field labels, column heads, running heads, form
  titles, footer group heads, the schematic's labels.
- **mono** (Azeret Mono, `tabular-nums`, tracking −0.02em, 0.76–0.8rem): every entered value —
  refs, SHAs, file paths, timestamps, table cells, serial numbers, code.

Base is 16px at line-height 1.55 with the body set to `'wdth' 100, 'wght' 400`. Weight and width
are always expressed through `font-variation-settings`, never through `font-weight` shorthand.

### Named Rules

**The Width-Axis Rule.** Loudness is width, not just weight. The ramp runs 112 → 110 → 106 → 104
→ 100 from d1 down to body, and drops to 72–80 for anything stencilled. Set type by choosing a
width first; a heading at body width reads as a mistake in this world.

**The Entered-Value Rule.** If a person or a machine put the value there — a finding ref, a
commit SHA, a path, a count, a timestamp, a command — it is Azeret Mono. If it was printed on
the blank form, it is condensed Archivo caps. There is no third case, and body prose is neither.

**The No-Eyebrow Rule.** Stencil caps are a *form label* and a *running head*. They are never a
kicker above a headline. The system's own comment says so at the definition of `.stencil`, and
the build keeps to it: every stencil in the page sits in a `.rulebar`, a `.form__head`, a
`.panel__head`, a table `th`, an `.f > span`, or a footer column head.

### Where the system is thin here

The stencil rule is **restated in about a dozen places rather than composed**. `.form__title`
sets width 78, `.plc` 76, `.placard` 72, `.stamp` 76, `.check__state` 76, `.tab` 78, `.rail span`
80, and `.log th`, `.f > span`, `.foot h3`, `.plate dt`, `.ledger th`, `.sch text`,
`.hero__facts dt`, `.fail__fix b` and `.case__route b` each re-declare the
74/700/0.12em/uppercase block inline instead of using `.stencil`. The widths drift 72–80 and the
tracking 0.12–0.13em, with no rule behind either drift. The tape is the counter-example worth
copying: `.tape__head` uses the `.stencil` class and only recolours it for the dark material. New
components should do the same, and override width only when there is a stated reason.

## Layout

**Container.** `.wrap` is `max-width: 1360px`, centred, with `padding-inline: var(--gut)` where
`--gut` is `clamp(18px, 4.2vw, 64px)`. Every section uses it; there is no full-bleed content
except the two dark scenes' own backgrounds.

**The page.** Each major section is a *sheet* of the log. `.page` draws a `--rule-2` top border
and a `::before` strip 5px tall with a `--rule` bottom border, producing a deliberate double rule
at every section boundary — the visual of one sheet ending and the next beginning. `.sec` sets
the vertical rhythm at `clamp(3.4rem, 7.5vw, 7rem)`.

**The running head.** `.rulebar` opens each sheet: a stencil section title on the left, an `<hr>`
that flexes to fill, a stencil sheet number on the right ("Sheet 4 of 8"), all sitting on a
hairline. It is the single most repeated structural element on the page and it is what makes the
scroll read as pagination rather than as a feed.

**Binding edge.** `.punches` absolutely positions five 13px circles down the left gutter at
`calc(var(--gut) * 0.28)`, inset-shadowed to read as holes in the stock. They appear only at
≥1180px, where there is gutter to spare.

**The hero is three blocks, not two.** `.hero__grid` holds three grid children: `.hero__say`
(headline and lede), the `.tlog` artifact, and `.hero__do` (the action row and its note). Below
1060px they run in one column in the order **say → log → do**, set with `order: 1 / 2 / 3` — the
log *is* the thesis, so it sits directly under the headline on a phone and the action row follows
it rather than pushing it below the fold. At ≥1060px a `grid-template-areas` layout of
`"say log" / "do log"` gives the log the whole right column (`minmax(430px, .92fr)`) with the two
text blocks stacked down the left, and `.hero__do` takes `align-self: start` so the action row
sits under the lede instead of centring in its cell. Every child carries `min-width: 0`.

**Anchors clear the masthead.** `:where(section, div)[id] { scroll-margin-top: 76px }` — global,
at zero specificity cost, so an in-page jump never parks a section head under the sticky strip. A
new anchor target inherits it simply by having an `id`.

**The grid is ruled, not gapped.** This is the layout's defining rule. `.hero__facts`, `.fails`,
`.stages`, `.feat__pair` and `.foot__grid` all set `gap: 0` and draw their divisions with
`border-right` and `border-bottom` hairlines, then reset the last cell's border. Cells are padded
asymmetrically — `padding: 1rem 1.1rem 1rem 0` — so content sits flush to the rule that starts
its column, never inset from it.

**Measure.** Caps are set per role and are tight: lede 62ch, body 68ch, section head 74ch,
annotation body 64ch, failure-mode body 52ch, certificate legal text 52ch, pipeline stage caption
34ch, failure-mode heading 26ch, footer disclaimer 82ch.

**Responsive.** Seventeen media queries, each doing one job:

- **≤400px** — the masthead CTA drops to `0.76rem` and tightens its padding, so the mark, the CTA
  and nothing else fit on one line.
- **≤560px** — the hero's INOPERATIVE placard drops to `0.74em`, and the typed command steps down
  to `0.74rem`, top-aligns its caret and lets the finding ref wrap (`overflow-wrap: anywhere`)
  rather than running into its own border. Those overrides are declared `.tlog .tlog__cmd`, before
  the base rule, so they win on specificity rather than on source order.
- **≤600px** — mobile compaction. `.d1` re-clamps to `clamp(2.35rem, 10.4vw, 5.9rem)`; hero
  buttons go full-width; log cell padding drops to `.42rem .34rem`; the hero log table goes
  `table-layout: fixed` with explicit column widths so the ref, category and tier columns cannot
  collapse; `.plc` shrinks; masthead min-height 52px → 48px.
- **≤700px** — the lede's closing sentence (`.lede__more`) is hidden, because the third sentence is
  the flourish and the first two are the thesis; the masthead swaps its in-page jump for the page's
  primary action (see the Masthead component); the certificate's release stamp moves from
  right-aligned at −9° to left-aligned at −4°.
- **≥700px** — the certificate's signature block becomes `repeat(3, 1fr) auto`.
- **≥760px** — the pipeline stage captions go to four columns; the footer goes to `1.4fr 1fr 1fr`.
- **≥780px** — masthead nav appears, and the CTA gives up its `margin-left: auto` to it.
- **≥800px** — the weekly-digest tab panel splits `1fr / 1.15fr`.
- **≤820px** — the run's ledger goes `table-layout: fixed` with `overflow-wrap: anywhere` on its
  cells, and the tape's rows fold from three columns to two with the message spanning the full
  width in Archivo rather than mono. Both exist for the same reason: see the Min-Width-Zero Rule.
- **≥820px** — the failure-mode grid goes two-up, and odd cells gain a right rule.
- **≥880px** — the paired safety features go two-up, swapping the bottom rule for a middle rule.
- **≤900px *or* ≤620px tall** — **the pinned scenes stop being pinned.** `.pin__track` collapses to
  auto height, `.pin__stage` becomes static with `overflow: visible`, `.rail` is hidden, all seven
  run frames render stacked and separated by dashed rules, and the triplicate stops overlapping
  (`.tri__copy` goes static and drops its transform entirely) and re-orders to top copy first via
  explicit `order: 0 / 1 / 2`, which is the reverse of its source order. The height half of the
  condition matters as much as the width half: a stage taller than the window sticky-clips its own
  head, and a landscape phone is exactly that case.
- **≥940px** — feature splits go two-up (`1fr / 1.06fr`, or `.86fr / 1.14fr` reversed with an
  `order` swap); the certificate goes `1fr / .92fr`.
- **≥1000px** — masthead metadata fields appear; cases go `1fr / .62fr` and the case note takes
  `align-self: start`; the run's stage goes `1.35fr / 1fr`.
- **≤1060px** — the rail's buttons take a 104px minimum and the rail scrolls horizontally with its
  scrollbar hidden.
- **≥1060px** — the hero takes its two-column `grid-template-areas` layout (see above). The rule is
  written twice: a second, redundant `@media (min-width: 1060px)` block restates
  `grid-template-columns` and can go.
- **≥1180px** — hole punches appear.

### Named Rules

**The Ruled Grid Rule.** Columns and rows are separated by a hairline and zero gap, never by
whitespace. If two blocks need separating, draw the rule and remove the gap.

**The Flush-Left Rule.** In a ruled cell, the left padding is 0. Content starts at the rule.

**The Sheet Rule.** Every section is a numbered sheet with a running head and a sheet count. If
you add a section, it gets a `.rulebar` and the count on every other sheet changes with it.

**The Min-Width-Zero Rule.** A grid or flex item will not shrink below its content's min-content
width, and this page's content is full of unbreakable identifiers — SHAs, file paths, finding
refs. So every track that can receive one says `min-width: 0` outright (`.hero__grid > *`,
`.pin__stage > .wrap`, `.run__stage > *`, `.f`, `.rail button`, `.code .t`) and every table of them
gets `table-layout: fixed` plus `overflow-wrap: anywhere` at the width where it stops fitting.
This is not a nicety: without it the run's ledger put 14px of horizontal overflow on a 390px
viewport, and the page as a whole scrolls sideways.

## Elevation & Depth

The system is **near-flat and rule-first**. Depth exists, but it is the depth of one sheet of
paper sitting on another — a long, very soft, heavily negative-spread shadow that reads as
contact rather than as float. Every elevated thing is *also* bounded by a hairline; the shadow
alone never defines an edge.

### Shadow Vocabulary

- **Sheet lift** (`box-shadow: 0 1px 0 #ffffffb3 inset, 0 14px 34px -26px #00000059, 0 2px 6px -4px #0000002e`):
  a top-level `.form`. The inset white top line is the paper's own edge catching light.
- **Panel lift** (`box-shadow: 0 22px 46px -34px #000000a6, 0 2px 8px -5px #0000005c`): a
  `.panel`. Heavier, because the panel is a harder object than paper.
- **Certificate lift** (`box-shadow: 0 26px 60px -46px #0000008c, 0 2px 8px -6px #00000038`): the
  closing `.crs__doc` only. The longest shadow on the page, used once.
- **Data-plate lift** (`box-shadow: inset 0 1px 0 #ffffff1f, 0 12px 26px -20px #000000a6`): the
  stamped metal identity plate.
- **Slip lift** (`box-shadow: 0 8px 20px -16px #00000080`): a loose carbon slip in the pile-up.
- **Placard lift**, coloured (`box-shadow: 0 10px 22px -14px #8c161fcc, 0 2px 0 #6d1018`; green
  variant `0 10px 22px -14px #1a6a40cc, 0 2px 0 #115433`): the riveted placard. The second, hard
  2px layer is the placard's thickness, not a glow.
- **Printed edge** (`box-shadow: 0 1px 0 var(--rule-2)`): a button at rest. Not a lift — a hard
  1px line under the shape, as if it were stamped into the stock.
- **Button hover** (`box-shadow: 0 7px 16px -10px #6d101880, 0 2px 0 var(--rule-2)`): the printed
  edge kept, a short red-tinted lift added.
- **Sticky masthead** (`box-shadow: 0 6px 18px -14px #00000073`): applied only via `[data-stuck]`,
  set by JS once the page has scrolled past 8px.
- **Punch hole** (`box-shadow: inset 0 1px 2px #00000026, 0 1px 0 #ffffff8c`): the only inward
  shadow used as a physical description.

Two shadows in the system are structural rules rather than lifts, and are named here so they are
not mistaken for elevation: the selected tab's `inset 0 3px 0 var(--red)` and the flagged code
line's `inset 2px 0 0 var(--panel-red)`.

### Named Rules

**The Rule-Before-Shadow Rule.** Nothing in this system casts a shadow without also carrying a
1px border. The border defines the object; the shadow only says how far off the page it sits. A
borderless floating card does not exist here.

**The Nested-Block Rule.** A `.form` inside a tab panel or inside the certificate drops its
shadow entirely and softens its border from `--rule-2` to `--rule`
(`.tabp .form, .crs__cols .form { box-shadow: none; border-color: var(--rule) }`). A block
printed *on* a page is not a card floating *over* it. Extend this selector when you nest a form
somewhere new — it is written as an explicit two-selector list, not as a general descendant rule,
so it will not cover a new container on its own.

## Shapes

**Zero radius, without exception.** No token, component, or utility in the build sets a corner
radius on a rectangular surface. The only radii in the entire stylesheet are `1px` on the
focus-ring outline and on the annotation's 2px rule cap, and `50%` on three things that are
literally round objects: the hole punches, the placard's two rivets, and the check strip's SVG
status circles. There is no `--radius` token because there is nothing to tokenise.

**Border weights are a three-step scale.** `1px` (`--hair`) is the system's line and does almost
all the work. `1.5px` appears on `.plc`, drawn in `currentColor` so the chip's border, dot and
text are one ink — and drops back to `1px` on the third carbon copy, which is the one place the
scale is used to say "less ink reached this sheet" rather than "this object is heavier". `2px`
appears twice, and both times it means "this is a physical object": `.placard` gets a
`2px solid #ffffff59` bezel, and the certificate section opens on a `2px solid var(--ink)` rule —
the heaviest line on the page, used once, to say the log has ended.

**Dashes carry a specific meaning: provisional or non-binding.** Dashed hairlines appear on the
grey `.plc--grey` chip (a finding that is closed, deferred or on file), on the `.annot`'s top
edge, on the `.fail__fix` divider, on the `.tlog__cmd` input box, on `.run__note`, on the data
plate's internal rule, on the `.case__route` and `.case__verdict` dividers inside a case note, and
on the collapsed and reduced-motion frame separators. A solid rule is a boundary; a dashed rule is
a note.

**Two recurring silhouettes.** The 0.5em square rotated 45°, used as `.plc`'s leading diamond, and
the double 3px border of `.stamp`, which is what makes a rubber stamp read as a stamp rather than
as a box. A third instance of the diamond is *intended* on the pipeline stage's bullet and does not
render — see *Where the system is thin*.

**Surface texture.** The body carries two `repeating-linear-gradient` hatches, 1px on 4px, at
`#00000007` (vertical) and `#00000004` (horizontal). It is the paper's fibre, not a grid overlay,
and it is the only texture in the system.

### Named Rules

**The No-Radius Rule.** Rectangles have square corners. If a shape needs a radius it is not a
surface in this world; it is a circle, and it is round because the real object is round.

**The Dashed-Line Rule.** Solid means binding, dashed means provisional. A dashed border on a
finding chip means nobody is being held to it.

## Components

### Buttons

- **Shape:** square (0 radius), `0.82em 1.35em`, `inline-flex` with a `0.6em` gap for an inline
  1em SVG.
- **Primary:** Log Ink fill, Top Copy text, `wdth` 92 / `wght` 640 at 0.9rem, a printed 1px edge
  beneath in `--rule-2`.
- **Hover / Focus:** fills Placard Red, border follows, lifts `translateY(-2px)` over 0.18s on
  `--e-out`, and gains a short red-tinted shadow while keeping its printed edge. `:active`
  returns to `translateY(0)`.
- **Ghost:** transparent on a `--rule-2` border with Log Ink text; on hover it takes the Top Copy
  fill and darkens its border to Log Ink. It never takes red.
- Icons are inline SVG at `1em` square with `flex: none`, stroked at 1.5–1.6. Six distinct shapes
  carry the whole page — arrow, document, clock, cross, tick, and the brand mark. There is no icon
  font and no glyph icon anywhere in the build.
- **The pair contrasts in kind, and it is never one action twice.** A Persuade sheet's
  masthead CTA is the conversion action, so "Request a demo" holds the primary on the
  masthead, the hero and the certificate. The hero pairs it with a ghost that jumps to
  `#run` — the page's own evidence, not a second imperative. The certificate closes on the
  single action alone: the end of the argument is not where you offer a second door out.
- **Nothing links outside the repo root.** Earlier passes pointed CTAs and footer links at
  relative `.md` paths that only resolved while the page was served from inside a wider
  repo tree; on a static host every one of them 404'd. They are all gone, and any new link
  has to satisfy the same test.

### Forms (`.form`) — the signature component

The carbonless log page, and the container for nearly every piece of evidence on the surface.

- **Corner style:** square. **Background:** Top Copy, or Rose / Canary for a carbon copy.
- **Head** (`.form__head`): a baseline-aligned flex row on a `--rule-2` bottom rule, with a
  barely-there `linear-gradient(#00000009, #00000000)` wash and `0.62rem 0.9rem` padding. Left is
  `.form__title` (condensed caps, `wdth` 78 / `wght` 760, 0.76rem); right is `.form__serial`,
  pushed out with `margin-left: auto`, in mono at 0.76rem Print Ink — the form's identifier
  ("RB-TL/01", "SHEET 1 OF 1", "SYNTHETIC", "SAMPLE").
- **Body** (`.form__body`): `0.9rem` padding, `overflow-x: auto` with a thin scrollbar, so a wide
  table scrolls inside the sheet rather than widening the page.
- **Shadow:** sheet lift at top level, none when nested (see the Nested-Block Rule).

### Fields (`.f`)

A stencil label stacked over a ruled entry line, `0.18rem` apart.

- **Label** (`.f > span`): condensed caps, `wdth` 74 / `wght` 700, 0.7rem, 0.12em tracking,
  Print Ink.
- **Value** (`.f > b`): Azeret Mono 500 at 0.8rem with a `--rule` bottom hairline and `0.22rem`
  of padding beneath — the line you write on. `overflow-wrap: anywhere`, because the values are
  paths and SHAs.
- **`.f--pen`** puts the value in ballpoint blue: a human wrote this one.
- Fields are laid out in `.grid2` (two equal columns, `0.9rem 1.1rem` gaps) or in the
  certificate's `.crs__sign` row.

### Defect Log (`.log`)

The ruled table that carries findings. `border-collapse: collapse`, 0.8rem base.

- **`th`:** condensed caps 0.7rem, Print Ink, left-aligned, `nowrap`, `0.42rem 0.55rem`, on a
  `--rule-2` bottom rule.
- **`td`:** Azeret Mono 0.76rem, top-aligned, `0.5rem 0.55rem`, on a `--rule` hairline; the last
  row's rule is removed so the table ends on the form's own border.
- **`.log__note`** switches a cell back to Archivo 0.8rem in Entry Ink for prose descriptions —
  the one place a table cell is not an entered value. `.dim` inside it drops to Print Ink for the
  file-and-line reference.

### Status Placards (`.plc`)

The small chips that carry state. `inline-flex`, `0.24em 0.58em`, a `1.5px currentColor` border,
condensed caps at `wdth` 76 / `wght` 760, and a `::before` diamond in `currentColor`. Four
variants — `--red`, `--amber`, `--green`, `--grey` — each pairing the status ink with a ~4–8%
wash of itself; grey additionally goes `border-style: dashed`. Inside `.panel`, all four swap to
their panel-material equivalents.

### The Inoperative Placard (`.placard`)

The one physical object on the page: a riveted equipment placard. Placard Red fill, `#FFF3F1`
text, a `2px solid #ffffff59` bezel, `0.72rem 1.1rem`, condensed heavy caps at `wdth` 72 /
`wght` 820 with 0.16em tracking, and two 5px `::before`/`::after` rivets pinned to the left and
right edges at vertical centre. A `<small>` inside drops to `wdth` 76 / `wght` 500 at 0.7rem for
the caption line ("Decision required"). The hero rotates it `-3.4deg` about its bottom-right
corner. Its green counterpart (RELEASED) is produced by an attribute-scoped background swap
rather than a class — see *Where the system is thin*.

### Check Strip (`.check`)

GitHub's merge box, drawn in the form's hand. A flex row at `0.6rem 0.8rem` on a `--rule-2`
border over Top Copy, transitioning border-colour and background over 0.5s on `--e-io`. State is
driven by a `data-state` attribute of `pend | fail | pass`, which sets the border tint, layers a
wash over the background, and colours `.check__state`. All three status SVGs are stacked in the
same 1.15rem box at `opacity: 0; transform: scale(.6)`; the matching one animates to
`1 / scale(1)` over 0.34s. The name is always mono (`reviewbot/majors`); the state is always
condensed caps, pushed right.

### Panel and Code (`.panel`, `.code`, `.annot`)

- **Panel:** Instrument Panel ground, `--panel-rule` border, panel lift. Its head is a
  `0.52rem 0.8rem` flex row on `--panel-2` carrying a stencil file path and a mono serial.
- **Code:** an `<ol>` where each `<li>` is a three-column grid — `3.1em` line number, `1.2em`
  diff marker, `1fr` text — with `white-space: pre` and horizontal scroll. Line numbers come from
  a CSS counter (`counter-reset: l`) and the marker from `content: attr(data-m)`, so neither is
  selectable content. `data-m="+"` and `data-m="-"` tint the whole row 8% green or red and colour
  the marker; `data-hot` tints it 12% red and adds a 2px red inset rule at the left edge — the
  line a finding is about.
- **Annotation:** the finding written in the margin. A two-column grid — a 2px coloured rule and
  the text — on a dashed `--panel-rule` top edge over a 2% white wash. The rule colour is the
  status (`--panel-red` by default, amber and grey variants). Title is `wdth` 100 / `wght` 680
  with an inline `.plc`; body is `--panel-ink-2` capped at 64ch; inline `code` gets a 6% white
  plate.

### Case Note (`.case__meta`, `.case__route`)

The slip pinned beside a code panel in the Cases section: a Top Copy block on a `--rule-2` border
with its left border removed at ≥1000px so it shares the panel's edge, a `wdth` 100 / `wght` 700
heading at 1rem, and body at 0.86rem in Entry Ink.

- **`align-self: start` at ≥1000px.** The note ends where its content ends. It is a slip pinned
  beside the code, not a panel that has to match the code's height, and a two-line note next to a
  twelve-line diff should look like a two-line note.
- **`.case__route`** — the "Where it goes" block, on a dashed `--rule` top rule at `0.75rem`,
  0.84rem body. Its `<b>` renders as a block-level stencil label (`wdth` 74 / `wght` 700, 0.7rem,
  0.12em, Print Ink) over the prose. It names the finding's *actual* routing — inline comment at a
  line, held for the digest, written and not posted, nothing written at all — so every case answers
  "and then what happened" rather than stopping at the diagnosis.
- **`.case__verdict`** — `margin-top: auto` on a dashed rule, carrying the outcome as `.plc` chips.
  It is the one part of the note that still bottoms out, so the chips line up across a column of
  cases when the notes happen to match height.

### Tabs (`.tabs` / `.tab` / `.tabp`)

Tabbed dividers in a bound section, drawn as physical index tabs: each tab is `0.58rem 0.95rem`,
Under Copy on a `--rule-2` border with a transparent bottom border and `margin-right: -1px` so
the borders collapse into one line; the strip itself sits at `margin-bottom: -1px` over the
panel. The selected tab takes the Top Copy fill of the panel below it and an `inset 0 3px 0`
Placard Red top rule. Fully keyboard-driven: `role="tablist"`, roving `tabIndex`, and
Arrow/Home/End handling in `app.js`.

### Rail (`.rail`)

The run's sector counter — which of seven steps you are inside. A full-width flex strip bordered
top and bottom in `--panel-rule`, each button `flex: 1` with a right rule, carrying a mono
timestamp over a condensed-caps label that ellipsises. The `[data-on]` step lifts to
`--panel-ink` on a 4% white wash, and each button draws its own scrub progress as an `::after`
bar 2px tall in `--panel-red` at `width: calc(var(--f, 0) * 100%)`. Clicking a step scrolls the
page to that step's position inside the pinned track — the rail drives the scroll, not a separate
state machine. It scrolls horizontally with its scrollbar hidden, its buttons take a
104px minimum below 1060px, and it is removed entirely in the collapsed layout (≤900px wide or
≤620px tall) and under reduced motion — in both of those the frames are all on screen at once, so
there is no "which step am I on" to answer.

### The Run Tape (`.tape`) — the second signature component

The run's structured log, printed under the frames. Seven rows, one per pipeline node, with the
same timestamps the rail carries. It sits inside the pinned stage *below* `[data-frames]`, so it is
present for the whole scrub: the stage is never a short panel floating in a tall dark field, and
the run writes its own log as you move through it.

- **Head** (`.tape__head`): a baseline flex row on the section's own rule, a `.stencil` title
  ("Structured log — run 4471") left and a `.form__serial` note pushed right with `margin-left:
  auto` ("one event per line · run_id on every line"). The one place in the build that composes
  `.stencil` instead of re-declaring it.
- **Rows** (`.tape__rows li`): a three-column grid — `5.6rem` timestamp, `8.4rem` node name,
  `1fr` message — in mono at 0.76rem on a `#262A30` hairline, the message ellipsised on one line.
- **Three states, no opacity.** Base is cool grey `#8A9199`; `[data-on]` (this step has happened)
  goes `--panel-ink-2` with its node name in Panel Amber; `[data-now]` (this is the step you are
  inside) goes full `--panel-ink` with its node name in Panel Red. Colour transitions over 0.35s
  on `--e-io`. Nothing fades, and every state clears 4.5:1 on the panel — see the
  State-Without-Fade Rule, which this component exists to satisfy.
- **≤820px:** two columns, the message dropped to its own full-width row in Archivo at 0.84rem and
  allowed to wrap, because a mono one-liner at phone width is either clipped or a sideways scroll.
- `aria-hidden="true"`: it is a duplicate rendering of the frames' own prose, so it is decoration
  for a screen reader and the frames carry the content.

### Rubber Stamp (`.stamp`)

A `3px double currentColor` border, condensed caps at `wdth` 76 / `wght` 800 with 0.14em
tracking, `opacity: 0.92` and `mix-blend-mode: multiply` — so it darkens the paper beneath it
instead of covering it, which is what makes it read as ink rather than as a badge. Red by
default, `--green` for release. Used twice in the whole page: "Muted — notifications off" over
the pile-up, and "Released to service" on the certificate.

### Masthead (`.mast`)

Sticky at `top: 0`, `z-index: 40`, a 95% Bone ground with `backdrop-filter: saturate(1.3)
blur(9px)` on a `--rule-2` bottom rule, min-height 52px. It gains its shadow only once
`[data-stuck]` is set (scroll > 8px). It carries the mark, two `.f` metadata fields shown at
≥1000px with their entry rules stripped, a nav shown at ≥780px whose links draw a red `scaleX`
underline on hover over 0.28s, and **two CTAs of which exactly one is ever visible**: `[data-wide]`
is an in-page jump to the certificate, `[data-narrow]` is the page's primary action (request a
demo). They swap at 700px, because that is the width below which the hero's own action row
falls past the first screen — so the masthead stops being navigation and becomes the only action
above the fold. Both are `.btn`, so the primary action is never a link that looks like a nav item. Its bottom edge is the document progress bar: a
2px Placard Red line scaled by `--doc`, which the scroll loop writes on `<html>` every frame.

### Browser surfaces

The page themes the chrome the browser would otherwise supply, because default blue and default
grey are both foreign to this world:

- **Selection:** Signal Amber on Log Ink for paper; Panel Amber on Instrument Panel for anything
  inside `.panel`, scoped through `:where(.panel, .panel *)::selection` so it costs no specificity.
- **Focus ring:** `2px solid var(--pen)` at `outline-offset: 3px` with a 1px radius — a ballpoint
  ring, because focus is a person's attention. Inside a panel it switches to Panel Amber.
- **Scrollbars:** `scrollbar-color: var(--rule-2) var(--paper-lo)` and `scrollbar-width: thin`;
  the WebKit track is Under Copy and the 11px thumb is Rule with a 3px Under Copy border, so the
  thumb reads as inset in a channel. Code blocks override both to panel colours. The rail hides
  its scrollbar entirely.
- **`color-scheme: light`** is declared in the head. There is no dark mode; the dark material is
  a *surface*, not a theme, and inverting the page would destroy the two-materials rule.
- **Skip link** (`.skip`): parked at `top: -4rem`, slides to `top: .6rem` on focus, Log Ink on
  Top Copy.

### Bill of Materials (`.bom`) — and the one sanctioned icon set

The parts list on the back of the overview's last sheet: twelve ruled cells, one per
component of the running service, each carrying a redrawn supplier mark, a name, and a
mono note. It replaced the footer's Documents column.

- **Twelve cells is a load-bearing number.** 2, 3 and 4 columns all divide it evenly, so
  no row is ever ragged and every last-in-row reset is exact. Each column count owns an
  **exclusive** width range (`max-width: 699.98px`, `700–999.98px`, `min-width: 1000px`)
  rather than a cascade of `min-width` blocks, because one breakpoint's `:nth-child`
  resets will otherwise leak into the next one's and un-rule a cell that needs a rule.
- **The marks are the carve-out from the No-Illustration Rule, and they are narrow.**
  Twelve inline SVGs at `viewBox="0 0 24 24"`, `fill: none`, `stroke: currentColor`,
  `stroke-width: 1.5`, round caps and joins, rendered at 1.3rem in Log Ink. They are
  *redrawn* silhouettes, never vendor artwork: no fills, no brand colour, one ink and one
  stroke weight across all twelve. The Placard Rule survives intact — a supplier's brand
  is not an equipment state, so it does not get a colour. The only fills anywhere in the
  set are the eye dots on the Python and PostgreSQL marks, which are round because the
  real thing is round. On hover the mark alone goes `--red`, which is the page's existing
  interaction carve-out and not a status.
- **A mark that does not read is worse than no mark.** Python and PostgreSQL both failed
  their first drawing — the Python hooks closed into a rounded rectangle and the elephant
  closed into a face — and were redrawn against a side-by-side render at 96px and 22px
  before shipping. Draw the candidates, look at them at the size they will actually be,
  then choose. Do not extend this set from memory.
- **`.bom__id`** is the flex row of mark and name; the note is a block beneath. The mark
  sits *beside* the name on its baseline, not stacked above it, because a part number sits
  beside a part and a tile of icon-over-heading is the card shape this world refuses.

### Writable Fields (`.fi`) — the input layer

The demo sheet is the first surface here with blanks a person fills in rather than values
already printed. The control is drawn as the blank it is: a stencilled label printed on the
form, and one hairline to write on. There is no box, no fill and no radius — **the rule under
the line is the entire control.**

- **What you type is Ballpoint Blue.** `--pen`, in Azeret Mono at 0.82rem. This is the
  Ballpoint Rule read literally: the field's value is the one thing on the page a person put
  there by hand, so it is the one thing in pen. It also means the Entered-Value Rule needs no
  exception for forms — an input's content is an entered value like any other.
- **The placeholder is Archivo, not mono.** `--ink-3` at `wdth` 100 / `wght` 400, so the hint
  is visibly *printed on the blank* while the answer will be *written into* it. A mono
  placeholder would read as a value that is already there. Both clear 4.5:1 on Top Copy.
- **States, in the world's own vocabulary.** Hover darkens the rule one grade
  (`--rule` → `--rule-2`) — a pen pressing harder. Focus takes the rule to `--pen` at 1.5px,
  under the global ballpoint focus ring. `[aria-invalid="true"]` takes it to `--red` at 1.5px
  over a `--red-wash` tint, with a `.fi__err` message beneath in condensed red caps.
  `:disabled` goes `--paper-lo` with a dashed rule: a blank that cannot be written in is,
  functionally, a printed value.
- **Padding compensates for the border, always.** Every 1.5px state pairs with
  `padding-bottom: calc(.28rem - .5px)`, so the baseline does not jump when a field is focused
  or flagged. A control that moves when it changes state is a control the eye has to re-find.
- **Validation is ours, not the browser's.** The form is `novalidate` and the checks run in
  JS, because a native validation bubble is a browser surface this system has not themed and
  it would be the only un-designed object on the page. Each blank says what is wrong with it,
  on its own rule; the summary under the button counts the open blanks and agrees with them.
  A complaint clears the moment the blank is corrected, and is never raised mid-typing.
- **The form marks its exceptions, not its norm.** Required is the default; only optional
  blanks carry a marker, in Print Ink pushed right by `margin-left: auto`. The first draft
  marked all five in `--rule-3` — which is a *rule* colour, not an ink, and read 3.3:1. A rule
  grade never becomes text.

### Masthead cross-reference (`.mast__nav-x`)

A nav item that leaves the page is not another section of it. `.mast__nav-x` carries a
1px `::before` rule at its left, Log Ink instead of Entry Ink, and a 0.72em out-arrow that
shifts 1px up and right on hover; the in-page jumps stay Entry Ink with the red underline.
`:first-child` drops the rule and its left padding, because the rule separates an off-page
link from the in-page jumps *before* it and first in the row there is nothing to separate.

**Only the demo sheet uses it now** — one item, pointing back to the overview — since the
overview's own cross-reference went with the architecture sheet. Two rules it left behind
are worth keeping: `.mast__nav a` is `white-space: nowrap` (a wrapping nav item stops being
a tab and becomes two lines of prose), and `.mast__meta` sits at ≥1460px rather than
≥1000px. The second is now more headroom than the strip needs; tighten it only after
measuring the row at 1200px, not on the assumption that it is free.

### Where the system is thin or unresolved

Recorded honestly, because these are the places a new screen will have nothing to inherit:

- **Panel-material variants are inline styles, not classes.** The gate's check strip is a
  `.check` with `style="background:#1B1E23;border-color:#F0616A59;color:var(--panel-ink)"`, its
  label is coloured inline, the three command buttons re-skin `.tlog__cmd` inline, and the green
  RELEASED placard sets its own background and shadow via `[data-plc="free"]` in the sixth style
  block rather than as a `.placard--green` modifier. There is a real missing modifier layer here:
  `.check` and `.placard` have paper variants but no panel variants, and every use on dark
  improvises. If you add a fourth dark surface, add the modifiers first.
- **`.tlog__cmd` is doing two jobs.** It is a display element in the hero (a typed command with a
  blinking caret) and an operable `<button>` in the gate, distinguished only by inline `cursor`,
  `text-align` and `width` overrides. It should be two things.
- **Three declared tokens are unused:** `--red-deep`, `--green-hi` and `--panel-3` are defined in
  `:root` and referenced nowhere. They are not part of the system; do not treat them as a
  sanctioned darker/lighter step.
- **Syntax colours are not tokens.** The six `.k / .s / .c / .fn / .n / .p` hues are literal hex
  in the stylesheet. `.n` happens to equal `--panel-amber` by coincidence of value, not by
  reference.
- ~~**There is no disabled or error state anywhere.**~~ **Closed by the demo sheet.** This was
  true for two passes: every field was a printed value, so `:disabled`, `aria-invalid` and error
  styling were undefined, and the note here said a screen with real controls would have to invent
  them in the ruled-line idiom rather than import a generic input. `demo.html` does exactly that
  — see *Writable Fields (`.fi`)*. Anything with an input from here on composes `.fi`; it does
  not invent a second one.
- **Section-level layout overrides are inline.** Several `.rulebar` and `.feat__pair` instances
  carry `style="margin-top:clamp(...)"` or `style="border-top:..."`, so the spacing between a
  section's heading block and its running head is not fully systematised.
- **The pipeline stage's bullet does not render.** `.stage h4 i` and `.stage[data-on] h4 i` style a
  diamond that turns from `--rule-2` to red when its step arrives — but the markup has no `<h4>`
  anywhere on the page; the bullet lives in `.stage h3 > i` and is therefore unstyled and invisible.
  All that survives is the 0.5rem flex gap it leaves behind. This is a defect the build carries, not
  a design decision: fix the selector rather than deleting the `<i>`, because the diamond turning
  red is the only per-caption state the schematic has.
- **The dark material's greys are literal hex, not tokens.** `#8A9199` (tape base ink, struck-out
  ledger rows), `#262A30` (tape and ledger hairlines), `#7F868D` and `#8F969D` (rail label, tape
  serial) and `#7B828A` (code line numbers and diff markers) all recur across components without a
  `:root` name. `--panel-3` (`#24282E`) is declared and unused and is *not* any of them. There is a
  missing `--panel-ink-3` / `--panel-rule-2` pair here; add it before a fourth dark surface, not
  after.
- **One media query is written twice.** The hero has two `@media (min-width: 1060px)` blocks; the
  second only restates `grid-template-columns` and can be deleted without effect.

## Motion

Recorded in this section rather than as a frontmatter group, since the format has no token class
for motion; the machine-readable easing and duration values are in `.impeccable/design.json`.

**One loop, one write path.** `app.js` runs a single `requestAnimationFrame` loop, gated by a
`ticking` flag off a passive `scroll` listener. There is not one observer or listener per
element. Geometry is measured once into a `WeakMap` and read once per frame. Per frame the loop
writes exactly three kinds of value:

1. `--doc` on `<html>`: document scroll progress 0→1, consumed by the masthead progress bar's
   `transform: scaleX(var(--doc))`. It also toggles `[data-stuck]` on the masthead past 8px.
2. `--p` on every `.rise` / `.rise-2` element:
   `map(y + vh*0.94 - top, 0, min(h*0.5, 260) + 120)`. The reveal begins when the element's top
   reaches 94% of the viewport height and completes over at most 380px of scroll.
3. `--p` on every `[data-scene]` element. Pinned scenes use
   `clamp((y - top) / (trackHeight - stageHeight))`; unpinned scenes use
   `map(y + vh*0.88 - top, 0, h*0.62 + vh*0.28)`.

**And it writes none of them twice.** Every scalar is formatted to a fixed number of decimals and
compared against the last value written to that element before it is set — `b.p` for a reveal,
`s.ps` for a scene — because writing an unchanged custom property still invalidates that subtree's
style. A settled element costs a string compare per frame and nothing else. Any new per-frame write
does the same or it does not go in the loop.

**The measurement contract.** Every offset in the registry is an absolute document coordinate, so
anything that changes the document's height invalidates all of them at once. `measure()` therefore
runs on `resize`, on `load`, on `document.fonts.ready` — **and** from a `ResizeObserver` on
`document.body` that re-measures whenever `documentElement.scrollHeight` moves by more than 2px.
The observer is not redundant with `fonts.ready`: that promise can resolve a frame before the font
swap has actually reflowed the page, which leaves every scene measured against the fallback
stack's height. The height itself is the thing worth watching, and it also covers an image
arriving, a tab panel opening, or anything else that reflows after boot.

**CSS does all the interpolation.** JS never writes an opacity, a transform, or a colour on a
scroll-driven element — it writes a scalar and CSS derives everything from it:

```css
.rise   { opacity: calc(var(--p,1) * 2.6 - .18);
          transform: translate3d(0, calc((1 - min(var(--p,1) * 1.7, 1)) * 22px), 0) }
.rise-2 { opacity: calc(var(--p,1) * 2.4 - .5);
          transform: translate3d(0, calc((1 - min(var(--p,1) * 1.35, 1)) * 30px), 0) }
```

The `var(--p, 1)` fallback is load-bearing: with JavaScript disabled or failed, every reveal
resolves to fully visible and unshifted. The same fallback pattern appears on `--s3`, `--s5`,
`--w`, `--f`, `--o`, `--tx / --ty / --r`, `--h-rule` and `--doc`.

**The pinned-track pattern.** A `.pin` wraps a `.pin__track` of explicit height (`--track`,
default 420vh; the pipeline uses 420vh and the run uses 700vh) containing a `.pin__stage` that is
`position: sticky; top: 0; height: 100svh; min-height: 560px`. Scroll progress through the track
becomes the scene's `--p`, so the track's height *is* the scene's duration. The run's stage is
top-aligned rather than centred, because its frames are taller than the schematic's and centring
tall content clips its head.

**Four scene choreographies**, each a pure function of `p`, and each invoked only when `p` has
moved more than 0.0015:

- `pipe(p)` — the routing schematic. Seven wires animate `stroke-dashoffset` through `--w`, each
  over its own window (`[0,.10] [.10,.20] [.20,.34] [.34,.46] [.46,.60] [.60,.75] [.75,.88]`);
  seven nodes toggle `[data-on]` at `0 / .12 / .26 / .40 / .54 / .68 / .80`; four caption blocks
  toggle at `0 / .26 / .48 / .70`. Node opacity (0.34 → 1) and box fill/stroke are CSS
  transitions on `--e-io`.
- `tri(p)` — the triplicate. Three stacked copies separate; the front copy travels furthest
  (`d * 34px` x, `d * 52px` y, `d * 0.8deg`), eased by `1 - (1 - t)³`.
- `pileUp(p)` — the pile-up. Seven slips are generated in JS, each entering on a staggered window
  (`0.04 + i*0.095` → `0.26 + i*0.095`), each fainter than the last (`0.94 - i*0.08`), each
  alternating its lateral drift and rotation sign.
- `run(p)` — the seven-frame run. `p` maps to a frame index; the active frame gets `[data-on]`
  and a 0.5s `framein` keyframe, the rail's buttons get their per-step fill `--f`, `aria-selected`
  and roving `tabIndex`, and the tape's rows get `[data-on]` for every step at or before the index
  and `[data-now]` for the index itself. `--f` is written every frame (it is a continuous scrub
  bar); everything else is behind an `if (i === runStep) return` early exit, so the seven attribute
  toggles happen once per step change rather than once per frame.

**Easing.** Two curves only: `--e-out` `cubic-bezier(.16, 1, .3, 1)` for anything arriving, and
`--e-io` `cubic-bezier(.65, 0, .35, 1)` for anything changing state in place. Durations cluster
at 0.18s (button), 0.2–0.3s (hover, opacity), 0.34s (check icon swap), 0.45–0.55s (reveal,
placard), 0.5s (check strip colour), and 0.9s with a 0.55s delay (the headline's red underscore,
once).

**The one timed sequence.** The hero plays on a `setTimeout` chain — headline rule at 80ms, log
rows at 320ms plus 260ms each, the check failing at 1180ms, the command typing character by
character from 1900ms at 26–60ms per character, then the check passing 420ms later. It is timed
because it sits above the fold and there is no scroll yet to drive it, and it ends in exactly the
state `heroFinal()` sets instantly.

It does not start until the log is actually on screen. `boot()` puts a single-shot
`IntersectionObserver` at `threshold: 0.3` on the `.tlog`, disconnects it on the first
intersection, and plays then; without `IntersectionObserver` it plays immediately. On a desktop
that is the same frame. On a phone the log sits under the headline and below the fold, and
spending the page's one authored moment where nobody is looking would spend it for nothing.

**The reduced-motion contract.** `prefers-reduced-motion: reduce` is honoured on both sides, and
the media query is *live* — `RM.addEventListener('change', …)` clears every pending timer and
re-boots, so toggling the OS setting mid-page is correct without a reload.

- **The guard is what makes this real, and it is the correction worth knowing about.** `frame()`
  returns early — after the reveals, before the scene loop — whenever `RM.matches`, and `boot()`
  pins `--p` to `1` on every `[data-scene]` element itself. Without both halves the contract was
  cosmetic: `boot()` drove each scene to completion, and then the first scroll event recomputed a
  progress for it and overwrote that. The recomputed value was near-zero by construction, because
  under reduced motion the pinned tracks are collapsed to `height: auto`, which makes
  `(y - top) / (trackHeight - stageHeight)` a fraction of a stage rather than of a track. A reader
  who had asked for less motion got the *first* frame of every scene and no way to reach the rest.
  Scenes are simply not scrubbed on this path.
- JS: `heroFinal()` puts the hero in its finished state with no animation, and `pipe(1)`,
  `tri(1)`, `pileUp(1)`, `run(1)` drive every scene to completion once. The caret is hidden
  outright, which is why the one infinite `blink` keyframe in the stylesheet never runs in this
  mode. The hero's `IntersectionObserver` is disconnected rather than armed.
- CSS: `html { scroll-behavior: auto }`; `.rise` / `.rise-2` are forced to `opacity: 1;
  transform: none`; `framein` is disabled; the pinned tracks collapse to auto height and the
  stages go static; the rail is hidden; **all seven run frames render at once**, stacked and
  separated by dashed rules.
- `scrollTo` from the rail falls back to `behavior: 'auto'`.

One honest gap: the small state transitions — the check strip's 0.5s colour change, the status
icon's 0.34s swap, button and nav hovers — are not disabled under reduced motion. They are
sub-second, non-translational and user-initiated, so they are defensible, but the media query
does not cover them and a stricter reading would.

### Named Rules

**The Scalar Rule.** JavaScript writes one number per element per frame and nothing else. If a
new effect needs JS to compute a colour, a shadow or a transform string, the effect is wrong for
this system.

**The Frozen-Frame Rule.** Every scroll-driven scene must be legible stopped at any value of `p`.
Nothing is only readable in motion.

**The Full-Story Rule.** Reduced motion and the collapsed layout (≤900px wide *or* ≤620px tall)
both render every frame, every copy, every step — laid out statically. Motion is how the story is
paced, never how it is told. The rule is only true if the scroll loop is *prevented* from writing
over the finished state, not merely if something sets that state at boot: a static render and a
live scroll handler writing to the same custom property is the live handler's value that wins.

## Do's and Don'ts

### Do:

- **Do** put every judgement on paper and every line of code on panel. Two materials, no third.
- **Do** choose a width before you choose a size: 112 / 110 / 106 / 104 for the display steps,
  100 for prose, 72–80 for anything printed on the form.
- **Do** set entered values — refs, SHAs, paths, counts, timestamps, commands — in Azeret Mono
  with `tabular-nums`, and printed labels in condensed Archivo caps at 0.7rem / 0.12em.
- **Do** separate a grid with a hairline and `gap: 0`, and let content sit flush to the rule
  (`padding-left: 0` in a ruled cell).
- **Do** give every new section a `.rulebar` running head and a sheet number, and update the
  count on the other sheets.
- **Do** pair a shadow with a 1px border, always, and drop the shadow when the block is nested
  inside another surface.
- **Do** keep red, amber and green for equipment states: inoperative, clock running, released.
- **Do** use ballpoint blue only for something a person did by hand, including the focus ring.
- **Do** use a dashed rule when something is provisional and a solid rule when it is binding.
- **Do** render every scroll-driven element in its finished state when `--p` is absent — the
  `var(--p, 1)` fallback means the page is complete with JavaScript off, and that must stay true.
- **Do** compose `.stencil` for new labels rather than re-declaring the width/weight/tracking
  block, and add `.check` / `.placard` panel modifiers instead of inline dark overrides.
- **Do** show a sequence's progress in colour temperature — cool grey, then ink, then ink with a
  coloured node name — and keep every state above 4.5:1 on its own ground.
- **Do** say `min-width: 0` on any grid or flex track that can receive a SHA, a path or a finding
  ref, and give any table of them `table-layout: fixed` at the width where it stops fitting.
- **Do** re-measure the scroll registry whenever the document's height can have changed — a
  `ResizeObserver` on `document.body`, not just `load` and `fonts.ready`. Every offset in it is
  absolute, so one reflow invalidates all of them.
- **Do** compare a per-frame custom-property write against the last value written and skip it if it
  has not moved. Writing an unchanged property still invalidates the subtree's style.

### Don't:

- **Don't** round a corner. There is no radius token because there is no radius.
- **Don't** use red, amber or green for anything that is not a state — no category colours, no
  brand accents, no charts. The syntax highlighter is the single existing carve-out and it stays
  inside a code block.
- **Don't** put a stencil label above a headline. Stencil caps are a form label or a running
  head, never a kicker or an eyebrow.
- **Don't** introduce a card: a floating, radiused, shadowed box with no rule around it is the
  exact shape this world was built to refuse.
- **Don't** add a gap where a rule belongs, or a rule where the two blocks are already on
  separate sheets.
- **Don't** drop secondary ink to grey on a rose or canary copy — tint it from the stock.
- **Don't** use a glyph icon, an icon font, or an illustration. Icons are inline SVG,
  stroked at 1.5–2.2, in one ink. Six shapes carry the overview's chrome; the bill of
  materials adds twelve supplier marks under the terms in its own section — redrawn, never
  vendor artwork, and never coloured. That set is closed: a thirteenth needs the same
  render-and-look pass, and nothing outside `.bom` gets a mark at all.
- **Don't** animate anything on a timer below the fold. Everything past the hero is scroll-driven
  and must be legible frozen at any scroll position.
- **Don't** ship a scene whose reduced-motion path is a fade-out. Reduced motion must render the
  full static story: every frame present, every scene at `p = 1` — and the scroll loop must return
  before it can write over that, or the static state lasts exactly until the first scroll event.
- **Don't** fade text out to say a step has not happened yet. Opacity ramps belong to diagrammatic
  marks that carry no reading matter, and nowhere else.
- **Don't** put a copy of a triplicate on screen in the same ink as the top copy. A second copy is
  greyer, thinner-ruled and a fraction out of registration — and still above 4.5:1.
- **Don't** add a dark mode. `color-scheme: light` is declared and the dark material is a
  surface, not a theme; inverting the page destroys the two-materials rule.
- **Don't** claim a measured number anywhere on the surface. Sample findings, diffs and runs are
  authored demonstration data and are labelled as such on the page.
