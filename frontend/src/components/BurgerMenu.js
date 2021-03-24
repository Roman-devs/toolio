import React, {useRef, useState} from "react";
import {useOnClickOutside} from "../hooks";
import Burger from "./Burger";
import Menu from "./Menu";

export default function BurgerMenu() {
    const [open, setOpen] = useState(false)
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false))

    return (
        <div ref={node}>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
        </div>
    )
}