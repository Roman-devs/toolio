package de.roman.toolio.controller;

import de.roman.toolio.model.InquiryPart;
import de.roman.toolio.service.InquiryPartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/inquiries")
public class InquiryPartController {

    private final InquiryPartService inquiryPartService;

    @Autowired
    public InquiryPartController(InquiryPartService inquiryPartService) {
        this.inquiryPartService = inquiryPartService;
    }

    @GetMapping
    public List<InquiryPart> listInquiryParts() {
        return inquiryPartService.listInquiryParts();
    }

    @GetMapping("{id}")
    public InquiryPart getInquiryById(@PathVariable String id){
        return inquiryPartService.getInquiryById(id);
    }

    @PostMapping
    public InquiryPart addInquiry(@RequestBody InquiryPart inquiryPartToBeAdded, Authentication authentication){
        return this.inquiryPartService.addInquiry(inquiryPartToBeAdded, authentication.getName()).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "user not found"));
    }

    @DeleteMapping("{id}")
    public void deleteInquiry(@PathVariable String id){
        inquiryPartService.deleteInquiryFromDatabase(id);
    }
}
