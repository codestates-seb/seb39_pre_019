package com.preProject.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class QuestionPatchDto {

    private long id;
    private String title;
    private String body;

    @Builder
    public QuestionPatchDto(String title, String body) {
        this.title = title;
        this.body = body;
    }

    public void setId(long id) {
        this.id = id;
    }
}
