import React, { Component } from 'react';
import './App.css';
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Tom", age: 22 },
        { name: "Marlena", age: 21 },
        { name: event.target.value, age: 22 }
      ]
    });
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
      backgoundColor: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
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
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch me
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi there!'));
  }
}

export default App;
