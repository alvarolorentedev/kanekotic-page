"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4073],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const s={sidebar_position:15},i="Runtastic Unofficial API",o={unversionedId:"maintained/runtastic-unofficial-api",id:"maintained/runtastic-unofficial-api",title:"Runtastic Unofficial API",description:"logomakr_4dzqyb",source:"@site/docs/maintained/runtastic-unofficial-api.md",sourceDirName:"maintained",slug:"/maintained/runtastic-unofficial-api",permalink:"/docs/maintained/runtastic-unofficial-api",draft:!1,editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/docs/maintained/runtastic-unofficial-api.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Scala Local Toggle",permalink:"/docs/maintained/scala-local-toggle"},next:{title:"Dependency Shrinker",permalink:"/docs/maintained/dependency-shirnker"}},u={},l=[{value:"installation",id:"installation",level:2},{value:"Use",id:"use",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Workouts",id:"workouts",level:3},{value:"Workout (get)",id:"workout-get",level:3},{value:"Workout (set)",id:"workout-set",level:3},{value:"Logo",id:"logo",level:3},{value:"Disclaimer, legalese and everything else.",id:"disclaimer-legalese-and-everything-else",level:4},{value:"Github Repo",id:"github-repo",level:2}],c={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runtastic-unofficial-api"},"Runtastic Unofficial API"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/3071208/23109294/74bb4208-f6dd-11e6-9f09-24e7ac0d9d28.png",alt:"logomakr_4dzqyb"})),(0,a.kt)("p",null,"This is a promise based unofficial runtastic api."),(0,a.kt)("h2",{id:"installation"},"installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install runtastic-unofficial-api\n")),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"the API provides the next functionalities"),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Get login information and tokens. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var authenticate = require('runtastic-unofficial-api').authenticate\n\nauthenticate({email: <email>, password: <password>})\n    .then((result) => console.log(result))\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("p",null,"the complete set of parameters get determined by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    'user[email]': params.email,\n    'user[password]': params.password,\n    grant_type: 'password'\n}\n")),(0,a.kt)("p",null,"The result of the promise will be if failed the error that caused it and if success an result object similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    authToken: token,\n    user: user,\n    cookieString: cookieString,\n    cookies: cookie\n}\n")),(0,a.kt)("h3",{id:"workouts"},"Workouts"),(0,a.kt)("p",null,"Get a list of your workouts. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var workouts = require('runtastic-unofficial-api').workouts\n\nvar token = 'authToken'\n\nworkouts({authToken: token, user: user})\n    .then((result) => { console.log(result) })\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("p",null,"the complete set of parameters get determined by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    user_id: params.user.id,\n    authenticity_token: params.authToken,\n    items: ids.join(',')\n}\n")),(0,a.kt)("p",null,"The result of the promise will be if failed the error that caused it and if success an result object similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[<sessions>]\n")),(0,a.kt)("h3",{id:"workout-get"},"Workout (get)"),(0,a.kt)("p",null,"Get a specific workout. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var workoutGet = require('runtastic-unofficial-api').workout.get\n\nvar token = 'authToken'\nvar user = {}\nvar sessions = []\n\nworkoutGet(user, sessions[0],{authToken : token, user : user})\n    .then((result) => { console.log(result) })\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("p",null,"the complete set of parameters are determined by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//const defaultIncludes = ['city','country','creation_application','sport_type','trace_collection','zones','sharing_token','neighbourhood']\n//var includes = params.includes || defaultIncludes\n\n{\n    user_id: params.user.id,\n    authenticity_token: params.authToken,\n    includes: includes.join(',')\n}\n")),(0,a.kt)("p",null,"The result of the promise will be if failed the error that caused it and if success an result object that is quite complex to describe just try it ;) ."),(0,a.kt)("h3",{id:"workout-set"},"Workout (set)"),(0,a.kt)("p",null,"Set (or create) a specific workout. The next snippet describes an example of the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var workoutSet = require('runtastic-unofficial-api').workout.set\n\nvar token = 'authToken'\nvar user = {}\nvar sessions = []\n\nworkoutSet(user, sessions[0] ,{authToken : token, user : user})\n    .then((result) => { console.log(result) })\n    .catch((result) => console.log(result))\n\n")),(0,a.kt)("p",null,"the complete set of parameters are determined by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'//var duration = params.duration ? moment.duration(params.duration) : moment.duration(0)\n//var pause = params.pause ? moment.duration(params.pause) : moment.duration(0)\n//var datetime =  params.date ? moment(params.date) : moment()\n{\n    authenticity_token: params.authToken,\n    \'run_session[start_time_day]\': datetime.format(\'YYYY-MM-DD\'),\n    "run_session[sport_type_id]": params.type || 1,\n    "run_session[distance]": params.distance || 0,\n    "run_session[distance_from_user]": params.distance || 0,\n    "run_session[elevation_gain]": params.elevation_gain || 0,\n    "run_session[elevation_loss]": params.elevation_loss || 0,\n    "run_session[elevation_gain_from_user]": params.elevation_gain || 0,\n    "run_session[elevation_loss_from_user]": params.elevation_loss || 0,\n    "run_session[start_time_hour]": datetime.format(\'hh\'),\n    "run_session[start_time_minutes]" : datetime.format(\'mm\'),\n    "run_session[start_time_seconds]": datetime.format(\'ss\'),\n    "run_session[duration]": duration.asMilliseconds(),\n    "run_session[duration_hours]": duration.hours(),\n    "run_session[duration_minutes]": duration.minutes(),\n    "run_session[duration_seconds]":duration.seconds(),\n    "run_session[pause_duration]": pause.asMilliseconds(),\n    "run_session[pause_duration_hours]": pause.hours(),\n    "run_session[pause_duration_minutes]": pause.minutes(),\n    "run_session[pause_duration_seconds]": pause.seconds(),\n    "run_session[calories]": params.calories || 0,\n    "run_session[calories_from_user]": params.calories || 0,\n    "run_session[avg_cadence]": params.avg_cadence || undefined,\n    "run_session[max_cadence]":params.max_cadence || undefined,\n    "run_session[avg_cadence_from_user]": params.avg_cadence || undefined,\n    "run_session[max_cadence_from_user]": params.max_cadence || undefined,\n    "run_session[total_crank_revolutions]": params.total_crank_revolutions || undefined,\n    "run_session[total_crank_revolutions_from_user]": params.total_crank_revolutions || undefined,\n    "run_session[wheel_circumference]": params.wheel_circumference || undefined,\n    "run_session[wheel_circumference_from_user]": params.wheel_circumference || undefined,\n    "run_session[pulse_avg]": params.pulse_avg || undefined,\n    "run_session[pulse_max]": params.pulse_max || undefined,\n    "run_session[pulse_avg_from_user]":  params.pulse_avg || undefined,\n    "run_session[pulse_max_from_user]": params.pulse_max || undefined,\n    "run_session[temperature]": params.temperature || 0,\n    "run_session[temperature_from_user]": params.temperature || 0,\n    "run_session[notes]": params.notes || \'\',\n    "run_session[subjective_feeling_id]": params.feeling || 5,\n    "run_session[weather_condition_id]": params.weather || 1,\n    "run_session[surface_id]" : params.surface || 1\n}\n')),(0,a.kt)("p",null,"The result of the promise will be if failed the error that caused it and if success an result object like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{ workoutId: <workoutId> }\n")),(0,a.kt)("h3",{id:"logo"},"Logo"),(0,a.kt)("p",null,"Sports graphic by ",(0,a.kt)("a",{href:"http://www.flaticon.com/authors/freepik"},"Freepik")," from ",(0,a.kt)("a",{href:"http://www.flaticon.com/"},"Flaticon")," is licensed under ",(0,a.kt)("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC BY 3.0"),". Made with ",(0,a.kt)("a",{href:"http://logomakr.com",title:"Logo Maker"},"Logo Maker")),(0,a.kt)("h4",{id:"disclaimer-legalese-and-everything-else"},"Disclaimer, legalese and everything else."),(0,a.kt)("p",null,'This is not affiliated or endorset by runtastic, or any other party. This software available on the site is provided "as is" and any expressed or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall the user under the pseudonym Kanekotic, or any of their contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.'),(0,a.kt)("h2",{id:"github-repo"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kanekotic/runtastic-unofficial-api"},"Github Repo")))}d.isMDXComponent=!0}}]);