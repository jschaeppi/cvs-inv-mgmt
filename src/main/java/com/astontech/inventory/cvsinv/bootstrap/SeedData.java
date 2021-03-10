package com.astontech.inventory.cvsinv.bootstrap;

import com.astontech.inventory.cvsinv.domain.Cat2;
import com.astontech.inventory.cvsinv.domain.Cat1;
import com.astontech.inventory.cvsinv.domain.Cat3;
import com.astontech.inventory.cvsinv.domain.Items;
import com.astontech.inventory.cvsinv.services.Cat2Service;
import com.astontech.inventory.cvsinv.services.Cat1Service;
import com.astontech.inventory.cvsinv.services.Cat3Service;
import com.astontech.inventory.cvsinv.services.ItemsService;
import org.hibernate.cache.spi.support.AbstractReadWriteAccess;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SeedData implements ApplicationListener<ContextRefreshedEvent> {

    Logger log = LoggerFactory.getLogger(SeedData.class);

    private final ItemsService itemsService;
    private final Cat2Service cat2Service;
    private final Cat1Service cat1Service;
    private final Cat3Service cat3Service;

    public SeedData(ItemsService itemsService, Cat2Service cat2Service, Cat1Service cat1Service, Cat3Service cat3Service) {
        this.itemsService = itemsService;
        this.cat2Service = cat2Service;
        this.cat1Service = cat1Service;
        this.cat3Service = cat3Service;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        generateCat1();
        generateCat2();
        generateCat3();
        generateItems();
    }

    private void generateItems() {
        List<Cat3> cat3List = cat3Service.listAllCat3();
        List<Items> itemsList = new ArrayList<>();
        Items condiment = new Items("Jif Creamy Peanut Butter",
                "005",
                4.19, cat3Service.findCat3(1));
        itemsList.add(condiment);
        cat3List.get(0).setItemsList(itemsList);
        Items beverage = new Items("Coca Cola Classic, 2L",
                "941088",
                2.29, cat3Service.findCat3(2));
        beverage.setDisabled(true);
        itemsList.add(beverage);
        Items medicine = new Items("CVS Health Ibuprofen Softgels, 200 mg",
                "213634", 14.79);
        medicine.setCat3(cat3List.get(2));
        Items first_aid = new Items("CVS First Aid Family Kit",
                "405565",
                9.99);
        first_aid.setCat3(cat3List.get(3));
        Items batteries = new Items("Duracell CopperTop AA Alkaline Battery",
                "249771",
                7.59);
        batteries.setCat3(cat3List.get(4));
        itemsList.add(condiment);
        itemsList.add(beverage);
        itemsList.add(medicine);
        itemsList.add(first_aid);
        itemsList.add(batteries);
        itemsService.saveItems(itemsList);
    }

    private void generateCat3() {
        List<Cat3> cat3List = new ArrayList<>();
        List<Cat2> cat2List = cat2Service.listAllCat2();
        cat3List.add(new Cat3("Condiment"));
        cat3List.add(new Cat3("Soda"));
        cat3List.add(new Cat3("Adult Pain & Fever"));
        cat3List.add(new Cat3("First Aid Kit"));
        cat3List.add(new Cat3("AA Batteries"));
        cat3List.add(new Cat3("Lighting"));
        cat3List.add(new Cat3("Mens Razors & Blades"));
        cat3List.add(new Cat3("Clears & Gels"));
        cat3List.add(new Cat3("Energy"));
        cat3List.add(new Cat3("Meal Replacement"));
        for (int i = 0; i < cat2List.size(); i++) {
            cat3List.get(i).setCat2(cat2List.get(i));
            cat3Service.saveCat3(cat3List.get(i));
        }

    }
    private void generateCat2() {
                List<Cat2> cat2List = new ArrayList<>();
        List<Cat1> cat1List = cat1Service.listCat1();
        cat2List.add(new Cat2("Pantry"));
        cat2List.add(new Cat2("Beverages"));
        cat2List.add(new Cat2("Pain & Fever"));
        cat2List.add(new Cat2("First Aid"));
        cat2List.add(new Cat2("Batteries & Electronics"));
        cat2List.add(new Cat2("Home & Kitchen"));
        cat2List.add(new Cat2("Shaving"));
        cat2List.add(new Cat2("Deodorant"));
        cat2List.add(new Cat2("Sports Nutrition"));
        cat2List.add(new Cat2("Protein Bars"));
        for (int i = 0; i < cat2List.size(); i++) {
            if (i < 2) {
                cat2List.get(i).setCat1(cat1List.get(0));
                cat2Service.saveCat2(cat2List.get(i));
            } else if (i < 4) {
                cat2List.get(i).setCat1(cat1List.get(1));
                cat2Service.saveCat2(cat2List.get(i));
            } else if (i < 6) {
                cat2List.get(i).setCat1(cat1List.get(2));
                cat2Service.saveCat2(cat2List.get(i));
            } else if (i < 8) {
                cat2List.get(i).setCat1(cat1List.get(3));
                cat2Service.saveCat2(cat2List.get(i));
            } else if (i <10) {
                cat2List.get(i).setCat1(cat1List.get(4));
                cat2Service.saveCat2(cat2List.get(i));
            }
        }
    }

    private void generateCat1() {
      List<Cat1> cat1List = new ArrayList<>();
        cat1List.add(new Cat1("Grocery"));
        cat1List.add(new Cat1("Health & Medicine"));
        cat1List.add(new Cat1("Household"));
        cat1List.add(new Cat1("Personal Care"));
        cat1List.add(new Cat1("Diet & Nutrition"));
        cat1Service.saveCat1(cat1List);
    }
}
