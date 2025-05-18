self.addEventListener('install', e => {
  e.waitUntil(caches.open('payme-v1').then(cache => cache.addAll(['.', 'index.html', 'manifest.json', 'sw.js'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});