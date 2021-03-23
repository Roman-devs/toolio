import styled, { css } from "styled-components/macro";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 25px;
  margin: 48px auto 0;
  width: 300px;
  font-family: "Courier New", arial, sans-serif;
  border-radius: 15px;
  box-shadow: 0 0 20px darkgrey;
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
  padding: 12.5px 25px 25px 25px;
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