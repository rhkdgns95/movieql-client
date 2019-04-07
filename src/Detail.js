import React from "react";
import {Query} from "react-apollo";
import {DETAILS_QUERY} from "./queries";

const Details = ({match: {params: {movieId}}}) => (
    <Query query={DETAILS_QUERY} variables={{id: parseInt(movieId)}}>
        {
            ({loading, error, data}) => {
                if(loading) return "Loading";
                if(error) return "Error";
                const {Movie: movie} = data;
                return (
                    <React.Fragment>
                        <img src={movie.medium_cover_image} />
                        <h1>{movie.title}</h1>
                        <div>{movie.description_intro}</div>
                    </React.Fragment>
                )
            }
        }
    </Query>
);

export default Details;