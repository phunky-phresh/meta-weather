import React from 'react';

import {Form, Input, Button, Title, Sub} from './styling/style';

function Search(props) {
        
    return(
        <div>
            <Title>World Weather</Title>
            <Sub>Powered by MetaWeather.com</Sub>
            <Form onSubmit={props.handleSearch} >
                <label htmlFor="Search Input"></label>
                    <Input type='text' className="input" placeholder="Search Cities..." 
                    onfocus="this.placeholder=''" onblur="this.placeholder='Search Cities...'"
                    type="text" value={props.search} onChange={props.handleInput}></Input>
                
                <Button type="submit" value="Search"/>
            
            </Form>
        </div>
    )
}

export default Search;