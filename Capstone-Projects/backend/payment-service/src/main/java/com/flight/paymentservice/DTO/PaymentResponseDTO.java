package com.flight.paymentservice.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResponseDTO {
    private Long id;
    private String bookingId;
    private String transactionId;
    private String status;
    private Double price;
    private String cardHolderName;
    private String flightNumber;
    private String source;
    private String destination;
    private String departureTime;
}
