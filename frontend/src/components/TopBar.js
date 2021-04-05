import styled from 'styled-components/macro';


const TopBar = ()=>{

    return(
        <TopBarContainer>
            <div className="left"> PLACEHOLDER </div>
            <Image className="center"> <img src={process.env.PUBLIC_URL + '/pictures/TooLioLogo.png'} alt="Logo"/></Image>
            <div className="right"> SEARCHBAR </div>
        </TopBarContainer>
    )
}

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding-top: 1.25rem;
  height: 5.0rem;
  
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
export const Image = styled.div`
  img{
    height: 4rem;
    vertical-align: center;
    
  }
`
export default TopBar
