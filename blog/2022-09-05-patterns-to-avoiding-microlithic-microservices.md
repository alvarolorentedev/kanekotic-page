---
date: 2022-09-05T08:22:55+02:00
draft: true
title: Patterns to avoiding microlithic microservices
description: how can we decouple services to avoid some common pitfalls
authors:
- kanekotic
tags:
- api
- microservices
- programming
- architecture
published: false
series: The journey from the monolith to microservices

---
On the previous installment of this series, we discussed the pitfalls that could happen when we split a monolith into microservices. In specific, we talked about creating what are called microliths.  
![](https://www.kanekotic.com/img/microliths.jpg)

Given that you have followed the recommendations on designing your domains correctly. Today we are going to elaborate on patterns to remove that synchronous communication in between 'microservices'. This will help our services to become more resilient.

## The Patterns

### Circuit Braked Microliths

The most simple solution we can go for is called circuit breakers. As it implies, is just a having a piece of code that upon multiple request failed to a downstream service will fail silently. 

![](https://www.kanekotic.com/img/circuitbreakerdesignpattern.png)

What are we solving and what are we letting unsolved:  
✔️ We don’t fail continuously if some other service fails

❌ We silently don’t finish the entire process requested

❌ We require all chain of dependencies to be called

❌ We force other services to scale to our needs

❌ Data is mutable, so errors will be propagated and not solvable