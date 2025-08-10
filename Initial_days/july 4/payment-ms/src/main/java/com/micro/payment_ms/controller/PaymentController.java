package com.micro.payment_ms.controller;

import com.micro.payment_ms.model.Payment;
 import com.micro.payment_ms.service.PaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
 import org.springframework.web.bind.annotation.*;
 import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<Payment> create(@RequestBody Payment payment) {
        Payment saved = paymentService.save(payment);

        HttpHeaders headers = new HttpHeaders();
        headers.add("created-date", LocalDateTime.now().toLocalDate().toString());

        return new ResponseEntity<>(saved, headers, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<String> update(@RequestBody Payment payment) {
        paymentService.update(payment);
        return ResponseEntity.ok("Data modified successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        paymentService.deleteById(id);
        return ResponseEntity.ok("Data deleted successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id) {
        return paymentService.getById(id)
                .map(payment -> {
                    HttpHeaders headers = new HttpHeaders();
                    headers.add("search-time", LocalDateTime.now().toString());
                    return new ResponseEntity<Object>(payment, headers, HttpStatus.OK);
                })
                .orElseGet(() -> {
                    HttpHeaders headers = new HttpHeaders();
                    headers.add("search-time", LocalDateTime.now().toString());
                    return new ResponseEntity<Object>("Payment not found", headers, HttpStatus.NOT_FOUND);
                });
    }


    @GetMapping
    public ResponseEntity<?> getAll() {
        List<Payment> list = paymentService.getAll();

        HttpHeaders headers = new HttpHeaders();
        headers.add("search-time", LocalDateTime.now().toString());

        if (list.isEmpty()) {
            return new ResponseEntity<>("No payments available", headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(list, headers, HttpStatus.OK);
    }
}


