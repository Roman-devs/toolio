import BurgerMenu from "../components/BurgerMenu";
import TopBar from "../components/TopBar";
import InquiryList from "../components/InquiryList";
import {React, useEffect, useState} from 'react'
import styled from "styled-components/macro";
import {useParams} from "react-router-dom";
import {getInquiryById, getUserInquiries} from "../services/inquiryService";
import InquiryCard from "../components/InquiryCard";
import InquiryDetailsItem from "../components/InquiryDetailsItem";
import OfferList from "../components/OfferList";
import {getAllReceivedOffersByAuth} from "../services/offerService";
import OfferListFinal from "../components/OfferListFinal";
import MyInquiryDetailsItem from "../components/Menu/MyInquiriyDetailsItem";


export default function MyInquiryDetails() {
    const [inquiry, setInquiry] = useState("")
    const {inquiryPartId} = useParams();



    useEffect(() => {
        getInquiryById(inquiryPartId).then(setInquiry)
    }, [])

    return (
        <>
            {inquiry && <MyInquiryDetailsItem inquiry={inquiry} makeOffer={false}/>}
            <OfferListFinal/>
        </>
    )
}


