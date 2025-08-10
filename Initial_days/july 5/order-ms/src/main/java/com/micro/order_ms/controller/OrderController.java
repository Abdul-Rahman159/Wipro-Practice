package com.micro.order_ms.controller;

import com.micro.order_ms.DTO.OrderRequest;
import com.micro.order_ms.DTO.OrderResponse;
import com.micro.order_ms.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public OrderResponse placeOrder(@RequestBody OrderRequest request) {
        return orderService.placeOrder(request);
    }
}
