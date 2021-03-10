package com.astontech.inventory.cvsinv.domain;

//PROJECT CREATED BY: IntelliJ IDEA
//CREATED ON: 2/6/21
//BY: joe

import javax.persistence.*;
import java.util.List;

@Entity
public class Location {

    //region PROPERTIES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private Integer id;

    @Version
    private Integer version;

    private Integer count;

    private String store_code;
    private String name;
    private boolean disabled;


    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    private Phone phone;
    //endregion

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
       name = "location_items",
       joinColumns = @JoinColumn(name = "location_id"),
       inverseJoinColumns = @JoinColumn(name = "items_id")
    )
    private List<Items> itemsList;
    //region Constructors

    public Location() {
    }

    public Location(String store_code) {
        this.store_code = store_code;
    }

    public Location(String name, String store_code, Integer count) {
        this.count = count;
        this.store_code = store_code;
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

    public String getStore_code() {
        return store_code;
    }

    public void setStore_code(String store_code) {
        this.store_code = store_code;
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

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
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

    public void setItemList(List<Items> itemsList) {
        this.itemsList = itemsList;
    }

    public boolean getDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
    }

    public void setItemsList(List<Items> itemsList) {
        this.itemsList = itemsList;
    }

    //endregion
}
