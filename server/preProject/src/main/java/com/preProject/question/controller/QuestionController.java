package com.preProject.question.controller;

import com.preProject.commonDto.MultipleResponseDto;
import com.preProject.commonDto.SingleResponseDto;
import com.preProject.question.domain.Question;
import com.preProject.question.dto.QuestionPatchDto;
import com.preProject.question.dto.QuestionPostDto;
import com.preProject.question.dto.QuestionResponseDto;
import com.preProject.question.dto.QuestionsAllResponseDto;
import com.preProject.question.mapper.QuestionMapper;
import com.preProject.question.service.QuestionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Slf4j
@Validated
@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService,
                              QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

//    private final AnswerService answerService;
//    private final AnswerMapper answerMapper;
//    public QuestionController(QuestionService questionService, QuestionMapper mapper,
//                              AnswerService answerService, AnswerMapper answerMapper) {
//        this.questionService = questionService;
//        this.mapper = mapper;
//        this.answerService = answerService;
//        this.answerMapper = answerMapper;
//    }
//
//    //질문 창에서 답변 등록 기능
//    @PostMapping("/{id}")
//    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto requestBody) {
//        Answer answer = answerMapper.answerPostToAnswer(requestBody);
//        Answer createdAnswer = answerService.createAnswer(answer);
//        AnswerResponseDto response = answerMapper.answerToAnswerResponse(createdAnswer);
//
//        return new ResponseEntity<>( new SingleResponseDto<>(response), HttpStatus.CREATED);
//    }


    //질문 등록
    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = mapper.questionPostToQuestion(questionPostDto);
        Question createdQuestion = questionService.createQuestion(question);
        QuestionResponseDto response = mapper.questionToQuestionResponse(createdQuestion);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    //질문 수정
    @PatchMapping("/edit/{id}")
    public ResponseEntity updateQuestion(@PathVariable("id") @Positive long id,
                                         @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setId(id);
        Question question = questionService.updateQuestion(mapper.questionPatchToQuestion(questionPatchDto));
        QuestionResponseDto response = mapper.questionToQuestionResponse(question);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //질문 삭제
    @DeleteMapping("delete/{id}")
    public ResponseEntity deleteQuestion(@PathVariable @Positive long id) {
        questionService.deleteQuestion(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //질문글 하나 조회
    @GetMapping("/{id}")
    public ResponseEntity getQuestion(@PathVariable("id") @Positive long id) {
        Question question = questionService.findQuestion(id);

        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        mapper.questionToQuestionResponse(question)), HttpStatus.OK);
    }

    //질문글 전체 조회
    @GetMapping("/all")
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultipleResponseDto<>(
                        mapper.questionsToQuestionResponseDtos(questions), pageQuestions), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAllQuestions() {

        List<Question> questions = questionService.findAllQuestions();

        return new ResponseEntity<>(
                new QuestionsAllResponseDto<>(mapper.questionsToQuestionResponseDtos(questions)), HttpStatus.OK);
//                new MultipleNoPageResponseDto<>(mapper.questionsToQuestionResponseDtos(questions)), HttpStatus.OK);
        //     public MultipleResponseDto(List<T> questions, Page page) {
        //        this.questions = questions;
        //    }
    }
}
