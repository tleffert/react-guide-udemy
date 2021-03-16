import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';


class App extends Component {

    state = {
        persons: [
            { id:'asdf', name: 'Trevor', age: 29},
            { id:'asdfasf', name: 'Dude', age: 45}
        ],
        showPersons: false
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
                <div>
                {this.state.persons.map((person, index) => {
                    return (
                        <Person
                          name={person.name}
                          age={person.age}
                          click={() => this.deletePersonHandler(index)}
                          changed={this.nameChangeHandler}
                          key={person.id}
                          changed={(event) => this.nameChangeHandler(event, person.id)}
                          />
                    );
                })}
              </div>
          );

          // style.backgroundColor = 'red'
          // style[':hover'] = {
          //     backgroundColor: 'salmon',
          //     color: 'black'
          // }

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
              <h1>HI I'M A REACT APP</h1>
              <p className={classes.join(' ')}>Stuff works</p>
              <button
                alt={this.state.showPersons}
                onClick={this.togglePersonsHandler}>
                    Switch Name
                </button>
              { persons }
            </div>
      );
    }
}

export default App;
