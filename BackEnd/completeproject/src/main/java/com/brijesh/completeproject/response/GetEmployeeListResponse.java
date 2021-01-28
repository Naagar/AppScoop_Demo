package com.brijesh.completeproject.response;

public class GetEmployeeListResponse {
	private long id;
	 private String name;
		private String email;
		private String phone;
		private String address;
		private String dob;
		private String salary;
		private String photo_path;
		private byte[] image;
		public byte[] getImage() {
			return image;
		}
		public void setImage(byte[] image) {
			this.image = image;
		}
		public String getName() {
			return name;
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public String getDob() {
			return dob;
		}
		public void setDob(String dob) {
			this.dob = dob;
		}
		public String getSalary() {
			return salary;
		}
		public void setSalary(String salary) {
			this.salary = salary;
		}
		public String getPhoto_path() {
			return photo_path;
		}
		public void setPhoto_path(String photo_path) {
			this.photo_path = photo_path;
		}
		}
