package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Vendor;
import com.astontech.inventory.cvsinv.services.VendorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/vendor")
public class VendorRest {

    private VendorService vendorService;

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
    public Vendor saveVendor(@RequestBody Vendor vendor) {
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
