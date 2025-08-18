package com.wipro.oop;

public interface MobileOps {
	//all fun in an interface are abstract& public
	void makeCall(String phoneNumber);
	void takePhoto();
	void turnOnWifi();
	default void sleep() {
		System.out.println("sleep");
	}
}
