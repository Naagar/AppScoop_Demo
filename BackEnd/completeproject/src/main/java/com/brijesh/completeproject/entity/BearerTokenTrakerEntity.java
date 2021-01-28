package com.brijesh.completeproject.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "bearer_token_traker")
@Setter
@Getter
public class BearerTokenTrakerEntity{

	@Column(name = "id", nullable = false, updatable = false,insertable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	
	@Column(name="bearer_token",nullable = true,updatable = true,columnDefinition = "Text")
	private String bearerToken;
	
	@Column(name = "email", nullable = false,unique = true)
	private String email;
	
		
}
