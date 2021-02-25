package com.astontech.inventory.cvsinv.services.Impl;

import com.astontech.inventory.cvsinv.domain.Vendor;
import com.astontech.inventory.cvsinv.repositories.VendorRepository;
import com.astontech.inventory.cvsinv.services.VendorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VendorServiceImpl implements VendorService {

    Logger log = LoggerFactory.getLogger(VendorServiceImpl.class);

    private VendorRepository vendorRepository;

    public VendorServiceImpl(VendorRepository vendorRepository) {
        this.vendorRepository = vendorRepository;
    }

    //FIND ALL VENDORS
    @Override
    public List<Vendor> listAllVendors() {
        List<Vendor> vendorList = new ArrayList<>();
        vendorRepository.findAll().iterator().forEachRemaining(vendorList::add);
        return vendorList;
    }

    //FIND A VENDOR
    @Override
    public Vendor findVendor(Integer id) {
        return vendorRepository.findById(id).orElse(null);
    }

    //SAVE A VENDOR
    @Override
    public Vendor saveVendor(Vendor vendor) {
        return vendorRepository.save(vendor);
    }

    //SAVE A LIST VENDORS
    @Override
    public List<Vendor> saveVendors(Iterable<Vendor> vendorIterable) {
        List<Vendor> vendorList = new ArrayList<>();
        vendorRepository.saveAll(vendorIterable).iterator().forEachRemaining(vendorList::add);
        return vendorList;
    }

    //DELETE A VENDOR
    @Override
    public boolean deleteVendor(Integer id) {
        try {
            vendorRepository.deleteById(id);
            return true;
        } catch(Exception ex) {
            log.warn("DELETION FAILED! " + ex);
            return false;
        }
    }
}
