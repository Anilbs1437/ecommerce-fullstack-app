package com.anil.ecommerce.service;

import com.anil.ecommerce.entity.User;

public interface UserService {

    User registerUser(User user);

    User loginUser(String email, String password);

}