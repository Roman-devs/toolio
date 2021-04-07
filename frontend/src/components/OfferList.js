import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {StyledList} from "./InquiryList";


export default function OfferList({userOffers, userInquiries}) {
    const [list, setList] = useState([])

    const sortList = () => {
        console.log("Function Running")
        return userInquiries.map((inquiry) => {
            const matchedOffers = userOffers.filter((offer) => offer.inquiryPartId === inquiry.uuid);
            console.log(matchedOffers)
            if (matchedOffers.length > 0) {
                console.log("triggered")
                return {...inquiry, matchedOffers}
            }
            return null;
        });
    }

    useEffect(() => {
        if(userOffers && userInquiries){
            setList(sortList);
        }
    }, [])

    return (
        <StyledList>
            {userOffers.map((offer) => (
                <li key={offer.id}>
                    <p>Placeholder Offer</p>
                </li>
            ))}
        </StyledList>
    )
}

