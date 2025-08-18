package com.wipro.webmvc1.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.webmvc1.service.CarService;
import com.wipro.webmvc1.service.repo.CarRepo;

@Service
public class CarServiceimpl implements CarService {
	@Autowired
	CarRepo carRepo;
	
	@Override
	public List<String> getCarList() {
		 
		return carRepo.getCarList();
	}

}