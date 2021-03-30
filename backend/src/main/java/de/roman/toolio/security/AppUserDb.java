package de.roman.toolio.security;

import de.roman.toolio.model.Offer;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface AppUserDb extends PagingAndSortingRepository<AppUser, String> {
    List<AppUser> findAll();
    AppUser findByInquiryPartIDsContaining(String inquiryPartId);
}
