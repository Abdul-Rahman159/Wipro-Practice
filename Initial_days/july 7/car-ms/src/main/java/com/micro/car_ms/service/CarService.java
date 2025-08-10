package com.micro.car_ms.service;

import com.micro.car_ms.model.Car;
import com.micro.car_ms.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    public Car save(Car car) {
        return carRepository.save(car);
    }

    public List<Car> getAll() {
        return carRepository.findAll();
    }

    public Optional<Car> getById(Long id) {
        return carRepository.findById(id);
    }

    public Car update(Long id, Car updatedCar) {
        return carRepository.findById(id).map(car -> {
            car.setMake(updatedCar.getMake());
            car.setRegistrationDetail(updatedCar.getRegistrationDetail());
            return carRepository.save(car);
        }).orElse(null);
    }

    public void delete(Long id) {
        carRepository.deleteById(id);
    }
}

