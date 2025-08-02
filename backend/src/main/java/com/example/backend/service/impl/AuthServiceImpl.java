package com.example.backend.service.impl;

import com.example.backend.dto.LoginRequest;
import com.example.backend.service.AuthService;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Override
    public boolean login(LoginRequest request) {
        // Replace this with database validation logic later
        return "admin@example.com".equals(request.getUsername()) &&
               "password123".equals(request.getPassword());
    }
}