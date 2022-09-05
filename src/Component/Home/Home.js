import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Buscador from '../Buscador/Buscador';
import PopularSerie from '../Series/Popular Series/PopularSeries';
import Footer from '../Footer/Footer';


function Home(){

    return (
        <div>
            <Header/>
            <PopularSerie />
            <Footer/>
           {/*  <TopRatedMovies />
            <LatestMovies />
            <LatestSeries />
            <PopularSeries /> */}
        </div>
    )
}

export default Home;