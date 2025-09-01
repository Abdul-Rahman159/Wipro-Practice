package com.flight.paymentservice.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class BookingEventConsumer {

    @KafkaListener(topics = "booking-topic", groupId = "payment-group")
    public void consume(String message) {
        System.out.println("📩 Received Kafka message in Payment-Service: " + message);
    }
}

