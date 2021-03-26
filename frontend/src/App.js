import React, {useState, useRef} from "react";
import {useOnClickOutside} from './hooks';
import InquiryOverview from "./pages/InquiryOverview";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu";
import GlobalStyle from "./styling/GlobalStyles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CreateNewInquiry from "./pages/CreateNewInquiry";
import InquiryDetails from "./pages/InquiryDetails";


function App() {
    return (
        <>
            <GlobalStyle/>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <InquiryOverview/>
                    </Route>
                    <Route path="/newInquiry">
                        <CreateNewInquiry />
                    </Route>
                    <Route path="/inquiryDetails/:uuid">
                        <InquiryDetails/>
                    </Route>
                    <div>
                        <InquiryOverview/>
                    </div>
                </Switch>
            </Router>
        </>
    );
}

export default App;

