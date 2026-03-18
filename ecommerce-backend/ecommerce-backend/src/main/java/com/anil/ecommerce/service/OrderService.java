package com.anil.ecommerce.service;

import java.util.List;
import com.anil.ecommerce.entity.Order;

public interface OrderService {

Order placeOrder(Order order);

List<Order> getOrdersByUser(Long userId);

}