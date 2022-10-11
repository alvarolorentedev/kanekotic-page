"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={draft:!1,title:"Delivery Acceleration: Deployment Environments",description:"Where should we run our services? are there hidden consts on certain practices?",authors:"kanekotic",tags:["softwaredevelopment","programming","productivity","devops"],published:new Date("2022-10-11T23:00:00.000Z"),canonical_url:"https://www.kanekotic.com/blog/2022/09/10/delivery-acceleration-environments",cover_image:"https://www.kanekotic.com/img/cicd.png",series:"Accelerate Continious Integration & Delivery Practices"},a=void 0,l={permalink:"/blog/2022/10/10/delivery-acceleration-environments",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-10-10-delivery-acceleration-environments.md",source:"@site/blog/2022-10-10-delivery-acceleration-environments.md",title:"Delivery Acceleration: Deployment Environments",description:"Where should we run our services? are there hidden consts on certain practices?",date:"2022-10-10T00:00:00.000Z",formattedDate:"October 10, 2022",tags:[{label:"softwaredevelopment",permalink:"/blog/tags/softwaredevelopment"},{label:"programming",permalink:"/blog/tags/programming"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"devops",permalink:"/blog/tags/devops"}],readingTime:2.76,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Engineering Manager @ClimatePartner",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{draft:!1,title:"Delivery Acceleration: Deployment Environments",description:"Where should we run our services? are there hidden consts on certain practices?",authors:"kanekotic",tags:["softwaredevelopment","programming","productivity","devops"],published:"2022-10-11T23:00:00.000Z",canonical_url:"https://www.kanekotic.com/blog/2022/09/10/delivery-acceleration-environments",cover_image:"https://www.kanekotic.com/img/cicd.png",series:"Accelerate Continious Integration & Delivery Practices"},prevItem:{title:"Delivery Acceleration: Testing & Validation",permalink:"/blog/2022/10/11/delivery-acceleration-testing-validation"},nextItem:{title:"Delivery Acceleration: Observability",permalink:"/blog/2022/09/27/delivery-acceleration-observability"}},s={authorsImageUrls:[void 0]},c=[{value:"CI vs. CD vs. CD",id:"ci-vs-cd-vs-cd",level:2},{value:"The trap of Multiple Environments",id:"the-trap-of-multiple-environments",level:2},{value:"Achieving Continuous Deployment, Only prod, is it so crazy?",id:"achieving-continuous-deployment-only-prod-is-it-so-crazy",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Related Videos",id:"related-videos",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Our services need to run somewhere, so our users can access it. It's a very common practices to have multiple environments like dev, staging, and prod. Is this actually a good practices?"),(0,i.kt)("h2",{id:"ci-vs-cd-vs-cd"},"CI vs. CD vs. CD"),(0,i.kt)("p",null,"when people talk about continuous integration, delivery and deployment, they normally talk about it as a whole."),(0,i.kt)("p",null,"Nevertheless, let's reflect why these are 3 different practices. As they are steps in a journey, you can do one and not the next one."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/cicd.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Continuous integration: allows making reproducible states of the code in multiple places."),(0,i.kt)("li",{parentName:"ul"},"Continuous Delivery: Now that it's reproducible, it needs to be marked as potentially deployable and provide the ability to deploy it."),(0,i.kt)("li",{parentName:"ul"},"Continuous Deployment: Delivers the code to your clients and not only to your team as you commit.")),(0,i.kt)("h2",{id:"the-trap-of-multiple-environments"},"The trap of Multiple Environments"),(0,i.kt)("p",null,"As you can imagine, with the previous definition of CI/CD, having multiple environments will never allow you to achieve Continuous Deployment."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/environments.jpeg",alt:null})),(0,i.kt)("p",null,"The intent of having multiple environments is to reduce change failure rate, are we actually achieving this with the practices? The answer is normally not due to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A non-production environment will never be the same as a production.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Different data"),(0,i.kt)("li",{parentName:"ul"},"Different performance"),(0,i.kt)("li",{parentName:"ul"},"Different security practices"),(0,i.kt)("li",{parentName:"ul"},"Etc\u2026"))),(0,i.kt)("li",{parentName:"ul"},"Stress and ownership of moving things to production"),(0,i.kt)("li",{parentName:"ul"},"Accumulation of code in lower environments (meaning more bugs)."),(0,i.kt)("li",{parentName:"ul"},"Longer feedback loop."),(0,i.kt)("li",{parentName:"ul"},"Continuous misalignment due to development cycles in between different teams.")),(0,i.kt)("p",null,"As you can see, this makes a fake sense of safety, but it does not affect positively the change failure rate."),(0,i.kt)("p",null,"This affects mostly negatively, most of DORA 4 metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u274c ",(0,i.kt)("strong",{parentName:"li"},"Deployment frequency")),(0,i.kt)("li",{parentName:"ul"},"\u274c ",(0,i.kt)("strong",{parentName:"li"},"Lead Time for change")),(0,i.kt)("li",{parentName:"ul"},"\u274c ",(0,i.kt)("strong",{parentName:"li"},"Mean Time To Recovery")),(0,i.kt)("li",{parentName:"ul"},"\u3030\ufe0f ",(0,i.kt)("strong",{parentName:"li"},"Change Failure Rate"))),(0,i.kt)("h2",{id:"achieving-continuous-deployment-only-prod-is-it-so-crazy"},"Achieving Continuous Deployment, Only prod, is it so crazy?"),(0,i.kt)("p",null,"How can a team Continuous deployment? The answer tends to be simple, making every commit go to production and testing in it.",(0,i.kt)("br",{parentName:"p"}),"\n","Be aware this does not mean to have our users experience possible bugs or see test data, as we can hide functionalities behind toggles, headers, or parameters that allow access to only the development team. As we will see in future installments of this series."),(0,i.kt)("p",null,"An example strategy is the one in the next diagram."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/single_environment.jpeg",alt:null})),(0,i.kt)("p",null,"This allows us to keep only one environment that discriminates in between test and non-test data that can be clean periodically, while it provides the real environment with the real behavior. With this, we solved:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Real performance & behavior."),(0,i.kt)("li",{parentName:"ul"},"Continuous alignment with other teams."),(0,i.kt)("li",{parentName:"ul"},"Smaller feedback cycles."),(0,i.kt)("li",{parentName:"ul"},"Control of rollout."),(0,i.kt)("li",{parentName:"ul"},"Smaller $ cost.")),(0,i.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,i.kt)("strong",{parentName:"li"},"Deployment frequency")),(0,i.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,i.kt)("strong",{parentName:"li"},"Lead Time for change")),(0,i.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,i.kt)("strong",{parentName:"li"},"Mean Time To Recovery")),(0,i.kt)("li",{parentName:"ul"},"\u3030\ufe0f ",(0,i.kt)("strong",{parentName:"li"},"Change Failure Rate"))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"There is no one size fit all, but modern practices tend to go towards simplicity and fast feedback loops. There are many practices involved on this simplicity that enables us to feel comfortable with only production environments. We will talk about them on this series.   "),(0,i.kt)("h2",{id:"related-videos"},"Related Videos"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/UBtiBA5QTEg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/9C0efJkT0Hg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);