package com.preProject.question.mapper;

import com.preProject.question.domain.Question;
import com.preProject.question.dto.QuestionPatchDto;
import com.preProject.question.dto.QuestionPostDto;
import com.preProject.question.dto.QuestionResponseDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-29T14:22:35+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setUser( questionPostDto.getUser() );
        question.setId( questionPostDto.getId() );
        question.setTitle( questionPostDto.getTitle() );
        question.setBody( questionPostDto.getBody() );

        return question;
    }

    @Override
    public Question questionPatchToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setId( questionPatchDto.getId() );
        question.setTitle( questionPatchDto.getTitle() );
        question.setBody( questionPatchDto.getBody() );

        return question;
    }

    @Override
    public QuestionResponseDto questionToQuestionResponse(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setUser( question.getUser() );
        questionResponseDto.setId( question.getId() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setBody( question.getBody() );

        return questionResponseDto;
    }

    @Override
    public List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponse( question ) );
        }

        return list;
    }
}
