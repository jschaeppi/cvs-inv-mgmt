package com.astontech.inventory.cvsinv.repositories;

import com.astontech.inventory.cvsinv.domain.Address;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;

public interface AddressRepository extends CrudRepository<Address, Integer> {

    @Transactional
    @Modifying
    @Query("UPDATE Address " +
            "SET disabled = true " +
            "WHERE id = :id")
    Integer disabledAddressById(@PathVariable Integer id);
}
