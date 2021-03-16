package de.roman.toolio.db;

import de.roman.toolio.model.InquiryPart;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface InquiryPartDb extends PagingAndSortingRepository<InquiryPart, String>{
    List<InquiryPart> findAll();
}
