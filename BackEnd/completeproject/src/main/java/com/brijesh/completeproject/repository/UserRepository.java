package com.brijesh.completeproject.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brijesh.completeproject.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {
      Optional<User>findByUserName(String userName);
}
