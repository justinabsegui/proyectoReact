import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./screens/Home/Home";
import Loader from "./Component/Loader/Loader";
import DetalleMovie from "./screens/DetalleMovie/DetalleMovie";
import Favoritos from "./Component/Favoritos/Favoritos";
import PopularMovies from "./Component/Movies/PopularMovies/PopularMovies";
import NotFound from "./screens/NotFound/NotFound";


// import NotFound from "./Component/Notfound/NotFound";

import { Route, Switch } from 'react-router-dom'; //componente que me deja escribir rutas
import SearchResults from "./screens/SearchResults/SearchResults";
import TopRatedMovies from "./Component/Movies/TopRatedMovies/TopRatedMovies";
import VerTodas from "./Component/VerTodas/VerTodas";
function App() {
  return (
    <React.Fragment>
      <Header/>
      
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          
          {<Route path='/Favoritos' component={Favoritos} />}

          <Route path='/TopRatedMovies' component={TopRatedMovies} />

          <Route path='/PopularMovies' component={PopularMovies} />

          <Route path='/search-results/:title' component={SearchResults} />

          <Route path='/movie/id/:id' component={DetalleMovie} />

         <Route path = '/VerTodas' component = {VerTodas} />

          {/* <Route path='/movie/id/:id' component={DetalleMovies} /> */}

          {<Route path='' component={NotFound} />}
        </Switch>
        <Footer />
      </main>

    </React.Fragment>
  );

}

export default App;