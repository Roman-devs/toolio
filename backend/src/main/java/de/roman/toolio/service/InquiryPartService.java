package de.roman.toolio.service;

import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.model.InquiryPart;
import de.roman.toolio.model.UuidGenerator;
import de.roman.toolio.security.AppUser;
import de.roman.toolio.security.AppUserDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class InquiryPartService {

    private final InquiryPartDb inquiryPartDb;
    private final AppUserDb appUserDb;
    private final UuidGenerator uuidGenerator;

    @Autowired
    public InquiryPartService(InquiryPartDb inquiryPartDb, AppUserDb appUserDb, UuidGenerator uuidGenerator) {
        this.inquiryPartDb = inquiryPartDb;
        this.appUserDb = appUserDb;
        this.uuidGenerator = uuidGenerator;
    }

    public List<InquiryPart> listInquiryParts() {
        return inquiryPartDb.findAll();
    }

    public InquiryPart addInquiry(InquiryPart inquiryPartToBeAdded, String id) {
        String uuid = uuidGenerator.generateRandomUuid();
        inquiryPartToBeAdded.setUuid(uuid);
        AppUser postingUser = appUserDb.findById(id).get();
        List<String> updatedPartIdList = postingUser.getInquiryPartIDs();
        updatedPartIdList.add(uuid);
        AppUser updatedUser = postingUser.toBuilder().inquiryPartIDs(updatedPartIdList).build();
        appUserDb.save(updatedUser);

        return inquiryPartDb.save(inquiryPartToBeAdded);
    }

    public void deleteInquiryFromDatabase(String inquiryId) {
        inquiryPartDb.deleteById(inquiryId);
    }

    public InquiryPart getInquiryById(String id) {
        return inquiryPartDb.findById(id).get();
    }
}
