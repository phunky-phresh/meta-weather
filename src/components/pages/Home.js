import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import List from '../List';
import {Body} from '../styling/style';

function Home(props) {
 
    // map function to produce search results
    if (props.results) {
        let results = props.results
        var cities = results.map( city => {
            
            return <div 
                        onClick={props.handleCity} 
                        // to='/forecast' 
                        key={city.woeid}
                    >
                        <List 
                            onClick={props.handleCity} 
                            value={city.woeid}
                            title={city.title}
                            type={city.location_type}
                            lattLong={city.latt_long}
                        />
                    </div>
        })
    }
    return(
        <Body>          
            {cities}
        </Body>
    )
}

export default Home;