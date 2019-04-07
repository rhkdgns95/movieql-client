import React from "react";
import AppPresenter from "./AppPresenter";
import {graphql} from "react-apollo";
import {IS_LOGGED_IN} from "./queries";
const AppContainer = ({data}) => {
    console.log(data);
    return <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
};

export default graphql(IS_LOGGED_IN)(AppContainer);