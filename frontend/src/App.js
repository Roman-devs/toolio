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
import AuthProvider from "./auth/AuthProvider";
import Login from "./pages/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import CreateOfferForm from "./components/CreateOfferForm";
import CreateOffer from "./pages/CreateOffer";
import OfferOverview from "./pages/ReceivedOfferOverview";
import ReceivedOfferOverview from "./pages/ReceivedOfferOverview";


function App() {
    return (
        <AuthProvider>
            <GlobalStyle/>
            {/*Sidebar - NAV */}
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <ProtectedRoute exact path="/newInquiry">
                        <CreateNewInquiry />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/myreceivedoffers">
                        <ReceivedOfferOverview/>
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/madeoffers">
                        {/*<MadeOfferOverview/> //TODO: Everything  */}
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/inquiryDetails/:inquiryPartId">
                        <InquiryDetails/>
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/inquiryDetails/makeOffer/:inquiryPartId">
                        <CreateOffer/>
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/">
                        <InquiryOverview/>
                    </ProtectedRoute>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;

