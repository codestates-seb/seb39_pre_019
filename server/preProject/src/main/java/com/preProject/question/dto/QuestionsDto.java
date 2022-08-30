package com.preProject.question.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionsDto {
    // 현재 페이지
    private int page;

    // 페이지당 출력할 글 갯수
    private int recordSize;

    //화면 하단, 출력할 페이지 사이즈
    private int pageSize;
//    private String keyword;
//    private String searchType;

    public QuestionsDto() {
        this.page = 1;
        this.recordSize = 5;
        this.pageSize = 3;
    }

    // LIMIT 구문의 시작 부분에 사용되는 메서드
    public int getOffset() {
        return (page - 1) * recordSize;
    }
}
