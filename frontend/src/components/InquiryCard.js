import {
    CardButton,
    CardImage,
    CardWrapper, ProductDescription, ProductDimension, ProductDimensionsWrapper, ProductName,
} from "../styling/CardStyling";
import {Link} from "react-router-dom";

export default function InquiryCard({inquiry}) {

    return (
        <CardWrapper>
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
            <CardButton>Contact</CardButton>
            <Link to={`/inquiryDetails/${inquiry.uuid}`}>
                <CardButton>Details</CardButton>
            </Link>
        </CardWrapper>
    )
}