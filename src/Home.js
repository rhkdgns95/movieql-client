import React from "react";
import {HOME_QUERY} from "./queries";
import {Query} from "react-apollo";
import styled  from "styled-components";
import Movie from "./Movie";
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;
`;
const Home = () => (
    <Container>
        <Query query={HOME_QUERY}>
            {
                ({loading, error, data}) => {
                    if(loading) return "loading";
                    if(error) return "error";
                    const {getMovies: movies} = data;
                    return (
                        movies.map((movie, key) => <Movie key={key} id={movie.id} title={movie.title} rating={movie.rating} poster={movie.medium_cover_image}></Movie>)
                    )
                }
            }          
        </Query>
    </Container>
);
export default Home;