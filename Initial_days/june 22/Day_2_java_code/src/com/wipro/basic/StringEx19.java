package com.wipro.basic;

public class StringEx19 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String word = "Madam";

        word = word.toLowerCase();

        StringBuilder sb = new StringBuilder(word);
        String reversed = sb.reverse().toString();

        if (word.equals(reversed)) {
            System.out.println("palindrome.");
        } else {
            System.out.println("not a palindrome.");
        }
	}

}
