(()=>{"use strict";var e,t,r,o,a,d={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=d,f.c=n,e=[],f.O=(t,r,o,a)=>{if(!r){var d=1/0;for(b=0;b<e.length;b++){r=e[b][0],o=e[b][1],a=e[b][2];for(var n=!0,c=0;c<r.length;c++)(!1&a||d>=a)&&Object.keys(f.O).every((e=>f.O[e](r[c])))?r.splice(c--,1):(n=!1,a<d&&(d=a));if(n){e.splice(b--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var b=e.length;b>0&&e[b-1][2]>a;b--)e[b]=e[b-1];e[b]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var d={};t=t||[null,r({}),r([]),r(r)];for(var n=2&o&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,f.d(a,d),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",88:"56d75774",195:"c4f5d8e4",286:"78b12fb4",303:"4ecdf7b9",324:"bed81b2e",352:"3ded3232",514:"1be78505",561:"8eb67473",671:"0e384e19",687:"b934c8b7",704:"69733d1e",716:"095f8bbc",759:"4d48c635",817:"14eb3368",826:"2b971b3e",908:"1c87a371",918:"17896441",985:"dad38c16",990:"75878fc8"}[e]||e)+"."+{53:"f46db927",85:"b39990fd",88:"e3cf6ab3",195:"3d811a1e",286:"b9b55167",303:"2f54acd7",324:"80ebdb86",352:"fea9b395",514:"f92ec9d5",561:"a0c1f60b",666:"dd0be4e8",671:"7bd95d59",687:"aaa7285f",704:"d3c25c18",716:"c5933d87",759:"c977bf29",817:"ab00d7ea",826:"887fd4c4",908:"f58a295e",918:"e2773cdc",972:"c1c09f76",985:"33c4f824",990:"66fa7e59"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="bdfd-wiki:",f.l=(e,t,r,d)=>{if(o[e])o[e].push(t);else{var n,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){n=u;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",a+r),n.src=e),o[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),c&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/test/",f.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","56d75774":"88",c4f5d8e4:"195","78b12fb4":"286","4ecdf7b9":"303",bed81b2e:"324","3ded3232":"352","1be78505":"514","8eb67473":"561","0e384e19":"671",b934c8b7:"687","69733d1e":"704","095f8bbc":"716","4d48c635":"759","14eb3368":"817","2b971b3e":"826","1c87a371":"908",dad38c16:"985","75878fc8":"990"}[e]||e,f.p+f.u(e)},(()=>{var e={552:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^5[35]2$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var d=f.p+f.u(t),n=new Error;f.l(d,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+a+": "+d+")",n.name="ChunkLoadError",n.type=a,n.request=d,o[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,d=r[0],n=r[1],c=r[2],i=0;if(d.some((t=>0!==e[t]))){for(o in n)f.o(n,o)&&(f.m[o]=n[o]);if(c)var b=c(f)}for(t&&t(r);i<d.length;i++)a=d[i],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(b)},r=self.webpackChunkbdfd_wiki=self.webpackChunkbdfd_wiki||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();