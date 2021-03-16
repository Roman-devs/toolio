package de.roman.toolio.controller;

import de.roman.toolio.model.InquiryPart;
import de.roman.toolio.security.InquiryPartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

}
