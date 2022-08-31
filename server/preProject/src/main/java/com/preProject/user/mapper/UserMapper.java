package com.preProject.user.mapper;

import com.preProject.user.domain.User;
import com.preProject.user.dto.UserLoginDto;
import com.preProject.user.dto.UserPatchDto;
import com.preProject.user.dto.UserPostDto;
import com.preProject.user.dto.UserResponseDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostToUser(UserPostDto requestBody);

    User userPatchToUser(UserPatchDto requestBody);

    User userLoginToUser(UserLoginDto requestBody);

    UserResponseDto userToUserResponse(User user);

    List<UserResponseDto> usersToUserResponses(List<User> users);
}
