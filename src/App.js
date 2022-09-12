import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./screens/Home/Home";
import PopularMovies from "./Component/Movies/PopularMovies/PopularMovies";

// import NotFound from "./Component/Notfound/NotFound";

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

          <Route path='/PopularMovies' component={PopularMovies} />

          {/* <Route path='/movie/id/:id' component={DetalleMovies} /> */}

          {/* <Route path='/LatestSeries' component={LatestSeries} /> */}

          {/* <Route path='/series/id/:id' component={DetalleSeries} /> */}

          {/* <Route path='' component={NotFound} /> */}
        </Switch>
        <Footer />
      </main>

    </React.Fragment>
  );

}

export default App;