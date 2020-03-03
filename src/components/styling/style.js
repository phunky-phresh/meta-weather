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
    width: 100%;
    height: 30px;
    border-radius: 5px 0 0 5px;
    border-style: none;
    background-color: #e6e6e6;
    padding: 10px;
    @media (max-width: 400px) {
        width: 100%;
        font-size: 20px;
        height: 40px;
    }
`
export const Button = styled.input`
    border-style: none;
    height: 30px;
    border-radius: 0 5px 5px 0;
    background-color: #cfcfcf;
    color: #00a8cc;
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
export const DayCard = styled.div`
    margin: 5px auto;
    @media (max-width: 650px) {
        margin: 5px auto;
        
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
export const Item = styled.div`
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
`
export const Strong = styled.span`
    color: black;
    font-weight: bold;
`