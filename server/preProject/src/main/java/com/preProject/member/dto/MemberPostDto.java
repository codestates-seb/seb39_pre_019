package com.preProject.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberPostDto {

    //회원가입 시 입력 데이터
    private String displayName;
    private String email;
    private String password;
}
