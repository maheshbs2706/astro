// Cloudflare Worker CORS proxy for prokerala.com. Deploy, then set PROD_PROXY in index.html.
export default {
  async fetch(request) {
    const target = new URL(request.url).searchParams.get('url') || '';
    let host = '';
    try { host = new URL(target).hostname; } catch {}
    if (!['www.prokerala.com', 'prokerala.com'].includes(host))
      return new Response('host not allowed', { status: 403 });
    const r = await fetch(target, { headers: { 'User-Agent': 'Mozilla/5.0' }, cf: { cacheTtl: 600 } });
    return new Response(r.body, {
      status: r.status,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
    });
  },
};
