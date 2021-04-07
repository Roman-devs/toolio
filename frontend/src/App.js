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
import {Nav} from "./styling/NavSideBarStyling";
import NavSideBar from "./components/NavSideBar";
import {ContentWrapper} from "./styling/ContentWrapper.styled";


function App() {
    return (
        <AuthProvider>
            <GlobalStyle/>
            <ContentWrapper>
                {/*Content Wrapper kriegt flex direction Row*/}
                <Router>
                    <NavSideBar/>
                    <Switch>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <ProtectedRoute exact path="/newInquiry">
                            <CreateNewInquiry/>
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
            </ContentWrapper>
        </AuthProvider>
    );
}

export default App;

