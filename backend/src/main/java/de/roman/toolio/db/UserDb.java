package de.roman.toolio.db;

import de.roman.toolio.security.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserDb extends PagingAndSortingRepository<AppUser, String> {
List<AppUser> findAll();
}