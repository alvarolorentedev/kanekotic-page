"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/power-automate-automating-social-media","metadata":{"permalink":"/blog/power-automate-automating-social-media","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/power-automate-automating-social-media.md","source":"@site/blog/power-automate-automating-social-media.md","title":"Automate Anything: Power Automate + Trello + IFTTT","description":"how to automate tedius tasks with low code platforms","date":"2022-08-23T22:00:00.000Z","formattedDate":"August 23, 2022","tags":[],"readingTime":0.805,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Automate Anything: Power Automate + Trello + IFTTT","description":"how to automate tedius tasks with low code platforms","date":"2022-08-23T22:00:00.000Z","authors":[],"tags":[],"draft":false,"published":true,"series":""},"nextItem":{"title":"Commiting Like a Pro in NodeJs: The Message","permalink":"/blog/2022/08/09/commiting-like-pro-part-2"}},"content":"I am currently starting some new open-source projects and I feel it is tedious to do some recurrent tasks. For example:\\n\\n* Promote this blog post in social media\\n* Announce a new release.\\n\\n[Power Automate](https://powerautomate.microsoft.com/en-us/) & [IFTTT](https://ifttt.com/) integrations allow just this, by a process of action and reaction.  \\n![](https://github.com/kanekotic/diagrams/blob/main/automate.drawio.png?raw=true)\\n\\nThese systems provide:\\n\\n* **Triggers**: they are the starting point of what will happen after.\\n* **Actions**: they react to previous steps on the described flow.\\n\\nAn example of this is the next flow:\\n\\n![image](https://user-images.githubusercontent.com/3071208/186482177-7b6eb6c0-8632-4cd2-87c9-613788f553f8.png)\\n\\n![image](https://user-images.githubusercontent.com/3071208/186478753-1ebcf35c-eb1e-492a-b41c-ac67a749d7f5.png)\\n\\n* In IFTTT, if a new feed item exists in the RSS of my blog, it\'s posted as a card in a Trello board.\\n* The Power automate flow looks for new cards on that column.\\n* Retrieve the content\\n* post it into medium\\n* Post into Twitter and LinkedIn about the new blog post.\\n\\nAs you can see, automation is cool and can save us a lot of effort by increasing our productivity."},{"id":"/2022/08/09/commiting-like-pro-part-2","metadata":{"permalink":"/blog/2022/08/09/commiting-like-pro-part-2","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-09-commiting-like-pro-part-2.md","source":"@site/blog/2022-08-09-commiting-like-pro-part-2.md","title":"Commiting Like a Pro in NodeJs: The Message","description":"Using tools to create descriptive commits","date":"2022-08-09T00:00:00.000Z","formattedDate":"August 9, 2022","tags":[{"label":"webdev","permalink":"/blog/tags/webdev"},{"label":"git","permalink":"/blog/tags/git"},{"label":"programming","permalink":"/blog/tags/programming"},{"label":"productivity","permalink":"/blog/tags/productivity"}],"readingTime":4.365,"hasTruncateMarker":false,"authors":[{"name":"Alvaro Jose","title":"Engineering Manager @ClimatePartner","url":"https://github.com/kanekotic","imageURL":"https://github.com/kanekotic.png","key":"kanekotic"}],"frontMatter":{"title":"Commiting Like a Pro in NodeJs: The Message","description":"Using tools to create descriptive commits","authors":["kanekotic"],"tags":["webdev","git","programming","productivity"],"draft":false,"published":true,"series":"commiting Like a Pro in NodeJs"},"prevItem":{"title":"Automate Anything: Power Automate + Trello + IFTTT","permalink":"/blog/power-automate-automating-social-media"},"nextItem":{"title":"Commiting Like a Pro in NodeJs: The hooks","permalink":"/blog/2022/08/08/commiting-like-pro-part-1"}},"content":"## Why are messages important?\\n\\nCommit messages are part of the collaboration we do day to day inside a team, it works as a record of what has happened.\\n\\n> Every time you perform a commit, you\u2019re recording a snapshot of your project that you can revert to or compare to later.\\n>\\n> \u2014 Pro Git Book\\n\\nCommit messages are used in many ways, including:\\n\\n* To help a future reader quickly understand what changed and why it changed\\n* To assist with easily undoing specific changes\\n* To prepare change notes or bump versions for a release\\n\\nAll three of these use cases require a clean and consistent commit message style.\\n\\n## Easy Commit messages with Commitizen\\n\\nThis tool purpose is to define a standard way of committing rules and communicating it. The reasoning behind it is that it is easier to read, and enforces writing descriptive commits. Removing the ambiguity of options and the mental load of following the standard manually.\\n\\n[Commitizen](https://github.com/commitizen) will prompt you a series of questions that will generate the final commit message. It has multiple adapters, in my case I prefer to be controlling the questions, so I use [cz-format-extension](https://github.com/tyankatsu0105/cz-format-extension \\"tyankatsu0105/cz-format-extension\\").\\n\\n![](https://commitizen-tools.github.io/commitizen/images/demo.gif)\\n\\nYou can add commitizen to your project with the next command line\\n\\n```sh\\nnpm install commitizen --save-dev # npm\\nyarn add commitizen -D  # Yarn\\n```\\n\\nAdd any of the available [adapters](https://github.com/commitizen/cz-cli#adapters), in my case [cz-format-extension](https://github.com/tyankatsu0105/cz-format-extension \\"tyankatsu0105/cz-format-extension\\"):\\n\\n```sh\\n    npm install cz-format-extension --save-dev # npm\\n    yarn add cz-format-extension -D  # Yarn\\n```\\n\\nIn your `package.json` you will need to add the next section:\\n\\n```sh\\n  ...\\n  \\"config\\": {\\n    ...\\n    \\"commitizen\\": {\\n      \\"path\\": \\"cz-format-extension\\"\\n    }\\n  }\\n  ...\\n```\\n\\nThe Adapter [cz-format-extension](https://github.com/tyankatsu0105/cz-format-extension \\"tyankatsu0105/cz-format-extension\\") allows a massive flexibility as the questions can be defined in a `.czfrec.js` file. An example is:\\n\\n```js\\nconst { contributors } = require(\'./package.json\')\\n\\nmodule.exports = {\\n  questions({inquirer}) {\\n    return [\\n      {\\n        type: \\"list\\",\\n        name: \\"type\\",\\n        message: \\"\'What is the type of this change:\\",\\n        choices: [\\n           {\\n              type: \\"list\\",\\n              name: \\"type\\",\\n              message: \\"\'What is the type of this change:\\",\\n              choices: [\\n          {\\n            \\"name\\": \\"feat: A new feature\\",\\n            \\"value\\": \\"feat\\"\\n          },\\n          {\\n            \\"name\\": \\"fix: A bug fix\\",\\n            \\"value\\": \\"fix\\"\\n          },\\n          {\\n            \\"name\\": \\"docs: Documentation only changes\\",\\n            \\"value\\": \\"docs\\"\\n          },\\n          ...\\n        ]\\n      },\\n      {\\n        type: \'list\',\\n        name: \'scope\',\\n        message: \'What is the scope of this change:\',\\n        choices: [\\n            {\\n              \\"name\\": \\"core: base system of the application\\",\\n              \\"value\\": \\"core\\"\\n            },\\n            {\\n              \\"name\\": \\"extensions: systems that are observed\\",\\n              \\"value\\": \\"extensions\\"\\n            },\\n            {\\n              \\"name\\": \\"tools: other things in the project\\",\\n              \\"value\\": \\"tools\\"\\n            },\\n        ]\\n      },\\n      {\\n        type: \'input\',\\n        name: \'message\',\\n        message: \\"Write a short, imperative tense description of the change\\\\n\\",\\n        validate: (message) => message.length === 0 ? \'message is required\' : true\\n      },\\n      {\\n        type: \'input\',\\n        name: \'body\',\\n        message: \'Provide a longer description of the change: (press enter to skip)\\\\n\',\\n      },\\n      {\\n        type: \'confirm\',\\n        name: \'isBreaking\',\\n        message: \'Are there any breaking changes?\',\\n        default: false\\n      },\\n      {\\n        type: \'input\',\\n        name: \'breaking\',\\n        message: \'Describe the breaking changes:\\\\n\',\\n        when: answers => answers.isBreaking\\n      },\\n      {\\n        type: \'confirm\',\\n        name: \'isIssueAffected\',\\n        message: \'Does this change affect any open issues?\',\\n        default: false\\n      },\\n      {\\n        type: \'input\',\\n        name: \'issues\',\\n        message: \'Add issue references:\\\\n\',\\n        when: answers => answers.isIssueAffected,\\n        default: undefined,\\n        validate: (issues) => issues.length === 0 ? \'issues is required\' : true\\n      },\\n      {\\n        type: \'checkbox\',\\n        name: \'coauthors\',\\n        message: \'Select Co-Authors if any:\',\\n        choices: contributors.map(contributor => ({\\n            name: contributor.name,\\n            value: `Co-authored-by: ${contributor.name} <${contributor.email}>`,\\n        }))\\n      },\\n    ]\\n  },\\n  commitMessage({answers}) {\\n    const scope = answers.scope ? `(${answers.scope})` : \'\';\\n    const head = `${answers.type}${scope}: ${answers.message}`;\\n    const body = answers.body ? answers.body : \'\';\\n    const breaking = answers.breaking ? `BREAKING CHANGE: ${answers.breaking}` : \'\';\\n    const issues = answers.issues ? answers.issues : \'\';\\n    const coauthors = answers.coauthors.join(\'\\\\n\');\\n\\n    return [head, body, breaking, issues, coauthors].join(\'\\\\n\\\\n\').trim()\\n  }\\n}\\n```\\n\\nThe file creates a process of questions for:\\n\\n* type: align with semantic release message specification\\n* scope: affected part of the application\\n* message: the imperative written message\\n* body: longer description\\n* breaking: to determine if it\'s a breaking change for semantic release\\n* Issue: related issue of our ticketing system\\n* Co-Authors: people working in the tasks while pair programming\\n\\nAll these questions are asked interactively and not by the brain power of doing manual work.\\n\\nAnd you can then add some nice npm scripts in your `package.json` file pointing to the local version of Commitizen:\\n\\n      ...\\n      \\"scripts\\": {\\n        \\"commit\\": \\"cz\\"\\n      }\\n\\nThis will be more convenient for your users because then if they want to do a commit, all they need to do is run `npm run commit` and they will get the prompts needed to start a commit!\\n\\n> **NOTE:** If you are using `precommit` hooks thanks to something like [`husky`](https://www.npmjs.com/package/husky), you will need to name your script something other than `\\"commit\\"` (e.g. `\\"cm\\": \\"cz\\"`). The reason is because npm scripts has a \\"feature\\" where it automatically runs scripts with the name _prexxx_ where _xxx_ is the name of another script. In essence, npm and husky will run `\\"precommit\\"` scripts twice if you name the script `\\"commit\\"`, and the workaround is to prevent the npm-triggered _precommit_ script.\\n\\nThat is all :) . I will do a special mention to [commitlint](https://commitlint.js.org/#/) that is a very useful tool to lint commit messages. I do not use it anymore as it has some overlap with commitizen."},{"id":"/2022/08/08/commiting-like-pro-part-1","metadata":{"permalink":"/blog/2022/08/08/commiting-like-pro-part-1","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-08-commiting-like-pro-part-1.md","source":"@site/blog/2022-08-08-commiting-like-pro-part-1.md","title":"Commiting Like a Pro in NodeJs: The hooks","description":"Using git hooks to make sure your commits do what you expect","date":"2022-08-08T00:00:00.000Z","formattedDate":"August 8, 2022","tags":[{"label":"agile","permalink":"/blog/tags/agile"},{"label":"webdev","permalink":"/blog/tags/webdev"},{"label":"programming","permalink":"/blog/tags/programming"},{"label":"productivity","permalink":"/blog/tags/productivity"}],"readingTime":2.13,"hasTruncateMarker":false,"authors":[{"name":"Alvaro Jose","title":"Engineering Manager @ClimatePartner","url":"https://github.com/kanekotic","imageURL":"https://github.com/kanekotic.png","key":"kanekotic"}],"frontMatter":{"title":"Commiting Like a Pro in NodeJs: The hooks","description":"Using git hooks to make sure your commits do what you expect","authors":["kanekotic"],"tags":["agile","webdev","programming","productivity"],"draft":false,"published":true,"series":"commiting Like a Pro in NodeJs"},"prevItem":{"title":"Commiting Like a Pro in NodeJs: The Message","permalink":"/blog/2022/08/09/commiting-like-pro-part-2"},"nextItem":{"title":"Stop doing PR\'s inside the Office","permalink":"/blog/2022/08/08/stop-prs"}},"content":"## What & Why Git hooks?\\n\\nGit hooks are scripts that Git executes locally before or after events such as commit, push, and receive.\\n\\nThese hooks are completely programmable trough bash scripting. Examples of what can be done:\\n\\n* pre-commit: Enforce project coding standards.\\n* pre-push: Run tests.\\n\\nThis allows us to make sure we are committing the correct things at the correct time. Not breaking our code just because of the mental load of doing things as a manual process that can be forgotten.\\n\\n## How to Start\\n\\n### Add Husky\\n\\n[Husky](https://typicode.github.io/husky/#/) is a tool that allows Git hooks using JavaScript configured using individual files for hooks in a `.husky/` directory.\\n\\nThe fastest way to install husky is by using `husky-init`, a one-time command to quickly initialize a project with husky:\\n\\n```sh\\nnpx husky-init && npm install       # npm\\nnpx husky-init && yarn              # Yarn 1\\nyarn dlx husky-init --yarn2 && yarn # Yarn 2+\\npnpm dlx husky-init && pnpm install # pnpm\\n```\\n\\nIt will set up husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run test when you commit.\\n\\nTo add another hook, use `husky add`.\\n\\nIf you are not comfortable using  `husky-init` you can find other options [here](https://typicode.github.io/husky/#/?id=manual).\\n\\n### Add lint-staged\\n\\nHusky is very useful, but it will run natively to git and not focus the commands in our bash scripts for all the files, not only the ones we want to commit.\\n\\n[Lint Staged](https://github.com/okonet/lint-staged) appear to resolve this problem. It allows you to run the process against staged git files that match a pattern.\\n\\n[![asciicast](https://asciinema.org/a/199934.svg)](https://asciinema.org/a/199934)\\n\\nInstall `lint-staged` by adding it to your local project.\\n\\n```sh\\nnpm install lint-staged --save-dev\\nyarn add lint-staged -D \\n```\\n\\nIn your package.json add it as a script(`\\"lint-staged\\": \\"lint-staged\\",`) and refer it through a `pre-commit` hook. If using Husky, this can be found in `.husky/pre-commit` with the next content:\\n\\n```sh\\n#!/bin/sh\\n. \\"$(dirname \\"$0\\")/_/husky.sh\\"\\n\\nyarn lint-staged\\n```\\n\\nThere are multiple ways to [configure lint-staged](https://github.com/okonet/lint-staged#configuration). One of them is having a `lint-staged.config.js` file in your project root folder. In this file, you can express what process you want to run for what types of files. For example:\\n\\n```js\\nmodule.exports = {\\n  \'*.{ts,tsx}\': [() => \'yarn tsc:check\', \'yarn format\', \'yarn lint:fix\', \'yarn test\', \'git add .\'],\\n};\\n```\\n\\nThe previous snipped runs the compiler check, formatting, linting and test before adding the fixed staged files to the current commit.\\n\\n## Conclusion\\n\\nWith this two tools, we will now be pushing code that will pass similar checks than our CI/CD system."},{"id":"/2022/08/08/stop-prs","metadata":{"permalink":"/blog/2022/08/08/stop-prs","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-08-stop-prs.md","source":"@site/blog/2022-08-08-stop-prs.md","title":"Stop doing PR\'s inside the Office","description":"PRs should only be part of certain environments and not a general practice","date":"2022-08-08T00:00:00.000Z","formattedDate":"August 8, 2022","tags":[{"label":"agile","permalink":"/blog/tags/agile"},{"label":"webdev","permalink":"/blog/tags/webdev"},{"label":"programming","permalink":"/blog/tags/programming"},{"label":"productivity","permalink":"/blog/tags/productivity"}],"readingTime":3.02,"hasTruncateMarker":false,"authors":[{"name":"Alvaro Jose","title":"Engineering Manager @ClimatePartner","url":"https://github.com/kanekotic","imageURL":"https://github.com/kanekotic.png","key":"kanekotic"}],"frontMatter":{"title":"Stop doing PR\'s inside the Office","description":"PRs should only be part of certain environments and not a general practice","authors":["kanekotic"],"tags":["agile","webdev","programming","productivity"],"draft":false,"published":true},"prevItem":{"title":"Commiting Like a Pro in NodeJs: The hooks","permalink":"/blog/2022/08/08/commiting-like-pro-part-1"},"nextItem":{"title":"Update your npm package dependencies and release with Travis","permalink":"/blog/2018/07/11/travis-ci-update-npm-package-dependencies-and-release"}},"content":"Over the last few years, some practices appear to be more a dogma than a value adding practice. One of this is `Pull Requests`.\\n\\n### Why PR\'s exist\\n\\n* **Malicious Code Prevention**: Pull requests exist mostly as a practice accepted for `zero trust environments` (ex. Open Source). An attack vector on this type of environment is the ability of anyone to contribute, meaning you could inject code that could create known vulnerabilities that packages will inherit. That is why maintainers validate code from unknown users.\\n\\n![Malicious actors](https://github.com/kanekotic/diagrams/blob/main/Stop%20doing%20PR.drawio.png?raw=true)\\n\\n* **Highly Distributed Teams**: PR\'s can be use for highly distributed teams (around the clock) as a way to do knowledge sharing. If someone in side A of the world can follow and understand the changes for a feature that is being developed in side B of the world.\\n\\n![Distributed Teams](https://github.com/kanekotic/diagrams/blob/main/Stop%20doing%20PR-Around%20The%20Clock.drawio.png?raw=true)\\n\\n### The issue\\n\\nIS there any value of doing PRs when people work collocated? What is the cost of PRs in trust environments?\\n\\nThe value that normally people give to PRs is the one of having a **peer review process**. Nevertheless, we will see later in this article that there are less invasive ways to do this.\\n\\nSome costs of PRs are:\\n\\n* **Slow Delivery**: PRs are a start and stop strategy where there is a gateway to merge code. This is time that needs to be taken by developers (writting & preparing a PR) and reviewers (reviewing, commenting, etc) to go through the process. At the same time is more time the code takes to get to production (merging, re-testing, etc). This is significant for features but also for fixes, meaning you can go from a response time of minutes to hours.\\n* **Isolation work**: When working on branches, devs work on code that works isolated but needs to be merged with a continuous stream of changes. This means that any test isolated will probably be invalidated upon merging.\\n* **Lack of ownership**: As work is done isolated, the developer who creates a PR delegates part or the responsibility to the reviewer. Humans don\'t have compilers or containers to run the code in our brain, meaning catching errors tends to be out of our realm.\\n* **Egos**: As catching errors tends to be out of our human realm, PRs tend to become a thing related to preferences (Style, patterns, etc). This hardly provides any value to the code as either tools like linters can do this automatically or it brings premature optimizations.\\n* **Late feedback**: Any valid recommendation is actually provided quite late in the process, when the code has already been written and validated. Causing rework that takes time.\\n\\n### The Alternatives\\n\\n`Pull requests` are just one of the asynchronous peer code reviews styles. Is not the only way of doing peer reviews.\\n\\nSome other types of peer reviews that I, personally, like are:\\n\\n* **Over-the-shoulder**: The bases of this is to have a conversation over what has been or is being implemented. This creates a synchronous feedback loop on an async process. It does not fix all the shortcomings of a PR, but it creates a faster feedback loop.\\n* **Pair Programming / Mob Programming**: The idea is that multiple developers work in the same code base in the same computer, creating a synchronous feedback loop in a synchronous process. This with `Trunk-based development` allows very fast feedback loops at product level, and with the correct tools generates resilience and ownership among developers.\\n\\nThe disclaimer here is I have worked doing pair programming, TDD and trunk-based development for more than 5 years in multiple size companies, and it has always been a bliss."},{"id":"/2018/07/11/travis-ci-update-npm-package-dependencies-and-release","metadata":{"permalink":"/blog/2018/07/11/travis-ci-update-npm-package-dependencies-and-release","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2018-07-11-travis-ci-update-npm-package-dependencies-and-release.md","source":"@site/blog/2018-07-11-travis-ci-update-npm-package-dependencies-and-release.md","title":"Update your npm package dependencies and release with Travis","description":"Update your npm package dependencies and release with Travis","date":"2018-07-11T07:27:28.000Z","formattedDate":"July 11, 2018","tags":[{"label":"ci","permalink":"/blog/tags/ci"},{"label":"cd","permalink":"/blog/tags/cd"},{"label":"versioning","permalink":"/blog/tags/versioning"},{"label":"npm","permalink":"/blog/tags/npm"},{"label":"travis","permalink":"/blog/tags/travis"},{"label":"travisci","permalink":"/blog/tags/travisci"},{"label":"github","permalink":"/blog/tags/github"},{"label":"cron","permalink":"/blog/tags/cron"}],"readingTime":2.01,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Update your npm package dependencies and release with Travis","summary":"Update your npm package dependencies and release with Travis","description":"Update your npm package dependencies and release with Travis","date":"2018-07-11T07:27:28.000Z","tags":["ci","cd","versioning","npm","travis","travisci","github","cron"],"draft":false,"published":false},"prevItem":{"title":"Stop doing PR\'s inside the Office","permalink":"/blog/2022/08/08/stop-prs"},"nextItem":{"title":"Create your User/Organization GitHub Page with Hugo + Travis","permalink":"/blog/2018/07/04/deploy-hugo-with-travis"}},"content":"As a member of the community that like to generate npm packages like libraries and cli tools, sometimes is difficult to maintain everything and keep your package up to date in the dependencies side. I am a fan of having static dependencies as versioning is not being held correctly in most of the npm world. So if you dont use exact packages you could run in the issue that a broken change makes from the night to the morning your awesome tool to break.\\n\\nThis practice could bring a headache to keep dependencies up to date because is a manual process. And manual process tend to be time consuming (at this point in time I have ~17 npm packages) meaning that if i want to simply do normal maintenance i will have to run everything for all those in maybe weekly or monthly bases. \\n\\nSo is a bit of a no situation for maintainers, but if you dont maintain your package people will not use it, because there is a concern about how active the project is, even if there are no open issues. For solving both of this things what i have decided is to ad to my CI/CD pipeline a script that runs only on cron jobs from travis ci.\\n\\n```yml\\nos: osx\\nlanguage: node_js\\nnode_js:\\n  - node\\nscript:\\n  - yarn test:cov\\nafter_success:\\n  - if [[ \\"${TRAVIS_EVENT_TYPE}\\" = \\"cron\\" ]]; then ./upgrade.sh; fi\\ndeploy:\\n  skip_cleanup: true\\n  provider: npm\\n  email: $NPM_EMAIL\\n  api_key: $NPM_TOKEN\\n  on:\\n    tags: true\\n```\\n\\nas you can see that is the normal `.travis.yml` for deploying into npm (you will have to define `NPM_EMAIL` and `NPM_TOKEN` as enviroment variables in your build configuration), the main diference is the step after success that if its the cron job going will run the next script.\\n\\n```bash\\n#!/bin/sh\\n\\nset -e\\n\\ngit config --global user.email $GH_EMAIL\\ngit config --global user.name $GH_USER\\n\\ngit remote add origin-master https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git > /dev/null 2>&1\\n\\ngit fetch origin-master\\ngit checkout -b master-local origin-master/master\\n\\nyarn upgrade --latest\\ngit add .\\ngit commit --allow-empty -m \\"updated dependencies [skip ci]\\"\\n\\nyarn test\\nyarn version --patch\\n\\ngit push --quiet origin-master master-local:master\\ngit push --quiet origin-master master-local:master --tags\\n```\\n\\nthis script attaches the current state to a branch makes, upgrades the dependencies and if everything works fine generates a new commit and deploy a patch of the packages (you will have to define `GH_EMAIL`, `GH_USER` and `GH_TOKEN` as environment variables in your build configuration)."},{"id":"/2018/07/04/deploy-hugo-with-travis","metadata":{"permalink":"/blog/2018/07/04/deploy-hugo-with-travis","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2018-07-04-deploy-hugo-with-travis.md","source":"@site/blog/2018-07-04-deploy-hugo-with-travis.md","title":"Create your User/Organization GitHub Page with Hugo + Travis","description":"Create your User/Organization GitHub Page with Hugo + Travis","date":"2018-07-04T06:35:42.000Z","formattedDate":"July 4, 2018","tags":[{"label":"ci","permalink":"/blog/tags/ci"},{"label":"cd","permalink":"/blog/tags/cd"},{"label":"versioning","permalink":"/blog/tags/versioning"},{"label":"travis","permalink":"/blog/tags/travis"},{"label":"travisci","permalink":"/blog/tags/travisci"},{"label":"github","permalink":"/blog/tags/github"}],"readingTime":1.875,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Create your User/Organization GitHub Page with Hugo + Travis","summary":"Create your User/Organization GitHub Page with Hugo + Travis","description":"Create your User/Organization GitHub Page with Hugo + Travis","date":"2018-07-04T06:35:42.000Z","tags":["ci","cd","versioning","travis","travisci","github"],"draft":false,"published":false},"prevItem":{"title":"Update your npm package dependencies and release with Travis","permalink":"/blog/2018/07/11/travis-ci-update-npm-package-dependencies-and-release"},"nextItem":{"title":"C# - Extension methods overlap with linq","permalink":"/blog/2016/01/28/extension-methods-overlap-with-linq"}},"content":"I have just finished migrating my static blog from Hexo to Hugo and one of the main things I care about is to be able to do continuous deployment of my profile and blog. There are quite a few blog posts out there but they are based on using shell scripts and it really becomes a pain to give permissions etc. In the next few lines you will see the simplest way I have found to do this (and is currently as this blog post is being published).\\n\\nYou will need to have:\\n\\n- A Github account.\\n- A Travis CI account.\\n- A Github repository with source code of your web page with Hugo (*1)\\n- A Github repository with the name `<your User or Organization>.github.com` (ex. kanekotic.github.com) (*2).\\n- A developer token from GitHub with commit capabilities (can create in github `Settings -> Developer Settings -> Personal Access Token -> Generate New Token` )\\n\\nI wont cover how to create a Hugo web page as this is best explained in the [quick start](https://gohugo.io/getting-started/quick-start/)) of Hugo.\\n\\nAfter you are happy with the content of your blog in the repository of source code (*1), and want to start deploying you will need to add a `.travis.yml` with the next content\\n\\n```yml\\nsudo: true\\ndist: trusty\\n\\ninstall:\\n  - sudo apt-get --yes install snapd\\n  - sudo snap install hugo\\n\\nscript:\\n  - /snap/bin/hugo \\n\\ndeploy:\\n  provider: pages\\n  local-dir: public\\n  repo: <User or Organization>/<User or Organization>.github.com\\n  target-branch: master\\n  skip-cleanup: true\\n  github-token: $GITHUB_TOKEN\\n  committer-from-gh: true\\n  keep-history: true\\n  on:\\n    branch: master\\n```\\n\\nyou will have to change the repo content to match your destination repository (*2). The previous code what does is installs hugo in the deployment machine, builds your web page and deploys using the pages plugin. If you have a custom domain make sure to set the property `fqdn` to your domain, if not you will overwrite this field in each commit.\\n\\nAfter adding the file you will have to go to Travis web page and toggle your code repository (*1) got to `More Options -> Settings -> Environment Variables` and add `GITHUB_TOKEN` as the token retrieved from github.\\n\\nAfter this in any commit in the master branch of your web page you will get it deployed and go live."},{"id":"/2016/01/28/extension-methods-overlap-with-linq","metadata":{"permalink":"/blog/2016/01/28/extension-methods-overlap-with-linq","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-01-28-extension-methods-overlap-with-linq.md","source":"@site/blog/2016-01-28-extension-methods-overlap-with-linq.md","title":"C# - Extension methods overlap with linq","description":"C# - Extension methods overlap with linq","date":"2016-01-28T07:56:49.000Z","formattedDate":"January 28, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":1.78,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"C# - Extension methods overlap with linq","summary":"C# - Extension methods overlap with linq","description":"C# - Extension methods overlap with linq","date":"2016-01-28T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"Create your User/Organization GitHub Page with Hugo + Travis","permalink":"/blog/2018/07/04/deploy-hugo-with-travis"},"nextItem":{"title":"C# - Fluent Interfaces with Extension Methods","permalink":"/blog/2016/01/27/interface-with-extension-methods"}},"content":"I have hit a corner case of extension methods and LINQ. Today I was declaring some extension methods to make my code more readable.So I created an extension method that gets an object and performs a direct cast:\\n\\n```csharp\\npublic static class GeneralExtensions\\n{\\n    public static T Cast<T>(this object o)\\n    {\\n    \\treturn (T)o;\\n    }\\n}\\n```\\n\\nThe intention was to be able to call my direct castings by something like this:\\n```csharp\\nMyObject.CastTo<MyInterface>();\\n```\\n\\nIt happens that in the same namespace I have an extension method that has a LINQ expression\\n```csharp\\nusing System;\\nusing System.Collections.Generic;\\nusing System.Linq;\\n\\npublic static class EnumExtenstions\\n{\\n\\tpublic static IEnumerable<string> UseLinq(this IEnumerable<object> collection)\\n\\t{\\n\\t\\treturn (from object value in collection select value.ToString() ).ToList();\\n\\t}\\n}\\n```\\n\\nAdding this first extension method to my code base cause the next error\\n```\\nError\\tCS1936\\tCould not find an implementation of the query pattern for source type \'object\'.  \'Select\' not found.\\n```\\n\\nHaving both extension methods in different namespaces (and not referred), or rename ```Cast<T>``` to something different solves the issue. This is caused for an overlap of the extension methods where the nearest one to the code is the one called.\\n\\n##**How bad Extension Methods over object could go?**\\n\\nThis is an extract from the answer of Eric Lippert, regarding the code:\\n\\n```csharp\\npublic static class GeneralExtensions\\n{\\n    public static T Cast<T>(this object o)\\n    {\\n    \\treturn (T)o;\\n    }\\n}\\n```\\nSide Effects of the ```cast<T>```:\\n* ```Cast<int>(123)``` unnecessarily boxes the int, ```(int)123``` does not.\\n* ```Cast< short >(123)``` fails but ```(short)123``` succeeds. There is no conversion from a boxed int to a short.\\n* Suppose you have a user-defined conversion from Animal to Shape. ```Cast<Shape>(new Tiger())``` fails but ```(Shape) new Tiger()``` succeeds.\\n* Suppose q is a nullable int that happens to be null. ```Cast<string>(q)``` succeeds! But ```(string)q``` would fail at compile time\\n* Etc\\n\\nCast method has some overlap with the real cast operator but is not a substitute for it. To capture the semantics of the cast operator there is a need to use dynamic, which starts the compiler at runtime and does the compile time analysis on runtime types."},{"id":"/2016/01/27/interface-with-extension-methods","metadata":{"permalink":"/blog/2016/01/27/interface-with-extension-methods","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-01-27-interface-with-extension-methods.md","source":"@site/blog/2016-01-27-interface-with-extension-methods.md","title":"C# - Fluent Interfaces with Extension Methods","description":"C# - Fluent Interfaces with Extension Methods","date":"2016-01-27T07:56:49.000Z","formattedDate":"January 27, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":0.87,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"C# - Fluent Interfaces with Extension Methods","summary":"C# - Fluent Interfaces with Extension Methods","description":"C# - Fluent Interfaces with Extension Methods","date":"2016-01-27T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"C# - Extension methods overlap with linq","permalink":"/blog/2016/01/28/extension-methods-overlap-with-linq"},"nextItem":{"title":"Coding - C# - Complex Constructors","permalink":"/blog/2016/01/26/c-sharp-complex-constructors"}},"content":"I have not experiment to much with fluent interfaces. But is something cool especially to make code that is expressive.\\n\\n```csharp\\npublic struct Coordenates\\n    {\\n        public double X { get; set; }\\n        public double Y { get; set; }\\n        public double Z { get; set; }\\n    }\\n\\n    public static class CoordenatesExtensions\\n    {\\n\\n        public static Coordenates X(this Coordenates coordenates, double value)\\n        {\\n            coordenates.X = value;\\n            return coordenates;\\n        }\\n\\n        public static Coordenates Y(this Coordenates coordenates, double value)\\n        {\\n            coordenates.Y = value;\\n            return coordenates;\\n        }\\n        public static Coordenates Z(this Coordenates coordenates, double value)\\n        {\\n            coordenates.Z = value;\\n            return coordenates;\\n        }\\n    }\\n\\n    public class Points\\n    {\\n        private Coordenates point;\\n        public Points()\\n        {\\n            point = new Coordenates().X(2.1).Y(2.4).Z(3.2);\\n        }\\n    }\\n```\\nalso can be used with some language properties to make it more expressive\\n```csharp\\npublic static class GeneralExtensions\\n{\\n    public static T As<T>(this object o) where T : class\\n    {\\n        return o as T;\\n    }\\n\\n    public static T Cast<T>(this object o)\\n    {\\n        return (T)o;\\n    }\\n\\n    public static bool Is<T>(this object o)\\n    {\\n        return o is T;\\n    }\\n}\\n\\n```"},{"id":"/2016/01/26/c-sharp-complex-constructors","metadata":{"permalink":"/blog/2016/01/26/c-sharp-complex-constructors","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-01-26-c-sharp-complex-constructors.md","source":"@site/blog/2016-01-26-c-sharp-complex-constructors.md","title":"Coding - C# - Complex Constructors","description":"Coding - C# - Complex Constructors","date":"2016-01-26T07:56:49.000Z","formattedDate":"January 26, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":0.985,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Coding - C# - Complex Constructors","description":"Coding - C# - Complex Constructors","date":"2016-01-26T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"C# - Fluent Interfaces with Extension Methods","permalink":"/blog/2016/01/27/interface-with-extension-methods"}},"content":"When doing complex objects using an object to help the building is welcome.\\n```csharp\\npublic class Complex\\n{\\n    double x;\\n    double y;\\n    double z;\\n\\n    float height;\\n    float width;\\n\\n    string foreground;\\n    string background;\\n\\n    public Complex()\\n    {\\n        x = 1.456;\\n        y = 1.234;\\n        z = 1.789;\\n\\n        height = 10.12;\\n        width = 10.14;\\n\\n        foreground = \\"#FFF\\";\\n        background = \\"#FA1\\";\\n    }\\n\\n}\\n```\\nIn this way you remove some complexity of just adding steps in your constructor to something more abstract and can contain the logic.\\n\\n```csharp\\npublic class Complex\\n{\\n    public double X { get; set; }\\n    public double Y { get; set; }\\n    public double Z { get; set; }\\n\\n    public double Height { get; set; }\\n    public double Width { get; set; }\\n\\n    public string Foreground { get; set; }\\n    public string Background { get; set; }\\n\\n    public Complex(ComplexBuildHelper buildHelper)\\n    {\\n        buildHelper.Construct(this);\\n    }\\n\\n}\\n\\npublic class ComplexBuildHelper\\n{\\n    public void Construct(Complex reference)\\n    {\\n        BuildPosition(reference);\\n        BuildDimension(reference);\\n        BuildCharacteristics(reference);\\n    }\\n\\n    private void BuildPosition(Complex reference)\\n    {\\n        reference.X = 1.456;\\n        reference.Y = 1.234;\\n        reference.Z = 1.789;\\n    }\\n\\n    private void BuildDimension(Complex reference)\\n    {\\n        reference.Height = 10.12;\\n        reference.Width = 10.14;\\n    }\\n\\n    private void BuildCharacteristics(Complex reference)\\n    {\\n        reference.Foreground = \\"#FFF\\";\\n        reference.Background = \\"#FA1\\";\\n    }\\n}\\n```"}]}')}}]);