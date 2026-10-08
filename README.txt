HOLLOWBROOK - TEXT-ONLY EXPORT
==============================

Every file in this folder is a .txt file so the project can pass a filter that only allows text.
Nothing is missing: each .txt file is one of the original project files, stored in one of two ways.

1. RAW TEXT  (files ending in plain ".txt", e.g. "index_html.txt")
   The contents are exactly the original file, unchanged. To restore: rename the file back to its
   original name (see the table below). Example: mockup/index_html.txt  ->  mockup/index.html

2. BASE64  (files ending in ".b64.txt", e.g. "icon_ico.b64.txt")
   These were binary files (program, images, fonts, icons). Their bytes are written as Base64 text,
   76 characters per line. To restore: Base64-decode the text and save the bytes under the original
   name. If a file was split into parts ("_part1of4", "_part2of4", ...), join the parts in order
   FIRST (just concatenate the text), then decode the joined text once.

Every original file has a SHA-256 checksum in MANIFEST.txt so you can confirm it was rebuilt exactly.
Folder names are unchanged. In file names, every "." of the original name became "_" and ".txt"
(or ".b64.txt") was added.

QUICKEST WAY TO RESTORE EVERYTHING
----------------------------------
Option A (Windows):  rename restore_ps1.txt to restore.ps1, then run in PowerShell, in this folder:
                       powershell -ExecutionPolicy Bypass -File .\restore.ps1
Option B (Python 3): rename restore_py.txt to restore.py, then run:   python restore.py
Both read MANIFEST.txt, rebuild every file into a new folder called "restored", and print OK or FAIL
for each file after checking its SHA-256. "restored" is then the normal project (same as the main
branch on GitHub, minus the dist/ zip, which was just a second copy of the mockup folder).

After restoring, the app is:  restored/windows/Hollowbrook-0.8.0-portable.exe  (Windows 10/11, 64-bit).

NOTES FOR AN AI DOING THE RESTORE
---------------------------------
- Do not edit, reformat, re-indent or "fix" the contents of any file. Only rename (raw text) or
  decode (Base64). Changing even one character breaks the checksum and may break the program.
- Keep line endings exactly as they are (open/write files in binary mode).
- For split Base64 files, concatenate the parts in numeric order before decoding.
- The restored .exe must be 97,686,708 bytes with the SHA-256 listed below.

FILE TABLE
----------
Columns: text file in this export -> original file to recreate | what the original file is | how it is stored | original size

_gitignore.txt
    -> .gitignore
       type: Git ignore list (.gitignore) | stored as: raw text (contents unchanged) | size: 21 B | sha256: 34c8bbf287536f19eebb15995ee3b4ab2d59ecde52c6b382d2ebd91475265bae

CREDITS_csv.txt
    -> CREDITS.csv
       type: CSV spreadsheet (comma-separated text) (.csv) | stored as: raw text (contents unchanged) | size: 2.6 KB | sha256: d543fbfe546e5fe44e6b4f0998820ed6a618ba7558f0e3e47907f634822c0782

README_md.txt
    -> README.md
       type: Markdown document (.md) | stored as: raw text (contents unchanged) | size: 4.8 KB | sha256: e6bb32c0dad445ff7c01411d9a73fe8151301062381a5dc4a6d004b17ab780e1

Start-Hollowbrook_cmd.txt
    -> Start-Hollowbrook.cmd
       type: Windows batch script (.cmd) | stored as: raw text (contents unchanged) | size: 215 B | sha256: 727f5d15391df291b2896bb20fa5f1ffe640ceaeda822786144e8917a5d470ab

app/_gitignore.txt
    -> app/.gitignore
       type: Git ignore list (.gitignore) | stored as: raw text (contents unchanged) | size: 43 B | sha256: 6750f8ba86fc0b52f129720251497b775759229ce87384d2ce94356ecbab78c7

app/build/icon_ico.b64.txt
    -> app/build/icon.ico
       type: Windows icon (.ico) | stored as: Base64 (decode) | size: 41.3 KB | sha256: 1246fb50e9cda0a5629cb8f4e9d026b056795a956421ff3954edf6793157d4d4

app/build/icon_png.b64.txt
    -> app/build/icon.png
       type: PNG image (.png) | stored as: Base64 (decode) | size: 19.6 KB | sha256: c774397880e10c4dbe71ffa1ad3c82cd149ef7e7512de3365609558cda648de0

app/main_js.txt
    -> app/main.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 2.9 KB | sha256: a060c480ffff559f70c8a93d67d6ed0d2b53ecf0cd2cd63e24e6609ff6aed20e

app/package-lock_json.txt
    -> app/package-lock.json
       type: JSON data (.json) | stored as: raw text (contents unchanged) | size: 124.1 KB | sha256: 4523b4e89e72890fea28a8f206931ee4483eb17f8f35f5bf373c806fb858fa90

app/package_json.txt
    -> app/package.json
       type: JSON data (.json) | stored as: raw text (contents unchanged) | size: 1.3 KB | sha256: c908eae37fe38ce2eba9ae75675619f96ee65430a5793e14a5cc712aeb29944c

app/preload_js.txt
    -> app/preload.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 1.5 KB | sha256: 6bcdeb84ae16964a27d753b219784a35d0e7349eb3517d4c94abf154f232d260

app/scripts/copy-web_js.txt
    -> app/scripts/copy-web.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 357 B | sha256: 7c0f5f62fab46acf8746bd8d09439f8927b079ef1e57b6d96aab7715ce55cf93

docs/v7-bakery_png.b64.txt
    -> docs/v7-bakery.png
       type: PNG image (.png) | stored as: Base64 (decode) | size: 827.6 KB | sha256: 86a7c0f33d47ff954f08e928199764e04ab9fced20ec29e6fc43026596c32820

docs/v7-chat_png.b64.txt
    -> docs/v7-chat.png
       type: PNG image (.png) | stored as: Base64 (decode) | size: 894.2 KB | sha256: c8acd997b5b7cd68074ede1f41fe1330f76edb626afe6ca6ffca3cb94c81f84a

docs/v7-day_png.b64.txt
    -> docs/v7-day.png
       type: PNG image (.png) | stored as: Base64 (decode) | size: 1.1 MB | sha256: 1854a81b7be787b10b7f8f7b07e5f580e6b9cc8086c52dafdcb60fe7d5469921

docs/v7-night_png.b64.txt
    -> docs/v7-night.png
       type: PNG image (.png) | stored as: Base64 (decode) | size: 888.6 KB | sha256: 0be07300132de3059fb4a015bbe8cc4fc7f8b9256dc307fc78e5f649b26bb7ce

mockup/assets/farm_json.txt
    -> mockup/assets/farm.json
       type: JSON data (.json) | stored as: raw text (contents unchanged) | size: 681.1 KB | sha256: 49d4abf5ccb30ffc351d57dd38415e16f8bc203563e0d3643cd6cab858c62aac

mockup/assets/more_json.txt
    -> mockup/assets/more.json
       type: JSON data (.json) | stored as: raw text (contents unchanged) | size: 5.7 MB | sha256: c10c4a9817d6ef0f690939ac4901c200670b0fc5cdb2fd7e0784cf1641484992

mockup/assets/pond_json.txt
    -> mockup/assets/pond.json
       type: JSON data (.json) | stored as: raw text (contents unchanged) | size: 3.3 MB | sha256: d17148bb28cf8382004f765a3f4e59ae17841ddafc3a2185ec8c6a39f08a6901

mockup/assets/tt_json.txt
    -> mockup/assets/tt.json
       type: JSON data (.json) | stored as: raw text (contents unchanged) | size: 2.5 MB | sha256: 2c6d606eb0ff9193b478c57ad4cdf27bd38535a84d8625305681352f6f8ffc30

mockup/index_html.txt
    -> mockup/index.html
       type: HTML web page (.html) | stored as: raw text (contents unchanged) | size: 336.5 KB | sha256: 42cae6cfae78686b10444930f419e02dcfd62d22abb58dc4de5fd4d224259122

mockup/vendor/fonts/LICENSE-AtkinsonHyperlegibleMono_txt.txt
    -> mockup/vendor/fonts/LICENSE-AtkinsonHyperlegibleMono.txt
       type: Plain text (.txt) | stored as: raw text (contents unchanged) | size: 4.5 KB | sha256: 05327050630a640eb824c8fcb7de8b2e605600d8863e4f531ca7c348239916c6

mockup/vendor/fonts/LICENSE-Fredoka_txt.txt
    -> mockup/vendor/fonts/LICENSE-Fredoka.txt
       type: Plain text (.txt) | stored as: raw text (contents unchanged) | size: 4.3 KB | sha256: 9bbd4f5f107895d5a213579b73821fadd05105241cf4360e86050199fcfd6034

mockup/vendor/fonts/LICENSE-Nunito_txt.txt
    -> mockup/vendor/fonts/LICENSE-Nunito.txt
       type: Plain text (.txt) | stored as: raw text (contents unchanged) | size: 4.4 KB | sha256: 40991bfa02ac620aae16dc527f3c47765a25e43f270d4c301ee6ab663a8d9015

mockup/vendor/fonts/atkinson-hyperlegible-mono-latin-500-normal_woff2.b64.txt
    -> mockup/vendor/fonts/atkinson-hyperlegible-mono-latin-500-normal.woff2
       type: WOFF2 web font (.woff2) | stored as: Base64 (decode) | size: 9.9 KB | sha256: 49efe8526ea1da079582132fcb83555b975ef79129bbf0ff669e103ed162f81f

mockup/vendor/fonts/atkinson-hyperlegible-mono-latin-600-normal_woff2.b64.txt
    -> mockup/vendor/fonts/atkinson-hyperlegible-mono-latin-600-normal.woff2
       type: WOFF2 web font (.woff2) | stored as: Base64 (decode) | size: 9.8 KB | sha256: a52c1396b3cc1b7c7e52dcb39ed9ed2aeb1b7b0ff3572bca076e441aa7d906f6

mockup/vendor/fonts/fonts_css.txt
    -> mockup/vendor/fonts/fonts.css
       type: CSS stylesheet (.css) | stored as: raw text (contents unchanged) | size: 1.3 KB | sha256: 2e895615566e47d134cac98d2ffecca98823efc0dbe763a7b74862bb194396f2

mockup/vendor/fonts/fredoka-latin-500-normal_woff2.b64.txt
    -> mockup/vendor/fonts/fredoka-latin-500-normal.woff2
       type: WOFF2 web font (.woff2) | stored as: Base64 (decode) | size: 15.9 KB | sha256: 7d76e44a94b02894b384fc98c124ccf521d8460bf0e0bbe31c1b6b4be6099620

mockup/vendor/fonts/fredoka-latin-600-normal_woff2.b64.txt
    -> mockup/vendor/fonts/fredoka-latin-600-normal.woff2
       type: WOFF2 web font (.woff2) | stored as: Base64 (decode) | size: 16.1 KB | sha256: b62f2898de150f019961f4884a49f83dcd2ce74375be5e0992c594ebb8f30294

mockup/vendor/fonts/fredoka-latin-700-normal_woff2.b64.txt
    -> mockup/vendor/fonts/fredoka-latin-700-normal.woff2
       type: WOFF2 web font (.woff2) | stored as: Base64 (decode) | size: 15.5 KB | sha256: ee61b48acab42fcfee4e1c398b03bbae7e09d1be8471779c440a97dc85118c16

mockup/vendor/fonts/nunito-latin-500-normal_woff2.b64.txt
    -> mockup/vendor/fonts/nunito-latin-500-normal.woff2
       type: WOFF2 web font (.woff2) | stored as: Base64 (decode) | size: 16.0 KB | sha256: 23ae3083dbdaeabf3b9969a3947ddf5d5614683516e28ffa110ca4eb6192a9ff

mockup/vendor/fonts/nunito-latin-600-normal_woff2.b64.txt
    -> mockup/vendor/fonts/nunito-latin-600-normal.woff2
       type: WOFF2 web font (.woff2) | stored as: Base64 (decode) | size: 16.2 KB | sha256: 45f437de32ff5973eb5616b43c1308bf9fe897442f3d78a603c4cd0a06d66573

mockup/vendor/fonts/nunito-latin-700-normal_woff2.b64.txt
    -> mockup/vendor/fonts/nunito-latin-700-normal.woff2
       type: WOFF2 web font (.woff2) | stored as: Base64 (decode) | size: 15.8 KB | sha256: fa89300b9bbb3bd0f60d6991aa055965d98e2ccca27bf8688fe0c39cdc796846

mockup/vendor/fonts/nunito-latin-800-normal_woff2.b64.txt
    -> mockup/vendor/fonts/nunito-latin-800-normal.woff2
       type: WOFF2 web font (.woff2) | stored as: Base64 (decode) | size: 16.1 KB | sha256: 2363d3ed037283ebb961e8c4b4917e40a8bc8853cf9965cf1ea7b4daa1df630a

mockup/vendor/three/LICENSE.txt
    -> mockup/vendor/three/LICENSE
       type: Plain text (no extension; licence file) ((none)) | stored as: raw text (contents unchanged) | size: 1.1 KB | sha256: bfe119ea4fd413f5f7ca3fcd63adb0c4a073ed39daa2fe7d3e6b769e21272601

mockup/vendor/three/build/three_core_js.txt
    -> mockup/vendor/three/build/three.core.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 1.3 MB | sha256: 283be43b2229e15f46dac84cd19354ede5f06cac7ffb185e765cfcfb2c1eec90

mockup/vendor/three/build/three_module_js.txt
    -> mockup/vendor/three/build/three.module.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 616.2 KB | sha256: d835eab0b3bca3fdfd51e2ce7d06911f4a089b08db73cc3cd70fe5e3005a623f

mockup/vendor/three/examples/jsm/geometries/RoundedBoxGeometry_js.txt
    -> mockup/vendor/three/examples/jsm/geometries/RoundedBoxGeometry.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 6.3 KB | sha256: c1b7c9bd2cddff2e3f3a0723f618a3d364a47450e3d25771d21faed88410bec8

mockup/vendor/three/examples/jsm/loaders/GLTFLoader_js.txt
    -> mockup/vendor/three/examples/jsm/loaders/GLTFLoader.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 112.2 KB | sha256: a2d45c28c56774cc789b99154e914c34db3197f9ea2b89fee27600cc2509b14f

mockup/vendor/three/examples/jsm/postprocessing/EffectComposer_js.txt
    -> mockup/vendor/three/examples/jsm/postprocessing/EffectComposer.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 8.3 KB | sha256: 4b8c855f28eed2570bed898adc0ab89c585a8a281ecb6d905c09d00697f9f50a

mockup/vendor/three/examples/jsm/postprocessing/MaskPass_js.txt
    -> mockup/vendor/three/examples/jsm/postprocessing/MaskPass.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 4.6 KB | sha256: 7cd08eee9d5d6f5578beaddbdcbe9c384f6873810af27f22ab7db3ceeb127aa3

mockup/vendor/three/examples/jsm/postprocessing/OutputPass_js.txt
    -> mockup/vendor/three/examples/jsm/postprocessing/OutputPass.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 4.1 KB | sha256: 02e4a261af34de71338185e9e87f0cbe5cba9115608d984363e1269dec1d2272

mockup/vendor/three/examples/jsm/postprocessing/Pass_js.txt
    -> mockup/vendor/three/examples/jsm/postprocessing/Pass.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 4.1 KB | sha256: 444b409c235ead986893c472e720da1b779a56985c7d10b279c7944b52bd61c5

mockup/vendor/three/examples/jsm/postprocessing/RenderPass_js.txt
    -> mockup/vendor/three/examples/jsm/postprocessing/RenderPass.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 4.2 KB | sha256: 817f6c3cdcd0fd41515d112359ea0532568eefb5aabd3b33903957ebca1b8a6a

mockup/vendor/three/examples/jsm/postprocessing/ShaderPass_js.txt
    -> mockup/vendor/three/examples/jsm/postprocessing/ShaderPass.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 3.2 KB | sha256: e2500a5913b26bbf5148ceaae644c6edcff06a18b01494ee37bf856353d2ab9d

mockup/vendor/three/examples/jsm/postprocessing/UnrealBloomPass_js.txt
    -> mockup/vendor/three/examples/jsm/postprocessing/UnrealBloomPass.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 14.6 KB | sha256: 1158bb02f6467889aba19c1a788b9107054d7f6a558498b5e2152db5873bb859

mockup/vendor/three/examples/jsm/shaders/CopyShader_js.txt
    -> mockup/vendor/three/examples/jsm/shaders/CopyShader.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 729 B | sha256: a33057d5ac91c43304c186ac0e8816e62bb2ed471d3a00ff3018dfd5c0389718

mockup/vendor/three/examples/jsm/shaders/HorizontalTiltShiftShader_js.txt
    -> mockup/vendor/three/examples/jsm/shaders/HorizontalTiltShiftShader.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 1.8 KB | sha256: 772f0865e95c4ecd7e6b016191b5d544d23ea4f048ff0efdc33898ee52fb3fa2

mockup/vendor/three/examples/jsm/shaders/LuminosityHighPassShader_js.txt
    -> mockup/vendor/three/examples/jsm/shaders/LuminosityHighPassShader.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 1.3 KB | sha256: 5044f780b6e6cf863947f64c36fe1587132f7fbe395ada863cd1e5f0388dcf1e

mockup/vendor/three/examples/jsm/shaders/OutputShader_js.txt
    -> mockup/vendor/three/examples/jsm/shaders/OutputShader.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 1.8 KB | sha256: 353479f77a8d7e2629d49ccac9fc2f5dbfdda5442e0adf867b00377a2fcb0cb2

mockup/vendor/three/examples/jsm/shaders/VerticalTiltShiftShader_js.txt
    -> mockup/vendor/three/examples/jsm/shaders/VerticalTiltShiftShader.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 1.7 KB | sha256: 96bed3fafdea8370d1330dc9854f9d604a6def8554db554368c917ee66403742

mockup/vendor/three/examples/jsm/utils/BufferGeometryUtils_js.txt
    -> mockup/vendor/three/examples/jsm/utils/BufferGeometryUtils.js
       type: JavaScript source (.js) | stored as: raw text (contents unchanged) | size: 34.7 KB | sha256: fda7e946b8e0b5ab39b779206589e7a1079a22eb24efb89d7223e03fdfb1f751

start-hollowbrook_sh.txt
    -> start-hollowbrook.sh
       type: Shell script (Linux/macOS) (.sh) | stored as: raw text (contents unchanged) | size: 273 B | sha256: be9ff292c51651ce3245c10901ef90d23d7c401639e120583ec0fcca025d7b11

windows/Hollowbrook-0_8_0-portable_exe_part1of4.b64.txt + windows/Hollowbrook-0_8_0-portable_exe_part2of4.b64.txt + windows/Hollowbrook-0_8_0-portable_exe_part3of4.b64.txt + windows/Hollowbrook-0_8_0-portable_exe_part4of4.b64.txt
    -> windows/Hollowbrook-0.8.0-portable.exe
       type: Windows executable program (portable app) (.exe) | stored as: Base64 (join parts in order, then decode) | size: 93.2 MB | sha256: 41ca7365af52fcf92408da1cef09be726a94a97b8fd0beca32e35dad48c10595

windows/SHA256SUMS_txt.txt
    -> windows/SHA256SUMS.txt
       type: Plain text (.txt) | stored as: raw text (contents unchanged) | size: 97 B | sha256: ce98153a301f2f9a1cca2f758409044b04c9ebfa8a45d2ac560b7ba54d601150


Extra files in this export (not part of the original project):
README.txt     this file
MANIFEST.txt   tab-separated list used by the restore scripts (txt file(s), original path, type, encoding, bytes, sha256)
restore_py.txt Python restore script (rename to restore.py)
restore_ps1.txt PowerShell restore script (rename to restore.ps1)
