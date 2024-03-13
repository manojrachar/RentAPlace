package com.property.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity  //To create table in database
@Table(name = "reservedproperty")
public class ReservedProperty {
	
	@Id //to make primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int reservedid; //Database table entities
	private String username;
	private String proplocation;
	private String checkin;
	private String checkout;
	private double price;
	@ManyToOne
	User user; //Foreign key
	@ManyToOne
	Property property; //Foreign key
	
	public ReservedProperty() { //Default constructor
		
	}

	public ReservedProperty(int reservedid, String username, String proplocation, String checkin, String checkout,
			double price, User user, Property property) {
		super();
		this.reservedid = reservedid;
		this.username = username;
		this.proplocation = proplocation;
		this.checkin = checkin;
		this.checkout = checkout;
		this.price = price;
		this.user = user;
		this.property = property;
	}
	
	public ReservedProperty(String username, String proplocation, String checkin, String checkout,
			double price, User user, Property property) {
		super();
		this.username = username;
		this.proplocation = proplocation;
		this.checkin = checkin;
		this.checkout = checkout;
		this.price = price;
		this.user = user;
		this.property = property;
	}

	public int getReservedid() {
		return reservedid;
	}

	public void setReservedid(int reservedid) {
		this.reservedid = reservedid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getProplocation() {
		return proplocation;
	}

	public void setProplocation(String proplocation) {
		this.proplocation = proplocation;
	}

	public String getCheckin() {
		return checkin;
	}

	public void setCheckin(String checkin) {
		this.checkin = checkin;
	}

	public String getCheckout() {
		return checkout;
	}

	public void setCheckout(String checkout) {
		this.checkout = checkout;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}

	@Override
	public String toString() {
		return "Reservedproperty [reservedid=" + reservedid + ", username=" + username + ", proplocation="
				+ proplocation + ", checkin=" + checkin + ", checkout=" + checkout + ", price=" + price + ", user="
				+ user + ", property=" + property + "]";
	}
	
}
