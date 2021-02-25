package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Cat3;
import com.astontech.inventory.cvsinv.services.Cat3Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/cat3")
public class Cat3Rest {

    private Cat3Service cat3Service;

    public Cat3Rest(Cat3Service cat3Service) {
        this.cat3Service = cat3Service;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public List<Cat3> getCat3s() {
        return cat3Service.listAllCat3();
    }

/*    @GetMapping("/{id}")
    public Cat3 getCat3(@PathVariable int id) {
        return cat3Service.findCat3(id);
    }*/

    @GetMapping("/{name}")
    public List<Cat3> getCat3ByName(@PathVariable String name) {
        return cat3Service.getNavLinks(name);
    }
    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public Cat3 saveCat3(@RequestBody Cat3 cat3) {
        return cat3Service.saveCat3(cat3);
    }

    //endregion
    //region DELETE MAPPINGS
    @DeleteMapping("/{id}")
    public boolean deletCat3(@PathVariable int id) {
        return cat3Service.deleteCat3(id);
    }
    //endregion
}
