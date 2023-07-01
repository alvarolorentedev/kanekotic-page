"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1438],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return o?n.createElement(g,a(a({ref:t},s),{},{components:o})):n.createElement(g,a({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5101:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={authors:"kanekotic",title:"Continious Delivery Bootcamp: Test Driven Development",tags:["programming","productivity","devops","development"],description:"Learn how to get things fast into production with good quality",draft:!1,published:new Date("2023-04-24T07:30:00.000Z"),cover_image:"https://raw.githubusercontent.com/kanekotic/kanekotic-page/main/static/img/copy-of-continious.png",canonical_url:"https://www.kanekotic.com/blog/2023/04/13/continious-delivery-bootcamp-test-driven-development",series:"Continuous Delivery Bootcamp"},a="Context",l={permalink:"/blog/2023/04/13/continious-delivery-bootcamp-test-driven-development",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2023-04-13-continious-delivery-bootcamp-test-driven-development.md",source:"@site/blog/2023-04-13-continious-delivery-bootcamp-test-driven-development.md",title:"Continious Delivery Bootcamp: Test Driven Development",description:"Learn how to get things fast into production with good quality",date:"2023-04-13T00:00:00.000Z",formattedDate:"April 13, 2023",tags:[{label:"programming",permalink:"/blog/tags/programming"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"devops",permalink:"/blog/tags/devops"},{label:"development",permalink:"/blog/tags/development"}],readingTime:.495,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{authors:"kanekotic",title:"Continious Delivery Bootcamp: Test Driven Development",tags:["programming","productivity","devops","development"],description:"Learn how to get things fast into production with good quality",draft:!1,published:"2023-04-24T07:30:00.000Z",cover_image:"https://raw.githubusercontent.com/kanekotic/kanekotic-page/main/static/img/copy-of-continious.png",canonical_url:"https://www.kanekotic.com/blog/2023/04/13/continious-delivery-bootcamp-test-driven-development",series:"Continuous Delivery Bootcamp"},prevItem:{title:"Continious Delivery Bootcamp: Intro",permalink:"/blog/2023/04/13/continious-delivery-bootcamp-intro"},nextItem:{title:"Psychological safety in software development",permalink:"/blog/2023/01/26/psycological-safety-in-software-developmente"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to our Continuous Delivery Bootcamp! We'll teach you the skills you need to get your projects out the door fast, without sacrificing quality. By the end of this program, you'll be a pro at transforming code into working software. Sign up today and start transforming your workflow! "),(0,r.kt)("p",null,"This chapter we will do an iteration writing test, doing test driven development not only as a testing tool but also as a design tool."),(0,r.kt)("h1",{id:"video"},"Video"),(0,r.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/MG-Uqve41BQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"{% embed ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/MG-Uqve41BQ"},"https://youtu.be/MG-Uqve41BQ")," %}"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/MG-Uqve41BQ"},"\ufeffWatch the video on Youtube")))}u.isMDXComponent=!0}}]);