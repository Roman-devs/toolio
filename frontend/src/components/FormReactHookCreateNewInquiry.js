import React from "react";
import {useForm} from "react-hook-form";
import moment from 'moment'
import {Styles} from "../styling/FormStyling";
import styled from 'styled-components/macro';

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
                           maxLength: "18"
                       })}/>
                {errors.partName && <p className="error">Please specify a name for your part</p>}

                <label>Product Description [mm]</label>
                <textarea className="partDescription"
                          name="partDescription"
                          ref={register({required: true})}/>
                {errors.partDescription && <p className="error">Please enter a description</p>}
                <ContainerDimension>
                    <div>
                        <p className="length">Max Length [mm]</p>
                        <p className="width">Max Width [mm]</p>
                        <p className="thickness">Max Thickness [mm]</p>
                    </div>
                    <div>
                        <input name="length"
                               className="dimension"
                               ref={register({required: true})}/>


                        <input name="width"
                               className="dimension"
                               ref={register({required: true})}/>



                        <input name="height"
                               className="dimension"
                               ref={register({required: true})}/>

                    </div>
                    <div>
                        {errors.length && <p className="error">""</p>}
                        <p className="error">{errors.width && errors.height && errors.length && "Please specify all dimensions"}</p>
                        <p className="error">{errors.height && ""}</p>
                    </div>
                </ContainerDimension>
                <label>Material</label>
                <input name="material"
                       ref={register({required: true})}/>
                {errors.material && <p className="error">Please specify the material</p>}

                <label>Order Amount</label>
                <input name="orderAmount"
                       ref={register({required: true})}/>
                {errors.orderAmount && <p className="error">Please specify the amount of parts</p>}


                <label>Earliest Delivery Date</label>
                <input name="earliestDate"
                       type="date"
                       min={moment().format("YYYY-MM-DD")}
                       ref={register({required: true})}/>
                {errors.earliestDate && <p className="error">Earliest Delivery Date is required</p>}

                <label>Latest Delivery Date</label>
                <input name="latestDate"
                       type="date"
                       min={moment().format("YYYY-MM-DD")}
                       ref={register({required: true})}/>
                {errors.latestDate && <p className="error">Latest Delivery Date is required</p>}

                <input className="submitButton" type="submit" value="Post Inquiry!"/>
            </form>
        </Styles>
    )
}

const ContainerDimension = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  width: 700px;
  justify-content: space-evenly;
  
  .length{
    padding-left: 1.5rem;
    
  }
  .width{
    padding-left: 0.4rem;
  }
  .thickness{
    padding-right: 1rem;
  }
  
  input{
    display: flex;
    flex-direction: row;
    width: 77px;
    justify-content: center;
    text-align: center;
  }
  
  div{
   display: flex;
    flex-direction: row;
    gap: 4rem;
    width: 400px;
    justify-content: center;
    text-align: center;
  }
`