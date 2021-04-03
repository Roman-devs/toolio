package de.roman.toolio.service;

import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.model.InquiryPart;
import de.roman.toolio.model.UuidGenerator;
import de.roman.toolio.model.AppUser;
import de.roman.toolio.db.AppUserDb;
import de.roman.toolio.security.UserSecurityCredentials;
import de.roman.toolio.security.UserSecurityCredentialsDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Optional<InquiryPart> addInquiry(InquiryPart inquiryPartToBeAdded, String id) {
        String uuid = uuidGenerator.generateRandomUuid();
        inquiryPartToBeAdded.setUuid(uuid);
        String userNameId = appUserDb.findAppUserByUsername(id).getId();
        if (appUserDb.existsById(userNameId)) {
            AppUser postingUser = appUserDb.findById(userNameId).get();
            List<String> updatedPartIdList = postingUser.getInquiryPartIDs();
            updatedPartIdList.add(uuid);
            AppUser updatedUser = postingUser.toBuilder().inquiryPartIDs(updatedPartIdList).build();
            appUserDb.save(updatedUser);

            return Optional.of(inquiryPartDb.save(inquiryPartToBeAdded));
        }
        return Optional.empty()
        ;// id of "Mustermann" is passed into this method. This is caused by faulty/missing connection between usercredentialsdb and the actual userdb. An intermediate step is required that connects the usercredentialsdb _id with the appuser db. THe corresponding unique identifier is the username in the appuserdb.
    }

    public void deleteInquiryFromDatabase(String inquiryId) {
        inquiryPartDb.deleteById(inquiryId);
    }

    public InquiryPart getInquiryById(String id) {
        return inquiryPartDb.findById(id).get();
    }
}
