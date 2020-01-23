package com.expenses.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.expenses.api.model.ExpenseModel;

public interface ExpenseRepository extends CrudRepository<ExpenseModel, Long>{

}
