package com.wipro.oop.test;

import com.wipro.oop.Calculator;

public class CalsiTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calculator calc = new Calculator();
		//compile time polymorphism
		System.out.println(calc.add(2, 3));
		System.out.println(calc.add(2, 3, 5));
		System.out.println(calc.add(2.66, 5.32, 42.56));
	}

}
