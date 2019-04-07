import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    clientState: {
        defaults: {
            auth: {
                __typename: "Auth",
                isLoggedIn: Boolean(localStorage.getItem("jwt"))
            }
        }
    },
    uri: "http://localhost:4000"
});

export default client;