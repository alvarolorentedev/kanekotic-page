"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5306],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>h});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(i),h=o,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return i?r.createElement(d,a(a({ref:t},m),{},{components:i})):r.createElement(d,a({ref:t},m))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5977:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=i(7462),o=(i(7294),i(3905));const n={date:new Date("2022-09-05T06:22:55.000Z"),draft:!1,title:"Patterns to avoiding microlithic microservices",description:"how can we decouple services to avoid some common pitfalls",authors:["kanekotic"],tags:["api","microservices","programming","architecture"],published:new Date("2022-09-05T06:22:55.000Z"),series:"The journey from the monolith to microservices",canonical_url:"https://www.kanekotic.com/blog/2022/09/05/patterns-to-avoiding-microlithic-microservices",cover_image:"https://www.kanekotic.com/img/microliths.jpg"},a=void 0,s={permalink:"/blog/2022/09/05/patterns-to-avoiding-microlithic-microservices",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-09-05-patterns-to-avoiding-microlithic-microservices.md",source:"@site/blog/2022-09-05-patterns-to-avoiding-microlithic-microservices.md",title:"Patterns to avoiding microlithic microservices",description:"how can we decouple services to avoid some common pitfalls",date:"2022-09-05T06:22:55.000Z",formattedDate:"September 5, 2022",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"microservices",permalink:"/blog/tags/microservices"},{label:"programming",permalink:"/blog/tags/programming"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:2.24,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Engineering Manager @ClimatePartner",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{date:"2022-09-05T06:22:55.000Z",draft:!1,title:"Patterns to avoiding microlithic microservices",description:"how can we decouple services to avoid some common pitfalls",authors:["kanekotic"],tags:["api","microservices","programming","architecture"],published:"2022-09-05T06:22:55.000Z",series:"The journey from the monolith to microservices",canonical_url:"https://www.kanekotic.com/blog/2022/09/05/patterns-to-avoiding-microlithic-microservices",cover_image:"https://www.kanekotic.com/img/microliths.jpg"},prevItem:{title:"Event Storming to split Monolith into Microservices",permalink:"/blog/2022/09/09/event-storming-to-split-the-monolith-into-microservices"},nextItem:{title:"Common mistakes when splitting the monolith",permalink:"/blog/2022/09/04/common-mistakes-when-splitting-the-monolith"}},l={authorsImageUrls:[void 0]},c=[{value:"The Patterns",id:"the-patterns",level:2},{value:"Circuit Breakers",id:"circuit-breakers",level:3},{value:"Outbox Pattern",id:"outbox-pattern",level:3},{value:"Event Sourcing",id:"event-sourcing",level:3},{value:"Conclusion and follow-ups",id:"conclusion-and-follow-ups",level:2}],m={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On the previous installment of this series, we discussed the pitfalls that could happen when we split a monolith into microservices. In specific, we talked about creating what are called microliths.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/microliths.jpg",alt:null})),(0,o.kt)("p",null,"Given that you have followed the recommendations on designing your domains correctly. Today we are going to elaborate on patterns to remove that synchronous communication in between 'microservices'. This will help our services to become more resilient."),(0,o.kt)("h2",{id:"the-patterns"},"The Patterns"),(0,o.kt)("h3",{id:"circuit-breakers"},"Circuit Breakers"),(0,o.kt)("p",null,"The most simple solution we can go for is called ",(0,o.kt)("strong",{parentName:"p"},"circuit breakers"),". As it implies, is just a piece of code that upon multiple request failed to a downstream service will fail silently and allow service to resume their normal behavior."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/circuitbreakerdesignpattern.png",alt:null})),(0,o.kt)("p",null,"What are we solving and what are we letting unsolved:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2714\ufe0f We don\u2019t fail continuously if some other service fails."),(0,o.kt)("li",{parentName:"ul"},"\u274c We silently don\u2019t finish the entire process requested."),(0,o.kt)("li",{parentName:"ul"},"\u274c We require all chain of dependencies to be called."),(0,o.kt)("li",{parentName:"ul"},"\u274c We force other services to scale to our needs."),(0,o.kt)("li",{parentName:"ul"},"\u274c Data is mutable, so errors will be propagated and not solvable.")),(0,o.kt)("h3",{id:"outbox-pattern"},"Outbox Pattern"),(0,o.kt)("p",null,"The next level in solving our microlithic issue is to decouple our services using Pub/Sub to exchange models in between services.",(0,o.kt)("br",{parentName:"p"}),"\n","Our service will consume and store the necessary information to run the process locally, and will broadcast the outcome models. This will mean there will always be a strong consistency in the outbox, and eventual consistency on the service database (if it exists)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/reactivemicroliths.jpg",alt:null})),(0,o.kt)("p",null,"What are we solving and what are we letting unsolved:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2714\ufe0f We don\u2019t fail continuously if some other service fails."),(0,o.kt)("li",{parentName:"ul"},"\u2714\ufe0f We always finish our process and promise the rest will be done."),(0,o.kt)("li",{parentName:"ul"},"\u2714\ufe0f We just require our service to do what we promise."),(0,o.kt)("li",{parentName:"ul"},"\u2714\ufe0f Fast services will be fast, and slow services can go slow."),(0,o.kt)("li",{parentName:"ul"},"\u274c Data is mutable, so errors will be propagated and not solvable.")),(0,o.kt)("h3",{id:"event-sourcing"},"Event Sourcing"),(0,o.kt)("p",null,"The last level is ",(0,o.kt)("strong",{parentName:"p"},"event sourcing"),". The idea is to use the events that generated a specific state and not use the calculated state that a service can provide us."),(0,o.kt)("p",null,"This allows a higher resilience due to the immutability of the data. In this case, calculation issues of the past can be solved, as we can reprocess the entire set of events that took us to a certain state.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/microsystems.jpg",alt:null})),(0,o.kt)("h2",{id:"conclusion-and-follow-ups"},"Conclusion and follow-ups"),(0,o.kt)("p",null,"These are some of the patterns that can make our services more independent and resilient. Nevertheless, each of them has a different complexity, meaning it also affects the complexity of our code. For this, we need to make sure we use the correct tool for the job."))}p.isMDXComponent=!0}}]);