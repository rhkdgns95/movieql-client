import React from "react";
import {DETAILS_QUERY} from "./queries";
import {Query} from "react-apollo";
import styled from "styled-components";
import Movie from "./Movie";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-bottom: 50px;
`;

const Card = styled.div`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    background-color: white;
    border-radius: 7px;
`;

const Image = Card.withComponent("img");

const Title = styled.h1`
    font-size:24px;
    margin-bottom: 10px;
`;

const Paragraph = styled.span`
    margin-bottom: 10px;
    display: block;
    font-weight: ${props => (props.bold ? "600" : "400")}; 
`;

const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;
    margin-top: 50px;
`;

const Details = ({match: {params: {getId}}}) => (
    <Query query={DETAILS_QUERY} variables={{movieId: parseInt(getId)}}>
        {
            ({loading, error, data}) => {
                if(loading) return "loading..";
                if(error) return "error..";
                const {getMovie: movie} = data;
                return (
                    <React.Fragment>
                        <Container>
                            <Image src={movie.medium_cover_image}/>
                            <span>
                                <Title>{movie.title}</Title>
                                <Paragraph bold>Rating: {movie.rating}</Paragraph>
                                <Paragraph>{movie.description_intro}</Paragraph>
                            </span>
                        </Container>
                    </React.Fragment>
                )
            }
        }
    </Query>

)

export default Details;