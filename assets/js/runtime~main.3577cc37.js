(()=>{"use strict";var e,t,r,o,a,n={},f={};function i(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return n[e].call(r.exports,r,r.exports,i),r.exports}i.m=n,e=[],i.O=(t,r,o,a)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var f=!0,b=0;b<r.length;b++)(!1&a||n>=a)&&Object.keys(i.O).every((e=>i.O[e](r[b])))?r.splice(b--,1):(f=!1,a<n&&(n=a));if(f){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(a,n),a},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",88:"56d75774",195:"c4f5d8e4",286:"78b12fb4",303:"4ecdf7b9",324:"bed81b2e",352:"3ded3232",514:"1be78505",561:"8eb67473",671:"0e384e19",687:"b934c8b7",704:"69733d1e",716:"095f8bbc",759:"4d48c635",817:"14eb3368",826:"2b971b3e",908:"1c87a371",918:"17896441",985:"dad38c16",990:"75878fc8"}[e]||e)+"."+{53:"f46db927",85:"b39990fd",88:"e3cf6ab3",195:"3d811a1e",204:"d359c4b6",286:"a9519512",303:"9765ca8e",324:"59a206a2",352:"9384ee05",514:"66cfd15a",561:"a0c1f60b",666:"dd0be4e8",671:"10b8a8b6",687:"52b9be0d",704:"1332445a",716:"404d6b17",759:"c977bf29",817:"ab00d7ea",826:"66d2d028",908:"c90663b7",918:"e2773cdc",985:"33c4f824",990:"155f1ca1"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="bdfd-wiki:",i.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var f,b;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){f=u;break}}f||(b=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",a+r),f.src=e),o[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),b&&document.head.appendChild(f)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/test/",i.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","56d75774":"88",c4f5d8e4:"195","78b12fb4":"286","4ecdf7b9":"303",bed81b2e:"324","3ded3232":"352","1be78505":"514","8eb67473":"561","0e384e19":"671",b934c8b7:"687","69733d1e":"704","095f8bbc":"716","4d48c635":"759","14eb3368":"817","2b971b3e":"826","1c87a371":"908",dad38c16:"985","75878fc8":"990"}[e]||e,i.p+i.u(e)},(()=>{var e={552:0,532:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^5[35]2$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=i.p+i.u(t),f=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,o[1](f)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],f=r[1],b=r[2],c=0;if(n.some((t=>0!==e[t]))){for(o in f)i.o(f,o)&&(i.m[o]=f[o]);if(b)var d=b(i)}for(t&&t(r);c<n.length;c++)a=n[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},r=self.webpackChunkbdfd_wiki=self.webpackChunkbdfd_wiki||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();