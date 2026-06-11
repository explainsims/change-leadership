# CHanGE — On-Call Framework App

A lightweight, installable **Progressive Web App** giving Nick Haywood instant,
on-call access to the **CHanGE** leadership framework, organised by the four
pillars:

> **Habits → Behaviours → Culture → Results**

Each pillar lists its tools as cards with a one-line summary; tapping a card
opens the live Google Doc / Canva (which open for Nick when he's signed in to
Google). Concept-only items (e.g. *BMW*, *8 before 8*) show as reference cards.

## Use it

Once deployed (see below), open the site in Chrome, Edge or Safari.

### Install on desktop (icon that opens in its own window)
- **Chrome / Edge:** open the site → click the **Install** icon in the address
  bar (or ⋮ menu → *Install CHanGE*). It gets a desktop / Start-menu icon and
  opens in its own window — no browser needed.

### Install on phone
- **iPhone (Safari):** Share → **Add to Home Screen**.
- **Android (Chrome):** ⋮ menu → **Install app** / **Add to Home Screen**.

The app shell is cached by a service worker, so it opens instantly and works
offline. The linked documents themselves still need an internet connection.

## Edit the content

All resources live in [`documents.js`](documents.js) — one data file. Add, edit
or re-order items there; no other files need to change. Item types:
`doc` · `canva` · `web` · `note` (concept-only, no link).

> **Note:** A few links from the source PDF weren't named in the master
> framework doc and appear under **Additional resources** — rename or move them
> in `documents.js`.

## How it's built

Plain HTML / CSS / JS — no framework, no build step.

| File | Purpose |
|------|---------|
| `index.html` | App shell |
| `styles.css` | Black & orange responsive theme |
| `app.js` | Renders pillars/cards from the data, registers the SW |
| `documents.js` | The content (source of truth) |
| `manifest.webmanifest` | PWA manifest (installable, standalone) |
| `sw.js` | Service worker — offline app shell |
| `icons/` | App icons |

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` publishes the site automatically on every push to
`main`. After the first run, enable Pages: **Settings → Pages → Source: GitHub
Actions**. The site serves at `https://<owner>.github.io/change-leadership/`.
All paths are relative, so it works correctly under that sub-path.
