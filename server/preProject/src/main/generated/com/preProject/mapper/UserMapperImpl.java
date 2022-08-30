package com.preProject.mapper;

import com.preProject.domain.User;
import com.preProject.dto.user.UserLoginDto;
import com.preProject.dto.user.UserPatchDto;
import com.preProject.dto.user.UserPostDto;
import com.preProject.dto.user.UserResponseDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-28T16:47:44+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostToUser(UserPostDto requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setDisplayName( requestBody.getDisplayName() );
        user.setEmail( requestBody.getEmail() );
        user.setPassword( requestBody.getPassword() );

        return user;
    }

    @Override
    public User userPatchToUser(UserPatchDto requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setId( requestBody.getId() );
        user.setDisplayName( requestBody.getDisplayName() );
        user.setAboutMe( requestBody.getAboutMe() );
        user.setLocation( requestBody.getLocation() );
        user.setTitle( requestBody.getTitle() );
        user.setWebLink( requestBody.getWebLink() );
        user.setTwitLink( requestBody.getTwitLink() );
        user.setGitLink( requestBody.getGitLink() );

        return user;
    }

    @Override
    public User userLoginToUser(UserLoginDto requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setEmail( requestBody.getEmail() );
        user.setPassword( requestBody.getPassword() );

        return user;
    }

    @Override
    public UserResponseDto userToUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        if ( user.getId() != null ) {
            userResponseDto.setId( user.getId() );
        }
        userResponseDto.setDisplayName( user.getDisplayName() );
        userResponseDto.setEmail( user.getEmail() );
        userResponseDto.setAboutMe( user.getAboutMe() );
        userResponseDto.setLocation( user.getLocation() );
        userResponseDto.setTitle( user.getTitle() );
        userResponseDto.setWebLink( user.getWebLink() );
        userResponseDto.setTwitLink( user.getTwitLink() );
        userResponseDto.setGitLink( user.getGitLink() );
        userResponseDto.setUserStatus( user.getUserStatus() );

        return userResponseDto;
    }

    @Override
    public List<UserResponseDto> usersToUserResponses(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserResponseDto> list = new ArrayList<UserResponseDto>( users.size() );
        for ( User user : users ) {
            list.add( userToUserResponse( user ) );
        }

        return list;
    }
}
