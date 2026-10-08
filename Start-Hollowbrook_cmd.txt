@echo off
rem Opens the Hollowbrook mockup in your browser using a tiny local web server (needs Python 3).
cd /d "%~dp0mockup"
start "" "http://localhost:8765/index.html"
python -m http.server 8765 --bind 127.0.0.1
