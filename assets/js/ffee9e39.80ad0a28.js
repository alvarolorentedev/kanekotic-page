"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Double-edge Microservices: APIs the New Singleton",description:"In the current world of development we solve all with APIs, is it becoming an overused practice?",authors:"kanekotic",tags:["webdev","api","architecture","programming"],draft:!1,published:new Date("2022-12-20T13:00:00.000Z"),series:"microservices a double-edged sword",cover_image:"https://www.kanekotic.com/img/captura-de-pantalla-2022-12-19-a-las-17-16-39.png",canonical_url:"https://www.kanekotic.com/blog/2022/12/19/api-singleton"},i=void 0,s={permalink:"/blog/2022/12/19/api-singleton",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-12-19-api-singleton.md",source:"@site/blog/2022-12-19-api-singleton.md",title:"Double-edge Microservices: APIs the New Singleton",description:"In the current world of development we solve all with APIs, is it becoming an overused practice?",date:"2022-12-19T00:00:00.000Z",formattedDate:"December 19, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"api",permalink:"/blog/tags/api"},{label:"architecture",permalink:"/blog/tags/architecture"},{label:"programming",permalink:"/blog/tags/programming"}],readingTime:2.27,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{title:"Double-edge Microservices: APIs the New Singleton",description:"In the current world of development we solve all with APIs, is it becoming an overused practice?",authors:"kanekotic",tags:["webdev","api","architecture","programming"],draft:!1,published:"2022-12-20T13:00:00.000Z",series:"microservices a double-edged sword",cover_image:"https://www.kanekotic.com/img/captura-de-pantalla-2022-12-19-a-las-17-16-39.png",canonical_url:"https://www.kanekotic.com/blog/2022/12/19/api-singleton"},prevItem:{title:"Psychological safety in software development",permalink:"/blog/2023/01/26/psycological-safety-in-software-developmente"},nextItem:{title:"Double-edge Microservices: Macro Infrastructure due to Microservice Obsession",permalink:"/blog/2022/12/19/macroInfrastructure-microservice-obsesion"}},l={authorsImageUrls:[void 0]},c=[{value:"The Problem",id:"the-problem",level:2},{value:"The Solution",id:"the-solution",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The singleton pattern has got a bad reputation over the years due to be widely overused in the incorrect use cases. With the proliferation of microservices, ",(0,o.kt)("strong",{parentName:"p"},"have APIs become the new singleton?")),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"APIs, or application programming interfaces, have become a ubiquitous part of modern software development. They allow different systems and applications to communicate with one another, enabling the creation of complex, interconnected systems that can share data and functionality. However, there has been a growing concern that APIs are being overused, leading to a proliferation of unnecessarily complex and fragile systems that are difficult to maintain and scale."),(0,o.kt)("p",null,"One reason for the perceived overuse of APIs is the ease with which they can be implemented. With the abundance of API management tools and frameworks available, it is relatively straightforward to expose a set of functionality as an API and make it available to other systems. This has led to a proliferation of APIs, many of which are redundant or unnecessary, adding unnecessary complexity to the overall system."),(0,o.kt)("p",null,"Another issue is the lack of standardization in the API ecosystem. Each API is typically designed to meet the specific needs of the system it was created for, resulting in a wide variety of different designs and conventions. This can make it difficult for developers to understand and use APIs from other systems, as they may have to learn and adapt to new conventions and patterns each time they encounter a new API."),(0,o.kt)("p",null,"In addition to these issues, the reliance on APIs can also lead to fragile systems that are difficult to maintain and scale. When multiple systems are tightly coupled through APIs, a change to one system can have cascading effects on others, leading to unexpected behavior and potential failures. This can make it difficult to make changes or updates to a system without the risk of breaking something else."),(0,o.kt)("p",null,"There are also concerns about the security of APIs. As they allow systems to communicate with one another, they can also provide a potential entry point for attackers to gain access to sensitive data or functionality. Properly securing APIs can be a complex and time-consuming task, and if not done correctly, can lead to significant vulnerabilities."),(0,o.kt)("h2",{id:"the-solution"},"The Solution"),(0,o.kt)("p",null,"So, what can be done to address these issues? One solution is to use APIs more judiciously, carefully evaluating whether an API is truly necessary before implementing it. This can help reduce the overall complexity of the system and make it easier to maintain and scale. "),(0,o.kt)("p",null,"It's also important to adopt API design standards and guidelines, which can help ensure that APIs are consistent and easy to understand and use. Finally, proper API security practices should be implemented to protect against potential vulnerabilities."))}d.isMDXComponent=!0}}]);