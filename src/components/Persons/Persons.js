import React, { PureComponent } from 'react';

import Person from './Person/Person';


class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[PERSONS.JS] getDerivedStateFromProps', props, state);
    //     return state;
    // }
    //

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[PERSONS.JS] shouldComponentUpdate', nextProps, nextState);
    //
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[PERSONS.JS] getSnapshotBeforeUpdate', prevProps, prevState);
        return { message: 'SNAPSHOT' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[PERSONS.JS] componentDidUpdate', snapshot);

    }

    // use for cleanup stuff
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log("PERSONS.js RENDER", this.props);
        return this.props.persons.map((person, index) => {
                    return (
                        <Person
                          name={person.name}
                          age={person.age}
                          click={() => this.props.clicked(index)}
                          key={person.id}
                          changed={(event) => this.props.changed(event, person.id)}
                      />
                    );
                })


    }
}

export default Persons;
