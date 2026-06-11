/* CHanGE service worker — precache the app shell for instant, offline launch. */
const CACHE = "change-v3";
const SHELL = [
  ".",
  "index.html",
  "styles.css?v=3",
  "app.js?v=3",
  "documents.js?v=3",
  "manifest.webmanifest",
  "icons/favicon.svg?v=3",
  "icons/icon-192.png?v=3",
  "icons/icon-512.png?v=3",
  "icons/icon-maskable-512.png?v=3",
  "icons/icon-180.png?v=3",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Only manage our own origin (the app shell). External doc links pass through.
  if (url.origin !== self.location.origin) return;

  // Navigations: network-first, fall back to cached shell when offline.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(() => caches.match("index.html"))
    );
    return;
  }
  // Shell assets: cache-first.
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req))
  );
});
