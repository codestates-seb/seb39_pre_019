package com.preProject.question.dto;

import com.preProject.member.domain.Member;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionResponseDto {
    private Long id;
    private String title;
    private String body;

//    private List<String> tag;

    private Long memberId;
    private String displayName;

    public void setId(long id) {
        this.id = id;
    }
    public void setMember(Member member) {
        this.memberId = member.getId();
        this.displayName = member.getDisplayName();
    }

}
