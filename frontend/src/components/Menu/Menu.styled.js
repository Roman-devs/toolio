import styled from 'styled-components/macro';

export const StyledMenu = styled.nav`
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: whitesmoke;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  border-radius: 2.5px;
  box-shadow: 0 0 20px darkgrey;
  
 a {
    font-size: 1rem;
    font-family: "Courier New", arial, sans-serif;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #000000;
    text-decoration: none;
    transition: color 0.3s linear;
  }

  &:hover {
    color: #282c34;
  }
`;

export const MenuCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: whitesmoke;
  margin-top: 2rem;
`

export const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: whitesmoke;
  margin-top: 7.5rem;
  font-size: xx-large;
  font-weight: bolder;
  font-family: "Courier New", arial, sans-serif;
`
