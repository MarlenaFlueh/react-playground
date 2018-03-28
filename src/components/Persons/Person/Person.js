import React from 'react';
import styles from './Person.css';
import Radium from 'radium';

const person = (props) => {

  return (
    <div className={styles.Person}>
      <p onClick={props.click}>{props.name} is {props.age} years old.</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default Radium(person);
