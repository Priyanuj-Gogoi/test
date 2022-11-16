"use strict";(self.webpackChunkbdfd_wiki=self.webpackChunkbdfd_wiki||[]).push([[671],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,o(o({ref:e},l),{},{components:r})):n.createElement(g,o({ref:e},l))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:"As of mid 2020, JavaScript script language in BDFD has been deprecated.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/test/intro",draft:!1,editUrl:"https://github.com/priyanuj-gogoi/test/edit/main/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1668568478,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{}},s={},c=[{value:"What is BDFD JavaScript?",id:"what-is-bdfd-javascript",level:2},{value:"Pro&#39;s &amp; Con&#39;s for using this script",id:"pros--cons-for-using-this-script",level:2},{value:"Pro&#39;s",id:"pros",level:3},{value:"Con&#39;s",id:"cons",level:3}],l={toc:c};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"As of mid 2020, JavaScript script language in BDFD has been ",(0,a.kt)("strong",{parentName:"p"},"deprecated"),".\nAlthough, this script is still usable but it's advisable to switch to ",(0,a.kt)("inlineCode",{parentName:"p"},"BDScript 2")," script language instead for developing bots.")),(0,a.kt)("p",null,"Besides using the default script language (i.e ",(0,a.kt)("strong",{parentName:"p"},"BDScript 2"),") to develop Discord bots in the app.\n",(0,a.kt)("strong",{parentName:"p"},"Bot Designer For Discord")," also supports developing bots using ",(0,a.kt)("a",{parentName:"p",href:"https://javascript.com"},"JavaScript"),"."),(0,a.kt)("p",null,"In this page and the following sub-pages, you will learn and explore more about BDFD JavaScript."),(0,a.kt)("h2",{id:"what-is-bdfd-javascript"},"What is BDFD JavaScript?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BDFD JavaScript")," ",(0,a.kt)("em",{parentName:"p"},"(a.k.a \u2018BDJS\u2019)")," is an another script language available in the app which can be used as alternative to BDScript language for developing a Discord bot.\nUnlike BDScript, BDJS executes a JavaScript code.\nIt uses ECMAScript 2015 (ES6) JavaScript version.\nThis script is powered by a JavaScript engine made using ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev"},"Go")," and is not an actual JavaScript."),(0,a.kt)("p",null,"BDJS has limited Discord API functions support available."),(0,a.kt)("h2",{id:"pros--cons-for-using-this-script"},"Pro's & Con's for using this script"),(0,a.kt)("h3",{id:"pros"},"Pro's"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Loops functions support (Unlike, BDScript which doesn't support).")),(0,a.kt)("h3",{id:"cons"},"Con's"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Outdated JavaScript version."),(0,a.kt)("li",{parentName:"ul"},"Limited Discord API functions supports."),(0,a.kt)("li",{parentName:"ul"},"Slash commands are unsupported."),(0,a.kt)("li",{parentName:"ul"},"Limited JavaScript features."),(0,a.kt)("li",{parentName:"ul"},"Not beginner friendly.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"BDFD JavaScript is not recommended to be used by users who aren't familiar with JavaScript language.\nIt's a language which is entirely different from BDScript and without any proper JavaScript knowledge, the user would get confused whether be it in understanding or writing codes.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Want to learn JavaScript and don't know where to start from?"),(0,a.kt)("p",{parentName:"admonition"},"Then, check out the following JavaScript learning resources:\\\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/mdn_javascript_guide-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white",alt:"MDN Web Docs"})),"{'\\n'}\n",(0,a.kt)("a",{parentName:"p",href:"https://javascript.info"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/modern_javascript_tutorial-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",alt:"Modern JavaScript Tutorial"})))))}u.isMDXComponent=!0}}]);