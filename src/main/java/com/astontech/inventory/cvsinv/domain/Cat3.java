package com.astontech.inventory.cvsinv.domain;

//PROJECT CREATED BY: IntelliJ IDEA
//CREATED ON: 2/7/21
//BY: joe

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Cat3")
public class Cat3 {

    //region PROPERTIES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Version
    private Integer version;

    private boolean disabled;
    private String catName;

    @ManyToOne()
    private Cat2 cat2;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL)
    @Column(name = "cat3Id")
    private List<Items> cat3Id;
    //endregion

    //region Constructors

    public Cat3() {
    }

    public Cat3(String catName) {
        this.catName = catName;
    }

    //endregion
    //region GETTERS AND SETTERS

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public String getCatName() {
        return catName;
    }

    public void setCatName(String catName) {
        this.catName = catName;
    }

    public Cat2 getCat2() {
        return cat2;
    }

    public void setCat2(Cat2 cat2) {
        this.cat2 = cat2;
    }

    public List<Items> getItemsList() {
        return cat3Id;
    }

    public void setItemsList(List<Items> itemsList) {
        this.cat3Id = itemsList;
    }

    public boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
    }

    //endregion
}
