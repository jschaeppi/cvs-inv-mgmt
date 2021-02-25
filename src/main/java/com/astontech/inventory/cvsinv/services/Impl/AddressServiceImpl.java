package com.astontech.inventory.cvsinv.services.Impl;

import com.astontech.inventory.cvsinv.domain.Address;
import com.astontech.inventory.cvsinv.repositories.AddressRepository;
import com.astontech.inventory.cvsinv.services.AddressService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {

    Logger log = LoggerFactory.getLogger(AddressServiceImpl.class);
    private AddressRepository addressRepository;

    public AddressServiceImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    //FIND ALL ADDRESSES
    @Override
    public List<Address> listAllAddress() {
        List<Address> addressList = new ArrayList<>();
        addressRepository.findAll().iterator().forEachRemaining(addressList::add);
        return addressList;

    }

    //FIND SINGLE ADDRESS
    @Override
    public Address findAddress(Integer id) {
        return addressRepository.findById(id).orElse(null);
    }

    //SAVE SINGLE ADDRESS
    @Override
    public Address saveAddress(Address address) {
        return addressRepository.save(address);
    }

    //SAVE LIST OF ADDRESSES
    @Override
    public List<Address> saveAddressList(Iterable<Address> addressIterable) {
        List<Address> addressList = new ArrayList<>();
        addressRepository.saveAll(addressIterable).iterator().forEachRemaining(addressList::add);
        return addressList;
    }

    //DELETE AN ADDRESS
    @Override
    public boolean deleteAddress(Integer id) {
        try {
            addressRepository.deleteById(id);
            return true;
        } catch(Exception ex) {
            log.warn("DELETION FAILED! " + ex);
            return false;
        }
    }
}
