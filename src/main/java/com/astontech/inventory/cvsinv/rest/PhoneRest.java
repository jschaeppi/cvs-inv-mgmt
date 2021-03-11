package com.astontech.inventory.cvsinv.rest;


import com.astontech.inventory.cvsinv.domain.Phone;
import com.astontech.inventory.cvsinv.services.PhoneService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/phone")
public class PhoneRest {

    private PhoneService phoneService;

    public PhoneRest(PhoneService phoneService) {
        this.phoneService = phoneService;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public ResponseEntity<List<Phone>> getPhones() {
        List<Phone> phoneList = phoneService.listAllPhones();
        if (phoneList.size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(200).body(phoneList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Phone> getPhone(@PathVariable int id) {
        Phone phone = phoneService.findPhone(id);
        if (phone == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(200).body(phone);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public ResponseEntity<Phone> savePhone(@RequestBody Phone phone) {
        Phone savedPhone = phoneService.savePhone(phone);
        if (savedPhone == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(201).body(savedPhone);
    }

    @PutMapping("/")
    public ResponseEntity<Phone> updatePhone(@RequestBody Phone phone) {
        Phone updatedPhone = phoneService.savePhone(phone);
        if (updatedPhone == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(200).body(updatedPhone);
    }
    //endregion

    //region DELETE MAPPINGS
    @DeleteMapping("/delete/")
    public ResponseEntity<Integer> deletePhone(@RequestBody Phone phone) {
        Integer success = phoneService.disablePhone(phone);
        if (success == 0) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(0);
        }
        return ResponseEntity.status(20).body(1);
    }

    //endregion

}
