import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Liam", age: 22 },
      { id: 2, name: "Marlena", age: 21 },
      { id: 3, name: "Tom", age: 22 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })

    
      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  deletePersonHandler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({persons});
  };

  render() {
    const style = {
      backgroundColor: 'red',
      color: 'white',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'salmon',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'green';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    } 
    
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, i'm a react app</h1>
          <p className={classes.join(' ')}>This is working.</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Switch me
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi there!'));
  }
}

export default Radium(App);
