import React from "react";
import {useForm} from "react-hook-form";
import styled from 'styled-components/macro'
import moment from 'moment'
import {postInquiry} from "../services/inquiryService";

export default function FormReactHookCreateNewInquiry({onAdd}) {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = newInquiry => {
        console.log(newInquiry)
        onAdd(newInquiry);
        //postInquiry(newInquiry)
        // onAdd(newInquiry)
        // Für die Ebene darüber (wahrscheinlich InquiryPart Overview):
        // Property von Form wird so gesetzt:
        //
        // onAdd = {addNewInquiry}
        //
        // dann in Ebene darüber Funktion definieren:
        //
        // const addNewInquiry = (inquiry) => {
        // postInquiry(inquiry)
        //             .then((newInquiry) => {
        //                 const updatedInquiries = [...inquiries, newUser]
        //                 setInquiries(updatedInquiries)
        //             })
        //             .catch((error) => console.error(error))}
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

                <label>Maximum Length of Part [mm]</label>
                <input name="length"
                       ref={register({required: true})}/>
                {errors.length && "Required"}

                <label>Maximum Width of Part [mm]</label>
                <input name="width"
                       ref={register({required: true})}/>
                {errors.width && "Required"}

                <label>Maximum Height/Thickness of Part [mm]</label>
                <input name="height"
                       ref={register({required: true})}/>
                {errors.height && "Required"}

                <label>Material used for production</label>
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

                <input type="submit"/>
            </form>
        </Styles>
    )
}

const Styles = styled.div`
  background: whitesmoke;
  padding: 20px;

  h1 {
    border-bottom: 1px solid white;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  form {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }

  label {
    color: #3d3d3d;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .error {
    color: red;
    font-family: sans-serif;
    font-size: 12px;
    height: 30px;
  }

  .submitButton {
    background-color: #6976d9;
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    margin: 20px 0px;
`;