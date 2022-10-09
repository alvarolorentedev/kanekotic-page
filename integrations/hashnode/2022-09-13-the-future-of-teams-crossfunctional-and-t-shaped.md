---
title: 'The future of teams: Crossfuctional & T-Shaped'
subtitle: Team structure matters, how can we enable teams to be more productive
  & independent
tags:
- softwaredevelopment
- architecture
- technology
- productivity
canonical: https://www.kanekotic.com/blog/2022/09/13/the-future-of-teams-crossfunctional-and-t-shaped
cover: https://www.kanekotic.com/img/t-shapped-cross-functional-tshapped-crossfunctional-drawio.png

---
In software development, over the last years we always talk about on cross-functional teams, as a good split of responsibilities to provide autonomy in teams. What does that mean? Why is this so? And what does it look like?

## History & types of teams

It's probably easier to see the evolution of team culture as a chronology, as it has been an evolving thing.

### Specialization-Based Teams

Traditionally, when we had only big monolithic applications, teams have been split by their expertise. This meaning all the quality assurance, Frontend, Backend roles will be in a team with their expertise-based peers. This might look like the next image:

![](https://www.kanekotic.com/img/t-shapped-cross-functional-drawio-1.png)

What are the pros and cons of this model:

* ✔️ Improve depth of knowledge from peers.
* ✔️ No dependency on individuals, the Bus factor tends to be bigger than 1.
* ❌ Bottlenecks in between teams, due to different priorities and timelines.
* ❌ Lack of breath of knowledge.
* ❌ Low domain expertise due to coverage of all domains.
* ❌ Continuous context switch due to support of multiple domains.
* ❌ Design issues due [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law) relation in between communication patterns and architecture.
* ❌ Eventually, teams grow too big and have management issues due to [Dunbar's Number](https://en.wikipedia.org/wiki/Dunbar%27s_number "dunbars") on human relationships.

### Specialized Cross-functional Teams

Due to the shortcomings of the previous model and the raise of microservices and some concepts from DDD,  the intention of splitting teams was to make sure a specific domain and their solutions were cover by the same people.  
This allows more independence and control over what is required to fulfill the needs of that domain. 

This might look like the next image:

![](https://www.kanekotic.com/img/t-shapped-cross-functional-expertise-crossfunctional-teams-drawio.png)

What are the pros and cons of this model:

* ✔️ Common domain expertise, allowing faster and informed decisions.
* ✔️ Single domain will not require a lot of context switch.
* ✔️ Helps design on microservices environments due to [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law).
* ✔️ Teams tend to stay small and follow [Dunbar's Number](https://en.wikipedia.org/wiki/Dunbar%27s_number "dunbars") on human relationships (ex. Amazon 2 large pizza team size).
* ❌ Bottlenecks in between team members, due to process dependency.
* ❌ Lack of depth of knowledge from peers.
* ❌ Lack of breath of knowledge being shared.
* ❌ Bus factor tends to be small.

### T-shaped Cross-Functional Teams

The previous organization helped many teams to be able to focus and do the right thing in the right moment.

Nevertheless, it lacked the focus on collaboration and support inside the team, as each person has their small set of responsibilities can easily cause bottlenecks inside a single team.

T-shaped development tries to solve this by making sure all team members can work in every part of the solution (represented by the horizontal part of the 'T'). Nevertheless, each member can have his own preferred field of expertise  (represented by the vertical part of the 'T').   
This has been enabled by the lower complexity on the tooling and entry-level learning curve to most of the expertises.

![](https://www.kanekotic.com/img/t-shapped-cross-functional-tshapped-crossfunctional-drawio.png)

What are the pros and cons of this model:

* ✔️ No bottlenecks as all team members can chip in to the different needs.
* ✔️ Common domain expertise, allowing faster and informed decisions.
* ✔️ Single domain will not require a lot of context switch.
* ✔️ Helps design on microservices environments due to [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law).
* ✔️ Teams tend to stay small and follow [Dunbar's Number](https://en.wikipedia.org/wiki/Dunbar%27s_number "dunbars") on human relationships (ex. Amazon 2 large pizza team size).
* ✔️ Shared tasks improve a team member depth of knowledge.
* ✔️ Shared tasks improve  a team member breath of knowledge.
* ✔️ As knowledge is spread inside the team, the Bus Factor is not an issue.

## Conclusion

Time has improved things for all teams, and we are probably not at the end of the transformation of teams. Nevertheless, it is good for companies and individuals to adapt to changes in the environment.