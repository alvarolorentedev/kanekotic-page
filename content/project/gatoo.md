+++
# Date this page was created.
date = 2016-04-27T00:00:00

# Project title.

# Project summary to display on homepage.
summary = "Google analytics exporter to multiple outputs."

# Optional image to display on homepage (relative to `static/img/` folder).
image_preview = "gatoo.png"

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["google", "google-analytics", "export", "command line", "analytics"]

# Optional external URL for project (replaces project detail page).
external_link = ""
math = false

+++
# ![logomakr_32f2md](https://user-images.githubusercontent.com/3071208/42147664-29898cca-7dcf-11e8-9c50-2cf3845b7fe8.png)

[![Build Status](https://travis-ci.org/kanekotic/gatoo.svg?branch=master)](https://travis-ci.org/kanekotic/gatoo)
[![Coverage Status](https://coveralls.io/repos/github/kanekotic/gatoo/badge.svg?branch=master)](https://coveralls.io/github/kanekotic/gatoo?branch=master)

this project will provide a command line and a library to export google analytics to your prefered endpoint (console, log management, or db).

## Use as Command Line
install globally with `npm install gatoo -g`. Aftyer this it can be run with the next command:

```bash
gatoo console <email> <ReplativePath> <viewId> <startDate> <endDate> <metrics> <dimensions>
```

## Use as library

first step is to add this to your project throught `yarn add gatoo` or `npm install gatoo`

currently you can retrieve in a simple way data from google analytics and route it to your prefered output. An example of retrieval is the next one.

### Import
```js
const importer = require('../lib/index').importer
    path = require('path')
    
const email = 'your email' //email account from the user credentials
    keyPath = path.join(__dirname, 'your credentials')// path to credentials json or pem
    config = {
    viewId: "some viewId",//the view id to query
    daterange:{
        "endDate":"2017-06-30",
        "startDate":"2016-06-30"
      },
      metrics: "ga:users",
      dimensions: "ga:date"
    }

const example = async () => {
    const result = await importer(email, keyPath, config)
    console.log(JSON.stringify(result.data))
}

example()
```

### Export
```js
const exporter = require('../lib/index').exporter
    path = require('path')
    
const email = 'your email' //email account from the user credentials
    keyPath = path.join(__dirname, 'your credentials')// path to credentials json or pem
    config = {
    viewId: "some viewId",//the view id to query
    daterange:{
        "endDate":"2017-06-30",
        "startDate":"2016-06-30"
      },
      metrics: "ga:users",
      dimensions: "ga:date"
    }

const doSomething () => {}

const example = async () => {
    const result = await exporter(email, keyPath, config,  doSomething)
}

example()
```

### Export to console
```js
const exporter = require('../lib/index').outputTo
    path = require('path')
    
const email = 'your email' //email account from the user credentials
    keyPath = path.join(__dirname, 'your credentials')// path to credentials json or pem
    config = {
    viewId: "some viewId",//the view id to query
    daterange:{
        "endDate":"2017-06-30",
        "startDate":"2016-06-30"
      },
      metrics: "ga:users",
      dimensions: "ga:date"
    }

const example = async () => {
    const result = await outputTo.console(email, keyPath, config)
}

example()
```

## TODO

- [x] Retrieve data from google analytics 
- [x] Create library
- [x] Create adapter for output console  
- [x] Create command line tool console  
- [ ] Create adapter logstash  
- [ ] Create adapter fluentd  
- [ ] Create adapter ES  
- [ ] Create command line tool logstash  
- [ ] Create command line tool fluentd  
- [ ] Create command line tool ES  

### Logo
Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a> https://logomakr.com/32f2Md

