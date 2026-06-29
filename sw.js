// Service worker för Vattenutkast – cachar app-skalet så sidan funkar offline.
// Höj versionen när du ändrar filerna nedan för att tvinga uppdatering.
const CACHE = 'vattenutkast-v1';
const ASSETS = [
  '.',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Cache-first för app-skalet; nät för allt annat (t.ex. Google Fonts).
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).catch(() => caches.match('index.html')))
  );
});
