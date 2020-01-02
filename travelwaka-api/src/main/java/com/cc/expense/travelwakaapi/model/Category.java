package com.cc.expense.travelwakaapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;


@Entity
public class Category extends BaseModel {

    private static final long serialVersionUID = 4691501381680415678L;

    @Column(unique = true)
    private String name;

    private String icon;


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getIcon() {
        return icon;
    }


    public void setIcon(String icon) {
        this.icon = icon;
    }
}
