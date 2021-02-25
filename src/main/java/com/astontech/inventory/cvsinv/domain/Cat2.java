package com.astontech.inventory.cvsinv.domain;

//PROJECT CREATED BY: IntelliJ IDEA
//CREATED ON: 2/6/21
//BY: joe

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Cat2")
public class Cat2 {

    //region PROPERTIES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cat2_id")
    private Integer id;

    @Version
    private Integer version;

    private String catName;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Cat3> cat2Id;

    @ManyToOne()
    private Cat1 cat1;
    //endregion

    //region Constructors

    public Cat2() {
    }

    public Cat2(String catName) {
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

    public List<Cat3> getCat3List() {
        return cat2Id;
    }

    public void setCat3List(List<Cat3> cat3List) {
        this.cat2Id = cat3List;
    }

    public Cat1 getCat1() {
        return cat1;
    }

    public void setCat1(Cat1 cat1) {
        this.cat1 = cat1;
    }

//endregion
}
