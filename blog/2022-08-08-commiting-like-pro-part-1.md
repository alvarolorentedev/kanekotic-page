---
title: 'Commiting Like a Pro in NodeJs: The hooks'
description: Using git hooks to make sure your commits do what you expect
authors:
- kanekotic
tags:
- agile
- webdev
- programming
- productivity
draft: false
published: true
series: commiting Like a Pro in NodeJs

---
## What & Why Git hooks?

Git hooks are scripts that Git executes locally before or after events such as commit, push, and receive.

These hooks are completely programmable trough bash scripting. Examples of what can be done:

* pre-commit: Enforce project coding standards.
* pre-push: Run tests.

This allows us to make sure we are committing the correct things at the correct time. Not breaking our code just because of the mental load of doing things as a manual process that can be forgotten.

## How to Start

### Add Husky

[Husky](https://typicode.github.io/husky/#/) is a tool that allows Git hooks using JavaScript configured using individual files for hooks in a `.husky/` directory.

The fastest way to install husky is by using `husky-init`, a one-time command to quickly initialize a project with husky:

```sh
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm
```

It will set up husky, modify package.json and create a sample pre-commit hook that you can edit. By default, it will run test when you commit.

To add another hook, use `husky add`.

If you are not comfortable using  `husky-init` you can find other options [here](https://typicode.github.io/husky/#/?id=manual).

### Add lint-staged

Husky is very useful, but it will run natively to git and not focus the commands in our bash scripts for all the files, not only the ones we want to commit.

[Lint Staged](https://github.com/okonet/lint-staged) appear to resolve this problem. It allows you to run the process against staged git files that match a pattern.

[![asciicast](https://asciinema.org/a/199934.svg)](https://asciinema.org/a/199934)

Install `lint-staged` by adding it to your local project.

```sh
npm install lint-staged --save-dev
yarn add lint-staged -D 
```

In your package.json add it as a script(`"lint-staged": "lint-staged",`) and refer it through a `pre-commit` hook. If using Husky, this can be found in `.husky/pre-commit` with the next content:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged
```

There are multiple ways to [configure lint-staged](https://github.com/okonet/lint-staged#configuration). One of them is having a `lint-staged.config.js` file in your project root folder. In this file, you can express what process you want to run for what types of files. For example:

```js
module.exports = {
  '*.{ts,tsx}': [() => 'yarn tsc:check', 'yarn format', 'yarn lint:fix', 'yarn test', 'git add .'],
};
```

The previous snipped runs the compiler check, formatting, linting and test before adding the fixed staged files to the current commit.

## Conclusion

With this two tools, we will now be pushing code that will pass similar checks than our CI/CD system.