package de.roman.toolio.controller;


import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.model.InquiryPart;
import de.roman.toolio.model.UuidGenerator;
import de.roman.toolio.model.AppUser;
import de.roman.toolio.db.AppUserDb;
import de.roman.toolio.security.UserSecurityCredentials;
import de.roman.toolio.security.UserSecurityCredentialsDb;
import de.roman.toolio.service.InquiryPartService;
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


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class InquiryPartControllerTest {

    @LocalServerPort
    private int port;

    @MockBean
    private RestTemplate restTemplate;

    @MockBean
    private UuidGenerator uuidGenerator;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private InquiryPartDb inquiryPartDb;

    @Autowired
    private UserSecurityCredentialsDb userSecurityCredentialsDb;

    @Autowired
    private AppUserDb appUserDb;

    @Autowired
    private PasswordEncoder encoder;

    @BeforeEach
    public void setup() {
        inquiryPartDb.deleteAll();
        appUserDb.deleteAll();
        userSecurityCredentialsDb.deleteAll();
    }

    private String getUrl() {
        return "http://localhost:" + port + "/inquiries";
    }

//    private final UuidGenerator uuidGenerator = mock(UuidGenerator.class);

    private String loginToApp() {
        String password = encoder.encode("superSecretPassword");
        userSecurityCredentialsDb.save(UserSecurityCredentials.builder().username("Mustermann").password(password).build());
        ResponseEntity<String> loginResponse = testRestTemplate.postForEntity("http://localhost:" + port + "auth/login", new UserSecurityCredentials("Mustermann", "superSecretPassword"), String.class);
        return loginResponse.getBody();
    }

    @Test
    @DisplayName("Get all Inquiries from the InquiryPartDb")
    public void getInquiryListFromDatabase() {
        // Given
        inquiryPartDb.save(InquiryPart.builder()
                .uuid("123")
                .partName("foo")
                .partDescription("bar")
                .length("25")
                .width("25")
                .height("25")
                .material("S355")
                .orderAmount("5")
                .build());
        inquiryPartDb.save(InquiryPart.builder()
                .uuid("345")
                .partName("so")
                .partDescription("cool")
                .length("35")
                .width("35")
                .height("35")
                .material("S355")
                .orderAmount("3")
                .build());
        // When
        HttpHeaders headers = new HttpHeaders();
        String token = loginToApp();
        headers.setBearerAuth(token);
        HttpEntity<InquiryPart> entity = new HttpEntity<>(headers);

        ResponseEntity<InquiryPart[]> response = testRestTemplate.exchange(getUrl(), HttpMethod.GET, entity, InquiryPart[].class);
        // Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                InquiryPart.builder()
                        .uuid("123")
                        .partName("foo")
                        .partDescription("bar")
                        .length("25")
                        .width("25")
                        .height("25")
                        .material("S355")
                        .orderAmount("5")
                        .build(),
                InquiryPart.builder()
                        .uuid("345")
                        .partName("so")
                        .partDescription("cool")
                        .length("35")
                        .width("35")
                        .height("35")
                        .material("S355")
                        .orderAmount("3")
                        .build()))
        ;
    }

    @Test
    @DisplayName("Get Inquiry By Id")
    public void getInquiryById(){
        // Given
        inquiryPartDb.save(InquiryPart.builder()
                .uuid("123")
                .partName("foo")
                .partDescription("bar")
                .length("25")
                .width("25")
                .height("25")
                .material("S355")
                .orderAmount("5")
                .build());
        inquiryPartDb.save(InquiryPart.builder()
                .uuid("345")
                .partName("so")
                .partDescription("cool")
                .length("35")
                .width("35")
                .height("35")
                .material("S355")
                .orderAmount("3")
                .build());
        // When
        HttpHeaders headers = new HttpHeaders();
        String token = loginToApp();
        headers.setBearerAuth(token);
        HttpEntity<InquiryPart> entity = new HttpEntity<>(headers);

        ResponseEntity<InquiryPart> response = testRestTemplate.exchange(getUrl()+"/345", HttpMethod.GET, entity, InquiryPart.class);
        // Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(
                InquiryPart.builder()
                        .uuid("345")
                        .partName("so")
                        .partDescription("cool")
                        .length("35")
                        .width("35")
                        .height("35")
                        .material("S355")
                        .orderAmount("3")
                        .build()))
        ;
    }

    @Test
    @DisplayName("Post an inquiry to the database")
    public void postNewInquiry() {
        // GIVEN
        AppUser appUser = AppUser.builder()
                .id("5")
                .address("Strese165")
                .name("Hans")
                .username("Mustermann")
                .email("Hans@Mustermann.de")
                .build();
        appUserDb.save(appUser);

        InquiryPart requestEntity =
                InquiryPart.builder()
                        .partName("so")
                        .partDescription("cool")
                        .length("35")
                        .width("35")
                        .height("35")
                        .material("S355")
                        .orderAmount("3")
                        .build();
        // WHEN
        when(uuidGenerator.generateRandomUuid()).thenReturn("345");
        HttpHeaders headers = new HttpHeaders();
        String token = loginToApp();
        headers.setBearerAuth(token);
        HttpEntity<InquiryPart> entity = new HttpEntity<>(requestEntity, headers);
        ResponseEntity<InquiryPart> postResponse = testRestTemplate.postForEntity(getUrl(),entity,InquiryPart.class);
//        postResponse.getBody().setUuid("345");
        // THEN
        assertThat(postResponse.getStatusCode(), is(HttpStatus.OK));
        assertEquals(InquiryPart.builder()
                .uuid("345")
                .partName("so")
                .partDescription("cool")
                .length("35")
                .width("35")
                .height("35")
                .material("S355")
                .orderAmount("3")
                .build(), postResponse.getBody());
    }

    @Test
    @DisplayName("Delete an inquiry from the database")
    public void deleteAnInquiry() {
        // GIVEN
        inquiryPartDb.save( InquiryPart.builder()
                .uuid("345")
                .partName("so")
                .partDescription("cool")
                .length("35")
                .width("35")
                .height("35")
                .material("S355")
                .orderAmount("3")
                .build());
        // WHEN
        HttpHeaders headers = new HttpHeaders();
        String token = loginToApp();
        headers.setBearerAuth(token);
        HttpEntity<InquiryPart> entity = new HttpEntity<>(headers);
        // WHEN
        ResponseEntity<InquiryPart> response = testRestTemplate.exchange(
                getUrl() +"/345", HttpMethod.DELETE, entity, InquiryPart.class
        );
        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(inquiryPartDb.existsById("345"), is(false));
    }
}
