package com.wipro.webmvc1.service.repo;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class CarRepo {
	
 
	public List<String> getCarList() {		
		List<String> carList= Arrays.asList("Hyundai","Maruti Suzuki Swift","Scorpio-N","Tesla");
		return carList;
	}

}