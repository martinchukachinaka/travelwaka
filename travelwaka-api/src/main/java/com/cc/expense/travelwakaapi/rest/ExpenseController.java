package com.cc.expense.travelwakaapi.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cc.expense.travelwakaapi.model.Expense;
import com.cc.expense.travelwakaapi.repo.ExpenseRepo;


@RestController
@RequestMapping("/expense")
public class ExpenseController {

    @Autowired
    private ExpenseRepo expenseRepo;


    @GetMapping
    public List<Expense> getExpenses() {
        return expenseRepo.findAll(Sort.by(Sort.Direction.DESC, "creationDate"));
    }


    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseRepo.save(expense);
    }


    @GetMapping("{id}")
    public Expense findExpense(@PathVariable Long id) {
        return expenseRepo.findById(id).orElse(null);
    }


    @DeleteMapping("{id}")
    public void deleteExpense(@PathVariable Long id) {
        expenseRepo.deleteById(id);
    }
}
