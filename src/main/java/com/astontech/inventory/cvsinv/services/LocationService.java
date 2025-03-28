package com.astontech.inventory.cvsinv.services;

import com.astontech.inventory.cvsinv.domain.Address;
import com.astontech.inventory.cvsinv.domain.Location;
import org.springframework.stereotype.Service;

import java.util.List;

public interface LocationService {

    List<Location> listAllLocations();

    Location findLocation(Integer id);

    Location saveLocation(Location location);

    List<Location> saveLocations(Iterable<Location> locationIterable);

    Integer deleteLocation(Location location);
}
