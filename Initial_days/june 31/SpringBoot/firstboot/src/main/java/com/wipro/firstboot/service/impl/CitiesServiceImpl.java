package com.wipro.firstboot.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.firstboot.repo.CitiesRepo;
import com.wipro.firstboot.service.CitiesService;

@Service
public class CitiesServiceImpl implements CitiesService {

	@Autowired
	CitiesRepo citiesRepo;
	
	@Override
	public List<String> getCityList() {
		return citiesRepo.getCityList();
	}
	
	

}