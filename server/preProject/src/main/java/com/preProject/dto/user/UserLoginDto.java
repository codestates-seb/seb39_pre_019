package com.preProject.dto.user;

import com.preProject.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginDto {

        //로그인 시 입력 데이터
        private String email;
        private String password;

}
