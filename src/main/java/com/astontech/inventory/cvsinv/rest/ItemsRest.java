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
@CrossOrigin(origins = "http://aston.local")
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
    public ResponseEntity<List<Items>> getItems() {

        List<Items> itemsList = itemsService.listAllItems();
        if (itemsList.size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok().body(itemsList);
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
    public ResponseEntity<Items> saveItem(@RequestBody Items item) {
        Items fetchedItem = itemsService.saveItem(item);
        if (fetchedItem == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(201).body(fetchedItem);
    }

    //region UPDATE MAPPING
    @PutMapping("/")
    public ResponseEntity<Items> updateItem(@RequestBody Items item) {
        cat3Service.saveCat3(item.getCat3());
        Items updatedItem = itemsService.saveItem(item);
        if (updatedItem == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(200).body(updatedItem);
    }
    //endregion

    //region DELETE MAPPINGS
    @PutMapping("/delete/")
    public ResponseEntity<Integer> disableItem(@RequestBody Items item) {
        Integer success = itemsService.deleteItem(item);
        System.out.println(success);
        if (success == 0) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(success);
        }
        return ResponseEntity.status(200).body(success);
    }


    //endregion
}
