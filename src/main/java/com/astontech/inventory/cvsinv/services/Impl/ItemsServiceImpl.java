package com.astontech.inventory.cvsinv.services.Impl;

import com.astontech.inventory.cvsinv.domain.Cat1;
import com.astontech.inventory.cvsinv.domain.Items;
import com.astontech.inventory.cvsinv.repositories.ItemsRepository;
import com.astontech.inventory.cvsinv.services.ItemsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemsServiceImpl implements ItemsService {

    Logger log = LoggerFactory.getLogger(ItemsServiceImpl.class);

    private ItemsRepository itemsRepository;

    public ItemsServiceImpl(ItemsRepository itemsRepository) {
        this.itemsRepository = itemsRepository;
    }

    //FIND ALL ITEMS
    @Override
    public List<Items> listAllItems() {
        return itemsRepository.findItemsByDisabledFalse();

    }

    //FIND ALL ITEMS BY CAT3
    @Override
    public List<Items> listItemsByCat3(String name) {
        return itemsRepository.listItemsByCat3Name(name);
    }

    //FIND AN ITEM
    @Override
    public Items findItem(Integer id) {
        return itemsRepository.findById(id).orElse(null);
    }

    //SAVE AN ITEM
    @Override
    public Items saveItem(Items item) {
        return itemsRepository.save(item);
    }

    //SAVE ALL ITEMS
    @Override
    public List<Items> saveItems(Iterable<Items> itemsIterable) {
        List<Items> itemsList = new ArrayList<>();
        itemsRepository.saveAll(itemsIterable).iterator().forEachRemaining(itemsList::add);
        return itemsList;
    }

    //DELETE AN ITEM
    @Override
    public int deleteItem(Integer id) {
        try {
            System.out.println("Deleting Item " + id);
            itemsRepository.disableById(id);
            return 1;
        } catch(Exception ex) {
            log.warn("DELETED FAILED! " + ex);
            return 0;
        }
    }
}
