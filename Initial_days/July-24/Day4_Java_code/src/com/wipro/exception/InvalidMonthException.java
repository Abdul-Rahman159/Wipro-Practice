package com.wipro.exception;

public class InvalidMonthException extends Exception{
	int number;
	
	public InvalidMonthException(String number) {
		super(number);
	}

}
