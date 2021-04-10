import {useState, useEffect} from "react";
import {getAllReceivedOffersByAuth} from "../services/offerService";
import styled from "styled-components/macro";
import {getUserInquiries} from "../services/inquiryService";
import MyInquiryList from "../components/MyInquiryList";

export default function MyInquiriyOverview(){
    const [offers, setOffers] = useState([])
    const [inquiries, setInquiries] = useState([])

    useEffect(()=> {
        getAllReceivedOffersByAuth()
            .then(setOffers);
        getUserInquiries()
            .then(setInquiries);
    },[])

    return(
        <>
            {inquiries && offers && <MyInquiryList inquiries={inquiries} offers={offers} makeOffer={false}/>}
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

const OfferContainer = styled.div`
  overflow-y: scroll;
`

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`