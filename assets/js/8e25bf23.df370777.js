"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(r),d=a,h=g["".concat(s,".").concat(d)]||g[d]||c[d]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"Create your User/Organization GitHub Page with Hugo + Travis",summary:"Create your User/Organization GitHub Page with Hugo + Travis",description:"Create your User/Organization GitHub Page with Hugo + Travis",date:new Date("2018-07-04T06:35:42.000Z"),tags:["ci","cd","versioning","travis","travisci","github"],draft:!1,published:new Date("2030-08-01T22:00:00.000Z")},o=void 0,l={permalink:"/blog/2018/07/04/deploy-hugo-with-travis",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2018-07-04-deploy-hugo-with-travis.md",source:"@site/blog/2018-07-04-deploy-hugo-with-travis.md",title:"Create your User/Organization GitHub Page with Hugo + Travis",description:"Create your User/Organization GitHub Page with Hugo + Travis",date:"2018-07-04T06:35:42.000Z",formattedDate:"July 4, 2018",tags:[{label:"ci",permalink:"/blog/tags/ci"},{label:"cd",permalink:"/blog/tags/cd"},{label:"versioning",permalink:"/blog/tags/versioning"},{label:"travis",permalink:"/blog/tags/travis"},{label:"travisci",permalink:"/blog/tags/travisci"},{label:"github",permalink:"/blog/tags/github"}],readingTime:1.875,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Create your User/Organization GitHub Page with Hugo + Travis",summary:"Create your User/Organization GitHub Page with Hugo + Travis",description:"Create your User/Organization GitHub Page with Hugo + Travis",date:"2018-07-04T06:35:42.000Z",tags:["ci","cd","versioning","travis","travisci","github"],draft:!1,published:"2030-08-01T22:00:00.000Z"},prevItem:{title:"Update your npm package dependencies and release with Travis",permalink:"/blog/2018/07/11/travis-ci-update-npm-package-dependencies-and-release"},nextItem:{title:"C# - Extension methods overlap with linq",permalink:"/blog/2016/01/28/extension-methods-overlap-with-linq"}},s={authorsImageUrls:[]},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I have just finished migrating my static blog from Hexo to Hugo and one of the main things I care about is to be able to do continuous deployment of my profile and blog. There are quite a few blog posts out there but they are based on using shell scripts and it really becomes a pain to give permissions etc. In the next few lines you will see the simplest way I have found to do this (and is currently as this blog post is being published)."),(0,a.kt)("p",null,"You will need to have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Github account."),(0,a.kt)("li",{parentName:"ul"},"A Travis CI account."),(0,a.kt)("li",{parentName:"ul"},"A Github repository with source code of your web page with Hugo (*1)"),(0,a.kt)("li",{parentName:"ul"},"A Github repository with the name ",(0,a.kt)("inlineCode",{parentName:"li"},"<your User or Organization>.github.com")," (ex. kanekotic.github.com) (*2)."),(0,a.kt)("li",{parentName:"ul"},"A developer token from GitHub with commit capabilities (can create in github ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings -> Developer Settings -> Personal Access Token -> Generate New Token")," )")),(0,a.kt)("p",null,"I wont cover how to create a Hugo web page as this is best explained in the ",(0,a.kt)("a",{parentName:"p",href:"https://gohugo.io/getting-started/quick-start/"},"quick start"),") of Hugo."),(0,a.kt)("p",null,"After you are happy with the content of your blog in the repository of source code (*1), and want to start deploying you will need to add a ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," with the next content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"sudo: true\ndist: trusty\n\ninstall:\n  - sudo apt-get --yes install snapd\n  - sudo snap install hugo\n\nscript:\n  - /snap/bin/hugo \n\ndeploy:\n  provider: pages\n  local-dir: public\n  repo: <User or Organization>/<User or Organization>.github.com\n  target-branch: master\n  skip-cleanup: true\n  github-token: $GITHUB_TOKEN\n  committer-from-gh: true\n  keep-history: true\n  on:\n    branch: master\n")),(0,a.kt)("p",null,"you will have to change the repo content to match your destination repository (*2). The previous code what does is installs hugo in the deployment machine, builds your web page and deploys using the pages plugin. If you have a custom domain make sure to set the property ",(0,a.kt)("inlineCode",{parentName:"p"},"fqdn")," to your domain, if not you will overwrite this field in each commit."),(0,a.kt)("p",null,"After adding the file you will have to go to Travis web page and toggle your code repository (*1) got to ",(0,a.kt)("inlineCode",{parentName:"p"},"More Options -> Settings -> Environment Variables")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," as the token retrieved from github."),(0,a.kt)("p",null,"After this in any commit in the master branch of your web page you will get it deployed and go live."))}c.isMDXComponent=!0}}]);