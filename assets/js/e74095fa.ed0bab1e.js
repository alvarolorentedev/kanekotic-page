"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={date:new Date("2022-09-27T19:40:40.000Z"),draft:!1,title:"Delivery Acceleration: Observability",description:"When runing services in production the most important thing is to understand the health of it",authors:["kanekotic"],tags:["softwaredevelopment","programming","devops","productivity"],published:!1,canonical_url:"https://www.kanekotic.com/blog/2022/09/27/delivery-acceleration-observability",cover_image:"https://www.kanekotic.com/img/no_alarms.png",series:"Accelerate Continious Integration & Delivery Practices"},o=void 0,l={permalink:"/blog/2022/09/27/delivery-acceleration-observability",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-09-27-delivery-acceleration-observability.md",source:"@site/blog/2022-09-27-delivery-acceleration-observability.md",title:"Delivery Acceleration: Observability",description:"When runing services in production the most important thing is to understand the health of it",date:"2022-09-27T19:40:40.000Z",formattedDate:"September 27, 2022",tags:[{label:"softwaredevelopment",permalink:"/blog/tags/softwaredevelopment"},{label:"programming",permalink:"/blog/tags/programming"},{label:"devops",permalink:"/blog/tags/devops"},{label:"productivity",permalink:"/blog/tags/productivity"}],readingTime:2.565,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Engineering Manager @ClimatePartner",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{date:"2022-09-27T19:40:40.000Z",draft:!1,title:"Delivery Acceleration: Observability",description:"When runing services in production the most important thing is to understand the health of it",authors:["kanekotic"],tags:["softwaredevelopment","programming","devops","productivity"],published:!1,canonical_url:"https://www.kanekotic.com/blog/2022/09/27/delivery-acceleration-observability",cover_image:"https://www.kanekotic.com/img/no_alarms.png",series:"Accelerate Continious Integration & Delivery Practices"},nextItem:{title:"Delivery Acceleration: DevOps Mentality & Practices",permalink:"/blog/2022/09/25/delivery-acceleration-devops-attitudes"}},s={authorsImageUrls:[void 0]},c=[{value:"Tools",id:"tools",level:2},{value:"Alarms",id:"alarms",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Logs",id:"logs",level:3},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When we talk about observability, we talk about:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Capability of developers to understand the health and status of their application.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/no_alarms.png",alt:null})),(0,r.kt)("p",null,"We don't want users or clients to be the ones noticing something is wrong. For this, there are multiple tools that fall under the observability category."),(0,r.kt)("h2",{id:"tools"},"Tools"),(0,r.kt)("h3",{id:"alarms"},"Alarms"),(0,r.kt)("p",null,"This is the first line of defense against issues, the intent is to get notified if any potential issue arises.",(0,r.kt)("br",{parentName:"p"}),"\n","The intent of this is to provide a notification if any parameter of our application is out of range (ex. to many 5xx)."),(0,r.kt)("p",null,"This allows us to use our mental bandwidth to focus in creating value and not continuously check if the parameters are in range."),(0,r.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Mean Time To Recovery"))),(0,r.kt)("h3",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"As the name says, this is a set of measurements we track from our code, it allows us to understand the health of individual parts of our system."),(0,r.kt)("p",null,"This metrics are shown in dashboards that allow us to visually understand what is happening.  We can divide metrics dashboards in 2 types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status: It will give us a really fast overview of the health of the system."),(0,r.kt)("li",{parentName:"ul"},"Details: It will not tell us what is wrong, but will provide more detailed information to dig deeper into a specific area.")),(0,r.kt)("p",null,"It's important to not mix this 2 together, as they have different purposes. Like with alarms, it helps focus our mental bandwidth in the correct place."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/dashboards.jpeg",alt:null})),(0,r.kt)("p",null,"As you see in the previous image, the left represents a detail dashboard that makes it difficult to know on a single view if there is an issue. For this, as in the image on the right,  we have a status dashboard that in a single glance we can spot where to look next."),(0,r.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Mean Time To Recovery"))),(0,r.kt)("h3",{id:"logs"},"Logs"),(0,r.kt)("p",null,"This is the lower level you want to go. It should tell you where in the code is your issue, so you can go and fix it."),(0,r.kt)("p",null,"When thinking about logging, it is significant not log everything. Due to the added noise that this can bring."),(0,r.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Mean Time To Recovery"))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"let's get practical on how would this work."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/observability-drawio.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implement your service"),(0,r.kt)("li",{parentName:"ul"},"Create metrics and send them to your metrics system (ex. ",(0,r.kt)("a",{parentName:"li",href:"https://www.datadoghq.com/"},"Datadog"),", ",(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana"),")"),(0,r.kt)("li",{parentName:"ul"},"Create logs and send them to your logging system (ex. ",(0,r.kt)("a",{parentName:"li",href:"https://www.datadoghq.com/"},"Datadog"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.elastic.co/kibana/"},"Kibana"),", ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cloudwatch/"},"CloudWatch"),")."),(0,r.kt)("li",{parentName:"ul"},"Create dashboards:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Single Status dashboard. Use only simple boxes with green and red backgrounds that represent in one view the health of your system & subsystems."),(0,r.kt)("li",{parentName:"ul"},"Multiple Detail dashboards. Create a dashboard for each subsystem with as much data as necessary to understand where the issue is, so you can later pinpoint the root cause in your logs."))),(0,r.kt)("li",{parentName:"ul"},"Create alarms based on the status dashboard boxes."),(0,r.kt)("li",{parentName:"ul"},"Connect your notification system (ex. ",(0,r.kt)("a",{parentName:"li",href:"https://www.atlassian.com/software/opsgenie"},"Opsgenie"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.pagerduty.com/"},"PagerDuty"),", ",(0,r.kt)("a",{parentName:"li",href:"https://slack.com/"},"Slack "),"channel) to the created alarms, so you get push notifications as something goes wrong.")))}u.isMDXComponent=!0}}]);