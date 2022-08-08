---
title: The testing piramid is actually fat
description: In the world of microservices testing rules have changed
authors: [kanekotic]
tags: [agile,webdev,programming,testing]
draft: true
published: false
---

During a long time we have all refered to the test piramid as a normal piramid, but is this the correct shape? should unit tests run always in complete isolation?
When unit testing, dependencies tend to be moved to their own responsible portions of code. This latter on is passed into other portions of code that will use it, this is basee on the principle of inversion of control. This is great becuase we want classes or functions to do single things, and do it right.
Sometimes dependency injection becomes an obsession and we generate unrequired layers, adapters, helpers, etc. This overengineering was necesary on the past to have fully tested code as external interactions where complex and costly to simulate.
Nowadays this is not an issue anymore with docker and databases that can simulate real behaviour in memory.
, so how do we make sure that logic embeded in queries are correct? or interactions with other services are correct?