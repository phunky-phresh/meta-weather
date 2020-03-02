import React, {useState} from 'react';
import Home from './components/pages/Home';
import Forecast from './components/pages/Forecast';
import { HashRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/Routes';


function App() {
  const [cityCode, setCity] = useState(null);

  const _handleCity = (e) => {
    const woeid = e.target.getAttribute('value')
    setCity(woeid);
  }
  
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home 
          handleCity={_handleCity}
        />
      </Route>
      <Route path={ROUTES.FORECAST}>
        <Forecast 
          city={cityCode}
        />
      </Route>
    </Router>
  );
}

export default App;
