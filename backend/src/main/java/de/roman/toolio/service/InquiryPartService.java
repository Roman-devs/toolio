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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
                ;
    }

    public void deleteInquiryFromDatabase(String inquiryId) {
        inquiryPartDb.deleteById(inquiryId);
    }

    public Optional<InquiryPart> getInquiryById(String id) {
        if (inquiryPartDb.existsById(id)) {
            return inquiryPartDb.findById(id);
        } else return Optional.empty();
    }

    public Optional<List<InquiryPart>> listUserInquiryParts(String username) {
        List<String> userNameListOfInquiryIds = appUserDb.findAppUserByUsername(username).getInquiryPartIDs();
        if (!userNameListOfInquiryIds.isEmpty()) {
            List<InquiryPart> userInquiryIds = new ArrayList<>();
            userNameListOfInquiryIds.stream().forEach((inquiryId) -> {
                Optional<InquiryPart> inquiryPartList = getInquiryById(inquiryId);
                if (inquiryPartList.isPresent()) {
                    userInquiryIds.add(inquiryPartList.get());
                }
            });
            return Optional.of(userInquiryIds);
        }
        return Optional.empty();
    }
}
