import React from 'react';
import TopRatedMovies from "./Component/Movies/Top Rated Movies/TopRatedMovies";
import PopularMovies from '../../Component/Movies/Popular Movies/PopularMovies';


function Movies (){
    return(
        <React.Fragment>
            <h2> Movies </h2>
            <TopRatedMovies/>
            <PopularMovies/>
        </React.Fragment>
    )
}
export default Movies;