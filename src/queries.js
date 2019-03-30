// graphQL tag는 우리가 프론트엔드에 graphQL을 작성하는 방법이다.
import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {
        getMovies(limit: 50, rating: 7) {
            id
            rating
            title
            genres
        }
    }
`;
// 기억할것!
// 오직 아폴로를 위한 형태이다. 쿼리에게 어떠한 매개변수를 줄것인지 알려줘야한다. 
// 그 매개변수는 영화클릭한 id가 된다.

export const MOVIE_DETAIL = gql`
    query getMovieDetails($movieId: Int!) {
        getMovie(id: $movieId) {
            id
            title
            rating
            medium_cover_image
            genres
            description_intro
        }
    }
`;