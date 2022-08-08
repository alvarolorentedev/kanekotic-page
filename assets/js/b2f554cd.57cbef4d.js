"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/08/08/commiting-like-pro-part-1","metadata":{"permalink":"/blog/2022/08/08/commiting-like-pro-part-1","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-08-commiting-like-pro-part-1.md","source":"@site/blog/2022-08-08-commiting-like-pro-part-1.md","title":"Commiting Like a Pro in NodeJs: The hooks","description":"Using git hooks to make sure your commits do what you expect","date":"2022-08-08T00:00:00.000Z","formattedDate":"August 8, 2022","tags":[{"label":"agile","permalink":"/blog/tags/agile"},{"label":"webdev","permalink":"/blog/tags/webdev"},{"label":"programming","permalink":"/blog/tags/programming"},{"label":"productivity","permalink":"/blog/tags/productivity"}],"readingTime":2.13,"hasTruncateMarker":false,"authors":[{"name":"Alvaro Jose","title":"Engineering Manager @ClimatePartner","url":"https://github.com/kanekotic","imageURL":"https://github.com/kanekotic.png","key":"kanekotic"}],"frontMatter":{"title":"Commiting Like a Pro in NodeJs: The hooks","description":"Using git hooks to make sure your commits do what you expect","authors":["kanekotic"],"tags":["agile","webdev","programming","productivity"],"draft":false,"published":true,"series":"commiting Like a Pro in NodeJs"},"nextItem":{"title":"Stop doing PR\'s in your Office","permalink":"/blog/2022/08/08/stop-prs"}},"content":"## What & Why Git hooks?\\n\\nGit hooks are scripts that Git executes locally before or after events such as commit, push, and receive.\\n\\nThese hooks are completely programmable trough bash scripting. Examples of what can be done:\\n\\n* pre-commit: Enforce project coding standards.\\n* pre-push: Run tests.\\n\\nThis allows us to make sure we are committing the correct things at the correct time. Not breaking our code just because of the mental load of doing things as a manual process that can be forgotten.\\n\\n## How to Start\\n\\n### Add Husky\\n\\n[Husky](https://typicode.github.io/husky/#/) is a tool that allows Git hooks using JavaScript configured using individual files for hooks in a `.husky/` directory.\\n\\nThe fastest way to install husky is by using `husky-init`, a one-time command to quickly initialize a project with husky:\\n\\n```sh\\nnpx husky-init && npm install       # npm\\nnpx husky-init && yarn              # Yarn 1\\nyarn dlx husky-init --yarn2 && yarn # Yarn 2+\\npnpm dlx husky-init && pnpm install # pnpm\\n```\\n\\nIt will set up husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run test when you commit.\\n\\nTo add another hook, use `husky add`.\\n\\nIf you are not comfortable using  `husky-init` you can find other options [here](https://typicode.github.io/husky/#/?id=manual).\\n\\n### Add lint-staged\\n\\nHusky is very useful, but it will run natively to git and not focus the commands in our bash scripts for all the files, not only the ones we want to commit.\\n\\n[Lint Staged](https://github.com/okonet/lint-staged) appear to resolve this problem. It allows you to run the process against staged git files that match a pattern.\\n\\n[![asciicast](https://asciinema.org/a/199934.svg)](https://asciinema.org/a/199934)\\n\\nInstall `lint-staged` by adding it to your local project.\\n\\n```sh\\nnpm install lint-staged --save-dev\\nyarn add lint-staged -D \\n```\\n\\nIn your package.json add it as a script(`\\"lint-staged\\": \\"lint-staged\\",`) and refer it through a `pre-commit` hook. If using Husky, this can be found in `.husky/pre-commit` with the next content:\\n\\n```sh\\n#!/bin/sh\\n. \\"$(dirname \\"$0\\")/_/husky.sh\\"\\n\\nyarn lint-staged\\n```\\n\\nThere are multiple ways to [configure lint-staged](https://github.com/okonet/lint-staged#configuration). One of them is having a `lint-staged.config.js` file in your project root folder. In this file, you can express what process you want to run for what types of files. For example:\\n\\n```js\\nmodule.exports = {\\n  \'*.{ts,tsx}\': [() => \'yarn tsc:check\', \'yarn format\', \'yarn lint:fix\', \'yarn test\', \'git add .\'],\\n};\\n```\\n\\nThe previous snipped runs the compiler check, formatting, linting and test before adding the fixed staged files to the current commit.\\n\\n## Conclusion\\n\\nWith this two tools, we will now be pushing code that will pass similar checks than our CI/CD system."},{"id":"/2022/08/08/stop-prs","metadata":{"permalink":"/blog/2022/08/08/stop-prs","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2022-08-08-stop-prs.md","source":"@site/blog/2022-08-08-stop-prs.md","title":"Stop doing PR\'s in your Office","description":"PRs should only be part of certain environments and not a general practice","date":"2022-08-08T00:00:00.000Z","formattedDate":"August 8, 2022","tags":[{"label":"agile","permalink":"/blog/tags/agile"},{"label":"webdev","permalink":"/blog/tags/webdev"},{"label":"programming","permalink":"/blog/tags/programming"},{"label":"productivity","permalink":"/blog/tags/productivity"}],"readingTime":3.02,"hasTruncateMarker":false,"authors":[{"name":"Alvaro Jose","title":"Engineering Manager @ClimatePartner","url":"https://github.com/kanekotic","imageURL":"https://github.com/kanekotic.png","key":"kanekotic"}],"frontMatter":{"title":"Stop doing PR\'s in your Office","description":"PRs should only be part of certain environments and not a general practice","authors":["kanekotic"],"tags":["agile","webdev","programming","productivity"],"draft":false,"published":true},"prevItem":{"title":"Commiting Like a Pro in NodeJs: The hooks","permalink":"/blog/2022/08/08/commiting-like-pro-part-1"},"nextItem":{"title":"Update your npm package dependencies and release with Travis","permalink":"/blog/2018/07/11/travis-ci-update-npm-package-dependencies-and-release"}},"content":"Over the last few years, some practices appear to be more a dogma than a value adding practice. One of this is `Pull Requests`.\\n\\n### Why PR\'s exist\\n\\n* **Malicious Code Prevention**: Pull requests exist mostly as a practice accepted for `zero trust environments` (ex. Open Source). An attack vector on this type of environment is the ability of anyone to contribute, meaning you could inject code that could create known vulnerabilities that packages will inherit. That is why maintainers validate code from unknown users.\\n\\n![Malicious actors](https://github.com/kanekotic/diagrams/blob/main/Stop%20doing%20PR.drawio.png?raw=true)\\n\\n* **Highly Distributed Teams**: PR\'s can be use for highly distributed teams (around the clock) as a way to do knowledge sharing. If someone in side A of the world can follow and understand the changes for a feature that is being developed in side B of the world.\\n\\n![Distributed Teams](https://github.com/kanekotic/diagrams/blob/main/Stop%20doing%20PR-Around%20The%20Clock.drawio.png?raw=true)\\n\\n### The issue\\n\\nIS there any value of doing PRs when people work collocated? What is the cost of PRs in trust environments?\\n\\nThe value that normally people give to PRs is the one of having a **peer review process**. Nevertheless, we will see later in this article that there are less invasive ways to do this.\\n\\nSome costs of PRs are:\\n\\n* **Slow Delivery**: PRs are a start and stop strategy where there is a gateway to merge code. This is time that needs to be taken by developers (writting & preparing a PR) and reviewers (reviewing, commenting, etc) to go through the process. At the same time is more time the code takes to get to production (merging, re-testing, etc). This is significant for features but also for fixes, meaning you can go from a response time of minutes to hours.\\n* **Isolation work**: When working on branches, devs work on code that works isolated but needs to be merged with a continuous stream of changes. This means that any test isolated will probably be invalidated upon merging.\\n* **Lack of ownership**: As work is done isolated, the developer who creates a PR delegates part or the responsibility to the reviewer. Humans don\'t have compilers or containers to run the code in our brain, meaning catching errors tends to be out of our realm.\\n* **Egos**: As catching errors tends to be out of our human realm, PRs tend to become a thing related to preferences (Style, patterns, etc). This hardly provides any value to the code as either tools like linters can do this automatically or it brings premature optimizations.\\n* **Late feedback**: Any valid recommendation is actually provided quite late in the process, when the code has already been written and validated. Causing rework that takes time.\\n\\n### The Alternatives\\n\\n`Pull requests` are just one of the asynchronous peer code reviews styles. Is not the only way of doing peer reviews.\\n\\nSome other types of peer reviews that I, personally, like are:\\n\\n* **Over-the-shoulder**: The bases of this is to have a conversation over what has been or is being implemented. This creates a synchronous feedback loop on an async process. It does not fix all the shortcomings of a PR, but it creates a faster feedback loop.\\n* **Pair Programming / Mob Programming**: The idea is that multiple developers work in the same code base in the same computer, creating a synchronous feedback loop in a synchronous process. This with `Trunk-based development` allows very fast feedback loops at product level, and with the correct tools generates resilience and ownership among developers.\\n\\nThe disclaimer here is I have worked doing pair programming, TDD and trunk-based development for more than 5 years in multiple size companies, and it has always been a bliss."},{"id":"/2018/07/11/travis-ci-update-npm-package-dependencies-and-release","metadata":{"permalink":"/blog/2018/07/11/travis-ci-update-npm-package-dependencies-and-release","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2018-07-11-travis-ci-update-npm-package-dependencies-and-release.md","source":"@site/blog/2018-07-11-travis-ci-update-npm-package-dependencies-and-release.md","title":"Update your npm package dependencies and release with Travis","description":"Update your npm package dependencies and release with Travis","date":"2018-07-11T07:27:28.000Z","formattedDate":"July 11, 2018","tags":[{"label":"ci","permalink":"/blog/tags/ci"},{"label":"cd","permalink":"/blog/tags/cd"},{"label":"versioning","permalink":"/blog/tags/versioning"},{"label":"npm","permalink":"/blog/tags/npm"},{"label":"travis","permalink":"/blog/tags/travis"},{"label":"travisci","permalink":"/blog/tags/travisci"},{"label":"github","permalink":"/blog/tags/github"},{"label":"cron","permalink":"/blog/tags/cron"}],"readingTime":2.01,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Update your npm package dependencies and release with Travis","summary":"Update your npm package dependencies and release with Travis","description":"Update your npm package dependencies and release with Travis","date":"2018-07-11T07:27:28.000Z","tags":["ci","cd","versioning","npm","travis","travisci","github","cron"],"draft":false,"published":false},"prevItem":{"title":"Stop doing PR\'s in your Office","permalink":"/blog/2022/08/08/stop-prs"},"nextItem":{"title":"Create your User/Organization GitHub Page with Hugo + Travis","permalink":"/blog/2018/07/04/deploy-hugo-with-travis"}},"content":"As a member of the community that like to generate npm packages like libraries and cli tools, sometimes is difficult to maintain everything and keep your package up to date in the dependencies side. I am a fan of having static dependencies as versioning is not being held correctly in most of the npm world. So if you dont use exact packages you could run in the issue that a broken change makes from the night to the morning your awesome tool to break.\\n\\nThis practice could bring a headache to keep dependencies up to date because is a manual process. And manual process tend to be time consuming (at this point in time I have ~17 npm packages) meaning that if i want to simply do normal maintenance i will have to run everything for all those in maybe weekly or monthly bases. \\n\\nSo is a bit of a no situation for maintainers, but if you dont maintain your package people will not use it, because there is a concern about how active the project is, even if there are no open issues. For solving both of this things what i have decided is to ad to my CI/CD pipeline a script that runs only on cron jobs from travis ci.\\n\\n```yml\\nos: osx\\nlanguage: node_js\\nnode_js:\\n  - node\\nscript:\\n  - yarn test:cov\\nafter_success:\\n  - if [[ \\"${TRAVIS_EVENT_TYPE}\\" = \\"cron\\" ]]; then ./upgrade.sh; fi\\ndeploy:\\n  skip_cleanup: true\\n  provider: npm\\n  email: $NPM_EMAIL\\n  api_key: $NPM_TOKEN\\n  on:\\n    tags: true\\n```\\n\\nas you can see that is the normal `.travis.yml` for deploying into npm (you will have to define `NPM_EMAIL` and `NPM_TOKEN` as enviroment variables in your build configuration), the main diference is the step after success that if its the cron job going will run the next script.\\n\\n```bash\\n#!/bin/sh\\n\\nset -e\\n\\ngit config --global user.email $GH_EMAIL\\ngit config --global user.name $GH_USER\\n\\ngit remote add origin-master https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git > /dev/null 2>&1\\n\\ngit fetch origin-master\\ngit checkout -b master-local origin-master/master\\n\\nyarn upgrade --latest\\ngit add .\\ngit commit --allow-empty -m \\"updated dependencies [skip ci]\\"\\n\\nyarn test\\nyarn version --patch\\n\\ngit push --quiet origin-master master-local:master\\ngit push --quiet origin-master master-local:master --tags\\n```\\n\\nthis script attaches the current state to a branch makes, upgrades the dependencies and if everything works fine generates a new commit and deploy a patch of the packages (you will have to define `GH_EMAIL`, `GH_USER` and `GH_TOKEN` as environment variables in your build configuration)."},{"id":"/2018/07/04/deploy-hugo-with-travis","metadata":{"permalink":"/blog/2018/07/04/deploy-hugo-with-travis","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2018-07-04-deploy-hugo-with-travis.md","source":"@site/blog/2018-07-04-deploy-hugo-with-travis.md","title":"Create your User/Organization GitHub Page with Hugo + Travis","description":"Create your User/Organization GitHub Page with Hugo + Travis","date":"2018-07-04T06:35:42.000Z","formattedDate":"July 4, 2018","tags":[{"label":"ci","permalink":"/blog/tags/ci"},{"label":"cd","permalink":"/blog/tags/cd"},{"label":"versioning","permalink":"/blog/tags/versioning"},{"label":"travis","permalink":"/blog/tags/travis"},{"label":"travisci","permalink":"/blog/tags/travisci"},{"label":"github","permalink":"/blog/tags/github"}],"readingTime":1.875,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Create your User/Organization GitHub Page with Hugo + Travis","summary":"Create your User/Organization GitHub Page with Hugo + Travis","description":"Create your User/Organization GitHub Page with Hugo + Travis","date":"2018-07-04T06:35:42.000Z","tags":["ci","cd","versioning","travis","travisci","github"],"draft":false,"published":false},"prevItem":{"title":"Update your npm package dependencies and release with Travis","permalink":"/blog/2018/07/11/travis-ci-update-npm-package-dependencies-and-release"},"nextItem":{"title":"Unit Test CheatSheet","permalink":"/blog/2016/03/02/unit-test-cheatsheet"}},"content":"I have just finished migrating my static blog from Hexo to Hugo and one of the main things I care about is to be able to do continuous deployment of my profile and blog. There are quite a few blog posts out there but they are based on using shell scripts and it really becomes a pain to give permissions etc. In the next few lines you will see the simplest way I have found to do this (and is currently as this blog post is being published).\\n\\nYou will need to have:\\n\\n- A Github account.\\n- A Travis CI account.\\n- A Github repository with source code of your web page with Hugo (*1)\\n- A Github repository with the name `<your User or Organization>.github.com` (ex. kanekotic.github.com) (*2).\\n- A developer token from GitHub with commit capabilities (can create in github `Settings -> Developer Settings -> Personal Access Token -> Generate New Token` )\\n\\nI wont cover how to create a Hugo web page as this is best explained in the [quick start](https://gohugo.io/getting-started/quick-start/)) of Hugo.\\n\\nAfter you are happy with the content of your blog in the repository of source code (*1), and want to start deploying you will need to add a `.travis.yml` with the next content\\n\\n```yml\\nsudo: true\\ndist: trusty\\n\\ninstall:\\n  - sudo apt-get --yes install snapd\\n  - sudo snap install hugo\\n\\nscript:\\n  - /snap/bin/hugo \\n\\ndeploy:\\n  provider: pages\\n  local-dir: public\\n  repo: <User or Organization>/<User or Organization>.github.com\\n  target-branch: master\\n  skip-cleanup: true\\n  github-token: $GITHUB_TOKEN\\n  committer-from-gh: true\\n  keep-history: true\\n  on:\\n    branch: master\\n```\\n\\nyou will have to change the repo content to match your destination repository (*2). The previous code what does is installs hugo in the deployment machine, builds your web page and deploys using the pages plugin. If you have a custom domain make sure to set the property `fqdn` to your domain, if not you will overwrite this field in each commit.\\n\\nAfter adding the file you will have to go to Travis web page and toggle your code repository (*1) got to `More Options -> Settings -> Environment Variables` and add `GITHUB_TOKEN` as the token retrieved from github.\\n\\nAfter this in any commit in the master branch of your web page you will get it deployed and go live."},{"id":"/2016/03/02/unit-test-cheatsheet","metadata":{"permalink":"/blog/2016/03/02/unit-test-cheatsheet","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-03-02-unit-test-cheatsheet.md","source":"@site/blog/2016-03-02-unit-test-cheatsheet.md","title":"Unit Test CheatSheet","description":"Unit Test CheatSheet","date":"2016-03-02T07:56:49.000Z","formattedDate":"March 2, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":0.4,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Unit Test CheatSheet","summary":"Unit Test CheatSheet","description":"Unit Test CheatSheet","date":"2016-03-02T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"Create your User/Organization GitHub Page with Hugo + Travis","permalink":"/blog/2018/07/04/deploy-hugo-with-travis"},"nextItem":{"title":"C# - Path.Combine","permalink":"/blog/2016/02/04/csharp-path-combine"}},"content":"##**mstest**\\n\\nlinks:\\n* [assert](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.assert.aspx)\\n* [collection assert](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.collectionassert.aspx)\\n\\n##**Nunit**\\n\\nlinks:\\n* [Attributes](https://github.com/nunit/docs/wiki/Attributes)\\n* [Assertion](https://github.com/nunit/docs/wiki/Assertions)\\n\\n##**MOQ**\\nExample\\n```cs\\npublic interface IFoo {\\n   public bool DoSomething(string);\\n}\\n\\nint calls;\\nvar mock = new Mock<IFoo>();\\nmock.Setup(foo => foo.DoSomething(It.IsAny<string>())).\\n         Returns((string s) => s.ToLower())\\n         .Callback(() => ++calls);\\n\\nmock.SetupProperty(f => f.Name, \\"foo\\");\\nmock.VerifySet(foo => foo.Name = \\"foo\\");\\n\\nmock.Verify(foo => foo.DoSomething(It.IsAny<string>()), Times.Never());\\n```\\n\\n##**Test internal Classes**\\n\\nIn assembly info to test internal classes you will need to know the name of the file\\n```cs\\n[assembly: InternalsVisibleToAttribute(\\"<Project Name>\\")]\\n```"},{"id":"/2016/02/04/csharp-path-combine","metadata":{"permalink":"/blog/2016/02/04/csharp-path-combine","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-02-04-csharp-path-combine.md","source":"@site/blog/2016-02-04-csharp-path-combine.md","title":"C# - Path.Combine","description":"C# - Path.Combine","date":"2016-02-04T07:56:49.000Z","formattedDate":"February 4, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":0.195,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"C# - Path.Combine","summary":"C# - Path.Combine","description":"C# - Path.Combine","date":"2016-02-04T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"Unit Test CheatSheet","permalink":"/blog/2016/03/02/unit-test-cheatsheet"},"nextItem":{"title":"C# - Paths to system folders","permalink":"/blog/2016/01/29/csharp-path-to-system-folders"}},"content":"When using path.Combine if the second argument starts with a /. the first path is ignored and will give a path based on the C: drive.\\n```csharp\\nvar path = Path.Combine(firstpath,$@\\"\\\\myfolder\\\\myfile.txt\\");\\n```\\n\\nwill not return <firstpath\\\\myfolder\\\\myfile.txt> will return <C:\\\\\\\\\\\\myfolder\\\\myfile.txt>."},{"id":"/2016/01/29/csharp-path-to-system-folders","metadata":{"permalink":"/blog/2016/01/29/csharp-path-to-system-folders","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-01-29-csharp-path-to-system-folders.md","source":"@site/blog/2016-01-29-csharp-path-to-system-folders.md","title":"C# - Paths to system folders","description":"C# - Paths to system folders","date":"2016-01-29T07:56:49.000Z","formattedDate":"January 29, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":0.265,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"C# - Paths to system folders","summary":"C# - Paths to system folders","description":"C# - Paths to system folders","date":"2016-01-29T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"C# - Path.Combine","permalink":"/blog/2016/02/04/csharp-path-combine"},"nextItem":{"title":"C# - Extension methods overlap with linq","permalink":"/blog/2016/01/28/extension-methods-overlap-with-linq"}},"content":"In the Environment class there is a property called SpecialFolder. This will provide the paths to folders like: Program files, desktop, AppData, etc. The use is the next one:\\n\\n```csharp\\nEnvironment.SpecialFolder.<NameSpecialFolder>\\n```\\n\\nWhere `<NameSpecialFolder>` is the given name of the folder required, for example the AppData Local folder will be\\n\\n```csharp\\nEnvironment.SpecialFolder.LocalApplicationData\\n```"},{"id":"/2016/01/28/extension-methods-overlap-with-linq","metadata":{"permalink":"/blog/2016/01/28/extension-methods-overlap-with-linq","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-01-28-extension-methods-overlap-with-linq.md","source":"@site/blog/2016-01-28-extension-methods-overlap-with-linq.md","title":"C# - Extension methods overlap with linq","description":"C# - Extension methods overlap with linq","date":"2016-01-28T07:56:49.000Z","formattedDate":"January 28, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":1.78,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"C# - Extension methods overlap with linq","summary":"C# - Extension methods overlap with linq","description":"C# - Extension methods overlap with linq","date":"2016-01-28T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"C# - Paths to system folders","permalink":"/blog/2016/01/29/csharp-path-to-system-folders"},"nextItem":{"title":"C# - Fluent Interfaces with Extension Methods","permalink":"/blog/2016/01/27/interface-with-extension-methods"}},"content":"I have hit a corner case of extension methods and LINQ. Today I was declaring some extension methods to make my code more readable.So I created an extension method that gets an object and performs a direct cast:\\n\\n```csharp\\npublic static class GeneralExtensions\\n{\\n    public static T Cast<T>(this object o)\\n    {\\n    \\treturn (T)o;\\n    }\\n}\\n```\\n\\nThe intention was to be able to call my direct castings by something like this:\\n```csharp\\nMyObject.CastTo<MyInterface>();\\n```\\n\\nIt happens that in the same namespace I have an extension method that has a LINQ expression\\n```csharp\\nusing System;\\nusing System.Collections.Generic;\\nusing System.Linq;\\n\\npublic static class EnumExtenstions\\n{\\n\\tpublic static IEnumerable<string> UseLinq(this IEnumerable<object> collection)\\n\\t{\\n\\t\\treturn (from object value in collection select value.ToString() ).ToList();\\n\\t}\\n}\\n```\\n\\nAdding this first extension method to my code base cause the next error\\n```\\nError\\tCS1936\\tCould not find an implementation of the query pattern for source type \'object\'.  \'Select\' not found.\\n```\\n\\nHaving both extension methods in different namespaces (and not referred), or rename ```Cast<T>``` to something different solves the issue. This is caused for an overlap of the extension methods where the nearest one to the code is the one called.\\n\\n##**How bad Extension Methods over object could go?**\\n\\nThis is an extract from the answer of Eric Lippert, regarding the code:\\n\\n```csharp\\npublic static class GeneralExtensions\\n{\\n    public static T Cast<T>(this object o)\\n    {\\n    \\treturn (T)o;\\n    }\\n}\\n```\\nSide Effects of the ```cast<T>```:\\n* ```Cast<int>(123)``` unnecessarily boxes the int, ```(int)123``` does not.\\n* ```Cast< short >(123)``` fails but ```(short)123``` succeeds. There is no conversion from a boxed int to a short.\\n* Suppose you have a user-defined conversion from Animal to Shape. ```Cast<Shape>(new Tiger())``` fails but ```(Shape) new Tiger()``` succeeds.\\n* Suppose q is a nullable int that happens to be null. ```Cast<string>(q)``` succeeds! But ```(string)q``` would fail at compile time\\n* Etc\\n\\nCast method has some overlap with the real cast operator but is not a substitute for it. To capture the semantics of the cast operator there is a need to use dynamic, which starts the compiler at runtime and does the compile time analysis on runtime types."},{"id":"/2016/01/27/interface-with-extension-methods","metadata":{"permalink":"/blog/2016/01/27/interface-with-extension-methods","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-01-27-interface-with-extension-methods.md","source":"@site/blog/2016-01-27-interface-with-extension-methods.md","title":"C# - Fluent Interfaces with Extension Methods","description":"C# - Fluent Interfaces with Extension Methods","date":"2016-01-27T07:56:49.000Z","formattedDate":"January 27, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":0.87,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"C# - Fluent Interfaces with Extension Methods","summary":"C# - Fluent Interfaces with Extension Methods","description":"C# - Fluent Interfaces with Extension Methods","date":"2016-01-27T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"C# - Extension methods overlap with linq","permalink":"/blog/2016/01/28/extension-methods-overlap-with-linq"},"nextItem":{"title":"Meteor the beginning","permalink":"/blog/2016/01/27/meteor-the-beginning"}},"content":"I have not experiment to much with fluent interfaces. But is something cool especially to make code that is expressive.\\n\\n```csharp\\npublic struct Coordenates\\n    {\\n        public double X { get; set; }\\n        public double Y { get; set; }\\n        public double Z { get; set; }\\n    }\\n\\n    public static class CoordenatesExtensions\\n    {\\n\\n        public static Coordenates X(this Coordenates coordenates, double value)\\n        {\\n            coordenates.X = value;\\n            return coordenates;\\n        }\\n\\n        public static Coordenates Y(this Coordenates coordenates, double value)\\n        {\\n            coordenates.Y = value;\\n            return coordenates;\\n        }\\n        public static Coordenates Z(this Coordenates coordenates, double value)\\n        {\\n            coordenates.Z = value;\\n            return coordenates;\\n        }\\n    }\\n\\n    public class Points\\n    {\\n        private Coordenates point;\\n        public Points()\\n        {\\n            point = new Coordenates().X(2.1).Y(2.4).Z(3.2);\\n        }\\n    }\\n```\\nalso can be used with some language properties to make it more expressive\\n```csharp\\npublic static class GeneralExtensions\\n{\\n    public static T As<T>(this object o) where T : class\\n    {\\n        return o as T;\\n    }\\n\\n    public static T Cast<T>(this object o)\\n    {\\n        return (T)o;\\n    }\\n\\n    public static bool Is<T>(this object o)\\n    {\\n        return o is T;\\n    }\\n}\\n\\n```"},{"id":"/2016/01/27/meteor-the-beginning","metadata":{"permalink":"/blog/2016/01/27/meteor-the-beginning","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-01-27-meteor-the-beginning.md","source":"@site/blog/2016-01-27-meteor-the-beginning.md","title":"Meteor the beginning","description":"Meteor the beginning","date":"2016-01-27T07:56:49.000Z","formattedDate":"January 27, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":0.55,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Meteor the beginning","summary":"Meteor the beginning","description":"Meteor the beginning","date":"2016-01-27T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"C# - Fluent Interfaces with Extension Methods","permalink":"/blog/2016/01/27/interface-with-extension-methods"},"nextItem":{"title":"Coding - C# - Complex Constructors","permalink":"/blog/2016/01/26/c-sharp-complex-constructors"}},"content":"##**Documentation**\\n\\nI found a lot of interesting things in this link, i can setup my view model to a real JavaScript object.\\n\\nhttps://viewmodel.meteor.com/docs\\n\\n##**Markdown**\\n\\nTo add markdown support you will have to add the markdown package:\\n\\n```\\nmeteor add markdown\\n```\\n\\nIf you also want your snippets of code to have some style you will also need to add the highlight.js package:\\n\\n```\\nmeteor add simple:highlight.js\\n```\\n\\n##**AutoForm**\\n\\nto get a multi-line input you need to make sure you get a textarea. This can be done in the collection definition by:\\n```js\\nTestSchema = new SimpleSchema({\\n    content: {\\n        type: String,\\n        label: \\"Content\\",\\n        autoform: {\\n            rows: 10\\n        }\\n    }\\n});\\n```"},{"id":"/2016/01/26/c-sharp-complex-constructors","metadata":{"permalink":"/blog/2016/01/26/c-sharp-complex-constructors","editUrl":"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2016-01-26-c-sharp-complex-constructors.md","source":"@site/blog/2016-01-26-c-sharp-complex-constructors.md","title":"Coding - C# - Complex Constructors","description":"Coding - C# - Complex Constructors","date":"2016-01-26T07:56:49.000Z","formattedDate":"January 26, 2016","tags":[{"label":"daily","permalink":"/blog/tags/daily"},{"label":"learn","permalink":"/blog/tags/learn"}],"readingTime":0.985,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Coding - C# - Complex Constructors","description":"Coding - C# - Complex Constructors","date":"2016-01-26T07:56:49.000Z","tags":["daily","learn"],"draft":false,"published":false},"prevItem":{"title":"Meteor the beginning","permalink":"/blog/2016/01/27/meteor-the-beginning"}},"content":"When doing complex objects using an object to help the building is welcome.\\n```csharp\\npublic class Complex\\n{\\n    double x;\\n    double y;\\n    double z;\\n\\n    float height;\\n    float width;\\n\\n    string foreground;\\n    string background;\\n\\n    public Complex()\\n    {\\n        x = 1.456;\\n        y = 1.234;\\n        z = 1.789;\\n\\n        height = 10.12;\\n        width = 10.14;\\n\\n        foreground = \\"#FFF\\";\\n        background = \\"#FA1\\";\\n    }\\n\\n}\\n```\\nIn this way you remove some complexity of just adding steps in your constructor to something more abstract and can contain the logic.\\n\\n```csharp\\npublic class Complex\\n{\\n    public double X { get; set; }\\n    public double Y { get; set; }\\n    public double Z { get; set; }\\n\\n    public double Height { get; set; }\\n    public double Width { get; set; }\\n\\n    public string Foreground { get; set; }\\n    public string Background { get; set; }\\n\\n    public Complex(ComplexBuildHelper buildHelper)\\n    {\\n        buildHelper.Construct(this);\\n    }\\n\\n}\\n\\npublic class ComplexBuildHelper\\n{\\n    public void Construct(Complex reference)\\n    {\\n        BuildPosition(reference);\\n        BuildDimension(reference);\\n        BuildCharacteristics(reference);\\n    }\\n\\n    private void BuildPosition(Complex reference)\\n    {\\n        reference.X = 1.456;\\n        reference.Y = 1.234;\\n        reference.Z = 1.789;\\n    }\\n\\n    private void BuildDimension(Complex reference)\\n    {\\n        reference.Height = 10.12;\\n        reference.Width = 10.14;\\n    }\\n\\n    private void BuildCharacteristics(Complex reference)\\n    {\\n        reference.Foreground = \\"#FFF\\";\\n        reference.Background = \\"#FA1\\";\\n    }\\n}\\n```"}]}')}}]);