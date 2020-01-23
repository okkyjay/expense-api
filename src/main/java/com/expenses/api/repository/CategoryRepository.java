package com.expenses.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.expenses.api.model.CategoryModel;

public interface CategoryRepository extends CrudRepository<CategoryModel, Long> {

}
