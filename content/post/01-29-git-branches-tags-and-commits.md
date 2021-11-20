---
title: GIT - Branches, Tags and Commits
summary: GIT - Branches, Tags and Commits
description: GIT - Branches, Tags and Commits
date: 2016-01-29T09:56:49+02:00
tags: 
    - daily
    - learn
draft: false
published: false
series: null
cover_image: null
canonical_url: null
---

I was concern what will happend with my comments in the case i remove a branch.

In git Commits are independents of branch's and Tag's. This last two are just pointers to certain commit. Trying to delete a Branch could create unreachable commits but if this are tag they become reachable.

Removing branches will not remove commits, they will just become unreachable. Unless they are deleted with the git-gc command for example.
