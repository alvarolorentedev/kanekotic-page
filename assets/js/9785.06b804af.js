(self.webpackChunk=self.webpackChunk||[]).push([[9785],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||r;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4881:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7294),a=n(5999),r=n(5281),c=n(7462),l=n(6010);const i={iconEdit:"iconEdit_Z9Sw"};function s(e){let{className:t,...n}=e;return o.createElement("svg",(0,c.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(i.iconEdit,t),"aria-hidden":"true"},n),o.createElement("g",null,o.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){let{editUrl:t}=e;return o.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},o.createElement(s,null),o.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7462),a=n(7294),r=n(6010),c=n(5999),l=n(6668),i=n(9960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:m}}=(0,l.L)();if("h1"===t||!n)return a.createElement(t,(0,o.Z)({},u,{id:void 0}));const d=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return a.createElement(t,(0,o.Z)({},u,{className:(0,r.Z)("anchor",m?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,u.className),id:n}),u.children,a.createElement(i.Z,{className:"hash-link",to:`#${n}`,"aria-label":d,title:d},"\u200b"))}},1506:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ye});var o=n(7294),a=n(3905),r=n(7462),c=n(5742);var l=n(2389),i=n(6010),s=n(2949),u=n(6668);function m(){const{prism:e}=(0,u.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var d=n(5281),p=n(7594),f=n.n(p);const g=/title=(?<quote>["'])(?<title>.*?)\1/,h=/\{(?<range>[\d,-]+)\}/,y={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function b(e,t){const n=e.map((e=>{const{start:n,end:o}=y[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:a,metastring:r}=t;if(r&&h.test(r)){const e=r.match(h).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,o=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);default:return b(Object.keys(y),t)}}(o,a),l=n.split("\n"),i=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<l.length;){const e=l[p].match(c);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${p},`:u[t]?i[u[t]].start=p:m[t]&&(i[m[t]].range+=`${i[m[t]].start}-${p-1},`),l.splice(p,1)}n=l.join("\n");const d={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}const E={codeBlockContainer:"codeBlockContainer_Ckt0"};function k(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,a]=e;const r=t[o];r&&"string"==typeof a&&(n[r]=a)})),n}(m());return o.createElement(t,(0,r.Z)({},n,{style:a,className:(0,i.Z)(n.className,E.codeBlockContainer,d.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function C(e){let{children:t,className:n}=e;return o.createElement(k,{as:"pre",tabIndex:0,className:(0,i.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:N.codeBlockLines},t))}var w=n(902);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Z(e,t){const[n,a]=(0,o.useState)(),r=(0,o.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,o.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=B);const a=(0,w.zX)(t),r=(0,w.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,r),()=>t.disconnect()}),[e,a,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var L={Prism:n(7410).Z,theme:T};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(this,arguments)}var x=/\r\n|\r|\n/,O=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function P(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var z=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),j(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=_({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=_({},n,{backgroundColor:null}),a}(e.theme,e.language):void 0;return t.themeDict=n})),j(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=_({},P(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==a&&(r.style=void 0!==r.style?_({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),j(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var c=o?{display:"inline-block"}:{},l=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(l))}})),j(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,c=_({},P(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?_({},c.style,a):a),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),j(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,c=0,l=[],i=[l];c>-1;){for(;(r=o[c]++)<a[c];){var s=void 0,u=t[c],m=n[c][r];if("string"==typeof m?(u=c>0?u:["plain"],s=m):(u=S(u,m.type),m.alias&&(u=S(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(x),p=d.length;l.push({types:u,content:d[0]});for(var f=1;f<p;f++)O(l),i.push(l=[]),l.push({types:u,content:d[f]})}else c++,t.push(u),n.push(s),o.push(0),a.push(s.length)}c--,t.pop(),n.pop(),o.pop(),a.pop()}return O(l),i}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const A=z,I={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function W(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:c,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=c({line:t,className:(0,i.Z)(n,a&&I.codeLine)}),u=t.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},l({token:e,key:t})))));return o.createElement("span",s,a?o.createElement(o.Fragment,null,o.createElement("span",{className:I.codeLineNumber}),o.createElement("span",{className:I.codeLineContent},u)):u,o.createElement("br",null))}var M=n(5999);function H(e){return o.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function D(e){return o.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const V={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){let{code:t,className:n}=e;const[a,r]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection(),c=r.rangeCount>0&&r.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}o.remove(),c&&(r.removeAllRanges(),r.addRange(c)),a&&a.focus()}(t),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),o.createElement("button",{type:"button","aria-label":a?(0,M.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,V.copyButton,a&&V.copyButtonCopied),onClick:l},o.createElement("span",{className:V.copyButtonIcons,"aria-hidden":"true"},o.createElement(H,{className:V.copyButtonIcon}),o.createElement(D,{className:V.copyButtonSuccessIcon})))}function $(e){return o.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const F={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function q(e){let{className:t,onClick:n,isEnabled:a}=e;const r=(0,M.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,a&&F.wordWrapButtonEnabled),"aria-label":r,title:r},o.createElement($,{className:F.wordWrapButtonIcon,"aria-hidden":"true"}))}function G(e){let{children:t,className:n="",metastring:a,title:c,showLineNumbers:l,language:s}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,u.L)(),f=s??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d,h=m(),y=function(){const[e,t]=(0,o.useState)(!1),[n,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),c=(0,o.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");a(n)}),[r]);return Z(r,l),(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:c}}(),b=function(e){return e?.match(g)?.groups.title??""}(a)||c,{lineClassNames:E,code:C}=v(t,{metastring:a,language:f,magicComments:p}),w=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return o.createElement(k,{as:"div",className:(0,i.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},b&&o.createElement("div",{className:N.codeBlockTitle},b),o.createElement("div",{className:N.codeBlockContent},o.createElement(A,(0,r.Z)({},L,{theme:h,code:C,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:r}=e;return o.createElement("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,i.Z)(t,N.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,i.Z)(N.codeBlockLines,w&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(W,{key:t,line:e,getLineProps:a,getTokenProps:r,classNames:E[t],showLineNumbers:w})))))})),o.createElement("div",{className:N.buttonGroup},(y.isEnabled||y.isCodeScrollable)&&o.createElement(q,{className:N.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),o.createElement(R,{className:N.codeButton,code:C}))))}function U(e){let{children:t,...n}=e;const a=(0,l.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof c?G:C;return o.createElement(i,(0,r.Z)({key:String(a)},n),c)}var Q=n(9960);var X=n(6043);const Y={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function K(e,t){return!!e&&(e===t||K(e.parentElement,t))}function ee(e){let{summary:t,children:n,...a}=e;const c=(0,l.Z)(),s=(0,o.useRef)(null),{collapsed:u,setCollapsed:m}=(0,X.u)({initialState:!a.open}),[d,p]=(0,o.useState)(a.open),f=o.isValidElement(t)?t:o.createElement("summary",null,t??"Details");return o.createElement("details",(0,r.Z)({},a,{ref:s,open:d,"data-collapsed":u,className:(0,i.Z)(Y.details,c&&Y.isBrowser,a.className),onMouseDown:e=>{J(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;J(t)&&K(t,s.current)&&(e.preventDefault(),u?(m(!1),p(!0)):m(!0))}}),f,o.createElement(X.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),p(!e)}},o.createElement("div",{className:Y.collapsibleContent},n)))}const te={details:"details_b_Ee"},ne="alert alert--info";function oe(e){let{...t}=e;return o.createElement(ee,(0,r.Z)({},t,{className:(0,i.Z)(ne,te.details,t.className)}))}var ae=n(2503);function re(e){return o.createElement(ae.Z,e)}const ce={containsTaskList:"containsTaskList_mC6p"};function le(e){if(void 0!==e)return(0,i.Z)(e,e?.includes("contains-task-list")&&ce.containsTaskList)}const ie={img:"img_ev3q"};const se="admonition_LlT9",ue="admonitionHeading_tbUL",me="admonitionIcon_kALy",de="admonitionContent_S0QG";const pe={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(M.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(M.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(M.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(M.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(M.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},fe={secondary:"note",important:"info",success:"tip",warning:"danger"};function ge(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}const he={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return o.createElement(e.props.originalType,a)}return e}(e):e));return o.createElement(c.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(e.props?.mdxType)))?o.createElement("code",e):o.createElement(U,e)},a:function(e){return o.createElement(Q.Z,e)},pre:function(e){return o.createElement(U,(0,o.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(oe,(0,r.Z)({},e,{summary:n}),a)},ul:function(e){return o.createElement("ul",(0,r.Z)({},e,{className:le(e.className)}))},img:function(e){return o.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,i.Z)(t,ie.img))}));var t},h1:e=>o.createElement(re,(0,r.Z)({as:"h1"},e)),h2:e=>o.createElement(re,(0,r.Z)({as:"h2"},e)),h3:e=>o.createElement(re,(0,r.Z)({as:"h3"},e)),h4:e=>o.createElement(re,(0,r.Z)({as:"h4"},e)),h5:e=>o.createElement(re,(0,r.Z)({as:"h5"},e)),h6:e=>o.createElement(re,(0,r.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:a,icon:r}=ge(e),c=function(e){const t=fe[e]??e,n=pe[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),pe.info)}(n),l=a??c.label,{iconComponent:s}=c,u=r??o.createElement(s,null);return o.createElement("div",{className:(0,i.Z)(d.k.common.admonition,d.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,se)},o.createElement("div",{className:ue},o.createElement("span",{className:me},u),l),o.createElement("div",{className:de},t))},mermaid:n(1875).Z};function ye(e){let{children:t}=e;return o.createElement(a.Zo,{components:he},t)}},2244:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(7294),a=n(6010),r=n(9960);function c(e){const{permalink:t,title:n,subLabel:c,isNext:l}=e;return o.createElement(r.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&o.createElement("div",{className:"pagination-nav__sublabel"},c),o.createElement("div",{className:"pagination-nav__label"},n))}},3008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(7294),a=n(6010),r=n(9960);const c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function l(e){let{permalink:t,label:n,count:l}=e;return o.createElement(r.Z,{href:t,className:(0,a.Z)(c.tag,l?c.tagWithCount:c.tagRegular)},n,l&&o.createElement("span",null,l))}},1526:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294),a=n(6010),r=n(5999),c=n(3008);const l={tags:"tags_jXut",tag:"tag_QGVx"};function i(e){let{tags:t}=e;return o.createElement(o.Fragment,null,o.createElement("b",null,o.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),o.createElement("ul",{className:(0,a.Z)(l.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return o.createElement("li",{key:n,className:l.tag},o.createElement(c.Z,{label:t,permalink:n}))}))))}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);