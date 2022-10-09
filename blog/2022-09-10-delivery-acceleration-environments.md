---
date: 2022-10-08T21:26:12.000+02:00
draft: true
title: 'Delivery Acceleration: Deployment Environments'
description: How do we run services?, is it worth having multiple environments?
authors:
- kanekotic
tags:
- softwaredevelopment
- programming
- productivity
- devops
published: 
canonical_url: ''
cover_image: ''
series: Accelerate Continious Integration & Delivery Practices

---
Our services need to run somewhere, so our users can access it. It's a very common practices to have multiple environments like dev, staging, and prod. Is this actually a good practices?

## CI vs. CD vs. CD

when people talk about continuous integration, delivery and deployment, they normally talk about it as a whole.

Nevertheless, let's reflect why these are 3 different practices. As they are steps in a journey, you can do one and not the next one.

![](https://www.kanekotic.com/img/cicd.png)

* Continuous integration: allows making reproducible states of the code in multiple places.
* Continuous Delivery: Now that it's reproducible, it needs to be marked as potentially deployable and provide the ability to deploy it.
* Continuous Deployment: Delivers the code to your clients and not only to your team as you commit.

## The trap of Multiple Environments

As you can imagine, with the previous definition of CI/CD, having multiple environments will never allow you to achieve Continuous Deployment.  
![](https://www.kanekotic.com/img/environments.jpeg)

The intent of having multiple environments is to reduce change failure rate, are we actually achieving this with the practices? The answer is normally not due to:

* A non-production environment will never be the same as a production.
  * Different data
  * Different performance
  * Different security practices
  * Etc…
* Stress and ownership of moving things to production
* Accumulation of code in lower environments (meaning more bugs).
* Longer feedback loop.
* Continuous misalignment due to development cycles in between different teams.

As you can see, this makes a fake sense of safety, but it does not affect positively the change failure rate. Affecting negatively other DORA 4 metrics:

* ❌ **Deployment frequency**
* ❌ **Lead Time for change**
* ❌ **Mean Time To Recovery**
* 〰️ **Change Failure Rate**

## Achieving Continuous Deployment, Only prod, is it so crazy?

How can a team Continuous deployment, the answer tends to be simple, making every commit go to production and testing in it.  
Be aware this does not mean to have our users experience possible bugs or see test data, as we can hide functionalities behind toggles, headers, or parameters that allow access to only the development team.

An example strategy is the one in the next diagram.

![](https://www.kanekotic.com/img/single_environment.jpeg)

What have we solved:

* Real performance & behavior.
* Continuous alignment with other teams.
* Smaller feedback cycles.
* Control of rollout.
* Smaller $ cost.

This affect the next DORA 4 metrics:

* ✔️ **Deployment frequency**
* ✔️ **Lead Time for change**
* ✔️ **Mean Time To Recovery**
* 〰️ **Change Failure Rate**