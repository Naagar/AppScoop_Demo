package com.brijesh.completeproject.ExceptionHandle;

import java.util.Date;

public class CustomErrorDetails {
private Date date;
private String exceptionType;
private String msg;
public CustomErrorDetails(Date date, String exceptionType, String msg) {
	super();
	this.date = date;
	this.exceptionType = exceptionType;
	this.msg = msg;
}
public Date getDate() {
	return date;
}
public void setDate(Date date) {
	this.date = date;
}
public String getExceptionType() {
	return exceptionType;
}
public void setExceptionType(String exceptionType) {
	this.exceptionType = exceptionType;
}
public String getMsg() {
	return msg;
}
public void setMsg(String msg) {
	this.msg = msg;
}

}
