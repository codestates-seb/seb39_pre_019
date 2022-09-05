package com.preProject.answer.dto;

import com.preProject.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AnswerResponseDto {
    private Long id;
    private String answer;
   /* private Long questionId;
    private String displayName;

    public void setMember(Member member) {
        this.displayName = member.getDisplayName();
    }*/
}
