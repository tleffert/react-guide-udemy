import React, { Component, Fragment } from 'react';
import './Person.css'
import styled from 'styled-components';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass';


class Person extends Component {

    render() {
        console.log("AKSDJF", this.props);
        return (
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name}! {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Fragment>
        );
    }


}

export default withClass(Person, 'Person');
