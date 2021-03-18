import './App.css';
import React, { Component } from 'react';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit'

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
        showPersons: false
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

        this.setState({
            persons: persons
        })
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
            <div className="App">
              <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonsHandler}
              />
              { persons }
            </div>
      );
    }
}

export default App;
