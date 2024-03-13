package com.user.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.user.entity.User;

@Repository
public interface UserDAO extends CrudRepository<User, Integer>{
	
	public User findByUseremail(String useremail);
	
	public Integer deleteByUseremail(String useremail);

}
