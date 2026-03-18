package com.anil.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.anil.ecommerce.entity.User;
import com.anil.ecommerce.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

@Autowired
private UserService userService;

@PostMapping("/signup")
public User registerUser(@RequestBody User user){
    return userService.registerUser(user);
}

@PostMapping("/login")
public User loginUser(@RequestBody User user){

    return userService.loginUser(user.getEmail(), user.getPassword());

}

}