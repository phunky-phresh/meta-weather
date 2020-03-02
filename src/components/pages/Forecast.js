import React, {useState, useEffect} from 'react';
import axios from 'axios';

import WeatherCard from '../WeatherCard';

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


    return(
        <div>
           <h1>Forecast</h1>
           <WeatherCard
              weather={cityWeather}
           />
        </div>
    )
}

export default Forecast;