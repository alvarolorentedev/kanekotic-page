"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7630],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:25},o="ELK Docker",l={unversionedId:"maintained/ELK-Docker",id:"maintained/ELK-Docker",title:"ELK Docker",description:"This show how multiple containers can aggregate log to logging infrastructure with docker compose using logstash, elastic search and kibana",source:"@site/docs/maintained/ELK-Docker.md",sourceDirName:"maintained",slug:"/maintained/ELK-Docker",permalink:"/docs/maintained/ELK-Docker",draft:!1,editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/docs/maintained/ELK-Docker.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"OAuth Electron",permalink:"/docs/maintained/oauth-electron"},next:{title:"Dynamy CLI",permalink:"/docs/maintained/dynamo-cli"}},c={},s=[{value:"Run",id:"run",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Backlog",id:"backlog",level:2},{value:"References &amp; further readings",id:"references--further-readings",level:2},{value:"Github Repo",id:"github-repo",level:2},{value:"Logo",id:"logo",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"elk-docker"},"ELK Docker"),(0,n.kt)("h1",{id:"logomakr_5axvtc"},(0,n.kt)("img",{parentName:"h1",src:"https://user-images.githubusercontent.com/3071208/41837679-81e03624-785e-11e8-841c-4bd25a61b5cd.png",alt:"logomakr_5axvtc"})),(0,n.kt)("p",null,"This show how multiple containers can aggregate log to logging infrastructure with docker compose using logstash, elastic search and kibana"),(0,n.kt)("h2",{id:"run"},"Run"),(0,n.kt)("p",null,"you will need docker installed in your computer, after it :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-zsh"},"docker-compose up\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"run to get some logs from httpd")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-zsh"},"repeat 10 curl http://localhost:80/ \n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Kibana:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"this might take a bit"),(0,n.kt)("li",{parentName:"ul"},"Navigate to http://localhost:5601 "),(0,n.kt)("li",{parentName:"ul"},"Add logstash-* as index with @timestamp as Time-field name"),(0,n.kt)("li",{parentName:"ul"},"Go to Discover "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Grafana:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Navigate to http://localhost:3000 "),(0,n.kt)("li",{parentName:"ul"},"username and password are admin"),(0,n.kt)("li",{parentName:"ul"},"Navigate and create dashboards")))),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"the target architecture would be to allow gathering information from applications but also sync with hadoop to enable having a data lake to improve analytics, and pull directly from google analytics to logstash."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3071208/41893258-66e86d6a-791b-11e8-9e2a-929c723b9f44.png",alt:"image"})),(0,n.kt)("p",null,"(current architecture is missing google analytics and hadoop as seen in TODO list)"),(0,n.kt)("h2",{id:"backlog"},"Backlog"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add kibana container"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add Grafana container visualization"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add elasticsearch container"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add logstash container and configuration"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add aplication containers"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add dashboard as code for grafana"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add import fron google analytics through logstash and http_poller"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add hadoop infrastructure for data analytics extension")),(0,n.kt)("h2",{id:"references--further-readings"},"References & further readings"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.fluentd.org/v0.12/articles/docker-logging-efk-compose"},"docker logging article")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/eunomie/e7a183602b8734c47058d277700fdc2d"},"gist eunomie")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/logstash/current/plugins-inputs-http_poller.html"},"http poller")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.elastic.co/products/hadoop"},"hadoop elastic search")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.treasuredata.com/blog/2015/08/31/hadoop-vs-elasticsearch-for-advanced-analytics/"},"hadoop vs elastic search"))),(0,n.kt)("h2",{id:"github-repo"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/kanekotic/ELK-Docker"},"Github Repo")),(0,n.kt)("h3",{id:"logo"},"Logo"),(0,n.kt)("p",null,"Check out the new logo that I created on ",(0,n.kt)("a",{href:"http://logomakr.com",title:"Logo Makr"},"LogoMakr.com")," ",(0,n.kt)("a",{parentName:"p",href:"https://logomakr.com/5axvTc"},"https://logomakr.com/5axvTc")))}u.isMDXComponent=!0}}]);