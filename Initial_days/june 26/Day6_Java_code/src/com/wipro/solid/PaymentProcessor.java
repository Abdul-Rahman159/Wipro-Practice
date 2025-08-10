package com.wipro.solid;

public class PaymentProcessor {
	PaymentEx6 paymentMethod;

    public PaymentProcessor(PaymentEx6 paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void makePayment(double amount) {
        paymentMethod.pay(amount);
    }
}
