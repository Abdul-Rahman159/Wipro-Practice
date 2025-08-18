package com.micro.order_ms.service;

import com.micro.order_ms.DTO.OrderRequest;
import com.micro.order_ms.DTO.OrderResponse;
import com.micro.order_ms.DTO.PaymentRequest;
import com.micro.order_ms.DTO.PaymentResponse;
import com.micro.order_ms.feign.PaymentClient;
import com.micro.order_ms.model.Order;
import com.micro.order_ms.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class OrderService {

    @Autowired
    private PaymentClient paymentClient;

    @Autowired
    private OrderRepository orderRepository;

    public OrderResponse placeOrder(OrderRequest orderRequest) {
        // Save Order
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString()); // auto-generate
        order.setOrderValue(orderRequest.getAmount());
        order.setOrderStatus("PENDING"); // initial status
        order = orderRepository.save(order);

        // Call Payment MS via Feign
        PaymentRequest paymentRequest = new PaymentRequest();
        paymentRequest.setOrderId((long) order.getId());
        paymentRequest.setAmount(order.getOrderValue());

        PaymentResponse paymentResponse = paymentClient.createPayment(paymentRequest);

        // Update order status based on payment response
        order.setOrderStatus(paymentResponse.getPaymentStatus());
        orderRepository.save(order);

        // Build response
        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setOrderId(order.getId());
        orderResponse.setPaymentStatus(paymentResponse.getPaymentStatus());
        orderResponse.setMessage("Order placed successfully with payment status: " + paymentResponse.getPaymentStatus());

        return orderResponse;
    }
}
