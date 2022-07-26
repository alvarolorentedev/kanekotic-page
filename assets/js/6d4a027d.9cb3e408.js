"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,b=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"C# - Path.Combine",summary:"C# - Path.Combine",description:"C# - Path.Combine",date:new Date("2016-02-04T07:56:49.000Z"),tags:["daily","learn"],draft:!1,published:!1},i=void 0,l={permalink:"/blog/2016/02/04/csharp-path-combine",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-02-04-csharp-path-combine.md",source:"@site/blog/2016-02-04-csharp-path-combine.md",title:"C# - Path.Combine",description:"C# - Path.Combine",date:"2016-02-04T07:56:49.000Z",formattedDate:"February 4, 2016",tags:[{label:"daily",permalink:"/blog/tags/daily"},{label:"learn",permalink:"/blog/tags/learn"}],readingTime:.195,hasTruncateMarker:!1,authors:[],frontMatter:{title:"C# - Path.Combine",summary:"C# - Path.Combine",description:"C# - Path.Combine",date:"2016-02-04T07:56:49.000Z",tags:["daily","learn"],draft:!1,published:!1},prevItem:{title:"Unit Test CheatSheet",permalink:"/blog/2016/03/02/unit-test-cheatsheet"},nextItem:{title:"C# - Paths to system folders",permalink:"/blog/2016/01/29/csharp-path-to-system-folders"}},p={authorsImageUrls:[]},c=[],s={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When using path.Combine if the second argument starts with a /. the first path is ignored and will give a path based on the C: drive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var path = Path.Combine(firstpath,$@"\\myfolder\\myfile.txt");\n')),(0,a.kt)("p",null,"will not return <firstpath\\myfolder\\myfile.txt> will return <C:","\\","\\myfolder\\myfile.txt>."))}m.isMDXComponent=!0}}]);