package de.roman.toolio.security;

import de.roman.toolio.model.InquiryPart;
import de.roman.toolio.model.Offer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Document(collection="users")
public class AppUser {
    @Id
    private String id;
    private String name;
    private String address;
    private String email;
    private List<String> inquiryPartIDs;
    private List<String> receivedOfferIDs;
    private List<String> madeOfferIDs;

    public List<String> getInquiryPartIDs() {
        if(this.inquiryPartIDs == null){
            return new ArrayList<>();
        }
        return inquiryPartIDs;
    }
}
