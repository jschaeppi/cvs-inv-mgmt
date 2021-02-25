package com.astontech.inventory.cvsinv.services.Impl;

import com.astontech.inventory.cvsinv.domain.Cat1;
import com.astontech.inventory.cvsinv.repositories.Cat1Repository;
import com.astontech.inventory.cvsinv.services.Cat1Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Cat1ServiceImpl implements Cat1Service {

    Logger log = LoggerFactory.getLogger(Cat1ServiceImpl.class);

    private Cat1Repository cat1Repository;

    public Cat1ServiceImpl(Cat1Repository cat1Repository) {
        this.cat1Repository = cat1Repository;
    }

    //FIND ALL CATEGORY 1's
    @Override
    public List<Cat1> listCat1() {
        List<Cat1> Cat1sList = new ArrayList<>();
        cat1Repository.findAll().iterator().forEachRemaining(Cat1sList::add);
        return Cat1sList;
    }

    //FIND SINGLE CATEGORY 1
    @Override
    public Cat1 findCat1(Integer id) {
        return cat1Repository.findById(id).orElse(null);
    }

    //SAVE A CATEGORY 1
    @Override
    public Cat1 saveCat1(Cat1 Cat1) {
        return cat1Repository.save(Cat1);
    }

    //SAVE A LIST OF CATEGORY 1's
    @Override
    public List<Cat1> saveCat1(Iterable<Cat1> Cat1Iterable) {
        List<Cat1> Cat1List = new ArrayList<>();
        cat1Repository.saveAll(Cat1Iterable).iterator().forEachRemaining(Cat1List::add);
        return Cat1List;
    }

    //DELETE A CATEGORY 1
    @Override
    public boolean deleteCat1(Integer id) {
        try {
            cat1Repository.deleteById(id);
            return true;
        } catch(Exception ex) {
            log.warn("DELETION FAILED! " + ex);
            return false;
        }
    }
}
