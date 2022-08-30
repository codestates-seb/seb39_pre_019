package com.preProject.question.dto;

import com.preProject.domain.User;
import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class QuestionPostDto {
    public Long id;
    public String title;
    public String body;
//    public List<String> tag;

    @Positive
    private long userid;
    // 유저정보 매핑 안해둬서 오류 - 게시글 작성할 때 유저 정보 받을지 더 알아보기
    // -> 값이 사용돼야함!

    public User getUser() {
        User user = new User();
        user.setId(userid);
        return user;
    }

}
