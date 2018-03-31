import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        click={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (
        <div className={styles.App}>
          <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler} />
          {persons}
        </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi there!'));
  }
}

export default App;
