import React from "react";
import { ApolloProvider } from "react-apollo";
import AppContainer from "./AppContainer";
import client from "./apolloClient";

const App = () => (
    <ApolloProvider client={client}>
        <AppContainer />
    </ApolloProvider>
);

export default App;