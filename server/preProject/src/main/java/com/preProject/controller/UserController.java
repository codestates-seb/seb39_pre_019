package com.preProject.controller;

import com.preProject.commonDto.SingleResponseDto;
import com.preProject.domain.User;
import com.preProject.dto.user.UserPatchDto;
import com.preProject.dto.user.UserPostDto;
import com.preProject.dto.user.UserResponseDto;
import com.preProject.mapper.UserMapper;
import com.preProject.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/users")
@Validated
@Slf4j
public class UserController {

    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.mapper = userMapper;
    }

    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto requestBody) {
        User user = mapper.userPostToUser(requestBody);

        User createdUser = userService.createUser(user);
        UserResponseDto response = mapper.userToUserResponse(createdUser);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }

    @PatchMapping("/edit/{id}")
    public ResponseEntity updateUser(@PathVariable("id") @Positive long id,
                                     @Valid @RequestBody UserPatchDto requestBody) {
        requestBody.setId(id);
        User user =
                userService.updateUser(mapper.userPatchToUser(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponse(user)),
                HttpStatus.OK);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
