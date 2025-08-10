package com.wipro.entity.relationaldemo.service;

import java.util.List;

import com.wipro.entity.relationaldemo.entity.Person;

public interface PersonService {
	void save(Person person);
	List<Person> findAll();
}
