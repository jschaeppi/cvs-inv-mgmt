package com.astontech.inventory.cvsinv.rest;


import com.astontech.inventory.cvsinv.domain.Phone;
import com.astontech.inventory.cvsinv.services.PhoneService;
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
    public List<Phone> getPhones() {
        return phoneService.listAllPhones();
    }

    @GetMapping("/{id}")
    public Phone getPhone(@PathVariable int id) {
        return phoneService.findPhone(id);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public Phone savePhone(@RequestBody Phone phone) {
        return phoneService.savePhone(phone);
    }
    //endregion

    //region DELETE MAPPINGS
    @DeleteMapping("/{id}")
    public boolean deletePhone(@PathVariable int id) {
        return phoneService.deletePhone(id);
    }

    //endregion

}
