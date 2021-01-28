package com.brijesh.completeproject.AuthenticationResponse;

public class AuthenticationResponse {
   private final String jwttoken;

public String getJwttoken() {
	return jwttoken;
}

public AuthenticationResponse(String jwttoken) {
	this.jwttoken = jwttoken;
}
   
}
