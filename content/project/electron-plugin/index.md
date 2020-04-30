---
date: 2019-06-29T00:00:00
title: "Electron Plugin"
image_preview: "project/anyprebuilt.png"
url_code: "https://github.com/kanekotic/electron-plugin"
tags: ["plugin","electron"]
---

Create extensible electron applications through a plugin architecture that uses NPM (or similar registry) or GitHub as repository for the extensions.

## Installation

add it to your electron project using `npm install electron-plugin --save` or `yarn add electron-plugin`

## Usage

require `electron-plugin` exports a function that requires a javascript object and an electron window, as seen on the next example:

```js
const pluginManager = require(`electron-plugin`)
let config = { 
        installPath: `${__dirname}/test_folder`,
        plugins : {
            "electron-plugin-example": "0.0.2"
        }
     },
    extensionPoint = {
        app: 'anything you want to use as exstention point'
    }

pluginManager.load(config, extensionPoint)
```

##### Created my free [logo](logomakr.com/2NQeYP) at [LogoMakr.com](LogoMakr.com) 