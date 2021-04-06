package de.roman.toolio.controller;

import de.roman.toolio.model.Offer;
import de.roman.toolio.model.OfferDTO;
import de.roman.toolio.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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

    @GetMapping("myoffers")
    public List<Offer> getReceivedOffersByJwtAuth(Authentication authentication){
        return offerService.getReceivedOffersByUserAuth(authentication.getName());
    }

    @GetMapping("poster/{postingUserId}")
    public List<Offer> getReceivedOffersByPosterId(@PathVariable String postingUserId){
        return offerService.getReceivedOffersByPostingUserId(postingUserId);
    }

    @PostMapping
    public Offer postNewOffer(@RequestBody OfferDTO offerDto, Authentication authentication){
        return offerService.postNewOffer(offerDto, authentication.getName()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Inquiry does not exist anymore"));
    }
}
