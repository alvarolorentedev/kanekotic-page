"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={authors:"kanekotic",draft:!1,title:"Delivery Acceleration: Version Control Integration Strategy",description:"How do you integrate code in the team matters, it will directly affect the rest of your architecture and practices like we have seen in previous chapters",tags:["productivity","devops","programming","softwaredevelopment"],published:new Date("2022-10-31T00:00:00.000Z"),canonical_url:"https://www.kanekotic.com/blog/2022/10/12/delivery-acceleration-version-control-integration-strategy",cover_image:"https://www.kanekotic.com/img/trunk.png",series:"Accelerate Continious Integration & Delivery Practices"},i=void 0,l={permalink:"/blog/2022/10/12/delivery-acceleration-version-control-integration-strategy",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-10-12-delivery-acceleration-version-control-integration-strategy.md",source:"@site/blog/2022-10-12-delivery-acceleration-version-control-integration-strategy.md",title:"Delivery Acceleration: Version Control Integration Strategy",description:"How do you integrate code in the team matters, it will directly affect the rest of your architecture and practices like we have seen in previous chapters",date:"2022-10-12T00:00:00.000Z",formattedDate:"October 12, 2022",tags:[{label:"productivity",permalink:"/blog/tags/productivity"},{label:"devops",permalink:"/blog/tags/devops"},{label:"programming",permalink:"/blog/tags/programming"},{label:"softwaredevelopment",permalink:"/blog/tags/softwaredevelopment"}],readingTime:2.54,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{authors:"kanekotic",draft:!1,title:"Delivery Acceleration: Version Control Integration Strategy",description:"How do you integrate code in the team matters, it will directly affect the rest of your architecture and practices like we have seen in previous chapters",tags:["productivity","devops","programming","softwaredevelopment"],published:"2022-10-31T00:00:00.000Z",canonical_url:"https://www.kanekotic.com/blog/2022/10/12/delivery-acceleration-version-control-integration-strategy",cover_image:"https://www.kanekotic.com/img/trunk.png",series:"Accelerate Continious Integration & Delivery Practices"},prevItem:{title:"Delivery Acceleration: Parallel Changes Strategy",permalink:"/blog/2022/10/14/delivery-acceleration-parallel-changes-strategy"},nextItem:{title:"Delivery Acceleration: Testing & Validation",permalink:"/blog/2022/10/11/delivery-acceleration-testing-validation"}},s={authorsImageUrls:[void 0]},c=[{value:"Gitflow: The Bad &amp; The Ugly",id:"gitflow-the-bad--the-ugly",level:2},{value:"Trunk-Based Development: The Good",id:"trunk-based-development-the-good",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I have already written some ",(0,n.kt)("a",{parentName:"p",href:"https://www.kanekotic.com/blog/2022/08/08/stop-prs"},"other post")," on this topic. I will go straight to the point on comparing Git Flow (a ",(0,n.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"},"legacy strategy")," that most companies use) and Trunk-Based Development."),(0,n.kt)("h2",{id:"gitflow-the-bad--the-ugly"},"Gitflow: The Bad & The Ugly"),(0,n.kt)("p",null,"Why do I call it the bad and the ugly? Because it does not allow you to achieve Continuous Deployment.",(0,n.kt)("br",{parentName:"p"}),"\n","The idea is that every developer works isolated on their branch, validate on their branch and ask through a merge request to add their code to the X stage branch."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/gitflow-diagram-768x973.png",alt:null}),(0,n.kt)("br",{parentName:"p"}),"\n","There are multiple issues with this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code does not exist isolated, we don't deploy isolated code, so the isolated test is not valid as it will require retesting."),(0,n.kt)("li",{parentName:"ul"},"The peer review process happens at the end, causing a very slow feedback loop. Having to rewrite code that could be avoided."),(0,n.kt)("li",{parentName:"ul"},"The more time the branch lives, the more it diverges from the original behavior and the more complex it is to merge."),(0,n.kt)("li",{parentName:"ul"},"Merging can cause complex conflicts that require revalidation, and it might have side effect in other features. "),(0,n.kt)("li",{parentName:"ul"},"As there needs to be validations of the merges, it's normal to have multiple environments that give a false sense of security, increases the $ cost and increases the lead time."),(0,n.kt)("li",{parentName:"ul"},"Egos and preferences become part of the review process, as it has become an 'accepted' practice that the 'experts' or 'leads' do the reviews.")),(0,n.kt)("p",null,"All of this is red tape to go through is a problem that makes delivery slower, and create a lack of ownership mentality farther away from what happen to the individual branch."),(0,n.kt)("p",null,"This affects mostly negatively, most of DORA 4 metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u274c ",(0,n.kt)("strong",{parentName:"li"},"Deployment frequency")),(0,n.kt)("li",{parentName:"ul"},"\u274c ",(0,n.kt)("strong",{parentName:"li"},"Lead Time for change")),(0,n.kt)("li",{parentName:"ul"},"\u274c ",(0,n.kt)("strong",{parentName:"li"},"Mean Time To Recovery"))),(0,n.kt)("p",null,"Is there a simpler and better way to collaborate on code way?"),(0,n.kt)("h2",{id:"trunk-based-development-the-good"},"Trunk-Based Development: The Good"),(0,n.kt)("p",null,"What happens if we all commit to the same branch."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/trunk.png",alt:null})),(0,n.kt)("p",null,"Most of the expressed issues are solved, in this scenario by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code is never isolated, as we all push code to the same place."),(0,n.kt)("li",{parentName:"ul"},"Teams that do this practices also practice pair programming, making the peer review process is continuous and synchronous."),(0,n.kt)("li",{parentName:"ul"},"As individuals push multiple times a day, merge conflicts are non-existent or small."),(0,n.kt)("li",{parentName:"ul"},"Does not require revalidation, as validation is a continuous stream in the single environment."),(0,n.kt)("li",{parentName:"ul"},"No ego environment tent to appear as there is no centralize approver of code, so it's not a matter of preference but a team effort and ownership.")),(0,n.kt)("p",null,"As we have seen before, having unfinished code does not need to affect users, as it is common practice to use feature flags and/or branching by abstraction."),(0,n.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Deployment frequency")),(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Lead Time for change")),(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Mean Time To Recovery"))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Simplicity is king. Having a simpler structure enables speed and quality of delivery, as it allow teams to work closely, take shared ownership and act faster related to a smaller change."))}u.isMDXComponent=!0}}]);