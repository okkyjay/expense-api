package com.expenses.api.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expenses.api.model.UserModel;
import com.expenses.api.repository.UserRepository;


@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<UserModel> getAllUsers(){
		 List<UserModel> users = new ArrayList<>();
	        userRepository.findAll().forEach(users::add);
	        return users;
	}
}
