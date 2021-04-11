import FormReactHookCreateNewInquiry from "../components/FormReactHookCreateNewInquiry";
import {getInquiries, postInquiry} from "../services/inquiryService";
import React, {useEffect, useState} from "react";
import styled from "styled-components/macro";

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

const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  background-color: whitesmoke;
`

const ItemContainer = styled.div`
  overflow-y: scroll;
`

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;
  height: 100vh
`