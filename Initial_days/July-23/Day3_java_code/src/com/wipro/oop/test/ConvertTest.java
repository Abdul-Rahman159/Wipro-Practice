package com.wipro.oop.test;

import com.wipro.oop.Converter;

public class ConvertTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Converter conv = new Converter();
		
		System.out.println(conv.convert(2));
		System.out.println(conv.convert(2,5));
		System.out.println(conv.convert(2.36));

	}

}
