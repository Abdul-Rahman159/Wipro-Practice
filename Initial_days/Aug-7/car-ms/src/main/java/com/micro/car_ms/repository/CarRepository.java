package com.micro.car_ms.repository;

import com.micro.car_ms.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}

