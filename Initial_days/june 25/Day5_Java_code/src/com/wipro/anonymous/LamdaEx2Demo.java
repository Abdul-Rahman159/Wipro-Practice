package com.wipro.anonymous;

public class LamdaEx2Demo {

	public static void main(String[] args) {
		
		Greet greeting = () -> System.out.println("Hello Lambda");
		
		greeting.sayHello();
		
	}

}
