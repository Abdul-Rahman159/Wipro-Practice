package com.wipro.oop;

public class Bird extends Animal {

    public Bird(int age, String name) {
        super(age, name);
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Tweet tweet!");
    }
}