package com.wipro.exception;

public class ExceptionEx6 {

	    public static void main(String[] args) {
	        String fName = null;

	        try {
	            // This will throw NullPointerException
	            String upperName = fName.toUpperCase();
	            System.out.println("Uppercase Name: " + upperName);
	        } catch (NullPointerException e) {
	            System.out.println("Caught NullPointerException: fName is null, cannot call toUpperCase().");
	        }
	    }
	}



