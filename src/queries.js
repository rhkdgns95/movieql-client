 import gql from "graphql-tag";

export const HOME_QUERY = gql`
    {
        getMovies(limit:20, rating:9){
            title
            genres
            rating
            id
            medium_cover_image
        }
    }
`;

export const DETAILS_QUERY = gql`
    query getMovieDetails($movieId: Int!) {
        getMovie(id: $movieId) {
            id
            title
            medium_cover_image
            description_intro           
            rating
        }
    }
`;