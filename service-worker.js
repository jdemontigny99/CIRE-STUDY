/* CIRE Study — Service Worker
   Cache-first strategy for full offline support */

const CACHE_VERSION = 'cire-study-v2';
const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './questions.js',
  './questions-extra.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

// Install: pre-cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // Use addAll but tolerate failures (e.g. fonts may fail offline first time)
      return Promise.allSettled(
        CORE_ASSETS.map((url) => cache.add(url).catch(() => null))
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: cache-first, with network fallback and runtime caching for fonts
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET requests
  if (req.method !== 'GET') return;

  // Skip non-http(s) (chrome-extension etc.)
  if (!req.url.startsWith('http')) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req).then((response) => {
        // Only cache successful responses
        if (!response || response.status !== 200) return response;

        // Runtime cache fonts and other same-origin assets
        const url = new URL(req.url);
        const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
        const isSameOrigin = url.origin === self.location.origin;

        if (isFont || isSameOrigin) {
          const respClone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => {
            cache.put(req, respClone).catch(() => {});
          });
        }

        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('', { status: 503 });
      });
    })
  );
});
