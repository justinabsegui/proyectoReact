import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./screens/Home/Home";
// import Loader from "./Component/Loader/Loader";
import Favoritos from "./screens/Favoritos/Favoritos";
import DetalleMovie from "./screens/DetalleMovie/DetalleMovie";
import VerTodoPopularMovies from "./Component/Movies/VerTodoPopularMovies/VerTodoPopularMovies";
import NotFound from "./screens/NotFound/NotFound";

import { Route, Switch } from 'react-router-dom'; //componente que me deja escribir rutas
import SearchResults from "./screens/SearchResults/SearchResults";
import VerTodoTopRatedMovies from "./Component/Movies/VerTodoTopRatedMovies/VerTodoTopRatedMovies";

function App() {
  return (
    <React.Fragment>
      <Header/>
      
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          
          <Route path='/Favoritos' exact={true} component={Favoritos} />

          <Route path='/TopRatedMovies' exact={true} component={VerTodoTopRatedMovies} />

          <Route path='/PopularMovies' exact={true} component={VerTodoPopularMovies} />

          <Route path='/search-results/:title' component={SearchResults} />

          <Route path='/movie/id/:id' component={DetalleMovie} />

          {<Route path='' component={NotFound} />}

        </Switch>
        <Footer />
      </main>

    </React.Fragment>
  );

}

export default App;