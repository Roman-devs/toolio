package de.roman.toolio.controller;


import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.model.InquiryPart;
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


import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class InquiryPartControllerTest {

    @LocalServerPort
    private int port;

    @MockBean
    private RestTemplate restTemplate;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private InquiryPartDb inquiryPartDb;

    @BeforeEach
    public void setup() {
        inquiryPartDb.deleteAll();
    }

    private String getUrl() {
        return "http://localhost:" + port + "/inquiries";
    }


    @Test
    @DisplayName("Get all Inquiries from the InquiryPartDb")
    public void getInquiryListFromDatabase() {
        // Given
        inquiryPartDb.save(InquiryPart.builder()
                .uuid("123")
                .partName("foo")
                .partDescription("bar")
                .lengthPart("25")
                .widthPart("25")
                .heightPart("25")
                .materialPart("S355")
                .amountPart("5")
                .build());
        inquiryPartDb.save(InquiryPart.builder()
                .uuid("345")
                .partName("so")
                .partDescription("cool")
                .lengthPart("35")
                .widthPart("35")
                .heightPart("35")
                .materialPart("S355")
                .amountPart("3")
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
                        .lengthPart("25")
                        .widthPart("25")
                        .heightPart("25")
                        .materialPart("S355")
                        .amountPart("5")
                        .build(),
                InquiryPart.builder()
                        .uuid("345")
                        .partName("so")
                        .partDescription("cool")
                        .lengthPart("35")
                        .widthPart("35")
                        .heightPart("35")
                        .materialPart("S355")
                        .amountPart("3")
                        .build()))
        ;
    }

    @Test
    @DisplayName("Post an inquiry to the database")
    public void postNewInquiry() {
        // GIVEN
        HttpEntity<InquiryPart> requestEntity = new HttpEntity<>(
                InquiryPart.builder()
                        .uuid("345")
                        .partName("so")
                        .partDescription("cool")
                        .lengthPart("35")
                        .widthPart("35")
                        .heightPart("35")
                        .materialPart("S355")
                        .amountPart("3")
                        .build()
        );
        // WHEN
        ResponseEntity<InquiryPart> postResponse = testRestTemplate.exchange(
                getUrl(), HttpMethod.POST, requestEntity, InquiryPart.class
        );
        postResponse.getBody().setUuid("345");
        // THEN
        assertThat(postResponse.getStatusCode(), is(HttpStatus.OK));
        assertEquals(InquiryPart.builder()
                .uuid("345")
                .partName("so")
                .partDescription("cool")
                .lengthPart("35")
                .widthPart("35")
                .heightPart("35")
                .materialPart("S355")
                .amountPart("3")
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
                .lengthPart("35")
                .widthPart("35")
                .heightPart("35")
                .materialPart("S355")
                .amountPart("3")
                .build());
        // WHEN
        HttpEntity<InquiryPart> entity = new HttpEntity<>(InquiryPart.builder()
                .uuid("345")
                .partName("so")
                .partDescription("cool")
                .lengthPart("35")
                .widthPart("35")
                .heightPart("35")
                .materialPart("S355")
                .amountPart("3")
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
