package com.property.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.dao.OwnerDAO;
import com.property.entity.Login;
import com.property.entity.Owner;

@Service
public class OwnerService {
	
	@Autowired
	private OwnerDAO ownerDAO;
	
	public boolean validate(Login user) {
		Owner owner = this.ownerDAO.findByOwneremail(user.getEmail());
		if(owner.getPassword().equals(user.getPassword())) {
			return true;
		}
		else {
			return false;
		}
	}
	
	public boolean addOwner(Owner owner) {
		if(this.ownerDAO.existsById(owner.getOwnerid())) {
			return false;
		}
		else {
			this.ownerDAO.save(owner);
			return true;
		}
	}
	
	public List<Owner> getAllOwners(){
		List<Owner> owners = new ArrayList<>();
		this.ownerDAO.findAll().forEach(owner->owners.add(owner));
		return owners;
	}
	
	public Owner getOwnerDetails(String email) {
		return this.ownerDAO.findByOwneremail(email);
	}

	public boolean updateOwner(Owner owner) {
		if(this.ownerDAO.existsById(owner.getOwnerid())) {
			this.ownerDAO.save(owner);
			return true;
		}
		else {
			return false;
		}
	}

	
	

}
