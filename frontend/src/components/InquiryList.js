import styled from 'styled-components/macro'
import InquiryCard from "./InquiryCard";

export default function InquiryList({inquiries}) {

    return (
        <StyledList>
            {inquiries.map((inquiry) => (
                <li key={inquiry.id}>
                    <InquiryCard inquiry={inquiry}/>
                </li>
            ))}
        </StyledList>
    )
}

export const StyledList = styled.ul`
  gap: 5rem;
  padding: 2rem;
  background: whitesmoke;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
`

