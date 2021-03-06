import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


import {Icon, Panel, Day, P, Strong} from './styling/style';

function Card(props) {
        //array daysOfWeek is used to generated day name from api applicable date
        const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    
        const weather = props.weather;
        var forecast = weather.map( day => {
            // getDay returns an index value that can be used to replace date with day name
            let date = new Date(day.applicable_date)
            let dayIndex = date.getDay();
            
            return <DayCard 
                    initial={{opacity: 0, y: 50}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                    key={date}>
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
};

const DayCard = styled(motion.div)`
    margin: 5px auto;
    @media (max-width: 650px) {
        margin: 5px auto;
        
    }
   
`


export default Card;