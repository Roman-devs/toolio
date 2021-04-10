import {
    CardButton,
    CardImage,
    CardWrapper, ProductDescription, ProductDimension, ProductDimensionsWrapper, ProductName,
} from "../styling/CardStyling";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components/macro";

export default function MyInquiryCard({inquiry}) {
    const [badge, setBadge] = useState();

    useEffect(() => {
        if (inquiry.matchedOffers.length) {
            setBadge(inquiry.matchedOffers.length)
        } return null
    }, [inquiry])

    return (
        <CardWrapper>
            {badge && <Badge disabled={true}>{badge}</Badge>}
            <CardImage>
                <img src={process.env.PUBLIC_URL + '/pictures/CardHeaderTemplate.png'} alt="Template"/>
            </CardImage>

            <ProductName>
                <h1>{inquiry.partName}</h1>
            </ProductName>
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
            <ProductDimensionsWrapper>
                <Link to={`/myinquiryDetails/${inquiry.uuid}`}>
                    <CardButton>Details</CardButton>
                </Link>
            </ProductDimensionsWrapper>
        </CardWrapper>
    )
}

const Badge = styled.button`
  top: -1.5rem;
  right: -1.5rem;
  position: absolute;
  height: 4rem;
  width: 4rem;
  font-family: inherit;
  font-size: inherit;
  color: #ffffff;
  font-weight: bold;
  background-color: #030303;
  border: 2px;
  border-radius: 50px;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.4, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
    transform: translate(0, -1px);

  }
`

