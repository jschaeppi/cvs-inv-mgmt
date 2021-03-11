package com.astontech.inventory.cvsinv.domain;

//PROJECT CREATED BY: IntelliJ IDEA
//CREATED ON: 2/6/21
//BY: joe

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Phone {

    //region PROPERTIES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Version
    private Integer version;

    private int area_code;
    private int number;

    private boolean disabled;

    @OneToOne(mappedBy = "phone")
    @JsonIgnore
    private Vendor vendor;

    @OneToOne(mappedBy = "phone")
    @JoinColumn(name = "location_id")
    @JsonIgnore
    private Location location;
    //endregion

    //region Constructors

    public Phone() {
    }

    public Phone(int area_code, int number) {
        this.area_code = area_code;
        this.number = number;
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

    public int getArea_code() {
        return area_code;
    }

    public void setArea_code(int area_code) {
        this.area_code = area_code;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Vendor getVendor() {
        return vendor;
    }

    public void setVendor(Vendor vendor) {
        this.vendor = vendor;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
    }

    //endregion

}
