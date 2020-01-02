package com.cc.expense.travelwakaapi.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;


@Entity
public class Budget extends BaseModel {

    private static final long serialVersionUID = -602496902012002638L;

    @NotNull(message = "Category is required")
    @ManyToOne
    private Category category;

    @NotNull(message = "Amount is required")
    private Double amount;

    private Double spent;

    private Integer period;


    public Category getCategory() {
        return category;
    }


    public void setCategory(Category category) {
        this.category = category;
    }


    public Double getAmount() {
        return amount;
    }


    public void setAmount(Double amount) {
        this.amount = amount;
    }


    public Double getSpent() {
        return spent;
    }


    public void setSpent(Double spent) {
        this.spent = spent;
    }


    public Integer getPeriod() {
        return period;
    }


    public void setPeriod(Integer period) {
        this.period = period;
    }
}
