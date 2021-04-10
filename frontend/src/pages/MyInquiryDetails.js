import { useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getInquiryById} from "../services/inquiryService";
import OfferListFinal from "../components/OfferListFinal";
import MyInquiryDetailsItem from "../components/MyInquiriyDetailsItem";


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


