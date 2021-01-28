package com.brijesh.completeproject.repository;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.brijesh.completeproject.entity.EmployeeEntity;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
	
	@Modifying
	@Transactional
	@Query(value = "update employee_details set photo_path =:path where email =:email ", nativeQuery = true)
	public void saveImagePath(@Param("path")String path, @Param("email")String email);
}
