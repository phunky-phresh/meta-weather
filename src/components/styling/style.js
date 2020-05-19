import styled from 'styled-components';

//////////////
//Styled components for App.js and Search.Js
export const Wrapper = styled.div`
    height: 100%;
`
export const Title = styled.h1`
    margin: 0 auto;
    text-align: center;
`
export const Sub = styled.h3`
    margin: 0 auto;
    text-align: center;
    color: #00a8cc;
`
export const Body = styled.div`
    max-width: 800px;
    margin: 0 auto;
    @media (max-width: 400px) {
        padding: 0 10px;
    }
`
export const Form = styled.form`
    margin: auto;
    height: 100px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 400px) {
        width: 100%;
        padding: 0 10px;
    }
`
export const Input = styled.input`
    color: #a0a0a0;
    width: 100%;
    height: 30px;
    // border-radius: 5px 0 0 5px;
    border-style: none;
    // background-color: #a0a0a0;
    border-bottom: 1px solid #a0a0a0;
    padding: 10px;
    margin: 5px;
    @media (max-width: 400px) {
        width: 100%;
        font-size: 20px;
        height: 40px;
    }
    ::placeholder {
        color: #a0a0a0;
        font-size: 15px;
    }
    &:focus {
        outline: none;
    }
`
export const Button = styled.input`
    border-style: none;
    height: 30px;
    font-size: 15px;
    // border-radius: 5px;
    // background-color: #cfcfcf;
    color: #a0a0a0;
    &:hover {
        color: #00a8cc;

    }
    @media (max-width: 400px) {
        height: 40px;
        font-size: 20px;
    }
`
////////////////////
// Style components for weatherCard
export const Icon = styled.img`
    max-width: 80%;
`
export const Panel = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0 auto;
    @media (max-width: 650px) {
        flex-wrap: wrap;
        
    }
`

export const Day = styled.h4`
    color: #00a8cc;
    font-size: 20px;
`
export const P = styled.p`
    margin: 5px auto;
`
////////////////////////
// Styled components for List.js

export const Strong = styled.span`
    color: black;
    font-weight: bold;
`