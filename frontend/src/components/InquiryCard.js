import {
    CardHeader,
    CardWrapper,
} from "./CardStyling";

export default function InquiryCard(){

    return(
        <CardWrapper>
            <CardHeader>
                <img src={process.env.PUBLIC_URL + '/pictures/CardHeaderTemplate.png'} />
            </CardHeader>
        </CardWrapper>
    )
}