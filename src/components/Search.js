import React from 'react';

import {Form, Input, Button, Title, Sub} from './styling/style';

function Search(props) {
        
    return(
        <div>
            <Title>World Weather</Title>
            <Sub>Powered by MetaWeather.com</Sub>
            <Form onSubmit={props.handleSearch} >
                
                <Input className="input" placeholder="Search Cities..." type="text" value={props.search} onChange={props.handleInput}></Input>
                <Button type="submit" value="Search"/>
            
            </Form>
        </div>
    )
}

export default Search;