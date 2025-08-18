package com.wipro.oop;

public class Human extends Animal{
	
	public Human(int age, String name) {
		super(age, name);
	}

	@Override
    public void makeSound() {
        System.out.println(getName() + " says: Hello!");
    }
	

}
