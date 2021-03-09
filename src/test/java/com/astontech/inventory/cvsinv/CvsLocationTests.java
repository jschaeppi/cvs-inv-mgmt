package com.astontech.inventory.cvsinv;
import com.astontech.inventory.cvsinv.domain.Address;
import com.astontech.inventory.cvsinv.domain.Items;
import com.astontech.inventory.cvsinv.domain.Location;
import com.astontech.inventory.cvsinv.domain.Phone;
import com.astontech.inventory.cvsinv.services.AddressService;
import com.astontech.inventory.cvsinv.services.ItemsService;
import com.astontech.inventory.cvsinv.services.LocationService;
import com.astontech.inventory.cvsinv.services.PhoneService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CvsInvApplication.class)
@WebAppConfiguration
public class CvsLocationTests {

    @Autowired
    private LocationService locationService;

    @Autowired
    private ItemsService itemsService;

    @Autowired
    private AddressService addressService;

    @Autowired
    private PhoneService phoneService;

/*    private CvsLocationTests(LocationService locationService, ItemsService itemsService, AddressService addressService, PhoneService phoneService) {
        this.locationService = locationService;
        this.itemsService = itemsService;
        this.addressService = addressService;
        this.phoneService = phoneService;
    }*/

    @Test
    public void locationTesting() {
        //Instantiating Objects and Persisting to DB
        Location location = new Location("CVS Woodbury", "001", 30);
        Address address = new Address("8468 Tamarack Bay", "","Woodbury", "MN", 55125);
        Phone phone = new Phone(651, 7315177);
        List<Items> condiment = new ArrayList<>();
        condiment.add(new Items("Jif Creamy Peanut Butter",
                "005",
                4.19));
        Assert.isNull(location.getId(), "The Location ID isn't null");
        Assert.isNull(address.getId(), "The Address ID isn't null");
        Assert.isNull(phone.getId(), "The Phone ID isn't null");
        Assert.isNull(condiment.get(0).getId(), "The Item id is not null");
        locationService.saveLocation(location);
        addressService.saveAddress(address);
        phoneService.savePhone(phone);
        itemsService.saveItems(condiment);
        Assert.notNull(locationService.findLocation(location.getId()), "The Location ID is null");
        Assert.notNull(addressService.findAddress(address.getId()), "The Address ID is null");
        Assert.notNull(phoneService.findPhone(phone.getId()), "The Phone ID is null");
        Assert.notNull(itemsService.findItem(condiment.get(0).getId()), "The ITEM ID is null");

        //Getting objects from DB

        Location fetchedLocation = new Location();
        fetchedLocation.setId(location.getId());
        fetchedLocation = locationService.findLocation(fetchedLocation.getId());
        Assert.isTrue(fetchedLocation.getId().equals(location.getId()), "These id's don't match");
        Address fetchedAddress = new Address();
        fetchedAddress.setId(address.getId());
        fetchedAddress = addressService.findAddress(fetchedAddress.getId());
        Assert.isTrue(fetchedAddress.getId().equals(address.getId()), "These ID's are not equal");
        Phone fetchedPhone = new Phone();
        fetchedPhone.setId(phone.getId());
        fetchedPhone = phoneService.findPhone(fetchedPhone.getId());
        Assert.isTrue(fetchedPhone.getId().equals(phone.getId()), "These ID's are not equal");
        List<Items> fetchedItem = new ArrayList<>();
        fetchedItem.add(condiment.get(0));
        System.out.println(fetchedItem.get(0).getId());
        System.out.println(condiment.get(0).getId());
//        Assert.isTrue(itemsService.findItem(fetchedItem.get(0).getId()).equals(condiment.get(0).getId()), "These ID's are not equal");

        //Saving a location
        fetchedLocation.setAddress(fetchedAddress);
        fetchedLocation.setPhone(fetchedPhone);
        fetchedLocation.setItemList(fetchedItem);
        locationService.saveLocation(fetchedLocation);
        System.out.println(locationService.findLocation(fetchedLocation.getId()).getName());
        System.out.println(locationService.findLocation(fetchedLocation.getId()).getAddress().getStreet());
        System.out.println(locationService.findLocation(fetchedLocation.getId()).getPhone().getNumber());
        System.out.println(locationService.findLocation(fetchedLocation.getId()).getItemsList().get(0).getName());

    }
}
