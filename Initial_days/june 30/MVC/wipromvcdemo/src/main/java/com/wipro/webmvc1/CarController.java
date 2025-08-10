package com.wipro.webmvc1;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.wipro.webmvc1.service.CarService;

@Controller
@RequestMapping("/car")
public class CarController {
	@Autowired
	CarService carService;
	
	@GetMapping("/list")
	String showCarList(Model model)
	{ 
		model.addAttribute("carList", carService.getCarList());
		return "carList";
		
	}
	@GetMapping("/particular")
	String showCar(Model model)
	{
		return "carList";
		
	}
	

}