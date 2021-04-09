import styled from 'styled-components/macro'
import {useState, useEffect} from "react";
import {postUserNameByUserId} from "../services/offerService";

export default function OfferCard({offer, index}) {
    const [offeringUserName, setOfferingUserName] = useState();

    useEffect(()=>{
        console.log(offer)
        postUserNameByUserId(offer).then(setOfferingUserName)
    },[offer])

    return (
        <OfferContainer>
            <OfferHeadline>Offer No.:{index}</OfferHeadline>
            <OfferGeneralHeadline> Expected Date of Delivery </OfferGeneralHeadline>
            <OfferDate>{offer.expectedDeliveryDate}</OfferDate>
            <OfferGeneralHeadline> Offer Description </OfferGeneralHeadline>
            <p>{offer.offerDescription}</p>
            <OfferGeneralHeadline> Offered Price </OfferGeneralHeadline>
            <OfferFIAT>{offer.offerFIATamount} €</OfferFIAT>
            <OfferGeneralHeadline> Posted By User: </OfferGeneralHeadline>
            <UserName>{offeringUserName}</UserName>
        </OfferContainer>
    )
}

export const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 450px;
  font-family: "Courier New", arial, sans-serif;
  border-radius: 15px;
  box-shadow: 0 0 20px darkgrey;
  text-align: center;
  background: white;
  padding: 1rem;
  height: 300px;
`

export const OfferHeadline = styled.div`
  font-weight: 800;
  font-size: x-large;
  padding-bottom: 1rem;
`
export const OfferGeneralHeadline = styled.div`
  font-weight: 600;
`
export const OfferFIAT = styled.div`
  font-size: xx-large;
  font-weight: bolder;
  color: #23b121;
`

export const OfferDate = styled.div`
  font-weight: bold;
`

export const UserName = styled.div`
  color: #204ad0;
  font-weight: bold;
`

