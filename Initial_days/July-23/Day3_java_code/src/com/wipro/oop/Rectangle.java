package com.wipro.oop;

public class Rectangle {
	double length;
    double width;

    public Rectangle(String color, boolean filled, double length, double width) {
        super();
        this.length = length;
        this.width = width;
    }

    public double getLength() {
        return length;
    }

    public double getWidth() {
        return width;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    @Override
    public String toString() {
        return "Rectangle [Length=" + length + ", Width=" + width + ", " + super.toString() + "]";
    }
}
