import BurgerMenu from "../components/BurgerMenu";
import TopBar from "../components/TopBar";
import {React, useEffect, useState} from 'react'
import styled from "styled-components/macro";
import {useParams} from "react-router-dom";
import {getInquiryById} from "../services/inquiryService";
import InquiryCard from "../components/InquiryCard";
import CreateOfferForm from "../components/CreateOfferForm";
import InquiryDetails from "./InquiryDetails";
import InquiryDetailsItem from "../components/InquiryDetailsItem";

export default function CreateOffer() {
    const {inquiryPartId} = useParams();
    const [inquiry, setInquiry] = useState("")
    useEffect(() => {
        getInquiryById(inquiryPartId)
            .then(setInquiry);
    }, [])

    return (
        <>
            <InquiryDetailsItem inquiry={inquiry} makeOffer={true}/>
            <CreateOfferForm/>
        </>
    )
}