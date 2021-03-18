import './App.css';
import React, { Component } from 'react';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit'

import withClass from './hoc/withClass';
import Aux from './hoc/Aux';


class App extends Component {

    constructor(props) {
        super();
        console.log("APPJS CONSTRUCT");
    }

    state = {
        persons: [
            { id:'asdf', name: 'Trevor', age: 29},
            { id:'asdfasf', name: 'Dude', age: 45}
        ],
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps", props, state);
        return state;
    }

    componentDidMount() {
        console.log("COMPONENT DID MOUNT");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[APP] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[APP] componentDidUpdate');
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 66}
            ]
        })
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((person) => {
            return person.id === id;
        });

        const person = {
            ...this.state.persons[personIndex],
            name: event.target.value
        };

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter+1
            }
        });
    }

    togglePersonsHandler = () => {
        console.log("SWITCH");

        const showPersons = this.state.showPersons;
        this.setState({
            showPersons: !showPersons
        });
    }

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons: persons
        });
    }



    render() {
        console.log("RENDER");
        const style = {
            backgroundColor: 'green',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightGreen',
                color: 'black'
            }
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
          );
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

      return (
        <Aux>
            <button onClick={() => this.setState({showCockpit: false})}>
                Remove Cockpit
            </button>
            {this.state.showCockpit ?
                <Cockpit
                  title={this.props.appTitle}
                  showPersons={this.state.showPersons}
                  personsLength={this.state.persons.length}
                  clicked={this.togglePersonsHandler}
                /> : null
            }
          { persons }
        </Aux>
      );
    }
}

export default withClass(App, 'App');
