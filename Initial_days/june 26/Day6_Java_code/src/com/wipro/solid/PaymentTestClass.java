package com.wipro.solid;

public class PaymentTestClass {

	public static void main(String[] args) {
		PaymentEx6 googlePay = new GooglePay();
		PaymentEx6 phonePe = new PhonePe();
		PaymentEx6 paytm = new Paytm();

        PaymentProcessor processor1 = new PaymentProcessor(googlePay);
        processor1.makePayment(500);

        PaymentProcessor processor2 = new PaymentProcessor(phonePe);
        processor2.makePayment(1000);

        PaymentProcessor processor3 = new PaymentProcessor(paytm);
        processor3.makePayment(750);

	}

}
