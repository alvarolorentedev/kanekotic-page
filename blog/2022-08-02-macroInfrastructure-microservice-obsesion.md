---
title: MacroInfrastructure due Microservice Obsesion
description: The over-engineering of our age
authors: [kanekotic]
tags: [agile,webdev,programming,architecture]
draft: false
published: false
---

Cloud services and infrastructure as code during the last decade have revolutionized our industry, they have allowed us to be able to procure infrastructure in a very simple way and adaptable to the needs based on traffic. This allowed us to move from writing humongous monolithic applications to write smaller applications that run in their own infrastructure and communicate between themselves.
One of the most accepted definition of a microservice can be expressed as:
A self-contained portion of code that do not share resources with other services, can be deployed independently and should be easy to rewrite in a small portion of time.
This sounds actually great when we talk about individual parts of a software projects. I was definetly sold on it after understanding that definition.
Nevertheless when thinking about systems and how they operate. There is a point to make about granularity as software does never work on complete isolated units. It requires interactions to fullfill their purpose.
Most of the monolithic applications of the past had an issue of being over-engineered to allow changes that might never happen. Could that happen also with infrastructure? Is it currently a real problem for delivery?

Lost Overview Of The Domain
When a system grows to much in small pieces, it becomes more and more complex to have an overview of the goal of the moving parts. When pieces are to small domain events start becoming exchange of information in between nodes of a network. All this removes cohesion on the knowledge over the domain of a system, making it difficult to grasp the real intention and capabilities of concepts and actors across a system.

Why… if YAGNI
One of the main ideas of micro-services was to be able to validate assumptions fast. Before bootstrapping new services or infrastructure, there is a need to ask ourselves about the existence of a service or infrastructure that contains the domain knowledge required for the experiment in the current ecosystem.
If we are not careful experiments wont be experiments. They will be MVPs, where domain knowledge is re-implemented, just for the sake of have it as a standalone node on the system.

Repeating Yourself
When we create pieces of code that are independent there is always a certain level of bootstrapping that is required and repeated in each nodes of our systems.
This will cause not only a set of duplicated code, but also has a development time cost attached to it. Bootstraping a project in a high granularity system can be complex to standardize.

Babel tower Issue
The more parts a system has, the less heterogeneous it becomes. This at the same time translates into a more complex environment with more integration's, frameworks and bigger learning curves that affects delivery. There need to be a balance of when and where in a system a new technology is added. Decisions need to be based on needs and not on preferences.

Implicit runtime dependencies
The more a system get split the more dependency on certain node it will have. This tend to cause more dependencies in between the pieces of your infrastructure based puzzle where you start having god infrastructure points that become single point of failure, or you have chain of dependent infra that need to be deployed in a go or certain order.

Hidden Complexity
The more your microservice environment grows the more it requires a growing support infrastructure for monitoring, alerting and other services not used as part of the main system. This normally is a separate effort and has its own cost. The more a system grows those hidden complexities become a dependency for all the nodes in the system, making it a complex task to evolve and change those dependencies.

Microservices, the cloud and infrastructure as a service have definitely revolutionized our industry, nevertheless as everything there is a need for balance. Making sure we use the right tool for the job and we don't over-engineer things, not only at a code level but also at infrastructure level, as everything has a cost.