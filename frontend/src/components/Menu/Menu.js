import React from 'react';
import { bool } from 'prop-types';
import {StyledMenu} from './Menu.styled';

const Menu = ({open}) => {

    return (
        <StyledMenu open={open}>
            <a>
                <span aria-label="Show All Inquiries">Show All Inquiries</span>


            </a>
            <a>
                <span aria-label="My Inquiries">My Inquiries</span>
            </a>
            <a>
                <span aria-label="Offers Made">Offers Made</span>
            </a>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;