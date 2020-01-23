package com.expenses.api.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expenses.api.model.ExpenseModel;
import com.expenses.api.repository.ExpenseRepository;

@Service
public class ExpenseService {
	
	@Autowired
	private ExpenseRepository expenseRepository;
	
	public List<ExpenseModel> getAllExpenses(){
		List<ExpenseModel> expenses = new ArrayList<>();
		expenseRepository.findAll().forEach(expenses::add);
		return expenses;
	}

	public ExpenseModel  getExpense(long id) {
		return expenseRepository.findById(id).get();
	}
	
	public ExpenseModel  addExpense(ExpenseModel expense) {
		expenseRepository.save(expense);
		return expense;
	}
	public void deleteExpenses(long id) {
		expenseRepository.deleteById(id);
	}
	
	public ExpenseModel saveExpense(ExpenseModel expense, long id) {
		expenseRepository.save(expense);
		return expense;
	}
}
