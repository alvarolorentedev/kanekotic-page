---
date: 2022-10-10T12:52:08+02:00
draft: true
title: 'Delivery Acceleration: Enabling Features'
description: How do we roll out features? What are some practices that can save us
  from the big bang release
authors:
- kanekotic
tags:
- productivity
- devops
- programming
- softwaredevelopment
published: 2022-10-17T00:00:00+02:00
canonical_url: ''
cover_image: ''
series: Accelerate Continious Integration & Delivery Practices

---
Now that we know where our code lives, we need to make sure our users get access to the features. For this, we need to get our code to the environment we want to deploy to, and control the rollout (if you are not a big bang release fan).

## Blue/Green Deployment: Getting to prod with 0 downtime

What is this?, The concept is simple, we have set of machines (ex. blue) where we currently have our app running, and we want to deploy. The intent is to create a new set of machines (ex. green) where our new version of the code will run. We would like to validate as much as possible (ex. automated e2e tests) that this new version is up to par with the previous one before moving the traffic and destroy the previous version.

You can see the process in the next graph:

![](https://www.kanekotic.com/img/blue_green.jpeg)

With this, we are trying to achieve a 0 downtime while deploying a new version of our code. This is critical for teams that practice continuous deployment, as you want to avoid having systems down as you deploy multiple times a day.

## Enabling feature access to users

there are multiple ways to enable access to users, in between them:

### Big Bang Releases

This is the plug and pray solution. Pushing the code and expecting it to work as it's enabled for all users. This is a very dangerous strategy as your blast radius is all your users.

### Canary Releases

![](https://www.kanekotic.com/img/canary.jpeg)

### Feature Flag Releases

![](https://www.kanekotic.com/img/toggles.jpeg)