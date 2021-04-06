import styled from "styled-components/macro";


export default function OfferList({offers}){

    return(
        <List>
            {offers.map((offer) => (
                <li key={offer.id}>
                    <p>Placeholder Offer</p>
                </li>
            ))}
        </List>
    )
}

const List = styled.ul`
  background: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
`