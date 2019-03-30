import ApolloClient from "apollo-boost";

// movieql의 서버를 입력하자.
const client = new ApolloClient({
    uri: "http://localhost:4000/"
});

export default client;