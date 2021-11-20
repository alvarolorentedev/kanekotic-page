---
title: Update your npm package dependencies and release with Travis
summary: Update your npm package dependencies and release with Travis
description: Update your npm package dependencies and release with Travis
date:  2018-07-11T09:27:28+02:00
tags: 
    - ci
    - cd
    - versioning
    - npm
    - travis
    - travisci
    - github
    - cron
draft: false
published: false
series: null
cover_image: null
canonical_url: null
---

As a member of the community that like to generate npm packages like libraries and cli tools, sometimes is difficult to maintain everything and keep your package up to date in the dependencies side. I am a fan of having static dependencies as versioning is not being held correctly in most of the npm world. So if you dont use exact packages you could run in the issue that a broken change makes from the night to the morning your awesome tool to break.

This practice could bring a headache to keep dependencies up to date because is a manual process. And manual process tend to be time consuming (at this point in time I have ~17 npm packages) meaning that if i want to simply do normal maintenance i will have to run everything for all those in maybe weekly or monthly bases. 

So is a bit of a no situation for maintainers, but if you dont maintain your package people will not use it, because there is a concern about how active the project is, even if there are no open issues. For solving both of this things what i have decided is to ad to my CI/CD pipeline a script that runs only on cron jobs from travis ci.

```yml
os: osx
language: node_js
node_js:
  - node
script:
  - yarn test:cov
after_success:
  - if [[ "${TRAVIS_EVENT_TYPE}" = "cron" ]]; then ./upgrade.sh; fi
deploy:
  skip_cleanup: true
  provider: npm
  email: $NPM_EMAIL
  api_key: $NPM_TOKEN
  on:
    tags: true
```

as you can see that is the normal `.travis.yml` for deploying into npm (you will have to define `NPM_EMAIL` and `NPM_TOKEN` as enviroment variables in your build configuration), the main diference is the step after success that if its the cron job going will run the next script.

```bash
#!/bin/sh

set -e

git config --global user.email $GH_EMAIL
git config --global user.name $GH_USER

git remote add origin-master https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git > /dev/null 2>&1

git fetch origin-master
git checkout -b master-local origin-master/master

yarn upgrade --latest
git add .
git commit --allow-empty -m "updated dependencies [skip ci]"

yarn test
yarn version --patch

git push --quiet origin-master master-local:master
git push --quiet origin-master master-local:master --tags
```

this script attaches the current state to a branch makes, upgrades the dependencies and if everything works fine generates a new commit and deploy a patch of the packages (you will have to define `GH_EMAIL`, `GH_USER` and `GH_TOKEN` as environment variables in your build configuration).