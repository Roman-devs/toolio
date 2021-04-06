import {useState, useEffect} from "react";
import {getAllOffersByAuth} from "../services/offerService";
import BurgerMenu from "../components/BurgerMenu";
import TopBar from "../components/TopBar";
import InquiryList from "../components/InquiryList";
import styled from "styled-components/macro";
import OfferList from "../components/OfferList";

export default function OfferOverview(){
    const [offers, setOffers] = useState([])

    useEffect(()=> {
        getAllOffersByAuth()
            .then(setOffers)
    },[])

    return(
        <>
            <PageLayoutContainer>
                <BurgerMenu/>
                <Content>
                    <TopBar/>
                    <OfferContainer>
                        {offers && <OfferList offers={offers}/>}
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