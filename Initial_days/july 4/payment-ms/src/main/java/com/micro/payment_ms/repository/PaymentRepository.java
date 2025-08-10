package com.micro.payment_ms.repository;

import com.micro.payment_ms.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}

