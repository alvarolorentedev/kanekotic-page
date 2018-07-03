+++
title = "C# - Fluent Interfaces with Extension Methods"
date =  2016-01-27T09:56:49+02:00
tags = ["daily", "learn"]
+++

I have not experiment to much with fluent interfaces. But is something cool especially to make code that is expressive.

```csharp
public struct Coordenates
    {
        public double X { get; set; }
        public double Y { get; set; }
        public double Z { get; set; }
    }

    public static class CoordenatesExtensions
    {

        public static Coordenates X(this Coordenates coordenates, double value)
        {
            coordenates.X = value;
            return coordenates;
        }

        public static Coordenates Y(this Coordenates coordenates, double value)
        {
            coordenates.Y = value;
            return coordenates;
        }
        public static Coordenates Z(this Coordenates coordenates, double value)
        {
            coordenates.Z = value;
            return coordenates;
        }
    }

    public class Points
    {
        private Coordenates point;
        public Points()
        {
            point = new Coordenates().X(2.1).Y(2.4).Z(3.2);
        }
    }
```
also can be used with some language properties to make it more expressive
```csharp
public static class GeneralExtensions
{
    public static T As<T>(this object o) where T : class
    {
        return o as T;
    }

    public static T Cast<T>(this object o)
    {
        return (T)o;
    }

    public static bool Is<T>(this object o)
    {
        return o is T;
    }
}

```
