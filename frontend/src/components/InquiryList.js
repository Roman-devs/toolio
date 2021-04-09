import InquiryCard from "./InquiryCard";
import {useEffect, useState} from "react";
import styled from "styled-components/macro";

export default function InquiryList({inquiries, offers}) {
    const [list, setList] = useState();
    const [badgeCounter, setBadgeCounter] = useState();

    useEffect(() => {
        setList(inquiries.map((inquiry) => {
                const matchedOffers = offers.filter((offer) => offer.inquiryPartId === inquiry.uuid);
                return {...inquiry, matchedOffers};
            })
            // .filter((inquiry) => inquiry.matchedOffers.length) --------- FUER EIGENE FILTERN!!!!
        );
    }, [offers, inquiries])

    return (
        <StyledList>
            {inquiries && list && offers && inquiries && list.map((inquiry) =>
                <li key={inquiry.uuid}>
                    <InquiryCard inquiry={inquiry} badgeCounter={badgeCounter}/>
                </li>
            )}
        </StyledList>

    )
}

export const StyledList = styled.ul`
  gap: 1rem;
  padding-left: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: #f5f5f5;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  
`

