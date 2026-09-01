# ReviewBot — landing document

A two-sheet static site for ReviewBot, aimed at engineers and engineering
leaders reading it as a portfolio piece. No build step, no framework, no runtime
dependency beyond one Google Fonts request that the page can lose without
breaking.

```
index.html   the overview — 8 sheets, the argument and the demo run
demo.html    the demo request — 1 sheet, the request slip
base.css     the shared design system: tokens, type, components, chrome
app.js       one requestAnimationFrame loop; every scroll-linked behaviour
DESIGN.md    the visual system as built, and where it is thin
```

`base.css` is the single source of truth for tokens and shared components. Each
page keeps an inline `<style>` block for what only it uses.

## Viewing it

```bash
python -m http.server 8791 --directory .
# then open http://127.0.0.1:8791/
```

## Deploying

Static output, no build command and no install step. On Vercel: import the repo,
leave the framework preset as **Other**, and leave the build and output settings
empty — the root of the repo is the site.

## Notes

- Every pull request, finding, diff, developer name, timestamp and confidence
  value on these pages is authored sample data, labelled as such on the page.
  The sample organisation is `northwind`.
- The demo request form has no server behind it. It composes the request into a
  `mailto:` and hands it to the visitor's own mail client; nothing is
  transmitted, logged or stored by the page.
- No accuracy, adoption, performance or cost figure is claimed anywhere in the
  document, because none has been measured yet.
