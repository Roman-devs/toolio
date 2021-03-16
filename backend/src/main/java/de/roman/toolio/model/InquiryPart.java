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
    // Specification for the user card
    @Id
    private String partName;
    private String partDescription;
    // Dimensions
    private String lengthPart;
    private String widthPart;
    private String heightPart;
    // Material used for production
    private String materialPart;
    // Amount of Parts that are desired
    private String amountPart;
    // Pictures to be uploaded
    // Intentionally left blank - to be implemented
}
