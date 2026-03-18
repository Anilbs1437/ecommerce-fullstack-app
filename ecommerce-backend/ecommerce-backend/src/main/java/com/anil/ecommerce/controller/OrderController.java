package com.anil.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.anil.ecommerce.entity.Order;
import com.anil.ecommerce.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {

@Autowired
private OrderService orderService;

@PostMapping
public Order placeOrder(@RequestBody Order order){
return orderService.placeOrder(order);

}

@GetMapping("/{userId}")
public List<Order> getOrders(@PathVariable Long userId){

return orderService.getOrdersByUser(userId);

}

}