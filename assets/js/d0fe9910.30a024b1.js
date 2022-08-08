"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:6},o="Any Prebuilt",l={unversionedId:"any-prebuilt",id:"any-prebuilt",title:"Any Prebuilt",description:"logomakr_3dkn9b",source:"@site/docs/any-prebuilt.md",sourceDirName:".",slug:"/any-prebuilt",permalink:"/docs/any-prebuilt",draft:!1,editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/docs/any-prebuilt.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"TelloJS",permalink:"/docs/tellojs"},next:{title:"Array Peek",permalink:"/docs/array-peek"}},p={},s=[{value:"Special thanks",id:"special-thanks",level:3},{value:"Github Repo",id:"github-repo",level:2},{value:"Logo",id:"logo",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"any-prebuilt"},"Any Prebuilt"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/3071208/22477192/c7ce1d86-e7aa-11e6-87de-c24336e1ea3e.png",alt:"logomakr_3dkn9b"})),(0,a.kt)("h1",{id:"mission"},"Mission"),(0,a.kt)("p",null,"Easy generation or integration of prebuilt packages. It helps fetchs prebuilt binaries from github releases."),(0,a.kt)("h1",{id:"generate-a-prebuilt-package"},"Generate a prebuilt package"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create new project")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm init\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add this package as dependency")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install any-prebuilt --save\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("inlineCode",{parentName:"li"},"postinstall.js")," file with content:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"require('any-prebuilt').install(require('./package.json').prebuilt)\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("inlineCode",{parentName:"li"},"index.js")," file with content:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var anyPrebuilt = require('any-prebuilt')\nanyPrebuilt.initialize(__dirname, require('./package.json').prebuilt)\nmodule.exports.path = anyPrebuilt.path\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," add a prebuilt element (you can also add this to any other file that provides a jason object to both index and postinstall.js).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "prebuilt": {\n    "arch": <string>, // Target architecture (supported: `ia32` / `x64`. Default value: machine\'s architecture)\n    "platform": <string>, //Target platform (supported: `win` / `osx` / `linux`. Default value: machine\'s platform)\n    "version": <string>, //Target version (format: `vX.Y.Z`. Default value: latest)\n    "targetDir": <string>, //Target directory (where to install the binaries. Default value: `./bin`)\n    "targetBin": <string>, //Target binary (the precompiled binary to be required in node. No default value)\n    "version": <string>, //Target version (format: `vX.Y.Z`. Default value: latest)\n    "user": <string>, // user or Organization (format: string. Is `required`)\n    "repo": <string>, //Origin repo (format: string. Is `required`)\n    "token": <string> //Github token (format: string. `required` if private repo)\n  }\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"In your ",(0,a.kt)("inlineCode",{parentName:"li"},"package .json")," add the next script:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"scripts": {\n    "postinstall": "node postinstall.js"\n  }\n')),(0,a.kt)("p",null,"As seen before this can be configured using a json object but also can be configured or overrided using the next enviroment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"PREBUILT_ARCH"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PREBUILT_PLATFORM"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PREBUILT_VERSION"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PREBUILT_BINARY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PREBUILT_TOKEN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PREBUILT_REPO"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PREBUILT_USER")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PREBUILT_TARGET_DIR")," environment variables."),(0,a.kt)("h3",{id:"special-thanks"},"Special thanks"),(0,a.kt)("p",null,"to all the contributors to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ivshti/wcjs-prebuilt"},"wcjs-prebuilt")," that this package is based on."),(0,a.kt)("h2",{id:"github-repo"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kanekotic/any-prebuilt"},"Github Repo")),(0,a.kt)("h3",{id:"logo"},"Logo"),(0,a.kt)("p",null,"Hours graphic by ",(0,a.kt)("a",{href:"http://www.flaticon.com/authors/freepik"},"Freepik")," from ",(0,a.kt)("a",{href:"http://www.flaticon.com/"},"Flaticon")," is licensed under ",(0,a.kt)("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC BY 3.0"),". Made with ",(0,a.kt)("a",{href:"http://logomakr.com",title:"Logo Maker"},"Logo Maker")))}c.isMDXComponent=!0}}]);