import React, { Component } from 'react';
import './Person.css'
import styled from 'styled-components';


class Person extends Component {

    // StyledDiv = styled.div`
    //
    //     width: 60%;
    //     margin: auto;
    //     border: 1px solid #ccc;
    //     text-align: center;
    //
    //     @media (min-width: 500px): {
    //         width: '450px'
    //     }
    // `;

    style = {
        // '@media (min-width: 500px)': {
        //     width: '450px'
        // }
    };

    render() {
        console.log("AKSDJF", this.props);
        return (
            <div>
                <p onClick={this.props.click}>I'm {this.props.name}! {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }


}

export default Person;
