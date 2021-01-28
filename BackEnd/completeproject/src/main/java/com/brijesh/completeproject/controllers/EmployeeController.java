package com.brijesh.completeproject.controllers;

import java.io.IOException;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.brijesh.completeproject.constant.AppConstants;
import com.brijesh.completeproject.request.EmployeeRequest;
import com.brijesh.completeproject.response.ApiResponse;
import com.brijesh.completeproject.response.GetEmployeeListResponse;
import com.brijesh.completeproject.response.GetEmployeeResponse;
import com.brijesh.completeproject.response.ResponseBuilder;
import com.brijesh.completeproject.services.EmployeeService;
import org.springframework.web.multipart.MultipartFile;
@RestController
public class EmployeeController {

	@Autowired
	EmployeeService empservice;
	
	@PostMapping("/addEmployee")
	private ResponseEntity<ApiResponse> addCourse(@RequestBody EmployeeRequest emp,HttpServletRequest request) throws IOException {
		boolean res=empservice.save(emp);
		ApiResponse apiResponse=ResponseBuilder.getSuccessResponse(null);
		return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
		
	}
	
	@PostMapping("/uploadImage")
	private ResponseEntity<ApiResponse> uploadImage(@RequestParam("image") MultipartFile multipartFile,
			@RequestParam String email,
			HttpServletRequest request) throws IOException {
		
		empservice.saveImage(multipartFile,email);
		ApiResponse apiResponse=ResponseBuilder.getSuccessResponse(true);
		return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
		
	}
	
	@GetMapping("/getEmployeeList")
	private ResponseEntity<ApiResponse> getCourses( 
			@RequestParam(value = AppConstants.Common.PAGE_NUMBER, defaultValue = AppConstants.Common.PAGE_DEFAULT_VALUE) int page,
            @RequestParam(value = AppConstants.Common.PAGE_LIMIT, defaultValue = AppConstants.Common.PAGE_LIMIT_VALUE) int limit,
            HttpServletRequest request
){
		GetEmployeeResponse response=empservice.findAll(page,limit);
		ApiResponse apiResponse=ResponseBuilder.getSuccessResponse(response);
		return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
	}
	
	@GetMapping("/getEmployeeDetails/{id}")
	private ResponseEntity<ApiResponse> getCourseById(
			@PathVariable Long id,HttpServletRequest request) throws IOException {
     	   GetEmployeeListResponse crs=empservice.findbyId(id);
     	   ApiResponse apiResponse=ResponseBuilder.getSuccessResponse(crs);
		return ResponseEntity.status(HttpStatus.OK).body(apiResponse);
	}
	
}
