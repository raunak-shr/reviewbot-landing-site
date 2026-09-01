/**
 * POST /api/demo — the demo request slip.
 *
 * The one piece of this site that is not static. It exists so the recipient
 * address never reaches the browser: it lives in DEMO_TO on the server and the
 * page has no idea what it is.
 *
 * No dependencies, deliberately. Node 18+ has global fetch, so Resend's REST
 * API is reachable without an SDK, and the repo stays a static site with one
 * function rather than a project with a build step.
 *
 * Environment (Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY  required   re_xxxxxxxxxxxx from resend.com
 *   DEMO_TO         required   where requests land
 *   DEMO_FROM       optional   defaults to Resend's shared onboarding sender,
 *                              which can only deliver to your own account
 *                              address. Set this to a verified domain sender
 *                              the moment you want it to reach anyone else.
 */

const LIMITS = { name: 120, email: 200, org: 160, repo: 400, note: 4000 };
const MAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Trim, cap, and strip the control characters that let a value forge a header. */
function clean(v, max) {
  return String(v == null ? '' : v)
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .trim()
    .slice(0, max);
}

function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch { return null; } }
  return null;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Use POST.' });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_TO;
  if (!key || !to) {
    // A misconfigured deploy is our fault, not the visitor's, and the reply
    // says so without naming what is missing.
    console.error('demo: missing RESEND_API_KEY or DEMO_TO');
    return res.status(500).json({ error: 'The request could not be sent. Try again shortly.' });
  }

  const body = readBody(req);
  if (!body) return res.status(400).json({ error: 'Send the slip as JSON.' });

  // A field no person can see and no browser fills in. Anything in it is a bot,
  // and a bot is answered with the same 200 a person gets, so it learns nothing.
  if (clean(body.company, 200)) return res.status(200).json({ ok: true });

  const d = {
    name:  clean(body.name,  LIMITS.name),
    email: clean(body.email, LIMITS.email),
    org:   clean(body.org,   LIMITS.org),
    repo:  clean(body.repo,  LIMITS.repo),
    note:  clean(body.note,  LIMITS.note)
  };

  // The client validates so the visitor is told early; the server validates
  // because the client is not the only thing that can POST here.
  const bad = [];
  if (!d.name) bad.push('name');
  if (!MAIL.test(d.email)) bad.push('email');
  if (!d.repo) bad.push('repo');
  if (bad.length) return res.status(400).json({ error: 'Some blanks are still open.', fields: bad });

  const text = [
    'Demo request raised from the ReviewBot document.',
    '',
    'Name          ' + d.name,
    'Email         ' + d.email,
    'Organisation  ' + (d.org || '—'),
    'Would run on  ' + d.repo,
    '',
    'What they want to see',
    (d.note || '—'),
    '',
    '— RB-DR/01'
  ].join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.DEMO_FROM || 'ReviewBot <onboarding@resend.dev>',
        to: [to],
        reply_to: d.email,           // replying to the notification answers them
        subject: 'ReviewBot — demo request — ' + (d.org || d.name),
        text
      })
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('demo: resend ' + r.status + ' ' + detail.slice(0, 500));
      return res.status(502).json({ error: 'The request could not be sent. Try again shortly.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('demo: ' + (err && err.message));
    return res.status(502).json({ error: 'The request could not be sent. Try again shortly.' });
  }
};
