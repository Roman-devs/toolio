import {useState, useEffect} from "react";
import {getAllReceivedOffersByAuth} from "../services/offerService";
import BurgerMenu from "../components/BurgerMenu";
import TopBar from "../components/TopBar";
import InquiryList from "../components/InquiryList";
import styled from "styled-components/macro";
import OfferList from "../components/OfferList";
import {getUserInquiries} from "../services/inquiryService";

export default function ReceivedOfferOverview(){
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
            <PageLayoutContainer>
                <BurgerMenu/>
                <Content>
                    <TopBar Route="Received Offers"/>
                    <OfferContainer>
                        {offers && inquiries && <OfferList userOffers={offers} userInquiries={inquiries}/>}
                    </OfferContainer>
                </Content>
                {/*<FormReactHookCreateNewInquiry onAdd={addNewInquiry}/>*/}
            </PageLayoutContainer>
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