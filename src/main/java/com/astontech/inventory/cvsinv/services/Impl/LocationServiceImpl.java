package com.astontech.inventory.cvsinv.services.Impl;

import com.astontech.inventory.cvsinv.domain.Location;
import com.astontech.inventory.cvsinv.repositories.LocationRepository;
import com.astontech.inventory.cvsinv.services.LocationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {

    Logger log = LoggerFactory.getLogger(LocationServiceImpl.class);

    private LocationRepository locationRepository;

    public LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    //FIND ALL LOCATIONS
    @Override
    public List<Location> listAllLocations() {
        List<Location> locationList = new ArrayList<>();
         locationRepository.findLocationsByDisabledFalse().iterator().forEachRemaining(locationList::add);
         return locationList;
    }

    //FIND A LOCATION
    @Override
    public Location findLocation(Integer id) {
        return locationRepository.findById(id).orElse(null);
    }

    //SAVE A LOCATION
    @Override
    public Location saveLocation(Location location) {
        return locationRepository.save(location);
    }

    //SAVE A LIST LOCATION
    @Override
    public List<Location> saveLocations(Iterable<Location> locationIterable) {
        List<Location> locationList = new ArrayList<>();
        locationRepository.saveAll(locationIterable).iterator().forEachRemaining(locationList::add);
        return locationList;
    }

    //DELETE A LOCATION
    @Override
    public int deleteLocation(Location location) {
        try {
            System.out.println("Deleting location " + location.getName());
            locationRepository.deleteById(location.getId());
            return 1;
        } catch (Exception ex) {
            log.warn("DELETION FAILED " + ex);
            return 0;
        }
    }
}
