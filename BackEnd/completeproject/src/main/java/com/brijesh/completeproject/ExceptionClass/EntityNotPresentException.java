package com.brijesh.completeproject.ExceptionClass;

public class EntityNotPresentException extends AppException {

	private static final long serialVersionUID = 1L;

	public EntityNotPresentException(String errorType, String errorCode, String message) {
		super(errorType, errorCode, message);
	}

	@Override
	public String toString() {
		return "EntityNotPresentException [getErrorType()=" + getErrorType() + ", getErrorCode()=" + getErrorCode()
				+ ", getMessage()=" + getMessage() + "]";
	}
	
}
