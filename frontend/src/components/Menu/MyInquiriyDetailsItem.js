import styled from "styled-components/macro";

import {Link} from "react-router-dom";
import {
    CardImage,
    ProductDescription,
    ProductDimension,
    ProductDimensionsWrapper,
    ProductName
} from "../../styling/CardStyling";

export default function MyInquiryDetailsItem({inquiry, makeOffer}) {



    return (

        <CardDetailsWrapper>
            <CardImage className="picture">
                <img src={process.env.PUBLIC_URL + '/pictures/CardHeaderTemplate.png'} alt="Template"/>
            </CardImage>

            <ProductName>
                <h1>{inquiry.partName}</h1>
            </ProductName>
            <ProductDescription>
                Offer-ID: {inquiry.uuid}
            </ProductDescription>
            <h3>Product Description</h3>
            <ProductDetailsDescription>

                {inquiry.partDescription}
            </ProductDetailsDescription>
            <ProductDimensionsWrapper>
                <ProductDimension>
                    <h1>Length [mm]</h1>
                    <p>{inquiry.length}</p>
                </ProductDimension>
                <ProductDimension>
                    <h1>Width [mm]</h1>
                    <p>{inquiry.width}</p>
                </ProductDimension>
                <ProductDimension>
                    <h1>Height [mm]</h1>
                    <p>{inquiry.height}</p>
                </ProductDimension>

                <ProductDimension>
                    <h1>Material</h1>
                    <p>{inquiry.material}</p>
                </ProductDimension>
                <ProductDimension>
                    <h1>Amount</h1>
                    <p>{inquiry.orderAmount}</p>
                </ProductDimension>

            </ProductDimensionsWrapper>
            <ProductName>
                <h2>Desired Delivery Date</h2>
            </ProductName>
            <ProductDimensionsWrapper>
                <ProductDimension>
                    <h1>Earliest</h1>
                    <p>{inquiry.earliestDate}</p>
                </ProductDimension>
                <ProductDimension>
                    <h1>Latest</h1>
                    {inquiry.latestDate}
                </ProductDimension>
            </ProductDimensionsWrapper>
            {!makeOffer &&
            <Link to={`/myinquiries`}>
                <CardButtonInquiry> Back </CardButtonInquiry>
            </Link>}



        </CardDetailsWrapper>

    )
}

export const CardDetailsWrapper = styled.div`
  overflow: hidden;
  align-self: center;
  height: 600px;
  margin: 5rem;
  width: 700px;
  font-family: "Courier New", arial, sans-serif;
  border-radius: 15px;
  box-shadow: 0 0 20px #2b2b2b;
  text-align: center;
  background: #ffffff;
  box-sizing: border-box;
`

const CardButtonInquiry = styled.button`
  display: inline-block;
  padding: 15px;
  margin: 25px;
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
`


export const ProductDetailsDescription = styled.div`
  padding-top: 15px;
  overflow-y: scroll;
  text-overflow: ellipsis;
  height: fit-content;
  max-height: 60px;
  display: -webkit-box;
  text-align: center;
  padding-right: 25px;
  padding-left: 25px;
  font-size: 0.85em;
  line-height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`

