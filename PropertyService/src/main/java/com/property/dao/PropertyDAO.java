package com.property.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.property.entity.Property;

@Repository
public interface PropertyDAO extends JpaRepository<Property, Integer> {
	
	public List<Property> findAllByOwner_ownerid(int owner_ownerid);
}
