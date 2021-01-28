package com.brijesh.completeproject.ExceptionHandle;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.brijesh.completeproject.ExceptionClass.AppException;
import com.brijesh.completeproject.ExceptionClass.EntityNotPresentException;
import com.brijesh.completeproject.constant.AppConstants;
import com.brijesh.completeproject.response.ApiResponse;

@ControllerAdvice
public class UniversalExceptionHandler extends ResponseEntityExceptionHandler{

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(
			MethodArgumentNotValidException ex,
			HttpHeaders header,
			HttpStatus status,
			WebRequest req
			){
		
		CustomErrorDetails ced=new CustomErrorDetails(new Date(),"From handleMethodArgumentNotValid",ex.getMessage());
				return new ResponseEntity<>(ced,HttpStatus.BAD_REQUEST);
	}

    @ExceptionHandler(AppException.class)
    public ResponseEntity<ApiResponse> appException(
            AppException appException, HttpServletRequest request) {
        ApiResponse baseApiResponse = new ApiResponse();
        baseApiResponse.setResponseStatus(AppConstants.StatusCodes.FAILURE);
        baseApiResponse.setResponseData(appException);
        return new ResponseEntity<ApiResponse>(baseApiResponse, HttpStatus.OK);
    }

    @ExceptionHandler(EntityNotPresentException.class)
    public ResponseEntity<ApiResponse> entityNotPresentException(
            EntityNotPresentException exception, HttpServletRequest request) {
        ApiResponse baseApiResponse = new ApiResponse();
        baseApiResponse.setResponseStatus(AppConstants.StatusCodes.FAILURE);
        baseApiResponse.setResponseData(exception);
        return new ResponseEntity<ApiResponse>(baseApiResponse, HttpStatus.OK);
    }
}
