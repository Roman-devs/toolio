import React from "react";
import InquiryOverview from "./pages/InquiryOverview";
import GlobalStyle from "./styling/GlobalStyles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
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

