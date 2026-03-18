package com.anil.ecommerce.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anil.ecommerce.entity.Cart;
import com.anil.ecommerce.repository.CartRepository;
import com.anil.ecommerce.service.CartService;

@Service
public class CartServiceImpl implements CartService {

@Autowired
private CartRepository cartRepository;

@Override
public Cart addToCart(Cart cart){
    return cartRepository.save(cart);
}

@Override
public List<Cart> getCartByUser(Long userId){
    return cartRepository.findByUserId(userId);
}

@Override
public void removeFromCart(Long id){
    cartRepository.deleteById(id);
}

// ✅ This is needed to clear cart
public void clearCart(Long userId){
    cartRepository.deleteByUserId(userId);
}

}