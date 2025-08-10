package com.wipro.oop.test;

import com.wipro.oop.Gpay;
import com.wipro.oop.PaymentMethod;
import com.wipro.oop.PhonePay;

public class PaymentTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		PaymentMethod payment; 

        payment = new Gpay();
        payment.pay(500.0);

        payment = new PhonePay();
        payment.pay(750.0);
	}

}
