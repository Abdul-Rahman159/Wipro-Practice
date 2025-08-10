package com.wipro.oop;

public class Dog extends Animal {

    public Dog(int age, String name) {
        super(age, name);
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Woof woof!");
    }
}
