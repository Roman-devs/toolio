package de.roman.toolio.security;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserSecurityCredentialsDb extends PagingAndSortingRepository<UserSecurityCredentials, String> {
    List<UserSecurityCredentials> findAll();
}
