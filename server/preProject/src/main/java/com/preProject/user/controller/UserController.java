package com.preProject.user.controller;

import com.preProject.commonDto.MultipleResponseDto;
import com.preProject.commonDto.SingleResponseDto;
import com.preProject.user.domain.User;
import com.preProject.user.dto.UserPatchDto;
import com.preProject.user.dto.UserPostDto;
import com.preProject.user.dto.UserResponseDto;
import com.preProject.user.mapper.UserMapper;
import com.preProject.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

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

    //회원가입
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto requestBody) {
        User user = mapper.userPostToUser(requestBody);

        User createdUser = userService.createUser(user);
        UserResponseDto response = mapper.userToUserResponse(createdUser);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }

    //회원정보 수정
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

    //회원 목록 정렬
    @GetMapping("/all")
    public ResponseEntity getUsers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<User> pagedUsers = userService.findUserList(page - 1, size);
//        Page<User> pagedUsers = userService.findUserList(PageRequest.of(page -1, size, Sort.by("id").descending()));
        List<User> users = pagedUsers.getContent();
        return new ResponseEntity<>(
                new MultipleResponseDto<>(mapper.usersToUserResponses(users), pagedUsers), HttpStatus.OK);
    }

    //특정 회원 정보 조회
    @GetMapping("/{id}")
    public ResponseEntity getUser(@PathVariable long id) {
        User user = userService.findUserById(id);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponse(user)), HttpStatus.OK);
    }

    //회원탈퇴
    @DeleteMapping("delete/{id}")
    public ResponseEntity deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
