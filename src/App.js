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

  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: "Tom", age: 22 },
          { name: "Marlena", age: 21 },
          { name: event.target.value, age: 22 }
        ]
      }
    );
  };

  render() {
    const style = {
      backgoundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        changed={this.nameChangeHandler} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangeHandler}>I'm cool!</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={() => this.switchNameHandler('Maxi')}
        changed={this.nameChangeHandler} />
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Maxi')}>Switch me</button>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi there!'));
  }
}

export default App;
