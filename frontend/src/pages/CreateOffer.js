import BurgerMenu from "../components/BurgerMenu";
import TopBar from "../components/TopBar";
import { React, useEffect, useState } from 'react'
import styled from "styled-components/macro";
import {useParams} from "react-router-dom";
import {getInquiryById} from "../services/inquiryService";
import InquiryCard from "../components/InquiryCard";
import CreateOfferForm from "../components/CreateOfferForm";
import InquiryDetails from "./InquiryDetails";
import InquiryDetailsItem from "../components/InquiryDetailsItem";

export default function CreateOffer(){
    const {inquiryPartId} = useParams();
    const [inquiry, setInquiry] = useState("")
    useEffect(()=>{
        getInquiryById(inquiryPartId)
            .then(setInquiry);
    })

    return(
        <PageLayoutContainer>
            <BurgerMenu/>
            <Content>
                <TopBar/>
                <OfferContainer>
                    <InquiryDetailsItem inquiry={inquiry} makeOffer={true}/>
                     <CreateOfferForm/>
                </OfferContainer>
            </Content>
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

const OfferContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
`

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`