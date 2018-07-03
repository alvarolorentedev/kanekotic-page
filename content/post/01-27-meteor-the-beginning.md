+++
title = "Meteor the beginning"
date =  2016-01-27T09:56:49+02:00
tags = ["daily", "learn"]
+++

##**Documentation**

I found a lot of interesting things in this link, i can setup my view model to a real JavaScript object.

https://viewmodel.meteor.com/docs

##**Markdown**

To add markdown support you will have to add the markdown package:

```
meteor add markdown
```

If you also want your snippets of code to have some style you will also need to add the highlight.js package:

```
meteor add simple:highlight.js
```

##**AutoForm**

to get a multi-line input you need to make sure you get a textarea. This can be done in the collection definition by:
```js
TestSchema = new SimpleSchema({
    content: {
        type: String,
        label: "Content",
        autoform: {
            rows: 10
        }
    }
});
```
