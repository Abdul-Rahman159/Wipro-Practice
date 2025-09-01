package com.flight.paymentservice.controller;

import com.flight.paymentservice.model.Payment;
import com.flight.paymentservice.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private final PaymentService service;

    public PaymentController(PaymentService service) {
        this.service = service;
    }

    @PostMapping("/pay")
    public ResponseEntity<?> makePayment(@RequestBody Payment paymentRequest) {
        Payment savedPayment = service.processPayment(paymentRequest);

        Map<String, Object> resp = new HashMap<>();
        resp.put("id", savedPayment.getId());
        resp.put("bookingId", savedPayment.getBookingId());
        resp.put("price", savedPayment.getPrice());
        resp.put("cardHolderName", savedPayment.getCardHolderName());
        resp.put("status", savedPayment.getPaymentStatus());
        resp.put("transactionId", "TXN-" + savedPayment.getId());

        return ResponseEntity.ok(resp);
    }
}
