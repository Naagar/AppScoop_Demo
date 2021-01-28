package com.brijesh.completeproject.ExceptionClass;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = {"cause","stackTrace","suppressed","localizedMessage"})
public class AppException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private String errorType;
    private String errorCode;
    private String message;

    public AppException(String errorType, String errorCode, String message) {
        super(message);
        this.errorType = errorType;
        this.errorCode = errorCode;
        this.message = message;
    }

    public AppException(String message) {
        super(message);
        this.message = message;
    }

    public String getErrorType() {
        return errorType;
    }
    public void setErrorType(String errorType) {
        this.errorType = errorType;
    }
    public String getErrorCode() {
        return errorCode;
    }
    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "AppException [errorType=" + errorType + ", errorCode=" + errorCode + ", message=" + message + "]";
    }
}
