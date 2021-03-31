package de.roman.toolio.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Document(collection="offers")

public class Offer {
    @Id
    private String offerId;
    private String inquiryPartId;
    private String ownerIdOfInquiry;
    private String offeringUserId;
    private String expectedDeliveryDate;
    private String offerDescription;
    private String offerFIATamount;
}
