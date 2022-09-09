---
date: 2022-09-09T09:28:48+02:00
draft: true
title: Event Storming to define Service Boundaries & Capabilities
description: how can we define what is the scope of a service, event storming is here
  to help us
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
On our previous installments, we discussed the smells that can happen when splitting microservices, and the strategies that exist to make them as independent as possible. But how do we define boundaries? How do we define the process that our microservice is in charge off?

## Event Storming

Event storming is a technique that is part of [DDD](https://en.wikipedia.org/wiki/Domain-driven_design). But, what is Event storming?, the definition on [Wikipedia](https://en.wikipedia.org/wiki/Event_storming "wikipedia") is:

> A workshop-based method to quickly find out what is happening in the domain of a software program. The business process is "stormed out" as a series of domain events.

This process is run with stickies in a physical or digital board during a session, and requires the 'experts' on the process to be present to provide the context what/whom/how. The outcome is an understanding of the **business process**, not the technical one. To be able to separate them into different steps with clear responsibilities.

### Example