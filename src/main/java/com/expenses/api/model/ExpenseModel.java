package com.expenses.api.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="expense")
public class ExpenseModel {
	@Id
	@GeneratedValue
	private Long id;
	private String title;
	private String description;
	private String location;
	private Instant date;
	
	@ManyToOne
	private CategoryModel category;
	
	@JsonIgnore
	@ManyToOne
	private UserModel user;
}
