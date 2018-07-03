+++
title = "Unit Test CheatSheet"
date =  2016-03-02T09:56:49+02:00
tags = ["daily", "learn"]
+++

##**mstest**

links:
* [assert](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.assert.aspx)
* [collection assert](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.collectionassert.aspx)

##**Nunit**

links:
* [Attributes](https://github.com/nunit/docs/wiki/Attributes)
* [Assertion](https://github.com/nunit/docs/wiki/Assertions)

##**MOQ**
Example
```cs
public interface IFoo {
   public bool DoSomething(string);
}

int calls;
var mock = new Mock<IFoo>();
mock.Setup(foo => foo.DoSomething(It.IsAny<string>())).
         Returns((string s) => s.ToLower())
         .Callback(() => ++calls);

mock.SetupProperty(f => f.Name, "foo");
mock.VerifySet(foo => foo.Name = "foo");

mock.Verify(foo => foo.DoSomething(It.IsAny<string>()), Times.Never());
```

##**Test internal Classes**

In assembly info to test internal classes you will need to know the name of the file
```cs
[assembly: InternalsVisibleToAttribute("<Project Name>")]
```
