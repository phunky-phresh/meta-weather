import React from 'react';

import {Form, Input, Button} from './styling/style';

function Search(props) {
        // console.log(props);
        
    return(
        <Form onSubmit={props.handleSearch} >
                
            <Input className="input" placeholder="Search Cities..." type="text" value={props.search} onChange={props.handleInput}></Input>
            <Button type="submit" value="Search"/>
        
        </Form>
    )
}

export default Search;