package de.roman.toolio.service;

import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.db.OfferDb;
import de.roman.toolio.model.Offer;
import de.roman.toolio.model.UuidGenerator;
import de.roman.toolio.security.AppUserDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {
    private final InquiryPartDb inquiryPartDb;
    private final AppUserDb appUserDb;
    private final UuidGenerator uuidgenerator;
    private final OfferDb offerDb;

    @Autowired
    public OfferService(InquiryPartDb inquiryPartDb, AppUserDb appUserDb, UuidGenerator uuidgenerator, OfferDb offerDb) {
        this.inquiryPartDb = inquiryPartDb;
        this.appUserDb = appUserDb;
        this.uuidgenerator = uuidgenerator;
        this.offerDb = offerDb;
    }

    public Offer getOfferById(String offerId) {
        return offerDb.findById(offerId).get();
    }

    public List<Offer> getReceivedOffersByUserId(String userId) {
        return offerDb.findAllByOwnerId(userId);
    }

    public List<Offer> getAllOffersOfDatabase() {
        return offerDb.findAll();
    }

    public List<Offer> getReceivedOffersByPosterId(String posterId) {
        return offerDb.findAllByPosterId(posterId);
    }
}
