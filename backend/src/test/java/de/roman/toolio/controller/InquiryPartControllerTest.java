package de.roman.toolio.controller;


import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.model.InquiryPart;
import de.roman.toolio.model.UuidGenerator;
import de.roman.toolio.security.AppUser;
import de.roman.toolio.security.AppUserDb;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

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
    private AppUserDb appUserDb;

    @BeforeEach
    public void setup() {
        inquiryPartDb.deleteAll();
    }

    private String getUrl() {
        return "http://localhost:" + port + "/inquiries";
    }

//    private final UuidGenerator uuidGenerator = mock(UuidGenerator.class);


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
        ResponseEntity<InquiryPart[]> response = testRestTemplate.getForEntity(getUrl(), InquiryPart[].class);
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
        ResponseEntity<InquiryPart> response = testRestTemplate.getForEntity(getUrl()+"/345", InquiryPart.class);
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
                .email("Hans@Mustermann.de")
                .build();
        appUserDb.save(appUser);
        // Add User with ID 5 to Database
        HttpEntity<InquiryPart> requestEntity = new HttpEntity<>(
                InquiryPart.builder()
                        .partName("so")
                        .partDescription("cool")
                        .length("35")
                        .width("35")
                        .height("35")
                        .material("S355")
                        .orderAmount("3")
                        .build()
        );
        // WHEN
        when(uuidGenerator.generateRandomUuid()).thenReturn("345");
        ResponseEntity<InquiryPart> postResponse = testRestTemplate.postForEntity(getUrl(),requestEntity,InquiryPart.class);
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
        HttpEntity<InquiryPart> entity = new HttpEntity<>(InquiryPart.builder()
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
        ResponseEntity<InquiryPart> response = testRestTemplate.exchange(
                getUrl() +"/345", HttpMethod.DELETE, entity, InquiryPart.class
        );
        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(inquiryPartDb.existsById("345"), is(false));
    }
}
