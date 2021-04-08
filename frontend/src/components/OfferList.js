import {useEffect, useState} from "react";
import {StyledList} from "./InquiryList";
import styled from 'styled-components/macro'
import {Styles} from "../styling/FormStyling";
import {CardWrapper} from "../styling/CardStyling";
import {getInquiryById} from "../services/inquiryService";


export default function OfferList({offers, inquiries}) {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(inquiries.map((inquiry) => {
                const matchedOffers = offers.filter((offer) => offer.inquiryPartId === inquiry.uuid);
                return {...inquiry, matchedOffers};
            }).filter((inquiry) => inquiry.matchedOffers.length)
        );
    }, [offers, inquiries])



    return (
        <StyledOfferInquiryList>
            {list.map((listItem) =>
                <li key={listItem.uuid}>
                    <TestDiv>
                        <h2>{listItem.uuid}</h2>
                        <OffersWrapper>
                        {listItem.matchedOffers.map((offer, index) =>
                            <OfferCardWrapper>
                                <p>
                                    <h3>Offer No.: {index + 1}</h3>
                                    <p>{offer.offerId}</p>
                                    <p>{offer.ownerIdOfInquiry}</p>
                                    <p>{offer.offeringUserId}</p>
                                    <p>{offer.expectedDeliveryDate}</p>
                                    <p>{offer.offerDescription}</p>
                                    <h2>{offer.offerFIATamount} EUR</h2>
                                </p>
                            </OfferCardWrapper>
                        )}
                        </OffersWrapper>
                    </TestDiv>
                </li>
            )}
        </StyledOfferInquiryList>
    )
}

const StyledOfferInquiryList = styled.ul`
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`

const TestDiv = styled.div`
  display: flex;
  padding: 2rem;
  height: 100%;
  flex-direction: row;
  justify-content: space-evenly;

  h2 {
    color: #16e0cd;
    align-self: center;
  }
`

const OfferCardWrapper = styled.div`
  padding: 0 0 25px;
  margin: 10px;
  width: 300px;
  font-family: "Courier New", arial, sans-serif;
  border-radius: 15px;
  box-shadow: 0 0 20px darkgrey;
  text-align: center;
  background: white;
`

const OffersWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  font-family: "Courier New", arial, sans-serif;
  border-radius: 15px;
`
