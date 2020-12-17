'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".vs/slnx.sqlite": "319233373b554c755428ba2721ed3e08",
".vs/VSWorkspaceState.json": "c5d8964c7f5288c0be2b2463a8eccc7a",
"assets/asset/add%2520konsumen.png": "ca321fa6f2d9bd01a42a049d9c8ab122",
"assets/asset/calculator-off.png": "87a11a5458ec5808a4a0194559cdab36",
"assets/asset/calculator-on.png": "b9e10af6528aa1146dab4c4c833bed6c",
"assets/asset/calender.png": "f91611b1e3387c4025b28fce72fb8120",
"assets/asset/ceklist.png": "c8e0e70d25f3b75b2b77ecbafdfeac2f",
"assets/asset/dropright.png": "3b347a1417106a9462bc43a0bf98bae0",
"assets/asset/edit.png": "69028366d4a92d72573ae183aae2290d",
"assets/asset/grid.png": "49a88b863c5d4ee2f505c38b645bd3f0",
"assets/asset/icon%2520add.png": "f58e5cddb2122a287aa6983ea393b1ea",
"assets/asset/Icon%2520Barcode.png": "1fde5221069d9219a62f25df257cddf0",
"assets/asset/Icon%2520grid.png": "49a88b863c5d4ee2f505c38b645bd3f0",
"assets/asset/Icon%2520list.png": "b15ec76003065bf09cbf50681eaa7f2d",
"assets/asset/Jurnal.png": "685894707c36560c66d31bf1ad58eced",
"assets/asset/Kasir.png": "243fa85299d0f45dfdbe58f2b931f02c",
"assets/asset/kaskasir-off.png": "90cd9d82a504a0e7dc64b754f3de46c7",
"assets/asset/kaskasir-on.png": "c22b0481a5aebb79d105ccb18cbda941",
"assets/asset/Kategori.png": "546268804eaecbb4050c7f130c09894b",
"assets/asset/Kelola.png": "aac71eb7222e6ddf27b83d1dbe510c1a",
"assets/asset/Keluar.png": "58c4e1ccb56907ceb5b0d19749f787b7",
"assets/asset/Konsumen.png": "9b9ead9d47508e29ac114b7dcddf801d",
"assets/asset/list-off.png": "984fd2656178a2c84f460fb9c1e15eea",
"assets/asset/list-on.png": "393ff1de9b823b2bdfa63492492e8a14",
"assets/asset/LoginPage.png": "683309cd9d019c016d55dee51827bbb8",
"assets/asset/logo%2520tokosegar.png": "59783ad94bb3dc6e1c83f6ef43892c2d",
"assets/asset/minus.png": "40dc1c0c7c788188ffb2d7ce600a28f8",
"assets/asset/noproduct.png": "4152fa9a1749d8f05ea58a0d2af7ff44",
"assets/asset/Pegawai.png": "7937cd39d8dc0950700eb5d0708c2d4c",
"assets/asset/pengeluaranbaru.png": "f9e9b088cb2c659120eba0562e070360",
"assets/asset/recycle-bin.png": "cef681be68a74dc35dd2eeea25519fdc",
"assets/asset/Report.png": "524d50857ee08c2ad4fd06c872546447",
"assets/asset/return.png": "9271c208df7ca68fe56cf4eeeefc7d79",
"assets/asset/Riwayat%2520Transaksi.png": "82ba45bf24a99fe6ea3d312913b22323",
"assets/asset/riwayat.png": "a0bb1c6440845f918cd82bbe0d950d52",
"assets/asset/Setting.png": "19d6369ad490a305c2247cc7b4b3caea",
"assets/asset/Stock.png": "c276a04631a09d238a7625a433a22198",
"assets/asset/tambah.png": "ccb20164b30a84b29a267f10b026052e",
"assets/asset/unduhlaporan.png": "c04e4835cbad2a417976fed4354a1052",
"assets/AssetManifest.json": "4298e10aada9117c3fcbe52fec1cbca5",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "6c130e2f73263fa45b84ee3ed7dc0ff1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "82c968ef008aee78f079ce31137df638",
"icons/favicon.png": "82c968ef008aee78f079ce31137df638",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "82c968ef008aee78f079ce31137df638",
"index.html": "ee5829b95d4ad3f3c1f9c4053357e13d",
"/": "ee5829b95d4ad3f3c1f9c4053357e13d",
"main.dart.js": "22455c8238344aebd16af2f13c64f8ae",
"manifest.json": "ed6e603141bbd985706113c21af621da",
"version.json": "8fbc2930f9fc20cd9be90aea11577727"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
