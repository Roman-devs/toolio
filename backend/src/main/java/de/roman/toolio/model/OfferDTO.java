package de.roman.toolio.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OfferDTO {
    private String offerDescription; // From Frontend
    private String offerFIATamount; // From Frontend
    private String expectedDeliveryDate; // From Frontend
    private String offeringUserId;  // Created in Backend after check with DB
    private String inquiryPartId;   // From Frontend
}
