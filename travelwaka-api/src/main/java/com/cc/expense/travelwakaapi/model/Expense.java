package com.cc.expense.travelwakaapi.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
public class Expense extends BaseModel {

    private static final long serialVersionUID = 354589146812365171L;

    @NotNull(message = "budget is required")
    @ManyToOne
    private Budget budget;

    @NotNull(message = "Amount is required")
    private Double amount;

    @NotNull(message = "How the fuck did this happen?")
    @Size(max = 255)
    private String gist;

    private String blame;


    public Double getAmount() {
        return amount;
    }


    public void setAmount(Double amount) {
        this.amount = amount;
    }


    public String getGist() {
        return gist;
    }


    public void setGist(String gist) {
        this.gist = gist;
    }


    public String getBlame() {
        return blame;
    }


    public void setBlame(String blame) {
        this.blame = blame;
    }


    public Budget getBudget() {
        return budget;
    }


    public void setBudget(Budget budget) {
        this.budget = budget;
    }
}
