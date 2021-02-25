package com.astontech.inventory.cvsinv.services.Impl;

import com.astontech.inventory.cvsinv.domain.Cat2;
import com.astontech.inventory.cvsinv.repositories.Cat2Repository;
import com.astontech.inventory.cvsinv.services.Cat2Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Cat2ServiceImpl implements Cat2Service {

    Logger log = LoggerFactory.getLogger(Cat2ServiceImpl.class);

    private Cat2Repository cat2Repository;

    public Cat2ServiceImpl(Cat2Repository cat2Repository) {
        this.cat2Repository = cat2Repository;
    }

    //FIND ALL CATEGORY 2's
    @Override
    public List<Cat2> listAllCat2() {
        List<Cat2> Cat2List = new ArrayList<>();
        cat2Repository.findAll().iterator().forEachRemaining(Cat2List::add);
        return Cat2List;
    }
    //FIND A CATEGORY 2
    @Override
    public Cat2 findCat2(Integer id) {
        return cat2Repository.findById(id).orElse(null);
    }

    //SAVE A CATEGORY 2
    @Override
    public Cat2 saveCat2(Cat2 cat2) {
        return cat2Repository.save(cat2);
    }

    //SAVE A LIST CATEGORY 2
    @Override
    public List<Cat2> saveCat2(Iterable<Cat2> cat2Iterable) {
        List<Cat2> cat2List = new ArrayList<>();
        cat2Repository.saveAll(cat2Iterable).iterator().forEachRemaining(cat2List::add);
        return cat2List;
    }
    //DELETE A CATEGORY 2
    @Override
    public boolean deleteCat2(Integer id) {
        try {
            cat2Repository.deleteById(id);
            return true;
        } catch (Exception ex) {
            log.warn("DELTETION FAILED " + ex);
            return false;
        }
    }
}
