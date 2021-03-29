package de.roman.toolio.controller;

import de.roman.toolio.model.Offer;
import de.roman.toolio.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/offers")
public class OfferController {

    private final OfferService offerService;

    @Autowired
    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping
    public List<Offer> getAllOffersOfDataBase(){
        return offerService.getAllOffersOfDatabase();
    }

    @GetMapping("offer/{offerId}")
    public Offer getOfferById(@PathVariable String offerId){
        return offerService.getOfferById(offerId);
    }

    @GetMapping("owner/{userId}")
    public List<Offer> getReceivedOffersByUserId(@PathVariable String userId){
        return offerService.getReceivedOffersByUserId(userId);
    }

    @GetMapping("poster/{posterId}")
    public List<Offer> getReceivedOffersByPosterId(@PathVariable String posterId){
        return offerService.getReceivedOffersByPosterId(posterId);
    }

}
