import styled from 'styled-components/macro';

export const StyledMenu = styled.nav`
  position: absolute;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: whitesmoke;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  width: fit-content;
  text-align: left;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  border-radius: 1.0rem;
  box-shadow: 0 0 20px darkgrey;

  .loggedUser {
    color: #0031ff;
    font-weight: bolder;
  }

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
  background: whitesmoke;
  margin-top: 4rem;
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

export const ContainerLogout = styled.div`
  align-self: center;
  padding-top: 8rem;
`
