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

Given that you have followed the recommendations on designing your domains correctly, today we are going to elaborate on patterns to remove that synchronous communication in between 'microservices'. 