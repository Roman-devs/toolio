package de.roman.toolio.db;

import de.roman.toolio.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface AppUserDb extends PagingAndSortingRepository<AppUser, String> {
    List<AppUser> findAll();
    AppUser findByInquiryPartIDsContaining(String inquiryPartId);

    AppUser findAppUserByUsername(String username);
}
