package com.micro.car_ms.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class CarRegistrationDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String registrationNumber;

    private LocalDate dateOfRegistration;

    public CarRegistrationDetail() {}

    public CarRegistrationDetail(String registrationNumber, LocalDate dateOfRegistration) {
        this.registrationNumber = registrationNumber;
        this.dateOfRegistration = dateOfRegistration;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public LocalDate getDateOfRegistration() {
        return dateOfRegistration;
    }

    public void setDateOfRegistration(LocalDate dateOfRegistration) {
        this.dateOfRegistration = dateOfRegistration;
    }
}

