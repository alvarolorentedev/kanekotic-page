---
title: Create your User/Organization GitHub Page with Hugo + Travis
summary: Create your User/Organization GitHub Page with Hugo + Travis
description: Create your User/Organization GitHub Page with Hugo + Travis
date:  2018-07-04T08:35:42+02:00
tags: 
    - ci
    - cd
    - versioning
    - travis
    - travisci
    - github
draft: false
published: false
series: null
cover_image: null
canonical_url: null
---
I have just finished migrating my static blog from Hexo to Hugo and one of the main things I care about is to be able to do continuous deployment of my profile and blog. There are quite a few blog posts out there but they are based on using shell scripts and it really becomes a pain to give permissions etc. In the next few lines you will see the simplest way I have found to do this (and is currently as this blog post is being published).

You will need to have:

- A Github account.
- A Travis CI account.
- A Github repository with source code of your web page with Hugo (*1)
- A Github repository with the name `<your User or Organization>.github.com` (ex. kanekotic.github.com) (*2).
- A developer token from GitHub with commit capabilities (can create in github `Settings -> Developer Settings -> Personal Access Token -> Generate New Token` )

I wont cover how to create a Hugo web page as this is best explained in the [quick start](https://gohugo.io/getting-started/quick-start/)) of Hugo.

After you are happy with the content of your blog in the repository of source code (*1), and want to start deploying you will need to add a `.travis.yml` with the next content

```yml
sudo: true
dist: trusty

install:
  - sudo apt-get --yes install snapd
  - sudo snap install hugo

script:
  - /snap/bin/hugo 

deploy:
  provider: pages
  local-dir: public
  repo: <User or Organization>/<User or Organization>.github.com
  target-branch: master
  skip-cleanup: true
  github-token: $GITHUB_TOKEN
  committer-from-gh: true
  keep-history: true
  on:
    branch: master
```

you will have to change the repo content to match your destination repository (*2). The previous code what does is installs hugo in the deployment machine, builds your web page and deploys using the pages plugin. If you have a custom domain make sure to set the property `fqdn` to your domain, if not you will overwrite this field in each commit.

After adding the file you will have to go to Travis web page and toggle your code repository (*1) got to `More Options -> Settings -> Environment Variables` and add `GITHUB_TOKEN` as the token retrieved from github.

After this in any commit in the master branch of your web page you will get it deployed and go live. 