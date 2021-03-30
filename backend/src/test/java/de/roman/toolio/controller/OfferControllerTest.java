package de.roman.toolio.controller;

import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.db.OfferDb;
import de.roman.toolio.model.Offer;
import de.roman.toolio.model.UuidGenerator;
import de.roman.toolio.security.AppUserDb;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OfferControllerTest {

    @LocalServerPort
    private int port;

    @MockBean
    private RestTemplate restTemplate;

    @MockBean
    private UuidGenerator uuidGenerator;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private OfferDb offerDb;

    @Autowired
    private InquiryPartDb inquiryPartDb;

    @Autowired
    private AppUserDb appUserDb;

    @BeforeEach
    public void setup() {
        inquiryPartDb.deleteAll();
        offerDb.deleteAll();
    }

    private String getUrl() {
        return "http://localhost:" + port + "/offers";
    }

    @Test
    @DisplayName("Get all Offers from the database")
    public void getOfferListFromDatabase() {
        //GIVEN
        offerDb.save(Offer.builder()
                .offerId("1")
                .inquiryPartId("2")
                .ownerId("3")
                .posterId("4")
                .expectedDeliveryDate("2021-05-15")
                .build());
        offerDb.save(Offer.builder()
                .offerId("5")
                .inquiryPartId("6")
                .ownerId("7")
                .posterId("8")
                .expectedDeliveryDate("2021-05-16")
                .build());
        //WHEN
        ResponseEntity<Offer[]> response = testRestTemplate.getForEntity(getUrl(), Offer[].class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                Offer.builder()
                        .offerId("1")
                        .inquiryPartId("2")
                        .ownerId("3")
                        .posterId("4")
                        .expectedDeliveryDate("2021-05-15")
                        .build(),
                Offer.builder()
                        .offerId("5")
                        .inquiryPartId("6")
                        .ownerId("7")
                        .posterId("8")
                        .expectedDeliveryDate("2021-05-16")
                        .build())
        );
    }
}
