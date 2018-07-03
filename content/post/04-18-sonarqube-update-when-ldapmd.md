+++
title = "Sonarqube Upgrade Error due LDAP"
date =  2016-03-17T09:56:49+02:00
tags = ["daily", "learn"]
+++

While upgrading Sonarqube i am getting the next error message

> An error happened, some parts of the page might not render correctly. Please contact the administrator if you keep on experiencing this error

As you can see the message is not to explicit, in reality it doesnt have anything to do with reality. In my case i had copy as per the instructions the `sonar.properties` file. after searching i fouund this discussion [post](https://groups.google.com/forum/#!topic/sonarqube/clYmLXuz7Nk). 

The problem at this point became clear, LDAP is a plugin inside Sonarqube. During the upgrade process the plugins must have not been loaded causing an unidentified section in the upgrade.

The solution is simple:
1. Comment the LDAP section.
2. Go through the upgrade process of Sonarqube.
3. Stop Sonarqube.
4. Uncomment LDAP section.
5. Start Sonarqube.







