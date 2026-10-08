#!/bin/sh
# Opens the Hollowbrook mockup using a tiny local web server (needs Python 3).
cd "$(dirname "$0")/mockup" && (sleep 1; xdg-open http://localhost:8765/index.html 2>/dev/null || open http://localhost:8765/index.html) &
python3 -m http.server 8765 --bind 127.0.0.1
