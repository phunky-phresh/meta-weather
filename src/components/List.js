import React from 'react';

import {Item, Strong} from './styling/style';
function List(props) {
    return(
        <Item value={props.value}>
            <h4 value={props.value}>{props.title}</h4>
            <p value={props.value}><Strong value={props.value}>Location Type: </Strong>{props.type}</p>
            <p value={props.value}><Strong value={props.value}>Coordinates: </Strong>{props.lattLong}</p>
        </Item>
    )
}

export default List;