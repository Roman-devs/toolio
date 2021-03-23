import styled, { css } from "styled-components/macro";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 25px;
  margin: 10px;
  width: 300px;
  font-family: "Courier New", arial, sans-serif;
  border-radius: 15px;
  box-shadow: 0 0 20px darkgrey;
  text-align: center;
  background: white;
`;

export const CardImage = styled.div`
  height: 175px;
  text-align: center;
  vertical-align: center;
  img{
    max-width:100%;
    max-height: 100%;
    opacity: 0.7;
    object-fit: contain;
    padding-bottom: 25px;
  }
`;

export const ProductName = styled.div`
  padding-right: 25px;
  padding-left: 25px;
  height: auto;
  text-align: center;
  font-size: 0.85em;
  line-height: 85%;
`
export const ProductDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 45px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-align: center;
  padding-right: 25px;
  padding-left: 25px;
  max-height: 100px;
  font-size: 0.85em;
  line-height: 85%;
`

export const ProductDimensionsWrapper = styled.div`
  text-align: center;
  line-height: 100%;
  width: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 12.5px 25px 5px 25px;
  box-sizing: border-box;
  // flex space between;
  font-size: 1em;
  h1{
    line-height: 100%;
    font-weight: bold;
    font-size: 0.85em;
    text-align: center;
  }
  div+div{
    margin-left: 10px;
  }
  p{
    margin:0px;
  }
`
export const ProductDimension = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 0;
  justify-content: center;
`

export const CardButton = styled.button`
  display: inline-block;
  padding: 12px;
  margin: 5px;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  color: #ffffff;
  background-color: #000000;
  border: 2px;
  border-radius: 25px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.4, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
    transform: translate(0, -1px);
  }
`