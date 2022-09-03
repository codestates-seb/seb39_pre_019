package com.preProject.answer.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class AnswerListResponseDto<T> {
    private List<T> answers;

    public AnswerListResponseDto(List<T> answers) { this.answers = answers; }
}
