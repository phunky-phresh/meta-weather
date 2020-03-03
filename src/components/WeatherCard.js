import React from 'react';


import {Icon, Panel, Day, DayCard, P, Strong} from './styling/style';

function Card(props) {
    
        const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    
        const weather = props.weather;
        var forecast = weather.map( day => {
            let date = new Date(day.applicable_date)
            let dayIndex = date.getDay();
            
            
            return <DayCard key={date}>
                    <Day>{daysOfWeek[dayIndex]}</Day>
                    <Icon src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} />
                    <P><Strong>{day.weather_state_name}</Strong></P>
                    <P>min: {day.min_temp.toFixed(2)}&#8451; </P>
                    <P>max: {day.max_temp.toFixed(2)} </P>
                    <P><Strong>Humidity </Strong></P>
                    <P>{day.humidity}% </P>
                    <P><Strong>Visibility </Strong></P>
                    <P>{day.visibility.toFixed(2)} miles </P>
                    <P><Strong>Predictability </Strong></P>
                    <P>{day.predictability}% </P>

                    </DayCard>
        })
  



    return(
        <Panel>
            
                {forecast}
            
        </Panel>
    )
}

export default Card;