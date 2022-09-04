---
date: 2022-09-04T09:32:34+02:00
draft: true
title: You dont have a monolith anymore but it sure behaves like one
description: ''
authors:
- kanekotic
tags:
- architecture
published: false
series: The journey from the monolith to microservices

---
## The Monolith

We have all at this point encounter the big service that jumpstarted the business. It's always good to find it or know it existed. It shows that there was an intent to not resolve every architectural problem before we even knew we had a business.

Nevertheless, it tends to outgrow itself and become more a pain than a solution. Some of these pains are:

* We all work on the same code base, and conflicts and side effects start to happen.
* You need to release the entire solution, even if different teams have different cycles.
* There are code freezes to go through validation cycles.
* It scales as a whole, not only the portion that has an increase in traffic.

Due to these pains, microservices were created. To give team/domain independence to create focused solutions on a business that has already been validated.

## The Microservices

Let's start with a [definition of a microservice](https://aws.amazon.com/microservices/):

> Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

All sounds like flowers and happiness when we talk about microservice. Nevertheless, does microservices solve the entire issue by itself?

Have you encountered the next cases in a microservice architecture?

* Before we release a new version, we need to sync deploys with another team.
* Our application was down, but is not our issue.
* Our service was working and scaling fine until the team X started using us.
* And more…

What is happening?

### Microliths

The smells mention before are caused by what [Jonas Boner](http://jonasboner.com/) call Microliths, a great word for what is happening here.  
Even if we think this are 'independent' services, synchronous communication can cause side effects we don't want:

* There can be cascading events between your services.
* Your domain boundaries are not clear because you don’t own the entire process.
* Slow services are forced to scale by faster services requirements.
* There is additional latency on the network calls.

![](https://microlithalternatives.kanekotic.com/images/microliths.jpg)

### What got lost in translation?

Having microliths comes from multiple misconceptions we have. Some of them are:

#### Domains != Resources

Every so often, when we divide the monolith, we think about domains being resources. Due to how we normally have divided API's and DB's as we think about splitting what already exists and not about extracting the processes being achieved.

When thinking about a microservice, we should think about what part of the process it is trying to solve, this will help us define good boundaries for our bounded context. 

When we think in a process, data is secondary. The process will require different pieces of existing data to fulfill their capabilities, and it is ok for it to own its copy of what is needed to fulfill his mission.

#### Independence != Single Source

A single source of data does not mean independence, as whenever your software requires complementary data 