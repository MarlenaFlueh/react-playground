import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Liam", age: 22 },
      { name: "Marlena", age: 21 },
      { name: "Tom", age: 22 }
    ]
  };

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          { name: newName, age: 29 },
          { name: "Marlena", age: 21 },
          { name: "Tim", age: 22 }
        ]
      }
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}>I'm cool!</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={() => this.switchNameHandler('Maxi')} />
        <button onClick={this.switchNameHandler.bind(this, 'Maxi')}>Switch me</button>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi there!'));
  }
}

export default App;
