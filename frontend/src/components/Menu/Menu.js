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
                <a href="/">
                    <span aria-label="Show All Inquiries">Show All Inquiries</span>
                </a>
                <a>
                    <span aria-label="My Inquiries">My Inquiries</span>
                </a>
                <a>
                    <span aria-label="Offers Made">Offers Made</span>
                </a>
                <a href="/newInquiry">
                    <span aria-label="Create New Inquiry">Create New Inquiry</span>
                </a>
            </MenuCategory>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;
