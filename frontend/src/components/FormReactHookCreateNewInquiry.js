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

const Styles = styled.div`
  background: whitesmoke;
  padding: 20px;
  font-family: "Courier New", arial, sans-serif;
  text-align: center;

  h1 {
    line-height: 100%;
    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
  }

  form {
    background: white;
    border-radius: 15px;
    box-shadow: 0 0 20px darkgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
    text-align: center;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  label {
    color: #3d3d3d;
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .error {
    color: red;
    font-size: 12px;
    height: 30px;
  }

  .submitButton {
    //background-color: #6976d9;
    //color: white;
    //font-size: 14px;
    margin: 20px 0px;
    display: inline-block;
    padding: 15px;
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
    color: #ffffff;
    background-color: #000000;
    border: 2px;
    border-radius: 25px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.4, 1);

    &:hover {
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
      transform: translate(0, -1px);
    }
`;