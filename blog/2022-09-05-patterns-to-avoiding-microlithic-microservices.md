---
draft: false
title: Patterns to avoiding microlithic microservices
description: how can we decouple services to avoid some common pitfalls
authors: kanekotic
tags:
- api
- microservices
- programming
- architecture
published: 2022-09-05T08:22:55.000+02:00
series: The journey from the monolith to microservices
canonical_url: https://www.kanekotic.com/blog/2022/09/05/patterns-to-avoiding-microlithic-microservices
cover_image: https://www.kanekotic.com/img/microliths.jpg
image: https://www.kanekotic.com/img/microliths.jpg
---
On the previous installment of this series, we discussed the pitfalls that could happen when we split a monolith into microservices. In specific, we talked about creating what are called microliths.  
![](https://www.kanekotic.com/img/microliths.jpg)

Given that you have followed the recommendations on designing your domains correctly. Today we are going to elaborate on patterns to remove that synchronous communication in between 'microservices'. This will help our services to become more resilient.

## The Patterns

### Circuit Breakers

The most simple solution we can go for is called **circuit breakers**. As it implies, is just a piece of code that upon multiple request failed to a downstream service will fail silently and allow service to resume their normal behavior.

![](https://www.kanekotic.com/img/circuitbreakerdesignpattern.png)

What are we solving and what are we letting unsolved:

* ✔️ We don’t fail continuously if some other service fails.
* ❌ We silently don’t finish the entire process requested.
* ❌ We require all chain of dependencies to be called.
* ❌ We force other services to scale to our needs.
* ❌ Data is mutable, so errors will be propagated and not solvable.

### Outbox Pattern

The next level in solving our microlithic issue is to decouple our services using Pub/Sub to exchange models in between services.  
Our service will consume and store the necessary information to run the process locally, and will broadcast the outcome models. This will mean there will always be a strong consistency in the outbox, and eventual consistency on the service database (if it exists).

![](https://www.kanekotic.com/img/reactivemicroliths.jpg)

What are we solving and what are we letting unsolved:

* ✔️ We don’t fail continuously if some other service fails.
* ✔️ We always finish our process and promise the rest will be done.
* ✔️ We just require our service to do what we promise.
* ✔️ Fast services will be fast, and slow services can go slow.
* ❌ Data is mutable, so errors will be propagated and not solvable.

### Event Sourcing

The last level is **event sourcing**. The idea is to use the events that generated a specific state and not use the calculated state that a service can provide us.

This allows a higher resilience due to the immutability of the data. In this case, calculation issues of the past can be solved, as we can reprocess the entire set of events that took us to a certain state.  
![](https://www.kanekotic.com/img/microsystems.jpg)

## Conclusion and follow-ups

These are some of the patterns that can make our services more independent and resilient. Nevertheless, each of them has a different complexity, meaning it also affects the complexity of our code. For this, we need to make sure we use the correct tool for the job.