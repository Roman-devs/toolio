import {getInquiries, postInquiry} from "../services/inquiryService";
import React, {useEffect, useState} from 'react'
import styled from 'styled-components/macro';
import InquiryList from "../components/InquiryList";
import {useAuth} from "../auth/AuthContext";
import {getAllOffers} from "../services/offerService";

export default function InquiryOverview() {
    const [inquiries, setInquiries] = useState([])
    const [offers, setOffers] = useState([])
    const{ token } = useAuth();

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