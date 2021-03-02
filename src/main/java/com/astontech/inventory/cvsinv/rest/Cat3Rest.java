package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Cat3;
import com.astontech.inventory.cvsinv.services.Cat3Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

    @GetMapping("/{id}")
    public ResponseEntity<Cat3> getCat3(@PathVariable int id) {
        Cat3 itemCat = cat3Service.findCat3(id);
        if (itemCat == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok().body(itemCat);
    }

    @GetMapping("/topCat/{name}")
    public ResponseEntity<List<Cat3>> getCat3ByName(@PathVariable String name) {
        List<Cat3> navLinkList = new ArrayList<>();
        try {
            navLinkList = cat3Service.getNavLinks(name);
            if (navLinkList.isEmpty()) {
                ResponseEntity.status(HttpStatus.NOT_FOUND).body(navLinkList);
            }
        } catch(Exception exception) {
            System.out.println(exception);
        }
        return ResponseEntity.ok().body(navLinkList);
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
