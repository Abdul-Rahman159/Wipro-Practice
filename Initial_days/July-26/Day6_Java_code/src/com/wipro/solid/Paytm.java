package com.wipro.solid;

public class Paytm implements PaymentEx6 {

	@Override
	public void pay(double amount) {
		System.out.println("Payment of Rs." + amount + " done using Paytm.");

	}

}
