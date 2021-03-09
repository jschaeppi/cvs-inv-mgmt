package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Location;
import com.astontech.inventory.cvsinv.domain.Vendor;
import com.astontech.inventory.cvsinv.services.LocationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/location")
public class LocationRest {

    private LocationService locationService;

    public LocationRest(LocationService locationService) {
        this.locationService = locationService;
    }

    //region GET MAPPINGS
    @GetMapping("/")
    public List<Location> getLocations() {
        return locationService.listAllLocations();
    }

    @GetMapping("/{id}")
    public Location getLocation(@PathVariable int id) {
        return locationService.findLocation(id);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public Location saveLocation(@RequestBody Location location) {

        return locationService.saveLocation(location);
    }

    @PutMapping("/")
    public Location updateLocation(@RequestBody Location location) {
        return locationService.saveLocation(location);
    }
    //endregion

    //region DELETE MAPPINGS
    @DeleteMapping("/{id}")
    public boolean deleteLocation(@PathVariable int id) {
        return locationService.deleteLocation(id);
    }

    //endregion

}
