package com.astontech.inventory.cvsinv.repositories;

import com.astontech.inventory.cvsinv.domain.Vendor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;
import java.util.List;

public interface VendorRepository extends CrudRepository<Vendor, Integer> {

    List<Vendor> findVendorsByDisabledFalse();

    @Transactional
    @Modifying
    @Query("UPDATE Vendor " +
            "SET disabled=true " +
            "WHERE id=:id")
    int disableVendorById(@PathVariable int id);

    @Query("SELECT new Vendor(v.name, COUNT(i.id))" +
            "FROM Vendor v " +
            "JOIN Items i ON i.vendor.id = v.id " +
            "GROUP BY v.name")
    List<Vendor> itemCountsByVendor();
}
