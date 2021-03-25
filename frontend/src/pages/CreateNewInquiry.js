import FormReactHookCreateNewInquiry from "../components/FormReactHookCreateNewInquiry";
import {getInquiries, postInquiry} from "../services/inquiryService";
import React, {useEffect, useState} from "react";
import BurgerMenu from "../components/BurgerMenu";
import styled from "styled-components/macro";
import InquiryList from "../components/InquiryList";


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
        <PageLayoutContainer>
            <BurgerMenu/>
            <ItemContainer>
                <FormReactHookCreateNewInquiry onAdd={addNewInquiry}/>
            </ItemContainer>
            {/*<FormReactHookCreateNewInquiry onAdd={addNewInquiry}/>*/}
        </PageLayoutContainer>
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
  flex-grow: 0.1;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
`