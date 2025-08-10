package com.wipro.oop;

public class Citi implements BankOps {

	@Override
	public void deposit(double amount, String accNumber) {
		// TODO Auto-generated method stub
		System.out.println("Citi Deposit Amount = " + amount + "  AccNum =" + accNumber);
	}

	@Override
	public double withdraw(double amount, String accNumber) {
		// TODO Auto-generated method stub
		System.out.println("Citi Withdrawl Amount = " + amount + "  AccNum =" + accNumber);
		return 0;
	}

	public void setAccountNumber(String string) {
		// TODO Auto-generated method stub
		
	}


}
