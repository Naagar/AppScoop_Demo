package com.brijesh.completeproject.services.imp;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.brijesh.completeproject.entity.EmployeeEntity;
import com.brijesh.completeproject.repository.EmployeeRepository;
import com.brijesh.completeproject.request.EmployeeRequest;
import com.brijesh.completeproject.response.CommonPaginationResponse;
import com.brijesh.completeproject.response.GetEmployeeListResponse;
import com.brijesh.completeproject.response.GetEmployeeResponse;
import com.brijesh.completeproject.services.EmployeeService;

import java.io.ByteArrayOutputStream;
@Service
public class EmployeeServiceImp implements EmployeeService{
	@Autowired
	EmployeeRepository empRepo;
	
	@Override
	public boolean save(EmployeeRequest emp) {
		EmployeeEntity empent=new EmployeeEntity();
		empent.setName(emp.getName());
		empent.setEmail(emp.getEmail());
		empent.setPhone(emp.getPhone());
		empent.setAddress(emp.getAddress());
		empent.setDob(emp.getDob());
		empent.setSalary(emp.getSalary());
		
//		try {
//			saveImage(emp.getFile());
//		} catch (FileNotFoundException e1) {
//			e1.printStackTrace();
//		} catch (IOException e1) {
//			e1.printStackTrace();
//		}
		
		try {
			empRepo.save(empent);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return true;
	}

	@Override
	public GetEmployeeResponse findAll(int page, int limit) {
		if (page > 0)
			page = page - 1;
		Pageable pageable = PageRequest.of(page, limit);
		List<EmployeeEntity> list=empRepo.findAll(pageable).getContent();
		CommonPaginationResponse totalpage=new CommonPaginationResponse();
		long totaldata=empRepo.count();
		int x=(int)(totaldata/limit);
		int remender=(int) (totaldata%limit);
		if(remender>0)x=x+1;
		totalpage.setTotalNumberOfPagesAsPerGivenPageLimit(x);
		
		List<GetEmployeeListResponse> listResp=new ArrayList<>();
		for(EmployeeEntity ent:list) {
			GetEmployeeListResponse resObject=new GetEmployeeListResponse();
			resObject.setId(ent.getId());
			resObject.setName(ent.getName());
			resObject.setEmail(ent.getEmail());
			resObject.setAddress(ent.getAddress());
			resObject.setDob(ent.getDob());
			resObject.setSalary(ent.getSalary());
			resObject.setPhone(ent.getPhone());
			resObject.setPhoto_path(ent.getPhoto_path());
			listResp.add(resObject);
		}
		GetEmployeeResponse res=new GetEmployeeResponse();
		res.setEmployeelist(listResp);
		res.setTotalpage(totalpage);
		return res;
	}

	@Override
	public GetEmployeeListResponse findbyId(Long id) {
		EmployeeEntity ent=empRepo.findById(id).orElse(null);
		GetEmployeeListResponse resObject=new GetEmployeeListResponse();
		if(ent!=null) {
			resObject.setId(ent.getId());
			resObject.setName(ent.getName());
			resObject.setEmail(ent.getEmail());
			resObject.setAddress(ent.getAddress());
			resObject.setDob(ent.getDob());
			resObject.setSalary(ent.getSalary());
			resObject.setPhone(ent.getPhone());
			resObject.setPhoto_path(ent.getPhoto_path());
			byte[] by=getOutputImage(ent.getPhoto_path());
			resObject.setImage(by);
		
		}
		return resObject;
	}

	public byte[] getOutputImage(String path) {
		FileInputStream fis;
		try {
			fis = new FileInputStream(path);
			int size=fis.available();
		    byte[] b=new byte[size];
		    fis.read(b);
		    return b;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@Override
	public void saveImage(MultipartFile multipartFile,String email)throws FileNotFoundException,IOException {
		
		 String name = multipartFile.getOriginalFilename();
		 FileInputStream fis = null;
		 String path="G:\\Tasks\\Java_Works\\Images\\"+email+name;
	        try{
	             fis = new FileInputStream(convert(multipartFile));
	        	 int size=fis.available();
	             byte[] b=new byte[size];
	             fis.read(b);
	             FileOutputStream fos=new FileOutputStream(path);
	             empRepo.saveImagePath(path,email);
	             fos.write(b);
	             fis.close();
	             fos.close();
	        	
			} catch (Exception e) {
			e.printStackTrace();
			}
	        
	}
	
	public  File convert(MultipartFile file) throws IOException {
		/**Method for converting MultiPart file into file*/
		File convFile = new File(file.getOriginalFilename());
	    convFile.createNewFile();
	    FileOutputStream fos = new FileOutputStream(convFile);
	    fos.write(file.getBytes());
	    fos.close();
	    return convFile;
	}
}
