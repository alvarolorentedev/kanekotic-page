+++
title = "C# - Extension methods overlap with linq"
date =  2016-01-28T09:56:49+02:00
tags = ["daily", "learn"]
+++

I have hit a corner case of extension methods and LINQ. Today I was declaring some extension methods to make my code more readable.So I created an extension method that gets an object and performs a direct cast:

```csharp
public static class GeneralExtensions
{
    public static T Cast<T>(this object o)
    {
    	return (T)o;
    }
}
```

The intention was to be able to call my direct castings by something like this:
```csharp
MyObject.CastTo<MyInterface>();
```

It happens that in the same namespace I have an extension method that has a LINQ expression
```csharp
using System;
using System.Collections.Generic;
using System.Linq;

public static class EnumExtenstions
{
	public static IEnumerable<string> UseLinq(this IEnumerable<object> collection)
	{
		return (from object value in collection select value.ToString() ).ToList();
	}
}
```

Adding this first extension method to my code base cause the next error
```
Error	CS1936	Could not find an implementation of the query pattern for source type 'object'.  'Select' not found.
```

Having both extension methods in different namespaces (and not referred), or rename ```Cast<T>``` to something different solves the issue. This is caused for an overlap of the extension methods where the nearest one to the code is the one called.

##**How bad Extension Methods over object could go?**

This is an extract from the answer of Eric Lippert, regarding the code:

```csharp
public static class GeneralExtensions
{
    public static T Cast<T>(this object o)
    {
    	return (T)o;
    }
}
```
Side Effects of the ```cast<T>```:
* ```Cast<int>(123)``` unnecessarily boxes the int, ```(int)123``` does not.
* ```Cast< short >(123)``` fails but ```(short)123``` succeeds. There is no conversion from a boxed int to a short.
* Suppose you have a user-defined conversion from Animal to Shape. ```Cast<Shape>(new Tiger())``` fails but ```(Shape) new Tiger()``` succeeds.
* Suppose q is a nullable int that happens to be null. ```Cast<string>(q)``` succeeds! But ```(string)q``` would fail at compile time
* Etc

Cast method has some overlap with the real cast operator but is not a substitute for it. To capture the semantics of the cast operator there is a need to use dynamic, which starts the compiler at runtime and does the compile time analysis on runtime types.
