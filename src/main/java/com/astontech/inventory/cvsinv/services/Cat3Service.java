package com.astontech.inventory.cvsinv.services;

import com.astontech.inventory.cvsinv.domain.Cat2;
import com.astontech.inventory.cvsinv.domain.Cat3;

import java.util.List;

public interface Cat3Service {

    List<Cat3> listAllCat3();

    Cat3 findCat3(Integer id);

    Cat3 findCat3ByName(String name);

    List<Cat3> getNavLinks(String name);

    Cat3 saveCat3(Cat3 cat3);

    List<Cat3> saveCat3(Iterable<Cat3> cat3Iterable);

    boolean deleteCat3(Integer id);
}
