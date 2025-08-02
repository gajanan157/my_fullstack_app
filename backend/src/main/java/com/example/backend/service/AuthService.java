package com.example.backend.service;
import com.example.backend.dto.LoginRequest;

public interface AuthService {
    boolean login(LoginRequest request);
}

