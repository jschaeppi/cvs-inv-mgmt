package com.astontech.inventory.cvsinv.services;

import com.astontech.inventory.cvsinv.domain.Cat2;

import java.util.List;

public interface Cat2Service {

    List<Cat2> listAllCat2();

    Cat2 findCat2(Integer id);

    Cat2 saveCat2(Cat2 cat2);

    List<Cat2> saveCat2(Iterable<Cat2> cat2Iterable);

    boolean deleteCat2(Integer id);
}
