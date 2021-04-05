import styled from "styled-components/macro";
import {
    CardButton,
    CardImage,
    CardWrapper,
    ProductDescription,
    ProductDimension,
    ProductDimensionsWrapper, ProductName
} from "../styling/CardStyling";
import {Link} from "react-router-dom";

export default function InquiryDetailsItem({inquiry, makeOffer}) {


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
            <ProductDescription>
                {inquiry.partDescription}
            </ProductDescription>
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
            </ProductDimensionsWrapper>
            <ProductDimensionsWrapper>
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
                <Link to={`/inquiryDetails/makeOffer/${inquiry.uuid}`}>
                    <CardButton> Make An Offer! </CardButton>
                </Link>
                }



        </CardDetailsWrapper>

    )
}

export const CardDetailsWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 25px;
  margin: 20px;
  width: 500px;
  font-family: "Courier New", arial, sans-serif;
  border-radius: 15px;
  box-shadow: 0 0 20px darkgrey;
  text-align: center;
  vertical-align: center;
  background: white;
`

