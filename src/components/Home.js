import React, {useState, useEffect} from 'react';

import axios from 'axios';

function Home() {

    const [search, setSearch] = useState('');

    const _handleInput = (e) => {
        setSearch(e.target.value);
    }
    const _handleSearch = (e) => {
        e.preventDefault();

        axios.get(`https://www.metaweather.com/api/location/search/?query=${search}`).then( res => {
            console.log(res);
            
        })
    }

    return(
        <div>
            <form onSubmit={_handleSearch} >
                <input type="text" value={search} onChange={_handleInput}></input>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Home;