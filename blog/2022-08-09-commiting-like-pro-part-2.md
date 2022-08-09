---
title: 'Commiting Like a Pro in NodeJs: The Message'
description: Using tools to create descriptive commits
authors:
- kanekotic
tags:
- webdev
- git
- programming
- productivity
draft: false
published: false
series: commiting Like a Pro in NodeJs

---
## Why are messages important?

Commit messages are part of the collaboration we do day to day inside a team, it works as a record of what has happened.

> Every time you perform a commit, you’re recording a snapshot of your project that you can revert to or compare to later.
>
> — Pro Git Book

Commit messages are used in many ways, including:

* To help a future reader quickly understand what changed and why it changed
* To assist with easily undoing specific changes
* To prepare change notes or bump versions for a release

All three of these use cases require a clean and consistent commit message style.

## Easy Commit messages with Commitizen

This tool purpose is to define a standard way of committing rules and communicating it. The reasoning behind it is that it is easier to read, and enforces writing descriptive commits. Removing the ambiguity of options and the mental load of following the standard manually.

[Commitizen](https://github.com/commitizen) will prompt you a series of questions that will generate the final commit message. It has multiple adapters, in my case I prefer to be controlling the questions, so I use [cz-format-extension](https://github.com/tyankatsu0105/cz-format-extension "tyankatsu0105/cz-format-extension").

![](https://commitizen-tools.github.io/commitizen/images/demo.gif)

You can add commitizen to your project with the next command line

```sh
npm install commitizen --save-dev # npm
yarn add commitizen -D  # Yarn
```

Add any of the available [adapters](https://github.com/commitizen/cz-cli#adapters), in my case [cz-format-extension](https://github.com/tyankatsu0105/cz-format-extension "tyankatsu0105/cz-format-extension"):

```sh
    npm install cz-format-extension --save-dev # npm
    yarn add cz-format-extension -D  # Yarn
```

In your `package.json` you will need to add the next section:

```sh
  ...
  "config": {
    ...
    "commitizen": {
      "path": "cz-format-extension"
    }
  }
  ...
```

The Adapter [cz-format-extension](https://github.com/tyankatsu0105/cz-format-extension "tyankatsu0105/cz-format-extension") allows a massive flexibility as the questions can be defined in a `.czfrec.js` file. An example is:

```js
const { contributors } = require('./package.json')

module.exports = {
  questions({inquirer}) {
    return [
      {
        type: "list",
        name: "type",
        message: "'What is the type of this change:",
        choices: [
           {
              type: "list",
              name: "type",
              message: "'What is the type of this change:",
              choices: [
          {
            "name": "feat: A new feature",
            "value": "feat"
          },
          {
            "name": "fix: A bug fix",
            "value": "fix"
          },
          {
            "name": "docs: Documentation only changes",
            "value": "docs"
          },
          ...
        ]
      },
      {
        type: 'list',
        name: 'scope',
        message: 'What is the scope of this change:',
        choices: [
            {
              "name": "core: base system of the application",
              "value": "core"
            },
            {
              "name": "extensions: systems that are observed",
              "value": "extensions"
            },
            {
              "name": "tools: other things in the project",
              "value": "tools"
            },
        ]
      },
      {
        type: 'input',
        name: 'message',
        message: "Write a short, imperative tense description of the change\n",
        validate: (message) => message.length === 0 ? 'message is required' : true
      },
      {
        type: 'input',
        name: 'body',
        message: 'Provide a longer description of the change: (press enter to skip)\n',
      },
      {
        type: 'confirm',
        name: 'isBreaking',
        message: 'Are there any breaking changes?',
        default: false
      },
      {
        type: 'input',
        name: 'breaking',
        message: 'Describe the breaking changes:\n',
        when: answers => answers.isBreaking
      },
      {
        type: 'confirm',
        name: 'isIssueAffected',
        message: 'Does this change affect any open issues?',
        default: false
      },
      {
        type: 'input',
        name: 'issues',
        message: 'Add issue references:\n',
        when: answers => answers.isIssueAffected,
        default: undefined,
        validate: (issues) => issues.length === 0 ? 'issues is required' : true
      },
      {
        type: 'checkbox',
        name: 'coauthors',
        message: 'Select Co-Authors if any:',
        choices: contributors.map(contributor => ({
            name: contributor.name,
            value: `Co-authored-by: ${contributor.name} <${contributor.email}>`,
        }))
      },
    ]
  },
  commitMessage({answers}) {
    const scope = answers.scope ? `(${answers.scope})` : '';
    const head = `${answers.type}${scope}: ${answers.message}`;
    const body = answers.body ? answers.body : '';
    const breaking = answers.breaking ? `BREAKING CHANGE: ${answers.breaking}` : '';
    const issues = answers.issues ? answers.issues : '';
    const coauthors = answers.coauthors.join('\n');

    return [head, body, breaking, issues, coauthors].join('\n\n').trim()
  }
}
```

The file creates a process of questions for:

* type: align with semantic release message specification
* scope: affected part of the application
* message: the imperative written message
* body: longer description
* breaking: to determine if it's a breaking change for semantic release
* Issue: related issue of our ticketing system
* Co-Authors: people working in the tasks while pair programming

All these questions are asked interactively and not by the brain power of doing manual work.

And you can then add some nice npm scripts in your `package.json` file pointing to the local version of Commitizen:

      ...
      "scripts": {
        "commit": "cz"
      }

This will be more convenient for your users because then if they want to do a commit, all they need to do is run `npm run commit` and they will get the prompts needed to start a commit!

> **NOTE:** If you are using `precommit` hooks thanks to something like [`husky`](https://www.npmjs.com/package/husky), you will need to name your script something other than `"commit"` (e.g. `"cm": "cz"`). The reason is because npm scripts has a "feature" where it automatically runs scripts with the name _prexxx_ where _xxx_ is the name of another script. In essence, npm and husky will run `"precommit"` scripts twice if you name the script `"commit"`, and the workaround is to prevent the npm-triggered _precommit_ script.

That is all :) . I will do a special mention to [commitlint](https://commitlint.js.org/#/) that is a very useful tool to lint commit messages. I do not use it anymore as it has some overlap with commitizen.