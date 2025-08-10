package com.wipro.orderms.service;


import java.util.List;

import com.wipro.orderms.entity.Order;

public interface OrderService {
	void save(Order order);
	List<Order> findAll();
}
