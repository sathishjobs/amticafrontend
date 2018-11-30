import React from 'react';
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Home from "./components/home";
import PrivateRoute from "./components/privateRoute";

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

const RootWrapper = (props) => {
    return <Router>
        <div>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/" component={Home} />
        </div>
    </Router>
}


export default RootWrapper;
