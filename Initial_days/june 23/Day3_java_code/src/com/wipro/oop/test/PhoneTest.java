package com.wipro.oop.test;

import com.wipro.oop.Apple15Plus;
import com.wipro.oop.Samsung;

public class PhoneTest {
	public static void main(String[] args) {
		Apple15Plus iPhone = new Apple15Plus();
		iPhone.makeCall("1234567890");
		
		Samsung samsung = new Samsung();
		samsung.makeCall("1234567890");
	}
}
