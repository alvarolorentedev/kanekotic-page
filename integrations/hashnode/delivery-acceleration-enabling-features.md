---
tags: software-development, devops, programming, developer, web-development
domain: kanekotic.hashnode.dev
title: 'Delivery Acceleration: Enabling Features'
subtitle: How do we roll out features? What are some practices that can save us from
  the big bang release
canonical: https://www.kanekotic.com/blog/2022/10/10/delivery-acceleration-enabling-features
cover: https://www.kanekotic.com/img/toggles.jpeg
ignorePost: false

---
Now that we know where our code lives, we need to make sure our users get access to the features. For this, we need to get our code to the environment we want to deploy to, and control the rollout (if you are not a big bang release fan).

## Blue/Green Deployment: Getting to prod with 0 downtime

What is this?, The concept is simple, we have a set of machines (ex. blue) where we currently have our app running, and we want to deploy. The intent is to create a new set of machines (ex. green) where our new version of the code will run. We would like to validate as much as possible (ex. automated e2e tests) that this new version is up to par with the previous one before moving the traffic and destroy the previous version.

You can see the process in the next graph:

![](https://www.kanekotic.com/img/blue_green.jpeg)

With this, we are trying to achieve a 0 downtime while deploying a new version of our code. This is critical for teams that practice continuous deployment, as you want to avoid having systems down as you deploy multiple times a day.

## Enabling feature access to users

there are multiple ways to enable access to users, in between them:

### Big Bang Releases

This is the plug and pray solution. Pushing the code and expecting it to work as it's enabled for all users. This is a very dangerous strategy as your blast radius is all your users.

### Canary Releases

This is a practice that comes from the mining industry, The idea was the next one:

> If a canary is in the same place where humans are inside the mine, when there is a problem with the breathable air it will be the first one to perish.

If we translate this to software, the idea is to have deployed the changes only to one or a few servers. With this, we can monitor this canary instances and act if any issue happens, we reduce the blast radius of issues to only the users who go through that server.

![](https://www.kanekotic.com/img/canary.jpeg)

This affect the next DORA 4 metrics:

* ✔️ **Change Failure Rate**

This approach provides us a way to reduce the blast radius from a big bang release. Nevertheless, it does not help us to prevent or act faster upon a bug in our code.

### Feature Flag Releases

To improve upon the canary release strategy, we can move towards feature flags.

Feature Flags are hiding our code behind a 'flag' this can help decide if the code is enabled or disabled, as in the next image.

![](https://www.kanekotic.com/img/toggles.jpeg)

There are a multitude of services, libraries & SDKs that allow you to create flags in your code. They help by:

* Decouple activation of features from the release pipeline.
* Solving incidents in a matter of seconds.
* Do a controlled rollout. For example:
  * Enable only for team.
  * Enable for X% of the traffic.
  * Enable for users in a specific country.

This affect the next DORA 4 metrics:

* ✔️ **Deployment frequency**
* ✔️ **Mean Time To Recovery**
* ✔️ **Change Failure Rate**