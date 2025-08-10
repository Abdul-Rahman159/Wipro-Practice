package com.wipro.restdemo.dto;

public class Mobile {
	String make;
    String modelNumber;
    double price;
    int id;
    
	public Mobile() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mobile(String make, String modelNumber, double price, int id) {
		super();
		this.make = make;
		this.modelNumber = modelNumber;
		this.price = price;
		this.id = id;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModelNumber() {
		return modelNumber;
	}

	public void setModelNumber(String modelNumber) {
		this.modelNumber = modelNumber;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Mobile [make=" + make + ", modelNumber=" + modelNumber + ", price=" + price + ", id=" + id + "]";
	}
	
	
    
    
}
