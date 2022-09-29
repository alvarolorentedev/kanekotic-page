"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"C# - Fluent Interfaces with Extension Methods",summary:"C# - Fluent Interfaces with Extension Methods",description:"C# - Fluent Interfaces with Extension Methods",date:new Date("2016-01-27T07:56:49.000Z"),tags:["daily","learn"],draft:!1,published:new Date("2030-08-01T22:00:00.000Z")},s=void 0,i={permalink:"/blog/2016/01/27/interface-with-extension-methods",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-01-27-interface-with-extension-methods.md",source:"@site/blog/2016-01-27-interface-with-extension-methods.md",title:"C# - Fluent Interfaces with Extension Methods",description:"C# - Fluent Interfaces with Extension Methods",date:"2016-01-27T07:56:49.000Z",formattedDate:"January 27, 2016",tags:[{label:"daily",permalink:"/blog/tags/daily"},{label:"learn",permalink:"/blog/tags/learn"}],readingTime:.87,hasTruncateMarker:!1,authors:[],frontMatter:{title:"C# - Fluent Interfaces with Extension Methods",summary:"C# - Fluent Interfaces with Extension Methods",description:"C# - Fluent Interfaces with Extension Methods",date:"2016-01-27T07:56:49.000Z",tags:["daily","learn"],draft:!1,published:"2030-08-01T22:00:00.000Z"},prevItem:{title:"C# - Extension methods overlap with linq",permalink:"/blog/2016/01/28/extension-methods-overlap-with-linq"},nextItem:{title:"Coding - C# - Complex Constructors",permalink:"/blog/2016/01/26/c-sharp-complex-constructors"}},l={authorsImageUrls:[]},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I have not experiment to much with fluent interfaces. But is something cool especially to make code that is expressive."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public struct Coordenates\n    {\n        public double X { get; set; }\n        public double Y { get; set; }\n        public double Z { get; set; }\n    }\n\n    public static class CoordenatesExtensions\n    {\n\n        public static Coordenates X(this Coordenates coordenates, double value)\n        {\n            coordenates.X = value;\n            return coordenates;\n        }\n\n        public static Coordenates Y(this Coordenates coordenates, double value)\n        {\n            coordenates.Y = value;\n            return coordenates;\n        }\n        public static Coordenates Z(this Coordenates coordenates, double value)\n        {\n            coordenates.Z = value;\n            return coordenates;\n        }\n    }\n\n    public class Points\n    {\n        private Coordenates point;\n        public Points()\n        {\n            point = new Coordenates().X(2.1).Y(2.4).Z(3.2);\n        }\n    }\n")),(0,o.kt)("p",null,"also can be used with some language properties to make it more expressive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class GeneralExtensions\n{\n    public static T As<T>(this object o) where T : class\n    {\n        return o as T;\n    }\n\n    public static T Cast<T>(this object o)\n    {\n        return (T)o;\n    }\n\n    public static bool Is<T>(this object o)\n    {\n        return o is T;\n    }\n}\n\n")))}p.isMDXComponent=!0}}]);