package com.preProject.mapper;

import com.preProject.domain.User;
import com.preProject.dto.user.UserLoginDto;
import com.preProject.dto.user.UserPatchDto;
import com.preProject.dto.user.UserPostDto;
import com.preProject.dto.user.UserResponseDto;
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
