package com.wipro.datetimedemo;
import java.time.LocalDate;

public class LeapYearChecker {

    public static void main(String[] args) {
       
        int year = 2024;
        int month = 2;
        int day = 29;

        LocalDate date = LocalDate.of(year, month, day);

        if (date.isLeapYear()) {
            System.out.println(year + " is a leap year.");
        } else {
            System.out.println(year + " is not a leap year.");
        }
    }
}
