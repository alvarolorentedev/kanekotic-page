---
date: 2022-09-27T21:40:40+02:00
draft: true
title: 'Delivery Acceleration: Observability'
description: When runing services in production the most important thing is to understand
  the health of it
authors:
- kanekotic
tags:
- softwaredevelopment
- programming
- devops
- productivity
published: false
canonical_url: ''
cover_image: ''
series: Accelerate Continious Integration & Delivery Practices

---
When we talk about observability, we talk about:

> Capability of developers to understand the health and status of their application.

There are multiple tools that fall under this category, let's talk about them individually.

### Alarms

This is the first line of defense against issues, the intent is to get notified if any potential issue arises.   
The intent of this is to provide a notification if any parameter of our application is out of range (ex. to many 5xx). 

This allows us to use our mental bandwidth to focus in creating value and not continuously check if the parameters are in range.

### Metrics

### Logs