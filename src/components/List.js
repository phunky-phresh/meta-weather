import React from 'react';

import {Item} from './styling/style';
function List(props) {
    return(
        <Item value={props.value}>
            <h4 value={props.value}>{props.title}</h4>
            <p value={props.value}>{props.type}</p>
            <p value={props.value}>Coordinates{props.lattLong}</p>
        </Item>
    )
}

export default List;