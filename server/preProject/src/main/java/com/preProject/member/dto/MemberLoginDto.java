package com.preProject.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberLoginDto {

        //로그인 시 입력 데이터
        private String email;
        private String password;

}
