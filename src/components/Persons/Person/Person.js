import React, {Component} from 'react';
import styles from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor.', props);
  };

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount.')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount.');
  }

  render () {
    console.log('[Person.js] Inside render.');
    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}>{this.props.name} is {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
};

export default Person;
