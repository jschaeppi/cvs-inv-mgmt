package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Vendor;
import com.astontech.inventory.cvsinv.services.AddressService;
import com.astontech.inventory.cvsinv.services.PhoneService;
import com.astontech.inventory.cvsinv.services.VendorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/vendor")
public class VendorRest {

    private VendorService vendorService;
    private AddressService addressService;
    private PhoneService phoneService;

    public VendorRest(VendorService vendorService) {
        this.vendorService = vendorService;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public List<Vendor> getVendors() {
        return vendorService.listAllVendors();
    }

    @GetMapping("/{id}")
    public Vendor getVendor(@PathVariable int id) {
        return vendorService.findVendor(id);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public ResponseEntity<Vendor> saveVendor(@RequestBody Vendor vendor) {
        System.out.println("I'm in the POST BODY");
        Vendor savedVendor = vendorService.saveVendor(vendor);
        if (!savedVendor.equals(null)) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.ok().body(savedVendor);
    }

    @PutMapping("/")
    public Vendor updateVendor(@RequestBody Vendor vendor) {
        System.out.println("I'm in the POST BODY");
        return vendorService.saveVendor(vendor);
    }
    //endregion

    //region DELETE MAPPINGS
    @DeleteMapping("/{id}")
    public boolean deleteVendor(@PathVariable int id) {
        return vendorService.deleteVendor(id);
    }

    //endregion
}
