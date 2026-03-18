package com.anil.ecommerce.service;

import java.util.List;
import com.anil.ecommerce.entity.Product;

public interface ProductService {

Product addProduct(Product product);

List<Product> getAllProducts();

Product getProductById(Long id);

void deleteProduct(Long id);

}