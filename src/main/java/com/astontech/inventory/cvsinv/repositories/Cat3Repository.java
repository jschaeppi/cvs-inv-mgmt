package com.astontech.inventory.cvsinv.repositories;

import com.astontech.inventory.cvsinv.domain.Cat3;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface Cat3Repository extends CrudRepository<Cat3, Integer> {

    Cat3 findCat3ByCatName(String name);

    @Query("SELECT c3, c1 " +
            "FROM Cat1 c1 " +
            "JOIN FETCH Cat2 c2 on c1.id = c2.cat1.id " +
            "JOIN FETCH Cat3 c3 on c3.cat2.id = c2.id " +
            "WHERE c1.catName = :catName")
    List<Cat3> findNavLinkCats(@PathVariable String catName);
}
