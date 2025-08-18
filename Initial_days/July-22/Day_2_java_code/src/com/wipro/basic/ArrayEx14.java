package com.wipro.basic;

public class ArrayEx14 {

	public static void main(String[] args) {
		int [] srcarr = {1, 1, 2, 2, 3, 4, 4, 5};
		int [] destarr = {};
		
		for (int i = 0; i < srcarr.length; i++) {
			if(srcarr[i] == srcarr[i+1]) {
				destarr[i] = srcarr[i];
			}else {
				destarr[i] = srcarr[i];
			}
			
		}
		System.out.println(destarr.length);
}
}