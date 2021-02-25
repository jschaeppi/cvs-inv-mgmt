package com.astontech.inventory.cvsinv.repositories;

import com.astontech.inventory.cvsinv.domain.Cat1;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface Cat1Repository extends CrudRepository<Cat1, Integer> {

}
