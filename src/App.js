import React from 'react';
import Home from './components/Home';
import Forecast from './components/Forecast';
import { HashRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/Routes';


function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.FORECAST}>
        <Forecast />
      </Route>
    </Router>
  );
}

export default App;
