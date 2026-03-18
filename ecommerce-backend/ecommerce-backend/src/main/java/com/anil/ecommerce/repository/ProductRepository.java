package com.anil.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.anil.ecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}