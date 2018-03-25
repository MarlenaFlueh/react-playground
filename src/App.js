import React, { Component } from 'react';
import styles from './App.css';
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

    let persons = null;
    let btnClass = '';

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
      btnClass = styles.Red;
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    } 
    
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <StyleRoot>
        <div className={styles.App}>
          <h1>Hi, i'm a react app</h1>
          <p className={classes.join(' ')}>This is working.</p>
          <button 
            className={btnClass}
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
