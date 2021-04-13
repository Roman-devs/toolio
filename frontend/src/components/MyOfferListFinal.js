import {useEffect, useState} from "react";
import styled from 'styled-components/macro'
import MyInquiryCard from "./MyInquiryCard";


export default function MyOfferListFinal({userOffers, inquiries}) {
    const [userInquiries, setUserInquiries] = useState();


    useEffect(() => {
        const firstStep = inquiries.map((inquiry) => {
            const matchedOffers = userOffers.filter((offer) => offer.inquiryPartId === inquiry.uuid);
            return {...inquiry, matchedOffers}
        })
        setUserInquiries(firstStep.filter((element) => element.matchedOffers.length))
    }, [inquiries, userOffers]);

    return (
        <OfferListContainer>
            {userInquiries && userInquiries.map((inquiry) =>
                <li>
                    <MyInquiryCard inquiry={inquiry}/>
                </li>
            )}
        </OfferListContainer>
    )
}

const OfferListContainer = styled.ul`
  background: whitesmoke;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: flex-start;
  width: 100%;
  font-family: "Courier New", arial, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
  list-style: none;

  gap: 1rem;
  padding-left: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
`