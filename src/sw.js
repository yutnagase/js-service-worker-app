const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(addResourcesToCache(["/", "/index.html", "/style.css"]));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
