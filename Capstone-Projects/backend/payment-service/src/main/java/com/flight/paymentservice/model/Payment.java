package com.flight.paymentservice.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "payments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bookingId;       // dusri service se aayega
    private Double price;           // dusri service se aayega
    private String paymentStatus;   // SUCCESS / FAILED

    // frontend se aane wale fields
    private String cardHolderName;
    private String cardExpiry;      // format: YYYY-MM
    private String cardNumber;
    private Integer cvv;

    public Payment(Long id, Integer cvv, String cardNumber, String cardExpiry, String cardHolderName, String paymentStatus, Double price, String bookingId) {
        this.id = id;
        this.cvv = cvv;
        this.cardNumber = cardNumber;
        this.cardExpiry = cardExpiry;
        this.cardHolderName = cardHolderName;
        this.paymentStatus = paymentStatus;
        this.price = price;
        this.bookingId = bookingId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getCardHolderName() {
        return cardHolderName;
    }

    public void setCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
    }

    public String getCardExpiry() {
        return cardExpiry;
    }

    public void setCardExpiry(String cardExpiry) {
        this.cardExpiry = cardExpiry;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public Integer getCvv() {
        return cvv;
    }

    public void setCvv(Integer cvv) {
        this.cvv = cvv;
    }
}
