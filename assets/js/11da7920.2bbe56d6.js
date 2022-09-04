"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5673],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(a),m=l,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return a?n.createElement(d,r(r({ref:t},p),{},{components:a})):n.createElement(d,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const o={sidebar_position:10},r="Scala Local Toggle",i={unversionedId:"maintained/scala-local-toggle",id:"maintained/scala-local-toggle",title:"Scala Local Toggle",description:"logomakr_6etktj",source:"@site/docs/maintained/scala-local-toggle.md",sourceDirName:"maintained",slug:"/maintained/scala-local-toggle",permalink:"/docs/maintained/scala-local-toggle",draft:!1,editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/docs/maintained/scala-local-toggle.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Raw Guid Converter",permalink:"/docs/maintained/raw-guid-converter"},next:{title:"Runtastic Unofficial API",permalink:"/docs/maintained/runtastic-unofficial-api"}},c={},s=[{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"Github Repo",id:"github-repo",level:2},{value:"LOGO",id:"logo",level:5}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scala-local-toggle"},"Scala Local Toggle"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3071208/32364786-318debc0-c077-11e7-9064-a65d6ce35cf6.png",alt:"logomakr_6etktj"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://travis-ci.org/kanekotic/scala-local-toggle"},(0,l.kt)("img",{parentName:"a",src:"https://travis-ci.org/kanekotic/scala-local-toggle.svg?branch=master",alt:"Build Status"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/com.github.kanekotic/scala-local-toggle_2.12/badge.svg?style=flat"},(0,l.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/com.github.kanekotic/scala-local-toggle_2.12/badge.svg?style=flat",alt:"Maven Status"}))),(0,l.kt)("p",null,"feature toggle by configuration file for scala applications"),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'//Use version in badge\nlibraryDependencies += "com.github.kanekotic" %% "scala-local-toggle" % <version>\n')),(0,l.kt)("h2",{id:"use"},"Use"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Instantiate can be done by newing the class, it can also be register in guice or dependency injection frameworks.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"  val toggle = new ToggleManager();\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"use default files for loading configuration, it will try to load toggles from the following (first-listed are higher priority):")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"system properties"),(0,l.kt)("li",{parentName:"ul"},"application.conf (all resources on classpath with this name)"),(0,l.kt)("li",{parentName:"ul"},"application.json (all resources on classpath with this name)"),(0,l.kt)("li",{parentName:"ul"},"application.properties (all resources on classpath with this name)"),(0,l.kt)("li",{parentName:"ul"},"reference.conf (all resources on classpath with this name)")),(0,l.kt)("p",null,"this files will require to have an setting for the toggles HOCON or JSON complient configuration similar to this, in any other case toggles will default to false:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'feature.local.toggles: [\n    {\n      "name": "NAME_OF_YOUR_TOGGLE",\n      "local": true\n      "development": true\n      "production": false\n    }, \n    {\n      "name": "NAME_OF_OTHER_YOUR_TOGGLE",\n      "local": true\n      "development": false\n      "production": false\n    }\n  ]\n')),(0,l.kt)("p",null,"the boolean denotes the state of the toggle depending on the environment, and the name is the identifying the value of the environment variable:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"local maps to environment variable value LOCAL."),(0,l.kt)("li",{parentName:"ul"},"development maps to environment variable value DEVELOPMENT."),(0,l.kt)("li",{parentName:"ul"},"production maps to environment variable value PRODUCTION.")),(0,l.kt)("p",null,"aditionally the enviroment variable that will be track to know the current environment of execution can be modified by"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'  feature.local.environment: "SOME_ENVIROMENT_VARIABLE_NAME"\n  #Defaults to ENVIRONMENT \n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Use with the name identifier defined in the previous step")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'  if (toggle.isEnabled("NAME_OF_YOUR_TOGGLE")) {\n    //your code under toggle here\n  }\n')),(0,l.kt)("h2",{id:"github-repo"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kanekotic/scala-local-toggle"},"Github Repo")),(0,l.kt)("h5",{id:"logo"},"LOGO"),(0,l.kt)("p",null,"Check out the new logo that I created on ",(0,l.kt)("a",{href:"http://logomakr.com",title:"Logo Makr"},"LogoMakr.com")," ",(0,l.kt)("a",{parentName:"p",href:"https://logomakr.com/6ETKtj"},"https://logomakr.com/6ETKtj")))}u.isMDXComponent=!0}}]);