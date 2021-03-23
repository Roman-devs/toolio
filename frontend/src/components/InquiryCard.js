import {
    CardBody, CardButton,
    CardImage,
    CardWrapper, ProductDescription, ProductDimension, ProductDimensionsWrapper, ProductName,
} from "./CardStyling";

export default function InquiryCard() {

    return (
        <CardWrapper>
            <CardImage>
                <img src={process.env.PUBLIC_URL + '/pictures/CardHeaderTemplate.png'} alt="Template"/>
            </CardImage>
            <ProductName>
                <h1>Product Name</h1>
            </ProductName>
            <ProductDescription>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                est, qui dolorem ipsum quia dolor sit amet.
            </ProductDescription>
            <ProductDimensionsWrapper>
                <ProductDimension>
                    <h1>Length [mm]</h1>
                    <p>250</p>
                </ProductDimension>
                <ProductDimension>
                    <h1>Width [mm]</h1>
                    <p>250</p>
                </ProductDimension>
                <ProductDimension>
                    <h1>Height [mm]</h1>
                    <p>250</p>
                </ProductDimension>
            </ProductDimensionsWrapper>
            <ProductDimensionsWrapper>
                <ProductDimension>
                    <h1>Material</h1>
                    <p>S355</p>
                </ProductDimension>
                <ProductDimension>
                    <h1>Amount</h1>
                    <p>25</p>
                </ProductDimension>
            </ProductDimensionsWrapper>
            <CardButton>Contact</CardButton>
            <CardButton>Details</CardButton>
        </CardWrapper>
    )
}