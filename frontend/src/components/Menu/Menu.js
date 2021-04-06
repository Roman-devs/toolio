import React from 'react';
import {bool} from 'prop-types';
import {StyledMenu, MenuCategory, MenuHeader} from './Menu.styled';
import {Link} from "react-router-dom";

const Menu = ({open}) => {

    return (
        <StyledMenu open={open}>
            <MenuHeader>
                Hi Roman!
            </MenuHeader>
            <MenuCategory>
                <Link to="/">
                    <span aria-label="Show All Inquiries">All Inquiries</span>
                </Link>
                <Link>
                    <span aria-label="My Inquiries">My Inquiries</span>
                </Link>
                <Link to="/myreceivedoffers">
                    <span aria-label="Offers Received">Offers Received</span>
                </Link>
                <Link to="/madeoffers">
                    <span aria-label="Offers Made">Offers Made</span>
                </Link>
                <Link to="/newInquiry">
                    <span aria-label="Create New Inquiry">Create New Inquiry</span>
                </Link>
            </MenuCategory>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;
