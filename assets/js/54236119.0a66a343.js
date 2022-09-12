"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||o;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={date:new Date("2022-09-12T07:28:48.000Z"),draft:!1,title:"Event Storming to split Monolith into Microservices",description:"how can we define what is the scope of a service, event storming is here to help us",authors:["kanekotic"],tags:["api","microservices","programming","architecture"],published:!0,series:"The journey from the monolith to microservices"},r=void 0,s={permalink:"/blog/2022/09/09/event-storming-to-split-the-monolith-into-microservices",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-09-09-event-storming-to-split-the-monolith-into-microservices.md",source:"@site/blog/2022-09-09-event-storming-to-split-the-monolith-into-microservices.md",title:"Event Storming to split Monolith into Microservices",description:"how can we define what is the scope of a service, event storming is here to help us",date:"2022-09-12T07:28:48.000Z",formattedDate:"September 12, 2022",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"microservices",permalink:"/blog/tags/microservices"},{label:"programming",permalink:"/blog/tags/programming"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:4.83,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Engineering Manager @ClimatePartner",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{date:"2022-09-12T07:28:48.000Z",draft:!1,title:"Event Storming to split Monolith into Microservices",description:"how can we define what is the scope of a service, event storming is here to help us",authors:["kanekotic"],tags:["api","microservices","programming","architecture"],published:!0,series:"The journey from the monolith to microservices"},nextItem:{title:"Patterns to avoiding microlithic microservices",permalink:"/blog/2022/09/05/patterns-to-avoiding-microlithic-microservices"}},l={authorsImageUrls:[void 0]},p=[{value:"Event Storming",id:"event-storming",level:2},{value:"Step-By-Step Guide",id:"step-by-step-guide",level:3},{value:"Prepare a board and the people for the session",id:"prepare-a-board-and-the-people-for-the-session",level:4},{value:"Define the <strong>Events</strong> of your system",id:"define-the-events-of-your-system",level:4},{value:"Identify the <strong>Systems</strong> involved (Optional)",id:"identify-the-systems-involved-optional",level:4},{value:"Add the <strong>Actors</strong>",id:"add-the-actors",level:4},{value:"Connect the dots with <strong>Commands</strong>",id:"connect-the-dots-with-commands",level:4},{value:"Define <strong>Bounded Context</strong>",id:"define-bounded-context",level:4},{value:"Create <strong>Capabilities Matrix</strong> (Optional)",id:"create-capabilities-matrix-optional",level:4},{value:"Devise your <strong>Goal Architecture</strong> (Optional)",id:"devise-your-goal-architecture-optional",level:4},{value:"Define a <strong>plan</strong> on how to split the Monolith (Optional)",id:"define-a-plan-on-how-to-split-the-monolith-optional",level:4},{value:"[1] https://www.capitalone.com/tech/software-engineering/event-storming-for-microservice-architecture/",id:"1-httpswwwcapitalonecomtechsoftware-engineeringevent-storming-for-microservice-architecture",level:6}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"On our previous installments, we discussed the smells that can happen when splitting microservices, and the strategies that exist to make them as independent as possible. But how do we define boundaries? How do we define the process that our microservice is in charge off?"),(0,i.kt)("h2",{id:"event-storming"},"Event Storming"),(0,i.kt)("p",null,"Event storming is a technique that is part of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-driven_design"},"DDD"),". But, what is Event storming?, the definition on ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Event_storming",title:"wikipedia"},"Wikipedia")," is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'A workshop-based method to quickly find out what is happening in the domain of a software program. The business process is "stormed out" as a series of domain events.')),(0,i.kt)("p",null,"This process is run with stickies in a physical or digital board during a session, and requires the 'experts' on the process to be present to provide the context what/whom/how. The outcome is an understanding of the ",(0,i.kt)("strong",{parentName:"p"},"business process"),", not the technical one. To be able to separate them into different steps with clear responsibilities."),(0,i.kt)("h3",{id:"step-by-step-guide"},"Step-By-Step Guide"),(0,i.kt)("p",null,"let's do an example of how a company sets up our internet connection"),(0,i.kt)("h4",{id:"prepare-a-board-and-the-people-for-the-session"},"Prepare a board and the people for the session"),(0,i.kt)("p",null,"Event storming requires people to share a common view and brainstorm and discuss on it. This process takes to count time as a dimension. And has multiple types of stickies that can be used.",(0,i.kt)("br",{parentName:"p"}),"\n","You can see an example board on the next image:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/event-storming.png",alt:null})),(0,i.kt)("p",null,"Regarding the Stickies, their color represent a specific meaning","[","1","]",":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Events (orange):")," Represent the factual events and anything that is relevant to a domain expert."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Commands (blue):")," These are requests to do something. They can originate from a user or system or by another event."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"System (pink):")," These represent systems involved in the domain. They may issue commands or receive commands along with triggering events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User (yellow):")," These are human users involved in the process. They may be a single person or a department/team."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Aggregate (tan):")," This is the first level of categorization and can be thought of as the \u201cthing\u201d that a group of events operates on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Read Model (green):")," This represents data that may be critical for a user or system to decide."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Policy (gray):")," These represent standards or rules that may need to be executed, such as rules for a compliance policy.")),(0,i.kt)("h4",{id:"define-the-events-of-your-system"},"Define the ",(0,i.kt)("strong",{parentName:"h4"},"Events")," of your system"),(0,i.kt)("p",null,"Events are the most important information of our board. They represent facts regarding the process and helps encapsulate the knowledge of the 'experts'.",(0,i.kt)("br",{parentName:"p"}),"\n","As we mention before, time is a significant dimension. A process always happens in a period of time. Starting by organizing this 'things' that happen in a timeline is a good way to start.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/event-storming-map-events-drawio.png",alt:null})),(0,i.kt)("p",null,"In our example, you can see on the previous image we go from checking coverage, to creating a user, to creating a contract and connecting our user to the network."),(0,i.kt)("h4",{id:"identify-the-systems-involved-optional"},"Identify the ",(0,i.kt)("strong",{parentName:"h4"},"Systems")," involved (Optional)"),(0,i.kt)("p",null,"The intent of this step is to identify the existing systems and their interdependency. When we discuss systems, they can be internal or external."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/event-storming-map-systems-drawio.png",alt:null})),(0,i.kt)("p",null,"In our example, all starts with the website, but soon enough it becomes apparent most of the process is taken care by the monolith."),(0,i.kt)("p",null,"This step is optional in the case you have a greenfield. Nevertheless, I highly recommend it if you are splitting a monolith."),(0,i.kt)("h4",{id:"add-the-actors"},"Add the ",(0,i.kt)("strong",{parentName:"h4"},"Actors")),(0,i.kt)("p",null,"These are real people who are part of the process, they tend to be the starting point of a chain of events, or even on a manual process we are trying to automate the executors of the individual step."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/event-storming-map-actors-drawio.png",alt:null}),(0,i.kt)("br",{parentName:"p"}),"\n","In our case, the user is the one starting the process, but there needs to be a technician doing the last steps manually."),(0,i.kt)("h4",{id:"connect-the-dots-with-commands"},"Connect the dots with ",(0,i.kt)("strong",{parentName:"h4"},"Commands")),(0,i.kt)("p",null,"Now we are left with events that are done by someone and take effect in parts of our system. But we are missing the cause and effect that made this look this way."),(0,i.kt)("p",null,"Commands allow exactly this, is a specific action or decision that will push our system into a certain direction."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/event-storming-map-commands-drawio.png",alt:null})),(0,i.kt)("p",null,"Commands can be positive or negative actions, causing bifurcation and showing different cases that our system needs to cope with."),(0,i.kt)("h4",{id:"define-bounded-context"},"Define ",(0,i.kt)("strong",{parentName:"h4"},"Bounded Context")),(0,i.kt)("p",null,"now we are left to define where each of the sub-process that conform our system starts and ends. This is done by grouping the stickies with an enclosing and giving a noun + verb to it, as it's a sub-process and it evokes action.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/event-storming-bounded-contexts-drawio.png",alt:null})),(0,i.kt)("p",null,"Now you have a set of split actions that can become their microservices and provide part of the process independently."),(0,i.kt)("h4",{id:"create-capabilities-matrix-optional"},"Create ",(0,i.kt)("strong",{parentName:"h4"},"Capabilities Matrix")," (Optional)"),(0,i.kt)("p",null,"Now, with the bounded context, we can start defining the capabilities of our services. This is straightforward to express in a matrix."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Context"),(0,i.kt)("th",{parentName:"tr",align:null},"Capabilities"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Network Management"),(0,i.kt)("td",{parentName:"tr",align:null},"Check coverage ",(0,i.kt)("br",null)," Enable Network ",(0,i.kt)("br",null)," 3rd party Hardware management integration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User Management"),(0,i.kt)("td",{parentName:"tr",align:null},"Create User ",(0,i.kt)("br",null)," User Email Verification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"contract Management"),(0,i.kt)("td",{parentName:"tr",align:null},"Create Contract ",(0,i.kt)("br",null)," User Email Verification ",(0,i.kt)("br",null)," 3rd party digital signature integration")))),(0,i.kt)("h4",{id:"devise-your-goal-architecture-optional"},"Devise your ",(0,i.kt)("strong",{parentName:"h4"},"Goal Architecture")," (Optional)"),(0,i.kt)("p",null,"Knowing our current architecture, it's good to think where we want to go.",(0,i.kt)("br",{parentName:"p"}),"\n","This is not only a technical challenge, but an organizational challenge due to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Conway%27s_law"},"Conway's law"),". If we would like to be successful in splitting a monolith our communication, meaning the teams structure involved, need to resemble this target state."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/event-storming-goal-architecture-drawio.png",alt:null})),(0,i.kt)("h4",{id:"define-a-plan-on-how-to-split-the-monolith-optional"},"Define a ",(0,i.kt)("strong",{parentName:"h4"},"plan")," on how to split the Monolith (Optional)"),(0,i.kt)("p",null,"A change so big as the one shown on the previous image can be overwhelming for an organization and create a paralysis and doubts. It's always good to split the problem in steps to understand progress and be always on a better state. This will improve morale.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/event-storming-plan-architecture-drawio.png",alt:null})),(0,i.kt)("h6",{id:"1-httpswwwcapitalonecomtechsoftware-engineeringevent-storming-for-microservice-architecture"},"[","1","]"," ",(0,i.kt)("a",{parentName:"h6",href:"https://www.capitalone.com/tech/software-engineering/event-storming-for-microservice-architecture/",title:"https://www.capitalone.com/tech/software-engineering/event-storming-for-microservice-architecture/"},"https://www.capitalone.com/tech/software-engineering/event-storming-for-microservice-architecture/")))}m.isMDXComponent=!0}}]);