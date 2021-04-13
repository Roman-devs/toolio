import MyOfferListFinal from "../components/MyOfferListFinal";
import {getAllMadeOffersByAuth} from "../services/offerService";
import {getInquiries} from "../services/inquiryService";
import {useEffect, useState} from "react";


export default function MyOffers() {
    const [userOffers, setUserOffers] = useState()
    const [inquiries, setInquiries] = useState()

    useEffect(() => {
        console.log("Test2")
        getAllMadeOffersByAuth()
            .then(setUserOffers);
        console.log(userOffers)
        console.log("Test3")
        getInquiries()
            .then(setInquiries);
        console.log(inquiries)
    },[setUserOffers, setInquiries])

    return (
        <>
            {userOffers &&<MyOfferListFinal userOffers={userOffers} inquiries={inquiries}/>}
        </>
    )
}