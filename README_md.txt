# Hollowbrook

A cozy cottagecore village where AI agents live as original animal villagers and do real work
(data aggregation, CVE lookups, "am I affected?" checks) on local models. This repo holds the
**interactive mockup (v0.8)**, packaged as a Windows app. Lookups and reports use sample data; villager conversation runs on
your local Ollama model.

![Village by day](docs/v7-day.png)

## Windows app (.exe)

**Download:** [`windows/Hollowbrook-0.8.0-portable.exe`](windows/Hollowbrook-0.8.0-portable.exe)
(about 98 MB). Checksum in `windows/SHA256SUMS.txt`.

- Portable: no installer, no admin rights, nothing else to install (no Python, no browser). Copy the
  .exe anywhere, including a USB stick to an offline machine, and double-click it.
- Runs fully offline in its own window. The app blocks every network request except one: Ollama on this
  same PC (`http://127.0.0.1:11434`), which villagers use to talk. It never contacts the internet.
- **Talking to villagers:** install [Ollama](https://ollama.com) separately and pull `qwen3.5:4b`
  (`ollama pull qwen3.5:4b`). With Ollama running, every villager answers in character using the local
  model, shows its thinking, and turns real requests into tasks. Without Ollama they still answer with
  simple built-in replies. Ollama and the model are not inside the .exe.
- Needs Windows 10 or 11, 64-bit. It uses your graphics card when it can and falls back to software
  3D on machines without one (slower).
- The first launch takes a few seconds while it unpacks. Settings and your village roll are saved in
  `%APPDATA%\Hollowbrook`.
- It isn't code-signed, so Windows SmartScreen may say "Windows protected your PC". Click
  **More info**, then **Run anyway**.
- The app source is in `app/` (Electron shell around the `mockup/` page). Build it with
  `cd app && npm install && npm run dist:win`.

## Run it in a browser instead (also offline)

Everything the mockup needs is in this repo, including the 3D library (three.js r182) and fonts in
`mockup/vendor/`, so it runs on an air-gapped machine with no internet at all.

**You need:** a modern browser with WebGL 2 (Chrome, Edge, Firefox or Safari from the last few years)
and Python 3 to serve the folder locally. Python is only a tiny file server; nothing is installed.

- **Windows:** double-click `Start-Hollowbrook.cmd`.
- **Linux / macOS:** run `./start-hollowbrook.sh`.
- **By hand:** `cd mockup` then `python3 -m http.server 8765 --bind 127.0.0.1`, and open
  `http://localhost:8765/` in the browser. Press Ctrl+C in the terminal to stop.
- **No Python?** Any static file server pointed at `mockup/` works, for example
  `php -S 127.0.0.1:8765`, `ruby -run -e httpd . -p 8765` or `busybox httpd -f -p 8765`.

To move it to a closed machine, copy `dist/hollowbrook-mockup-v8.zip` (or the whole repo) over on a USB
stick, unzip it anywhere, and start it as above. The server only listens on this machine
(`127.0.0.1`), and the page never contacts the internet. Opening `index.html` straight from disk
(double-clicking it) won't work, because browsers block it from loading the model packs; that's why a
local server is needed. Settings and your village roll are kept in the browser's local storage.

All data shown is sample data.

## What's in v0.8

- Villagers talk for real through the local model (Ollama, `qwen3.5:4b`): greetings get replies, questions get answers, and only real requests become tasks.
- Villagers keep personal space and walk around every prop; nobody walks through houses or each other.
- Fishing villagers sit on the bank with a proper rod; the bakery is fully stocked and villagers drop by.
- Music: Hollowbrook Fair (Celtic and faire tunes), Meadow Waltz and Classical Garden, each over 5 minutes before it loops. Birdsong and crickets are idle sounds now.

## Earlier (v0.7)

- Click any villager to open a chat: live "thinking" (plan, tool calls, checks) while they work, or an
  empty chat you can task when they're free. Tasks use that villager's own skill; busy villagers queue them.
- Personality card per villager: front portrait, zodiac, trait, likes and dislikes, favourite spot, job
  description, and a mood meter driven by how much you've been asking of them (bored ↔ frazzled).
- Village built from free design kits (Tiny Treats, Pond Kit, Japan Village props, Nature Asset,
  cute plants, woven basket): bakery stall, produce stand, yard dioramas, gateway with stone lanterns,
  plum trees, river life. Credits in `CREDITS.csv`.
- Map-first desktop UI: wheel zoom, drag/turn, Ctrl+K, shortcuts (`?`), settings, inbox, three music
  tracks with separate music / effects / ambient volumes, real sunrise and sunset for US Eastern time.

| | |
|---|---|
| ![Chat](docs/v7-chat.png) | ![Bakery](docs/v7-bakery.png) |
| ![Night](docs/v7-night.png) | |

Villagers and buildings are original designs (no characters from any game).
