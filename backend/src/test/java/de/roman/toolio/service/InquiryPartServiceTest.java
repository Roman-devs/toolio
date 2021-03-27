package de.roman.toolio.service;

import de.roman.toolio.db.InquiryPartDb;
import de.roman.toolio.model.InquiryPart;
import de.roman.toolio.model.UuidGenerator;
import de.roman.toolio.security.AppUser;
import de.roman.toolio.security.AppUserDb;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;

class InquiryPartServiceTest {
    private final InquiryPartDb inquiryPartDb = mock(InquiryPartDb.class);
    private final AppUserDb appUserDb = mock(AppUserDb.class);
    private final UuidGenerator uuidGenerator = mock(UuidGenerator.class);
    private final InquiryPartService inquiryPartService = new InquiryPartService(inquiryPartDb, appUserDb, uuidGenerator);

    @Test
    @DisplayName("List Inquiry Parts should return all Inquiry Parts in the database")
    public void listInquiryParts() {
        //GIVEN
        when(inquiryPartDb.findAll()).thenReturn(List.of(
                InquiryPart.builder()
                        .uuid("123")
                        .partName("Gear1")
                        .partDescription("Some Description")
                        .length("165")
                        .width("120")
                        .height("15")
                        .material("S355")
                        .orderAmount("1")
                        .earliestDate("2021-04-15")
                        .latestDate("2021-08-19")
                        .build(),
                InquiryPart.builder()
                        .uuid("234")
                        .partName("Gear2")
                        .partDescription("Some Other Description")
                        .length("155")
                        .width("130")
                        .height("20")
                        .material("S325")
                        .orderAmount("5")
                        .earliestDate("2021-05-15")
                        .latestDate("2021-09-19")
                        .build()));
        //WHEN
        List<InquiryPart> inquiryParts = inquiryPartService.listInquiryParts();
        //THEN
        assertThat(inquiryParts, containsInAnyOrder(
                InquiryPart.builder()
                        .uuid("123")
                        .partName("Gear1")
                        .partDescription("Some Description")
                        .length("165")
                        .width("120")
                        .height("15")
                        .material("S355")
                        .orderAmount("1")
                        .earliestDate("2021-04-15")
                        .latestDate("2021-08-19")
                        .build(),
                InquiryPart.builder()
                        .uuid("234")
                        .partName("Gear2")
                        .partDescription("Some Other Description")
                        .length("155")
                        .width("130")
                        .height("20")
                        .material("S325")
                        .orderAmount("5")
                        .earliestDate("2021-05-15")
                        .latestDate("2021-09-19")
                        .build()
        ));
    }

    @Test
    @DisplayName("Adding an inquiry Part to the Database")
    public void testAddNewInquiryPart() {
        //GIVEN
        InquiryPart inquiryPartToBeAdded = InquiryPart.builder()
                .uuid("4")
                .partName("Gear1")
                .partDescription("Some Description")
                .length("165")
                .width("120")
                .height("15")
                .material("S355")
                .orderAmount("1")
                .earliestDate("2021-04-15")
                .latestDate("2021-08-19")
                .build();

        when(uuidGenerator.generateRandomUuid()).thenReturn("123");
        when(appUserDb.findById("1")).thenReturn(
                Optional.of(AppUser.builder()
                        .id("5")
                        .email("max@mustermann.de")
                        .address("Musterstrasse 1")
                        .name("Max Mustermann")
                        .inquiryPartIDs(List.of("1", "2", "3"))
                        .build()));
        AppUser mockUser = AppUser.builder()
                .id("5")
                .email("max@mustermann.de")
                .address("Musterstrasse 1")
                .name("Max Mustermann")
                .inquiryPartIDs(List.of("1", "2", "3"))
                .build();
        when(appUserDb.save(mockUser)).thenReturn(mockUser);
        //WHEN
        InquiryPart actual = inquiryPartService.addInquiry(inquiryPartToBeAdded, "1");
        //THEN

        verify(inquiryPartDb).save(inquiryPartToBeAdded);
    }
}
