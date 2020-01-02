package com.cc.expense.travelwakaapi.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PreUpdate;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@MappedSuperclass
public class BaseModel implements Serializable {

    private static final long serialVersionUID = -9202153422858711383L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @NotNull(message = "Code is required")
    private String code;

    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate = new Date();

    @Temporal(TemporalType.TIMESTAMP)
    private Date lastModified = new Date();

    @Size(max = 255)
    private String description;


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getCode() {
        return code;
    }


    public void setCode(String code) {
        this.code = code;
    }


    public Date getCreationDate() {
        return creationDate;
    }


    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }


    public Date getLastModified() {
        return lastModified;
    }


    public void setLastModified(Date lastModified) {
        this.lastModified = lastModified;
    }


    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }


    @PreUpdate
    public void doPreUpdateActions() {
        setLastModified(new Date());
    }
}
