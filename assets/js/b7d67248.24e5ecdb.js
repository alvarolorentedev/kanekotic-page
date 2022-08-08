"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(r),p=o,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Resource VS Process Microservices - Round 1",description:"Resource VS Process Microservices",authors:["kanekotic"],tags:["agile","webdev","programming","architecture"],draft:!1,published:!1},s=void 0,i={permalink:"/blog/2022/08/02/resource-process-microservices",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-02-resource-process-microservices.md",source:"@site/blog/2022-08-02-resource-process-microservices.md",title:"Resource VS Process Microservices - Round 1",description:"Resource VS Process Microservices",date:"2022-08-02T00:00:00.000Z",formattedDate:"August 2, 2022",tags:[{label:"agile",permalink:"/blog/tags/agile"},{label:"webdev",permalink:"/blog/tags/webdev"},{label:"programming",permalink:"/blog/tags/programming"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:2.86,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Great Wizard Of Stuff & Code",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{title:"Resource VS Process Microservices - Round 1",description:"Resource VS Process Microservices",authors:["kanekotic"],tags:["agile","webdev","programming","architecture"],draft:!1,published:!1},prevItem:{title:"MacroInfrastructure due Microservice Obsesion",permalink:"/blog/2022/08/02/macroInfrastructure-microservice-obsesion"},nextItem:{title:"Stop doing PR's in your Office",permalink:"/blog/2022/08/02/stop-prs"}},c={authorsImageUrls:[void 0]},l=[],d={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"During the last decade micro-services have been taking traction in the development world. Nevertheless moving from a monolithic view to a more self-served set of pieces is not an easy mental migration.\nI have seen in my experience two different approaches with two very different outcomes. One is based on resources and the other one is based on process.\nThe resource approach is based on the idea of Object Orientation. Meaning everything should be abstracted as an object that can be manipulated overtime by the consumers of that resource. In this approach the Data is on the drivers seat.\nThe process approach is based on the more functional view of the world. Meaning data is transform as part of a process to achieve a specific end. In this approach the Process is on the drivers seat.\nthis has ramification at a few different levels.\nResource Approach\nThis approach makes simple to understand concepts, but tends to be very chatty and cause a high cognitive load when understanding the overal interactins. It requires either an interface to the outside world that orchestrates all the calls. Or it requires the consumer to know all the required resources and do the process on their side.\nIndependence\nThe orchestration approach, requires normally to sync different microservices and teams. This will most of the time require a set of calls that are synchronous to retrieve the correct information to query another micro-service.\nThis brings to the picture a concept that Jonas Boner calls microliths in this article. The idea is that if you have synchronous calls in between services to serve information, services are not independent, and cant not be treated as individual pieces.\nThis has the side effect that releasing microservices cant be achieved as independent pieces, ending up in releases at absurd times where it wont affect customers and a lot of environments due the complex understanding of stability of services. Causing longer release cycles and more heavy process required.\nDomain Understanding\nThe resource view makes it very simple to understand individual pieces, and the domain of teams becomes that individual resources. This causes a need of a different layer of Domain Understanding in the orchestrator or the consuming applications. That can cause a cognitive overload.\nNormally this environments require a lot of overlook from an environment perspective as they are based on having sources ofd true for each abstraction of the data. The more an environment growths the more the cognitive overload will be there causing a possible misalignment.\nBusiness Organization\nThis approach normally causes an organization to be a layared one as the vertical separation is not possible, due the need to sync multiple resources. This affects at the same time independence of teams. As a team cant own from an understanding perspective any user process view, due the lack of the business domain understanding.\nProcess Approach\nThe process approach tends to be more self contained its based on the idea that duplicated data is not an issue. You do not have a source of true for the resource, what you have is a chain of custody of that resource data.\nIndependence\nCommunication on this systems normally happen through queues and teams are in charge of specific process. Based on this idea, the indirection layer provided by this allows teams and service to be in control of their own environment and have a lower amount of external dependencies simplifying.\nDomain Understanding\nBusiness Organization"))}u.isMDXComponent=!0}}]);