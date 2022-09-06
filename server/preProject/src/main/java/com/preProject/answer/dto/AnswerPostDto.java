package com.preProject.answer.dto;

import com.preProject.question.domain.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Positive;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerPostDto {
    private Long id;
    private String answer;

    @Positive
    private Long question_id;

    public Question getQuestion() {
        Question question = new Question();
        question.setId(question_id);
        return question;
    }
//    @Positive
//    private long memberId;
//
//    public Member getMember() {
//        Member member = new Member();
//        member.setId(memberId);
//        return member;
//    }

//    public void setQuestion(Question question){ this.questionId = question.getId(); }
}
