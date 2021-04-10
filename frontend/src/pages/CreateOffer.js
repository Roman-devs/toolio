import {React, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getInquiryById} from "../services/inquiryService";
import CreateOfferForm from "../components/CreateOfferForm";
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