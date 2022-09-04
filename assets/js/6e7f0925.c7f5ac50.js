"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7323],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=m(n),d=r,c=k["".concat(p,".").concat(d)]||k[d]||s[d]||i;return n?a.createElement(c,l(l({ref:e},u),{},{components:n})):a.createElement(c,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4692:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10},l="Flow Runtime Faker",o={unversionedId:"maintained/flow-runtime-faker",id:"maintained/flow-runtime-faker",title:"Flow Runtime Faker",description:"logo",source:"@site/docs/maintained/flow-runtime-faker.md",sourceDirName:"maintained",slug:"/maintained/flow-runtime-faker",permalink:"/docs/maintained/flow-runtime-faker",draft:!1,editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/docs/maintained/flow-runtime-faker.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Array Peek",permalink:"/docs/maintained/array-peek"},next:{title:"Raw Guid Converter",permalink:"/docs/maintained/raw-guid-converter"}},p={},m=[{value:"Motivation",id:"motivation",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Support",id:"support",level:2},{value:"Github Repo",id:"github-repo",level:2}],u={toc:m};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flow-runtime-faker"},"Flow Runtime Faker"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3071208/48891796-a7796780-ee3c-11e8-93a0-69b06f1a1198.png",alt:"logo"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://travis-ci.org/kanekotic/flow-runtime-faker"},(0,r.kt)("img",{parentName:"a",src:"https://travis-ci.org/kanekotic/flow-runtime-faker.svg?branch=master",alt:"Build Status"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://coveralls.io/github/kanekotic/flow-runtime-faker?branch=master"},(0,r.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/kanekotic/flow-runtime-faker/badge.svg?branch=master",alt:"Coverage Status"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kanekotic/flow-runtime-faker"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dt/flow-runtime-faker.svg",alt:"npm"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kanekotic/flow-runtime-faker/blob/master/LICENSE"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/kanekotic/flow-runtime-faker.svg",alt:"GitHub license"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://GitHub.com/kanekotic/flow-runtime-faker/graphs/commit-activity"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Maintained%3F-yes-green.svg",alt:"Maintenance"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.paypal.me/kanekotic/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Donate-PayPal-green.svg",alt:"Donate"}))),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Type definitions in javascript can help adding type safety for classes. But should not make more complicated property based testing. This package aims to generate random objects based on their flow definitions "),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn add flow-runtime-faker -D")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install flow-runtime-faker --save-dev")),(0,r.kt)("p",null,"if you use only ",(0,r.kt)("inlineCode",{parentName:"p"},"flow")," and not ",(0,r.kt)("inlineCode",{parentName:"p"},"flow-runtime"),". You can use this plugin by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn add flow-runtime babel-plugin-flow-runtime -D")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install flow-runtime babel-plugin-flow-runtime --save-dev"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add the next configuration for tests phase on your ",(0,r.kt)("inlineCode",{parentName:"p"},".babelrc")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'   {\n   ...\n    "env": {\n       "test": {\n           "plugins": [["flow-runtime", { "assert": false, "annotate": false }]]\n       }\n     }\n   }\n')))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import faker from \'flow-runtime-faker\'\n\ntype otherType {\n    fuz: 42 | 7 | 32 | "Some" | "Some Other" | false\n}\n\ntype myType = {\n    foo: number,\n    bar: number[],\n    daz: string,\n    don: otherType\n}\n\nlet value = fake(test)\n\nconsole.log(value)\n/*\ntype myType = {\n    foo: 10,\n    bar: [1,6.40],\n    daz: "something",\n    don: {\n        fuz: 42\n    }\n}\n*/\n')),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Done?"),(0,r.kt)("th",{parentName:"tr",align:null},"Flow Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric literals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string literals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean literals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"union")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"maybe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"arrays")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"subtypes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"function")))),(0,r.kt)("h2",{id:"github-repo"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/kanekotic/flow-runtime-faker"},"Github Repo")))}s.isMDXComponent=!0}}]);