package de.roman.toolio.security;

import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.model.InquiryPart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
