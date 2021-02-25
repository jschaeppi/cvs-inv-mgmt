package com.astontech.inventory.cvsinv.services;

import com.astontech.inventory.cvsinv.domain.Address;
import com.astontech.inventory.cvsinv.domain.Shipping;

import java.util.List;

public interface ShippingService {

    List<Shipping> listAllShippers();

    Shipping findShipper(Integer id);

    Shipping saveShipper(Shipping shipping);

    List<Shipping> saveShippers(Iterable<Shipping> shippingIterableh);

    boolean deleteShipper(Integer id);
}
