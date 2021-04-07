import styled, { css } from "styled-components/macro";

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 18px;
  font-family: "Courier New", arial, sans-serif;
  background: #000000;
  width: 10rem;
  gap: 5rem;
  text-decoration: none;

  .Link {
    color: whitesmoke;
    text-decoration: none;
    &:hover {
      color: #16e0cd;
      font-weight: 800;
    }
  }

`