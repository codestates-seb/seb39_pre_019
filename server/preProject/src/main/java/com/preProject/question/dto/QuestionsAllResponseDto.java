package com.preProject.question.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class QuestionsAllResponseDto<T> {
    private List<T> questions;

    public QuestionsAllResponseDto(List<T> questions) {
        this.questions = questions;
    }
}
