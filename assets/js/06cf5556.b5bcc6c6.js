"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:20},o="Nike Unofficial API",l={unversionedId:"maintained/nike-unofficial-api",id:"maintained/nike-unofficial-api",title:"Nike Unofficial API",description:"logomakr_3e4ole",source:"@site/docs/maintained/nike-unofficial-api.md",sourceDirName:"maintained",slug:"/maintained/nike-unofficial-api",permalink:"/docs/maintained/nike-unofficial-api",draft:!1,editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/docs/maintained/nike-unofficial-api.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Gatoo",permalink:"/docs/maintained/gatoo"},next:{title:"OAuth Electron Facebook",permalink:"/docs/maintained/oauth-electron-facebook"}},s={},c=[{value:"installation",id:"installation",level:2},{value:"Use",id:"use",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Workouts",id:"workouts",level:3},{value:"Logo",id:"logo",level:3},{value:"Disclaimer, legalese and everything else.",id:"disclaimer-legalese-and-everything-else",level:2},{value:"Github Repo",id:"github-repo",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nike-unofficial-api"},"Nike Unofficial API"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/3071208/22865444/590b48ae-f12a-11e6-921c-f7a9c4b5dd48.png",alt:"logomakr_3e4ole"}),"\nunofficial nike api"),(0,a.kt)("p",null,"This is a promise based unofficial nikeplus api."),(0,a.kt)("h2",{id:"installation"},"installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install nike-unofficial-api\n")),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"the API provides the next functionalities"),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Get login information and tokens. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var authenticate = require('nike-unofficial-api').authenticate\n\nauthenticate({email: <email>, password: <password>})\n    .then((result) => console.log(result))\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("p",null,"the complete set of parameters get determined by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    email: params.email,\n    password: params.password\n}\n")),(0,a.kt)("p",null,"The result of the promise will be if failed the error that caused it and if success an result object similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{ \n    access_token: <token>,\n    expires_in: <expiration time>,\n    profile_img_url: <profile image>,\n    token_type: <token type>\n}\n")),(0,a.kt)("h3",{id:"workouts"},"Workouts"),(0,a.kt)("p",null,"Get a list of your workouts. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var workouts = require('nike-unofficial-api').workouts\n\nvar token = 'access_token'\n\nworkouts({access_token: token})\n    .then((result) => { console.log(result) })\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("h3",{id:"logo"},"Logo"),(0,a.kt)("p",null,"Speed graphic by ",(0,a.kt)("a",{href:"http://www.flaticon.com/authors/freepik"},"Freepik")," from ",(0,a.kt)("a",{href:"http://www.flaticon.com/"},"Flaticon")," is licensed under ",(0,a.kt)("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC BY 3.0"),". Made with ",(0,a.kt)("a",{href:"http://logomakr.com",title:"Logo Maker"},"Logo Maker")),(0,a.kt)("h2",{id:"disclaimer-legalese-and-everything-else"},"Disclaimer, legalese and everything else."),(0,a.kt)("p",null,'This is not affiliated or endorset by Nike , or any other party. This software available on the site is provided "as is" and any expressed or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall the user under the pseudonym Kanekotic, or any of their contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.'),(0,a.kt)("h2",{id:"github-repo"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kanekotic/nike-unofficial-api"},"Github Repo")))}p.isMDXComponent=!0}}]);