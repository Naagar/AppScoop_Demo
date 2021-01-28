package com.brijesh.completeproject.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brijesh.completeproject.MyUserDetailsService;
import com.brijesh.completeproject.AuthenticationRequest.AuthenticationRequest;
import com.brijesh.completeproject.AuthenticationResponse.AuthenticationResponse;
import com.brijesh.completeproject.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class FirstController {
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired(required=true)
	private JwtUtil jwtTokenUtil;
	
	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
	
	authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
	
	final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
	final String token = jwtTokenUtil.generateToken(userDetails);
	return ResponseEntity.ok(new AuthenticationResponse(token));
	}
	
	private void authenticate(String username, String password) throws Exception {
	try {
	authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
	} catch (DisabledException e) {
	throw new Exception("USER_DISABLED", e);
	} catch (BadCredentialsException e) {
	throw new Exception("INVALID_CREDENTIALS", e);
	}
	}
}
