"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(n),g=i,h=u["".concat(m,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={title:"Commiting Like a Pro in NodeJs: The Message",description:"Using tools to create descriptive commits",authors:["kanekotic"],tags:["webdev","git","programming","productivity"],draft:!1,published:!1,series:"commiting Like a Pro in NodeJs"},s=void 0,r={permalink:"/blog/2022/08/09/commiting-like-pro-part-2",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-09-commiting-like-pro-part-2.md",source:"@site/blog/2022-08-09-commiting-like-pro-part-2.md",title:"Commiting Like a Pro in NodeJs: The Message",description:"Using tools to create descriptive commits",date:"2022-08-09T00:00:00.000Z",formattedDate:"August 9, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"git",permalink:"/blog/tags/git"},{label:"programming",permalink:"/blog/tags/programming"},{label:"productivity",permalink:"/blog/tags/productivity"}],readingTime:4.365,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Engineering Manager @ClimatePartner",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{title:"Commiting Like a Pro in NodeJs: The Message",description:"Using tools to create descriptive commits",authors:["kanekotic"],tags:["webdev","git","programming","productivity"],draft:!1,published:!1,series:"commiting Like a Pro in NodeJs"},nextItem:{title:"Commiting Like a Pro in NodeJs: The hooks",permalink:"/blog/2022/08/08/commiting-like-pro-part-1"}},m={authorsImageUrls:[void 0]},l=[{value:"Why are messages important?",id:"why-are-messages-important",level:2},{value:"Easy Commit messages with Commitizen",id:"easy-commit-messages-with-commitizen",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-are-messages-important"},"Why are messages important?"),(0,i.kt)("p",null,"Commit messages are part of the collaboration we do day to day inside a team, it works as a record of what has happened."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Every time you perform a commit, you\u2019re recording a snapshot of your project that you can revert to or compare to later."),(0,i.kt)("p",{parentName:"blockquote"},"\u2014 Pro Git Book")),(0,i.kt)("p",null,"Commit messages are used in many ways, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To help a future reader quickly understand what changed and why it changed"),(0,i.kt)("li",{parentName:"ul"},"To assist with easily undoing specific changes"),(0,i.kt)("li",{parentName:"ul"},"To prepare change notes or bump versions for a release")),(0,i.kt)("p",null,"All three of these use cases require a clean and consistent commit message style."),(0,i.kt)("h2",{id:"easy-commit-messages-with-commitizen"},"Easy Commit messages with Commitizen"),(0,i.kt)("p",null,"This tool purpose is to define a standard way of committing rules and communicating it. The reasoning behind it is that it is easier to read, and enforces writing descriptive commits. Removing the ambiguity of options and the mental load of following the standard manually."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/commitizen"},"Commitizen")," will prompt you a series of questions that will generate the final commit message. It has multiple adapters, in my case I prefer to be controlling the questions, so I use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tyankatsu0105/cz-format-extension",title:"tyankatsu0105/cz-format-extension"},"cz-format-extension"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://commitizen-tools.github.io/commitizen/images/demo.gif",alt:null})),(0,i.kt)("p",null,"You can add commitizen to your project with the next command line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install commitizen --save-dev # npm\nyarn add commitizen -D  # Yarn\n")),(0,i.kt)("p",null,"Add any of the available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli#adapters"},"adapters"),", in my case ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tyankatsu0105/cz-format-extension",title:"tyankatsu0105/cz-format-extension"},"cz-format-extension"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"    npm install cz-format-extension --save-dev # npm\n    yarn add cz-format-extension -D  # Yarn\n")),(0,i.kt)("p",null,"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," you will need to add the next section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'  ...\n  "config": {\n    ...\n    "commitizen": {\n      "path": "cz-format-extension"\n    }\n  }\n  ...\n')),(0,i.kt)("p",null,"The Adapter ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tyankatsu0105/cz-format-extension",title:"tyankatsu0105/cz-format-extension"},"cz-format-extension")," allows a massive flexibility as the questions can be defined in a ",(0,i.kt)("inlineCode",{parentName:"p"},".czfrec.js")," file. An example is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { contributors } = require('./package.json')\n\nmodule.exports = {\n  questions({inquirer}) {\n    return [\n      {\n        type: \"list\",\n        name: \"type\",\n        message: \"'What is the type of this change:\",\n        choices: [\n           {\n              type: \"list\",\n              name: \"type\",\n              message: \"'What is the type of this change:\",\n              choices: [\n          {\n            \"name\": \"feat: A new feature\",\n            \"value\": \"feat\"\n          },\n          {\n            \"name\": \"fix: A bug fix\",\n            \"value\": \"fix\"\n          },\n          {\n            \"name\": \"docs: Documentation only changes\",\n            \"value\": \"docs\"\n          },\n          ...\n        ]\n      },\n      {\n        type: 'list',\n        name: 'scope',\n        message: 'What is the scope of this change:',\n        choices: [\n            {\n              \"name\": \"core: base system of the application\",\n              \"value\": \"core\"\n            },\n            {\n              \"name\": \"extensions: systems that are observed\",\n              \"value\": \"extensions\"\n            },\n            {\n              \"name\": \"tools: other things in the project\",\n              \"value\": \"tools\"\n            },\n        ]\n      },\n      {\n        type: 'input',\n        name: 'message',\n        message: \"Write a short, imperative tense description of the change\\n\",\n        validate: (message) => message.length === 0 ? 'message is required' : true\n      },\n      {\n        type: 'input',\n        name: 'body',\n        message: 'Provide a longer description of the change: (press enter to skip)\\n',\n      },\n      {\n        type: 'confirm',\n        name: 'isBreaking',\n        message: 'Are there any breaking changes?',\n        default: false\n      },\n      {\n        type: 'input',\n        name: 'breaking',\n        message: 'Describe the breaking changes:\\n',\n        when: answers => answers.isBreaking\n      },\n      {\n        type: 'confirm',\n        name: 'isIssueAffected',\n        message: 'Does this change affect any open issues?',\n        default: false\n      },\n      {\n        type: 'input',\n        name: 'issues',\n        message: 'Add issue references:\\n',\n        when: answers => answers.isIssueAffected,\n        default: undefined,\n        validate: (issues) => issues.length === 0 ? 'issues is required' : true\n      },\n      {\n        type: 'checkbox',\n        name: 'coauthors',\n        message: 'Select Co-Authors if any:',\n        choices: contributors.map(contributor => ({\n            name: contributor.name,\n            value: `Co-authored-by: ${contributor.name} <${contributor.email}>`,\n        }))\n      },\n    ]\n  },\n  commitMessage({answers}) {\n    const scope = answers.scope ? `(${answers.scope})` : '';\n    const head = `${answers.type}${scope}: ${answers.message}`;\n    const body = answers.body ? answers.body : '';\n    const breaking = answers.breaking ? `BREAKING CHANGE: ${answers.breaking}` : '';\n    const issues = answers.issues ? answers.issues : '';\n    const coauthors = answers.coauthors.join('\\n');\n\n    return [head, body, breaking, issues, coauthors].join('\\n\\n').trim()\n  }\n}\n")),(0,i.kt)("p",null,"The file creates a process of questions for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: align with semantic release message specification"),(0,i.kt)("li",{parentName:"ul"},"scope: affected part of the application"),(0,i.kt)("li",{parentName:"ul"},"message: the imperative written message"),(0,i.kt)("li",{parentName:"ul"},"body: longer description"),(0,i.kt)("li",{parentName:"ul"},"breaking: to determine if it's a breaking change for semantic release"),(0,i.kt)("li",{parentName:"ul"},"Issue: related issue of our ticketing system"),(0,i.kt)("li",{parentName:"ul"},"Co-Authors: people working in the tasks while pair programming")),(0,i.kt)("p",null,"All these questions are asked interactively and not by the brain power of doing manual work."),(0,i.kt)("p",null,"And you can then add some nice npm scripts in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file pointing to the local version of Commitizen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  ...\n  "scripts": {\n    "commit": "cz"\n  }\n')),(0,i.kt)("p",null,"This will be more convenient for your users because then if they want to do a commit, all they need to do is run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run commit")," and they will get the prompts needed to start a commit!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"precommit")," hooks thanks to something like ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/husky"},(0,i.kt)("inlineCode",{parentName:"a"},"husky")),", you will need to name your script something other than ",(0,i.kt)("inlineCode",{parentName:"p"},'"commit"')," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'"cm": "cz"'),'). The reason is because npm scripts has a "feature" where it automatically runs scripts with the name ',(0,i.kt)("em",{parentName:"p"},"prexxx")," where ",(0,i.kt)("em",{parentName:"p"},"xxx")," is the name of another script. In essence, npm and husky will run ",(0,i.kt)("inlineCode",{parentName:"p"},'"precommit"')," scripts twice if you name the script ",(0,i.kt)("inlineCode",{parentName:"p"},'"commit"'),", and the workaround is to prevent the npm-triggered ",(0,i.kt)("em",{parentName:"p"},"precommit")," script.")),(0,i.kt)("p",null,"That is all :) . I will do a special mention to ",(0,i.kt)("a",{parentName:"p",href:"https://commitlint.js.org/#/"},"commitlint")," that is a very useful tool to lint commit messages. I do not use it anymore as it has some overlap with commitizen."))}c.isMDXComponent=!0}}]);