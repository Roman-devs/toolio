import React from 'react';
import {bool} from 'prop-types';
import {StyledMenu, MenuCategory, MenuHeader, ContainerLogout} from './Menu.styled';
import {Link} from "react-router-dom";
import {CardButton} from "../../styling/CardStyling";
import {postUserNameByUserId} from "../../services/offerService";
import {useState, useEffect} from "react";

const Menu = ({open}) => {
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
                Hi Roman!
            </MenuHeader>
            <MenuCategory>
                <Link to="/">
                    <span aria-label="Show All Inquiries">All Inquiries</span>
                </Link>
                {/*<Link>*/}
                {/*    <span aria-label="My Inquiries">My Inquiries</span>*/}
                {/*</Link>*/}
                {/*<Link to="/myreceivedoffers">*/}
                {/*    <span aria-label="Offers Received">Offers Received</span>*/}
                {/*</Link>*/}
                {/*<Link to="/madeoffers">*/}
                {/*    <span aria-label="Offers Made">Offers Made</span>*/}
                {/*</Link>*/}
                <Link to="/newInquiry">
                    <span aria-label="Create New Inquiry">Create New Inquiry</span>
                </Link>
                <Link to="/myinquiries">
                    <span aria-label="received Offers">My Inquiries</span>
                </Link>
                <Link to="/myoffers">
                    <span aria-label="My Offers">My Offers</span>
                </Link>
            </MenuCategory>
            <ContainerLogout>
                <CardButton onClick={handleLogout}>
                    Logout
                </CardButton>
            </ContainerLogout>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;
