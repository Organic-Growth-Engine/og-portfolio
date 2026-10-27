// Runs only on Vercel. Never expose SUPABASE_SECRET_KEY to the browser.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid request.' });
  }
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return res.status(503).json({ error: 'Service unavailable. Please try again later.' });
  try {
    const response = await fetch(`${url.replace(/\/$/, '')}/rest/v1/media%20leads`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email, source: 'portfolio' }),
      signal: AbortSignal.timeout(10000),
    });
    // A repeated signup is successful without exposing whether an email exists.
    if (response.ok || response.status === 409) return res.status(200).json({ success: true });
    console.error('Media leads insert failed:', response.status);
  } catch {
    console.error('Media leads service unreachable');
  }
  return res.status(502).json({ error: "Couldn't sign you up just now. Please try again." });
};
