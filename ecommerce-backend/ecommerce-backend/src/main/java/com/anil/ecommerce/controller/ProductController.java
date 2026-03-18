package com.anil.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.anil.ecommerce.entity.Product;
import com.anil.ecommerce.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

@Autowired
private ProductService productService;

@PostMapping
public Product addProduct(@RequestBody Product product){
    return productService.addProduct(product);
}

@GetMapping
public List<Product> getAllProducts(){
    return productService.getAllProducts();
}

@GetMapping("/{id}")
public Product getProductById(@PathVariable Long id){
    return productService.getProductById(id);
}

@DeleteMapping("/{id}")
public void deleteProduct(@PathVariable Long id){
    productService.deleteProduct(id);
}

}