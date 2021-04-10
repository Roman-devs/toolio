import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getInquiryById} from "../services/inquiryService";
import InquiryDetailsItem from "../components/InquiryDetailsItem";
import OfferListFinal from "../components/OfferListFinal";


export default function InquiryDetails() {
    const [inquiry, setInquiry] = useState("")
    const {inquiryPartId} = useParams();



    useEffect(() => {
        getInquiryById(inquiryPartId).then(setInquiry)
    }, [])

    return (
        <>
            {inquiry && <InquiryDetailsItem inquiry={inquiry} makeOffer={false}/>}
            <OfferListFinal/>
        </>
    )
}


