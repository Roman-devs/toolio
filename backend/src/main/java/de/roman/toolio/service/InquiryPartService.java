package de.roman.toolio.service;

import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.model.InquiryPart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class InquiryPartService {

    private final InquiryPartDb inquiryPartDb;

    @Autowired
    public InquiryPartService(InquiryPartDb inquiryPartDb) {
        this.inquiryPartDb = inquiryPartDb;
    }

    public List<InquiryPart> listInquiryParts() {
        return inquiryPartDb.findAll();
    }

    public InquiryPart addInquiry(InquiryPart inquiryPartToBeAdded) {
        // Set a random UUID for the MongoDB with a random UUID
        UUID uuid = UUID.randomUUID();
        String uuidAsString = uuid.toString();
        inquiryPartToBeAdded.setUuid(uuidAsString);
        // Add the InquiryPart to the users List of posted Offers
        // TODO: Add the inquiry Part to the List of the user who posted the item
        // Add the inquiryPart to the MongoDB
        return inquiryPartDb.save(inquiryPartToBeAdded);
    }

    public void deleteInquiryFromDatabase(String inquiryId) {
    inquiryPartDb.deleteById(inquiryId);
    }
}
