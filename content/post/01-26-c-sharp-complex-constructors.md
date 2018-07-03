+++
title = "Coding - C# - Complex Constructors"
date =  2016-01-26T09:56:49+02:00
tags = ["daily", "learn"]
+++

When doing complex objects using an object to help the building is welcome.
```csharp
public class Complex
{
    double x;
    double y;
    double z;

    float height;
    float width;

    string foreground;
    string background;

    public Complex()
    {
        x = 1.456;
        y = 1.234;
        z = 1.789;

        height = 10.12;
        width = 10.14;

        foreground = "#FFF";
        background = "#FA1";
    }

}
```
In this way you remove some complexity of just adding steps in your constructor to something more abstract and can contain the logic.

```csharp
public class Complex
{
    public double X { get; set; }
    public double Y { get; set; }
    public double Z { get; set; }

    public double Height { get; set; }
    public double Width { get; set; }

    public string Foreground { get; set; }
    public string Background { get; set; }

    public Complex(ComplexBuildHelper buildHelper)
    {
        buildHelper.Construct(this);
    }

}

public class ComplexBuildHelper
{
    public void Construct(Complex reference)
    {
        BuildPosition(reference);
        BuildDimension(reference);
        BuildCharacteristics(reference);
    }

    private void BuildPosition(Complex reference)
    {
        reference.X = 1.456;
        reference.Y = 1.234;
        reference.Z = 1.789;
    }

    private void BuildDimension(Complex reference)
    {
        reference.Height = 10.12;
        reference.Width = 10.14;
    }

    private void BuildCharacteristics(Complex reference)
    {
        reference.Foreground = "#FFF";
        reference.Background = "#FA1";
    }
}
```
