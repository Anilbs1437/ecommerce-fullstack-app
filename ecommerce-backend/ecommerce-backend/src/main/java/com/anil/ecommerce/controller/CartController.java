package com.anil.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.anil.ecommerce.entity.Cart;
import com.anil.ecommerce.service.CartService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {

@Autowired
private CartService cartService;

@PostMapping
public Cart addToCart(@RequestBody Cart cart){
return cartService.addToCart(cart);
}

@GetMapping("/{userId}")
public List<Cart> getCart(@PathVariable Long userId){
return cartService.getCartByUser(userId);
}

@DeleteMapping("/{id}")
public void removeFromCart(@PathVariable Long id){
cartService.removeFromCart(id);
}

}