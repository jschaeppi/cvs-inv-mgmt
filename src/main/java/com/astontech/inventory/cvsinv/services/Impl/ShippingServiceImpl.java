package com.astontech.inventory.cvsinv.services.Impl;

import com.astontech.inventory.cvsinv.domain.Shipping;
import com.astontech.inventory.cvsinv.repositories.ShippingRepository;
import com.astontech.inventory.cvsinv.services.ShippingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShippingServiceImpl implements ShippingService {

    Logger log = LoggerFactory.getLogger(ShippingServiceImpl.class);

    private ShippingRepository shippingRepository;

    public ShippingServiceImpl(ShippingRepository shippingRepository) {
        this.shippingRepository = shippingRepository;
    }

    @Override
    public List<Shipping> listAllShippers() {
        List<Shipping> shippingList = new ArrayList<>();
        shippingRepository.findAll().iterator().forEachRemaining(shippingList::add);
        return shippingList;
    }

    @Override
    public Shipping findShipper(Integer id) {
        return shippingRepository.findById(id).orElse(null);
    }

    @Override
    public Shipping saveShipper(Shipping shipping) {
        return shippingRepository.save(shipping);
    }

    @Override
    public List<Shipping> saveShippers(Iterable<Shipping> shippingIterable) {
        List<Shipping> shippingList = new ArrayList<>();
        shippingRepository.saveAll(shippingIterable).iterator().forEachRemaining(shippingList::add);
        return shippingList;
    }

    @Override
    public boolean deleteShipper(Integer id) {
        try {
            shippingRepository.deleteById(id);
            return true;
        } catch(Exception ex) {
            log.warn("DELETION FAILED! " + ex);
            return false;
        }
    }
}
