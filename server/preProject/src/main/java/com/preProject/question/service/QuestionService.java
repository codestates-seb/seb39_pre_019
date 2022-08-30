package com.preProject.question.service;

import com.preProject.exception.BusinessLogicException;
import com.preProject.exception.ExceptionCode;
import com.preProject.question.domain.Question;
import com.preProject.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    //질문 등록
    public Question createQuestion(Question question) {
        // 유저 정보 저장해야됨
        Question savedQuestion = questionRepository.save(question);
        return savedQuestion;
    }

    //질문 수정
    public Question updateQuestion(Question question) {
        Question findQuestion = questionRepository.findById(question.getId()).orElseThrow(() -> {
            return new IllegalArgumentException("Question does not exist");
        });
        Optional.ofNullable(question.getTitle()).ifPresent(findQuestion::setTitle);
        Optional.ofNullable(question.getBody()).ifPresent(findQuestion::setBody);
        //tag

        return findQuestion;
    }

    //질문 삭제
    public void deleteQuestion(Long id) {
        Question findQuestion = findVerifiedQuestion(id);
        questionRepository.delete(findQuestion);
    }

    //질문글 한 개 조회
    public Question findQuestion(long id)  {
        return findVerifiedQuestion(id);
    }

    //질문글 전체 조회
    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("id").descending()));
    }

    @Transactional
    public Question findVerifiedQuestion(long id) {
        Optional<Question> optionalQuestion = questionRepository.findById(id);
        Question findQuestion = optionalQuestion
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
