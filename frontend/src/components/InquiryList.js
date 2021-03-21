import styled from 'styled-components/macro'

export default function InquiryList({inquiries}){

    return(
        <List>
            {inquiries.map((inquiry) => (
                <li key={inquiry.id}>
                    <span>{inquiry.partName}</span>
                    {/*<Link to={`/user/${user.name}`}>*/}
                    {/*    <img src={user.avatar} alt={user.name} />*/}
                    {/*    <span className="user-name">{user.name}</span>*/}
                    {/*</Link>*/}
                </li>
            ))}
        </List>
    )
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  li + li {
    margin-top: 16px;
  }
`

