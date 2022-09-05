import React from 'react';
import TopRatedMovies from '../Movies/Top Rated Movies/TopRatedMovies';
import LatestMovies from "../Movies/Latest Movies/LatestMovies";
import PopularSeries from "../Series/Popular Series/PopularSeries";
import LatestSeries from "../Series/Latest Series/LatestSeries";
import Buscador from '../Buscador/Buscador';

function Home(){

    return (
        <div>
            <Buscador />
            <PopularSeries />
           {/*  <TopRatedMovies />
            <LatestMovies />
            <LatestSeries />
            <PopularSeries /> */}
        </div>
    )
}

export default Home;