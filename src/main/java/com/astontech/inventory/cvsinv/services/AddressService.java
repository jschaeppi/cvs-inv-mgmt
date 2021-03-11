package com.astontech.inventory.cvsinv.services;

import com.astontech.inventory.cvsinv.domain.Address;

import java.util.List;

public interface AddressService {

    List<Address> listAllAddress();

    Address findAddress(Integer id);

    Address saveAddress(Address address);

    List<Address> saveAddressList(Iterable<Address> addressIterable);

    Integer disableAddress(Address address);
}
