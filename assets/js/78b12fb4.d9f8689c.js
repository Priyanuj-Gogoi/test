"use strict";(self.webpackChunkbdfd_wiki=self.webpackChunkbdfd_wiki||[]).push([[286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="ban",s={unversionedId:"javascript/functions/ban",id:"javascript/functions/ban",title:"ban",description:"Bans an user from the current guild.",source:"@site/docs/javascript/functions/ban.md",sourceDirName:"javascript/functions",slug:"/javascript/functions/ban",permalink:"/test/javascript/functions/ban",draft:!1,editUrl:"https://github.com/priyanuj-gogoi/test/edit/main/docs/javascript/functions/ban.md",tags:[],version:"current",lastUpdatedBy:"Priyanuj Gogoi",lastUpdatedAt:1668412079,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{},sidebar:"javascript",previous:{title:"Functions",permalink:"/test/category/functions-1"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Example",id:"example",level:2},{value:"Code",id:"code",level:3},{value:"Preview",id:"preview",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ban"},"ban"),(0,a.kt)("p",null,"Bans an user from the current guild."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ban(userID)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userID")," : The user to ban. Value must be a valid user snowflake ID.")),(0,a.kt)("h2",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"Required permission which the bot must have for this function to work properly."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ban"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="!ban"',title:'"!ban"'},"try {\n  const msg = message.replace(commandPrefix, '').trim();\n\n  if (!msg) {\n    setResponse(`Usage : \\` ${commandPrefix} [@user] \\``);\n  } else {\n    const mention = /^<@!?(\\d{17,20})>/.test(msg);\n\n    if (!mention || !userMentions[0])\n      throw new Error('Mention an user!');\n\n    if (userMentions[0] === authorId)\n      throw new Error('You can\\'t ban yourself!');\n\n    sendChannelMessage(channelId, `*<@${authorId}> bans <@${userMentions[0]}>!!*`);\n\n    ban(userMentions[0]);\n  };\n} catch (err) {\n  setResponse('Command Error : ` ' + err.message + ' `');\n};\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Explain me!"),(0,a.kt)("div",null,(0,a.kt)("div",null,"No"))),(0,a.kt)("h3",{id:"preview"},"Preview"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/95774950/190855774-b530f41a-df82-4eb7-a333-f52d613d6327.png",alt:"Screenshot_20220917_165612"}),"\\\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/95774950/190855782-1aa5bf81-06d0-409d-bc06-2cf4aaecc1fb.jpg",alt:"InShot_20220917_172017419"})))}p.isMDXComponent=!0}}]);