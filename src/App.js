import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Liam", age: 22 },
      { name: "Marlena", age: 21 },
      { name: "Tom", age: 22 }
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Marlena", age: 21 },
        { name: "Tim", age: 22 }
      ]
    });
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
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
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
