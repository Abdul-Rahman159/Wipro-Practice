package com.wipro.oop;

public abstract class Animal {
	int age;
    String name;
    
	public Animal(int age, String name) {
		super();
		this.age = age;
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public abstract void makeSound();
	
	@Override
	public String toString() {
		return "Animal [age=" + age + ", name=" + name + "]";
	}
    
    
}
