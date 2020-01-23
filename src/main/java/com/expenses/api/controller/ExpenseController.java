package com.expenses.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expenses.api.model.ExpenseModel;
import com.expenses.api.service.ExpenseService;

@RestController
@RequestMapping("/api")
public class ExpenseController {
	
	
	@Autowired
	private ExpenseService expenseService;
	
	@GetMapping("/expenses")
	public List<ExpenseModel> getAllExpenses(){
		return expenseService.getAllExpenses();
	}
	

	@GetMapping("/expenses/{id}")
	public ExpenseModel getExpense(@PathVariable long id){
		return expenseService.getExpense(id);
	}
	
	@PostMapping("/expenses")
	public ExpenseModel addExpense(@RequestBody ExpenseModel expense) {
		return expenseService.addExpense(expense);
	}
	@PutMapping("/expenses/{id}")
	public ExpenseModel editExpense(@RequestBody ExpenseModel expense, @PathVariable long id) {
		return expenseService.saveExpense(expense, id);
	}
	
	@DeleteMapping("expenses/{id}")
	public void deleteExpenses(@PathVariable long id) {
		expenseService.deleteExpenses(id);
	}
}
