package com.expenses.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expenses.api.model.CategoryModel;
import com.expenses.api.model.UserModel;
import com.expenses.api.service.CategoryService;
import com.expenses.api.service.UserService;

@RestController
@RequestMapping("/api")
public class CategoryController {
	
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/categories")
	public List<CategoryModel> getAllCategories(){
		
		return categoryService.getAllCategories();
	}
	
}
