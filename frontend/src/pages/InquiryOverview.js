import {postInquiry} from "../services/inquiryService";
import { useEffect, useState } from 'react'

export default function InquiryOverview(){
    const [inquiries, setInquiries] = useState([])

    const addNewInquiry = (inquiry) => {
        postInquiry(inquiry)
            .then((newInquiry)=>{
                const updatedInquiries = [...inquiries, newInquiry]
                setInquiries(updatedInquiries);
            })
    }
    return(
        <>

        </>

    )
}