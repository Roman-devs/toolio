import styled from 'styled-components/macro'
import InquiryCard from "./InquiryCard";

export default function InquiryList({inquiries}) {

    return (
        <List>
            {inquiries.map((inquiry) => (
                <li>
                    <InquiryCard inquiry={inquiry}/>
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

