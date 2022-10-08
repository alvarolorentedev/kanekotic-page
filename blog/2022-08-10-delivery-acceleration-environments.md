---
date: 2022-10-08T21:26:12+02:00
draft: true
title: 'Delivery Acceleration: CI/CD Environments'
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

The intent of having multiple environments is to reduce change failure rate. Nevertheless, is this a reality?

## Only prod, is it so crazy?

![](https://www.kanekotic.com/img/single_environment.jpeg)