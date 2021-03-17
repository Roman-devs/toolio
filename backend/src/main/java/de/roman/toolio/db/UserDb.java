package de.roman.toolio.db;

import de.roman.toolio.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserDb extends PagingAndSortingRepository<User, String> {
List<User> findAll();
}
