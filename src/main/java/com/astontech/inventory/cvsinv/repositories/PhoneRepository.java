package com.astontech.inventory.cvsinv.repositories;

import com.astontech.inventory.cvsinv.domain.Phone;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;

public interface PhoneRepository extends CrudRepository<Phone, Integer> {

    @Transactional
    @Modifying
    @Query("UPDATE Phone " +
            "SET disabled = true " +
            "WHERE id = :id")
    Integer disablePhone(@PathVariable Integer id);
}
