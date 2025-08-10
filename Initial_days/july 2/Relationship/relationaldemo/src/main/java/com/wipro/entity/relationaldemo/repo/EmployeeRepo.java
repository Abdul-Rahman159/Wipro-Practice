package com.wipro.entity.relationaldemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.entity.relationaldemo.entity.Employee;

public interface EmployeeRepo extends JpaRepository <Employee, Long>{

}
