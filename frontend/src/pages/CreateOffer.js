import {useForm} from "react-hook-form";
import {Styles} from "../styling/FormStyling";
import {getOffers, postOffer} from "../services/offerService";
import React, {useEffect, useState} from "react";
import moment from "moment";
import {useParams} from "react-router";


export default function CreateOffer() {
    // inquiryPartId -> from inquiry prop
    const {register, handleSubmit, errors} = useForm();
    const [offers, setOffers] = useState([])
    const {inquiryPartId} = useParams();

    useEffect(() => {
        getOffers()
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
    }

    return (
        <Styles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Please specify your Offer with a short message: </label>
                <input name="offerDescription"
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