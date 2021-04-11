import React from 'react';
import {bool} from 'prop-types';
import {StyledMenu, MenuCategory, MenuHeader, ContainerLogout} from './Menu.styled';
import {Link, NavLink} from "react-router-dom";
import {CardButton} from "../../styling/CardStyling";
import {postUserNameByUserId} from "../../services/offerService";
import {useState, useEffect} from "react";
import styled from "styled-components/macro";

const Menu = ({open, loggedUser}) => {
    // const [loggedInUser, setLoggedInUser] = useState()
    //

    const handleLogout = () => {
        sessionStorage.setItem("toolio","");
        sessionStorage.setItem("user", "");
        window.location.reload()}

    // useEffect(()=>{
    //     console.log(offer)
    //     postUserNameByUserId(offer).then(setLoggedInUser)
    // },[offer])
    return (
        <StyledMenu open={open}>
            <MenuHeader>
                Hi <p className="loggedUser">{loggedUser}!</p>
            </MenuHeader>
            <MenuCategory>
                <NavLink exact to="/"
                         activeStyle={{
                             fontWeight: "bold",
                             color: "#0031ff"
                         }}>
                    <span aria-label="Show All Inquiries">All Inquiries</span>
                </NavLink>
                {/*<Link>*/}
                {/*    <span aria-label="My Inquiries">My Inquiries</span>*/}
                {/*</Link>*/}
                {/*<Link to="/myreceivedoffers">*/}
                {/*    <span aria-label="Offers Received">Offers Received</span>*/}
                {/*</Link>*/}
                {/*<Link to="/madeoffers">*/}
                {/*    <span aria-label="Offers Made">Offers Made</span>*/}
                {/*</Link>*/}
                <NavLink exact to="/newInquiry"
                         activeStyle={{
                             fontWeight: "bold",
                             color: "blue"
                         }}>
                    <span aria-label="Create New Inquiry">Create New Inquiry</span>
                </NavLink>
                <NavLink exact to="/myinquiries"
                         activeStyle={{
                             fontWeight: "bold",
                             color: "blue"
                         }}>
                    <span aria-label="received Offers">My Inquiries</span>
                </NavLink>
                <NavLink exact to="/myoffers"
                         activeStyle={{
                             fontWeight: "bold",
                             color: "blue"
                         }}>
                    <span aria-label="My Offers">My Offers</span>
                </NavLink>
            </MenuCategory>
            <ContainerLogout>
                <MenuButton onClick={handleLogout}>
                    Logout
                </MenuButton>
            </ContainerLogout>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;


export const MenuButton = styled.button`
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