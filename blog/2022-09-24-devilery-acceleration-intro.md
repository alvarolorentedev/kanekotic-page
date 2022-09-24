---
date: 2022-09-24T14:35:55+02:00
draft: true
title: 'Devilery Acceleration: Intro'
description: Why do teams perform differently and what are the tools & practices some
  team use to differentiate themselves
authors:
- kanekotic
tags:
- programming
- softwaredevelopment
- devops
- productivity
published: false
series: Accelerate Continious Integration & Delivery Practices

---
This is a series I am really looking forward to writing. I have been doing this presentation for the last 3 years in multiple places.

## Am I Crazy?

The answer is no, most of the thing you will see on this series comes from practices derived from Extreme Programming, that show how to build quality and value into products. So bear with me for some time.

## Motivation

A few years ago, I read the book Accelerate that is derived of the analysis of the state of DevOps report that happens in a regular basis. 

![](https://www.kanekotic.com/img/accelerate.jpg)

The book does not speak only about technology but also speaks about communication, organization, etc. And how this affects effectiveness in teams & companies. I recommend reading the entire book. 

### 4 key metrics

Nevertheless, most of the people resume this book (erroneously) in the next table. 

![](https://www.kanekotic.com/img/key_metrics.png)

It does a comparison on a what are called the 4 key metrics, and provide a classification of performance (teams & companies, since 2017 this classification has evolved).

What does these 4 key metrics  mean:

* **Deployment frequency**: is how often does the team deploy to **production**.
* **Lead Time for change**: is how much time does a story take to get to **production**. 
* **Mean Time To Recovery**: is how fast can we solve a production issues.
* **Change Failure Rate**: is how frequently do we break things in production.

All this metrics is helping teams understand their feedback cycle and stability. In the case of the team, I currently work with:

* **Deployment Frequency**: once per commit to trunk (while doing trunk-based development) what ends up translating to a few times per day.
* **Lead Time for change:** below 1h. We can activate a feature as soon as the code is deployed by the CI/CD using feature flags.
* **Mean Time To Recovery**: In minutes. We can activate and deactivate feature flags on the fly if any of the code breaks, and we have a good observability and alarming, so we are the first one to notice.
* **Change Failure Rate**: We don't optimize for this, as MTTR is more important for us (I will explain why later). Nevertheless, we currently only had 2 minor production issues in the last year, so we are way below 1%. Our CI/CD validations help a lot on this.

The intent of this series is to share the Extreme programming practices that we use to achieve being on the [elite classification of DORA 4](https://www.devops-research.com/quickcheck.html).  

## Note of Caution

As this twitter thread shows, this is not one size fits all, the challenges of a team are not the challenges of another one.  There is no silver bullet or common root cause to the issue, and each team should use this metrics to track improvements in an unbiased way. For this, the 4 key metrics do not mean anything at company level and should not be used to compare teams. 

![](https://www.kanekotic.com/img/metrics_caution.png)

## Next

So in the following installments I will walk backwards from having something in production and how to keep it running in a healthy manner stress-free up to coding techniques that enable Trunk-based development.