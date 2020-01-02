package com.cc.expense.travelwakaapi.repo;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cc.expense.travelwakaapi.model.Budget;


@Repository
public interface BudgetRepo extends JpaRepository<Budget, Long> {

    Budget findByCode(String code);


    @Transactional
    void deleteByCode(String code);
}
