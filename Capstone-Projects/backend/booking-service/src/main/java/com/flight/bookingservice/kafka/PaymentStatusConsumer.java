package com.flight.bookingservice.kafka;

//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Service;
//import com.flight.bookingservice.repository.BookingRepository;
//import com.flight.bookingservice.model.Booking;
//
//@Service
//public class PaymentStatusConsumer {
//
//    private final BookingRepository repo;
//
//    public PaymentStatusConsumer(BookingRepository repo) {
//        this.repo = repo;
//    }
//
//    @KafkaListener(topics = "payment-status-topic", groupId = "booking-group")
//    public void consumePaymentStatus(String message) {
//        System.out.println("📩 Received from Kafka: " + message);
//
//        // Example simple logic (tum yahan JSON bhejoge to aur accurate hoga)
//        if (message.contains("SUCCESS")) {
//            // parse bookingId from message
//            Long bookingId = Long.parseLong(message.split("bookingId ")[1].split(" ")[0]);
//            Booking b = repo.findById(bookingId).orElse(null);
//            if (b != null) {
//                b.setStatus("successful");
//                repo.save(b);
//            }
//        } else if (message.contains("FAILED")) {
//            Long bookingId = Long.parseLong(message.split("bookingId ")[1].split(" ")[0]);
//            Booking b = repo.findById(bookingId).orElse(null);
//            if (b != null) {
//                b.setStatus("failed");
//                repo.save(b);
//            }
//        }
//    }
//}


import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class PaymentStatusConsumer {

    @KafkaListener(topics = "payment-status", groupId = "booking-group")
    public void consumeMessage(String message) {
        System.out.println("📩 Received from Kafka: " + message);
    }
}

