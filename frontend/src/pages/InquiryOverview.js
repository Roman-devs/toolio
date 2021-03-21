import {postInquiry} from "../services/inquiryService";
import { useEffect, useState } from 'react'
import FormReactHookCreateNewInquiry from "../components/FormReactHookCreateNewInquiry";

export default function InquiryOverview(){
    const [inquiries, setInquiries] = useState([])

    const addNewInquiry = (inquiry) => {
        postInquiry(inquiry)
            .then((newInquiry)=>{
                const updatedInquiries = [...inquiries, newInquiry]
                setInquiries(updatedInquiries);
            }) .catch((error) => console.error(error))
    }
    return(
        <>
            <FormReactHookCreateNewInquiry onAdd={addNewInquiry}/>
        </>

    )
}