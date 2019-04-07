import React from "react";
import {HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movie";
import Details from "./Detail";

const AppPresenter = ({isLoggedIn}) => {
    console.log("APPRPESNTRER");
    console.log(isLoggedIn);
    return isLoggedIn ? <LoggedIn /> : <LoggedOut />;
};

const LoggedIn = () => (
    <Router>
        <Switch>
            <Route path={"/"} exact={true} component={Movies}/>
            <Route path={"/details/:movieId"} component={Details}/>
            <Redirect from={"*"} to={"/"} />
        </Switch>
    </Router>
);
const LoggedOut = () => (
    <Router>
        <Switch>
            <Route path={"/"} exact={true} component={Home}/>
            <Redirect from={"*"} to={"/"}/>
        </Switch>
    </Router>
);

export default AppPresenter;