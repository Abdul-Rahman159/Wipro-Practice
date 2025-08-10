package com.wipro.oop;

public class Circle {
	double radius;
	
	public Circle(String color, boolean filled, double radius) {
        super();
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    @Override
    public String toString() {
        return "Circle [Radius=" + radius + ", " + super.toString() + "]";
    }
}
