import React from "react";
import {MOVIE_DETAIL} from "./queries";
import {Query} from "react-apollo";

const Detail = ({match: {params: {movieId}}}) => (
    <Query query={MOVIE_DETAIL} variables={{movieId: parseInt(movieId)}} >
        {
            ({loading, data, error}) => {
                if(loading) return <span>Loading</span>
                if(error) return <span>error</span>
                const {getMovie: movie} = data;
                console.log(movie);
                return (
                    <React.Fragment>
                        <img src={movie.medium_cover_image}/>
                        <h2>{movie.title}</h2>
                    </React.Fragment>
                )
            }
        }
    </Query>   
);
export default Detail;















// import React from "react";
// import { MOVIE_DETAIL } from "./queries";
// import {Query} from "react-apollo";
// // import {withRouter} from "react-router-dom";



// // 이 Detail은 하나의 라우터(APp.js에서 ROuter태그안에서 불러옴) 안에있어서 인자값으로 파라 미터를 가지고올수있다.
// // 특이한건 Cache가 되어서 한번 Lodaing된건 다시 Loading하지 않는다는점이있다.

// const Detail = ({match: {params: {movieId}}}) => (
//     <Query query={MOVIE_DETAIL} variables={{movieId: parseInt(movieId)}}>
//         {
//             ({loading, error, data}) => {
//                 if(loading) return <span>Loading...</span>
//                 if(error) return <span>error</span> 
//                 const { getMovie: movie} = data;
//                 return (
//                     <React.Fragment>
//                         <div>
//                         <img src={movie.medium_cover_image}></img>
//                         <h2>{movie.title}</h2>
//                         <h4>{movie.genres}</h4>
//                         <p>{movie.description_intro}</p>
//                         </div>
//                     </React.Fragment>
//                 )
//             }
//         }
//     </Query>
// );








// // const Detail = ({
// //     match: {
// //         params: {movieId}
// //     }
// // }) => {
// //     console.log(movieId);
// //     return (
// //         <Query query={MOVIE_DETAIL} variables={{movieId: parseInt(movieId)}}>
// //         {
// //             // render prop function이다.
// //             ({loading, data, error}) => { 
// //                 if(loading) return <span>Loading....</span>;
// //                 if(error) return <span>error...</span>
// //                 return (
// //                     <React.Fragment>
// //                         {data.getMovie.title}
// //                         {data.getMovie.description_intro}
// //                         <img src={data.getMovie.medium_cover_image}></img>
// //                     </React.Fragment>
// //                 );
// //             }
// //         }
// //     </Query>);
// // };
// export default Detail;