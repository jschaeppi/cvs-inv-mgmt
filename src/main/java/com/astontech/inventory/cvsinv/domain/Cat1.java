package com.astontech.inventory.cvsinv.domain;

//PROJECT CREATED BY: IntelliJ IDEA
//CREATED ON: 2/6/21
//BY: joe

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Cat1")
public class Cat1 {

    //region PROPERTIES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Version
    private Integer version;

    private String catName;

    @OneToMany(cascade = CascadeType.ALL)
    @Column(name = "cat1")
    private List<Cat2> cat1Id;
    //endregion

    //region Constructors

    public Cat1() {
    }

    public Cat1(String catName) {
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

    public void setCatName(String name) {
        this.catName = name;
    }

    public List<Cat2> getCat2List() {
        return cat1Id;
    }

    public void setCat2List(List<Cat2> cat2List) {
        this.cat1Id = cat2List;
    }

//endregion
}
