package com.wipro.basic;

public class ArrayEx11 {

	public static void main(String[] args) {
		int [] numbers = {10,20,30,40};
		
		for(int i=0; i< numbers.length; i++) {
			numbers[i] = numbers[i] * 2;
		}
		for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }

	}

}
