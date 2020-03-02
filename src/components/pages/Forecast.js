import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Forecast(props) {

    const [cityCode, setCity] = useState(props.city);
    
    useEffect(() => {

        axios.get(`https://www.metaweather.com/api/location/${cityCode}`).then((res) => {
          console.log(res);
          
        }) //add catch error
        
      }, []);

    return(
        <div>
           <h1>Forecast</h1>
        </div>
    )
}

export default Forecast;