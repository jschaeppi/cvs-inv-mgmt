package com.astontech.inventory.cvsinv.services;

import com.astontech.inventory.cvsinv.domain.Cat1;
import com.astontech.inventory.cvsinv.domain.Cat3;

import java.util.List;

public interface Cat1Service {

    List<Cat1> listCat1();

    Cat1 findCat1(Integer id);

    Cat1 saveCat1(Cat1 cat1);

    List<Cat1> saveCat1(Iterable<Cat1> cat1Iterable);

    boolean deleteCat1(Integer id);
}
