'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"version.json": "009c9e65172e010890f7f65fde438006",
"gifs/slam.gif": "590073e63dd3e6b360568ff1206da9cb",
"gifs/it-can-wait-texting.gif": "baf16cc754ac6aa64f56304f3133bc80",
"gifs/safety_periscope2_whatweknow3.gif": "9b786375a3caca7e37d1175bb7c90c04",
"gifs/10.1007@978-1-4471-4150-1.pdf": "2f4734a3b8b08919b62c1d8c7978bc9e",
"gifs/vtlogo.png": "d39184345323fb946c0a728dc59b46bb",
"gifs/UAC2013OMi-ChangeDetectionUsingSASImagerywithVariableTimeIntervals.pdf": "cb8fc6328ef95733f0994ec1e3a21576",
"index.html": "05d45b6c09caf2c8b35f1c90cd7aca41",
"/": "05d45b6c09caf2c8b35f1c90cd7aca41",
"assets/NOTICES": "129719132867d18f50d22239c1bbd4d4",
"assets/AssetManifest.bin": "b32628ea23ee08b5579355ef035ef155",
"assets/AssetManifest.json": "4fed8fa515e138adcca903e9abe50000",
"assets/assets/stopline.gif": "cc55e388b01949e9e476f3873cd0881a",
"assets/assets/slam.gif": "590073e63dd3e6b360568ff1206da9cb",
"assets/assets/navigation_1.gif": "a588991a4086cd4c22a69e64a48461c6",
"assets/assets/demo.gif": "a46c68fe3868d3b676cfb24782344110",
"assets/fonts/MaterialIcons-Regular.otf": "b240aa0b28efaf0fe46bec9bb4d432f1",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "429f4878395a78daa21abc07b2954fd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "74d1e5df3136a7007626fc22862c5e70",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/refs/remotes/origin/main": "0574ddba6bfdf6f4108497493b6b8021",
".git/refs/heads/main": "0574ddba6bfdf6f4108497493b6b8021",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/55/9e2e1afb09e64173b75051278c4bf48f9a75e7": "063a41baa88bb46bdc788a9b0e72d0ee",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/c1/bf40855836147b5670b3ae94d88fef421609a1": "7bad46f5f378417e605aeb45c9dc7f04",
".git/objects/77/ccae48d507f730123b33615df2e40121ca6048": "37cd5e35b1b011db7db252ec84c83fa1",
".git/objects/77/64a0ae26e139c702b99b40a56581c85d141609": "05a457533ca8c21d7653e70d9a82c915",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/7c/7e9998f5cfa0bf5f334b3976a6846c4c06c5be": "bad35b1e82bb26cc036e6310c656936d",
".git/objects/2e/9a8409af743f11b1e7071ba39b30bae4faa152": "e4d99cea529d0294fbdec8603ed29ae6",
".git/objects/84/eb4ee03a7bc56f8ce410a91984dd8e831b8f26": "7eba3987f62ccf89f0f92952edc71523",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b2/f581f8b22472318fa9f4edd63c96a5a8cd33ad": "962360508eeb51785feb39d9ee84451d",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/24/8c68ee06525205ccc1ada93bccdea7a8ee0402": "b89737dd1a3f514195f501a8195b98a7",
".git/objects/24/fb83411c43de35483f57154067e2513109cea5": "824cb04396cf29a135762910d50c0690",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e4/d499291c1b09d8e6ac7853e16ac42ce6697664": "0defc098768f286378ea393b13ba3c4b",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/97/82317dfa35c85f9b23ee8005cea91d40abd4e1": "9e24f97da9f44534398285ceb4b1ebef",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/b1/0b58e86b9b7ac445a06a1ad7a4064ff66fc95f": "d65b6c25ebee0d66ba5ff9b038b346b3",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/f6/f5897e4caf4b80a7a5fc19443b0d0682a42a17": "2e916f2383c900d33a3a210b37f11abf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c9/37877a4e76dc168ed33814ddc79881d38be30d": "65397d5d021724feadc7ebec5f2590f0",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/f0/b074a630437f77ca8d1a54a80382906b71cb14": "a6ca5d595cd8500cd98eac6f5f4d7b7a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/ba/4bf076df3da140826ef13c7ff45b70f4638e3e": "0e21f721cb9baf956570f7c5c600d755",
".git/objects/ca/1804539d067dbb1e2983731a3fc2e8237ded9a": "825fee3912990913258f58f9aeb4b182",
".git/objects/0c/18e4d47b32eabf4d9462b3a0b03b2109510e06": "9ef8934b5af4c1e0e624d80bbec88659",
".git/objects/3f/c06084f9397da0d2e9eff55dec64d959c9fd03": "bc6197ce99e7b572a40a23b701a737c3",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/56/fbe3f2cf96f6c981564ff91f5e938d5f49a84d": "890683c0a12771b5be10b9e0d836553b",
".git/objects/6f/000ab1c214c326294728329ee58e7eee372c50": "1f4f5995f2437375cbe6a37de1c1bc6d",
".git/objects/13/9f41ab844f80beabaed95b917e0f8186c1bf24": "5bee8cb1b0c666ce64568f8e43eccc2e",
".git/objects/91/b67ac5467d68cab19213b3a9f2ca8aa2898311": "ba6176562ac3f1b014fc487b50dd02bf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/af/3e56fb230d0b6a8510665f5606ec6555f3e6b0": "74db1157844a6110da16e48dbc15d909",
".git/objects/9d/bec4943cfa46bd55d24762ae925954b3647b10": "bd5261ad77f79a8cc4060d496dfa5e4a",
".git/objects/c0/4c0b3a2b998111299095ee9451227b05aaa45f": "33a292758f6c7bda49c0194ef6406c57",
".git/objects/5c/87f51bf7f62509d3ec4a49714bbc22f35129f1": "f2148f823b536a29ac67e94f314dd897",
".git/objects/cf/ea1109f6a43fcc8ec8f5c9ae513b682950bb59": "99a30d8ff6663c19172c53b0c6cd57ca",
".git/objects/61/cf6e221b0844c1bd06bbd831c888708a219077": "07f6b46995e1c77ecde8fbb4f69783be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/7e/5159ff031089529ff630cd8b7a09b82dd4245e": "12c8b69dc596ec4db3e7016f6534b556",
".git/objects/4e/e7a3e818ae408afd2581001c77a24cf5828d50": "9862208c5bd5e205506641d4503313ec",
".git/objects/9b/2c1d8146706ced68d49ce3ea6a754b38855dd8": "e4ef41cb748c0c568c7004e251431c07",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/64/24e46745bdd65296fb7dadf4823114bbca82f7": "135b367f48410aff358d0b1bd9f11413",
".git/config": "91ec48dd53b25b5a52df34ae8e128828",
".git/index": "b5a4d379b88a2e2e53ba8bc2f189cf35",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "42daea43f74c394ebcb947176296b288",
".git/logs/refs/heads/main": "7b72f18c0f8f59ea0990487d4fd54c06",
".git/logs/HEAD": "d520028f821058d1b720782b1b055ae6",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "0fde26d7f02e0a4241bef06ec7bb88ae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
