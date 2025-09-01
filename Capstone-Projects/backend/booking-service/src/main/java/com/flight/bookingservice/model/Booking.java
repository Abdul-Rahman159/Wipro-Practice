
package com.flight.bookingservice.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long flightId;

    private String passengerName;
    private String email;
    private String phone;
    private Integer age;
    private String gender;

    private Double amount;
    private String status; // initiated, successful, failed, cancelled
    private LocalDateTime createdAt;

    // getters and setters
    public Long getId(){ return id; }
    public void setId(Long id){ this.id = id; }

    public Long getFlightId(){ return flightId; }
    public void setFlightId(Long f){ this.flightId = f; }

    public String getPassengerName(){ return passengerName; }
    public void setPassengerName(String p){ this.passengerName = p; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public Double getAmount(){ return amount; }
    public void setAmount(Double a){ this.amount = a; }

    public String getStatus(){ return status; }
    public void setStatus(String s){ this.status = s; }

    public LocalDateTime getCreatedAt(){ return createdAt; }
    public void setCreatedAt(LocalDateTime t){ this.createdAt = t; }
}

