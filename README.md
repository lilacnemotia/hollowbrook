# Hollowbrook

A cozy cottagecore village where AI agents live as original animal villagers and do real work
(data aggregation, CVE lookups, "am I affected?" checks) on local models. This repo holds the
**interactive mockup (v7)**. The real desktop app is built after the plan is approved.

![Village by day](docs/v7-day.png)

## Run it

- **Windows:** double-click `Start-Hollowbrook.cmd` (needs Python 3). It serves the `mockup` folder on
  `127.0.0.1:8765` and opens your browser.
- **Anything else:** `./start-hollowbrook.sh`, or `cd mockup && python -m http.server 8765` and open
  `http://localhost:8765/`.
- Or unzip `dist/hollowbrook-mockup-v7.zip` anywhere and do the same.

A local server is needed because the page loads its 3D model packs (`mockup/assets/*.json`).
The mockup loads three.js and fonts from public CDNs; the real app bundles everything and runs offline.
All data shown is sample data.

## What's in v7

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
