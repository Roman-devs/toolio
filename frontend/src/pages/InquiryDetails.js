import BurgerMenu from "../components/BurgerMenu";
import TopBar from "../components/TopBar";
import InquiryList from "../components/InquiryList";
import { React, useEffect, useState } from 'react'
import styled from "styled-components/macro";
import {useParams} from "react-router";
import {getInquiryById} from "../services/inquiryService";
import InquiryCard from "../components/InquiryCard";
import InquiryDetailsItem from "../components/InquiryDetailsItem";


export default function InquiryDetails(){
    const [inquiry, setInquiry] = useState("")
    const {uuid} = useParams();

    useEffect(()=>{
        getInquiryById(uuid).then(setInquiry)

    })

    return(

            <PageLayoutContainer>
                <BurgerMenu/>
                <Content>
                    <TopBar/>
                    <InquiryContainer>
                        {inquiry && <InquiryDetailsItem inquiry={inquiry}/>}
                    </InquiryContainer>
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

const InquiryContainer = styled.div`
  overflow-y: scroll;
`

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
`