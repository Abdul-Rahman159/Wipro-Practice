package com.wipro.basic;

public class ConditionalShape {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		char shape = 'R';
		
		if(shape == 'R')
		{
			System.out.println("Rectangle");
		}
		else if(shape == 'C'){
			System.out.println("Circle");
		}
		else if(shape == 'S'){
			System.out.println("Square");
		}
		else{
			System.out.println("Other");
		}
	}

}
