package com.brijesh.completeproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.brijesh.completeproject.repository.UserRepository;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses=UserRepository.class)
public class CompleteprojectApplication {
	public static void main(String[] args) {
		SpringApplication.run(CompleteprojectApplication.class, args);
	}

}
