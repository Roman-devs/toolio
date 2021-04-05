import styled from "styled-components/macro";
import {CardButton} from "../styling/CardStyling";
import {Link} from "react-router-dom";

export default function InquiryDetailsItem({inquiry}) {

    return (

        <List>
            <li className="picture">
                <h1>
                    PLACEHOLDER FOR PICTURE
                </h1>
            </li>

            <li className="name">
                <h1>{inquiry.partName}</h1>
            </li>
            <li className="id">
                Offer-ID: {inquiry.uuid}
            </li>
            <li>
                {inquiry.partDescription}
            </li>
            <li>
                {inquiry.length}
            </li>
            <li>
                {inquiry.width}
            </li>
            <li>
                {inquiry.height}
            </li>
            <li>
                {inquiry.material}
            </li>
            <li>
                {inquiry.orderAmount}
            </li>
            <li>
                {inquiry.earliestDate}
            </li>
            <li>
                {inquiry.latestDate}
            </li>

            <li>
                <Link to={`/inquiryDetails/makeOffer/${inquiry.uuid}`}>
                    <CardButton> Make An Offer! </CardButton>
                </Link>
            </li>


        </List>

    )
}

const List = styled.ul`

  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  font-family: "Courier New", arial, sans-serif;
  margin: 7.5rem;


  .name {
    background-color: cornflowerblue;
  }

  .id {
    background-color: aqua;
  }

  .picture {
    background-color: darkkhaki;

    img {
      max-width: 100%;
      max-height: 100%;
      opacity: 0.7;
      object-fit: contain;
      padding-bottom: 25px;
    }
  }

  li {
    text-align: center;
  }
`