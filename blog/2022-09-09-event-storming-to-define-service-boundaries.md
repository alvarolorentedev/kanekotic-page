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

### Step-By-Step Guide

let's do an example of how a company sets up our internet connection

#### Prepare a board and the people for the session

Event storming requires people to share a common view and brainstorm and discuss on it. This process takes to count time as a dimension. And has multiple types of stickies that can be used.  
You can see an example board on the next image:

![](https://www.kanekotic.com/img/event-storming.png)

Regarding the Stickies, their color represent a specific meaning\[1\]:

* **Events (orange):** Represent the factual events and anything that is relevant to a domain expert.
* **Commands (blue):** These are requests to do something. They can originate from a user or system or by another event.
* **System (pink):** These represent systems involved in the domain. They may issue commands or receive commands along with triggering events.
* **User (yellow):** These are human users involved in the process. They may be a single person or a department/team.
* **Aggregate (tan):** This is the first level of categorization and can be thought of as the “thing” that a group of events operates on.
* **Read Model (green):** This represents data that may be critical for a user or system to decide.
* **Policy (gray):** These represent standards or rules that may need to be executed, such as rules for a compliance policy.

#### Define the **Events** of your system

Events are the most important information of our board. They represent facts regarding the process and helps encapsulate the knowledge of the 'experts'.  
As we mention before, time is a significant dimension. A process always happens in a period of time. Starting by organizing this 'things' that happen in a timeline is a good way to start.  
![](https://www.kanekotic.com/img/event-storming-map-events-drawio.png)

In our example, you can see on the previous image we go from checking coverage, to creating a user, to creating a contract and connecting our user to the network.

#### Identify the **Systems** involved (Optional)

The intent of this step is to identify the existing systems and their interdependency. When we discuss systems, they can be internal or external.

![](https://www.kanekotic.com/img/event-storming-map-systems-drawio.png)

In our example, all starts with the website, but soon enough it becomes apparent most of the process is taken care by the monolith. 

This step is optional in the case you have a greenfield. Nevertheless, I highly recommend it if you are splitting a monolith. 

#### Add the **Actors**

These are real people who are part of the process, they tend to be the starting point of a chain of events, or even on a manual process we are trying to automate the executors of the individual step.

![](https://www.kanekotic.com/img/event-storming-map-actors-drawio.png)  
In our case, the user is the one starting the process, but there needs to be a technician doing the last steps manually.

#### Connect the dots with **Commands**

Now we are left with events that are done by someone and take effect in parts of our system. But we are missing the cause and effect that made this look this way.

Commands allow exactly this, is a specific action or decision that will push our system into a certain direction. 

Commands can be positive or negative actions, causing bifurcation and showing different cases that our system needs to cope with.

###### \[1\] [https://www.capitalone.com/tech/software-engineering/event-storming-for-microservice-architecture/](https://www.capitalone.com/tech/software-engineering/event-storming-for-microservice-architecture/ "https://www.capitalone.com/tech/software-engineering/event-storming-for-microservice-architecture/")