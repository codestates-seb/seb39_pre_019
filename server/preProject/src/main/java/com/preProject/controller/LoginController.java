package com.preProject.controller;

import com.preProject.commonDto.SingleResponseDto;
import com.preProject.domain.User;
import com.preProject.dto.user.UserPostDto;
import com.preProject.dto.user.UserResponseDto;
import com.preProject.mapper.UserMapper;
import com.preProject.repository.UserRepository;
import com.preProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;


public class LoginController {


}
