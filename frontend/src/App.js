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


function App() {
    return (
        <AuthProvider>
            <GlobalStyle/>
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <ProtectedRoute path="/newInquiry">
                        <CreateNewInquiry />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/inquiryDetails/:uuid">
                        <InquiryDetails/>
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

