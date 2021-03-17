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
@CrossOrigin(origins = "http://aston.local:4200")
@RequestMapping("/api/vendor")
public class VendorRest {

    private VendorService vendorService;
    private AddressService addressService;
    private PhoneService phoneService;

    public VendorRest(VendorService vendorService) {
        this.vendorService = vendorService;
    }

    @GetMapping("/vendorItemCount/")
    public ResponseEntity<List<Vendor>> getVendorItemCount() {
        List<Vendor> vendorItemCount = vendorService.getItemCountByVendor();
        if (vendorItemCount.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(200).body(vendorItemCount);
    }

    //region GET MAPPINGS
    @CrossOrigin
    @GetMapping("/")
    public ResponseEntity<List<Vendor>> getVendors() {
        List<Vendor> vendorList = vendorService.listAllVendors();
        if (vendorList.size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(200).body(vendorList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vendor> getVendor(@PathVariable int id) {
        Vendor vendor = vendorService.findVendor(id);
        if (vendor == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(200).body(vendor);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public ResponseEntity<Vendor> saveVendor(@RequestBody Vendor vendor) {
        Vendor savedVendor = vendorService.saveVendor(vendor);
        if (!savedVendor.equals(null)) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(201).body(savedVendor);
    }

    @PutMapping("/")
    public ResponseEntity<Vendor> updateVendor(@RequestBody Vendor vendor) {

        Vendor updatedVendor = vendorService.saveVendor(vendor);
        if (updatedVendor == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(200).body(updatedVendor);
    }
    //endregion

    //region DELETE MAPPINGS
    @PutMapping("/delete/")
    public ResponseEntity<Integer> deleteVendor(@RequestBody Vendor vendor) {
        Integer success = vendorService.deleteVendor(vendor.getId());
        if (success == 0) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(success);
        }
        return ResponseEntity.status(200).body(success);
    }

    //endregion
}
