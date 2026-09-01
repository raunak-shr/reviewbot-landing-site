# Product (imported from old location)

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing repo is a Python service plus a small Vite/TypeScript dashboard (`frontend/`).
The landing page requested here is a standalone single-file deliverable under
`scripts/scratch/` — plain HTML/CSS/JS, no build step, no framework, no runtime
dependencies. Confirmed by the request ("single-page landing page", "avoid
unnecessary dependencies", "save the draft under scripts/scratch").

## Users

**Primary (for this surface):** engineers and engineering leaders evaluating
ReviewBot as a piece of built work — a recruiting / portfolio audience. They read
fast, they are suspicious of AI-product marketing, and they are convinced by
mechanism and by a system that clearly survived contact with real constraints.
Confirmed by the user in the intake round.

**Primary (for the product itself):** the developers on the Northwind frontend
and backend teams, who meet ReviewBot as a GitHub App on their pull requests, and
a named security/bug overseer who receives dismissal posts, escalations and the
five-strike flag.

## Product Purpose

ReviewBot continuously reviews a codebase for correctness bugs, security
vulnerabilities, and engineering-practice drift, without becoming a source of
review noise or a blocker to shipping. Success is a review a developer trusts
enough to act on and cheap enough to overrule.

## Positioning

The mechanism a neighbouring product could not truthfully copy:

- **It gates on a recorded decision, not on a fix.** The `reviewbot/majors`
  required check goes green when a developer acks or dismisses a major finding —
  never on the code changing. A false positive costs one comment; nobody merges
  past an unaddressed injection flag in silence.
- **Narrow single-domain agents, one central judge.** Domain agents (Bug &
  Security, Practices H1, Practices H2/3) never rule on legitimacy, value, or
  severity. One Triage agent does, once, for the whole scope.
- **Findings have identity across time.** A finding is fingerprinted on its
  enclosing symbol, not its line range, so a function that moved 200 lines is the
  same finding, and `fixed` is distinguished from `invalidated` by whether the
  symbol's content hash changed.
- **It never executes the code it reviews.** Parse only. That property is what
  makes reviewing fork PRs safe.
- **Suppression is auditable.** Downgraded and suppressed findings are persisted
  with `suppressed = true`, never dropped. A dismissal carries an author, a
  reason from a fixed vocabulary, and a commit SHA.

## Operating Context

A GitHub App on pull requests. The developer's scene is the PR page: a check
strip, an inline comment carrying a finding id (`RB-142`), and a reply
(`@northwind-co/reviewbot ack RB-142`). Findings that survive reach a weekly
digest in Slack/Gchat. The overseer's scene is a chat channel receiving
dismissals, SLA escalations, and rule-tuning flags.

## Capabilities and Constraints

Confirmed, quotable product facts:

- **Agents:** Context Builder (AST expansion + dependency graph + pgvector
  similarity; not an LLM judge) → Bug & Security (correctness *and* security in
  one pass; must tag each finding `bug` or `security`, never default it) →
  Practices H1 (generic hygiene) → Practices H2/3 (stack-aware, versioned YAML
  ruleset, may override H1 style-class findings only) → Triage/Legitimacy
  (legitimacy, cost-benefit, tier) → Report Router. Index Updater maintains the
  symbol/edge/embedding index and is skipped on the PR fast-path.
- **Tiers:** major (security), major (bug), minor, nitpick. Only majors reach a
  PR. Minors and nitpicks reach the weekly digest and monthly report only.
- **Runs:** baseline scan (once, at onboarding), PR fast-path (Context Builder +
  Bug & Security + Triage; Practices skipped for speed), weekly scan
  (diff-scoped over what merged to main), monthly full-codebase scan (drift and
  ruleset-update safety net).
- **Resolution:** `ack` → check green, status `acknowledged`, keeps appearing in
  digests until fixed. `dismiss <false-positive|accepted-risk|not-applicable>:
  <reason>` → reason mandatory, posted to the overseer, terminal for that
  finding. No response → nothing written; the check stays red.
- **SLA:** acknowledged findings escalate past 14 days (security) / 30 days
  (bug), adjustable per repo.
- **Feedback loop:** a rule dismissed as false-positive five or more times is
  flagged for tuning; it is never auto-suppressed.
- **Severity dial:** `repos.severity_profile` — strict / balanced / lenient —
  shifts how readily Triage downgrades, never the default category-to-tier map.
- **Safety:** reviewed source is untrusted input, delimited and labelled as data;
  instructions found inside it are not directives. Nothing is posted that was not
  persisted first. A `partial` run sets the check to neutral, never success.
- **Stack:** Python 3.12, fully async, LangGraph, Postgres + pgvector,
  tree-sitter, FastAPI receiver, one long-lived container on ECS.
- **Status:** v0.5 ships the PR fast-path; the index layer, the Practices agents,
  and the weekly/monthly runs are v1.

## Brand Commitments

Name: **ReviewBot**. A generated robot-head mark exists at
`frontend/public/reviewbot.png`, and the dashboard uses a near-black + mint
palette. The user explicitly released both for this surface: the visual world is
open and the mark may be redrawn.

Voice: precise, unhedged, engineering-register. States mechanism rather than
benefit. Never hypes.

## Evidence on Hand

Real: the design doc, the architecture doc (nine runtime flows, an edge-case
matrix), the invariant list, the cost model, the rulesets, the dashboard, the
verification-repo test recipes.

Absent, and never to be invented: precision/recall numbers, customer counts,
"trusted by" logos, pricing, uptime, adoption figures, testimonials, benchmarks.
The day-60 metric set exists as a *set of criteria*, not as results. Sample PRs,
findings, and diffs on the page are authored demonstration data and are labelled
as such.

## Product Principles

1. **The absence of a decision must look like an absence in the data.** No
   response is not a third outcome.
2. **Noise is the failure mode, not misses.** Every mechanism — one triage judge,
   the cost-benefit downgrade, minors kept off the PR, the five-strike flag —
   exists to keep the reviewer worth reading.
3. **Overruling must be cheaper than complying.** One comment, with a reason.
4. **Never execute what you review.** Parsing is the whole safety model.
5. **Everything auditable.** Suppressions, overrides, dismissals and escalations
   are rows, not silences.

## Accessibility & Inclusion

Web standard: semantic HTML, keyboard-operable, 4.5:1 text contrast, and
`prefers-reduced-motion` honoured — the requested surface is scroll-animation
heavy, so the reduced-motion path must render the full static story.
