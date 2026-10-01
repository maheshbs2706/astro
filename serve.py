"""Local dev server: static files + /proxy?url=... CORS proxy (replaces corsproxy.io)."""
import sys, urllib.request, urllib.parse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ALLOWED = ('www.prokerala.com', 'prokerala.com')

class H(SimpleHTTPRequestHandler):
    def do_GET(self):
        p = urllib.parse.urlparse(self.path)
        if p.path != '/proxy':
            return super().do_GET()
        target = urllib.parse.parse_qs(p.query).get('url', [''])[0]
        if urllib.parse.urlparse(target).hostname not in ALLOWED:
            self.send_error(403, 'host not allowed'); return
        try:
            req = urllib.request.Request(target, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=20) as r:
                body, code = r.read(), r.status
        except Exception as e:
            self.send_error(502, str(e)); return
        self.send_response(code)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
print(f'http://localhost:{port}')
ThreadingHTTPServer(('', port), H).serve_forever()
