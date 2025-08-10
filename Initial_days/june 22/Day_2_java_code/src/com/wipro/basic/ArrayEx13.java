package com.wipro.basic;

public class ArrayEx13 {

	public static void main(String[] args) {
		 int[] arr = {10, 5, 20, 8, 15};

	        int largest = arr[0];
	        int secondLargest = arr[0];

	        for (int i = 1; i < arr.length; i++) {
	            if (arr[i] > largest) {
	                largest = arr[i];
	            }
	        }

	        for (int i = 0; i < arr.length; i++) {
	            if (arr[i] > secondLargest && arr[i] < largest) {
	                secondLargest = arr[i];
	            }
	        }

	        System.out.println(secondLargest);

	}

}
