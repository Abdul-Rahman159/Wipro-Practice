package com.wipro.basic;

public class EnumEx17 {

	public static void main(String[] args) {
//		enum Day {
//			SUN,
//			MON,
//			TUE,
//			WED,
//			THU,
//			FRI,
//			SAT
//		}
//		
////		Day day=Day.Mon;
////		if(day==Day.Mon)
////		{
////			System.out.println("Monday");
////		}
//		
//		for(Day d:Day.values())
//		{
//			System.out.println(d);
//		}

		enum Month {
				Jan,
				Feb,
				Mar,
				Apr,
				May,
				Jun,
				Jul,
				Aug,
				Sep,
				Oct,
				Nov,
				Dec
		};
		
		Month month=Month.Feb;
	if(month==Month.Feb)
	{
		System.out.println("February");
	}
	
	for(Month d:Month.values())
	{
		System.out.println(d);
	}
	
//	Month month2=Month.Jan;
	
	
	
	}

}
