"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5885],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>g});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=p(o),g=r,d=m["".concat(l,".").concat(g)]||m[g]||s[g]||i;return o?n.createElement(d,a(a({ref:e},u),{},{components:o})):n.createElement(d,a({ref:e},u))}));function g(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,a=new Array(i);a[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8574:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={authors:"kanekotic",title:"Continious Delivery Bootcamp: Continuous Integration",tags:["programming","productivity","devops","development"],description:"Learn how to get things fast into production with good quality",draft:!1,published:new Date("2023-04-25T07:24:00.000Z"),cover_image:"https://raw.githubusercontent.com/kanekotic/kanekotic-page/main/static/img/continious-integration.png",canonical_url:"https://www.kanekotic.com/blog/2023/04/24/continious-delivery-bootcamp-continuous-integration",series:"Continuous Delivery Bootcamp"},a="Context",c={permalink:"/blog/2023/04/24/continious-delivery-bootcamp-continuous-integration",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2023-04-24-continious-delivery-bootcamp-continuous-integration.md",source:"@site/blog/2023-04-24-continious-delivery-bootcamp-continuous-integration.md",title:"Continious Delivery Bootcamp: Continuous Integration",description:"Learn how to get things fast into production with good quality",date:"2023-04-24T00:00:00.000Z",formattedDate:"April 24, 2023",tags:[{label:"programming",permalink:"/blog/tags/programming"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"devops",permalink:"/blog/tags/devops"},{label:"development",permalink:"/blog/tags/development"}],readingTime:.46,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{authors:"kanekotic",title:"Continious Delivery Bootcamp: Continuous Integration",tags:["programming","productivity","devops","development"],description:"Learn how to get things fast into production with good quality",draft:!1,published:"2023-04-25T07:24:00.000Z",cover_image:"https://raw.githubusercontent.com/kanekotic/kanekotic-page/main/static/img/continious-integration.png",canonical_url:"https://www.kanekotic.com/blog/2023/04/24/continious-delivery-bootcamp-continuous-integration",series:"Continuous Delivery Bootcamp"},prevItem:{title:"Replace Docker Desktop with Podman in OSX",permalink:"/blog/2023/06/30/replacement-docker-desktop-with-podman-in-osx"},nextItem:{title:"Functional Programming With Kotlin Bootcamp - Initialize the Project",permalink:"/blog/2023/04/24/functional-programming-with-kotlin-bootcamp-initialize-the-project"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to our Continuous Delivery Bootcamp! We'll teach you the skills you need to get your projects out the door fast, without sacrificing quality. By the end of this program, you'll be a pro at transforming code into working software. Sign up today and start transforming your workflow! "),(0,r.kt)("p",null,"This chapter we will do an example on how to build and validate our project in github actions."),(0,r.kt)("h1",{id:"video"},"Video"),(0,r.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/QMwXxezykHc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"{% embed ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/QMwXxezykHc"},"https://youtu.be/QMwXxezykHc")," %}"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/QMwXxezykHc"},"\ufeffWatch the video on Youtube")))}s.isMDXComponent=!0}}]);