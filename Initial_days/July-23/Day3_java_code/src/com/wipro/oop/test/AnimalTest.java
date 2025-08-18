package com.wipro.oop.test;

import com.wipro.oop.Bird;
import com.wipro.oop.Dog;
import com.wipro.oop.Human;

public class AnimalTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Human human = new Human(25, "Alice");
        Bird bird = new Bird(2, "Tweety");
        Dog dog = new Dog(4, "Bruno");

        human.makeSound();
        bird.makeSound();
        dog.makeSound();
	}

}
