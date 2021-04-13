import {getInquiries} from "../services/inquiryService";
import React, {useEffect, useState} from 'react'
import InquiryList from "../components/InquiryList";
import {getAllOffers} from "../services/offerService";

export default function InquiryOverview() {
    const [inquiries, setInquiries] = useState([])
    const [offers, setOffers] = useState([])

    useEffect(() => {
        getAllOffers()
            .then(setOffers);
        getInquiries()
            .then(setInquiries)
            .catch((error) => console.error(error))
    }, [])

    return (
                <>
                        {inquiries && offers && <InquiryList inquiries={inquiries} offers={offers} makeOffer={true}/>}
                </>
    )
}