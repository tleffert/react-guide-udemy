import styles from './Cockpit.module.css';
import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        toggleBtnRef.current.click();
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('saved data to cloud');
        }, 1000);

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    // note if you want to act like componentDidMount use empty array []
    // use nothing if you want to run for every update cycle
    }, [props.persons]);

    const assignedClasses = [];

    if (props.personsLength <= 2) {
        assignedClasses.push('red');
    }

    if (props.personsLength <= 1) {
        assignedClasses.push('bold');
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Stuff works</p>
            <button
                alt={props.showPersons}
                onClick={props.clicked}
                ref={toggleBtnRef}
            >
                Switch Name
            </button>
            <button
                onClick={authContext.login}
            >
                Log in
            </button>
        </div>
    );
};

export default React.memo(Cockpit);
