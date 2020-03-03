import React from 'react';


import List from '../List';
import {Body} from '../styling/style';

function Home(props) {
 
    // map function to produce search results
    if (props.results) {
        let results = props.results
        var cities = results.map( city => {
            
            return <div 
                        onClick={props.handleCity} 
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