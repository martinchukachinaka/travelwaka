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

import com.cc.expense.travelwakaapi.model.Budget;
import com.cc.expense.travelwakaapi.repo.BudgetRepo;


@RestController
@RequestMapping("/budget")
public class BudgetController extends BaseController {

    @Autowired
    private BudgetRepo budgetRepo;


    @GetMapping
    public List<Budget> listCategories() {
        return budgetRepo.findAll(Sort.by(Sort.Direction.ASC, "code"));
    }


    @GetMapping("{code}")
    public Budget findBudgetByCode(@PathVariable String code) {
        return budgetRepo.findByCode(code);
    }


    @PostMapping
    public Budget saveBudget(@RequestBody Budget Budget) {
        return budgetRepo.save(Budget);
    }


    @DeleteMapping("{code}")
    public void deleteBudget(@PathVariable String code) {
        budgetRepo.deleteByCode(code);
    }
}
