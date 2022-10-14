---
authors: kanekotic
draft: true
title: 'Delivery Acceleration: Parallel Changes Strategy'
description: Code evolve and changes. Making sure we don't break things in a continuous
  deployment environment.
tags:
- softwaredevelopment
- programming
- devops
- productivity
published: 
canonical_url: ''
cover_image: ''
series: Accelerate Continious Integration & Delivery Practices

---
As we develop a product over time, changes need to be made as we need to accommodate new functionality. As most of our systems don't run isolated, and we have clients that used them (ex. public API), We have to keep compatibility at least on a temporary basis. How do we achieve this?

## Versions

A common practice is to have different versions for the multiple clients. While simple, it also requires significant effort to maintain as whenever an issue or bug is spotted, multiple places are affected, meaning there are more possibility of side effects.  
It also makes it more difficult to make a case for clients to migrate from one to the other due to the contract changes.

![](https://www.kanekotic.com/img/version.png)

## Versionless: Expand & Contract 

As the name says, this strategy intents to have only one state of truth and not a multitude of them. Versionless has been heavily adopted as a principle by GraphQL for example.   
We can achieve this in any code base by implementing a strategy for parallel changes called **Expand & Contract**, it's call this way due to the phases code goes through. Let's see for example we want to migrate from using one field value to a similar field with a more complex representation.

* **Expand**: We add the new 'field' to the existing contract, and add the code to support this strategy on the existing code.
* **Contract**: We monitor the usage of the old 'field' to understand when it is possible to deprecate, at that point we remove the old code.

![](https://www.kanekotic.com/img/expand_contract.jpeg)

With this, we have a clean source code that we can evolve indefinitely as required by the business.