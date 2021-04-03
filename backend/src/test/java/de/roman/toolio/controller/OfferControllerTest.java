package de.roman.toolio.controller;

import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.db.OfferDb;
import de.roman.toolio.model.*;
import de.roman.toolio.db.AppUserDb;
import de.roman.toolio.security.UserSecurityCredentials;
import de.roman.toolio.security.UserSecurityCredentialsDb;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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

    @Autowired
    private UserSecurityCredentialsDb userSecurityCredentialsDb;

    @Autowired
    private PasswordEncoder encoder;

    @BeforeEach
    public void setup() {
        inquiryPartDb.deleteAll();
        offerDb.deleteAll();
    }

    private String getUrl() {
        return "http://localhost:" + port + "/offers";
    }

    private String loginToApp() {
        String password = encoder.encode("superSecretPassword");
        userSecurityCredentialsDb.save(UserSecurityCredentials.builder().username("Roman").password(password).build());
        ResponseEntity<String> loginResponse = testRestTemplate.postForEntity("http://localhost:" + port + "auth/login", new UserSecurityCredentials("Roman", "superSecretPassword"), String.class);
        return loginResponse.getBody();
    }

    @Test
    @DisplayName("Get all Offers from the database")
    public void getOfferListFromDatabase() {
        //GIVEN
        offerDb.save(Offer.builder()
                .offerId("1")
                .inquiryPartId("2")
                .ownerIdOfInquiry("3")
                .offeringUserId("4")
                .expectedDeliveryDate("2021-05-15")
                .build());
        offerDb.save(Offer.builder()
                .offerId("5")
                .inquiryPartId("6")
                .ownerIdOfInquiry("7")
                .offeringUserId("8")
                .expectedDeliveryDate("2021-05-16")
                .build());
        //WHEN
        HttpHeaders headers = new HttpHeaders();
        String token = loginToApp();
        headers.setBearerAuth(token);
        HttpEntity<InquiryPart> entity = new HttpEntity<>(headers);

        ResponseEntity<Offer[]> response = testRestTemplate.exchange(getUrl(), HttpMethod.GET,entity, Offer[].class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                Offer.builder()
                        .offerId("1")
                        .inquiryPartId("2")
                        .ownerIdOfInquiry("3")
                        .offeringUserId("4")
                        .expectedDeliveryDate("2021-05-15")
                        .build(),
                Offer.builder()
                        .offerId("5")
                        .inquiryPartId("6")
                        .ownerIdOfInquiry("7")
                        .offeringUserId("8")
                        .expectedDeliveryDate("2021-05-16")
                        .build())
        );
    }
    @Test
    @DisplayName("Adding a new offer should add to database")
    public void postNewOffer(){
        //GIVEN
        InquiryPart inquiryPartForOffer = InquiryPart.builder()
                .uuid("123")
                .partName("Gear Wheel")
                .partDescription("A Gear Wheel for testing")
                .length("100")
                .width("150")
                .height("120")
                .material("S355")
                .orderAmount("2")
                .latestDate("2021-04-15")
                .earliestDate("2021-04-10")
                .build();
        inquiryPartDb.save(inquiryPartForOffer);
        AppUser userThatPostedInquiry = AppUser.builder()
                .id("3")
                .name("Max")
                .username("Mustermann")
                .address("Musterstreet 25")
                .email("muster@mann.de")
                .inquiryPartIDs(new ArrayList<>(List.of("123")))
                .build();
        AppUser userThatMakesOffer = AppUser.builder()
                .id("1")
                .name("Roman")
                .username("Kuite")
                .address("Musterstreet 26")
                .email("muster@mann.de")
                .build();

        appUserDb.save(userThatPostedInquiry);
        appUserDb.save(userThatMakesOffer);
        OfferDTO offerToBeAdded = OfferDTO.builder()
                .offerDescription("An Offer made")
                .offerFIATamount("200")
                .expectedDeliveryDate("2021-04-15")
                .offeringUserId("1")
                .inquiryPartId("123")
                .build();
        //WHEN
        when(uuidGenerator.generateRandomUuid()).thenReturn("123");
        HttpHeaders headers = new HttpHeaders();
        String token = loginToApp();
        headers.setBearerAuth(token);
        HttpEntity<OfferDTO> entity = new HttpEntity<>(offerToBeAdded, headers);
        ResponseEntity<Offer> postResponse = testRestTemplate.postForEntity(getUrl(),entity,Offer.class);
        //THEN
        Offer expected = Offer.builder()
                .offerId("123")
                .inquiryPartId("123")
                .ownerIdOfInquiry("3")
                .offeringUserId("1")
                .offerDescription("An Offer made")
                .offerFIATamount("200")
                .expectedDeliveryDate("2021-04-15")
                .build();
        AppUser updatedOwnerOfInquiry = userThatPostedInquiry.toBuilder()
                .receivedOfferIDs(List.of("123"))
                .build();
        AppUser updatedOwnerOfOffer = userThatMakesOffer.toBuilder()
                .madeOfferIDs(new ArrayList<>(List.of("123")))
                .build();

        assertEquals(expected, postResponse.getBody());
        assertThat(appUserDb.findById("3").get(), is(updatedOwnerOfInquiry));
        assertThat(appUserDb.findById("1").get(), is(updatedOwnerOfOffer));
    }
}
