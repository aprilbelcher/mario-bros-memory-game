"use strict";var precacheConfig=[["/mario-bros-memory-game/index.html","8932c4483c7c7210f8ef76ba89ba3973"],["/mario-bros-memory-game/static/js/main.3656923a.js","16bd33af963595015735792427fd29ce"],["/mario-bros-memory-game/static/media/mario1.af59d3d0.png","af59d3d0c372218a3ced5407fcec2a06"],["/mario-bros-memory-game/static/media/mario10.042737e5.png","042737e5e41aa3242b843a540689e21e"],["/mario-bros-memory-game/static/media/mario11.e9415ec7.png","e9415ec7f4254cc0169ea67a04e9a975"],["/mario-bros-memory-game/static/media/mario12.afbf6c5e.png","afbf6c5edc732ecc823bdcae1c08c90d"],["/mario-bros-memory-game/static/media/mario13.54728884.png","54728884e63b7c2b448485bc8aa6364f"],["/mario-bros-memory-game/static/media/mario14.888c10d7.png","888c10d75770f3cf5ec4c7486a9c1eca"],["/mario-bros-memory-game/static/media/mario15.2ceb5715.png","2ceb571584255a81f14fc92174afe9b4"],["/mario-bros-memory-game/static/media/mario16.e5619825.png","e56198259849ddcfe4bf6fd798cbbf6a"],["/mario-bros-memory-game/static/media/mario2.b485087c.png","b485087cff5c09043bf4f22a5c407f06"],["/mario-bros-memory-game/static/media/mario3.012d71d6.png","012d71d6f827d6b83b451d406225b4fa"],["/mario-bros-memory-game/static/media/mario4.a1a0f867.png","a1a0f8675f35c5e21deee1cf9df7bd71"],["/mario-bros-memory-game/static/media/mario5.50b6ddbf.png","50b6ddbf07843d9efc0fa71a63fabe09"],["/mario-bros-memory-game/static/media/mario6.4f4f912d.png","4f4f912d1cd59d0a2d97d4620bf67e31"],["/mario-bros-memory-game/static/media/mario7.9c206ae4.png","9c206ae4608f0b4e1ecda893e3cb87e0"],["/mario-bros-memory-game/static/media/mario8.69f58cf1.png","69f58cf1dfa71737f06e7a094cab9018"],["/mario-bros-memory-game/static/media/mario9.56e175ee.png","56e175eec75b0932d55eb84a6eec0235"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=a),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,r,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var r=new URL(a).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,a){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],r=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,r,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!a.has(r)){var t=new Request(r,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+r+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(r,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!a.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,t),a=urlsToCacheKeys.has(r));var n="/mario-bros-memory-game/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(r)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});