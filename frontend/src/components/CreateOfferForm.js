import {useForm} from "react-hook-form";
import {Styles} from "../styling/FormStyling";
import {getAllOffers, postOffer} from "../services/offerService";
import React, {useEffect, useState} from "react";
import { useHistory} from "react-router-dom";
import moment from "moment";
import {useParams} from "react-router-dom";


export default function CreateOfferForm() {
    // inquiryPartId -> from inquiry prop
    const {register, handleSubmit, errors} = useForm();
    const [offers, setOffers] = useState([])
    const {inquiryPartId} = useParams();
    let history = useHistory();

    const inquiryUrl= "inquiryDetails"

    useEffect(() => {
        getAllOffers()
            .then(setOffers)
            .catch((error) => console.error(error))
    }, [])

    const onSubmit = newOffer => {
        const offerDTO = {...newOffer, inquiryPartId}
        console.log(offerDTO)
        postOffer(offerDTO)
            .then((offerDTO) => {
                const updatedOffers = [...offers, offerDTO]
                setOffers(updatedOffers)
            }).catch((error) => console.error(error))
            alert("The Offer has been posted!")
        history.push(`/${inquiryUrl}/${inquiryPartId}`);
    }

    return (
        <Styles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1> Make an Offer </h1>
                <label> Please specify your Offer with a short message: </label>
                <textarea className="offerDescription"
                       name="offerDescription"
                       ref={register({
                           required: true,
                       })}/>
                {errors.offerDescription && "Required"}

                <label> Please enter the amount of € for your service </label>
                <input name="offerFIATamount"
                       type="number"
                       ref={register({
                           required: true,
                       })}/>
                {errors.offerFIATamount && "Required"}
                <label> Expected delivery Date </label>
                <input name="expectedDeliveryDate"
                       type="date"
                       min={moment().format("YYYY-MM-DD")}
                       ref={register({
                           required: true,
                       })}/>
                {errors.expectedDeliveryDate && "Required"}
                <input className="submitButton" type="submit" value="Make Offer!"/>

            </form>
        </Styles>
    )
}

