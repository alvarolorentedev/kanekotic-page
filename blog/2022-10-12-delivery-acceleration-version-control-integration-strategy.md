---
authors: kanekotic
draft: true
title: 'Delivery Acceleration: Version Control Integration Strategy'
description: How do you integrate code in the team matters, it will directly affect
  the rest of your architecture and practices like we have seen in previous chapters
tags:
- productivity
- devops
- programming
- softwaredevelopment
published: 
canonical_url: ''
cover_image: ''
series: Accelerate Continious Integration & Delivery Practices

---
I have already written some [other post](https://www.kanekotic.com/blog/2022/08/08/stop-prs) on this topic. I will go straight to the point on comparing Git Flow (a [legacy strategy](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) that most companies use) and Trunk-Based Development.

## Gitflow: The Bad & The Ugly

Why do I call it the bad and the ugly? Because it does not allow you to achieve Continuous Deployment.   
The idea is that every developer works isolated on their branch, validate on their branch and ask through a merge request to add their code to the X stage branch.

![](https://www.kanekotic.com/img/gitflow-diagram-768x973.png)  
There are multiple issues with this:

* Code does not exist isolated, we don't deploy isolated code. 
* The peer review process happens at the end, causing a very slow feedback loop.
* The more time the branch lives, the more it diverges from the original behavior and the more complex it is to merge.
* Merging can cause complex conflicts that require revalidation, and it might have side effect in other features.
* Egos are normally part of the review process.

## Trunk-Based Development: The Good