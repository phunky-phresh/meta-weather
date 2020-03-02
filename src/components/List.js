import React from 'react';

function List(props) {
    return(
        <div value={props.value}>
            <h4 value={props.value}>{props.title}</h4>
            <p value={props.value}>{props.type}</p>
            <p value={props.value}>Coordinates{props.lattLong}</p>
        </div>
    )
}

export default List;