package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Address;
import com.astontech.inventory.cvsinv.services.AddressService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@CrossOrigin(origins = "http://aston.local")
@RequestMapping("/api/address")
public class AddressRest {

    private AddressService addressService;

    public AddressRest(AddressService addressService) {
        this.addressService = addressService;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public ResponseEntity<List<Address>> getAddresses() {
        List<Address> addressList = addressService.listAllAddress();
        if (addressList.size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(200).body(addressList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Address> getAddress(@PathVariable int id) {
        Address address = addressService.findAddress(id);
        if (address == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(200).body(address);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public ResponseEntity<Address> saveAddress(@RequestBody Address address) {
        Address savedAddress = addressService.saveAddress(address);
        if (savedAddress == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(201).body(savedAddress);
    }

    @PutMapping("/")
    public ResponseEntity<Address> updateAddress(@RequestBody Address address) {
        Address updatedAddress = addressService.saveAddress(address);
        if (updatedAddress == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(200).body(updatedAddress);
    }
    //endregion

    //region DELETE MAPPINGS
    @PutMapping("/delete/")
    public ResponseEntity<Integer> deleteAddress(@PathVariable Address address) {
        Integer success = addressService.disableAddress(address);
        if (success == 0) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(success);
        }
        return ResponseEntity.status(200).body(success);
    }

    //endregion

}
