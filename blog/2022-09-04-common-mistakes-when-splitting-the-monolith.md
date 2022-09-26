---
date: 2022-09-04T12:32:34.000+02:00
draft: false
title: Common mistakes when splitting the monolith
description: A set of the most common mistakes when splitting your monolith into microservices
authors:
- kanekotic
tags:
- api
- microservices
- programming
- architecture
published: true
series: The journey from the monolith to microservices
canonical_url: https://www.kanekotic.com/blog/2022/09/04/common-mistakes-when-splitting-the-monolith
cover_image: https://user-images.githubusercontent.com/3071208/188307797-7c30c8cb-bff7-4755-822b-7cf469cba372.JPG

---
## The Monolith

We have all at this point encounter the big service that jumpstarted the business. It's always good to find it or know it existed. It shows that there was an intent to not resolve every architectural problem before we even knew we had a business.

Nevertheless, it tends to outgrow itself and become more a pain than a solution. Some of these pains are:

* We all work on the same code base, and conflicts and side effects start to happen.
* You need to release the entire solution, even if different teams have different cycles.
* There are code freezes to go through validation cycles.
* It scales as a whole, not only the portion that has an increase in traffic.

Due to these pains, microservices were created. To give team/domain independence to create focused solutions on a business that has already been validated.

![](https://www.kanekotic.com/img/monolith.JPG)

## The Microservices

Let's start with a [definition of a microservice](https://aws.amazon.com/microservices/):

> Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

![microservices](https://user-images.githubusercontent.com/3071208/188307797-7c30c8cb-bff7-4755-822b-7cf469cba372.JPG)

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

A single source of data does not mean independence, as whenever your software requires complementary data, it will have to acquire it from somewhere else, what means a direct  dependency. This also affects boundaries as you must enter other team's domain.

If you strive for independence, copy the information you require for your process, even if it exists somewhere else.

#### Fast != Synchronous

Humans think that a direct response is always faster than sending out a message. While occasionally this is true, in microservices this could start a cascade of synchronous calls from one service to the next one, leaving our users in a timeout limbo.

Think if really your system requires calling others directly or if you can message them to start their process.

#### Resilience != Complete

Making sure the entire process has been completed, is normally confused by resiliency. Resiliency only refers to the capability to complete the process.  
If we have well-defined contracts in between our pieces, we don't need to finish things synchronously, we can promise our users things will happen. And let our services do their work at their speed.

## Conclusion and follow-ups

Are we doomed?  
![](https://microlithalternatives.kanekotic.com/images/timetopanic.jpg)

The answer is no, we are not doomed! We can design our services with the correct division using some DDD tooling and also use the correct tools to decouple our microservices.  
Let's talk about this on the next chapters of this series.