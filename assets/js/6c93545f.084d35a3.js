"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2698],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Stop doing PR's inside the Office",description:"PRs should only be part of certain environments and not a general practice",authors:"kanekotic",tags:["agile","webdev","programming","productivity"],draft:!1,published:new Date("2022-08-07T22:00:00.000Z"),canonical_url:"https://www.kanekotic.com/blog/2022/08/08/stop-prs",cover_image:"https://github.com/kanekotic/diagrams/blob/main/Stop%20doing%20PR.drawio.png?raw=true"},i=void 0,s={permalink:"/blog/2022/08/08/stop-prs",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-08-stop-prs.md",source:"@site/blog/2022-08-08-stop-prs.md",title:"Stop doing PR's inside the Office",description:"PRs should only be part of certain environments and not a general practice",date:"2022-08-08T00:00:00.000Z",formattedDate:"August 8, 2022",tags:[{label:"agile",permalink:"/blog/tags/agile"},{label:"webdev",permalink:"/blog/tags/webdev"},{label:"programming",permalink:"/blog/tags/programming"},{label:"productivity",permalink:"/blog/tags/productivity"}],readingTime:3.02,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Engineering Manager @ClimatePartner",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{title:"Stop doing PR's inside the Office",description:"PRs should only be part of certain environments and not a general practice",authors:"kanekotic",tags:["agile","webdev","programming","productivity"],draft:!1,published:"2022-08-07T22:00:00.000Z",canonical_url:"https://www.kanekotic.com/blog/2022/08/08/stop-prs",cover_image:"https://github.com/kanekotic/diagrams/blob/main/Stop%20doing%20PR.drawio.png?raw=true"},prevItem:{title:"Commiting Like a Pro in NodeJs: The hooks",permalink:"/blog/2022/08/08/commiting-like-pro-part-1"},nextItem:{title:"Update your npm package dependencies and release with Travis",permalink:"/blog/2018/07/11/travis-ci-update-npm-package-dependencies-and-release"}},l={authorsImageUrls:[void 0]},p=[{value:"Why PR&#39;s exist",id:"why-prs-exist",level:3},{value:"The issue",id:"the-issue",level:3},{value:"The Alternatives",id:"the-alternatives",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Over the last few years, some practices appear to be more a dogma than a value adding practice. One of this is ",(0,n.kt)("inlineCode",{parentName:"p"},"Pull Requests"),"."),(0,n.kt)("h3",{id:"why-prs-exist"},"Why PR's exist"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Malicious Code Prevention"),": Pull requests exist mostly as a practice accepted for ",(0,n.kt)("inlineCode",{parentName:"li"},"zero trust environments")," (ex. Open Source). An attack vector on this type of environment is the ability of anyone to contribute, meaning you could inject code that could create known vulnerabilities that packages will inherit. That is why maintainers validate code from unknown users.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/kanekotic/diagrams/blob/main/Stop%20doing%20PR.drawio.png?raw=true",alt:"Malicious actors"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Highly Distributed Teams"),": PR's can be use for highly distributed teams (around the clock) as a way to do knowledge sharing. If someone in side A of the world can follow and understand the changes for a feature that is being developed in side B of the world.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/kanekotic/diagrams/blob/main/Stop%20doing%20PR-Around%20The%20Clock.drawio.png?raw=true",alt:"Distributed Teams"})),(0,n.kt)("h3",{id:"the-issue"},"The issue"),(0,n.kt)("p",null,"IS there any value of doing PRs when people work collocated? What is the cost of PRs in trust environments?"),(0,n.kt)("p",null,"The value that normally people give to PRs is the one of having a ",(0,n.kt)("strong",{parentName:"p"},"peer review process"),". Nevertheless, we will see later in this article that there are less invasive ways to do this."),(0,n.kt)("p",null,"Some costs of PRs are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Slow Delivery"),": PRs are a start and stop strategy where there is a gateway to merge code. This is time that needs to be taken by developers (writting & preparing a PR) and reviewers (reviewing, commenting, etc) to go through the process. At the same time is more time the code takes to get to production (merging, re-testing, etc). This is significant for features but also for fixes, meaning you can go from a response time of minutes to hours."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Isolation work"),": When working on branches, devs work on code that works isolated but needs to be merged with a continuous stream of changes. This means that any test isolated will probably be invalidated upon merging."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Lack of ownership"),": As work is done isolated, the developer who creates a PR delegates part or the responsibility to the reviewer. Humans don't have compilers or containers to run the code in our brain, meaning catching errors tends to be out of our realm."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Egos"),": As catching errors tends to be out of our human realm, PRs tend to become a thing related to preferences (Style, patterns, etc). This hardly provides any value to the code as either tools like linters can do this automatically or it brings premature optimizations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Late feedback"),": Any valid recommendation is actually provided quite late in the process, when the code has already been written and validated. Causing rework that takes time.")),(0,n.kt)("h3",{id:"the-alternatives"},"The Alternatives"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Pull requests")," are just one of the asynchronous peer code reviews styles. Is not the only way of doing peer reviews."),(0,n.kt)("p",null,"Some other types of peer reviews that I, personally, like are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Over-the-shoulder"),": The bases of this is to have a conversation over what has been or is being implemented. This creates a synchronous feedback loop on an async process. It does not fix all the shortcomings of a PR, but it creates a faster feedback loop."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pair Programming / Mob Programming"),": The idea is that multiple developers work in the same code base in the same computer, creating a synchronous feedback loop in a synchronous process. This with ",(0,n.kt)("inlineCode",{parentName:"li"},"Trunk-based development")," allows very fast feedback loops at product level, and with the correct tools generates resilience and ownership among developers.")),(0,n.kt)("p",null,"The disclaimer here is I have worked doing pair programming, TDD and trunk-based development for more than 5 years in multiple size companies, and it has always been a bliss."))}u.isMDXComponent=!0}}]);