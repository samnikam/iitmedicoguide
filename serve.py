import http.server
import os
from urllib.parse import urlparse, unquote

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        clean_path = unquote(parsed.path).lstrip('/')
        file_path = os.path.join(DIRECTORY, clean_path)
        if os.path.isfile(file_path):
            return super().do_GET()
        self.path = '/index.html'
        return super().do_GET()

    def log_message(self, format, *args):
        pass  # Suppress logs, remove this line if you want to see requests

print(f"Server running at http://localhost:{PORT}")
print("Press Ctrl+C to stop")
http.server.HTTPServer(("", PORT), SPAHandler).serve_forever()
