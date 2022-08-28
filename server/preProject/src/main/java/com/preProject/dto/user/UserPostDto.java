package com.preProject.dto.user;

import com.preProject.audit.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserPostDto {

    //회원가입 시 입력 데이터
    private String displayName;
    private String email;
    private String password;
}
