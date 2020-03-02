import React from 'react';


import {Icon, Panel, Day} from './styling/style';

function Card(props) {
    
        const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    
        const weather = props.weather;
        var forecast = weather.map( day => {
            let date = new Date(day.applicable_date)
            let dayIndex = date.getDay();
            return <Day key={date}>
                    <p>{daysOfWeek[dayIndex]}</p>
                    <Icon src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} />
                    <p>{day.weather_state_name}</p>
                    <p>min: {day.min_temp.toFixed(2)} </p>
                    <p>max: {day.max_temp.toFixed(2)} </p>
                    <p>humidity: {day.humidity}% </p>

                    </Day>
        })
        console.log(props);
  



    return(
        <Panel>
            
                {forecast}
            
        </Panel>
    )
}

export default Card;