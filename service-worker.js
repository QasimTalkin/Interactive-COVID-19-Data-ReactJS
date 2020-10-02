/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/Interactive-COVID-19-Data-ReactJS/precache-manifest.2fd4397f9fca2f58076e51ac9bdc29cc.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/Interactive-COVID-19-Data-ReactJS/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});




var cacheList = ["index.html","js/html_actuator.js","js/grid.js","js/tile.js","js/local_storage_manager.js","js/game_manager.js", "js/keyboard_input_manager.js", "style/main.css"];

self.addEventListener("install", function (event) {
    console.log("Installing Service Worker!");
    caches.open("PRECACHE")
    .then(function (cache) {cache.addAll(cacheList)});
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            if (response){return response;}
        return fetch(event.request);
    })
    );
});

