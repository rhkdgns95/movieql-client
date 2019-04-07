import gql from "graphql-tag";

export const IS_LOGGED_IN = gql`
    {
        auth {
            isLoggedIn @client
        }    
    }
`;

export const DETAILS_QUERY = gql`
    query movieDetails($id: Int!) {
        Movie(id: $id){ 
            title
            description_intro
            medium_cover_image
        }
    }
`;

export const MOVIE_QUERY = gql`
    {
        Movies(limit:9, rating: 9) {
            id
            title
            rating
        }
    }
`;