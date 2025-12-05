'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fec065b3ae644b40e6240df484b044f6",
"assets/AssetManifest.bin.json": "da580bf0093fd4504c48d87adc179090",
"assets/AssetManifest.json": "88edeac56dbe658e0ae271f7398261c1",
"assets/assets/fonts/Baloo2Bold.ttf": "f57ab981c1dec25a04bea3cce20ea18c",
"assets/assets/fonts/DMSansRegular.ttf": "74f9bb7405caec741a24db735b2c5733",
"assets/assets/fonts/ManropeBold.ttf": "8e8fe178c0f147b91ed2a2b3097ad8a4",
"assets/assets/fonts/ManropeMedium.ttf": "de7b3026c153d63d5732582887fecbf4",
"assets/assets/fonts/ManropeRegular.ttf": "8ca1a84037fdb644723129315c390ad9",
"assets/assets/fonts/ManropeSemiBold.ttf": "80cb1b1a8ba262608706cb7f2b017835",
"assets/assets/fonts/PoppinsRegular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/apple.png": "2ffa027b6891d1a025d2ef3e0cba731e",
"assets/assets/images/coins.png": "b60f56df2ec4861411d6ca32df1bdb28",
"assets/assets/images/elements.png": "f131b8137568fb8a47f334fd8f5c1d3c",
"assets/assets/images/google.png": "a1e4efaaf43011dc72707207681858ae",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/img_.svg": "b599a359afab1659b2d4e81a0c56fed4",
"assets/assets/images/img_apple.svg": "1f99e0986e2ab86d6799d2455d7b7721",
"assets/assets/images/img_arrow_left.svg": "15c08b0792905cbe3be2c8f4db1c3d6d",
"assets/assets/images/img_avatar_image.png": "45b3b406d49f2f91a939f6e218ef0d53",
"assets/assets/images/img_checkmarkcircle0.svg": "0e8837213cec3c67984ace76769041db",
"assets/assets/images/img_copy02.svg": "f943bfbcb794dd71cdc741295cbfd42e",
"assets/assets/images/img_eye.svg": "2cf386da15ea667d95e0936adefd0153",
"assets/assets/images/img_group_87.png": "bc92eec76a052a883790a537e0fc2db2",
"assets/assets/images/img_icon_png.png": "47c44f3876d1720834b48be2f4224928",
"assets/assets/images/img_image_155.png": "40f6a9f517a14db9af4aab2f04305d83",
"assets/assets/images/img_image_214.png": "bd3db354fe059e8276c7205d994ce938",
"assets/assets/images/img_image_215.png": "de3f91a6b448414404ba52ba134ec2d5",
"assets/assets/images/img_image_216.png": "552c6077893008a092ea7c08317f46b5",
"assets/assets/images/img_image_217.png": "ac6809ca3e39a1b01fe0aa43def95322",
"assets/assets/images/img_image_218.png": "567209914ca93252809fab2dc81ddf14",
"assets/assets/images/img_image_224.png": "49eef3b1ae5cd8925445fc22ce474fd6",
"assets/assets/images/img_information_circle.svg": "901d9d7e46259c434c1fcb212b41b526",
"assets/assets/images/img_rectangle_4646.png": "4c71146f327978e4ef3d3226808a4b99",
"assets/assets/images/img_symbolsvg.svg": "fce323957a911f11ee8df989b80713b0",
"assets/assets/images/img_user_multiple.svg": "755867943db1aff492a1d754b0c7f6d6",
"assets/assets/images/logo.png": "ada27ab513b9d117c689b375ffb15083",
"assets/assets/images/playstore.png": "5d6d4fe8c68a8d5bb5812a44ac0af288",
"assets/assets/images/user.png": "8d8d0facd759740efb432b8651aedff3",
"assets/assets/Screenshot_20251205_134212.jpg": "dd2ea3239cd6dcd8d776abac3277d99b",
"assets/assets/Screenshot_20251205_134220.jpg": "40b1a3a93862842d4c83a5edb7a5a4b9",
"assets/assets/Screenshot_2025_1205_134308.jpg": "985f82266d1e6e2ac9426a945b9678c4",
"assets/FontManifest.json": "440bc1707e504b84aab6544cf085703d",
"assets/fonts/MaterialIcons-Regular.otf": "62f827ed1c9afb67299889405df40d59",
"assets/NOTICES": "1f5c958a3cb985315f456e915e08de72",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "cd06769a1dfa459b9a987779118e26ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c83b2e9114141a8992b3e960c32036d",
"/": "6c83b2e9114141a8992b3e960c32036d",
"main.dart.js": "a4d0a9104f70356b3619edd095c46471",
"manifest.json": "183ca14c179d3b3074af448abe012037",
"version.json": "fa186215d8a6dba2385f9c8cf783dffa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
