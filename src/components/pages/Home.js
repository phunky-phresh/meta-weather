import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import List from '../List';

function Home(props) {
    
    
    const [search, setSearch] = useState('');
    const [results, setResults] = useState(null);

    
    const _handleInput = (e) => {
        setSearch(e.target.value);
    }

    //get request to api based on user query
    const _handleSearch = (e) => {
        e.preventDefault();

        axios.get(`https://www.metaweather.com/api/location/search/?query=${search}`).then( res => {
            setResults(res.data);
            console.log(res.data);
            
        })
        //add catch error.
    }


    // map function to produce search results
    if (results) {
        var cities = results.map( city => {
            return <Link 
                        onClick={props.handleCity} 
                        to='/forecast' 
                        key={city.woeid}
                    >
                        <List 
                            value={city.woeid}
                            title={city.title}
                            type={city.location_type}
                            lattLong={city.latt_long}
                        />
                    </Link>
        })
    }
    return(
        <div>
            <form onSubmit={_handleSearch} >
                <input type="text" value={search} onChange={_handleInput}></input>
                <input type="submit" value="Search"/>
            </form>
           
                {cities}
          

        </div>
    )
}

export default Home;