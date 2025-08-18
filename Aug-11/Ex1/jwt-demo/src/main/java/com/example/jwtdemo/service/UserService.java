package com.example.jwtdemo.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    public boolean validateUser(String username, String password) {
        return "Abdul".equals(username) && "Abdul123".equals(password);
    }
}

