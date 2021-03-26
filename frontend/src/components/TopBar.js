import styled from 'styled-components/macro';


const TopBar = ()=>{

    return(
        <TopBarContainer>
            <div className="left"> PLACEHOLDER </div>
            <div className="center"> LOGO </div>
            <div className="right"> SEARCHBAR </div>
        </TopBarContainer>
    )
}

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  width: 100%;
  height: 17rem;
  
  font-family: "Courier New", arial, sans-serif;

  background-color: whitesmoke;
  
  .right{
    font-weight: bold;
  };
  .left{
    font-weight:bold;
  }
  .center{
    font-weight:bold;
  }

  
`

export default TopBar
