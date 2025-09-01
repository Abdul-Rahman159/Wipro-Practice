package com.flight.paymentservice.service;

import com.flight.paymentservice.kafka.PaymentProducer;
import com.flight.paymentservice.model.Payment;
import com.flight.paymentservice.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.time.YearMonth;

@Service
public class PaymentService {

    private final PaymentRepository repo;
    private final PaymentProducer producer;

    public PaymentService(PaymentRepository repo, PaymentProducer producer) {
        this.repo = repo;
        this.producer = producer;
    }

    public Payment processPayment(Payment request) {
        // Card validation
        if (request.getCardNumber() == null || request.getCardNumber().length() != 16) {
            request.setPaymentStatus("FAILED - INVALID_CARD");
            Payment saved = repo.save(request);
            producer.sendPaymentStatusMessage(saved);  // Kafka msg bhejo
            return saved;
        }

        // Expiry check
        try {
            YearMonth ym = YearMonth.parse(request.getCardExpiry());
            if (ym.isBefore(YearMonth.now())) {
                request.setPaymentStatus("FAILED - CARD_EXPIRED");
                Payment saved = repo.save(request);
                producer.sendPaymentStatusMessage(saved);
                return saved;
            }
        } catch (Exception e) {
            request.setPaymentStatus("FAILED - INVALID_EXPIRY");
            Payment saved = repo.save(request);
            producer.sendPaymentStatusMessage(saved);
            return saved;
        }

        // Success
        request.setPaymentStatus("SUCCESS");
        Payment saved = repo.save(request);
        producer.sendPaymentStatusMessage(saved);
        return saved;
    }
}
