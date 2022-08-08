"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[515],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),g=o,d=f["".concat(c,".").concat(g)]||f[g]||s[g]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:100},l="Feaggle",i={unversionedId:"feaggle",id:"feaggle",title:"Feaggle",description:"You can download the latest image from DockerHub!",source:"@site/docs/feaggle.md",sourceDirName:".",slug:"/feaggle",permalink:"/docs/feaggle",draft:!1,editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/docs/feaggle.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Coin Run",permalink:"/docs/coin-run"},next:{title:"Koteky",permalink:"/docs/koteky"}},c={},p=[{value:"Development",id:"development",level:2},{value:"How to Run feaggle-server locally",id:"how-to-run-feaggle-server-locally",level:3},{value:"Github Repo",id:"github-repo",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"feaggle"},"Feaggle"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.docker.com/repository/docker/kmruiz/feaggle-server"},"You can download the latest image from DockerHub!")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"feaggle-server")," is a dynamic server that allows setting up\nfeature toggles for the ",(0,o.kt)("inlineCode",{parentName:"p"},"feaggle")," library."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("h3",{id:"how-to-run-feaggle-server-locally"},"How to Run feaggle-server locally"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You will need to install docker and docker-compose in your machine.")),(0,o.kt)("p",null,"Start a postgresql instance in your local machine, the easiest way is using the provided\ndocker-compose.yml that is in the root of the project:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up postgres")),(0,o.kt)("p",null,"It will take several minutes if there is no cached image of postgresql, after that, just\nrun the main function with your favourite IDE."),(0,o.kt)("h2",{id:"github-repo"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/feaggle"},"Github Repo")))}s.isMDXComponent=!0}}]);