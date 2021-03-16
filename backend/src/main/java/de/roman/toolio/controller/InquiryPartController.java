package de.roman.toolio.controller;

import de.roman.toolio.model.InquiryPart;
import de.roman.toolio.service.InquiryPartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public InquiryPart addInquiry(@RequestBody InquiryPart inquiryPartToBeAdded){
        return this.inquiryPartService.addInquiry(inquiryPartToBeAdded);
    }


}
