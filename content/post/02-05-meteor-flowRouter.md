+++
title = "Meteor - FlowRouter"
date =  2016-02-05T09:56:49+02:00
tags = ["daily", "learn"]
+++

This package is a very useful to define the navigation on your client side application. To add it just use the next command line:
```
meteor add kadira:flow-router
```

a static route can be done as the next code. Where name needs to be a unique identifier, and the render string has to be the name of the template.  
```javascript
FlowRouter.route('/',
{
  name: 'homeId',
  action(){
    BlazeLayout.render('homeTemplate');
  }
});
```

in case of requiring a dynamic page. Where the change is just the second objects where you defined the child template.
```javascript
FlowRouter.route('/',
{
  name: 'mainId',
  action(){
    BlazeLayout.render('mainTemplate', {mainTemplate: 'dynamicTemplate'});
  }
});
```



Other interesting parts of this package is the definition of variables on the route definition (like :id in the next code).
```javascript
FlowRouter.route('/playlist/:id',
{
  name: 'playlist',
  action(){
    BlazeLayout.render('main', {main: 'playlist'});
  }
});
```

there is also a possibility to use it in any part of the client javascript code to do redirection by using:
```javascript
FlowRouter.go('home');
```
