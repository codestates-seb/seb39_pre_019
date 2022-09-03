package com.preProject.answer.controller;

import com.preProject.answer.domain.Answer;
import com.preProject.answer.dto.AnswerListResponseDto;
import com.preProject.answer.dto.AnswerPatchDto;
import com.preProject.answer.dto.AnswerPostDto;
import com.preProject.answer.dto.AnswerResponseDto;
import com.preProject.answer.mapper.AnswerMapper;
import com.preProject.answer.service.AnswerService;
import com.preProject.commonDto.SingleResponseDto;
import lombok.extern.slf4j.Slf4j;
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
@RequestMapping("/answers")
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }


    //답변 등록
    @PostMapping("/ask")
//    @PostMapping("/{questionId}")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = mapper.answerPostToAnswer(answerPostDto);
        Answer createdAnswer = answerService.createAnswer(answer);
        AnswerResponseDto response = mapper.answerToAnswerResponse(createdAnswer);

        return new ResponseEntity<>( new SingleResponseDto<>(response), HttpStatus.CREATED);
    }


    //답변 수정
    @PatchMapping("/edit/{id}")
    public ResponseEntity patchAnswer(@PathVariable("id") @Positive long id,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setId(id);
        Answer answer = answerService.updateAnswer(mapper.answerPatchToAnswer(answerPatchDto));
        AnswerResponseDto response = mapper.answerToAnswerResponse(answer);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }


    //답변 삭제
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteAnswer(@PathVariable("id") @Positive long id) {
        answerService.deleteAnswer(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



    //답변 하나 조회
    @GetMapping("/{id}")
    public ResponseEntity getAnswer(@PathVariable("id") @Positive long id){
        Answer answer = answerService.findAnswer(id);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(answer)), HttpStatus.OK);
    }


    //답변 전체 조회
    @GetMapping
    public ResponseEntity getAnswers2() {
        List<Answer> answers = answerService.findAnswers();
        return new ResponseEntity<>(
                new AnswerListResponseDto<>(mapper.answerToAnswersListResponse(answers)), HttpStatus.OK);
    }
}
