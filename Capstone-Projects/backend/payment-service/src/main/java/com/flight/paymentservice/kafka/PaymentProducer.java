package com.flight.paymentservice.kafka;

//
//import com.flight.paymentservice.model.Payment;
//import org.springframework.kafka.core.KafkaTemplate;
//import org.springframework.stereotype.Service;
//
//@Service
//public class PaymentProducer {
//
//    private final KafkaTemplate<String, Object> kafkaTemplate;
//
//    public PaymentProducer(KafkaTemplate<String, Object> kafkaTemplate) {
//        this.kafkaTemplate = kafkaTemplate;
//    }
//
//    public void sendPaymentStatus(Payment payment) {
//        // Ye message Booking service consume karegi
//        kafkaTemplate.send("payment-status", payment);
//        System.out.println("✅ Sent payment status to Kafka: " + payment.getBookingId() + " -> " + payment.getPaymentStatus());
//    }
//}

import com.flight.paymentservice.model.Payment;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class PaymentProducer {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public PaymentProducer(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendPaymentStatusMessage(Payment payment) {
        String message = String.format(
                "Payment status for booking ID %s is %s",
                payment.getBookingId(),
                payment.getPaymentStatus()
        );

        kafkaTemplate.send("payment-status", message);
        System.out.println("✅ Sent to Kafka: " + message);
    }
}

