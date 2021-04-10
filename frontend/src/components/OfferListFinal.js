import {useEffect, useState} from "react";
import {getAllOffers} from "../services/offerService";
import {getInquiryById} from "../services/inquiryService";
import {useParams} from "react-router-dom";
import OfferCard from "./OfferCard";
import styled from 'styled-components/macro'


export default function OfferListFinal() {
    const [inquiry, setInquiry] = useState([])
    const [allOffers, setallOffers] = useState([])
    const [correspondingOffers, setCorrespondingOffers] = useState();
    const {inquiryPartId} = useParams();

    useEffect(() => {
        getAllOffers()
            .then(setallOffers);
        getInquiryById(inquiryPartId)
            .then(setInquiry)
            .catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        const matchedOffers = allOffers.filter((offer) => offer.inquiryPartId === inquiryPartId);
        setCorrespondingOffers(matchedOffers);
        // .filter((inquiry) => inquiry.matchedOffers.length) --------- FUER EIGENE FILTERN!!!!
    }, [inquiry, allOffers]);

    return (
            <OfferListContainer>
                {correspondingOffers && correspondingOffers.map((offer, index) =>
                    <li>
                        <OfferCard offer={offer} index={index + 1}/>
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
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  font-family: "Courier New", arial, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
  list-style: none;
`