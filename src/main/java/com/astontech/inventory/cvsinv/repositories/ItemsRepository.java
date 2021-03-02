package com.astontech.inventory.cvsinv.repositories;

import com.astontech.inventory.cvsinv.domain.Cat1;
import com.astontech.inventory.cvsinv.domain.Items;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface ItemsRepository extends CrudRepository<Items, Integer> {

    @Query("SELECT i, c1.id, c1.version, c1.catName, c2, c3 " +
            "FROM Items i " +
            "JOIN FETCH Cat3 c3 on i.cat3.id = c3.id " +
            "JOIN FETCH Cat2 c2 on c3.cat2.id = c2.id " +
            "JOIN FETCH Cat1 c1 on c2.cat1.id = c1.id")
    List<Items> listItems();

    @Query("SELECT i, c1, c2, c3 " +
            "FROM Items i " +
            "JOIN FETCH Cat3 c3 on i.cat3.id = c3.id " +
            "JOIN FETCH Cat2 c2 on c3.cat2.id = c2.id " +
            "JOIN FETCH Cat1 c1 on c2.cat1.id = c1.id " +
            "WHERE c3.catName = :name")
    List<Items> listItemsByCat3Name(@PathVariable String name);

/*    @Query("SELECT c1, c2, c3, i " +
            "FROM Items i " +
            "JOIN FETCH Cat3 c3 on i.cat3.id = c3.id " +
            "JOIN FETCH Cat2 c2 on c3.cat2.id = c2.id " +
            "JOIN FETCH Cat1 c1 on c2.cat1.id = c1.id " +
            "WHERE c1.name = :cat")
    List<Items> findItemsByCat(@PathVariable String cat);*/
}
