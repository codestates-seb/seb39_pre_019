package com.preProject.answer.mapper;

import com.preProject.answer.domain.Answer;
import com.preProject.answer.dto.AnswerPatchDto;
import com.preProject.answer.dto.AnswerPostDto;
import com.preProject.answer.dto.AnswerResponseDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostToAnswer(AnswerPostDto answerPostDto);

    Answer answerPatchToAnswer(AnswerPatchDto answerPatchDto);

    AnswerResponseDto answerToAnswerResponse(Answer answer);

    List<AnswerResponseDto> answerToAnswersListResponse (List<Answer> answers);
}
