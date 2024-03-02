package com.eventease.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class College {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long clgId;
	private String city;
	private String state;
	private String country;
	public long getClgId() {
		return clgId;
	}
	public void setClgId(long clgId) {
		this.clgId = clgId;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	public String toString() {
		return "College [clgId=" + clgId + ", city=" + city + ", state=" + state + ", country=" + country + "]";
	}
	public College(long clgId, String city, String state, String country) {
		super();
		this.clgId = clgId;
		this.city = city;
		this.state = state;
		this.country = country;
	}
	public College() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
