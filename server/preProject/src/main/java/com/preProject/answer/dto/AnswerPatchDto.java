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

    public void setQuestionId(Question question){ this.questionId = questionId; }

    public AnswerPatchDto(String answer, Long questionId) {
        this.answer = answer;
        this.questionId = questionId;
    }

    public void setId(long id) {
        this.id = id;
    }

}
