package com.astontech.inventory.cvsinv.repositories;

import com.astontech.inventory.cvsinv.domain.Location;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;
import java.util.List;

public interface LocationRepository extends CrudRepository<Location, Integer> {

    List<Location> findLocationsByDisabledFalse();

    @Transactional
    @Modifying
    @Query("UPDATE Location " +
            "SET disabled = '1' " +
            "WHERE id = :id")
    Integer disableLocationById(@PathVariable int id);
}
