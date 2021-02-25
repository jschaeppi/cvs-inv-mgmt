package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Cat1;
import com.astontech.inventory.cvsinv.domain.Cat2;
import com.astontech.inventory.cvsinv.services.Cat1Service;
import com.astontech.inventory.cvsinv.services.Cat2Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/cat1")
public class Cat1Rest {

    private Cat1Service cat1Service;

    public Cat1Rest(Cat1Service cat1Service) {
        this.cat1Service = cat1Service;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public List<Cat1> getCat1s() {
        return cat1Service.listCat1();
    }

    @GetMapping("/{id}")
    public Cat1 getCat1(@PathVariable int id) {
        return cat1Service.findCat1(id);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public Cat1 saveCat1(@RequestBody Cat1 cat1) {
        return cat1Service.saveCat1(cat1);
    }

    //endregion

    //region DELETE MAPPINGS
    @DeleteMapping("/{id}")
    public boolean deleteCat1(@PathVariable int id) {
        return cat1Service.deleteCat1(id);
    }

    //endregion
}
