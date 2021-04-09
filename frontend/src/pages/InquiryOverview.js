import {getInquiries, postInquiry} from "../services/inquiryService";
import React, {useEffect, useState} from 'react'
import styled from 'styled-components/macro';
import InquiryList from "../components/InquiryList";
import {useAuth} from "../auth/AuthContext";
import {getAllOffers} from "../services/offerService";

export default function InquiryOverview() {
    const [inquiries, setInquiries] = useState([])
    const [offers, setOffers] = useState([])
    const{ token } = useAuth();

    useEffect(() => {
        getAllOffers()
            .then(setOffers);
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
                        {inquiries && offers && <InquiryList inquiries={inquiries} offers={offers}/>}
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