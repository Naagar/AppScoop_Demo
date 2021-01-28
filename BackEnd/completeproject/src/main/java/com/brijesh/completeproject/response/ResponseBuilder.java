package com.brijesh.completeproject.response;

import com.brijesh.completeproject.constant.AppConstants;

public class ResponseBuilder {

	public static ApiResponse getSuccessResponse(Object data) throws RuntimeException{
		ApiResponse ar=new ApiResponse();
		ar.setResponseData(data);
		ar.setResponseStatus(AppConstants.StatusCodes.SUCCESS);
		return ar;
	}
	
	public static ApiResponse getSuccessResponse() throws RuntimeException{
		ApiResponse ar=new ApiResponse();
		ar.setResponseData(null);
		ar.setResponseStatus(AppConstants.StatusCodes.SUCCESS);
		return ar;
	}
}
