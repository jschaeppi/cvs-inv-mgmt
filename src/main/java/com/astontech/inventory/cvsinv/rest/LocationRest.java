package com.astontech.inventory.cvsinv.rest;

import com.astontech.inventory.cvsinv.domain.Location;
import com.astontech.inventory.cvsinv.domain.Vendor;
import com.astontech.inventory.cvsinv.services.LocationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Location>> getLocations() {
        List<Location> locationList = locationService.listAllLocations();
            if (locationList.size() == 0) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            return ResponseEntity.status(200).body(locationList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Location> getLocation(@PathVariable int id) {

        Location location = locationService.findLocation(id);
        if (location == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(200).body(location);
    }

    //endregion

    //region SAVE MAPPINGS

    @PostMapping("/")
    public ResponseEntity<Location> saveLocation(@RequestBody Location location) {
        Location fetchedLocation = locationService.saveLocation(location);
        if (fetchedLocation == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(fetchedLocation);
    }

    @PutMapping("/")
    public ResponseEntity<Location> updateLocation(@RequestBody Location location) {
        Location updatedLocation = locationService.saveLocation(location);
        if (updatedLocation == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        return ResponseEntity.status(200).body(updatedLocation);
    }
    //endregion

    //region DELETE MAPPINGS
    @PutMapping("/delete/")
    public ResponseEntity<Integer> deleteLocation(@RequestBody Location location) {
        Integer success = locationService.deleteLocation(location);
        if (success == 0) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(success);
        }
        return ResponseEntity.status(200).body(success);
    }

    //endregion

}
