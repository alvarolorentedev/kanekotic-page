"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4420],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={draft:!1,title:"Delivery Acceleration: Enabling Features",description:"How do we roll out features? What are some practices that can save us from the big bang release",authors:"kanekotic",tags:["productivity","devops","programming","softwaredevelopment"],published:new Date("2022-10-16T22:00:00.000Z"),canonical_url:"https://www.kanekotic.com/blog/2022/10/10/delivery-acceleration-enabling-features",cover_image:"https://www.kanekotic.com/img/toggles.jpeg",series:"Accelerate Continious Integration & Delivery Practices"},i=void 0,l={permalink:"/blog/2022/10/10/delivery-acceleration-enabling-features",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-10-10-delivery-acceleration-enabling-features.md",source:"@site/blog/2022-10-10-delivery-acceleration-enabling-features.md",title:"Delivery Acceleration: Enabling Features",description:"How do we roll out features? What are some practices that can save us from the big bang release",date:"2022-10-10T00:00:00.000Z",formattedDate:"October 10, 2022",tags:[{label:"productivity",permalink:"/blog/tags/productivity"},{label:"devops",permalink:"/blog/tags/devops"},{label:"programming",permalink:"/blog/tags/programming"},{label:"softwaredevelopment",permalink:"/blog/tags/softwaredevelopment"}],readingTime:2.635,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{draft:!1,title:"Delivery Acceleration: Enabling Features",description:"How do we roll out features? What are some practices that can save us from the big bang release",authors:"kanekotic",tags:["productivity","devops","programming","softwaredevelopment"],published:"2022-10-16T22:00:00.000Z",canonical_url:"https://www.kanekotic.com/blog/2022/10/10/delivery-acceleration-enabling-features",cover_image:"https://www.kanekotic.com/img/toggles.jpeg",series:"Accelerate Continious Integration & Delivery Practices"},prevItem:{title:"Delivery Acceleration: Testing & Validation",permalink:"/blog/2022/10/11/delivery-acceleration-testing-validation"},nextItem:{title:"Delivery Acceleration: Deployment Environments",permalink:"/blog/2022/10/10/delivery-acceleration-environments"}},s={authorsImageUrls:[void 0]},c=[{value:"Blue/Green Deployment: Getting to prod with 0 downtime",id:"bluegreen-deployment-getting-to-prod-with-0-downtime",level:2},{value:"Enabling feature access to users",id:"enabling-feature-access-to-users",level:2},{value:"Big Bang Releases",id:"big-bang-releases",level:3},{value:"Canary Releases",id:"canary-releases",level:3},{value:"Feature Flag Releases",id:"feature-flag-releases",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Now that we know where our code lives, we need to make sure our users get access to the features. For this, we need to get our code to the environment we want to deploy to, and control the rollout (if you are not a big bang release fan)."),(0,n.kt)("h2",{id:"bluegreen-deployment-getting-to-prod-with-0-downtime"},"Blue/Green Deployment: Getting to prod with 0 downtime"),(0,n.kt)("p",null,"What is this?, The concept is simple, we have a set of machines (ex. blue) where we currently have our app running, and we want to deploy. The intent is to create a new set of machines (ex. green) where our new version of the code will run. We would like to validate as much as possible (ex. automated e2e tests) that this new version is up to par with the previous one before moving the traffic and destroy the previous version."),(0,n.kt)("p",null,"You can see the process in the next graph:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/blue_green.jpeg",alt:null})),(0,n.kt)("p",null,"With this, we are trying to achieve a 0 downtime while deploying a new version of our code. This is critical for teams that practice continuous deployment, as you want to avoid having systems down as you deploy multiple times a day."),(0,n.kt)("h2",{id:"enabling-feature-access-to-users"},"Enabling feature access to users"),(0,n.kt)("p",null,"there are multiple ways to enable access to users, in between them:"),(0,n.kt)("h3",{id:"big-bang-releases"},"Big Bang Releases"),(0,n.kt)("p",null,"This is the plug and pray solution. Pushing the code and expecting it to work as it's enabled for all users. This is a very dangerous strategy as your blast radius is all your users."),(0,n.kt)("h3",{id:"canary-releases"},"Canary Releases"),(0,n.kt)("p",null,"This is a practice that comes from the mining industry, The idea was the next one:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If a canary is in the same place where humans are inside the mine, when there is a problem with the breathable air it will be the first one to perish.")),(0,n.kt)("p",null,"If we translate this to software, the idea is to have deployed the changes only to one or a few servers. With this, we can monitor this canary instances and act if any issue happens, we reduce the blast radius of issues to only the users who go through that server."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/canary.jpeg",alt:null})),(0,n.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Change Failure Rate"))),(0,n.kt)("p",null,"This approach provides us a way to reduce the blast radius from a big bang release. Nevertheless, it does not help us to prevent or act faster upon a bug in our code. "),(0,n.kt)("h3",{id:"feature-flag-releases"},"Feature Flag Releases"),(0,n.kt)("p",null,"To improve upon the canary release strategy, we can move towards feature flags."),(0,n.kt)("p",null,"Feature Flags are hiding our code behind a 'flag' this can help decide if the code is enabled or disabled, as in the next image."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/toggles.jpeg",alt:null})),(0,n.kt)("p",null,"There are a multitude of services, libraries & SDKs that allow you to create flags in your code. They help by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Decouple activation of features from the release pipeline."),(0,n.kt)("li",{parentName:"ul"},"Solving incidents in a matter of seconds."),(0,n.kt)("li",{parentName:"ul"},"Do a controlled rollout. For example:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Enable only for team."),(0,n.kt)("li",{parentName:"ul"},"Enable for X% of the traffic."),(0,n.kt)("li",{parentName:"ul"},"Enable for users in a specific country.")))),(0,n.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Deployment frequency")),(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Mean Time To Recovery")),(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Change Failure Rate"))))}g.isMDXComponent=!0}}]);