package com.preProject.question.dto;


import com.preProject.member.domain.Member;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class QuestionPostDto {

    private Long id;
    private String title;
    private String body;

//    public List<String> tag;

    @Positive
    private long userid;
    // 유저정보 매핑 안해둬서 오류 - 게시글 작성할 때 유저 정보 받을지 더 알아보기
    // -> 값이 사용돼야함!

    public Member getUser() {
        Member member = new Member();
        member.setId(userid);
        return member;
    }
}
