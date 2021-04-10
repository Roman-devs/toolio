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
import CreateOffer from "./pages/CreateOffer";
import MyInquiriyOverview from "./pages/MyInquiriyOverview";
import {ContentWrapper} from "./styling/ContentWrapper.styled";
import {GlobalWrapper} from "./styling/GlobalWrapper.styled";
import BurgerMenu from "./components/BurgerMenu";
import MyInquiryDetails from "./pages/MyInquiryDetails";


function App() {
    return (
        <AuthProvider>
            <GlobalStyle/>

            <GlobalWrapper>

                    {/*Content Wrapper kriegt flex direction Row*/}
                    <Router>
                        <BurgerMenu/>
                        <ContentWrapper>
                        <Switch>
                            <Route exact path="/login">
                                <Login/>
                            </Route>
                            <ProtectedRoute exact path="/newInquiry">
                                <CreateNewInquiry/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path="/myinquiries">
                                <MyInquiriyOverview/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path="/madeoffers">
                                {/*<MadeOfferOverview/> //TODO: Everything  */}
                            </ProtectedRoute>
                            <ProtectedRoute exact path="/inquiryDetails/:inquiryPartId">
                                <InquiryDetails/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path="/myinquiryDetails/:inquiryPartId">
                                <MyInquiryDetails/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path="/inquiryDetails/makeOffer/:inquiryPartId">
                                <CreateOffer/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path="/">
                                <InquiryOverview/>
                            </ProtectedRoute>
                        </Switch>
                        </ContentWrapper>
                    </Router>

            </GlobalWrapper>

        </AuthProvider>
    );
}

export default App;

