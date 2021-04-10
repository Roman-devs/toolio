import styled from 'styled-components/macro';


const TopBar = ({Route})=>{

    return(
        <TopBarContainer>
            <div className="left"> <h2>{Route}</h2> </div>
            <Image className="center"> <img src={process.env.PUBLIC_URL + '/pictures/TooLioLogo.png'} alt="Logo"/></Image>
        </TopBarContainer>
    )
}

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  width: 100%;
  padding-top: 1.25rem;
  height: 3.0rem;
  
  font-family: "Courier New", arial, sans-serif;
  
  background-color: whitesmoke;
  
  .right{
    font-weight: bold;
    vertical-align: center;
    padding-top: 1rem;
  };
  .left{
    font-weight:bold;
    vertical-align: center;
    padding-top: 0rem;
    padding-left: 2rem;
  }
  .center{
    font-weight:bold;
  }

  
`
export const Image = styled.div`
  img{
    height: 4rem;
    vertical-align: center;
    padding-right: 4rem;
    
  }
`
export default TopBar
