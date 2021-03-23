import {getInquiries, postInquiry} from "../services/inquiryService";
import { useEffect, useState } from 'react'
import FormReactHookCreateNewInquiry from "../components/FormReactHookCreateNewInquiry";
import InquiryList from "../components/InquiryList";
import InquiryCard from "../components/InquiryCard";

export default function InquiryOverview(){
    const [inquiries, setInquiries] = useState([])

    useEffect(()=>{
        getInquiries()
            .then(setInquiries)
            .catch((error) => console.error(error))
    })

    const addNewInquiry = (inquiry) => {
        postInquiry(inquiry)
            .then((newInquiry)=>{
                const updatedInquiries = [...inquiries, newInquiry]
                setInquiries(updatedInquiries);
            }) .catch((error) => console.error(error))
    }
    return(
        <>
            <InquiryCard/>
            {inquiries && <InquiryList inquiries={inquiries}/>}
            <FormReactHookCreateNewInquiry onAdd={addNewInquiry}/>
        </>

    )
}