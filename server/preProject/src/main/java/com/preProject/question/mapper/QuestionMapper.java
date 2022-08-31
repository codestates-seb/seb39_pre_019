package com.preProject.question.mapper;

import com.preProject.question.domain.Question;
import com.preProject.question.dto.QuestionPatchDto;
import com.preProject.question.dto.QuestionPostDto;
import com.preProject.question.dto.QuestionResponseDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostToQuestion(QuestionPostDto questionPostDto);

    Question questionPatchToQuestion(QuestionPatchDto questionPatchDto);

    QuestionResponseDto questionToQuestionResponse(Question question);

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);
}
