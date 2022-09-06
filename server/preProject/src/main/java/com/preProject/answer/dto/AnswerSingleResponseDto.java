package com.preProject.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class AnswerSingleResponseDto<T> {

    private T answer;
}
