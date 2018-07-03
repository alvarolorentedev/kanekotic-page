+++
title = "TFS 2015 - vnext and sonarqube integration"
date =  2016-02-01T09:56:49+02:00
tags = ["daily", "learn"]
+++

The modifications required to use the integrated sonarqube steps are:

1.	On your administration panel add a new Generic Endpoint with the connection name you decide and the sonarqube server address.
![](Resources/sonarqube2.PNG)

2.	Configure the start step as per the next image
    * select the endpoint configured before
    * Add the project parameters:
        * key (this is an unique identifier).
        * Name (display name for your software).
        * Version (related software version).

![](Resources/sonarqube1.PNG)
