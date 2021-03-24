import styled from 'styled-components';

export const StyledMenu = styled.nav`
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: whitesmoke;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  a{
    font-size: 1rem;
    font-family: "Courier New", arial, sans-serif;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #61dafb;
    text-decoration: none;
    transition: color 0.3s linear;
  }

  &:hover{
    color: #282c34;
  }
`;
