package com.astontech.inventory.cvsinv.domain;

//PROJECT CREATED BY: IntelliJ IDEA
//CREATED ON: 2/6/21
//BY: joe

import javax.persistence.*;
import java.util.List;

@Entity
public class Vendor {

    //region PROPERTIES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Version
    private Integer version;

    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "vendor")
    private List<Items> itemsList;

    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    private Phone phone;
    //endregion

    //region Constructors

    public Vendor() {
    }

    public Vendor(String name) {
        this.name = name;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Items> getItemsList() {
        return itemsList;
    }

    public void setItemsList(List<Items> itemsList) {
        this.itemsList = itemsList;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Phone getPhone() {
        return phone;
    }

    public void setPhone(Phone phone) {
        this.phone = phone;
    }

    //endregion
}
