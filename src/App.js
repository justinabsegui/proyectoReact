import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Movies from './Component/Movies/Movies';
import NotFound from "./Notfound/NotFound";
import { Route, Switch } from 'react-router-dom'; //componente que me deja escribir rutas

function App() {
  return (
    <React.Fragment>

      <Navbar />
      <h1>Movies</h1>
      <main>
        <Switch>
          <Route path='/movies' exact={true} component={Movies} />
          <Route path='' component={NotFound} />
        </Switch>

      </main>

    </React.Fragment>
  );
}

export default App;
