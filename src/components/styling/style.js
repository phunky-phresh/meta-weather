import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background-color: lavender;
`
export const Body = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

export const Icon = styled.img`
    max-width: 100%;
`
export const Panel = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`
export const Day = styled.div`
    margin: 5px auto;
`

export const Form = styled.form`
    margin: auto;
    height: 100px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 5px 0 0 5px;
    border-style: none;
`

export const Button = styled.input`
    border-style: none;
    height: 30px;
    border-radius: 0 5px 5px 0;
    background-color: gray;
`
export const Item = styled.div`
    background-color: gray;
    margin: 5px 0;
    * {
        text-underline: none;
        color: white;
    }
`