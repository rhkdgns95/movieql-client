// Apollo는 graphQL클라이언트에 관련된것
// react-Apollo는 리엑트에 연결하는 방법이다.
// 쿼리컴포넌트에서의 하나의 룰이있다.
// 바로 children 함수를 줘야한다는 것.(컴포넌트안에 함수를 넣는것.) 이함수는 반드시 컴포넌트를 리턴해야함.
import React from "react";
import {Query} from "react-apollo";
import {HOME_PAGE} from "./queries";

const Home = () => (
    <Query query={HOME_PAGE}>
        {// 태그안에서는 자바스크립트 코드 사용시 {}로 묶어야함.
            ({loading, data, error}) => {
                if(loading) return <span>Loading...</span>
                if(error) return <span>error...</span>
                const {getMovies: Movies} = data;
                const result = Movies.map((movie, key) => <div key={key}>{movie.title} / {movie.rating}</div>)
                console.log(Movies);
                return result;
            }
        }
    </Query>
);

export default Home;