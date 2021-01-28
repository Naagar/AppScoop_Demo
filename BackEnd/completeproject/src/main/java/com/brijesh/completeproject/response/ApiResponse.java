package com.brijesh.completeproject.response;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse {

	private int responseStatus;
	private Object responseData;
	private String responseMsg;
	public ApiResponse(int responseStatus, Object responseData, String responseMsg) {
		super();
		this.responseStatus = responseStatus;
		this.responseData = responseData;
		this.responseMsg = responseMsg;
	}
	public ApiResponse() {
		
	   this.responseData = null;
		
	}
	public ApiResponse(Object data) {
		
		   this.responseData = data;
			
		}
	public int getResponseStatus() {
		return responseStatus;
	}
	public void setResponseStatus(int responseStatus) {
		this.responseStatus = responseStatus;
	}
	public Object getResponseData() {
		return responseData;
	}
	public void setResponseData(Object responseData) {
		this.responseData = responseData;
	}
	public String getResponseMsg() {
		return responseMsg;
	}
	public void setResponseMsg(String responseMsg) {
		this.responseMsg = responseMsg;
	}
	
	
}
