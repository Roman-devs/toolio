import FormReactHookCreateNewInquiry from "../components/FormReactHookCreateNewInquiry";
import {getInquiries, postInquiry} from "../services/inquiryService";
import React, {useEffect, useState} from "react";

export default function CreateNewInquiry() {
    const [inquiries, setInquiries] = useState([])

    useEffect(() => {
        getInquiries()
            .then(setInquiries)
            .catch((error) => console.error(error))
    }, [])

    const addNewInquiry = (inquiry) => {
        postInquiry(inquiry)
            .then((newInquiry) => {
                const updatedInquiries = [...inquiries, newInquiry]
                setInquiries(updatedInquiries);
            }).catch((error) => console.error(error))
            alert("Your Inquiry has been posted to the overview")
    }

    return (
                    <FormReactHookCreateNewInquiry onAdd={addNewInquiry}/>
    )
}