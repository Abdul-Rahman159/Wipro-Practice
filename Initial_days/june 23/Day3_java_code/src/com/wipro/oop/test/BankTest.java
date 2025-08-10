package com.wipro.oop.test;

import com.wipro.oop.Citi;
import com.wipro.oop.HDFC;

public class BankTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		HDFC hdfc = new HDFC();
		hdfc.deposit(12000, "1234567891");
		hdfc.withdraw(3000, "1234567891");
		
		Citi citi = new Citi();
		citi.deposit(22000, "1234567891");
		citi.withdraw(1000, "5234567891");
		
	}

}
