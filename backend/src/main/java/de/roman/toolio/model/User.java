package de.roman.toolio.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection="users")
public class User {
    private String username;
    private String address;
    private String email;
    private List<InquiryPart> listOfInquiryParts;
}
