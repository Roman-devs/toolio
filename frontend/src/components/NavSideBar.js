import {Nav} from "../styling/NavSideBarStyling";
import {NavLink} from "react-router-dom";
import React from "react";


export default function NavSideBar() {
    return (
        <Nav>
            <NavLink exact to="/"
                     className="Link"
                     activeStyle={{
                         fontWeight: 800,
                         color: "#16e0cd"
                     }}>
                <span aria-label="Show All Inquiries">All Inquiries</span>
            </NavLink>
            <NavLink exact to="/myinquiries"
                     className="Link"
                     activeStyle={{
                         fontWeight: "bold",
                         color: "#16e0cd"
                     }}>
                <span aria-label="My Inquiries">My Inquiries</span>
            </NavLink>
            <NavLink exact to="/myreceivedoffers"
                     className="Link"
                     activeStyle={{
                         fontWeight: "bold",
                         color: "#16e0cd"
                     }}>
                <span aria-label="Offers Received">Offers Received</span>
            </NavLink>
            <NavLink exact to="/madeoffers"
                     className="Link"
                     activeStyle={{
                         fontWeight: "bold",
                         color: "#16e0cd"
                     }}>
                <span aria-label="Offers Made">Offers Made</span>
            </NavLink>
            <NavLink exact to="/newInquiry"
                     className="Link"
                     activeStyle={{
                         fontWeight: "bold",
                         color: "#16e0cd"
                     }}>
                <span aria-label="Create New Inquiry">Create New Inquiry</span>
            </NavLink>
        </Nav>
    )
}

