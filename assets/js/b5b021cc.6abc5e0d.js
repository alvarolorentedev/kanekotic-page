"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(r),d=o,h=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={authors:"kanekotic",draft:!1,title:"TDD is not called TDT for a reason",description:"When people elaborate on TDD they seem to stay focused on the first letter but miss the focus of the other two letters. ",tags:["webdev","testing","architecture","programming"],published:new Date("2022-11-28T03:00:00.000Z"),canonical_url:"https://www.kanekotic.com/blog/2022/11/24/tdd-is-not-called-tdt-for-a-reason",cover_image:"https://www.kanekotic.com/img/tdd.png",series:""},i=void 0,s={permalink:"/blog/2022/11/24/tdd-is-not-called-tdt-for-a-reason",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-11-24-tdd-is-not-called-tdt-for-a-reason.md",source:"@site/blog/2022-11-24-tdd-is-not-called-tdt-for-a-reason.md",title:"TDD is not called TDT for a reason",description:"When people elaborate on TDD they seem to stay focused on the first letter but miss the focus of the other two letters. ",date:"2022-11-24T00:00:00.000Z",formattedDate:"November 24, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"testing",permalink:"/blog/tags/testing"},{label:"architecture",permalink:"/blog/tags/architecture"},{label:"programming",permalink:"/blog/tags/programming"}],readingTime:1.575,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Engineering Manager @ClimatePartner",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{authors:"kanekotic",draft:!1,title:"TDD is not called TDT for a reason",description:"When people elaborate on TDD they seem to stay focused on the first letter but miss the focus of the other two letters. ",tags:["webdev","testing","architecture","programming"],published:"2022-11-28T03:00:00.000Z",canonical_url:"https://www.kanekotic.com/blog/2022/11/24/tdd-is-not-called-tdt-for-a-reason",cover_image:"https://www.kanekotic.com/img/tdd.png",series:""},prevItem:{title:"Double-edge Microservices: MacroInfrastructure due Microservice Obsesion",permalink:"/blog/2022/12/19/macroInfrastructure-microservice-obsesion"},nextItem:{title:"Delivery Acceleration: Parallel Changes Strategy",permalink:"/blog/2022/10/14/delivery-acceleration-parallel-changes-strategy"}},l={authorsImageUrls:[void 0]},c=[{value:"Not A Testing Strategy",id:"not-a-testing-strategy",level:2},{value:"A Design Strategy",id:"a-design-strategy",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I have observed quite a few articles lately that elaborate on issues with TDD. Nevertheless, they focused on the first letter but miss the focus of the other two letters."),(0,o.kt)("h2",{id:"not-a-testing-strategy"},"Not A Testing Strategy"),(0,o.kt)("p",null,"If you take anything out of this article, please think about this quote:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If TDD was about testing it would have been called TDT (test driven testing).")),(0,o.kt)("p",null,"The fact that we do test upfront in TDD does not mean at all that there is a direct relationship with a testing strategy, and as many preach, unit testing is not enough to create robust software."),(0,o.kt)("h2",{id:"a-design-strategy"},"A Design Strategy"),(0,o.kt)("p",null,"TDD is actually a ",(0,o.kt)("strong",{parentName:"p"},"Design Strategy"),", this is why the 2 last letter are for ",(0,o.kt)("strong",{parentName:"p"},"driven development"),". This means that your final code is being moved by those tests and not the other way around."),(0,o.kt)("p",null,"The design that TDD will move you towards to is ",(0,o.kt)("strong",{parentName:"p"},"minimalistic"),". Reducing the tendency of overengineering solutions when you don't need them. This brings a ",(0,o.kt)("strong",{parentName:"p"},"reducing time to market"),", by reducing the ",(0,o.kt)("strong",{parentName:"p"},"accidental complexity"),"."),(0,o.kt)("p",null,"When doing TDD most developers have the complexity of letting go their ",(0,o.kt)("strong",{parentName:"p"},"egos"),", the problem when people fight against the practices is because they think to know better. Nevertheless, it tends to ",(0,o.kt)("strong",{parentName:"p"},"generate waste")," because most code optimizations tend to be premature and most extensibility points will never be modified."),(0,o.kt)("p",null,"There are places where TDD does not fit, for example while investigating a technology through a spike or PoC because in these cases, the person is exploring knowledge not generating value. In other cases, TDD allows you to bring value in the shortest way possible."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"If you are an experienced developer, do not discard TDD because you think you know better, allow it to challenge you. If you are a new developer, learn from the different ways of doing things and understand the value, don't take articles at face value."))}p.isMDXComponent=!0}}]);