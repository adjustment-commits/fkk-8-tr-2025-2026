const CACHE_NAME = "next-season-fkk8-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./images/icon-192.png",
  "./images/icon-512.png"
];

// インストール
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// フェッチ
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
