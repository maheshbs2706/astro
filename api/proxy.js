// Vercel serverless CORS proxy for prokerala.com (same-origin: /api/proxy?url=...)
const ALLOWED = ['www.prokerala.com', 'prokerala.com'];

export default async function handler(req, res) {
  const target = String(req.query.url || '');
  let host = '';
  try { host = new URL(target).hostname; } catch {}
  if (!ALLOWED.includes(host)) return res.status(403).send('host not allowed');
  try {
    const r = await fetch(target, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const body = await r.text();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
    res.status(r.status).send(body);
  } catch (e) {
    res.status(502).send(String(e));
  }
}
