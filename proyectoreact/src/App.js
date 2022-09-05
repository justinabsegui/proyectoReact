import React from "react";
import Navbar from "./Component/Navbar/Navbar";
<<<<<<< HEAD
import Movies from './Component/Movies/Movies';
import MovieCard from "./Component/MovieCard/MovieCard";
import Serie from "./Component/Series/Series";
=======
import TopRatedMovies from "./Component/Top Rated Movies/TopRatedMovies";
import LatestMovies from "./Component/Latest Movies/LatestMovies";
import Serie from "./Component/Popular Series/PopularSeries";
>>>>>>> 1ef38da0 (APIs series)
import NotFound from "./Component/Notfound/NotFound";
import { Route, Switch } from 'react-router-dom'; //componente que me deja escribir rutas

function App() {
  return (
    <React.Fragment>

      <Navbar />
      <h1>Movies</h1>
      <main>
        <Switch>
          <Route path='/movies' exact={true} component={TopRatedMovies} />
          <Route path='' component={NotFound} />
        </Switch>
      </main>

      <TopRatedMovies/>
      <LatestMovies />

    </React.Fragment>
  );
}

export default App;
