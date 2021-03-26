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
@Builder
@Document(collection="inquiryParts")
public class InquiryPart {

    @Id
    private String uuid;
    // Specification for the user card
    private String partName;
    private String partDescription;
    // Dimensions
    private String length;
    private String width;
    private String height;
    // Material used for production
    private String material;
    // Amount of Parts that are desired
    private String orderAmount;
    // Delivery Dates
    private String latestDate;
    private String earliestDate;
    // Pictures to be uploaded
    // Intentionally left blank - to be implemented
}
