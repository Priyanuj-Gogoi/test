"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(g,i(i({ref:t},l),{},{components:r})):a.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:0},i="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:"As of mid 2020, BDJS script language has been deprecated.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/test/docs/intro",draft:!1,editUrl:"https://github.com/priyanuj-gogoi/test/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"javascript",next:{title:"Objects",permalink:"/test/docs/javascript/objects"}},s={},c=[{value:"What is BDFD JavaScript?",id:"what-is-bdfd-javascript",level:2}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"As of mid 2020, BDJS script language has been ",(0,n.kt)("strong",{parentName:"p"},"deprecated"),".")),(0,n.kt)("p",null,"Besides using the default script language (i.e ",(0,n.kt)("strong",{parentName:"p"},"BDScript 2"),") to develop Discord bots in the app. ",(0,n.kt)("strong",{parentName:"p"},"Bot Designer For Discord")," also supports developing bots using ",(0,n.kt)("a",{parentName:"p",href:"https://javascript.com"},"JavaScript"),"."),(0,n.kt)("p",null,"In this page and the following sub-pages, you will learn and explore more about BDFD JavaScript."),(0,n.kt)("h2",{id:"what-is-bdfd-javascript"},"What is BDFD JavaScript?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"BDFD JavaScript")," ",(0,n.kt)("em",{parentName:"p"},"(also referred as BDJS)")," is an another script language available in the app which can be used as alternative to BDScript for developing a Discord bot. Unlike BDScript, BDJS executes a JavaScript code. It uses ECMAScript 2015 (ES6) JavaScript version. This script is powered by a JS engine made using ",(0,n.kt)("a",{parentName:"p",href:"https://go.dev"},"Go")," and is not an actual JavaScript."),(0,n.kt)("p",null,"BDJS has limited Discord API functions support available."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"BDFD JavaScript is not recommended to be used by users who aren't familiar with JavaScript language. It's a language which is entirely different from BDScript and without any proper JS knowledge, the user would get confused whether be it in understanding or writing codes.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Want to learn JavaScript and don't know where to get started?"),(0,n.kt)("p",{parentName:"admonition"},"Then, check out the following JavaScript learning resources:\n",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/mdn_javascript_guide-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white",alt:"MDN Web Docs"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://javascript.info"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/modern_javascript_tutorial-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",alt:"Modern JavaScript Tutorial"})))))}d.isMDXComponent=!0}}]);