// Basic Service Worker for Blogger PWA
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('pwa-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});