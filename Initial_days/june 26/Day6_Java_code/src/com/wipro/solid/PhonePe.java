package com.wipro.solid;

public class PhonePe implements PaymentEx6 {

	@Override
	public void pay(double amount) {
		System.out.println("Payment of Rs." + amount + " done using PhonePe.");

	}

}
