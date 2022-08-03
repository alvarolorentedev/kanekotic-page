"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"MacroInfrastructure due Microservice Obsesion",description:"The over-engineering of our age",authors:["kanekotic"],tags:["agile","webdev","programming","architecture"],draft:!1,published:!1},i=void 0,s={permalink:"/blog/2022/08/02/macroInfrastructure-microservice-obsesion",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-02-macroInfrastructure-microservice-obsesion.md",source:"@site/blog/2022-08-02-macroInfrastructure-microservice-obsesion.md",title:"MacroInfrastructure due Microservice Obsesion",description:"The over-engineering of our age",date:"2022-08-02T00:00:00.000Z",formattedDate:"August 2, 2022",tags:[{label:"agile",permalink:"/blog/tags/agile"},{label:"webdev",permalink:"/blog/tags/webdev"},{label:"programming",permalink:"/blog/tags/programming"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:3.365,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Great Wizard Of Stuff & Code",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{title:"MacroInfrastructure due Microservice Obsesion",description:"The over-engineering of our age",authors:["kanekotic"],tags:["agile","webdev","programming","architecture"],draft:!1,published:!1},prevItem:{title:"The testing piramid is actually fat",permalink:"/blog/2022/08/02/fat-testing-piramid"},nextItem:{title:"Resource VS Process Microservices - Round 1",permalink:"/blog/2022/08/02/resource-process-microservices"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cloud services and infrastructure as code during the last decade have revolutionized our industry, they have allowed us to be able to procure infrastructure in a very simple way and adaptable to the needs based on traffic. This allowed us to move from writing humongous monolithic applications to write smaller applications that run in their own infrastructure and communicate between themselves.\nOne of the most accepted definition of a microservice can be expressed as:\nA self-contained portion of code that do not share resources with other services, can be deployed independently and should be easy to rewrite in a small portion of time.\nThis sounds actually great when we talk about individual parts of a software projects. I was definetly sold on it after understanding that definition.\nNevertheless when thinking about systems and how they operate. There is a point to make about granularity as software does never work on complete isolated units. It requires interactions to fullfill their purpose.\nMost of the monolithic applications of the past had an issue of being over-engineered to allow changes that might never happen. Could that happen also with infrastructure? Is it currently a real problem for delivery?"),(0,o.kt)("p",null,"Lost Overview Of The Domain\nWhen a system grows to much in small pieces, it becomes more and more complex to have an overview of the goal of the moving parts. When pieces are to small domain events start becoming exchange of information in between nodes of a network. All this removes cohesion on the knowledge over the domain of a system, making it difficult to grasp the real intention and capabilities of concepts and actors across a system."),(0,o.kt)("p",null,"Why\u2026 if YAGNI\nOne of the main ideas of micro-services was to be able to validate assumptions fast. Before bootstrapping new services or infrastructure, there is a need to ask ourselves about the existence of a service or infrastructure that contains the domain knowledge required for the experiment in the current ecosystem.\nIf we are not careful experiments wont be experiments. They will be MVPs, where domain knowledge is re-implemented, just for the sake of have it as a standalone node on the system."),(0,o.kt)("p",null,"Repeating Yourself\nWhen we create pieces of code that are independent there is always a certain level of bootstrapping that is required and repeated in each nodes of our systems.\nThis will cause not only a set of duplicated code, but also has a development time cost attached to it. Bootstraping a project in a high granularity system can be complex to standardize."),(0,o.kt)("p",null,"Babel tower Issue\nThe more parts a system has, the less heterogeneous it becomes. This at the same time translates into a more complex environment with more integration's, frameworks and bigger learning curves that affects delivery. There need to be a balance of when and where in a system a new technology is added. Decisions need to be based on needs and not on preferences."),(0,o.kt)("p",null,"Implicit runtime dependencies\nThe more a system get split the more dependency on certain node it will have. This tend to cause more dependencies in between the pieces of your infrastructure based puzzle where you start having god infrastructure points that become single point of failure, or you have chain of dependent infra that need to be deployed in a go or certain order."),(0,o.kt)("p",null,"Hidden Complexity\nThe more your microservice environment grows the more it requires a growing support infrastructure for monitoring, alerting and other services not used as part of the main system. This normally is a separate effort and has its own cost. The more a system grows those hidden complexities become a dependency for all the nodes in the system, making it a complex task to evolve and change those dependencies."),(0,o.kt)("p",null,"Microservices, the cloud and infrastructure as a service have definitely revolutionized our industry, nevertheless as everything there is a need for balance. Making sure we use the right tool for the job and we don't over-engineer things, not only at a code level but also at infrastructure level, as everything has a cost."))}d.isMDXComponent=!0}}]);