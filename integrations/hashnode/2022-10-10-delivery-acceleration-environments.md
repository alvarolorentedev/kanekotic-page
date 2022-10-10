---
title: 'Delivery Acceleration: Deployment Environments'
subtitle: Where should we run our services? are there hidden consts on certain
  practices?
domain: kanekotic.hashnode.dev
tags: softwaredevelopment, programming, productivity, devops
canonical: https://www.kanekotic.com/blog/2022/09/10/delivery-acceleration-environments
cover: https://www.kanekotic.com/img/cicd.png
ignorePost: true
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

The intent of having multiple environments is to reduce change failure rate, are we actually achieving this with the practices? The answer is normally not due to:

* A non-production environment will never be the same as a production.
  * Different data
  * Different performance
  * Different security practices
  * Etc…
* Stress and ownership of moving things to production
* Accumulation of code in lower environments (meaning more bugs).
* Longer feedback loop.
* Continuous misalignment due to development cycles in between different teams.

As you can see, this makes a fake sense of safety, but it does not affect positively the change failure rate.

This affects mostly negatively, most of DORA 4 metrics:

* ❌ **Deployment frequency**
* ❌ **Lead Time for change**
* ❌ **Mean Time To Recovery**
* 〰️ **Change Failure Rate**

## Achieving Continuous Deployment, Only prod, is it so crazy?

How can a team Continuous deployment? The answer tends to be simple, making every commit go to production and testing in it.  
Be aware this does not mean to have our users experience possible bugs or see test data, as we can hide functionalities behind toggles, headers, or parameters that allow access to only the development team. As we will see in future installments of this series.

An example strategy is the one in the next diagram.

![](https://www.kanekotic.com/img/single_environment.jpeg)

This allows us to keep only one environment that discriminates in between test and non-test data that can be clean periodically, while it provides the real environment with the real behavior. With this, we solved:

* Real performance & behavior.
* Continuous alignment with other teams.
* Smaller feedback cycles.
* Control of rollout.
* Smaller $ cost.

This affect the next DORA 4 metrics:

* ✔️ **Deployment frequency**
* ✔️ **Lead Time for change**
* ✔️ **Mean Time To Recovery**
* 〰️ **Change Failure Rate**

## Conclusion

There is no one size fit all, but modern practices tend to go towards simplicity and fast feedback loops. There are many practices involved on this simplicity that enables us to feel comfortable with only production environments. We will talk about them on this series.   
  
## Related Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/UBtiBA5QTEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/9C0efJkT0Hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
