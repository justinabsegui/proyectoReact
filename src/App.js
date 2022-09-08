import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import MovieCard from "./Component/Movies/MovieCard/MovieCard";
import TopRatedMovies from "./Component/Movies/Top Rated Movies/TopRatedMovies";
import LatestMovies from "./Component/Movies/Latest Movies/LatestMovies";
import SerieCard from "./Component/Series/SerieCard/SerieCard";

import PopularSerie from "./Component/Series/Popular Series/PopularSeries";
import NotFound from "./Component/Notfound/NotFound";

import { Route, Switch } from 'react-router-dom'; //componente que me deja escribir rutas

function App() {
  return (
    <React.Fragment>
      <Header/>
      
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          
          {/* <Route path='/Favoritos' component={Favoritos} /> */}

          {/* <Route path='/VerTodas' component={VerTodas} /> */}

          <Route path='/LatestMovies' component={LatestMovies} />

          {/* <Route path='/Movie/id/:id' component={DetalleMovies} /> */}

          {/* <Route path='/LatestSeries' component={LatestSeries} /> */}

          {/* <Route path='/Series/id/:id' component={DetalleSeries} /> */}

          <Route path='' component={NotFound} />
        </Switch>
        <Footer />
      </main>

    </React.Fragment>
  );

}

export default App;