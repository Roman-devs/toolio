import {getInquiries, postInquiry} from "../services/inquiryService";
import React, {useEffect, useState} from 'react'
import styled from 'styled-components/macro';
import InquiryList from "../components/InquiryList";
import BurgerMenu from "../components/BurgerMenu";
import TopBar from "../components/TopBar";
import {useAuth} from "../auth/AuthContext";

export default function InquiryOverview() {
    const [inquiries, setInquiries] = useState([])
    const{ token } = useAuth();

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
    }
    return (
                <>
                        {inquiries && <InquiryList inquiries={inquiries}/>}
                </>
    )
}

const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  background-color: whitesmoke;
`

const InquiriesContainer = styled.div`
  overflow-y: scroll;
`

const Content = styled.div`
  
  overflow-y: scroll;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`