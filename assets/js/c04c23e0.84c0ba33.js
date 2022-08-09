"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6641:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3},i="Tarant",s={unversionedId:"maintained/tarant",id:"maintained/tarant",title:"Tarant",description:"Join Gitter",source:"@site/docs/maintained/tarant.md",sourceDirName:"maintained",slug:"/maintained/tarant",permalink:"/docs/maintained/tarant",draft:!1,editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/docs/maintained/tarant.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Express Exception Handler",permalink:"/docs/maintained/express-exception-handler"},next:{title:"Web Threads",permalink:"/docs/maintained/web-threads"}},l={},c=[{value:"Features",id:"features",level:2},{value:"Showcase",id:"showcase",level:3},{value:"Quick start",id:"quick-start",level:2},{value:"Contribution PRs Welcome Issues Welcome",id:"contribution-prs-welcome-issues-welcome",level:2},{value:"Github Repo",id:"github-repo",level:2},{value:'Created my free logo at <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a>',id:"created-my-free-logo-at-logomakrcom",level:5}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tarant"},"Tarant"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gitter.im/tarantx/general?utm_source=share-link&utm_medium=link&utm_campaign=share-link"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg",alt:"Join Gitter"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.tarant.io/"},"Tarant")," is a TypeScript/JavaScript library for building software using the actor system model.\nYou can visit the home page for more information and a more complete quick start guide: ",(0,n.kt)("a",{parentName:"p",href:"https://www.tarant.io/"},"https://www.tarant.io/")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actors are easy to reason about"),": An actor is the unit of state and logic of your application.\nThey are transactional, so you don't need to handle state rollbacks in case of errors."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actors improve performance"),": Asynchronous by default, every actor actual communication is non-blocking so slow actors will not block fast actors."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Actors are extensible"),": As actors are built on top of objects, actor classes can be inherited,\ncomposed and injected.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"Tarant implements a rich set of features that makes it suitable for building complex applications."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Actors are reliable because they are transactional. You don't need to bother yourself with error recovery."),(0,n.kt)("li",{parentName:"ul"},"Actors are performant, as they are pull-based and decoupled from other actors lifecycle."),(0,n.kt)("li",{parentName:"ul"},"Actors are easy to debug. All messages come with information about the sender and all the state information is saved\nin a time machine, for further debugging and navigation."),(0,n.kt)("li",{parentName:"ul"},"The Actor System has an event bus. Actors can subscribe, publish and request messages from any topic and subscriptions\ncan be handled at any time."),(0,n.kt)("li",{parentName:"ul"},"The Actor System is highly extensive. You can add your own supervisor and materializers to add new features like\nimplicit persistence or rendering of actors.")),(0,n.kt)("h3",{id:"showcase"},"Showcase"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tarantx/tarant/tree/master/examples/ping-pong.js"},"Actors support asynchronous messaging")," and answering through Promises. Slow actors will not block fast actors."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tarantx/tarant/tree/master/examples/scheduleds.js"},"Actors can schedule tasks")," for interval or one-shot delayed actions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tarantx/tarant/tree/master/examples/supervisor.js"},"Actors are safe and can be recovered with a supervisor"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tarantx/tarant/tree/master/examples/pubsub.js"},"Actors can subscribe in a topic in a type-safe way")," for extensible communication.")),(0,n.kt)("h2",{id:"quick-start"},"Quick start"),(0,n.kt)("p",null,"Creating your first actor system is easy and you don't need to understand everything that is happening under the hood.\nFirst you must install the package:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"npm install tarant --save")),(0,n.kt)("p",null,"Then create your first ActorSystem"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let { Actor, ActorSystem } = require('tarant')\nlet system = ActorSystem.default()\n")),(0,n.kt)("p",null,"And create your actor class:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'class Ping extends Actor {\n    ping() {\n        console.log("PING")\n    }\n}\n')),(0,n.kt)("p",null,"Then you only need to instantiate your actor and send messages to it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let myPinger = system.actorOf(Ping, [])\nmyPinger.ping()\n")),(0,n.kt)("p",null,"The application will continue running and processing messages until you stop the actor system:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"system.free()\n")),(0,n.kt)("p",null,"If you run the application you will see the following output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PING\n")),(0,n.kt)("h2",{id:"contribution-prs-welcome-issues-welcome"},"Contribution ",(0,n.kt)("img",{parentName:"h2",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg",alt:"PRs Welcome"})," ",(0,n.kt)("img",{parentName:"h2",src:"https://img.shields.io/badge/issues-welcome-brightgreen.svg",alt:"Issues Welcome"})),(0,n.kt)("p",null,"PR and issues are always welcome as a quick way of contributing to the project. Remember to be polite, this is a open source\nproject and ordinary requirements for PRs and issues are also a requirement."),(0,n.kt)("p",null,"If you want to be a long-term contributor and participate actively on the design of new features on the project, contact\nus! Check the package.json to see who you need to contact."),(0,n.kt)("h2",{id:"github-repo"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/tarantx"},"Github Repo")),(0,n.kt)("h5",{id:"created-my-free-logo-at-logomakrcom"},"Created my free ",(0,n.kt)("a",{parentName:"h5",href:"https://logomakr.com/43ipOz"},"logo")," at ",(0,n.kt)("a",{href:"http://logomakr.com",title:"Logo Makr"},"LogoMakr.com")))}p.isMDXComponent=!0}}]);