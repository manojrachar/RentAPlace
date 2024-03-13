package com.property.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity  //To create table in database
public class User {
	@Id  //To make primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userid;  //Database entities
	private String userfname;
	private String userlname;
	private String userphone;
	private String useremail;
	private String password;
	
	public User() { //Default constructor
		
	}

	public User(int userid, String userfname, String userlname, String userphone, String useremail, String password) {
		super();
		this.userid = userid;
		this.userfname = userfname;
		this.userlname = userlname;
		this.userphone = userphone;
		this.useremail = useremail;
		this.password = password;
	}
	
	public User(String userfname, String userlname, String userphone, String useremail, String password) {
		super();
		this.userfname = userfname;
		this.userlname = userlname;
		this.userphone = userphone;
		this.useremail = useremail;
		this.password = password;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUserfname() {
		return userfname;
	}

	public void setUserfname(String userfname) {
		this.userfname = userfname;
	}

	public String getUserlname() {
		return userlname;
	}

	public void setUserlname(String userlname) {
		this.userlname = userlname;
	}

	public String getUserphone() {
		return userphone;
	}

	public void setUserphone(String userphone) {
		this.userphone = userphone;
	}

	public String getUseremail() {
		return useremail;
	}

	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [userid=" + userid + ", userfname=" + userfname + ", userlname=" + userlname + ", userphone="
				+ userphone + ", useremail=" + useremail + ", password=" + password + "]";
	}

}
