package com.anil.ecommerce.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anil.ecommerce.entity.User;
import com.anil.ecommerce.repository.UserRepository;
import com.anil.ecommerce.service.UserService;

@Service
public class UserServiceImpl implements UserService {

@Autowired
private UserRepository userRepository;

@Override
public User registerUser(User user) {
    return userRepository.save(user);
}

@Override
public User loginUser(String email, String password) {

    User user = userRepository.findByEmail(email);

    if(user != null && user.getPassword().equals(password)){
        return user;
    }

    return null;
}

}