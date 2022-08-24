---
title: 'Automate Anything: Power Automate + Trello + IFTTT'
description: how to automate tedius tasks with low code platforms
date: 2022-08-24T00:00:00+02:00
authors: []
tags: []
draft: true
published: false
series: ''

---
I am currently starting some new open-source projects and I feel it is tedious to do some recurrent tasks. For example:

* Promote this blog post in social media
* Announce a new release.

[Power Automate](https://powerautomate.microsoft.com/en-us/) & [IFTTT](https://ifttt.com/) integrations allow just this, by a process of action and reaction.  
![](https://github.com/kanekotic/diagrams/blob/main/automate.drawio.png?raw=true)

These systems provide:

* **Triggers**: they are the starting point of what will happen after.
* **Actions**: they react to previous steps on the described flow.

An example of this is the next flow:

![image](https://user-images.githubusercontent.com/3071208/186482177-7b6eb6c0-8632-4cd2-87c9-613788f553f8.png)

![image](https://user-images.githubusercontent.com/3071208/186478753-1ebcf35c-eb1e-492a-b41c-ac67a749d7f5.png)

* In IFTTT, if a new feed item exists in the RSS of my blog, it's posted as a card in a Trello board.
* The Power automate flow looks for new cards on that column.
* Retrieve the content
* post it into medium
* Post into Twitter and LinkedIn about the new blog post.

As you can see, automation is cool and can save us a lot of effort by increasing our productivity.