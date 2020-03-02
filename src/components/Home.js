import React, {useState, useEffect} from 'react';

import axios from 'axios';

function Home() {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState(null);

    const _handleInput = (e) => {
        setSearch(e.target.value);
    }

    const _handleSearch = (e) => {
        e.preventDefault();

        axios.get(`https://www.metaweather.com/api/location/search/?query=${search}`).then( res => {
            console.log(res);
            setResults(res.data);
        })

    }
    if (results) {
        var cities = results.map( city => {
            return <li>{city.title}</li>
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