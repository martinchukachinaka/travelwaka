package com.cc.expense.travelwakaapi.repo;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cc.expense.travelwakaapi.model.Category;


@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {

    Category findByCode(String code);


    @Transactional
    void deleteByCode(String code);
}
