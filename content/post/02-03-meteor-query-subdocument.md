+++
title = "Meteor - Query subdocument"
date =  2016-02-03T09:56:49+02:00
tags = ["daily", "learn"]
+++


To make a query over a subdocument in meteor is not posible to use directly the '$' or '$elemMatch' notation. It is necesary to use the keyword 'fields:' to do this. To publish just part of a mongo document you should do a query similar to this:

```javascript
Meteor.publish('chapter', function(id, name){
  check(id,String);
  check(name,String);
  return Playlists.find({ _id: id }, { fields: { chapters: { $elemMatch: { name: name }}}});
});
```
That from the original document:
```json
{
  "_id": "cx8cmw5KMjHQm8czw",
  "name": "Test",
  "description": "this is a test",
  "chapters": [
    {
      "name": "First chapter",
      "description": "this is a video about blah blah blah",
      "video": {
        "youtube": "yoAFDy1WS94"
      }
    },
    {
      "name": "Second chapter",
      "description": "this is a video about blah blah blah",
      "video": {
        "youtube": "yoAFDy1WS94"
      }
    }
  ],
  "createdAt": "2016-02-03T07:18:52.371Z",
  "isPublic": false
}
```

Will return:
```json
{
  "_id": "cx8cmw5KMjHQm8czw",
  "chapters": [
    {
      "name": "First chapter",
      "description": "this is a video about blah blah blah",
      "video": {
        "youtube": "ldkfkfkdlfjdkf"
      }
    }
  ]
}

```
This is useful if you have big documents or don't want the complexity of having 2 different collections that need to be related. It will help with the performance and resources that your application uses.

now if you want to use the sub-document in your UI, you should just subscribe and add a helper to access this array item, like for example:
```javascript
Template.chapter.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    var name = FlowRouter.getParam('name');
    self.subscribe('chapter', id, name);
  });
});

Template.chapter.helpers({
  chapter: () => {
      return Playlists.findOne({}).chapters[0];
    }
});
```

Finally your HTML just needs to reference the helper defined to show the information
```html
<template name="chapter">
    <div class="chapter-body">
        <h3>{{ chapter.name }}</h3>
        <iframe width="560" height="315" class="video"
          src="https://www.youtube.com/embed/{{ chapter.video.youtube }}"
          frameborder="0" allowfullscreen></iframe>
        {{ #markdown }}{{ chapter.description }}{{ /markdown }}
    </div>
</template>
```
