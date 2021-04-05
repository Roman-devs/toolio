import styled from "styled-components/macro";

export const Styles = styled.div`
  background: whitesmoke;
  padding: 20px;
  font-family: "Courier New", arial, sans-serif;
  text-align: center;
  .offerDescription{
    line-height: 10rem;
  }
  .partDescription{
    line-height: 10rem;
  }
  label{
    padding-top: 15px;
  }
  h1 {
    line-height: 100%;
    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
  }

  form {
    background: white;
    border-radius: 15px;
    box-shadow: 0 0 20px darkgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
    text-align: center;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    text-align: center;
    
  }

  label {
    color: #3d3d3d;
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .error {
    color: red;
    font-size: 12px;
    height: 30px;
  }

  .submitButton {
    //background-color: #6976d9;
    //color: white;
    //font-size: 14px;
    margin: 20px 0px;
    display: inline-block;
    padding: 15px;
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
    
    
  }
`;