package com.cc.expense.travelwakaapi.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cc.expense.travelwakaapi.model.Expense;

public interface ExpenseRepo extends JpaRepository<Expense, Long> {
}
