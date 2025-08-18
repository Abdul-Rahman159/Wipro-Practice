package com.micro.order_ms.feign;

import com.micro.order_ms.DTO.PaymentRequest;
import com.micro.order_ms.DTO.PaymentResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "payment-ms", url = "http://localhost:9011") // Change to service name if using Eureka
public interface PaymentClient {

    @PostMapping("/payments")
    PaymentResponse createPayment(@RequestBody PaymentRequest paymentRequest);
}
