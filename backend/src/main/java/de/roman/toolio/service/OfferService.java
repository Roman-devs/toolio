package de.roman.toolio.service;

import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.db.OfferDb;
import de.roman.toolio.model.Offer;
import de.roman.toolio.model.OfferDTO;
import de.roman.toolio.model.UuidGenerator;
import de.roman.toolio.model.AppUser;
import de.roman.toolio.db.AppUserDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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



    public List<Offer> getAllOffersOfDatabase() {
        return offerDb.findAll();
    }

    public List<Offer> getReceivedOffersByPostingUserId(String postingUserId) {
        return offerDb.findAllByOfferingUserId(postingUserId);
    }

    public Optional<Offer> postNewOffer(OfferDTO offerDTO, String name) {
        String offerId = uuidgenerator.generateRandomUuid();
        // name: 'Max' in UserSecurityCredentials
        String offeringUserId = appUserDb.findAppUserByUsername(name).getId();
        offerDTO.setOfferingUserId(offeringUserId);
        Offer offerToBeAdded = Offer.builder()
                .offerDescription(offerDTO.getOfferDescription())
                .offerFIATamount(offerDTO.getOfferFIATamount())
                .expectedDeliveryDate(offerDTO.getExpectedDeliveryDate())
                .offerId(offerId)
                .inquiryPartId(offerDTO.getInquiryPartId())
                .ownerIdOfInquiry("")
                .offeringUserId(offerDTO.getOfferingUserId()) // TODO
                .build();
        if (inquiryPartDb.existsById(offerDTO.getInquiryPartId())) {
            // UPDATE THE USER THAT IS THE OWNER OF THE INQUIRY WITH THE OFFER ID THAT IS POSTED
            AppUser ownerOfInquiry = appUserDb.findByInquiryPartIDsContaining(offerDTO.getInquiryPartId());  // 8acfa519-7e9f-4dbe-b3cb-83d3bebce7c1
            List<String> updatedListOfReceivedOffers = ownerOfInquiry.getReceivedOfferIDs();
            updatedListOfReceivedOffers.add(offerId);
            AppUser updatedOwnerofInquiry = ownerOfInquiry.toBuilder().receivedOfferIDs(updatedListOfReceivedOffers).build();
            // UPDATE THE USER THAT IS POSTING THE OFFER WITH THE OFFER ID THAT IS POSTED
            AppUser postingUserOfOffer = appUserDb.findById(offerDTO.getOfferingUserId()).get(); // TODO
            List<String> updatedListOfMadeOffers = postingUserOfOffer.getMadeOfferIDs();
            updatedListOfMadeOffers.add(offerId);
            AppUser updatedOfferingUser = postingUserOfOffer.toBuilder().madeOfferIDs(updatedListOfMadeOffers).build();
            // SAVE BOTH USERS TO THE DATABASE
            appUserDb.save(updatedOwnerofInquiry);
            appUserDb.save(updatedOfferingUser);
            // UPDATE THE OFFER WITH THE ID OF THE INQUIRY OWNER
            offerToBeAdded.setOwnerIdOfInquiry(ownerOfInquiry.getId());
            // SAVE THE OFFER TO THE DATABASE
            offerDb.save(offerToBeAdded);
            return Optional.of(offerToBeAdded);
        }
        return Optional.empty();

    }

    public List<Offer> getReceivedOffersByUserAuth(String usernameFromAuth) {
        AppUser authUser = appUserDb.findAppUserByUsername(usernameFromAuth);
        return offerDb.findAllByOwnerIdOfInquiry(authUser.getId());
    }

    public List<Offer> getMadeOffersByUserAuth(String usernameFromAuth) {
        AppUser authUser = appUserDb.findAppUserByUsername(usernameFromAuth);
        return offerDb.findAllByOfferingUserId(authUser.getId());
    }
}
