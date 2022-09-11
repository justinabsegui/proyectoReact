import React from 'react';
import TopRatedMovies from "./Component/Movies/Top Rated Movies/TopRatedMovies";
import LatestMovies from "./Component/Movies/Latest Movies/LatestMovies";


function Movies (){
    return(
        <React.Fragment>
            <h2> Movies </h2>
            <TopRatedMovies/>
            <LatestMovies/>
        </React.Fragment>
    )
}
export default Movies;