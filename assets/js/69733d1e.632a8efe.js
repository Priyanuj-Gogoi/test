"use strict";(self.webpackChunkbdfd_wiki=self.webpackChunkbdfd_wiki||[]).push([[704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),y=a,m=f["".concat(p,".").concat(y)]||f[y]||u[y]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8062:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Syntax Highlighting",c={type:"mdx",permalink:"/test/syntax",source:"@site/src/pages/syntax.md",title:"Syntax Highlighting",frontMatter:{}},p=[],l={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"syntax-highlighting"},"Syntax Highlighting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bds"},"Text\n[ ] ;\n$authorID\n$author[Text;1]\n$authorURL[https://botdesignerdiscord.com]\n$c[Comment]\n%{-SEMICOL-}% \\\\ \\;\n+ - * /\ntrue false yes no\n> < != == >=\n$var $setUserVar $getUserVar\n$if $async $try\n$sendNotification\n\n$if[$var[a]>=100]\n      $sendMessage[hi\\]]\n      $roleGrant[$authorID;+$roleID[a]]\n$endif\n\n$calculate[(1+2+3+4+5)/25]\n\n$httpGet[https://wtfismyip.com]\n$httpPost\n$httpGetHeader\n$httpAddHeader\n$httpPut\n$httpPatch\n$httpDelete\n$httpResult\n$httpStatus\n")))}s.isMDXComponent=!0}}]);