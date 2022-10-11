"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7836],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,r(r({ref:e},c),{},{components:n})):a.createElement(h,r({ref:e},c))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5719:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={title:"Commiting Like a Pro in NodeJs: The hooks",description:"Using git hooks to make sure your commits do what you expect",authors:"kanekotic",tags:["agile","webdev","programming","productivity"],draft:!1,published:new Date("2022-08-07T22:00:00.000Z"),series:"commiting Like a Pro in NodeJs",canonical_url:"https://www.kanekotic.com/blog/2022/08/08/commiting-like-pro-part-1"},r=void 0,l={permalink:"/blog/2022/08/08/commiting-like-pro-part-1",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-08-commiting-like-pro-part-1.md",source:"@site/blog/2022-08-08-commiting-like-pro-part-1.md",title:"Commiting Like a Pro in NodeJs: The hooks",description:"Using git hooks to make sure your commits do what you expect",date:"2022-08-08T00:00:00.000Z",formattedDate:"August 8, 2022",tags:[{label:"agile",permalink:"/blog/tags/agile"},{label:"webdev",permalink:"/blog/tags/webdev"},{label:"programming",permalink:"/blog/tags/programming"},{label:"productivity",permalink:"/blog/tags/productivity"}],readingTime:2.13,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Engineering Manager @ClimatePartner",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{title:"Commiting Like a Pro in NodeJs: The hooks",description:"Using git hooks to make sure your commits do what you expect",authors:"kanekotic",tags:["agile","webdev","programming","productivity"],draft:!1,published:"2022-08-07T22:00:00.000Z",series:"commiting Like a Pro in NodeJs",canonical_url:"https://www.kanekotic.com/blog/2022/08/08/commiting-like-pro-part-1"},prevItem:{title:"Commiting Like a Pro in NodeJs: The Message",permalink:"/blog/2022/08/09/commiting-like-pro-part-2"},nextItem:{title:"Stop doing PR's inside the Office",permalink:"/blog/2022/08/08/stop-prs"}},s={authorsImageUrls:[void 0]},p=[{value:"What &amp; Why Git hooks?",id:"what--why-git-hooks",level:2},{value:"How to Start",id:"how-to-start",level:2},{value:"Add Husky",id:"add-husky",level:3},{value:"Add lint-staged",id:"add-lint-staged",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what--why-git-hooks"},"What & Why Git hooks?"),(0,o.kt)("p",null,"Git hooks are scripts that Git executes locally before or after events such as commit, push, and receive."),(0,o.kt)("p",null,"These hooks are completely programmable trough bash scripting. Examples of what can be done:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pre-commit: Enforce project coding standards."),(0,o.kt)("li",{parentName:"ul"},"pre-push: Run tests.")),(0,o.kt)("p",null,"This allows us to make sure we are committing the correct things at the correct time. Not breaking our code just because of the mental load of doing things as a manual process that can be forgotten."),(0,o.kt)("h2",{id:"how-to-start"},"How to Start"),(0,o.kt)("h3",{id:"add-husky"},"Add Husky"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky/#/"},"Husky")," is a tool that allows Git hooks using JavaScript configured using individual files for hooks in a ",(0,o.kt)("inlineCode",{parentName:"p"},".husky/")," directory."),(0,o.kt)("p",null,"The fastest way to install husky is by using ",(0,o.kt)("inlineCode",{parentName:"p"},"husky-init"),", a one-time command to quickly initialize a project with husky:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx husky-init && npm install       # npm\nnpx husky-init && yarn              # Yarn 1\nyarn dlx husky-init --yarn2 && yarn # Yarn 2+\npnpm dlx husky-init && pnpm install # pnpm\n")),(0,o.kt)("p",null,"It will set up husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run test when you commit."),(0,o.kt)("p",null,"To add another hook, use ",(0,o.kt)("inlineCode",{parentName:"p"},"husky add"),"."),(0,o.kt)("p",null,"If you are not comfortable using  ",(0,o.kt)("inlineCode",{parentName:"p"},"husky-init")," you can find other options ",(0,o.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky/#/?id=manual"},"here"),"."),(0,o.kt)("h3",{id:"add-lint-staged"},"Add lint-staged"),(0,o.kt)("p",null,"Husky is very useful, but it will run natively to git and not focus the commands in our bash scripts for all the files, not only the ones we want to commit."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged"},"Lint Staged")," appear to resolve this problem. It allows you to run the process against staged git files that match a pattern."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://asciinema.org/a/199934"},(0,o.kt)("img",{parentName:"a",src:"https://asciinema.org/a/199934.svg",alt:"asciicast"}))),(0,o.kt)("p",null,"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"lint-staged")," by adding it to your local project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install lint-staged --save-dev\nyarn add lint-staged -D \n")),(0,o.kt)("p",null,"In your package.json add it as a script(",(0,o.kt)("inlineCode",{parentName:"p"},'"lint-staged": "lint-staged",'),") and refer it through a ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit")," hook. If using Husky, this can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},".husky/pre-commit")," with the next content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nyarn lint-staged\n')),(0,o.kt)("p",null,"There are multiple ways to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged#configuration"},"configure lint-staged"),". One of them is having a ",(0,o.kt)("inlineCode",{parentName:"p"},"lint-staged.config.js")," file in your project root folder. In this file, you can express what process you want to run for what types of files. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  '*.{ts,tsx}': [() => 'yarn tsc:check', 'yarn format', 'yarn lint:fix', 'yarn test', 'git add .'],\n};\n")),(0,o.kt)("p",null,"The previous snipped runs the compiler check, formatting, linting and test before adding the fixed staged files to the current commit."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"With this two tools, we will now be pushing code that will pass similar checks than our CI/CD system."))}u.isMDXComponent=!0}}]);