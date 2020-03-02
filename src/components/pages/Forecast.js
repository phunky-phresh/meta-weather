import React, {useState, useEffect} from 'react';
import axios from 'axios';

import WeatherCard from '../WeatherCard';
import {Body} from '../styling/style';


function Forecast(props) {

    const [cityCode, setCity] = useState(props.city);
    const [cityInfo, setInfo] = useState(null);
    const [cityWeather, setWeather] = useState(null);
    
    useEffect(() => {
      if (cityCode) {
        axios.get(`https://www.metaweather.com/api/location/${cityCode}`).then((res) => {
          console.log(res);
          const info = res.data;
          const weather = res.data.consolidated_weather;

          setInfo(info);
          setWeather(weather);
          
        }) //add catch error
      }
      }, []);


    if (!cityWeather) {
      return ''
    }
    return(
        <Body>
           <h1>{cityInfo.title} Forecast</h1>
           <WeatherCard
              weather={cityWeather}
           />
        </Body>
    )
}

export default Forecast;