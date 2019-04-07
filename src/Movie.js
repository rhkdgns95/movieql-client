import React from "react";
import {Query} from "react-apollo";
import {MOVIE_QUERY} from "./queries";
import {Link} from "react-router-dom";
const Movies = () => (
    <Query query={MOVIE_QUERY}>
        {
            ({loading, error, data}) => {
                if(loading) return "Loading...";
                if(error) return "Error...";
                const {Movies: movies} = data;
                return movies.map((movie, key) => <Link key={key} to={`/details/${movie.id}`}><h1>{movie.title} / {movie.rating}</h1></Link>);
            }
        }
    </Query>
);

export default Movies;