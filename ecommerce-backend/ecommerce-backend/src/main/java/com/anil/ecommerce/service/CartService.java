package com.anil.ecommerce.service;

import java.util.List;
import com.anil.ecommerce.entity.Cart;

public interface CartService {

Cart addToCart(Cart cart);

List<Cart> getCartByUser(Long userId);

void removeFromCart(Long id);

}