"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={title:"Double-edge Microservices: Macro Infrastructure due to Microservice Obsession",description:"Macro Infrastructure due to Microservice Obsession the over-engineering of our age",authors:"kanekotic",tags:["webdev","api","programming","architecture"],draft:!1,published:new Date("2022-12-27T01:00:00.000Z"),series:"microservices a double-edged sword",canonical_url:"https://www.kanekotic.com/blog/2022/12/19/macroInfrastructure-microservice-obsesion"},a=void 0,s={permalink:"/blog/2022/12/19/macroInfrastructure-microservice-obsesion",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-12-19-macroInfrastructure-microservice-obsesion.md",source:"@site/blog/2022-12-19-macroInfrastructure-microservice-obsesion.md",title:"Double-edge Microservices: Macro Infrastructure due to Microservice Obsession",description:"Macro Infrastructure due to Microservice Obsession the over-engineering of our age",date:"2022-12-19T00:00:00.000Z",formattedDate:"December 19, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"api",permalink:"/blog/tags/api"},{label:"programming",permalink:"/blog/tags/programming"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:3.495,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Engineering Manager @ClimatePartner",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{title:"Double-edge Microservices: Macro Infrastructure due to Microservice Obsession",description:"Macro Infrastructure due to Microservice Obsession the over-engineering of our age",authors:"kanekotic",tags:["webdev","api","programming","architecture"],draft:!1,published:"2022-12-27T01:00:00.000Z",series:"microservices a double-edged sword",canonical_url:"https://www.kanekotic.com/blog/2022/12/19/macroInfrastructure-microservice-obsesion"},prevItem:{title:"Double-edge Microservices: APIs the New Singleton",permalink:"/blog/2022/12/19/api-singleton"},nextItem:{title:"TDD is not called TDT for a reason",permalink:"/blog/2022/11/24/tdd-is-not-called-tdt-for-a-reason"}},c={authorsImageUrls:[void 0]},l=[{value:"The Context",id:"the-context",level:2},{value:"The Issues",id:"the-issues",level:2},{value:"Clarity Of The Domain",id:"clarity-of-the-domain",level:3},{value:"Babel tower Issue",id:"babel-tower-issue",level:3},{value:"Implicit runtime dependencies",id:"implicit-runtime-dependencies",level:3},{value:"Hidden Complexity",id:"hidden-complexity",level:3},{value:"Why\u2026 if YAGNI",id:"why-if-yagni",level:3},{value:"Repeating Yourself",id:"repeating-yourself",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"the-context"},"The Context"),(0,n.kt)("p",null,"Cloud and infrastructure as code have revolutionized our industry. They allowed us to be able to procure infrastructure in a simple, adaptable way.",(0,n.kt)("br",{parentName:"p"}),"\n","This allowed us to move from writing huge monolithic applications to write microservices that interact between them.",(0,n.kt)("br",{parentName:"p"}),"\n","One of the most accepted definition of a microservice can be expressed as:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A self-contained portion of code that does not share resources with other services, can be deployed independently, and should be easy to rewrite in a small portion of time.")),(0,n.kt)("p",null,"This sounds great when we talk about individual parts of a software projects. Nevertheless, when thinking about systems and how they operate, There is a point to make about granularity as software does never work fully isolated. It requires interactions with other systems to fulfill their purpose."),(0,n.kt)("p",null,"Most of the monolithic applications of the past had an issue of being over-engineered to allow changes that might never happen."),(0,n.kt)("p",null,"Could that also happen with microservices?"),(0,n.kt)("h2",{id:"the-issues"},"The Issues"),(0,n.kt)("h3",{id:"clarity-of-the-domain"},"Clarity Of The Domain"),(0,n.kt)("p",null,"When a system grows too much in small pieces, it becomes more and more complex to understand the big picture.",(0,n.kt)("br",{parentName:"p"}),"\n","When pieces are too small, domain events start becoming exchange of information in between nodes of a network. All this removes cohesion on the knowledge over the domain of a system, making it difficult to grasp the real intention and capabilities of concepts and actors across a system."),(0,n.kt)("h3",{id:"babel-tower-issue"},"Babel tower Issue"),(0,n.kt)("p",null,"The more parts a system has, the less heterogeneous it becomes. This at the same time translates into a more complex environment with more integrations, frameworks and bigger learning curves that affects delivery. There need to be a balance of when and where in a system a new technology is added. Decisions must be based on needs and not on preferences."),(0,n.kt)("h3",{id:"implicit-runtime-dependencies"},"Implicit runtime dependencies"),(0,n.kt)("p",null,"The more a system get split, the more dependency on certain node it will have. This tends to cause more dependencies in between the pieces of your infrastructure-based puzzle where you start having god infrastructure points that become single point of failure, or you have a chain of dependent infra that need to be deployed in a go or certain order."),(0,n.kt)("h3",{id:"hidden-complexity"},"Hidden Complexity"),(0,n.kt)("p",null,"The more your microservice environment grows, the more it requires a growing support infrastructure for monitoring, alerting and other services not used as part of the main system. This normally is a separate effort which has its cost. The more a system grows, those hidden complexities become a dependency for all the nodes in the system, making it a complex task to evolve and change those dependencies."),(0,n.kt)("h3",{id:"why-if-yagni"},"Why\u2026 if YAGNI"),(0,n.kt)("p",null,"One of the main ideas of microservices was to be able to validate assumptions fast. Before bootstrapping new services or infrastructure, there is a need to ask ourselves about the existence of a service or infrastructure that contains the domain knowledge required for the experiment in the current ecosystem. If we are not careful, experiments won't be experiments. They will be MVPs, where domain knowledge is re-implemented, just for having it as a standalone node on the system."),(0,n.kt)("h3",{id:"repeating-yourself"},"Repeating Yourself"),(0,n.kt)("p",null,"When we create pieces of code that are independent, there is always a certain level of bootstrapping that is required and repeated in each node of our systems. This will cause not only a set of duplicated code, but also has a development time cost attached to it. Bootstrapping a project in a high granularity system can be complex to standardize."),(0,n.kt)("p",null,"Microservices, the cloud, and infrastructure as a service have definitely revolutionized our industry, nevertheless as in everything there is a need for balance. Making sure we use the right tool for the job, and we don't over-engineer things, not only at a code level but also at infrastructure level, as everything has a cost."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In conclusion, a macro infrastructure due to microservice obsession can lead to increased complexity and overhead costs, as well as challenges in making changes and updates to the system. While microservices can offer benefits such as increased scalability and flexibility, it is important for organizations to carefully consider their specific needs and choose the right level of granularity for their architecture."))}d.isMDXComponent=!0}}]);