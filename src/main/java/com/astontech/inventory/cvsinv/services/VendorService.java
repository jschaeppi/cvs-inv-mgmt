package com.astontech.inventory.cvsinv.services;

import com.astontech.inventory.cvsinv.domain.Address;
import com.astontech.inventory.cvsinv.domain.Vendor;

import java.util.List;

public interface VendorService {

    List<Vendor> listAllVendors();

    List<Vendor> getItemCountByVendor();
    Vendor findVendor(Integer id);

    Vendor saveVendor(Vendor vendor);

    List<Vendor> saveVendors(Iterable<Vendor> vendorIterable);

    int deleteVendor(Integer id);
}
