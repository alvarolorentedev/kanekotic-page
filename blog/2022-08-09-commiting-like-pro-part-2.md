---
title: 'Commiting Like a Pro in NodeJs: The Message'
description: Using tools to create descriptive commits
authors:
- kanekotic
tags:
- agile
- webdev
- programming
- productivity
draft: true
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

    npm install cz-format-extension --save-dev # npm
    yarn add cz-format-extension -D  # Yarn

Add