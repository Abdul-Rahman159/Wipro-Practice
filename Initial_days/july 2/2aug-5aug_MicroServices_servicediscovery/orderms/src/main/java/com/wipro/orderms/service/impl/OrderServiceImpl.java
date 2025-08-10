package com.wipro.orderms.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.wipro.orderms.dto.Payment;
import com.wipro.orderms.entity.Order;
import com.wipro.orderms.repo.OrderRepo;
import com.wipro.orderms.service.OrderService;
import com.wipro.orderms.service.PaymentConnectService;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
	OrderRepo orderRepo;
	
	@Autowired
	RestTemplate restTemplate;
	
	@Autowired
	PaymentConnectService paymentConnectService;
	
	@Override
	@CircuitBreaker(name="order-cb" , fallbackMethod="handleFallBack")
	public void save(Order order) {
		order.setOrderStatus("I");
		orderRepo.save(order);
		String url="http://payment-ms/payment";
			Payment payment=new Payment();
		payment.setOrderId(order.getId());
		payment.setAmount(order.getOrderValue());
		payment.setPaymentStatus(true);
		
 
		
//		try {
			ResponseEntity<Payment>   response= paymentConnectService.savePaymentData(payment);
//			ResponseEntity<Payment>   response= restTemplate.postForEntity(url, payment, Payment.class);

		if(response.getStatusCode()==HttpStatusCode.valueOf(200))
		{
			order.setOrderStatus("P");
			
		}
//		 
//		}catch(Exception ex)
//		{
//			System.out.println(ex);
//			order.setOrderStatus("C");
//		}
		orderRepo.save(order);
    }
	
	@Override
	public List<Order> findAll() {
		 
		return orderRepo.findAll();
	}
	
	String handleFallBack(Throwable t)
	{
		
		System.out.println("--System is down--");
		return "System is down";
	}
}
