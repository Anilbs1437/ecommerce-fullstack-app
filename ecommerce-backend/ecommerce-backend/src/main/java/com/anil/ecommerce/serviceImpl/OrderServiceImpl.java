package com.anil.ecommerce.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anil.ecommerce.entity.Order;
import com.anil.ecommerce.repository.OrderRepository;
import com.anil.ecommerce.repository.CartRepository;
import com.anil.ecommerce.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

@Autowired
private OrderRepository orderRepository;

// ✅ Inject CartRepository
@Autowired
private CartRepository cartRepository;

@Override
public Order placeOrder(Order order){

    // ✅ Set order date
    order.setOrderDate(java.time.LocalDateTime.now());

    // ✅ Save order
    Order savedOrder = orderRepository.save(order);

    // ✅ Clear cart after order
    cartRepository.deleteByUserId(order.getUserId());

    return savedOrder;
}

@Override
public List<Order> getOrdersByUser(Long userId){
    return orderRepository.findByUserId(userId);
}

}