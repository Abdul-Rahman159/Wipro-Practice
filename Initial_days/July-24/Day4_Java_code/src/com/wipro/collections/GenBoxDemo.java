package com.wipro.collections;

public class GenBoxDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		GenBox<String, Integer > g1 = new GenBox();
		g1.printData("Jan", 1);
		
		GenBox<String, String > g2 = new GenBox();
		g2.printData("yess", "Feb");
	}

}
