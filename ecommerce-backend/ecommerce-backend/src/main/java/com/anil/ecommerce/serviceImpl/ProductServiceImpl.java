package com.anil.ecommerce.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anil.ecommerce.entity.Product;
import com.anil.ecommerce.repository.ProductRepository;
import com.anil.ecommerce.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

@Autowired
private ProductRepository productRepository;

@Override
public Product addProduct(Product product){
    return productRepository.save(product);
}

@Override
public List<Product> getAllProducts(){
    return productRepository.findAll();
}

@Override
public Product getProductById(Long id){
    return productRepository.findById(id).orElse(null);
}

@Override
public void deleteProduct(Long id){
    productRepository.deleteById(id);
}

}