package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Address;
import com.astontech.inventory.cvsinv.services.AddressService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/address")
public class AddressRest {

    private AddressService addressService;

    public AddressRest(AddressService addressService) {
        this.addressService = addressService;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public List<Address> getAddresses() {
        return addressService.listAllAddress();
    }

    @GetMapping("/{id}")
    public Address getAddress(@PathVariable int id) {
        return addressService.findAddress(id);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public Address saveAddress(@RequestBody Address vendor) {
        return addressService.saveAddress(vendor);
    }
    //endregion

    //region DELETE MAPPINGS
    @DeleteMapping("/{id}")
    public boolean deleteAddress(@PathVariable int id) {
        return addressService.deleteAddress(id);
    }

    //endregion

}
