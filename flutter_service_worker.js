'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "052eb9ae071220c56c8b712187d1a9a5",
".git/config": "657a2ba5a1534be05f906cea5be2fbba",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8bbe286c7179191d404e287f87a4e04c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "54aaec829f3f9016b299a5fbe5d26bbc",
".git/logs/refs/heads/gh-pages": "6a9e3d56d0371ddb98d364f42f2428c7",
".git/logs/refs/remotes/origin/gh-pages": "6fe4be38126fffb69f57fa9a788a9d4c",
".git/objects/12/672f9714a6fe3607d048474804b0044a00d4e9": "19f1cdfa8ac96425bee81c6b1613f71b",
".git/objects/16/daa61acc7432876e705f073b0a15733787e2e1": "03a4005067e888f73ed375a5939b967a",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/a8591d23e3eabf1d52a47682e870df4babe5ca": "6333239454eb81fd3965b0a68e41993e",
".git/objects/1f/c7262134bc7722521428706c55f3f2ddd77409": "1404505f8ad7615c79a284a7af1202c8",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/22/9fa5bd93e0b6f5e69b9348bbee4b086542ce00": "2445e8498be99363eed7cdfab0d17e3f",
".git/objects/2f/8d4fadd45cf4ed66bf955f00cc09ec9b65cfa6": "b24d1d845736f8da80c8527494f60a2d",
".git/objects/30/216e45bd35d8c3a91585b0ae4e7d6676284ba3": "f8f3840fcd378e6c4f8b1710816a9fe2",
".git/objects/33/54296b2297b2b1baa60bb4992487be2b324f55": "6f916855f5149fa215d29800b80d0c47",
".git/objects/35/b9575723b39bc3271d3bc1eb7dcd4ecd82ec16": "67aeb8ef2bc6ae501c9db52627a48ccb",
".git/objects/37/629801283a840bc698acec4622c03f48f5162f": "dc47d0f74f13fcc514aed9f009d4c6ea",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/72df6cd21eb788aadb4be41bef16a44daa9c6a": "c726f2a2268debd54eed4c2f8765c76c",
".git/objects/3a/8bd6a97dea34ed067f24cd5ee0183d3cf3d939": "34747225741d3f2f8c42007454a5c5fe",
".git/objects/3f/5a52884d27fb8dedddc9a15ba31d1fdcacce36": "4c05ca68dd7d77fd69016c7ea49754ab",
".git/objects/42/dd3d32ab5ef360191534023c74417f3ac2eb2a": "196d3ec00228e4edb9d161ef1487f78e",
".git/objects/48/596e3c1db67964d8e5429f3a2135d9e4e7a9fb": "0e5fa8db4219062066e3375893c0cebe",
".git/objects/48/c13e5d832b67dab8ff41dd3000a62b388f01c3": "b557c53ee69b32ed2dd091cb5f505c0f",
".git/objects/4b/0dca8d85ed7fc1d36ad4997ec1a6c35aed0f44": "d979f49db3b4cfe37dca0866d07f6825",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/52/9b2adf6b4398cdd2c99cbf5236420837812e53": "f9be338cc617fd30640757ce0e9db888",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/b058ad034a9a2aa35cdfeb8a79fafc2e0fea01": "bebd8ef7161fad3b83cd382ce420966d",
".git/objects/56/053b2ce94726b213e663b9d2e02cc1298bf40b": "2417679ebd891fe59382ee52ac9ef0cb",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/15da9213927b203937aca8b599655d78f29320": "1904b570d3e651dbbd6732e176a1e486",
".git/objects/62/29151b65827a93ed493f747bad15581312d937": "e9548143f3efbe43ffb48a969e6bdb61",
".git/objects/68/a4cedceeb6545dd9e2cdf7125d0059c15c7195": "97da1883deec6e6b6ecd87067f69dbc3",
".git/objects/6c/310af0c2afc5683f08448c23f9773472a755b1": "0a7bad0ee7d812d171511107f9082a33",
".git/objects/6c/8ee7e607e981385e3d8c0be31664fa08f318c2": "4366e8d653f5ad0714dd57b6ce7d4d19",
".git/objects/6c/a6b0663ae5bf3c4ca0943f2bc426aee8428976": "a48fff99787509eb33edc7e2278b753e",
".git/objects/6f/e05ca106cdb957a73732b78f8e88453e5015a9": "f3b9d03510602eb5c0e70627fe1b7974",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/a7fcead680e4dba93c8fe86c76827048a2c27a": "13851f9d908f8e5268eea6a81fca95d5",
".git/objects/7b/32fd008d2699dc6e01cc3c2ca0b1383d417838": "e36d6e78569cd3a88d114754fc08b32e",
".git/objects/7d/66d10c2facbb2e870fd015d52244fb8f1c7c15": "4d5accd7d24d7a5a9fabfc9a8bd15a23",
".git/objects/81/127473b805b6b5e7acfe06d966a6176145ba96": "6c84d633e0c51022c5a66f353b345d84",
".git/objects/83/fefb298091c1ff53692bffb1347bd9a876af22": "11a1bd0104e1da635c3d893f9331394c",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/44553872e6b2b35785d4b9bec41b21114b3367": "ce90bd32f2b3f1d87c30e5d92814d0a0",
".git/objects/97/e5e695104ffecfb0b656d68f6d8fc3e51d138c": "fc6c702752b6be17cccca50759acb78e",
".git/objects/98/2b4f1dac693d7e5bc3436b1be1526e22f4963d": "501b23b73a02232c50aada0eb5887d2e",
".git/objects/99/1d0c4d1cd0615e6cf0a3df442483927a9bb78d": "f6666fff8edea5e4953097cffd709100",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/3a8035ee6dd52db2df6878009140fc593fc2dd": "391a32292f4d3d1ff42fe4bbc74cbad7",
".git/objects/a4/37437379696c40d73a7957b2ab35d4969f64bb": "884f57eed90cb777a3cf27f84e12524b",
".git/objects/ae/21266ae0ad1aec80196b559ddec86c6da4179f": "a45a2eeaed02211e14f9d0c3f914c8fa",
".git/objects/b2/3204950f8691465ec3a0423f4d0a9decd9f349": "32cf5fa569fe7661492842fb40e9a484",
".git/objects/b4/03a20c47bb9ef6ff972ac3a7993c226d10505d": "6ec3c44ddde41f8e74e1e198626c9371",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/0cb65feabecdab72612e1ef89b942c16bd4a4d": "9c5d32eb510f3cf20350faa5a44bb290",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/5a5c29c56d608528c9744f47821a2f59206e06": "05e25b64703902a0f753f201e662cada",
".git/objects/d1/6d6b4aacb66735a48cd1336628780343cfec4a": "b5a7a0ae793f68060d05e49298a291fd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/e7da779a23d69b479647a3cfbdb89222833326": "777c151e3d8413b54a243a171866ea06",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/23969c3604997cc3e7ea21c236c8cdafef13e1": "24330acaf87db66fae668855bf3fef04",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/7bb5ab71172a7096ae8db0ed05425132001a2c": "f489862f110e1b12300307cd76cf6044",
".git/objects/e2/ce060516004a552d12b043f1986da144c4fcd4": "c0d592da20e42ee6100ee1db5f417a85",
".git/objects/e6/f13761a41b1f8cf5d0a06050a01d5c8c4efe1d": "dc0008d6812d944c8caa8e6c0ef6ec6d",
".git/objects/e9/a78c594547c24407e0a0b08cb517412f1ea07d": "d17dca6eadafdb40b25fdabb0f39fadc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b7f5f20a133e35e969a7be3183de2197ad5dab": "ca71bc8abfa20ae86f1ae731a83b9925",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/b5e3b510ea9f039e686374b6a95a3a4a9198ca": "fdd87f46743e0e3cb989332fc60b9b0f",
".git/objects/f4/dd417784d6e21acf747ad8378dc38c31ee7abd": "596d3a43b032dd49afa493d774e95d1a",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f8/f1345a8e0ae7a3460a51549abbe1263c2ffb79": "b5228fc79342bec0378eddbc0e511457",
".git/objects/f9/4d4377e638027c2d6755aa58e17a7377a76ab1": "7dfb199704a1ec1cd1f50e2ade91cdc7",
".git/objects/fd/69a50da1b261d521a6bc0aae8f97ba181ebaa2": "ac34de177c2a15d2a4fce785657ce26b",
".git/ORIG_HEAD": "acb6232cff57d4a4d110f4018cd44644",
".git/refs/heads/gh-pages": "cdc6532f87ffd317146f14327e52a15a",
".git/refs/remotes/origin/gh-pages": "cdc6532f87ffd317146f14327e52a15a",
"assets/AssetManifest.bin": "c26b6d43cae29261168fec1d9b1eca1b",
"assets/AssetManifest.bin.json": "22833ec0451ebbf1b518130c3cc3b952",
"assets/AssetManifest.json": "18026d69bfec4d08497bd9dcab1893c0",
"assets/assets/logo.png": "09bdbbef35cd6c1e963309a9bfac238e",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "109f9b84963e2373234cdc50bbc4c545",
"assets/NOTICES": "37954291f021c6f00b37c39ef24e2ac8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a53baa14911df76a48506ba22ea66b91",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "abac7ec7d53b09df6101a55508dae86a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e58bf2f4d5b192d2913c1d285d8b685",
"/": "3e58bf2f4d5b192d2913c1d285d8b685",
"main.dart.js": "3e33af7a2d2cc9a9f7ba2571f0c45f66",
"manifest.json": "5b98346184b37fcc2c15c4f21cb3b97a",
"version.json": "0c8a2562a421b7bfba7b9ba568371248"};
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
