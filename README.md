# ReviewBot — landing document

A two-sheet static site for ReviewBot, aimed at engineers and engineering
leaders reading it as a portfolio piece. No build step, no framework, and no npm
dependencies — one serverless function to send the demo request, and one Google
Fonts request the page can lose without breaking.

```
index.html   the overview — 8 sheets, the argument and the demo run
demo.html    the demo request — 1 sheet, the request slip
base.css     the shared design system: tokens, type, components, chrome
app.js       one requestAnimationFrame loop; every scroll-linked behaviour
DESIGN.md    the Caldera style reference this document is built to
api/demo.js  the one non-static thing: sends the demo request
docs/        the product notes
```

`base.css` is the single source of truth for tokens and shared components. Each
page keeps an inline `<style>` block for what only it uses.

## The design

Caldera, built to `DESIGN.md`: a warm limestone canvas flooded with a
single molten orange, ultrabold compressed type from 26px to 189px carrying all
the structural weight, three radii (100 / 40 / 800), 1.5px dotted rules, and a
violet halftone used exactly twice — the hero block and the certificate. Flat
throughout; nothing on either sheet casts a shadow.

`DESIGN.md` is the style reference. Where the build departs from it — state
spelled in four surfaces rather than four hues, Ember and Chalk swapping roles
at small sizes, a system monospace for code — the reason is recorded in the
comment at the top of `base.css` and beside the rule it affects. The previous
iteration, carbonless form paper in Archivo and Azeret Mono, is in the git
history at `a329eee` and earlier.

## Viewing it

```bash
python -m http.server 8791 --directory .
# then open http://127.0.0.1:8791/
```

Note: on some machines the stock single-threaded `http.server` stalls Chrome
part-way through a long HTML response. If a sheet renders half-finished, use a
threading server instead:

```bash
python -c "from http.server import SimpleHTTPRequestHandler as H, ThreadingHTTPServer as S; S(('127.0.0.1',8791), H).serve_forever()"
```

## Deploying

Static output plus one function. On Vercel: import the repo, leave the framework
preset as **Other**, and leave the build and output settings empty — the root of
the repo is the site and `api/` is picked up automatically. There is no install
step; the function has no dependencies.

### The demo form needs two environment variables

Without them the form returns a 500 and the page says the request could not be
sent. Set both in **Vercel → Settings → Environment Variables**:

| Variable | Required | Value |
|---|---|---|
| `RESEND_API_KEY` | yes | An API key from [resend.com](https://resend.com) (free tier: 100/day). |
| `DEMO_TO` | yes | The address requests should land in. |
| `DEMO_FROM` | no | Defaults to `ReviewBot <onboarding@resend.dev>`. |

`onboarding@resend.dev` is Resend's shared sender and **will only deliver to your
own Resend account address**. That is fine while `DEMO_TO` is that address. To
send anywhere else, verify a domain in Resend and set `DEMO_FROM` to a sender on
it.

Redeploy after adding the variables — Vercel does not apply them to an existing
build.

### Running it locally

`python -m http.server` serves the pages but not `api/`, so the form will 404.
For the whole thing use `vercel dev`, or point `ENDPOINT` in `demo.html` at a
local stub.

## Notes

- Every pull request, finding, diff, developer name, timestamp and confidence
  value on these pages is authored sample data, labelled as such on the page.
  The sample organisation is `northwind`.
- The demo request form posts to `api/demo.js`, which sends one email and keeps
  nothing. The recipient address is never in the client: it lives in `DEMO_TO`
  on the server, so the page has no idea where the mail goes.
- No accuracy, adoption, performance or cost figure is claimed anywhere in the
  document, because none has been measured yet.
