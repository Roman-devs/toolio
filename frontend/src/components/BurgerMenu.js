import styled from 'styled-components/macro'
import React, {useRef, useState, useEffect} from "react";
import {useOnClickOutside} from "../hooks";
import Burger from "./Burger";
import Menu from "./Menu";

export default function BurgerMenu() {
    const [open, setOpen] = useState(false)
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false))

    return (
        <MenuSpaceFolded ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </MenuSpaceFolded>
    )
}

const MenuSpaceFolded = styled.div`
    height: 100%;
    box-sizing: border-box;
    position: absolute;
`