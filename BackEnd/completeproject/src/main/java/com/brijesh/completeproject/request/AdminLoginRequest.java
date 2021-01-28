package com.brijesh.completeproject.request;


public class AdminLoginRequest {

//	@NotBlank(message = "Email should not be blank")
//	@Email(message = "Email is not valid")
	private String email;
//	@NotBlank(message = "Password should not be blank")
//	@NotNull(message = "Password should not be Null")
	//@Length(max = 15, min = 8, message = "Password should be minimum 8 characters long or maximum 15 characters long"  )
	private String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
