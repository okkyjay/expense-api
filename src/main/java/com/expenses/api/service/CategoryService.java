package com.expenses.api.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expenses.api.model.CategoryModel;
import com.expenses.api.model.UserModel;
import com.expenses.api.repository.CategoryRepository;
import com.expenses.api.repository.UserRepository;


@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	public List<CategoryModel> getAllCategories(){
		 List<CategoryModel> categories = new ArrayList<>();
	        categoryRepository.findAll().forEach(categories::add);
	        return categories;
	}
}
