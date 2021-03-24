import FormReactHookCreateNewInquiry from "../components/FormReactHookCreateNewInquiry";
import {getInquiries, postInquiry} from "../services/inquiryService";
import {useEffect, useState} from "react";
import BurgerMenu from "../components/BurgerMenu";


export default function CreateNewInquiry(){
    const [inquiries, setInquiries] = useState([])

    useEffect(()=>{
        getInquiries()
            .then(setInquiries)
            .catch((error) => console.error(error))
    },[])

    const addNewInquiry = (inquiry) => {
        postInquiry(inquiry)
            .then((newInquiry)=>{
                const updatedInquiries = [...inquiries, newInquiry]
                setInquiries(updatedInquiries);
            }) .catch((error) => console.error(error))
    }

    return(
        <>
            <BurgerMenu/>
            <FormReactHookCreateNewInquiry onAdd={addNewInquiry}/>
        </>
    )
}