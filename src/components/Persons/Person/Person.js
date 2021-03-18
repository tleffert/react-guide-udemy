import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './Person.css'
import styled from 'styled-components';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass';


class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log("AKSDJF", this.props);
        return (
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name}! {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={this.inputElementRef}
                />
            </Fragment>
        );
    }


}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, 'Person');
