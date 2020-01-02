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

import com.cc.expense.travelwakaapi.model.Category;
import com.cc.expense.travelwakaapi.repo.CategoryRepo;


@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryRepo catRepo;


    @GetMapping
    public List<Category> listCategories() {
        return catRepo.findAll(Sort.by(Sort.Direction.ASC, "code"));
    }


    @GetMapping("{code}")
    public Category findCategoryByCode(@PathVariable String code) {
        return catRepo.findByCode(code);
    }


    @PostMapping
    public Category saveCategory(@RequestBody Category category) {
        return catRepo.save(category);
    }


    @DeleteMapping("{code}")
    public void deleteCategory(@PathVariable String code) {
        catRepo.deleteByCode(code);
    }
}
