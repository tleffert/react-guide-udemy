import React, { Component } from 'react';
import './Person.css'
import styled from 'styled-components';


const person = (props) => {

    const StyledDiv = styled.div`

        width: 60%;
        margin: auto;
        border: 1px solid #ccc;
        text-align: center;

        @media (min-width: 500px): {
            width: '450px'
        }
    `;

    const style = {
        // '@media (min-width: 500px)': {
        //     width: '450px'
        // }
    };

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name}! {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
        // <div className="Person" style={style}>
        //     <p onClick={props.click}>I'm {props.name}! {props.age} years old</p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.changed} value={props.name}/>
        // </div>
    );
}

export default person;
