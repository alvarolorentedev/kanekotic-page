+++
title = "C# - Path.Combine"
date =  2016-02-04T09:56:49+02:00
tags = ["daily", "learn"]
+++

When using path.Combine if the second argument starts with a /. the first path is ignored and will give a path based on the C: drive.
```csharp
var path = Path.Combine(firstpath,$@"\myfolder\myfile.txt");
```

will not return <firstpath\myfolder\myfile.txt> will return <C:\\\myfolder\myfile.txt>.

## **Meteor - Session variables**

Session variables are easy to use in meteor. the can ve get and set from the javascript code using:

```javascript
Session.get('variableName');
Session.set('variableName', true);
```

on your HTML you can reference the get method easily by:
```HTML
<template name="admin">
    {{#if $.Session.get 'variableName'}}
        I am here
    {{else}}
        I am not here
    {{/if}}
</template>
```
