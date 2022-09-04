package com.preProject.answer.dto;

import com.preProject.question.domain.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AnswerPatchDto {
    private Long id;
    private String answer;
    private Long questionId;

    //소현님 코드
    public void setQuestionId(Question question){
        this.questionId = questionId;
    }
/**
 *  //밑에 questionId만 바꿔줬어요
    public void setQuestionId(Question question) {
        this.questionId = question.getId();
    }
 */

    public void setId(Long id) {
        this.id = id;
    }
}
