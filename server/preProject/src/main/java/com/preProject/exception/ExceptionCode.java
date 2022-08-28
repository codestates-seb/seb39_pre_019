package com.preProject.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "User exists"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    AUTHOR_NOT_EXISTS(409, "Author not Exists"),
    CANNOT_CHANGE_QUESTION(403, "Question can not change"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_USER_STATUS(400, "Invalid user status");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
