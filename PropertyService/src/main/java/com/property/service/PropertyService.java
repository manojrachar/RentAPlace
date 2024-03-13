package com.property.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.dao.PropertyDAO;
import com.property.dao.ReservedPropertyDAO;
import com.property.entity.Property;
import com.property.entity.ReservedProperty;

@Service
public class PropertyService {

	@Autowired
	private PropertyDAO propertyDAO;
	
	@Autowired
	private ReservedPropertyDAO reservedDAO;

	
	public Property insertProp(Property prop) {
		if(propertyDAO.existsById(prop.getPropid())) {
			System.out.println("Peoperty Id already exists!!");
		}
		return this.propertyDAO.save(prop);
	}

	
	public boolean reserveProperty(ReservedProperty property) {
		if(this.reservedDAO.existsById(property.getReservedid())) {
			return false;
		}
		else {
			this.reservedDAO.save(property);
			return true;
		}
	}
	
	public List<ReservedProperty> propertiesReserved(int userid){
		return this.reservedDAO.reservedProperties(userid);
	}
	
	public List<Property> getAllPropertiesByOwnerId(int ownerid){
		List<Property> properties = new ArrayList<>();
		propertyDAO.findAllByOwner_ownerid(ownerid).forEach(prop->properties.add(prop));
		return properties;
	}

	public List<Property> getAllProperties(){
		List<Property> properties = new ArrayList<>();
		propertyDAO.findAll().forEach(prop->properties.add(prop));
		return properties;
	}

	public Property getProperty(int id) {
		
		return this.propertyDAO.findById(id).get();

	}
	
	public boolean deleteProperty(int id) {
		
		try {
			
			this.propertyDAO.deleteById(id);
			return true;

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}
	
	public boolean updateProperty(Property property) {
		if(this.propertyDAO.existsById(property.getPropid())) {
			Property update = this.propertyDAO.findById(property.getPropid()).get();
			update.setPropid(property.getPropid());
			this.propertyDAO.save(property);
			return true;
		}
		else {
			return false;
		}
	}

}
