import React, {useState} from 'react';
import Home from './components/pages/Home';
import Forecast from './components/pages/Forecast';
import axios from 'axios';

import Search from './components/Search';

import {Wrapper} from './components/styling/style';
import './App.css';

function App() {

  const [cityCode, setCity] = useState(null);
  const [view, setView] = useState(null)
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);

  const _handleCity = (e) => {
    const woeid = e.target.getAttribute('value')
    setCity(woeid);
    setView('forecast')
  }
  const _handleInput = (e) => {
    setSearch(e.target.value);
  }
  // _handleSearch performs api query to find matching cities
  const _handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://www.metaweather.com/api/location/search/?query=${search}`).then( res => {
        setResults(res.data);      
    }).catch( err => {
      console.log(err);
      
    })
    setSearch('');
    setView(null);
}

//conditional rendering of Home page and Forecast page. is View state is null, Home page is rendered for search results
  if (!view) {
    return(
      <Wrapper>
        <Search 
          handleSearch={_handleSearch}
          handleInput={_handleInput}
          search={search}
        />
        <Home
          handleCity={_handleCity}
          results={results}
        />
      </Wrapper>
    )
  }
  // when view is not null, Forecast oage is rendered with cities weather information
  if (view) {
    return(
      <Wrapper>
        <Search 
          handleSearch={_handleSearch}
          handleInput={_handleInput}
          search={search}
        />
        <Forecast
          city={cityCode}
        />
      </Wrapper>
    )
  }
}

export default App;
