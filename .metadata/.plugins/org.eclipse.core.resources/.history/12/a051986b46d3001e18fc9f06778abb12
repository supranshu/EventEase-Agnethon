package com.eventease.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Committee {
 
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long comId;
	private String comName;
	private String dept;
	private String info;
	private String clgName;
	public long getComId() {
		return comId;
	}
	public void setComId(long comId) {
		this.comId = comId;
	}
	public String getComName() {
		return comName;
	}
	public void setComName(String comName) {
		this.comName = comName;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public String getClgName() {
		return clgName;
	}
	public void setClgName(String clgName) {
		this.clgName = clgName;
	}
	@Override
	public String toString() {
		return "Committee [comId=" + comId + ", comName=" + comName + ", dept=" + dept + ", info=" + info + ", clgName="
				+ clgName + "]";
	}
	public Committee(long comId, String comName, String dept, String info, String clgName) {
		super();
		this.comId = comId;
		this.comName = comName;
		this.dept = dept;
		this.info = info;
		this.clgName = clgName;
	}
	public Committee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
