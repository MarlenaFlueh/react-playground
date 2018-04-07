import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor.', props);
  };

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount.')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount.');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update Person.js] Inside componentWillReseiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update Person.js] Inside shouldComponentUpdate', nextProps, nextState);
    //return nextProps.persons !== this.props.persons;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update Person.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update Person.js] Inside componentDidUpdate');
  }
  
  render () {
    console.log('[Persons.js] Inside render.');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.click(index)}
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

  export default Persons;
