package com.property.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.property.entity.ReservedProperty;

public interface ReservedPropertyDAO extends JpaRepository<ReservedProperty, Integer>{

	@Query("from ReservedProperty where user.userid =:userid")
	public List<ReservedProperty> reservedProperties(int userid);
}
