import React from 'react';
import PopularMovies from '../Movies/Popular Movies/PopularMovies';
import TopRatedMovies from '../Movies/Top Rated Movies/TopRatedMovies';


function Home(){

    return (
        <div>
            <TopRatedMovies />
            <PopularMovies />
        </div>
    )
}

export default Home;