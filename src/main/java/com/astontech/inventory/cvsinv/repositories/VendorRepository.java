package com.astontech.inventory.cvsinv.repositories;

import com.astontech.inventory.cvsinv.domain.Vendor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VendorRepository extends CrudRepository<Vendor, Integer> {

    List<Vendor> findVendorsByDisabledFalse();
}
