import React from 'react';
import PopularMovies from '../../Component/Movies/PopularMovies/PopularMovies';
import TopRatedMovies from '../../Component/Movies/TopRatedMovies/TopRatedMovies';


function Home(){

    return (
        <div>
          {  <TopRatedMovies />}
            <PopularMovies />
        </div>
    )
}

export default Home;