package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Cat1;
import com.astontech.inventory.cvsinv.domain.Cat3;
import com.astontech.inventory.cvsinv.domain.Items;
import com.astontech.inventory.cvsinv.services.Cat1Service;
import com.astontech.inventory.cvsinv.services.Cat2Service;
import com.astontech.inventory.cvsinv.services.Cat3Service;
import com.astontech.inventory.cvsinv.services.ItemsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/items")
public class ItemsRest {

    private ItemsService itemsService;
    private Cat3Service cat3Service;

    public ItemsRest(ItemsService itemsService, Cat3Service cat3Service) {
        this.itemsService = itemsService;
        this.cat3Service = cat3Service;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public List<Items> getItems() {
        return itemsService.listAllItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Items> getItem(@PathVariable int id) {
        Items item = itemsService.findItem(id);
        if (item == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok().body(item);
    }

    @GetMapping("/cat/{name}")
    public ResponseEntity<List<Items>> getItemByCat(@PathVariable String name) {
        List<Items> itemsList = itemsService.listItemsByCat3(name);
        if (itemsList.size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok().body(itemsList);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public Items saveItem(@RequestBody Items item) {
        return itemsService.saveItem(item);
    }

    //region UPDATE MAPPING
    @PutMapping("/")
    public Items updateItem(@RequestBody Items item) {
        cat3Service.saveCat3(item.getCat3());
        return itemsService.saveItem(item);
    }
    //endregion

    //region DELETE MAPPINGS
    @DeleteMapping("/{id}")
    public boolean deleteItem(@PathVariable int id) {
        return itemsService.deleteItem(id);
    }


    //endregion
}
