import {useEffect, useState} from "react";
import styled from "styled-components/macro";
import MyInquiryCard from "./MyInquiryCard";

export default function MyInquiryList({inquiries, offers}) {
    const [list, setList] = useState();

    useEffect(() => {
        setList(inquiries.map((inquiry) => {
                const matchedOffers = offers.filter((offer) => offer.inquiryPartId === inquiry.uuid);
                return {...inquiry, matchedOffers};

            })
        );
    }, [offers, inquiries])

    return (
        <StyledList>
            {inquiries && list && offers && list.map((inquiry) =>
                <li key={inquiry.uuid}>
                    <MyInquiryCard inquiry={inquiry}/>
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

