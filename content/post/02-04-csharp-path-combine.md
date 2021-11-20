---
title: C# - Path.Combine
summary: C# - Path.Combine
description: C# - Path.Combine
date: 2016-02-04T09:56:49+02:00
tags: 
    - daily
    - learn
published: false
series: null
cover_image: null
canonical_url: null
---

When using path.Combine if the second argument starts with a /. the first path is ignored and will give a path based on the C: drive.
```csharp
var path = Path.Combine(firstpath,$@"\myfolder\myfile.txt");
```

will not return <firstpath\myfolder\myfile.txt> will return <C:\\\myfolder\myfile.txt>.