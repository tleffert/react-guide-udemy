import styles from './Cockpit.module.css';
import React, { useEffect } from 'react';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
    });

    const assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push('red');
    }

    if (props.persons.length <= 1) {
        assignedClasses.push('bold');
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Stuff works</p>
            <button
                alt={props.showPersons}
                onClick={props.clicked}>
                Switch Name
            </button>
        </div>
    );
};

export default Cockpit;
