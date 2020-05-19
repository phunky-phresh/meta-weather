import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactLoading from "react-loading";

import WeatherCard from '../WeatherCard';

import {Body, Title} from '../styling/style';


function Forecast(props) {
    
    const [cityCode, setCity] = useState(props.city);
    const [cityInfo, setInfo] = useState(null);
    const [cityWeather, setWeather] = useState(null);
    
    useEffect(() => {
      // once cityCode is passed, useEffect executes axios get request to fetch city data.
      if (cityCode) {
        axios.get(`https://www.metaweather.com/api/location/${cityCode}`).then((res) => {
          const info = res.data;
          const weather = res.data.consolidated_weather;
          
          setInfo(info);
          setWeather(weather);
          
        }).catch( err => {
          console.log(err);       
        })
      }
      }, []);


    if (!cityWeather) {
      // loading animation rendered until weather data has been fetched from api and is ready to render
      return(
        <ReactLoading style={{margin: '0 auto', maxWidth: '20%'}} type={"bars"} color={"black"} />
      )
    }
    return(
        <Body>
           <Title>{cityInfo.title} Forecast</Title>
           <WeatherCard
              weather={cityWeather}
           />
        </Body>
    )
}

export default Forecast;