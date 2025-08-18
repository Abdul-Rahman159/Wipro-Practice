package com.micro.payment_ms.service;

import com.micro.payment_ms.model.Payment;
import com.micro.payment_ms.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment save(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Optional<Payment> getById(Long id) {
        return paymentRepository.findById(id);
    }

    public List<Payment> getAll() {
        return paymentRepository.findAll();
    }

    public Payment update(Payment payment) {
        return paymentRepository.save(payment);
    }

    public void deleteById(Long id) {
        paymentRepository.deleteById(id);
    }
}