package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Cat2;
import com.astontech.inventory.cvsinv.domain.Cat3;
import com.astontech.inventory.cvsinv.services.Cat2Service;
import com.astontech.inventory.cvsinv.services.Cat3Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
//@CrossOrigin(origins = "http://aston.local")
@RequestMapping("/api/cat2")
public class Cat2Rest {

    private Cat2Service cat2Service;

    public Cat2Rest(Cat2Service cat2Service) {
        this.cat2Service = cat2Service;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public List<Cat2> getICat2s() {
        return cat2Service.listAllCat2();
    }

    @GetMapping("/{id}")
    public Cat2 getICat2(@PathVariable int id) {
        return cat2Service.findCat2(id);
    }

    //endregion
    //region SAVE MAPPINGS

    @PostMapping("/")
    public Cat2 saveCat2(@RequestBody Cat2 cat2) {
        return cat2Service.saveCat2(cat2);
    }

    //endregion

    //region DELETE MAPPINGS
    @DeleteMapping("/{id}")
    public boolean deleteCat2(@PathVariable int id) {
        return cat2Service.deleteCat2(id);
    }

    //endregion
}
