import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
        })
        //add catch error.
    }


    // map function to produce search results
    if (results) {
        var cities = results.map( city => {
            return <Link onClick={props.handleCity} to='/forecast' key={city.woeid}><li value={city.woeid}>{city.title}</li></Link>
        })
    }
    return(
        <div>
            <form onSubmit={_handleSearch} >
                <input type="text" value={search} onChange={_handleInput}></input>
                <input type="submit" value="Search"/>
            </form>
            <ul>
                {cities}
            </ul>

        </div>
    )
}

export default Home;