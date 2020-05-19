import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Strong } from './styling/style';
function List(props) {
  
    return(
        <Item 
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
            value={props.value}
        >
            <h4 value={props.value}>{props.title}</h4>
            <p value={props.value}><Strong value={props.value}>Location Type: </Strong>{props.type}</p>
            <p value={props.value}><Strong value={props.value}>Coordinates: </Strong>{props.lattLong}</p>
        </Item>
    );
};

const Item = styled(motion.div)`
    background-color: #e6e6e6;
    margin: 5px auto;
    max-width: 400px;
    padding: 10px;
    border-radius: 5px;
    * {
        margin: 0;
    }
    h4 {
        font-size: 20px;
    }
    p {
        font-size: 15px;
        color: #00a8cc;
    }
    &:hover {
        cursor: pointer;
    }
`

export default List;