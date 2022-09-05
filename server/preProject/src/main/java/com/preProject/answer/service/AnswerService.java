package com.preProject.answer.service;

import com.preProject.answer.domain.Answer;
import com.preProject.answer.repository.AnswerRepository;
import com.preProject.exception.BusinessLogicException;
import com.preProject.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.transaction.TransactionScoped;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    //답변 등록
    public Answer createAnswer(Answer answer) {
        Answer savedAnswer = answerRepository.save(answer);
        return savedAnswer;
    }


    //답변 수정
    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = answerRepository.findById(answer.getId()).orElseThrow(
                () -> {return new IllegalArgumentException("Answer does not exit");} );
        Optional.ofNullable(answer.getAnswer()).ifPresent(findAnswer::setAnswer);

        return findAnswer;
    }


    //답변 삭제
    public void deleteAnswer(long id) {
        Answer findAnswer = findVerifiedAnswer(id);
        answerRepository.delete(findAnswer);
    }


    //답변 전체 조회
    public List<Answer> findAnswers() {
        return answerRepository.findAll();
    }


    //답변 하나 조회
    public Answer findAnswer(long id) {
        return findVerifiedAnswer(id);
    }

    @TransactionScoped
    public Answer findVerifiedAnswer(long id) {
        Optional<Answer> optionalAnswer = answerRepository.findById(id);
        Answer findAnswer = optionalAnswer.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
