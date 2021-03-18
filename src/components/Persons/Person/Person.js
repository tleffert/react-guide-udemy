import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './Person.css'
import styled from 'styled-components';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context'


class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log("AKSDJF", this.props);
        return (
            <Fragment>
                {this.context.authenticated ? (<p>Authenticated!</p>) : (<p>Please log in</p>) }
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
