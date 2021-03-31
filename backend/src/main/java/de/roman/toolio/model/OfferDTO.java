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
    private String offerDescription;
    private String offerFIATamount;
    private String expectedDeliveryDate;
    private String offeringUserId;
    private String inquiryPartId;
}
