import React from "react";
import {useForm} from "react-hook-form";
import styled from 'styled-components/macro'
import moment from 'moment'

export default function FormReactHookCreateNewInquiry() {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Styles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>New Order</h1>

                <label>Product Name</label>
                <input name="name"
                       ref={register({
                           required: true,
                           minLength: 1,
                           maxLength: 14,
                       })}/>
                {errors.name && "Required"}

                <label>Product Description</label>
                <input name="address"
                       ref={register({required: true})}/>
                {errors.address && "Required"}

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

                <label>Order Number</label>
                <input name="order"
                       ref={register({required: true})}/>


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