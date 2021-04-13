import {useState, useEffect} from "react";
import {getAllReceivedOffersByAuth} from "../services/offerService";
import styled from "styled-components/macro";
import {getUserInquiries} from "../services/inquiryService";
import MyInquiryList from "../components/MyInquiryList";

export default function MyInquiriyOverview(){
    const [offers, setOffers] = useState([])
    const [inquiries, setInquiries] = useState([])

    useEffect(()=> {
        getAllReceivedOffersByAuth()
            .then(setOffers);
        getUserInquiries()
            .then(setInquiries);
    },[])

    return(
        <>
            {inquiries && offers && <MyInquiryList inquiries={inquiries} offers={offers} makeOffer={false}/>}
        </>
    )
}
