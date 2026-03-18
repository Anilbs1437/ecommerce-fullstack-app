package com.anil.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.anil.ecommerce.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long>{

List<Cart> findByUserId(Long userId);

// ✅ IMPORTANT FIX
@Transactional
void deleteByUserId(Long userId);

}