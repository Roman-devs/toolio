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
                    <ProtectedRoute exact path="/">
                        <InquiryOverview/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/newInquiry">
                        <CreateNewInquiry />
                    </ProtectedRoute>
                    <ProtectedRoute path="/inquiryDetails/:uuid">
                        <InquiryDetails/>
                    </ProtectedRoute>
                    <div>
                        <InquiryOverview/>
                    </div>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;

