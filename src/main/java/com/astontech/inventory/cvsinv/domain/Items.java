package com.astontech.inventory.cvsinv.domain;

//PROJECT CREATED BY: IntelliJ IDEA
//CREATED ON: 2/6/21
//BY: joe

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "Items")
public class Items {

    //region PROPERTIES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "items_id")
    private Integer id;

    @Version
    private Integer version;

    private String name;

    //@Column(name = "Item Description")
    @Size(min = 1, max = 800)
    @Lob
    private String description;

    private String sku;
    private double price;

    @ManyToOne()
    private Cat3 cat3;

    @ManyToOne()
    private Vendor vendor;
    //endregion

    @ManyToMany(mappedBy = "itemsList")
    private List<Location> locationList;
    //region Constructors

    public Items() {
    }

    public Items(String name, String description, String sku, double price) {
        this.name = name;
        this.description = description;
        this.sku = sku;
        this.price = price;
    }

    public Items(String name, String sku, double price) {
        this.name = name;
        this.sku = sku;
        this.price = price;
    }

    public Items(String name, String sku, double price, Cat3 cat3) {
        this.name = name;
        this.sku = sku;
        this.cat3 = cat3;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Cat3 getCat3() {
        return cat3;
    }

    public void setCat3(Cat3 cat3) {
        this.cat3 = cat3;
    }

    public Vendor getVendor() {
        return vendor;
    }

    public void setVendor(Vendor vendor) {
        this.vendor = vendor;
    }

    public List<Location> getLocationList() {
        return locationList;
    }

    public void setLocationList(List<Location> locationList) {
        this.locationList = locationList;
    }

    //endregion
}
