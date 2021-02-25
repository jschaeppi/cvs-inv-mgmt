package com.astontech.inventory.cvsinv.domain;

//PROJECT CREATED BY: IntelliJ IDEA
//CREATED ON: 2/6/21
//BY: joe

import javax.persistence.*;
import java.util.Date;

@Entity
public class Shipping {

    //region PROPERTIES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Version
    private Integer version;

    private Date shipping_date;
    //endregion

    //region Constructors


    //endregion
    //region GETTERS AND SETTERS


    //endregion
}
