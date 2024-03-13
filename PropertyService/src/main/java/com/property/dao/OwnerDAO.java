package com.property.dao;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.property.entity.Owner;

@Repository
public interface OwnerDAO extends CrudRepository<Owner, Integer> {

	public Owner findByOwneremail(String owner_email);

	
}
