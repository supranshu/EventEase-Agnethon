package com.eventease.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long stId;
	private String username;
	private String userId;
	private String stdept;
	private String phoneNumber;
	private String password;
	
	public long getStId() {
		return stId;
	}
	public void setStId(long stId) {
		this.stId = stId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getStdept() {
		return stdept;
	}
	public void setStdept(String stdept) {
		this.stdept = stdept;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Student(long stId, String username, String userId, String stdept, String phoneNumber, String password) {
		super();
		this.stId = stId;
		this.username = username;
		this.userId = userId;
		this.stdept = stdept;
		this.phoneNumber = phoneNumber;
		this.password = password;
	}
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	
	
	
	
	

	
}
