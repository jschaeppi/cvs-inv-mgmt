package com.astontech.inventory.cvsinv.services.Impl;

import com.astontech.inventory.cvsinv.domain.Phone;
import com.astontech.inventory.cvsinv.repositories.PhoneRepository;
import com.astontech.inventory.cvsinv.services.PhoneService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PhoneServiceImpl implements PhoneService {

    Logger log = LoggerFactory.getLogger(PhoneServiceImpl.class);

    private PhoneRepository phoneRepository;

    public PhoneServiceImpl(PhoneRepository phoneRepository) {
        this.phoneRepository = phoneRepository;
    }

    //FIND ALL PHONES
    @Override
    public List<Phone> listAllPhones() {
        List<Phone> phoneList = new ArrayList<>();
        phoneRepository.findAll().iterator().forEachRemaining(phoneList::add);
        return phoneList;
    }

    //FIND A PHONE
    @Override
    public Phone findPhone(Integer id) {
        return phoneRepository.findById(id).orElse(null);
    }

    //SAVE A PHONE
    @Override
    public Phone savePhone(Phone phone) {
        return phoneRepository.save(phone);
    }

    //SAVE A LIST PHONES
    @Override
    public List<Phone> savePhoneList(Iterable<Phone> phoneIterable) {
        List<Phone> phoneList = new ArrayList<>();
        phoneRepository.saveAll(phoneIterable).iterator().forEachRemaining(phoneList::add);
        return phoneList;
    }

    //DELETE A PHONE
    @Override
    public Integer disablePhone(Phone phone) {
        try {
            phoneRepository.disablePhone(phone.getId());
            return 1;
        } catch(Exception ex) {
            log.warn("DELETION FAILED! " + ex);
            return 0;
        }
    }
}
