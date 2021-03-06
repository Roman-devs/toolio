package de.roman.toolio.db;

import de.roman.toolio.model.Offer;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface OfferDb extends PagingAndSortingRepository<Offer, String> {
    List<Offer> findAll();
    List<Offer> findAllByOwnerIdOfInquiry(String ownerIdOfOffer);
    List<Offer> findAllByOfferingUserId(String offeringUserId);
}
