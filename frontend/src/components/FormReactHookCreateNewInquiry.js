import React from "react";
import {useForm} from "react-hook-form";
import styled from 'styled-components/macro'
import moment from 'moment'
import {postInquiry} from "../services/inquiryService";
import {Styles} from "../styling/FormStyling";

export default function FormReactHookCreateNewInquiry({onAdd}) {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = newInquiry => {
        console.log(newInquiry)
        onAdd(newInquiry);
    }

    return (
        <Styles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Post a new Inquiry</h1>

                <label>Product Name</label>
                <input name="partName"
                       ref={register({
                           required: true,
                           minLength: 1,
                           maxLength: 14,
                       })}/>
                {errors.name && "Required"}

                <label>Product Description [mm]</label>
                <input name="partDescription"
                       ref={register({required: true})}/>
                {errors.partDescription && "Required"}

                <label>Max Length [mm]</label>
                <input name="length"
                       ref={register({required: true})}/>
                {errors.length && "Required"}

                <label>Max Width [mm]</label>
                <input name="width"
                       ref={register({required: true})}/>
                {errors.width && "Required"}

                <label>Max Height/Thickness [mm]</label>
                <input name="height"
                       ref={register({required: true})}/>
                {errors.height && "Required"}

                <label>Material</label>
                <input name="material"
                       ref={register({required: true})}/>
                {errors.material && "Required"}

                <label>Order Amount</label>
                <input name="orderAmount"
                       ref={register({required: true})}/>
                {errors.orderAmount && "Required"}


                <label>Earliest Delivery Date</label>
                <input name="earliestDate"
                       type="date"
                       min={moment().format("YYYY-MM-DD")}
                       ref={register({required: true})}/>
                {errors.earliestDate && "Required"}

                <label>Latest Delivery Date</label>
                <input name="latestDate"
                       type="date"
                       min={moment().format("YYYY-MM-DD")}
                       ref={register({required: true})}/>
                {errors.latestDate && "Required"}

                <input className="submitButton" type="submit" value="Post Inquiry!"/>
            </form>
        </Styles>
    )
}