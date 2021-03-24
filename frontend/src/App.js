import React, {useState, useRef} from "react";
import { useOnClickOutside } from './hooks';
import InquiryOverview from "./pages/InquiryOverview";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu";

function App() {
    const [open, setOpen] = useState(false)
    const node = useRef();
    useOnClickOutside(node, ()=> setOpen(false))

    return (
        <>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen}/>
            </div>
            <div>
                <InquiryOverview/>
            </div>
        </>
    );
}

export default App;
