---
title: 'Double-edge Microservices: Resource VS Process'
description: Is there a good way and a bad way of splitting microservices
authors: kanekotic
tags:
- webdev
- api
- programming
- architecture
draft: true
published: 2030-08-02T00:00:00.000+02:00
series: microservices a double-edged sword
---
During the last decade micro-services have been taking traction in the development world. Nevertheless moving from a monolithic view to a more self-served set of pieces is not an easy mental migration.
I have seen in my experience two different approaches with two very different outcomes. One is based on resources and the other one is based on process.
The resource approach is based on the idea of Object Orientation. Meaning everything should be abstracted as an object that can be manipulated overtime by the consumers of that resource. In this approach the Data is on the drivers seat.
The process approach is based on the more functional view of the world. Meaning data is transform as part of a process to achieve a specific end. In this approach the Process is on the drivers seat.
this has ramification at a few different levels.
Resource Approach
This approach makes simple to understand concepts, but tends to be very chatty and cause a high cognitive load when understanding the overal interactins. It requires either an interface to the outside world that orchestrates all the calls. Or it requires the consumer to know all the required resources and do the process on their side.
Independence
The orchestration approach, requires normally to sync different microservices and teams. This will most of the time require a set of calls that are synchronous to retrieve the correct information to query another micro-service.
This brings to the picture a concept that Jonas Boner calls microliths in this article. The idea is that if you have synchronous calls in between services to serve information, services are not independent, and cant not be treated as individual pieces.
This has the side effect that releasing microservices cant be achieved as independent pieces, ending up in releases at absurd times where it wont affect customers and a lot of environments due the complex understanding of stability of services. Causing longer release cycles and more heavy process required.
Domain Understanding
The resource view makes it very simple to understand individual pieces, and the domain of teams becomes that individual resources. This causes a need of a different layer of Domain Understanding in the orchestrator or the consuming applications. That can cause a cognitive overload.
Normally this environments require a lot of overlook from an environment perspective as they are based on having sources ofd true for each abstraction of the data. The more an environment growths the more the cognitive overload will be there causing a possible misalignment.
Business Organization
This approach normally causes an organization to be a layared one as the vertical separation is not possible, due the need to sync multiple resources. This affects at the same time independence of teams. As a team cant own from an understanding perspective any user process view, due the lack of the business domain understanding.
Process Approach
The process approach tends to be more self contained its based on the idea that duplicated data is not an issue. You do not have a source of true for the resource, what you have is a chain of custody of that resource data.
Independence
Communication on this systems normally happen through queues and teams are in charge of specific process. Based on this idea, the indirection layer provided by this allows teams and service to be in control of their own environment and have a lower amount of external dependencies simplifying.
Domain Understanding
Business Organization