package com.brijesh.completeproject.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.brijesh.completeproject.entity.EmployeeEntity;
import com.brijesh.completeproject.request.EmployeeRequest;
import com.brijesh.completeproject.response.GetEmployeeListResponse;
import com.brijesh.completeproject.response.GetEmployeeResponse;

@Service
public interface EmployeeService {

	boolean save(EmployeeRequest emp);

	GetEmployeeResponse findAll(int page, int limit);

	GetEmployeeListResponse findbyId(Long id);

	void saveImage(MultipartFile multipartFile,String email) throws IOException;
     
	
}
