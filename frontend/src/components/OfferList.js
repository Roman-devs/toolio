import {useEffect, useState} from "react";
import {StyledList} from "./InquiryList";
import styled from 'styled-components/macro'
import {Styles} from "../styling/FormStyling";
import {CardWrapper} from "../styling/CardStyling";


export default function OfferList({userOffers, userInquiries}) {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(userInquiries.map((inquiry) => {
                const matchedOffers = userOffers.filter((offer) => offer.inquiryPartId === inquiry.uuid);
                return {...inquiry, matchedOffers};
            }).filter((inquiry) => inquiry.matchedOffers.length)
        );
    }, [userOffers, userInquiries])


    return (
        <StyledList>
            {list.map((listItem) =>
                <li key={listItem.uuid}>
                    <TestDiv>
                        <h2>{listItem.uuid}</h2>
                        {listItem.matchedOffers.map((offer, index) =>
                            <CardWrapper>
                                <p>Offer No.: {index + 1}</p>
                                <p>{offer.offerId}</p>
                                <p>{offer.ownerIdOfInquiry}</p>
                                <p>{offer.offeringUserId}</p>
                                <p>{offer.expectedDeliveryDate}</p>
                                <p>{offer.offerDescription}</p>
                                <p>{offer.offerFIATamount}</p>
                            </CardWrapper>
                        )}
                    </TestDiv>
                </li>
            )}
        </StyledList>
    )
}

const TestDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  h2{
    justify-content: center;
  }
`
