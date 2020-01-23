package com.expenses.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.expenses.api.model.UserModel;

public interface UserRepository extends CrudRepository<UserModel, Long> {

}
