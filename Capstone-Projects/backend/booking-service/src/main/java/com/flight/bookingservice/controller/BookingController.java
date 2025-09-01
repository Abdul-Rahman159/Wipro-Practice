package com.flight.bookingservice.controller;

import com.flight.bookingservice.kafka.BookingEventProducer;
import com.flight.bookingservice.model.Booking;
import com.flight.bookingservice.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingEventProducer producer;

    private final BookingRepository repo;

    public BookingController(BookingRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/all")
    public List<Booking> all() {
        return repo.findAll();
    }

    // booking create
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Map<String, Object> payload) {
        Long flightId = Long.valueOf(payload.get("flightId").toString());
        String passenger = payload.get("passengerName").toString();
        String email = payload.getOrDefault("email", "").toString();
        String phone = payload.getOrDefault("phone", "").toString();
        Integer age = Integer.valueOf(payload.getOrDefault("age", "0").toString());
        String gender = payload.getOrDefault("gender", "").toString();
        Double amount = Double.valueOf(payload.get("amount").toString());

        Booking b = new Booking();
        b.setFlightId(flightId);
        b.setPassengerName(passenger);
        b.setEmail(email);
        b.setPhone(phone);
        b.setAge(age);
        b.setGender(gender);
        b.setAmount(amount);
        b.setStatus("initiated");
        b.setCreatedAt(LocalDateTime.now());

        Booking saved = repo.save(b);
        producer.sendBookingEvent("Booking created with ID: " + saved.getId());
        return ResponseEntity.ok(saved);
    }

    // ek endpoint jisse payment ke baad booking update ho
    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestParam String status) {
        return repo.findById(id).map(b -> {
            b.setStatus(status);
            repo.save(b);
            return ResponseEntity.ok(b);
        }).orElse(ResponseEntity.notFound().build());
    }
}

