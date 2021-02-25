package com.astontech.inventory.cvsinv.services.Impl;

import com.astontech.inventory.cvsinv.domain.Cat2;
import com.astontech.inventory.cvsinv.domain.Cat3;
import com.astontech.inventory.cvsinv.repositories.Cat2Repository;
import com.astontech.inventory.cvsinv.repositories.Cat3Repository;
import com.astontech.inventory.cvsinv.services.Cat3Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Cat3ServiceImpl implements Cat3Service {

    Logger log = LoggerFactory.getLogger(Cat3ServiceImpl.class);

    private Cat3Repository cat3Repository;

    public Cat3ServiceImpl(Cat3Repository cat3Repository) {
        this.cat3Repository = cat3Repository;
    }

    //FIND ALL CATEGORY 3
    @Override
    public List<Cat3> listAllCat3() {
        List<Cat3> cat3List = new ArrayList<>();
        cat3Repository.findAll().iterator().forEachRemaining(cat3List::add);
        return cat3List;
    }

    //FIND A CATEGORY 3
    @Override
    public Cat3 findCat3(Integer id) {
        return cat3Repository.findById(id).orElse(null);
    }

    @Override
    public List<Cat3> getNavLinks(String name) {
        return cat3Repository.findNavLinkCats(name);
    }

    //SAVE A CATEGORY 3
    @Override
    public Cat3 saveCat3(Cat3 cat3) {
        return cat3Repository.save(cat3);
    }

    //SAVE A LIST CATEGORY 3
    @Override
    public List<Cat3> saveCat3(Iterable<Cat3> cat3Iterable) {
        List<Cat3> cat3List = new ArrayList<>();
        cat3Repository.saveAll(cat3Iterable).iterator().forEachRemaining(cat3List::add);
        return cat3List;
    }

    @Override
    public Cat3 findCat3ByName(String name) {
        return cat3Repository.findCat3ByCatName(name);
    }

    //DELETE A CATEGORY 3
    @Override
    public boolean deleteCat3(Integer id) {
        try {
            cat3Repository.deleteById(id);
            return true;
        } catch (Exception ex) {
            log.warn("DELTETION FAILED " + ex);
            return false;
        }
    }
}
