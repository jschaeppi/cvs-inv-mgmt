package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Cat1;
import com.astontech.inventory.cvsinv.domain.Items;
import com.astontech.inventory.cvsinv.services.ItemsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/items")
public class ItemsRest {

    private ItemsService itemsService;

    public ItemsRest(ItemsService itemsService) {
        this.itemsService = itemsService;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public List<Items> getItems() {
        return itemsService.listAllItems();
    }

    @GetMapping("/{id}")
    public Items getItem(@PathVariable int id) {
        return itemsService.findItem(id);
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
    //endregion

    //region DELETE MAPPINGS
    @DeleteMapping("/{id}")
    public boolean deleteItem(@PathVariable int id) {
        return itemsService.deleteItem(id);
    }


    //endregion
}
