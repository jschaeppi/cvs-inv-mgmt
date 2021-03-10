package com.astontech.inventory.cvsinv.services;

import com.astontech.inventory.cvsinv.domain.Cat1;
import com.astontech.inventory.cvsinv.domain.Items;

import java.util.List;

public interface ItemsService {

    List<Items> listAllItems();

    List<Items> listItemsByCat3(String name);

    Items findItem(Integer id);

    Items saveItem(Items item);

    List<Items> saveItems(Iterable<Items> itemsIterable);

    int deleteItem(Integer id);

}
