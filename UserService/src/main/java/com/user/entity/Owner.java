package com.user.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity //To create table in database
public class Owner {
	
	@Id //To make the field as primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY) //Auto Increment id in database
	private int ownerid;  //Database field entities
	private String ownerfname;
	private String ownerlname;
	private String ownerlocation;
	private String ownerphone;
	private String owneremail;
	private String password;
	
	public Owner() { //Default constructor
		
	}

	public Owner(int ownerid, String ownerfname, String ownerlname, String ownerlocation, String ownerphone,
			String owneremail, String password) {
		super();
		this.ownerid = ownerid;
		this.ownerfname = ownerfname;
		this.ownerlname = ownerlname;
		this.ownerlocation = ownerlocation;
		this.ownerphone = ownerphone;
		this.owneremail = owneremail;
		this.password = password;
	}
	
	public Owner(String ownerfname, String ownerlname, String ownerlocation, String ownerphone,
			String owneremail, String password) {
		super();
		this.ownerfname = ownerfname;
		this.ownerlname = ownerlname;
		this.ownerlocation = ownerlocation;
		this.ownerphone = ownerphone;
		this.owneremail = owneremail;
		this.password = password;
	}

	public int getOwnerid() {
		return ownerid;
	}

	public void setOwnerid(int ownerid) {
		this.ownerid = ownerid;
	}

	public String getOwnerfname() {
		return ownerfname;
	}

	public void setOwnerfname(String ownerfname) {
		this.ownerfname = ownerfname;
	}

	public String getOwnerlname() {
		return ownerlname;
	}

	public void setOwnerlname(String ownerlname) {
		this.ownerlname = ownerlname;
	}

	public String getOwnerlocation() {
		return ownerlocation;
	}

	public void setOwnerlocation(String ownerlocation) {
		this.ownerlocation = ownerlocation;
	}

	public String getOwnerphone() {
		return ownerphone;
	}

	public void setOwnerphone(String ownerphone) {
		this.ownerphone = ownerphone;
	}

	public String getOwneremail() {
		return owneremail;
	}

	public void setOwneremail(String owneremail) {
		this.owneremail = owneremail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

	@Override
	public String toString() {
		return "Owner [ownerid=" + ownerid + ", ownerfname=" + ownerfname + ", ownerlname=" + ownerlname
				+ ", ownerlocation=" + ownerlocation + ", ownerphone=" + ownerphone + ", owneremail=" + owneremail
				+ ", password=" + password + "]";
	}

}
