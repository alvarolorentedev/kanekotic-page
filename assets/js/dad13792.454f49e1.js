"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:20},i="Endomondo Unofficial API",s={unversionedId:"endomondo-unofficial-api",id:"endomondo-unofficial-api",title:"Endomondo Unofficial API",description:"logomakr_7drp6q",source:"@site/docs/endomondo-unofficial-api.md",sourceDirName:".",slug:"/endomondo-unofficial-api",permalink:"/docs/endomondo-unofficial-api",draft:!1,editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/docs/endomondo-unofficial-api.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Dependency Shrinker",permalink:"/docs/dependency-shirnker"},next:{title:"Gatoo",permalink:"/docs/gatoo"}},l={},u=[{value:"installation",id:"installation",level:2},{value:"Use",id:"use",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Workouts",id:"workouts",level:3},{value:"Workout (get)",id:"workout-get",level:3},{value:"Workout (set)",id:"workout-set",level:3},{value:"Thanks",id:"thanks",level:2},{value:"Github Repo",id:"github-repo",level:2},{value:"Logo",id:"logo",level:3},{value:"Disclaimer, legalese and everything else.",id:"disclaimer-legalese-and-everything-else",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"endomondo-unofficial-api"},"Endomondo Unofficial API"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/3071208/22858608/36797c5e-f088-11e6-9821-ad926355ff05.png",alt:"logomakr_7drp6q"})),(0,a.kt)("p",null,"This is a promise based unofficial endomondo api."),(0,a.kt)("h2",{id:"installation"},"installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install endomondo-unofficial-api\n")),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"the API provides the next functionalities"),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Get login information and tokens. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var authenticate = require('endomondo-unofficial-api').authenticate\n\nauthenticate({email: <email>, password: <password>})\n    .then((result) => console.log(result))\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("p",null,"the complete set of parameters get determined by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    email: params.email,\n    password: params.password,\n    deviceId: params.uuid || uuid,\n    country: params.country || 'ES',\n    action: params.action || 'pair'\n}\n")),(0,a.kt)("p",null,"The result of the promise will be if failed the error that caused it and if success an result object similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{ \n  authToken: <token>,\n  measure: <mesure unit>,\n  displayName: <user name>,\n  userId: <user id>,\n  facebookConnected: <true|false>,\n  secureToken: <token> \n}\n")),(0,a.kt)("h3",{id:"workouts"},"Workouts"),(0,a.kt)("p",null,"Get a list of your workouts. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var workouts = require('endomondo-unofficial-api').workouts\n\nvar token = 'authToken'\n\nworkouts({authToken: token})\n    .then((result) => { console.log(result) })\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("p",null,"the complete set of parameters get determined by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    authToken: params.authToken,\n    fields: params.fields || undefined,\n    maxResults: params.maxResults || undefined,\n    deflate: params.deflate || undefined,\n    compression: params.compression || undefined,\n    before: params.before || undefined,\n    after: params.after || undefined,\n}\n")),(0,a.kt)("p",null,"The result of the promise will be if failed the error that caused it and if success an result object similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "data":[<activities>],\n  "more":false\n}\n')),(0,a.kt)("h3",{id:"workout-get"},"Workout (get)"),(0,a.kt)("p",null,"Get a specific workout. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var workoutGet = require('endomondo-unofficial-api').workout.get\n\nvar token = 'authToken'\nvar workoutId = 'workoutId'\n\nworkoutGet({authToken: token, workoutId: workoutId})\n    .then((result) => { console.log(result) })\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("p",null,"the complete set of parameters are determined by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    workoutId: params.id,\n    sport: params.sport || 0,\n    duration: params.duration || 0,\n    gzip: params.gzip || true,\n    audioMessage: params.audioMessage || false,\n    goalType: params.goalType || 'BASIC',\n    extendedResponse: params.extendedResponse || undefined,\n    calories: params.calories || undefined,\n    hydration: params.hydration || undefined\n}\n")),(0,a.kt)("p",null,"The result of the promise will be if failed the error that caused it and if success an result object that is quite complex to describe just try it ;) ."),(0,a.kt)("h3",{id:"workout-set"},"Workout (set)"),(0,a.kt)("p",null,"Set (or create) a specific workout. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var workoutSet = require('endomondo-unofficial-api').workout.set\n\nvar token = 'authToken'\nvar userId = 'userId'\n\nworkoutSet({authToken: token, userId: userId, time: Date.now()-70, duration: 60, distance: 0.05 })\n    .then((result) => { console.log(result) })\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("p",null,"the complete set of parameters are determined by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    authToken: params.authToken,\n    duration: params.duration,\n    trackPoints: [ { dateTime, inst, latitude, longitude, distance, speed, altitude, heartRate }],\n    workoutId: params.workoutId || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)\n}\n")),(0,a.kt)("p",null,"or "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    authToken: params.authToken,\n    duration: params.duration,\n    time: params.time, \n    distance: params.distance,\n    workoutId: params.workoutId || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)\n}\n")),(0,a.kt)("p",null,"The result of the promise will be if failed the error that caused it and if success an result object like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{ workoutId: <workoutId> }\n")),(0,a.kt)("h2",{id:"thanks"},"Thanks"),(0,a.kt)("p",null,"Special thanks to @aperezm85 whos code was used as inspiration for this package."),(0,a.kt)("h2",{id:"github-repo"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kanekotic/endomondo-unofficial-api"},"Github Repo")),(0,a.kt)("h3",{id:"logo"},"Logo"),(0,a.kt)("p",null,"Sport graphic by ",(0,a.kt)("a",{href:"http://www.flaticon.com/authors/webalys"},"Webalys")," from ",(0,a.kt)("a",{href:"http://www.flaticon.com/"},"Flaticon")," is licensed under ",(0,a.kt)("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC BY 3.0"),". Made with ",(0,a.kt)("a",{href:"http://logomakr.com",title:"Logo Maker"},"Logo Maker")),(0,a.kt)("h2",{id:"disclaimer-legalese-and-everything-else"},"Disclaimer, legalese and everything else."),(0,a.kt)("p",null,'This is not affiliated or endorset by Endomondo, or any other party. This software available on the site is provided "as is" and any expressed or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall the user under the pseudonym Kanekotic, or any of their contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.'))}p.isMDXComponent=!0}}]);