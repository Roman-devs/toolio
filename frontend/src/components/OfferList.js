import {useEffect, useState} from "react";
import {StyledList} from "./InquiryList";
import {Styles} from "../styling/FormStyling";


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
                    <h2>{listItem.uuid}</h2>
                    {listItem.matchedOffers.map((offer) =>
                        <div>
                            <p>{offer.offerId}</p>
                            <p>{offer.ownerIdOfInquiry}</p>
                            <p>{offer.offeringUserId}</p>
                            <p>{offer.expectedDeliveryDate}</p>
                            <p>{offer.offerDescription}</p>
                            <p>{offer.offerFIATamount}</p>
                        </div>
                    )}
                </li>
            )}
        </StyledList>
    )
}

