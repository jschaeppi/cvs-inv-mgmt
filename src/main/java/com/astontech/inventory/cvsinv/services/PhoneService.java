package com.astontech.inventory.cvsinv.services;

import com.astontech.inventory.cvsinv.domain.Address;
import com.astontech.inventory.cvsinv.domain.Phone;

import java.util.List;

public interface PhoneService {

    List<Phone> listAllPhones();

    Phone findPhone(Integer id);

    Phone savePhone(Phone phone);

    List<Phone> savePhoneList(Iterable<Phone> phoneIterable);

    Integer disablePhone(Phone phone);
}
